const menuConfig = {
  sourcing: {
    title: "寻源定价",
    pages: [
      { id: "demand-pool", label: "需求池", desc: "统一承接 PR 与补货申请" },
      { id: "rfq-center", label: "询价中心", desc: "询价轮次、回标、比价决策" }
    ]
  },
  supplier: {
    title: "供应商协同",
    pages: [
      { id: "supplier-map", label: "供应商地图", desc: "分层看供方覆盖与替补能力" },
      { id: "supplier-score", label: "履约评分", desc: "质量、交付、价格综合评分" }
    ]
  },
  execution: {
    title: "采购执行",
    pages: [
      { id: "po-board", label: "订单看板", desc: "PO 状态、催交、变更闭环" },
      { id: "expedite-center", label: "催交中心", desc: "盯关键物料与停线风险" }
    ]
  },
  inbound: {
    title: "到货质检",
    pages: [
      { id: "receiving-dock", label: "到货排程", desc: "ASN、预约、收货排口" },
      { id: "inspection-center", label: "质检中心", desc: "IQC、让步接收、退货处置" }
    ]
  },
  settlement: {
    title: "对账结算",
    pages: [
      { id: "reconciliation-hub", label: "对账中心", desc: "三单匹配与差异冻结" },
      { id: "payment-plan", label: "付款计划", desc: "账期、票据、付款优先级" }
    ]
  },
  analysis: {
    title: "经营分析",
    pages: [
      { id: "spend-analysis", label: "采购支出", desc: "按品类、组织、供应商看 spend" },
      { id: "price-index", label: "价格指数", desc: "盯原材波动和降本成果" }
    ]
  }
};

const homeStats = [
  { label: "今日采购额", value: "¥ 186.4万", trend: "较昨日 +8.3%", trendClass: "up" },
  { label: "今日销售额", value: "¥ 241.7万", trend: "产销比 77.1%", trendClass: "up" },
  { label: "异常单量", value: "17", trend: "交期异常 9 单", trendClass: "down" },
  { label: "我的待办", value: "11", trend: "今日新增 6 项", trendClass: "warn" }
];

const homeInventoryAlert = {
  backlog: {
    title: "库存积压",
    value: "24",
    hint: "SKU 库龄偏高或可动销不足，占用资金",
    rows: [
      { name: "B-210 包材套件", detail: "华东主仓", meta: "库龄 112 天 · 12,400 套" },
      { name: "五金紧固件 M8", detail: "华南中心仓", meta: "周转 <0.3 次/季 · 8.6 万件" },
      { name: "辅料托盘衬板", detail: "华东", meta: "超最高库存线 18%" }
    ]
  },
  shortage: {
    title: "库存缺失",
    value: "11",
    hint: "低于安全库存或存在停线 / 欠料风险",
    rows: [
      { name: "注塑端盖", detail: "主供仓", meta: "低于安全库存 3 天用量" },
      { name: "出口标签（欧版）", detail: "外贸备货", meta: "在途未覆盖本周 SO" },
      { name: "模切胶膜 0.2T", detail: "线边", meta: "WO-9032 待料中" }
    ]
  }
};

const homeProductRankings = {
  salesTop10: [
    { rank: 1, name: "出口标签（欧版）", value: "28.6 万" },
    { rank: 2, name: "注塑端盖", value: "21.2 万" },
    { rank: 3, name: "B-210 包材套件", value: "18.9 万" },
    { rank: 4, name: "模切辅料", value: "14.1 万" },
    { rank: 5, name: "五金紧固件组合", value: "11.3 万" },
    { rank: 6, name: "出口箱贴套装", value: "9.8 万" },
    { rank: 7, name: "胶膜 0.18T", value: "8.4 万" },
    { rank: 8, name: "端子压接件", value: "7.1 万" },
    { rank: 9, name: "彩盒小号", value: "6.5 万" },
    { rank: 10, name: "隔板珍珠棉", value: "5.9 万" }
  ],
  complaintTop10: [
    { rank: 1, name: "注塑端盖", value: "7 起" },
    { rank: 2, name: "模切辅料", value: "5 起" },
    { rank: 3, name: "出口标签", value: "5 起" },
    { rank: 4, name: "包材彩盒", value: "4 起" },
    { rank: 5, name: "五金紧固件", value: "3 起" },
    { rank: 6, name: "端子件", value: "3 起" },
    { rank: 7, name: "胶带辅料", value: "2 起" },
    { rank: 8, name: "塑料托盘", value: "2 起" },
    { rank: 9, name: "珍珠棉衬垫", value: "2 起" },
    { rank: 10, name: "特种膜材", value: "1 起" }
  ]
};

const homeByModule = [
  {
    key: "product",
    name: "商品",
    todos: [
      { title: "新品物料建档", text: "SKU-8821 规格与图纸待采购确认后生效。", badge: "资料", tone: "warn" },
      { title: "价格失效复核", text: "3 个物料框架价将于明日到期，需提前续签或冻结下单。", badge: "价格", tone: "danger" }
    ],
    messages: [
      { time: "09:12", title: "主数据变更", text: "B-210 包材类目属性已调整，请关注对询价模板的影响。" }
    ]
  },
  {
    key: "contract",
    name: "合同",
    todos: [
      { title: "年度框架待签", text: "包材类 2026 年度框架协议法务已退回 1 处条款，待修订重提。", badge: "法务", tone: "warn" }
    ],
    messages: [
      { time: "08:40", title: "合同到期预警", text: "星海包装框架合同剩余 18 天，建议本周完成续签评审。" }
    ]
  },
  {
    key: "supplier",
    name: "供应商",
    todos: [
      { title: "准入资料补全", text: "东锐模切营业执照副本模糊，需重新上传后方能参与 RFQ。", badge: "准入", tone: "warn" },
      { title: "绩效整改回函", text: "凯联塑胶 3 月整改报告未提交，影响新品份额评估。", badge: "绩效", tone: "danger" }
    ],
    messages: [
      { time: "10:05", title: "供方状态变更", text: "恒拓五金已切换为「观察」状态，请控制新 PO 放量。" }
    ]
  },
  {
    key: "documents",
    name: "单据管理",
    todos: [
      { title: "PO 回签超时", text: "PO-540182 超 24 小时未回签，需电话确认交期。", badge: "采购单", tone: "danger" },
      { title: "交期变更确认", text: "PO-540169 供应商申请拆批，待仓库确认收货策略。", badge: "采购单", tone: "warn" },
      { title: "外协工单齐套", text: "WO-9032 模切工序缺 1 项辅料，需协调供应商补料或改期。", badge: "加工单", tone: "danger" },
      { title: "急单插单评审", text: "SO-7741 客户要求提前 2 天发运，需评估原料与产能。", badge: "订单", tone: "warn" }
    ],
    messages: [
      { time: "11:20", title: "批量到货提醒", text: "今日 14:00-16:00 与采购单关联到货 11 批，请关注卸货窗口。", tag: "采购单" },
      { time: "13:45", title: "加工进度", text: "WO-9018 已完工待质检，预计 16:00 可回传完工单。", tag: "加工单" },
      { time: "14:02", title: "交期承诺", text: "SO-7728 锁船期不变，请优先保障标签与彩盒。", tag: "订单" }
    ]
  },
  {
    key: "statement",
    name: "对账单",
    todos: [
      { title: "月结差异冻结", text: "星海包装 ST-2404-018 税率字段错误，待供应商重开票后解冻。", badge: "冻结", tone: "warn" },
      { title: "三单匹配失败", text: "凯联塑胶收货数量差 320 件，需仓库与供方共同确认。", badge: "差异", tone: "danger" }
    ],
    messages: [
      { time: "15:30", title: "对账截止", text: "本月对账窗口将于周五 18:00 关闭，请尽快处理冻结单。" }
    ]
  }
];

