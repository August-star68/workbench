import threading
import uuid
from dataclasses import dataclass
from typing import Callable, Dict, List, Optional


@dataclass
class TaskState:
    status: str
    detail: str
    success_count: int = 0
    error_count: int = 0
    errors: Optional[List[str]] = None


class TaskManager:
    def __init__(self):
        self.tasks: Dict[str, TaskState] = {}

    def create(self) -> str:
        task_id = str(uuid.uuid4())
        self.tasks[task_id] = TaskState(status="processing", detail="task created")
        return task_id

    def update(self, task_id: str, state: TaskState) -> None:
        self.tasks[task_id] = state

    def get(self, task_id: str) -> Optional[TaskState]:
        return self.tasks.get(task_id)

    def run_async(self, task_id: str, fn: Callable[[], None]) -> None:
        thread = threading.Thread(target=fn, daemon=True)
        thread.start()
