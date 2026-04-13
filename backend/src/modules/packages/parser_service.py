from pathlib import Path
from typing import List, Tuple

import pandas as pd

from .models import BASE_REQUIRED_COLUMNS, PackageRecord


class PackageParserService:
    def parse_and_validate(self, path: Path) -> Tuple[List[PackageRecord], List[str]]:
        if path.suffix.lower() == ".csv":
            df = pd.read_csv(path)
        elif path.suffix.lower() in {".xlsx", ".xls"}:
            df = pd.read_excel(path)
        else:
            raise ValueError("Unsupported file type. Only csv/xlsx/xls are allowed.")

        missing = [col for col in BASE_REQUIRED_COLUMNS if col not in df.columns]
        if missing:
            raise ValueError(f"Missing required columns: {', '.join(missing)}")
        if "item_prices" not in df.columns and "price" not in df.columns:
            raise ValueError("Missing price source column. Provide item_prices or price")

        records: List[PackageRecord] = []
        errors: List[str] = []
        seen_ids = set()

        for index, row in df.iterrows():
            row_number = index + 2
            try:
                package_id = str(row["package_id"]).strip()
                package_name = str(row["package_name"]).strip()
                category = str(row["category"]).strip()
                description = str(row["description"]).strip()
                items_raw = str(row["items"]).strip()
                items = [item.strip() for item in items_raw.split(",") if item.strip()]
                item_prices = self._parse_item_prices(row)
                price = sum(item_prices) if item_prices else self._parse_package_price(row)

                if not package_id or not package_name or not category or not items:
                    raise ValueError("required field is empty")
                if item_prices and len(item_prices) != len(items):
                    raise ValueError("item_prices count must match items count")
                if price < 0:
                    raise ValueError("price cannot be negative")
                if package_id in seen_ids:
                    raise ValueError("duplicate package_id in file")

                seen_ids.add(package_id)
                records.append(
                    PackageRecord(
                        package_id=package_id,
                        package_name=package_name,
                        category=category,
                        price=price,
                        items=items,
                        description=description,
                    )
                )
            except Exception as exc:
                errors.append(f"row {row_number}: {exc}")

        return records, errors

    def _parse_item_prices(self, row) -> List[float]:
        raw = row.get("item_prices")
        if raw is None or str(raw).strip() in {"", "nan"}:
            return []
        values = [value.strip() for value in str(raw).split(",") if value.strip()]
        prices = [float(value) for value in values]
        if any(price < 0 for price in prices):
            raise ValueError("item_prices cannot contain negative numbers")
        return prices

    def _parse_package_price(self, row) -> float:
        if "price" not in row:
            raise ValueError("price is required when item_prices is empty")
        return float(row["price"])
