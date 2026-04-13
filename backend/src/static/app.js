const fileInput = document.getElementById("fileInput");
const uploadBtn = document.getElementById("uploadBtn");
const uploadStatus = document.getElementById("uploadStatus");
const categoriesSelect = document.getElementById("categories");
const priceMinInput = document.getElementById("priceMin");
const priceMaxInput = document.getElementById("priceMax");
const recommendCountInput = document.getElementById("recommendCount");
const userIntentInput = document.getElementById("userIntent");
const queryBtn = document.getElementById("queryBtn");
const resultsBox = document.getElementById("results");

async function loadCategories() {
  const res = await fetch("/api/packages/categories");
  const data = await res.json();
  categoriesSelect.innerHTML = "";
  (data.categories || []).forEach((category) => {
    const option = document.createElement("option");
    option.value = category;
    option.textContent = category;
    categoriesSelect.appendChild(option);
  });
}

async function pollTask(taskId) {
  for (let i = 0; i < 30; i += 1) {
    const res = await fetch(`/api/packages/upload/${taskId}`);
    const data = await res.json();
    uploadStatus.textContent = `状态: ${data.status}，成功 ${data.successCount}，失败 ${data.errorCount}`;
    if (data.status !== "processing") {
      if (data.errors && data.errors.length > 0) {
        uploadStatus.textContent += `，错误: ${data.errors.join("; ")}`;
      }
      await loadCategories();
      return;
    }
    await new Promise((r) => setTimeout(r, 500));
  }
}

uploadBtn.addEventListener("click", async () => {
  const file = fileInput.files[0];
  if (!file) {
    uploadStatus.textContent = "请先选择文件";
    return;
  }
  const form = new FormData();
  form.append("file", file);
  uploadStatus.textContent = "上传中...";
  const res = await fetch("/api/packages/upload", { method: "POST", body: form });
  const data = await res.json();
  if (!res.ok) {
    uploadStatus.textContent = data.detail || "上传失败";
    return;
  }
  uploadStatus.textContent = `上传成功，任务ID: ${data.taskId}`;
  await pollTask(data.taskId);
});

queryBtn.addEventListener("click", async () => {
  const selectedCategories = Array.from(categoriesSelect.selectedOptions).map((opt) => opt.value);
  if (selectedCategories.length === 0) {
    alert("请至少选择一个商品品类");
    return;
  }

  const payload = {
    categories: selectedCategories,
    recommendCount: Number(recommendCountInput.value || 5),
    userIntent: userIntentInput.value || null,
  };

  if (priceMinInput.value !== "") payload.priceMin = Number(priceMinInput.value);
  if (priceMaxInput.value !== "") payload.priceMax = Number(priceMaxInput.value);

  const res = await fetch("/api/packages/query", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });
  const data = await res.json();

  if (!res.ok) {
    resultsBox.innerHTML = `<p>查询失败: ${data.detail || "unknown error"}</p>`;
    return;
  }

  const results = data.results || [];
  if (results.length === 0) {
    resultsBox.innerHTML = "<p>未命中推荐结果</p>";
    return;
  }

  resultsBox.innerHTML = results.map((item) => `
    <article class="card">
      <h3>${item.packageName}</h3>
      <div class="meta">
        <span>品类: ${item.category}</span>
        <span>套餐价位: ${item.price}</span>
        <span>总分: ${item.finalScore}</span>
      </div>
      <div class="scorebar"><span style="width:${Math.min(item.finalScore * 100, 100)}%"></span></div>
      <p>${item.description}</p>
      <p>商品: ${(item.items || []).join("、")}</p>
      <p>推荐理由: ${item.reason}</p>
      <div class="tags">${(item.reasonTags || []).map((tag) => `<span class="tag">${tag}</span>`).join("")}</div>
    </article>
  `).join("");
});

loadCategories();