const modulePages = {
  "demand-pool": {
    kicker: "Demand Pool",
    title: "需求池",
    intro:
      "采购工作台不应该只看到已下单内容，更要先看到需求从哪里进来、是否完整、是不是紧急、会不会和当前库存或在途冲突。",
    facts: ["PR 自动归集", "库存联查", "紧急需求分级"],
    stats: [
      { label: "待确认 PR", value: "48", trend: "紧急 9 单", trendClass: "down" },
      { label: "缺字段需求", value: "7", trend: "需补交期或规格", trendClass: "down" },
      { label: "已转询价", value: "23", trend: "今日新增 6 单", trendClass: "up" },
      { label: "可直接转单", value: "14", trend: "已有框架价", trendClass: "up" }
    ],
    focus: [
      { badge: "优先级", tone: "danger", title: "先分是否影响生产", text: "把停线物料、替代件、例行补货三类需求拆开，避免所有 PR 都被同一节奏处理。" },
      { badge: "完整性", tone: "warn", title: "缺信息需求前置退回", text: "对未填交期、规格、需求部门的申请直接打回补录，不让后续询价和下单反复追问。" },
      { badge: "复用", tone: "success", title: "老物料优先套用框架价格", text: "已有供应商和协议价的需求不再走完整 RFQ 流程，采购员可以直接拉起 PO 草稿。" }
    ],
    boardTitle: "需求分流看板",
    board: [
      { title: "出口标签补量", text: "本周新增出口订单，标签需求需和库存合并判断是否直接转采购。", badge: "紧急", tone: "danger" },
      { title: "五金件常规补货", text: "已存在季度框架价，可直接进入订单草拟。", badge: "标准", tone: "success" },
      { title: "新物料试样", text: "需求规格不完整，建议先退回研发补齐材质要求。", badge: "待补资料", tone: "warn" },
      { title: "包材套件追加", text: "与现有在途存在交期冲突，需要先核查供应商剩余产能。", badge: "复核", tone: "warn" }
    ],
    listTitle: "处理规则",
    list: [
      { title: "自动带出库存", text: "PR 列表中直接展示现存库存、在途数量和安全库存，减少跨系统查数。", badge: "库存", tone: "success" },
      { title: "冻结重复需求", text: "同部门同物料 24 小时内重复提报时弹窗提醒，避免重复下单。", badge: "控制", tone: "warn" },
      { title: "需求老化提醒", text: "超过 8 小时未处理的紧急 PR 自动变红并推送给组长。", badge: "SLA", tone: "danger" },
      { title: "框架价命中", text: "命中框架价后显示建议供应商与价格区间。", badge: "建议", tone: "success" }
    ],
    tableCaption: "需求池样例",
    table: {
      columns: ["PR 单号", "物料", "需求部门", "交期", "状态"],
      rows: [
        ["PR-240407-18", "B-210 包材套件", "生产一部", "4月9日", "待审批"],
        ["PR-240407-22", "模切胶膜 0.2T", "研发试制", "4月12日", "待补规格"],
        ["PR-240407-25", "出口标签（欧版）", "外贸部", "4月10日", "已转询价"],
        ["PR-240407-31", "五金紧固件组合", "设备维护", "4月15日", "可直转 PO"]
      ]
    }
  },
  "rfq-center": {
    kicker: "RFQ Center",
    title: "询价中心",
    intro:
      "采购询价不只是发邮件和等报价，更重要的是看到轮次、回标率、差异点和决策理由，方便形成可复用的定价过程。",
    facts: ["轮次追踪", "比价结论留痕", "目标成本对比"],
    stats: [
      { label: "进行中 RFQ", value: "19", trend: "今日截止 7 个", trendClass: "down" },
      { label: "回标率", value: "81%", trend: "二轮回标偏慢", trendClass: "down" },
      { label: "可降本项目", value: "8", trend: "目标节约 4.6%", trendClass: "up" },
      { label: "已定点", value: "11", trend: "本周完成 3 个", trendClass: "up" }
    ],
    focus: [
      { badge: "轮次", tone: "success", title: "把一轮和二轮结果并列展示", text: "采购更容易判断供应商是否真的有降价意愿，而不是被单次报价误导。" },
      { badge: "价差", tone: "warn", title: "展示最低价与推荐价的差异原因", text: "例如模具费、付款条件、最小起订量等，让定点更可解释。" },
      { badge: "留痕", tone: "danger", title: "保留拒选原因", text: "例如产能不足、交付不稳、历史质量差，让后续审计和复盘都有依据。" }
    ],
    boardTitle: "询价决策看板",
    board: [
      { title: "模切外协 RFQ-219", text: "第二轮最低价来自东锐，但交付稳定性低于目标线。", badge: "待定点", tone: "warn" },
      { title: "出口箱贴 RFQ-227", text: "4 家供应商均已回标，推荐按年框架合作谈判。", badge: "可议价", tone: "success" },
      { title: "注塑端盖 RFQ-211", text: "两家回标超目标成本 6%，需重新拆 BOM 看成本项。", badge: "超预算", tone: "danger" },
      { title: "辅料通采 RFQ-208", text: "适合转成目录化采购，减少重复询价。", badge: "标准化", tone: "success" }
    ],
    listTitle: "采购动作",
    list: [
      { title: "询价模板统一", text: "邮件、平台、微信询价全部归档同一单据，避免分散。", badge: "模板", tone: "success" },
      { title: "目标成本对照", text: "在结果页同时展示预算价、历史价、当期最低价。", badge: "成本", tone: "warn" },
      { title: "回标催办", text: "距截止 2 小时未回标时自动提醒采购员致电催回。", badge: "提醒", tone: "danger" },
      { title: "准入校验", text: "新供应商未完成准入时，系统禁止直接中选。", badge: "合规", tone: "warn" }
    ],
    tableCaption: "询价项目跟踪",
    table: {
      columns: ["RFQ", "品类", "供应商数", "当前轮次", "结论"],
      rows: [
        ["RFQ-219", "模切外协", "5", "第二轮", "待评审"],
        ["RFQ-227", "出口标签", "4", "第一轮", "可定点"],
        ["RFQ-211", "注塑端盖", "3", "第二轮", "超目标价"],
        ["RFQ-208", "辅料通采", "6", "第一轮", "转目录采购"]
      ]
    }
  },
  "supplier-map": {
    kicker: "Supplier Map",
    title: "供应商地图",
    intro:
      "采购工作台里需要知道每个品类到底有没有替补、谁是核心供方、谁一旦出问题就会影响生产，而不是只看一个静态供应商名录。",
    facts: ["品类覆盖", "主备关系", "区域风险"],
    stats: [
      { label: "活跃供应商", value: "128", trend: "核心 23 家", trendClass: "up" },
      { label: "单一来源", value: "14", trend: "需补第二来源", trendClass: "down" },
      { label: "暂停合作", value: "6", trend: "质检问题为主", trendClass: "down" },
      { label: "新准入中", value: "9", trend: "本周新增 2 家", trendClass: "up" }
    ],
    focus: [
      { badge: "结构", tone: "success", title: "按品类看主备覆盖", text: "例如包材、五金、电子件分别展示核心、备选、开发中供应商数量。" },
      { badge: "区域", tone: "warn", title: "把区域集中度可视化", text: "同区域过度集中时，采购可提前识别物流、环保、政策带来的系统性风险。" },
      { badge: "替补", tone: "danger", title: "单一来源自动预警", text: "一旦某个品类只有 1 家合格供方，页面应直接标红，并给出补第二来源任务。" }
    ],
    boardTitle: "供方结构看板",
    board: [
      { title: "包材类供应商", text: "核心 6 家、备选 4 家，整体覆盖健康，但华南区域仍偏少。", badge: "健康", tone: "success" },
      { title: "电子辅件", text: "存在 3 个单一来源物料，需优先开发替补。", badge: "风险", tone: "danger" },
      { title: "外协加工", text: "华东供方充足，但夜班产能较弱，建议补充周末可交付资源。", badge: "产能", tone: "warn" },
      { title: "备件 MRO", text: "适合做目录采购，不需要每次单独寻源。", badge: "优化", tone: "success" }
    ],
    listTitle: "本周动作",
    list: [
      { title: "补第二来源", text: "注塑端盖、端子压接、特种膜材三类物料列入开发清单。", badge: "开发", tone: "danger" },
      { title: "区域均衡", text: "华南仓常用包材建议同步开发本地供方，压缩交付半径。", badge: "区域", tone: "warn" },
      { title: "黑名单联动", text: "被暂停合作的供应商在询价环节直接禁选。", badge: "控制", tone: "success" },
      { title: "准入进度", text: "新供方准入节点显示在同一页，采购能直接追法务和品质。", badge: "准入", tone: "success" }
    ],
    tableCaption: "核心供应商样例",
    table: {
      columns: ["供应商", "主供品类", "主备角色", "区域", "状态"],
      rows: [
        ["星海包装", "出口标签 / 彩盒", "主供", "苏州", "合作正常"],
        ["东锐模切", "模切外协", "备供", "昆山", "开发中"],
        ["凯联塑胶", "注塑端盖", "主供", "宁波", "单一来源"],
        ["恒拓五金", "紧固件", "主供", "东莞", "合作正常"]
      ]
    }
  },
  "supplier-score": {
    kicker: "Supplier Score",
    title: "履约评分",
    intro:
      "采购评供应商时不能只看价格。页面要把交付准时率、质量合格率、价格竞争力和协同响应放在一个评分模型里，方便定点和淘汰。",
    facts: ["价格 + 质量 + 交付", "月度评分", "整改闭环"],
    stats: [
      { label: "A级供应商", value: "22", trend: "占比 17%", trendClass: "up" },
      { label: "整改中", value: "13", trend: "交付偏差为主", trendClass: "down" },
      { label: "退货率", value: "1.8%", trend: "较上月下降", trendClass: "up" },
      { label: "准交率", value: "94.6%", trend: "目标 96%", trendClass: "down" }
    ],
    focus: [
      { badge: "交付", tone: "success", title: "把准交率放在首页高位", text: "采购实际每天最关心的是能不能按时到货，不只是期末评分。" },
      { badge: "质量", tone: "warn", title: "不合格批次可追到具体单据", text: "从评分卡直接下钻到 IQC 批次，方便快速追责和整改。" },
      { badge: "整改", tone: "danger", title: "问题供应商挂整改任务", text: "低于阈值的供应商不能只打低分，还要挂整改期限和责任采购员。" }
    ],
    boardTitle: "评分结果",
    board: [
      { title: "星海包装", text: "综合 92 分，价格稳定，响应最快，可继续扩品类合作。", badge: "A级", tone: "success" },
      { title: "凯联塑胶", text: "综合 78 分，交付波动大，建议限制新品导入。", badge: "整改", tone: "warn" },
      { title: "东锐模切", text: "综合 71 分，夜班交付和缺件问题需限期改善。", badge: "观察", tone: "danger" },
      { title: "恒拓五金", text: "综合 89 分，质量稳定，适合作为备份拉升采购份额。", badge: "良好", tone: "success" }
    ],
    listTitle: "整改任务",
    list: [
      { title: "交付整改会", text: "凯联塑胶本周需提交 4 月产能保障方案。", badge: "本周", tone: "warn" },
      { title: "质量复盘", text: "东锐模切连续两批毛边异常，需品质陪同复盘。", badge: "质量", tone: "danger" },
      { title: "份额调整", text: "恒拓五金拟从 18% 提升至 25%，降低主供集中度。", badge: "份额", tone: "success" },
      { title: "奖励机制", text: "A级供应商在紧急需求分配时可优先获得询价机会。", badge: "激励", tone: "success" }
    ],
    tableCaption: "本月评分清单",
    table: {
      columns: ["供应商", "交付", "质量", "价格", "综合"],
      rows: [
        ["星海包装", "96", "93", "88", "92"],
        ["凯联塑胶", "73", "84", "79", "78"],
        ["东锐模切", "69", "75", "81", "71"],
        ["恒拓五金", "91", "88", "87", "89"]
      ]
    }
  },
  "po-board": {
    kicker: "PO Board",
    title: "订单看板",
    intro:
      "采购下单之后，真正耗精力的是确认供应商回签、交期变更、数量差异和异常催交，所以订单页要把这些节点全部摊开。",
    facts: ["回签状态", "交期变更", "异常挂单"],
    stats: [
      { label: "在途 PO", value: "186", trend: "本周新增 42", trendClass: "up" },
      { label: "待回签", value: "17", trend: "超 24 小时 5 张", trendClass: "down" },
      { label: "交期变更", value: "9", trend: "影响生产 3 张", trendClass: "down" },
      { label: "已完成", value: "62", trend: "本周收货结案", trendClass: "up" }
    ],
    focus: [
      { badge: "执行", tone: "success", title: "订单页必须分状态泳道", text: "待回签、在生产、在途、延期、已到货几条泳道一眼能分开优先级。" },
      { badge: "差异", tone: "warn", title: "数量和交期变更集中显示", text: "采购最怕供应商口头改期，系统里看不到，所以这里要挂红点提醒。" },
      { badge: "闭环", tone: "danger", title: "异常要能挂责任人", text: "延迟、少交、错交都要标记责任采购员和下一次跟进时间。" }
    ],
    boardTitle: "订单执行看板",
    board: [
      { title: "PO-540182", text: "凯联塑胶已口头确认改到 4 月 11 日交货，待系统回签。", badge: "延期", tone: "danger" },
      { title: "PO-540176", text: "星海包装已回签，生产中，预计 4 月 9 日发货。", badge: "正常", tone: "success" },
      { title: "PO-540169", text: "东锐模切要求拆批发货，需仓库确认能否分批收货。", badge: "协同", tone: "warn" },
      { title: "PO-540151", text: "收货数量差异待仓库复核，已冻结后续对账。", badge: "差异", tone: "warn" }
    ],
    listTitle: "盯单动作",
    list: [
      { title: "回签老化", text: "待回签超过 24 小时的订单自动升级给组长。", badge: "规则", tone: "danger" },
      { title: "交期节点", text: "预计交期前两天自动提醒采购员做跟催。", badge: "提醒", tone: "success" },
      { title: "变更留痕", text: "所有改期改量必须带变更原因和供应商确认截图。", badge: "审计", tone: "warn" },
      { title: "关单标准", text: "到货、质检、对账都完成后才允许 PO 结案。", badge: "闭环", tone: "success" }
    ],
    tableCaption: "订单样例",
    table: {
      columns: ["PO", "供应商", "金额", "计划交期", "状态"],
      rows: [
        ["PO-540182", "凯联塑胶", "¥ 186,000", "4月11日", "延期待确认"],
        ["PO-540176", "星海包装", "¥ 92,400", "4月9日", "生产中"],
        ["PO-540169", "东锐模切", "¥ 63,200", "4月10日", "拆批协同"],
        ["PO-540151", "恒拓五金", "¥ 48,600", "4月8日", "到货差异"]
      ]
    }
  },
  "expedite-center": {
    kicker: "Expedite Center",
    title: "催交中心",
    intro:
      "真正高频的采购动作是盯关键单而不是浏览全部订单。催交中心需要把会影响生产、发货和项目节点的订单单独拉出来，支持一页推进。",
    facts: ["停线风险", "红黄灯交期", "供应商承诺追踪"],
    stats: [
      { label: "重点催交", value: "21", trend: "红灯 6 单", trendClass: "down" },
      { label: "停线风险", value: "3", trend: "24 小时内", trendClass: "down" },
      { label: "已追回交期", value: "8", trend: "今日新增 2 单", trendClass: "up" },
      { label: "供应商承诺达成", value: "87%", trend: "低于目标", trendClass: "down" }
    ],
    focus: [
      { badge: "风险", tone: "danger", title: "按影响程度排序", text: "先看停线，再看影响客户交期，最后才是普通补货。采购每天的精力应该被系统主动分配。" },
      { badge: "承诺", tone: "warn", title: "记录供应商每次承诺时间", text: "这样能知道哪些供应商经常反复承诺却无法兑现。" },
      { badge: "协同", tone: "success", title: "让生产和仓库同步看到催交结果", text: "采购更新交期后，相关部门无需反复问进度。" }
    ],
    boardTitle: "催交对象",
    board: [
      { title: "端盖注塑件", text: "若 4 月 8 日晚前不到仓，二线将出现停线风险。", badge: "红灯", tone: "danger" },
      { title: "出口箱贴", text: "客户发运节点锁死，供应商需确认明早加急发车。", badge: "项目单", tone: "warn" },
      { title: "五金备件", text: "普通补货，可接受后移一天到货。", badge: "黄灯", tone: "success" },
      { title: "模切辅料", text: "供应商已承诺今晚装车，等待上传发货单。", badge: "跟进中", tone: "success" }
    ],
    listTitle: "催交规则",
    list: [
      { title: "红灯定义", text: "24 小时内影响生产或客户发运的订单默认红灯。", badge: "规则", tone: "danger" },
      { title: "电话纪要", text: "催交结果应支持录入口头承诺与回传证据。", badge: "留痕", tone: "warn" },
      { title: "自动共享", text: "更新后的交期同步给 PMC、仓库、业务，不再手工转发。", badge: "协同", tone: "success" },
      { title: "升级路径", text: "两次催交无效可自动升级供应商经理或采购主管。", badge: "升级", tone: "warn" }
    ],
    tableCaption: "重点催交清单",
    table: {
      columns: ["物料", "供应商", "风险", "承诺交期", "下一动作"],
      rows: [
        ["端盖注塑件", "凯联塑胶", "停线风险", "4月8日 20:00", "确认装车截图"],
        ["出口箱贴", "星海包装", "客户交期", "4月8日 10:00", "安排早班发车"],
        ["模切辅料", "东锐模切", "工序待料", "4月7日 23:00", "追运单号"],
        ["五金备件", "恒拓五金", "一般补货", "4月9日", "维持观察"]
      ]
    }
  },
  "receiving-dock": {
    kicker: "Receiving Dock",
    title: "到货排程",
    intro:
      "采购不一定亲自收货，但需要知道今天什么时间会到、哪个仓口会堵、哪些单据还没预约，才能减少供应商乱到仓和仓库爆点。",
    facts: ["ASN 预约", "到仓时段", "差异预警"],
    stats: [
      { label: "今日到货批次", value: "34", trend: "高峰在下午", trendClass: "down" },
      { label: "未预约 ASN", value: "5", trend: "需尽快分配时段", trendClass: "down" },
      { label: "准时到仓率", value: "91%", trend: "较昨日 +4%", trendClass: "up" },
      { label: "异常到货", value: "4", trend: "2 批少货", trendClass: "down" }
    ],
    focus: [
      { badge: "排程", tone: "success", title: "把供应商预约到仓前置化", text: "供应商发货后直接预约到仓时间，仓库能提前分配收货节奏。" },
      { badge: "预警", tone: "warn", title: "到货前先看单据完整性", text: "未上传送货单、装箱明细的 ASN 在列表里直接提醒，减少现场补资料。" },
      { badge: "例外", tone: "danger", title: "迟到或早到都需要记录", text: "这类数据后续可以直接进入供应商履约评分。" }
    ],
    boardTitle: "到货节奏",
    board: [
      { title: "13:00-15:00 高峰", text: "共有 11 批次集中到仓，建议采购提醒供应商错峰。", badge: "高峰", tone: "warn" },
      { title: "未预约 ASN-8821", text: "凯联塑胶今晚发货，但还未预约收货时段。", badge: "缺预约", tone: "danger" },
      { title: "出口标签批次", text: "星海包装已上传装箱明细，可直接走快速收货。", badge: "顺畅", tone: "success" },
      { title: "模切外协批次", text: "因拆批到货，仓库需提前确认是否同单多次收货。", badge: "特殊", tone: "warn" }
    ],
    listTitle: "协同动作",
    list: [
      { title: "供应商预约入口", text: "让供应商在发货后直接自助选时段，采购只做审核。", badge: "入口", tone: "success" },
      { title: "仓口能力", text: "每个时段展示可承载批次数，超量时自动限流。", badge: "仓库", tone: "warn" },
      { title: "到货差异前置", text: "若供应商提前声明少货，系统先提醒采购与仓库。", badge: "差异", tone: "danger" },
      { title: "快速收货", text: "对标准包装和已校验 ASN 的批次走绿色通道。", badge: "效率", tone: "success" }
    ],
    tableCaption: "今日到货排程",
    table: {
      columns: ["时段", "ASN", "供应商", "仓口", "状态"],
      rows: [
        ["09:30", "ASN-8816", "星海包装", "A-03", "已预约"],
        ["13:15", "ASN-8821", "凯联塑胶", "待分配", "未预约"],
        ["14:10", "ASN-8824", "东锐模切", "B-02", "拆批到货"],
        ["16:00", "ASN-8830", "恒拓五金", "A-05", "正常"]
      ]
    }
  },
  "inspection-center": {
    kicker: "Inspection Center",
    title: "质检中心",
    intro:
      "采购会频繁被问一件事：为什么这批还没入库。质检中心应该直接显示待检、复判、退货和让步接收，让采购知道下一步该追谁。",
    facts: ["IQC 状态", "退货闭环", "让步接收审批"],
    stats: [
      { label: "待检批次", value: "17", trend: "加急 4 批", trendClass: "down" },
      { label: "不合格批次", value: "3", trend: "模切件 2 批", trendClass: "down" },
      { label: "让步接收", value: "2", trend: "待工程确认", trendClass: "warn" },
      { label: "退货处理中", value: "5", trend: "本周已关闭 6 批", trendClass: "up" }
    ],
    focus: [
      { badge: "状态", tone: "success", title: "先分待检、复判和退货", text: "采购每天最需要知道的是卡在哪一类，而不是只看一个总数。" },
      { badge: "责任", tone: "warn", title: "每个不合格批次挂责任动作", text: "采购负责追供应商，品质负责判定，工程负责确认让步接收条件。" },
      { badge: "影响", tone: "danger", title: "标记是否影响投产", text: "如果某批次卡着生产，页面需要直接红色提示，不让采购员自己去判断。" }
    ],
    boardTitle: "质检事件",
    board: [
      { title: "模切件批次 IQC-048", text: "边缘毛刺超标，已申请供应商复盘并暂停后续发货。", badge: "不合格", tone: "danger" },
      { title: "端盖批次 IQC-046", text: "尺寸轻微偏差，工程评估可让步接收。", badge: "待工程", tone: "warn" },
      { title: "五金件批次 IQC-042", text: "抽检通过，可直接转入上架流程。", badge: "通过", tone: "success" },
      { title: "标签批次 IQC-043", text: "外箱信息不规范，需供应商补发标签模板。", badge: "整改", tone: "warn" }
    ],
    listTitle: "闭环动作",
    list: [
      { title: "退货指令", text: "不合格批次在 4 小时内给出退货或返工指令。", badge: "SLA", tone: "danger" },
      { title: "让步审批", text: "让步接收需同时附工程意见和风险说明。", badge: "审批", tone: "warn" },
      { title: "供应商复盘", text: "重复问题供应商自动挂 8D 改善任务。", badge: "改善", tone: "success" },
      { title: "到货联动", text: "质检不合格自动冻结该批次对账。", badge: "联动", tone: "success" }
    ],
    tableCaption: "质检批次样例",
    table: {
      columns: ["批次", "物料", "结果", "影响", "下一动作"],
      rows: [
        ["IQC-048", "模切辅料", "不合格", "影响投产", "供应商复盘"],
        ["IQC-046", "注塑端盖", "待让步", "中", "工程确认"],
        ["IQC-043", "出口标签", "整改", "低", "补规范模板"],
        ["IQC-042", "五金件", "通过", "无", "转上架"]
      ]
    }
  },
  "reconciliation-hub": {
    kicker: "Reconciliation Hub",
    title: "对账中心",
    intro:
      "对账页面的核心不是财务展示，而是采购能否快速发现收货、价格、税率和退货差异，并知道差异归谁处理。",
    facts: ["三单匹配", "差异冻结", "月结清单"],
    stats: [
      { label: "待对账单", value: "27", trend: "冻结 6 单", trendClass: "down" },
      { label: "三单匹配率", value: "96%", trend: "目标 98%", trendClass: "down" },
      { label: "差异金额", value: "¥ 8.4万", trend: "价格差异为主", trendClass: "down" },
      { label: "已清账", value: "41", trend: "本周新增 14 单", trendClass: "up" }
    ],
    focus: [
      { badge: "匹配", tone: "success", title: "订单、收货、发票同屏", text: "采购不需要来回切页面，就能判断是数量差、价格差还是票据信息差。" },
      { badge: "冻结", tone: "warn", title: "有差异先冻结后付款", text: "差异单自动进入待处理区，避免带病流转到付款计划。" },
      { badge: "归责", tone: "danger", title: "明确差异责任人", text: "收货差归仓库、价格差归采购、票据差归供应商，减少扯皮。" }
    ],
    boardTitle: "差异看板",
    board: [
      { title: "星海包装 4 月月结", text: "数量已匹配，但税率字段错误，待供应商重开票。", badge: "票据差异", tone: "warn" },
      { title: "凯联塑胶 3 月月结", text: "收货数量与送货单差 320 件，已冻结。", badge: "数量差异", tone: "danger" },
      { title: "恒拓五金 4 月月结", text: "订单价格和发票一致，可直接转付款。", badge: "已匹配", tone: "success" },
      { title: "东锐模切 4 月月结", text: "返工退货尚未冲销，暂不允许结算。", badge: "退货未结", tone: "warn" }
    ],
    listTitle: "处理动作",
    list: [
      { title: "冻结规则", text: "任何一个匹配维度不通过时都自动打上冻结状态。", badge: "规则", tone: "success" },
      { title: "差异归责", text: "页面直接显示该联系采购、仓库还是供应商。", badge: "责任", tone: "warn" },
      { title: "超期提醒", text: "冻结超过 3 天的对账单升级至采购主管。", badge: "超期", tone: "danger" },
      { title: "月结视图", text: "按供应商、账期、组织快速切换查看待结金额。", badge: "视图", tone: "success" }
    ],
    tableCaption: "对账单样例",
    table: {
      columns: ["对账单", "供应商", "金额", "差异类型", "状态"],
      rows: [
        ["ST-2404-018", "星海包装", "¥ 124,300", "税率", "待重开票"],
        ["ST-2403-026", "凯联塑胶", "¥ 186,000", "收货数量", "冻结"],
        ["ST-2404-011", "恒拓五金", "¥ 48,600", "无", "可付款"],
        ["ST-2404-015", "东锐模切", "¥ 63,200", "退货未冲销", "待处理"]
      ]
    }
  },
  "payment-plan": {
    kicker: "Payment Plan",
    title: "付款计划",
    intro:
      "采购不直接打款，但一定要知道哪些供应商该优先付、哪些会因为发票或质检问题顺延，这样才能维护供方关系和保障供货。",
    facts: ["账期视角", "优先级排序", "风险付款提醒"],
    stats: [
      { label: "本周应付", value: "¥ 482万", trend: "重点 6 家", trendClass: "warn" },
      { label: "付款顺延", value: "9", trend: "缺票 4 单", trendClass: "down" },
      { label: "需保供供应商", value: "5", trend: "建议优先排款", trendClass: "up" },
      { label: "提前付款申请", value: "2", trend: "需主管审批", trendClass: "warn" }
    ],
    focus: [
      { badge: "优先级", tone: "success", title: "先保关键供应商", text: "对影响核心物料供货的供应商，付款计划要单独标识，避免因延付影响后续交付。" },
      { badge: "条件", tone: "warn", title: "把缺票与冻结原因写清楚", text: "采购能一眼判断是资料问题还是业务差异，而不是只看到一个顺延状态。" },
      { badge: "关系", tone: "danger", title: "兼顾现金与供应稳定", text: "对高依赖供应商的付款延期需要有风险说明和备选方案。" }
    ],
    boardTitle: "排款看板",
    board: [
      { title: "星海包装", text: "月结稳定，且承担出口急单，建议优先付款。", badge: "优先", tone: "success" },
      { title: "凯联塑胶", text: "对账冻结未解除，付款顺延。", badge: "冻结", tone: "danger" },
      { title: "东锐模切", text: "发票未齐，若本周不补将延至下轮排款。", badge: "缺票", tone: "warn" },
      { title: "恒拓五金", text: "常规账期内，可按周计划执行。", badge: "正常", tone: "success" }
    ],
    listTitle: "计划规则",
    list: [
      { title: "关键供方识别", text: "核心物料供应商在付款页单独置顶显示。", badge: "保供", tone: "success" },
      { title: "冻结联动", text: "对账、质检冻结的供应商自动不可排款。", badge: "联动", tone: "warn" },
      { title: "例外审批", text: "提前付款必须带采购说明和主管审批。", badge: "审批", tone: "danger" },
      { title: "付款预测", text: "展示未来两周现金流占用，便于采购预判谈判空间。", badge: "预测", tone: "success" }
    ],
    tableCaption: "付款计划样例",
    table: {
      columns: ["供应商", "应付金额", "账期", "付款建议", "状态"],
      rows: [
        ["星海包装", "¥ 124,300", "30 天", "本周优先", "待付款"],
        ["凯联塑胶", "¥ 186,000", "45 天", "冻结顺延", "对账未清"],
        ["东锐模切", "¥ 63,200", "30 天", "补票后排款", "缺票"],
        ["恒拓五金", "¥ 48,600", "30 天", "按计划执行", "正常"]
      ]
    }
  },
  "spend-analysis": {
    kicker: "Spend Analysis",
    title: "采购支出",
    intro:
      "采购经营分析的第一视角应该是钱花到哪里去了、集中在谁身上、哪些品类涨了、哪些组织能继续降本，而不是简单的付款汇总。",
    facts: ["品类 spend", "供应商集中度", "组织对比"],
    stats: [
      { label: "本月采购额", value: "¥ 1,286万", trend: "同比 +6.2%", trendClass: "warn" },
      { label: "Top10 供应商占比", value: "63%", trend: "集中度偏高", trendClass: "down" },
      { label: "框架采购占比", value: "58%", trend: "可继续提升", trendClass: "up" },
      { label: "可压缩支出", value: "¥ 96万", trend: "来自通用辅料", trendClass: "up" }
    ],
    focus: [
      { badge: "结构", tone: "success", title: "支出先看品类，再看供应商", text: "采购更容易识别哪些品类适合做框架价、目录采购或集中谈判。" },
      { badge: "集中", tone: "warn", title: "供应商集中度要醒目", text: "过高集中度意味着议价和保供都更被动，应该直接进入风险视角。" },
      { badge: "动作", tone: "danger", title: "分析后能挂到行动项", text: "例如包装辅料适合集中谈判，MRO 适合目录化，而不是只停留在图表。" }
    ],
    boardTitle: "分析结论",
    board: [
      { title: "包材 spend 增长", text: "出口业务拉动导致月度支出上升 12%，需做年度框架谈判。", badge: "重点", tone: "warn" },
      { title: "MRO 零散采购", text: "单笔金额小但单据多，适合做目录采购降事务成本。", badge: "优化", tone: "success" },
      { title: "注塑件集中度", text: "Top1 供应商占 72%，供方结构偏单薄。", badge: "风险", tone: "danger" },
      { title: "五金件降本", text: "通过合单采购，平均价格较去年下降 3.8%。", badge: "成果", tone: "success" }
    ],
    listTitle: "建议动作",
    list: [
      { title: "年度框架", text: "对包材和标签类重新谈年度量价折扣。", badge: "议价", tone: "warn" },
      { title: "目录采购", text: "把 MRO、辅料逐步转为标准目录。", badge: "标准化", tone: "success" },
      { title: "分散份额", text: "注塑件需将部分份额转给第二来源。", badge: "保供", tone: "danger" },
      { title: "组织对标", text: "对比各工厂采购均价，沉淀最佳实践。", badge: "对标", tone: "success" }
    ],
    tableCaption: "支出拆分样例",
    table: {
      columns: ["品类", "本月金额", "占比", "同比", "建议"],
      rows: [
        ["包材", "¥ 428万", "33%", "+12%", "年度框架"],
        ["注塑件", "¥ 316万", "25%", "+4%", "补第二来源"],
        ["五金件", "¥ 198万", "15%", "-3%", "继续合单"],
        ["MRO", "¥ 94万", "7%", "+9%", "转目录采购"]
      ]
    }
  },
  "price-index": {
    kicker: "Price Index",
    title: "价格指数",
    intro:
      "采购看价格不只是看单价，而是看同物料历史趋势、原材行情和目标成本偏差。这个页面更像采购的价格中控台。",
    facts: ["历史均价", "原材波动", "降本达成"],
    stats: [
      { label: "重点监控物料", value: "26", trend: "红灯 5 个", trendClass: "down" },
      { label: "月度降本达成", value: "72%", trend: "距目标差 8pt", trendClass: "warn" },
      { label: "原材上涨", value: "4 类", trend: "塑胶为主", trendClass: "down" },
      { label: "可回谈项目", value: "7", trend: "本周建议启动", trendClass: "up" }
    ],
    focus: [
      { badge: "趋势", tone: "success", title: "历史价趋势放在中心位置", text: "采购需要快速知道当前价格是高于还是低于近三个月均值。" },
      { badge: "外部", tone: "warn", title: "结合原材波动解释报价", text: "如塑胶、纸张、金属价格上涨时，可辅助判断供应商涨价是否合理。" },
      { badge: "动作", tone: "danger", title: "价格变化后有跟进动作", text: "涨价过快时提示重新询价，价格回落时提示重谈框架价。" }
    ],
    boardTitle: "价格监控",
    board: [
      { title: "注塑端盖", text: "单价较 3 月均价上浮 6.4%，主要受塑胶行情影响。", badge: "上涨", tone: "danger" },
      { title: "出口标签", text: "纸材价格回落，可推动下一轮谈价压缩 2%-3%。", badge: "可议价", tone: "success" },
      { title: "模切辅料", text: "近四周价格平稳，适合锁季度框架。", badge: "稳定", tone: "success" },
      { title: "紧固件", text: "市场价格微涨，但现有供应商报价涨幅高于市场。", badge: "复核", tone: "warn" }
    ],
    listTitle: "采购建议",
    list: [
      { title: "重谈框架", text: "对纸材类供应商发起二季度价格回顾。", badge: "议价", tone: "success" },
      { title: "风险说明", text: "塑胶类涨价需补充原材指数说明，避免无依据调价。", badge: "说明", tone: "warn" },
      { title: "异常涨幅", text: "高于市场均值 3pt 的报价自动标红。", badge: "预警", tone: "danger" },
      { title: "降本项目", text: "把回谈成功的项目自动归入降本成果池。", badge: "成果", tone: "success" }
    ],
    tableCaption: "价格指数样例",
    table: {
      columns: ["物料", "当前均价", "近三月均价", "波动", "建议"],
      rows: [
        ["注塑端盖", "¥ 3.42", "¥ 3.21", "+6.4%", "要求说明"],
        ["出口标签", "¥ 0.81", "¥ 0.86", "-5.8%", "启动回谈"],
        ["模切辅料", "¥ 1.26", "¥ 1.24", "+1.6%", "锁季度价"],
        ["紧固件", "¥ 0.47", "¥ 0.44", "+6.8%", "重新比价"]
      ]
    }
  }
};

