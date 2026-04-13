import time
from dataclasses import dataclass
from typing import Any, Dict, Optional


@dataclass
class CacheItem:
    value: Any
    expire_at: float


class TTLCache:
    def __init__(self, ttl_seconds: int = 300):
        self.ttl_seconds = ttl_seconds
        self.store: Dict[str, CacheItem] = {}

    def get(self, key: str) -> Optional[Any]:
        item = self.store.get(key)
        if not item:
            return None
        if item.expire_at < time.time():
            self.store.pop(key, None)
            return None
        return item.value

    def set(self, key: str, value: Any) -> None:
        self.store[key] = CacheItem(value=value, expire_at=time.time() + self.ttl_seconds)
