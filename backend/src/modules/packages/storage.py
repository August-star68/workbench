import sqlite3
from pathlib import Path
from typing import List

from .models import PackageRecord


class PackageRepository:
    def __init__(self, db_path: Path):
        self.db_path = db_path
        self._init_db()

    def _connect(self):
        return sqlite3.connect(self.db_path)

    def _init_db(self) -> None:
        with self._connect() as conn:
            conn.execute(
                """
                CREATE TABLE IF NOT EXISTS packages (
                    package_id TEXT PRIMARY KEY,
                    package_name TEXT NOT NULL,
                    category TEXT NOT NULL,
                    price REAL NOT NULL,
                    items TEXT NOT NULL,
                    description TEXT NOT NULL,
                    embedding_text TEXT NOT NULL
                )
                """
            )

    def upsert_packages(self, records: List[PackageRecord]) -> None:
        with self._connect() as conn:
            conn.executemany(
                """
                INSERT INTO packages (
                    package_id, package_name, category, price, items, description, embedding_text
                ) VALUES (?, ?, ?, ?, ?, ?, ?)
                ON CONFLICT(package_id) DO UPDATE SET
                    package_name=excluded.package_name,
                    category=excluded.category,
                    price=excluded.price,
                    items=excluded.items,
                    description=excluded.description,
                    embedding_text=excluded.embedding_text
                """,
                [
                    (
                        r.package_id,
                        r.package_name,
                        r.category,
                        r.price,
                        ",".join(r.items),
                        r.description,
                        f"{r.package_name} {r.category} {' '.join(r.items)} {r.description}",
                    )
                    for r in records
                ],
            )

    def list_packages(self):
        with self._connect() as conn:
            rows = conn.execute(
                "SELECT package_id, package_name, category, price, items, description, embedding_text FROM packages"
            ).fetchall()
        return rows