const mainNavItems = Array.from(document.querySelectorAll(".main-nav-item"));
const subnavShell = document.getElementById("subnav-shell");
const subnav = document.getElementById("subnav");
const subnavTitle = document.getElementById("subnav-title");
const breadcrumb = document.getElementById("breadcrumb");
const pageContent = document.getElementById("page-content");

let activeMenu = "home";
let activePage = null;

function render() {
  const menu = menuConfig[activeMenu];

  mainNavItems.forEach((item) => {
    item.classList.toggle("active", item.dataset.menu === activeMenu);
  });

  if (activeMenu === "home") {
    activePage = null;
    subnavShell.hidden = true;
    subnavTitle.textContent = "工作台";
    subnav.innerHTML = "";
    breadcrumb.textContent = "工作台";
    pageContent.innerHTML = renderHomePage();
    return;
  }

  subnavShell.hidden = false;
  const currentPage = menu.pages.find((page) => page.id === activePage) ?? menu.pages[0];
  activePage = currentPage.id;

  subnavTitle.textContent = menu.title;
  subnav.innerHTML = menu.pages
    .map(
      (page) => `
        <button class="subnav-item ${page.id === activePage ? "active" : ""}" data-page="${page.id}" type="button">
          <strong>${page.label}</strong>
          <span>${page.desc}</span>
        </button>
      `
    )
    .join("");

  breadcrumb.textContent = `${menu.title} / ${currentPage.label}`;
  pageContent.innerHTML = renderModulePage(modulePages[activePage]);
}

