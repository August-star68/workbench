from enum import Enum
from typing import List, Optional

from pydantic import BaseModel, Field, field_validator


class PriceTier(str, Enum):
    budget = "budget"
    standard = "standard"
    premium = "premium"


class QueryPackagesDTO(BaseModel):
    categories: List[str] = Field(min_length=1, max_length=20)
    priceTier: Optional[PriceTier] = None
    priceMin: Optional[float] = Field(default=None, ge=0)
    priceMax: Optional[float] = Field(default=None, ge=0)
    recommendCount: int = Field(default=5, ge=1, le=20)
    userIntent: Optional[str] = Field(default=None, max_length=300)

    @field_validator("categories")
    @classmethod
    def validate_categories(cls, value: List[str]):
        cleaned = [item.strip() for item in value if item and item.strip()]
        if not cleaned:
            raise ValueError("categories must contain at least one category")
        return cleaned

    @field_validator("priceMax")
    @classmethod
    def validate_price_range(cls, value: Optional[float], values):
        price_min = values.data.get("priceMin")
        if value is not None and price_min is not None and value < price_min:
            raise ValueError("priceMax must be greater than or equal to priceMin")
        return value
