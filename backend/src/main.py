from pathlib import Path

from fastapi import FastAPI
from fastapi.responses import RedirectResponse
from fastapi.staticfiles import StaticFiles

from src.modules.packages.routes import router as packages_router

app = FastAPI(title="AI配品系统", version="1.0.0")
app.include_router(packages_router)
STATIC_DIR = Path(__file__).resolve().parent / "static"
app.mount("/static", StaticFiles(directory=str(STATIC_DIR)), name="static")


@app.get("/health")
def health():
    return {"status": "ok"}


@app.get("/")
def home():
    return RedirectResponse(url="/static/index.html")
