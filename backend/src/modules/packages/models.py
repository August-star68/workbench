from dataclasses import dataclass
from typing import List


@dataclass
class PackageRecord:
    package_id: str
    package_name: str
    category: str
    price: float
    items: List[str]
    description: str


BASE_REQUIRED_COLUMNS = [
    "package_id",
    "package_name",
    "category",
    "items",
    "description",
]
