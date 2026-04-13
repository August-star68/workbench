import math
import re
from collections import Counter
from typing import Dict, List, Optional


class RecommendService:
    def _tokenize(self, text: str):
        return [token for token in re.split(r"[^\w]+", text.lower()) if token]

    def _cosine(self, a: Counter, b: Counter) -> float:
        if not a or not b:
            return 0.0
        dot = sum(a[t] * b[t] for t in a if t in b)
        norm_a = math.sqrt(sum(v * v for v in a.values()))
        norm_b = math.sqrt(sum(v * v for v in b.values()))
        if norm_a == 0 or norm_b == 0:
            return 0.0
        return dot / (norm_a * norm_b)

    def _price_score(self, price: float, price_min: Optional[float], price_max: Optional[float]):
        if price_min is None and price_max is None:
            return 1.0
        if price_min is not None and price < price_min:
            return max(0.0, 1 - (price_min - price) / max(price_min, 1))
        if price_max is not None and price > price_max:
            return max(0.0, 1 - (price - price_max) / max(price_max, 1))
        if price_min is not None and price_max is not None:
            mid = (price_min + price_max) / 2
            span = max((price_max - price_min) / 2, 1)
            return max(0.0, 1 - abs(price - mid) / span)
        return 1.0

    def _tier_to_range(self, tier: Optional[str]):
        if tier == "budget":
            return 0.0, 199.0
        if tier == "standard":
            return 200.0, 599.0
        if tier == "premium":
            return 600.0, None
        return None, None

    def recommend(self, candidates: List[Dict], categories: List[str], recommend_count: int, user_intent: Optional[str],
                  price_min: Optional[float], price_max: Optional[float], price_tier: Optional[str]):
        tier_min, tier_max = self._tier_to_range(price_tier)
        if price_min is None:
            price_min = tier_min
        if price_max is None:
            price_max = tier_max

        query_text = f"{' '.join(categories)} {user_intent or ''}".strip()
        query_vec = Counter(self._tokenize(query_text))
        category_set = {category.lower() for category in categories}

        scored = []
        for item in candidates:
            category_score = 1.0 if item[2].lower() in category_set else 0.0
            semantic_score = self._cosine(query_vec, Counter(self._tokenize(item[6])))
            price_score = self._price_score(item[3], price_min, price_max)
            final_score = 0.5 * semantic_score + 0.3 * price_score + 0.2 * category_score

            tags = []
            if category_score > 0.9:
                tags.append("category_match")
            if price_score > 0.7:
                tags.append("price_fit")
            if semantic_score > 0.25:
                tags.append("semantic_relevant")

            reason = (
                "该套餐属于目标品类，价格匹配度较高，且与需求语义相关。"
                if tags
                else "该套餐与条件有部分匹配。"
            )

            scored.append(
                {
                    "packageId": item[0],
                    "packageName": item[1],
                    "category": item[2],
                    "price": item[3],
                    "items": item[4].split(","),
                    "description": item[5],
                    "finalScore": round(final_score, 4),
                    "semanticScore": round(semantic_score, 4),
                    "priceScore": round(price_score, 4),
                    "categoryScore": round(category_score, 4),
                    "reasonTags": tags,
                    "reason": reason,
                }
            )

        scored.sort(key=lambda x: x["finalScore"], reverse=True)
        return scored[:recommend_count]