function renderHomePage() {
  return `
    <section class="home-page">
      <section class="home-section home-section--compact home-kpi">
        <div class="panel-head">
          <h3>核心数据</h3>
          <span class="pill">今日</span>
        </div>
        <div class="stat-grid stat-grid--home">${renderMetricCards(homeStats)}</div>
      </section>

      <div class="home-row home-row--two">
        <section class="home-section home-section--compact home-col">
          <div class="panel-head">
            <h3>我的待办</h3>
            <span class="pill warn">按模块</span>
          </div>
          <div class="home-module-grid home-module-grid--dense">
            ${homeByModule.map((g) => renderHomeTodoBlock(g)).join("")}
          </div>
        </section>
        <section class="home-section home-section--compact home-col">
          <div class="panel-head">
            <h3>通知提醒</h3>
            <span class="pill">按模块</span>
          </div>
          <div class="home-module-grid home-module-grid--dense">
            ${homeByModule.map((g) => renderHomeMessageBlock(g)).join("")}
          </div>
        </section>
      </div>

      <div class="home-row home-row--two">
        <section class="home-section home-section--compact home-col home-analytics">
          <div class="panel-head">
            <h3>库存预警</h3>
            <span class="pill warn">资金与缺料</span>
          </div>
          ${renderHomeInventoryAlert()}
        </section>
        <section class="home-section home-section--compact home-col home-analytics">
          <div class="panel-head">
            <h3>商品统计</h3>
            <span class="pill">近 30 天</span>
          </div>
          ${renderHomeProductRankings()}
        </section>
      </div>
    </section>
  `;
}

