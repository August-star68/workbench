from pathlib import Path

BASE_DIR = Path(__file__).resolve().parents[2]
DATA_DIR = BASE_DIR / "data"
UPLOAD_DIR = DATA_DIR / "uploads"
LOG_DIR = DATA_DIR / "logs"
DB_PATH = DATA_DIR / "packages.db"

for path in [DATA_DIR, UPLOAD_DIR, LOG_DIR]:
    path.mkdir(parents=True, exist_ok=True)
