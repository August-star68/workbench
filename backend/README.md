# AI配品功能服务

## 启动

```bash
cd backend
python3 -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
uvicorn src.main:app --reload
```

## 上传文件模板

文件支持 `csv/xlsx`，必须包含以下字段：

- `package_id` 套餐ID（唯一）
- `package_name` 套餐名称
- `category` 商品品类
- `items` 套餐包含商品（逗号分隔）
- `item_prices` 套餐内商品售价（与 `items` 一一对应，逗号分隔）
- `description` 套餐描述

说明：
- 套餐价位由系统自动计算：`sum(item_prices)`。
- 若历史文件仍提供 `price` 字段，也可兼容导入，但优先建议使用 `item_prices`。

示例见 `templates/packages_template.csv`。

## API

- `POST /api/packages/upload` 上传配品文件（异步处理）
- `GET /api/packages/upload/{taskId}` 查看上传任务状态
- `POST /api/packages/query` 根据条件查询推荐

`POST /api/packages/query` 请求体示例：

```json
{
  "categories": ["3C数码", "办公用品"],
  "priceMin": 100,
  "priceMax": 600,
  "recommendCount": 3,
  "userIntent": "摄影和办公场景"
}
```

- `categories`：商品品类，支持多选。
- `recommendCount`：套餐数，即返回推荐结果数量。