function renderHomeInventoryAlert() {
  const { backlog, shortage } = homeInventoryAlert;
  return `
    <div class="home-split-grid">
      <article class="home-inv-card home-inv-card--warn">
        <div class="home-inv-head">
          <span class="home-inv-title">${backlog.title}</span>
          <strong class="home-inv-value">${backlog.value}</strong>
        </div>
        <p class="home-inv-hint">${backlog.hint}</p>
        <ul class="home-mini-list">
          ${backlog.rows
            .map(
              (r) => `
            <li>
              <span class="home-mini-name">${r.name}</span>
              <span class="home-mini-detail">${r.detail}</span>
              <span class="home-mini-meta">${r.meta}</span>
            </li>`
            )
            .join("")}
        </ul>
      </article>
      <article class="home-inv-card home-inv-card--danger">
        <div class="home-inv-head">
          <span class="home-inv-title">${shortage.title}</span>
          <strong class="home-inv-value">${shortage.value}</strong>
        </div>
        <p class="home-inv-hint">${shortage.hint}</p>
        <ul class="home-mini-list">
          ${shortage.rows
            .map(
              (r) => `
            <li>
              <span class="home-mini-name">${r.name}</span>
              <span class="home-mini-detail">${r.detail}</span>
              <span class="home-mini-meta">${r.meta}</span>
            </li>`
            )
            .join("")}
        </ul>
      </article>
    </div>
  `;
}

