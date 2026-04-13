from pathlib import Path

from fastapi import APIRouter, File, HTTPException, Request, UploadFile

from src.core.config import DB_PATH, UPLOAD_DIR
from src.core.logging import setup_logger

from .cache import TTLCache
from .dto.query_packages_dto import QueryPackagesDTO
from .parser_service import PackageParserService
from .rate_limit import RateLimiter
from .recommend_service import RecommendService
from .storage import PackageRepository
from .task_manager import TaskManager, TaskState

router = APIRouter(prefix="/api/packages", tags=["packages"])
logger = setup_logger()
repository = PackageRepository(DB_PATH)
parser_service = PackageParserService()
recommend_service = RecommendService()
cache = TTLCache(ttl_seconds=300)
rate_limiter = RateLimiter(limit=120, window_seconds=60)
task_manager = TaskManager()


def _safe_filename(name: str) -> str:
    return "".join(ch for ch in name if ch.isalnum() or ch in {".", "_", "-"})


@router.post("/upload")
async def upload_packages(request: Request, file: UploadFile = File(...)):
    ext = Path(file.filename).suffix.lower()
    if ext not in {".csv", ".xlsx", ".xls"}:
        raise HTTPException(status_code=400, detail="Only csv/xlsx/xls are supported")

    task_id = task_manager.create()
    target = UPLOAD_DIR / f"{task_id}_{_safe_filename(file.filename)}"
    content = await file.read()
    if len(content) > 10 * 1024 * 1024:
        raise HTTPException(status_code=413, detail="File too large. Max size is 10MB")
    target.write_bytes(content)

    user = request.headers.get("x-user", "anonymous")
    logger.info("upload_received | user=%s | task_id=%s | file=%s", user, task_id, file.filename)

    def process():
        try:
            records, errors = parser_service.parse_and_validate(target)
            repository.upsert_packages(records)
            state = TaskState(
                status="completed",
                detail="upload processed",
                success_count=len(records),
                error_count=len(errors),
                errors=errors[:100],
            )
            task_manager.update(task_id, state)
            logger.info(
                "upload_completed | user=%s | task_id=%s | success=%s | errors=%s",
                user,
                task_id,
                len(records),
                len(errors),
            )
        except Exception as exc:
            task_manager.update(task_id, TaskState(status="failed", detail=str(exc)))
            logger.exception("upload_failed | user=%s | task_id=%s", user, task_id)

    task_manager.run_async(task_id, process)

    return {"taskId": task_id, "status": "processing", "message": "upload accepted"}


@router.get("/upload/{task_id}")
def get_upload_status(task_id: str):
    task = task_manager.get(task_id)
    if not task:
        raise HTTPException(status_code=404, detail="task not found")
    return {
        "taskId": task_id,
        "status": task.status,
        "detail": task.detail,
        "successCount": task.success_count,
        "errorCount": task.error_count,
        "errors": task.errors or [],
    }


@router.get("/categories")
def list_categories():
    all_packages = repository.list_packages()
    categories = sorted({row[2] for row in all_packages})
    return {"categories": categories}


@router.post("/query")
def query_packages(request: Request, payload: QueryPackagesDTO):
    client_id = request.client.host if request.client else "unknown"
    if not rate_limiter.allow(client_id):
        raise HTTPException(status_code=429, detail="Too many requests")

    key = f"{payload.model_dump_json()}"
    cached = cache.get(key)
    if cached:
        logger.info("query_cache_hit | categories=%s | recommend_count=%s", payload.categories, payload.recommendCount)
        return {"fromCache": True, "results": cached}

    all_packages = repository.list_packages()
    category_set = {category.lower() for category in payload.categories}
    candidates = [row for row in all_packages if row[2].lower() in category_set]

    if payload.priceMin is not None:
        candidates = [row for row in candidates if row[3] >= payload.priceMin]
    if payload.priceMax is not None:
        candidates = [row for row in candidates if row[3] <= payload.priceMax]

    results = recommend_service.recommend(
        candidates=candidates,
        categories=payload.categories,
        recommend_count=payload.recommendCount,
        user_intent=payload.userIntent,
        price_min=payload.priceMin,
        price_max=payload.priceMax,
        price_tier=payload.priceTier.value if payload.priceTier else None,
    )

    cache.set(key, results)
    logger.info(
        "query_executed | categories=%s | recommend_count=%s | result_count=%s",
        payload.categories,
        payload.recommendCount,
        len(results),
    )
    return {"fromCache": False, "results": results}