function renderHomeProductRankings() {
  const { salesTop10, complaintTop10 } = homeProductRankings;
  return `
    <div class="home-split-grid home-split-grid--rank">
      <article class="home-rank-panel">
        <div class="home-rank-head">
          <h4>销量 TOP10</h4>
          <span class="pill success">销售额</span>
        </div>
        <ol class="home-rank-list">
          ${salesTop10
            .map(
              (row) => `
            <li>
              <span class="home-rank-idx">${row.rank}</span>
              <span class="home-rank-name">${row.name}</span>
              <span class="home-rank-val">${row.value}</span>
            </li>`
            )
            .join("")}
        </ol>
      </article>
      <article class="home-rank-panel">
        <div class="home-rank-head">
          <h4>客诉 TOP10</h4>
          <span class="pill danger">件数</span>
        </div>
        <ol class="home-rank-list">
          ${complaintTop10
            .map(
              (row) => `
            <li>
              <span class="home-rank-idx">${row.rank}</span>
              <span class="home-rank-name">${row.name}</span>
              <span class="home-rank-val">${row.value}</span>
            </li>`
            )
            .join("")}
        </ol>
      </article>
    </div>
  `;
}

function renderHomeTodoBlock(group) {
  const count = group.todos.length;
  const items =
    group.todos.length === 0
      ? `<p class="home-empty">暂无待办</p>`
      : `<ul class="home-module-list">
          ${group.todos
            .map(
              (t) => `
            <li class="home-todo-item">
              <div class="home-item-head">
                <strong>${t.title}</strong>
                ${renderPill(t.badge, t.tone)}
              </div>
              <p>${t.text}</p>
            </li>`
            )
            .join("")}
        </ul>`;

  return `
    <article class="home-module-card">
      <div class="home-module-head">
        <span class="home-module-name">${group.name}</span>
        <span class="home-module-count" aria-label="待办数量">${count}</span>
      </div>
      ${items}
    </article>
  `;
}

function renderHomeMessageBlock(group) {
  const items =
    group.messages.length === 0
      ? `<p class="home-empty">暂无消息</p>`
      : `<ul class="home-msg-list">
          ${group.messages
            .map(
              (m) => `
            <li class="home-msg-item">
              <div class="home-msg-meta">
                <span class="home-msg-time">${m.time}</span>
                ${m.tag ? `<span class="home-msg-tag">${m.tag}</span>` : ""}
              </div>
              <strong>${m.title}</strong>
              <p>${m.text}</p>
            </li>`
            )
            .join("")}
        </ul>`;

  return `
    <article class="home-module-card home-module-card--msg">
      <div class="home-module-head">
        <span class="home-module-name">${group.name}</span>
      </div>
      ${items}
    </article>
  `;
}

function renderModulePage(page) {
  if (!page) {
    return `<section class="module-page"><div class="module-empty">页面数据未配置。</div></section>`;
  }

  return `
    <section class="module-page">
      <article class="module-hero">
        <p class="eyebrow">${page.kicker}</p>
        <h3>${page.title}</h3>
        <p>${page.intro}</p>
        <div class="module-callout">
          ${page.facts.map((fact) => renderPill(fact)).join("")}
        </div>
      </article>

      <section class="stat-grid">
        ${renderMetricCards(page.stats)}
      </section>

      <section class="module-grid">
        <article class="module-panel span-7">
          <div class="panel-head">
            <h3>当前关注</h3>
            <span class="pill">采购视角</span>
          </div>
          <div class="module-focus-grid">
            ${page.focus
              .map(
                (item) => `
                  <article class="module-focus-card">
                    ${renderPill(item.badge, item.tone)}
                    <strong>${item.title}</strong>
                    <p>${item.text}</p>
                  </article>
                `
              )
              .join("")}
          </div>
        </article>

        <article class="module-panel span-5">
          <div class="panel-head">
            <h3>${page.boardTitle}</h3>
            <span class="pill warn">执行中</span>
          </div>
          <div class="module-board">
            ${page.board
              .map(
                (item) => `
                  <div class="module-board-item">
                    <div class="module-board-copy">
                      <strong>${item.title}</strong>
                      <p>${item.text}</p>
                    </div>
                    ${renderPill(item.badge, item.tone)}
                  </div>
                `
              )
              .join("")}
          </div>
        </article>

        <article class="module-panel span-4">
          <div class="panel-head">
            <h3>${page.listTitle}</h3>
            <span class="pill success">可执行</span>
          </div>
          <div class="module-list">
            ${page.list
              .map(
                (item) => `
                  <div class="module-list-item">
                    <div class="module-list-copy">
                      <strong>${item.title}</strong>
                      <p>${item.text}</p>
                    </div>
                    ${renderPill(item.badge, item.tone)}
                  </div>
                `
              )
              .join("")}
          </div>
        </article>

        <article class="table-panel span-8">
          <p class="table-caption">${page.tableCaption}</p>
          ${renderTable(page.table)}
        </article>
      </section>
    </section>
  `;
}

function renderMetricCards(stats) {
  return stats
    .map(
      (item) => `
        <article class="kpi-card ${getMetricClass(item.label)}">
          <p class="metric-label">${item.label}</p>
          <strong>${item.value}</strong>
          <p class="kpi-trend ${item.trendClass || ""}">${item.trend}</p>
        </article>
      `
    )
    .join("");
}

function getMetricClass(label) {
  if (label === "今日采购额") {
    return "metric-emphasis metric-purchase";
  }
  if (label === "今日销售额") {
    return "metric-emphasis metric-sales";
  }
  if (label === "异常单量") {
    return "metric-emphasis metric-abnormal";
  }
  if (label === "我的待办") {
    return "metric-emphasis metric-todo";
  }
  return "";
}

function renderPill(text, tone = "") {
  return `<span class="pill ${tone}">${text}</span>`;
}

function renderTable(table) {
  return `
    <div class="table-wrap">
      <div class="table">
        <div class="table-header">
          ${table.columns.map((column) => `<div class="table-cell">${column}</div>`).join("")}
        </div>
        ${table.rows
          .map(
            (row) => `
              <div class="table-row">
                ${row
                  .map(
                    (cell) => `
                      <div class="table-cell">
                        <span class="table-cell-value">${cell}</span>
                      </div>
                    `
                  )
                  .join("")}
              </div>
            `
          )
          .join("")}
      </div>
    </div>
  `;
}

mainNavItems.forEach((item) => {
  item.addEventListener("click", () => {
    activeMenu = item.dataset.menu;
    if (activeMenu === "home") {
      activePage = null;
    } else {
      const menu = menuConfig[activeMenu];
      activePage = menu.pages.length ? menu.pages[0].id : null;
    }
    render();
  });
});

subnav.addEventListener("click", (event) => {
  const target = event.target.closest(".subnav-item");
  if (!target) {
    return;
  }

  activePage = target.dataset.page;
  render();
});

render();
