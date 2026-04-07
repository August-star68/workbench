const menuConfig = {
  home: {
    title: "工作台",
    pages: [
      { id: "home-dashboard", label: "总览", desc: "核心数据、待办、通知、库存与商品统计" },
      { id: "home-tasks", label: "任务中心", desc: "跨模块待办聚合" },
      { id: "home-notify", label: "消息中心", desc: "通知公告与订阅" }
    ]
  },
  market: {
    title: "市场动态",
    pages: [{ id: "market-dynamics", label: "市场动态", desc: "按标签查看并自定义市场资讯" }]
  },
  foundation: {
    title: "基础信息",
    pages: [
      { id: "module-biz-flow", label: "业务流程图", desc: "主数据与参数配置路径" },
      { id: "org-master", label: "组织与地点", desc: "公司、工厂、仓库、配送点" },
      { id: "currency-tax", label: "币种与税码", desc: "汇率、税别、开票信息" },
      { id: "uom-encoding", label: "计量与编码", desc: "单位换算、物料编码规则" },
      { id: "system-params", label: "系统参数", desc: "审批流、编号器、集成接口" }
    ]
  },
  product: {
    title: "商品管理",
    pages: [
      { id: "module-biz-flow", label: "业务流程图", desc: "商品主数据与价格体系" },
      { id: "material-master", label: "物料主数据", desc: "属性、图纸、替代料" },
      { id: "category-attr", label: "品类与属性", desc: "类目、特征、模板" },
      { id: "bom-formula", label: "BOM/配方", desc: "多层 BOM、版本与工程变更" },
      { id: "price-list", label: "价格主数据", desc: "目录价、阶梯价、区域价" }
    ]
  },
  supplier: {
    title: "供应商管理",
    pages: [
      { id: "module-biz-flow", label: "业务流程图", desc: "准入、档案与绩效" },
      { id: "supplier-admission", label: "准入与考察", desc: "注册、资质、现场审核" },
      { id: "supplier-map", label: "供应商档案", desc: "主数据、联系人、银行" },
      { id: "supplier-score", label: "绩效与评分", desc: "交付、质量、价格维度" },
      { id: "supplier-risk", label: "风险与黑名单", desc: "冻结、淘汰、关联关系" }
    ]
  },
  procurement: {
    title: "采购管理",
    pages: [
      { id: "module-biz-flow", label: "业务流程图", desc: "请购到入库全链路" },
      { id: "demand-pool", label: "请购与需求", desc: "PR、补货、MRP 建议" },
      { id: "po-board", label: "采购订单", desc: "PO、变更、回签与版本" },
      { id: "expedite-center", label: "催交协同", desc: "关键料、停线与承诺" },
      { id: "receiving-dock", label: "到货与收货", desc: "ASN、预约、收货过账" },
      { id: "inspection-center", label: "质检与入库", desc: "IQC、让步、退货" },
      { id: "subcontract", label: "委外加工", desc: "外协工单、工序协同" }
    ]
  },
  bidding: {
    title: "竞价平台",
    pages: [
      { id: "module-biz-flow", label: "业务流程图", desc: "询价、竞价与定标" },
      { id: "inquiry-publish", label: "询价发标", desc: "RFI/RFQ、标书与附件" },
      { id: "bidding-hall", label: "竞价大厅", desc: "实时报价、多轮次" },
      { id: "award-contract", label: "定标与授标", desc: "比价结论、合同触发" },
      { id: "rfq-center", label: "询价项目库", desc: "历史轮次、模板复用" }
    ]
  },
  sales: {
    title: "销售管理",
    pages: [
      { id: "module-biz-flow", label: "业务流程图", desc: "订单到回款协同" },
      { id: "so-center", label: "销售订单", desc: "SO、锁库、交期承诺" },
      { id: "allocation", label: "分货与配货", desc: "渠道分货、门店要货" },
      { id: "channel-customer", label: "客户与渠道", desc: "价目、信用、返利" },
      { id: "return-claim", label: "退货与索赔", desc: "RMA、理赔、冲销" }
    ]
  },
  settlement: {
    title: "对账结算",
    pages: [
      { id: "module-biz-flow", label: "业务流程图", desc: "三单匹配与付款" },
      { id: "reconciliation-hub", label: "对账中心", desc: "差异、冻结与协同" },
      { id: "invoice-tax", label: "发票与税务", desc: "收票、认证、税率校验" },
      { id: "payment-plan", label: "付款计划", desc: "账期、排程、保供优先" },
      { id: "fund-cash", label: "资金计划", desc: "现金流预测与占用" }
    ]
  },
  analysis: {
    title: "数据统计",
    pages: [
      { id: "module-biz-flow", label: "业务流程图", desc: "指标到行动闭环" },
      { id: "spend-analysis", label: "采购支出分析", desc: "品类、组织、供应商" },
      { id: "inventory-turnover", label: "库存与周转", desc: "库龄、呆滞、缺料" },
      { id: "supplier-analytics", label: "供应商分析", desc: "集中度、绩效趋势" },
      { id: "price-index", label: "价格指数", desc: "行情、波动与降本" },
      { id: "custom-report", label: "自定义报表", desc: "拖拽、订阅与推送" }
    ]
  }
};

const fishboneFlow = [
  {
    stage: "需求与主数据",
    module: "商品 · 计划",
    top: ["PR / 补货申请", "需求池归集与分派", "物料与价格主数据维护"],
    bottom: ["库存与在途联查", "替代料与 BOM 变更联动", "紧急需求分级与 SLA"]
  },
  {
    stage: "寻源与定价",
    module: "寻源定价",
    top: ["询价发标与回标催收", "多轮比价与议价留痕", "定点 / 核价与目标成本对标"],
    bottom: ["框架价与目录价", "新品生鲜报价模板", "行情与价格指数引用"]
  },
  {
    stage: "供应商与合同",
    module: "供应商协同",
    top: ["供应商准入与资质", "供应商地图与主备覆盖", "履约评分与整改任务"],
    bottom: ["框架协议与保密条款", "合同签署与归档", "黑名单 / 观察名单联动寻源"]
  },
  {
    stage: "采购执行",
    module: "采购执行",
    top: ["采购单（PO）下达与回签", "订单变更与版本管理", "加工单 / 外协协同"],
    bottom: ["订单看板与状态泳道", "催交中心与承诺追踪", "与销售 / 计划交期对齐"]
  },
  {
    stage: "到货与质检",
    module: "到货质检",
    top: ["ASN 与到仓预约", "收货排程与高峰协同", "快速收货与差异登记"],
    bottom: ["IQC 检验与批次追溯", "不合格与退货处置", "让步接收与工程确认"]
  },
  {
    stage: "对账与结算",
    module: "对账结算",
    top: ["三单匹配（订单·收货·发票）", "对账差异冻结与归责", "月结清单与供应商协同"],
    bottom: ["付款计划与账期视图", "票据与税务字段校验", "保供供方排款优先级"]
  },
  {
    stage: "数据统计",
    module: "数据统计",
    top: ["采购支出（spend）结构", "价格指数与波动解释", "降本项目与成果池"],
    bottom: ["供应商集中度与风险", "组织 / 品类对标", "复盘报表与审计追溯"]
  }
];

/** 各一级菜单默认「业务流程图」数据：圆形偏运算/汇总，圆角矩形偏单据与业务动作 */
const moduleFlowcharts = {
  home: {
    title: "供应链总览",
    subtitle: "从计划、采购、仓储到销售与结算的端到端协同（示意）",
    legend: "工作台总览帮助新人快速理解模块边界；下方小工作台展示与本模块相关的核心指标与待办。",
    rows: [
      [
        { shape: "circle", label: "计划/MRP", icon: "gear" },
        { shape: "rect", label: "商品与价格", icon: "grid" },
        { shape: "rect", label: "供应商协同", icon: "map" },
        { shape: "rect", label: "采购执行", icon: "basket" }
      ],
      [
        { shape: "rect", label: "竞价/寻源", icon: "chart" },
        { shape: "rect", label: "销售与分货", icon: "store" },
        { shape: "rect", label: "对账结算", icon: "doc" },
        { shape: "circle", label: "数据统计", icon: "target" }
      ]
    ]
  },
  foundation: {
    title: "基础信息",
    subtitle: "主数据与参数先行的配置路径（示意）",
    legend: "组织、币种、计量与编码规则影响全模块单据；变更需走审批并留版本。",
    rows: [
      [
        { shape: "rect", label: "组织/地点", icon: "org" },
        { shape: "rect", label: "币种/汇率", icon: "calc" },
        { shape: "circle", label: "税码/开票", icon: "doc" }
      ],
      [
        { shape: "rect", label: "计量单位", icon: "grid" },
        { shape: "rect", label: "编码规则", icon: "clipboard" },
        { shape: "circle", label: "系统参数", icon: "bolt" }
      ]
    ]
  },
  product: {
    title: "商品管理",
    subtitle: "物料主数据—品类属性—BOM—价格主数据的典型维护顺序（示意）",
    legend: "物料与价格变更可触发采购与销售侧复核；BOM 变更影响 MRP 与成本。",
    rows: [
      [
        { shape: "circle", label: "物料建档", icon: "grid" },
        { shape: "rect", label: "品类属性", icon: "clipboard" },
        { shape: "rect", label: "BOM/配方", icon: "doc" },
        { shape: "circle", label: "价格生效", icon: "bolt" }
      ],
      [
        { shape: "rect", label: "图纸/文档", icon: "doc" },
        { shape: "rect", label: "替代料", icon: "chart" },
        { shape: "rect", label: "生命周期", icon: "check" }
      ]
    ]
  },
  supplier: {
    title: "供应商管理",
    subtitle: "准入—档案—绩效—风险的全生命周期（示意）",
    legend: "准入与评分结果会联动寻源、订单份额与付款策略。",
    rows: [
      [
        { shape: "rect", label: "准入申请", icon: "clipboard" },
        { shape: "circle", label: "资质审核", icon: "search" },
        { shape: "rect", label: "现场评审", icon: "org" },
        { shape: "circle", label: "合格目录", icon: "check" }
      ],
      [
        { shape: "rect", label: "档案维护", icon: "map" },
        { shape: "rect", label: "绩效评分", icon: "chart" },
        { shape: "rect", label: "黑名单", icon: "chat" }
      ]
    ]
  },
  procurement: {
    title: "采购管理",
    subtitle: "请购—订单—催交—到货—质检—委外的执行链（示意）",
    legend: "可与「催交协同」「质检」等二级菜单对照；实际流程可按组织裁剪。",
    rows: [
      [
        { shape: "circle", label: "MRP/补货", icon: "calc" },
        { shape: "rect", label: "请购 PR", icon: "clipboard" },
        { shape: "rect", label: "采购订单", icon: "basket" },
        { shape: "rect", label: "催交协同", icon: "send" }
      ],
      [
        { shape: "rect", label: "到货收货", icon: "truck" },
        { shape: "circle", label: "IQC 检验", icon: "search" },
        { shape: "rect", label: "入库/退货", icon: "inbox" },
        { shape: "rect", label: "委外工单", icon: "gear" }
      ]
    ]
  },
  bidding: {
    title: "竞价平台",
    subtitle: "发标—报价/竞价—定标—合同触发的寻源闭环（示意）",
    legend: "多轮次报价与授标结论需留痕，便于审计与复盘。",
    rows: [
      [
        { shape: "rect", label: "询价发标", icon: "send" },
        { shape: "rect", label: "竞价大厅", icon: "chart" },
        { shape: "circle", label: "比价决策", icon: "target" },
        { shape: "rect", label: "定标授标", icon: "check" }
      ],
      [
        { shape: "rect", label: "项目归档", icon: "doc" },
        { shape: "rect", label: "模板复用", icon: "grid" },
        { shape: "rect", label: "合同触发", icon: "bolt" }
      ]
    ]
  },
  sales: {
    title: "销售管理",
    subtitle: "销售订单—分货配货—渠道客户—退货索赔的协同路径（示意）",
    legend: "销售与采购、库存共享同一物料与价格主数据；交期承诺需联动可供量。",
    rows: [
      [
        { shape: "rect", label: "销售订单", icon: "clipboard" },
        { shape: "rect", label: "锁库/ATP", icon: "grid" },
        { shape: "rect", label: "分货配货", icon: "truck" },
        { shape: "circle", label: "发运结案", icon: "check" }
      ],
      [
        { shape: "rect", label: "渠道/客户", icon: "store" },
        { shape: "rect", label: "价目/返利", icon: "chart" },
        { shape: "rect", label: "退货索赔", icon: "chat" }
      ]
    ]
  },
  settlement: {
    title: "对账结算",
    subtitle: "收货暂估—对账—发票—付款—资金计划的控制链（示意）",
    legend: "三单匹配未完成时通常冻结付款；税务与资金计划需与业务协同。",
    rows: [
      [
        { shape: "circle", label: "收货暂估", icon: "inbox" },
        { shape: "rect", label: "对账匹配", icon: "doc" },
        { shape: "rect", label: "发票税务", icon: "clipboard" },
        { shape: "circle", label: "付款排程", icon: "bolt" }
      ],
      [
        { shape: "rect", label: "差异处理", icon: "chat" },
        { shape: "rect", label: "资金计划", icon: "pie" },
        { shape: "rect", label: "供应商协同", icon: "send" }
      ]
    ]
  },
  analysis: {
    title: "数据统计",
    subtitle: "数据抽取—指标—报表—洞察—改进行动（示意）",
    legend: "分析应能下钻到品类、组织与供方，并生成可执行任务。",
    rows: [
      [
        { shape: "circle", label: "数据抽取", icon: "grid" },
        { shape: "circle", label: "指标计算", icon: "calc" },
        { shape: "rect", label: "分析报表", icon: "chart" },
        { shape: "rect", label: "经营洞察", icon: "target" }
      ],
      [
        { shape: "rect", label: "库存周转", icon: "inbox" },
        { shape: "rect", label: "价格指数", icon: "bolt" },
        { shape: "rect", label: "自定义", icon: "star" }
      ]
    ]
  }
};

const moduleMiniWorkbench = {
  home: {
    stats: [
      { label: "今日采购额", value: "¥ 186.4万", trend: "较昨日 +8.3%", trendClass: "up" },
      { label: "今日销售额", value: "¥ 241.7万", trend: "产销比 77.1%", trendClass: "up" },
      { label: "异常单量", value: "17", trend: "交期异常 9 单", trendClass: "down" },
      { label: "我的待办", value: "11", trend: "今日新增 6 项", trendClass: "warn" }
    ],
    todos: [
      { title: "跨模块审批", text: "3 张 PR 与 2 张合同变更待您会签。", badge: "审批", tone: "warn" },
      { title: "集采例会材料", text: "周五经营会需导出本周支出与缺料清单。", badge: "会议", tone: "success" }
    ],
    messages: [
      { time: "09:30", title: "系统公告", text: "清明假期截单时间已同步至各模块日历。" },
      { time: "11:05", title: "集成监控", text: "WMS 接口延迟已恢复，异常队列已清空。" }
    ]
  },
  foundation: {
    stats: [
      { label: "主数据待审", value: "6", trend: "组织 2 / 物料 4", trendClass: "warn" },
      { label: "编码器占用", value: "92%", trend: "SKU 号段", trendClass: "up" },
      { label: "税码变更", value: "1", trend: "下月生效", trendClass: "warn" },
      { label: "接口健康", value: "正常", trend: "最近 1h", trendClass: "up" }
    ],
    todos: [
      { title: "仓库地址补全", text: "华东 DC 经纬度未填，影响运费试算。", badge: "主数据", tone: "danger" },
      { title: "计量换算复核", text: "箱↔公斤换算待品控确认后发布。", badge: "单位", tone: "warn" }
    ],
    messages: [
      { time: "08:50", title: "参数发布", text: "编号规则 MR-2026-Q2 已生效。" }
    ]
  },
  product: {
    stats: [
      { label: "新品建档", value: "14", trend: "本周待发布 5", trendClass: "up" },
      { label: "BOM 变更", value: "3", trend: "工程已提交", trendClass: "warn" },
      { label: "价格待生效", value: "8", trend: "目录价", trendClass: "warn" },
      { label: "替代料维护", value: "6", trend: "缺第二来源", trendClass: "down" }
    ],
    todos: [
      { title: "图纸版本对齐", text: "SKU-8821 与 PLM 版本不一致。", badge: "资料", tone: "danger" },
      { title: "阶梯价截止", text: "生鲜框架协议价将于明日到期。", badge: "价格", tone: "warn" }
    ],
    messages: [
      { time: "10:12", title: "生命周期", text: "2 个物料已标记停产，请联动采购清理在途。" }
    ]
  },
  supplier: {
    stats: [
      { label: "准入评审中", value: "5", trend: "现场 2 家", trendClass: "warn" },
      { label: "绩效整改", value: "13", trend: "交付类为主", trendClass: "down" },
      { label: "黑名单观察", value: "6", trend: "冻结新 PO", trendClass: "danger" },
      { label: "档案过期", value: "4", trend: "证照", trendClass: "warn" }
    ],
    todos: [
      { title: "准入现场", text: "周二绿源肉联现场审核行程待确认。", badge: "评审", tone: "warn" },
      { title: "银行账号变更", text: "鲜时达冷链账号待财务复核。", badge: "合规", tone: "danger" }
    ],
    messages: [
      { time: "14:20", title: "风险预警", text: "甄鲜果蔬连续两批交付偏差，已标黄。" }
    ]
  },
  procurement: {
    stats: [
      { label: "在途 PO", value: "186", trend: "待回签 17", trendClass: "warn" },
      { label: "今日到货", value: "34", trend: "高峰 13-15 时", trendClass: "up" },
      { label: "停线风险", value: "3", trend: "24h 内", trendClass: "danger" },
      { label: "待检批次", value: "17", trend: "加急 4", trendClass: "warn" }
    ],
    todos: [
      { title: "PO 回签超时", text: "PO-540182 超 24h 未回签。", badge: "执行", tone: "danger" },
      { title: "拆批到货", text: "ASN-8824 需仓库确认分批策略。", badge: "协同", tone: "warn" }
    ],
    messages: [
      { time: "13:40", title: "到货提醒", text: "今日 14-16 时集中到货 11 批。" }
    ]
  },
  bidding: {
    stats: [
      { label: "进行中项目", value: "19", trend: "今日截止 7", trendClass: "warn" },
      { label: "回标率", value: "81%", trend: "二轮偏慢", trendClass: "down" },
      { label: "待定标", value: "6", trend: "超目标价 2", trendClass: "warn" },
      { label: "节支潜力", value: "¥ 96万", trend: "可谈判", trendClass: "up" }
    ],
    todos: [
      { title: "RFQ 截止", text: "净菜分包 RFQ-219 今日 17:00 截标。", badge: "截止", tone: "danger" },
      { title: "授标会签", text: "精品脐橙礼盒项目待法务完成条款确认。", badge: "定标", tone: "warn" }
    ],
    messages: [
      { time: "08:15", title: "模板", text: "肉禽询价比价模板已发布 2026.2 版。" }
    ]
  },
  sales: {
    stats: [
      { label: "今日 SO", value: "128", trend: "待锁库 14", trendClass: "warn" },
      { label: "ATP 短缺", value: "9", trend: "关键 SKU", trendClass: "danger" },
      { label: "渠道待分货", value: "22", trend: "华东优先", trendClass: "warn" },
      { label: "退货待审", value: "5", trend: "RMA", trendClass: "down" }
    ],
    todos: [
      { title: "交期承诺", text: "SO-7741 客户要求提前 2 天，需采购确认原料。", badge: "承诺", tone: "danger" },
      { title: "返利结算", text: "Q1 渠道返利清单待商务确认。", badge: "渠道", tone: "warn" }
    ],
    messages: [
      { time: "16:02", title: "信用", text: "客户 邻活超市 信用额度已调整，请留意新单。" }
    ]
  },
  settlement: {
    stats: [
      { label: "待对账", value: "27", trend: "冻结 6", trendClass: "warn" },
      { label: "匹配率", value: "96%", trend: "目标 98%", trendClass: "down" },
      { label: "本周应付", value: "¥ 482万", trend: "顺延 9", trendClass: "warn" },
      { label: "缺票挂起", value: "4", trend: "供应商补票", trendClass: "danger" }
    ],
    todos: [
      { title: "税率差异", text: "鲜时达冷链 ST-2404-018 待重开票。", badge: "冻结", tone: "danger" },
      { title: "付款顺延", text: "甄鲜果蔬对账未清，已自动顺延。", badge: "资金", tone: "warn" }
    ],
    messages: [
      { time: "11:00", title: "月结", text: "本月对账窗口周五 18:00 关闭。" }
    ]
  },
  analysis: {
    stats: [
      { label: "本月采购额", value: "¥ 1,286万", trend: "同比 +6.2%", trendClass: "warn" },
      { label: "Top10 占比", value: "63%", trend: "集中度偏高", trendClass: "down" },
      { label: "呆滞预警", value: "¥ 420万", trend: "90 天+", trendClass: "danger" },
      { label: "降本达成", value: "72%", trend: "距目标 8pt", trendClass: "warn" }
    ],
    todos: [
      { title: "品类复盘会", text: "生鲜果蔬 spend 增长需准备对策幻灯片。", badge: "分析", tone: "warn" },
      { title: "报表订阅", text: "自定义「供应商集中度」报表待您确认字段。", badge: "报表", tone: "success" }
    ],
    messages: [
      { time: "07:45", title: "指标", text: "价格指数已同步猪价与蔬菜批发指数。" }
    ]
  }
};

const bizFlowIcons = {
  calc: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" aria-hidden="true"><rect x="4" y="3" width="16" height="18" rx="2"/><path d="M8 7h8M8 11h3M13 11h3M8 15h8"/></svg>`,
  gear: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" aria-hidden="true"><circle cx="12" cy="12" r="3"/><path d="M12 2v2m0 16v2M4.93 4.93l1.41 1.41m11.32 11.32l1.41 1.41M2 12h2m16 0h2M4.93 19.07l1.41-1.41m11.32-11.32L19.07 4.93"/></svg>`,
  store: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" aria-hidden="true"><path d="M4 10V20H20V10"/><path d="M3 8L5 4H19L21 8"/><path d="M9 14H15"/></svg>`,
  clipboard: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" aria-hidden="true"><path d="M9 4h6l1 2h3v16H5V6h3l1-2z"/><path d="M9 4V3a1 1 0 011-1h4a1 1 0 011 1v1"/></svg>`,
  basket: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" aria-hidden="true"><path d="M6 8h15l-2 11H8L6 8z"/><path d="M6 8L5 3H2"/><circle cx="9" cy="21" r="1"/><circle cx="18" cy="21" r="1"/></svg>`,
  truck: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" aria-hidden="true"><path d="M1 12h12v8H1z"/><path d="M13 16h4l3 4v-8h-7"/><circle cx="5.5" cy="20.5" r="1.5"/><circle cx="17.5" cy="20.5" r="1.5"/></svg>`,
  inbox: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" aria-hidden="true"><path d="M22 12h-4l-2-4H8L6 12H2"/><path d="M2 12v8h20v-8"/><path d="M12 12v4"/></svg>`,
  org: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" aria-hidden="true"><circle cx="12" cy="5" r="2"/><circle cx="6" cy="18" r="2"/><circle cx="18" cy="18" r="2"/><path d="M12 7v3M8 16H6M18 16h-2"/></svg>`,
  chat: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" aria-hidden="true"><path d="M21 12a8 8 0 11-14 6H4l-2 2v-3a8 8 0 018-8z"/></svg>`,
  search: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" aria-hidden="true"><circle cx="11" cy="11" r="6"/><path d="M20 20l-3-3"/></svg>`,
  send: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" aria-hidden="true"><path d="M22 2L11 13"/><path d="M22 2L15 22l-4-9-9-4L22 2z"/></svg>`,
  chart: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" aria-hidden="true"><path d="M4 20V4"/><path d="M4 20h16"/><path d="M8 16l3-6 4 3 5-9"/></svg>`,
  check: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" aria-hidden="true"><circle cx="12" cy="12" r="8"/><path d="M8 12l2.5 2.5L16 9"/></svg>`,
  doc: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" aria-hidden="true"><path d="M7 3h8l4 4v14H7z"/><path d="M14 3v5h5"/></svg>`,
  grid: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" aria-hidden="true"><path d="M4 4h6v6H4zM14 4h6v6h-6zM4 14h6v6H4zM14 14h6v6h-6z"/></svg>`,
  target: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" aria-hidden="true"><circle cx="12" cy="12" r="8"/><circle cx="12" cy="12" r="4"/><circle cx="12" cy="12" r="1"/></svg>`,
  bolt: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" aria-hidden="true"><path d="M13 2L4 14h7l-1 8 10-14h-7l0-6z"/></svg>`,
  map: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" aria-hidden="true"><path d="M3 6l6-3 6 3 6-3v15l-6 3-6-3-6 3V6z"/><path d="M9 3v15M15 6v15"/></svg>`,
  star: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" aria-hidden="true"><path d="M12 2l2.5 7.5H22l-6 4.5 2.5 7.5L12 17l-6.5 4.5L8 14 2 9.5h7.5L12 2z"/></svg>`,
  audit: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" aria-hidden="true"><circle cx="11" cy="11" r="6"/><path d="M20 20l-3-3"/><path d="M11 9v3l2 1"/></svg>`,
  pie: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" aria-hidden="true"><circle cx="12" cy="12" r="8"/><path d="M12 4v8l6 3"/></svg>`
};

function bizFlowIconSvg(name) {
  return bizFlowIcons[name] || bizFlowIcons.doc;
}

function renderBizFlowNode(cell) {
  const icon = bizFlowIconSvg(cell.icon);
  if (cell.shape === "circle") {
    return `
    <div class="biz-flow-node biz-flow-node--circle" role="group" aria-label="${cell.label}">
      <div class="biz-flow-node-disc">
        <div class="biz-flow-node-icon">${icon}</div>
      </div>
      <span class="biz-flow-node-label">${cell.label}</span>
    </div>`;
  }
  return `
    <div class="biz-flow-node biz-flow-node--rect" role="group" aria-label="${cell.label}">
      <div class="biz-flow-node-icon">${icon}</div>
      <span class="biz-flow-node-label">${cell.label}</span>
    </div>`;
}

function renderBizFlowJoinH() {
  return `<div class="biz-flow-join biz-flow-join--h" aria-hidden="true"><span class="biz-flow-arrow-h"></span></div>`;
}

function renderBizFlowBetween(prevLen, nextLen) {
  const n = Math.max(prevLen, nextLen, 1);
  const cells = Array.from({ length: n }, () => {
    return `<div class="biz-flow-down-cell"><span class="biz-flow-arrow-v" aria-hidden="true"></span></div>`;
  }).join("");
  return `<div class="biz-flow-between">${cells}</div>`;
}

function renderModuleBizFlow(menuKey) {
  const spec = moduleFlowcharts[menuKey];
  if (!spec) {
    return `<section class="module-page"><div class="module-empty">暂无业务流程图数据。</div></section>`;
  }

  const rowsHtml = spec.rows
    .map((row, ri) => {
      const parts = [];
      for (let i = 0; i < row.length; i++) {
        parts.push(renderBizFlowNode(row[i]));
        if (i < row.length - 1) {
          parts.push(renderBizFlowJoinH());
        }
      }
      const gap =
        ri < spec.rows.length - 1 ? renderBizFlowBetween(row.length, spec.rows[ri + 1].length) : "";
      return `<div class="biz-flow-row">${parts.join("")}</div>${gap}`;
    })
    .join("");

  return `
    <section class="biz-flow-page" aria-label="${spec.title}业务流程图">
      <header class="biz-flow-banner">
        <h2 class="biz-flow-banner-title">${spec.title}</h2>
        <p class="biz-flow-banner-sub">${spec.subtitle}</p>
      </header>
      <div class="biz-flow-canvas">
        ${rowsHtml}
      </div>
      <footer class="biz-flow-foot">
        <span><strong>说明：</strong>${spec.legend}</span>
      </footer>
    </section>
  `;
}

function renderModuleMiniTodoItem(t) {
  return `
    <li class="module-mini-todo-item">
      <div class="module-mini-todo-head">
        <strong>${t.title}</strong>
        ${renderPill(t.badge, t.tone)}
      </div>
      <p>${t.text}</p>
    </li>`;
}

function renderModuleMiniMsgItem(m) {
  return `
    <li class="module-mini-msg-item">
      <div class="module-mini-msg-meta">
        <span class="module-mini-msg-time">${m.time}</span>
      </div>
      <strong>${m.title}</strong>
      <p>${m.text}</p>
    </li>`;
}

function renderModuleMiniWorkbench(menuKey) {
  const w = moduleMiniWorkbench[menuKey];
  if (!w) {
    return "";
  }
  return `
    <section class="module-mini-workbench" aria-label="模块工作台">
      <div class="module-mini-kpi">
        <div class="panel-head">
          <h3>核心数据</h3>
          <span class="pill">今日</span>
        </div>
        <div class="stat-grid stat-grid--mini">${renderMetricCards(w.stats)}</div>
      </div>
      <div class="module-mini-row">
        <section class="home-section home-section--compact module-mini-col">
          <div class="panel-head">
            <h3>待办</h3>
            <span class="pill warn">跟进</span>
          </div>
          <ul class="module-mini-list">
            ${w.todos.map(renderModuleMiniTodoItem).join("")}
          </ul>
        </section>
        <section class="home-section home-section--compact module-mini-col">
          <div class="panel-head">
            <h3>提醒</h3>
            <span class="pill">消息</span>
          </div>
          <ul class="module-mini-list module-mini-list--msg">
            ${w.messages.map(renderModuleMiniMsgItem).join("")}
          </ul>
        </section>
      </div>
    </section>
  `;
}

function renderModuleLandingPage(menuKey) {
  return `
    <div class="module-landing">
      ${renderModuleBizFlow(menuKey)}
      ${renderModuleMiniWorkbench(menuKey)}
    </div>
  `;
}

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
      { name: "红颜草莓礼盒（箱）", detail: "华东主仓", meta: "库龄 112 天 · 12,400 套" },
      { name: "丁腈手套（整箱）", detail: "华南中心仓", meta: "周转 <0.3 次/季 · 8.6 万件" },
      { name: "可降解购物袋（捆）", detail: "华东", meta: "超最高库存线 18%" }
    ]
  },
  shortage: {
    title: "库存缺失",
    value: "11",
    hint: "低于安全库存或存在断货 / 欠量风险",
    rows: [
      { name: "冷鲜猪五花肉（件）", detail: "主供仓", meta: "低于安全库存 3 天用量" },
      { name: "进口香蕉（板）", detail: "外贸备货", meta: "在途未覆盖本周 SO" },
      { name: "内酯豆腐（板）", detail: "线边", meta: "WO-9032 待料中" }
    ]
  }
};

const homeProductRankings = {
  salesTop10: [
    { rank: 1, name: "进口香蕉（板）", value: "28.6 万" },
    { rank: 2, name: "冷鲜猪五花肉（件）", value: "21.2 万" },
    { rank: 3, name: "红颜草莓礼盒（箱）", value: "18.9 万" },
    { rank: 4, name: "西红柿（筐）", value: "14.1 万" },
    { rank: 5, name: "不锈钢汤勺套装", value: "11.3 万" },
    { rank: 6, name: "精品脐橙（箱）", value: "9.8 万" },
    { rank: 7, name: "保鲜膜组合装", value: "8.4 万" },
    { rank: 8, name: "鸡翅中（冷鲜）", value: "7.1 万" },
    { rank: 9, name: "西兰花（袋）", value: "6.5 万" },
    { rank: 10, name: "土豆（网袋）", value: "5.9 万" }
  ],
  complaintTop10: [
    { rank: 1, name: "冷鲜猪五花肉（件）", value: "7 起" },
    { rank: 2, name: "西红柿（筐）", value: "5 起" },
    { rank: 3, name: "精品红提（箱）", value: "5 起" },
    { rank: 4, name: "一次性餐盒（套）", value: "4 起" },
    { rank: 5, name: "厨房小五金套装", value: "3 起" },
    { rank: 6, name: "翅根（冷鲜）", value: "3 起" },
    { rank: 7, name: "封箱胶带（件）", value: "2 起" },
    { rank: 8, name: "塑料蔬菜周转筐", value: "2 起" },
    { rank: 9, name: "泡沫保温箱", value: "2 起" },
    { rank: 10, name: "生姜（份）", value: "1 起" }
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
      { time: "09:12", title: "主数据变更", text: "RD-210 叶菜类目属性已调整，请关注对询价模板的影响。" }
    ]
  },
  {
    key: "contract",
    name: "合同",
    todos: [
      { title: "年度框架待签", text: "生鲜集采 2026 年度框架协议法务已退回 1 处条款，待修订重提。", badge: "法务", tone: "warn" }
    ],
    messages: [
      { time: "08:40", title: "合同到期预警", text: "鲜时达冷链框架合同剩余 18 天，建议本周完成续签评审。" }
    ]
  },
  {
    key: "supplier",
    name: "供应商",
    todos: [
      { title: "准入资料补全", text: "绿源肉联营业执照副本模糊，需重新上传后方能参与 RFQ。", badge: "准入", tone: "warn" },
      { title: "绩效整改回函", text: "甄鲜果蔬 3 月整改报告未提交，影响新品份额评估。", badge: "绩效", tone: "danger" }
    ],
    messages: [
      { time: "10:05", title: "供方状态变更", text: "家清优选已切换为「观察」状态，请控制新 PO 放量。" }
    ]
  },
  {
    key: "documents",
    name: "单据管理",
    todos: [
      { title: "PO 回签超时", text: "PO-540182 超 24 小时未回签，需电话确认交期。", badge: "采购单", tone: "danger" },
      { title: "交期变更确认", text: "PO-540169 供应商申请拆批，待仓库确认收货策略。", badge: "采购单", tone: "warn" },
      { title: "外协工单齐套", text: "WO-9032 净菜分包工序缺 1 项辅料，需协调供应商补料或改期。", badge: "加工单", tone: "danger" },
      { title: "急单插单评审", text: "SO-7741 客户要求提前 2 天发运，需评估原料与产能。", badge: "订单", tone: "warn" }
    ],
    messages: [
      { time: "11:20", title: "批量到货提醒", text: "今日 14:00-16:00 与采购单关联到货 11 批，请关注卸货窗口。", tag: "采购单" },
      { time: "13:45", title: "加工进度", text: "WO-9018 已完工待质检，预计 16:00 可回传完工单。", tag: "加工单" },
      { time: "14:02", title: "交期承诺", text: "SO-7728 锁船期不变，请优先保障冷鲜与日配。", tag: "订单" }
    ]
  },
  {
    key: "statement",
    name: "对账单",
    todos: [
      { title: "月结差异冻结", text: "鲜时达冷链 ST-2404-018 税率字段错误，待供应商重开票后解冻。", badge: "冻结", tone: "warn" },
      { title: "三单匹配失败", text: "甄鲜果蔬收货数量差 320 件，需仓库与供方共同确认。", badge: "差异", tone: "danger" }
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
      { title: "进口香蕉补量", text: "本周新增出口订单，标签需求需和库存合并判断是否直接转采购。", badge: "紧急", tone: "danger" },
      { title: "挂面类常规补货", text: "已存在季度框架价，可直接进入订单草拟。", badge: "标准", tone: "success" },
      { title: "新物料试样", text: "需求规格不完整，建议先退回研发补齐材质要求。", badge: "待补资料", tone: "warn" },
      { title: "蔬菜礼盒追加", text: "与现有在途存在交期冲突，需要先核查供应商剩余产能。", badge: "复核", tone: "warn" }
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
        ["PR-240407-18", "红颜草莓礼盒（箱）", "生产一部", "4月9日", "待审批"],
        ["PR-240407-22", "内酯豆腐（板）", "研发试制", "4月12日", "待补规格"],
        ["PR-240407-25", "进口香蕉（板）", "外贸部", "4月10日", "已转询价"],
        ["PR-240407-31", "不锈钢汤勺套装", "设备维护", "4月15日", "可直转 PO"]
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
      { badge: "价差", tone: "warn", title: "展示最低价与推荐价的差异原因", text: "例如返利、付款条件、最小起订量等，让定点更可解释。" },
      { badge: "留痕", tone: "danger", title: "保留拒选原因", text: "例如产能不足、交付不稳、历史质量差，让后续审计和复盘都有依据。" }
    ],
    boardTitle: "询价决策看板",
    board: [
      { title: "净菜分包 RFQ-219", text: "第二轮最低价来自绿源肉联，但交付稳定性低于目标线。", badge: "待定点", tone: "warn" },
      { title: "精品脐橙礼盒 RFQ-227", text: "4 家供应商均已回标，推荐按年框架合作谈判。", badge: "可议价", tone: "success" },
      { title: "冷鲜五花肉 RFQ-211", text: "两家回标超目标成本 6%，需重新拆 BOM 看成本项。", badge: "超预算", tone: "danger" },
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
        ["RFQ-219", "净菜分包", "5", "第二轮", "待评审"],
        ["RFQ-227", "精品红提（箱）", "4", "第一轮", "可定点"],
        ["RFQ-211", "冷鲜猪五花肉（件）", "3", "第二轮", "超目标价"],
        ["RFQ-208", "辅料通采", "6", "第一轮", "转目录采购"]
      ]
    }
  },
  "supplier-map": {
    kicker: "Supplier Master",
    title: "供应商档案",
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
      { badge: "结构", tone: "success", title: "按品类看主备覆盖", text: "例如蔬菜、肉禽、日配分别展示核心、备选、开发中供应商数量。" },
      { badge: "区域", tone: "warn", title: "把区域集中度可视化", text: "同区域过度集中时，采购可提前识别物流、环保、政策带来的系统性风险。" },
      { badge: "替补", tone: "danger", title: "单一来源自动预警", text: "一旦某个品类只有 1 家合格供方，页面应直接标红，并给出补第二来源任务。" }
    ],
    boardTitle: "供方结构看板",
    board: [
      { title: "蔬菜水果供应商", text: "核心 6 家、备选 4 家，整体覆盖健康，但华南区域仍偏少。", badge: "健康", tone: "success" },
      { title: "电子辅件", text: "存在 3 个单一来源物料，需优先开发替补。", badge: "风险", tone: "danger" },
      { title: "外协加工", text: "华东供方充足，但夜班产能较弱，建议补充周末可交付资源。", badge: "产能", tone: "warn" },
      { title: "门店日百", text: "适合做目录采购，不需要每次单独寻源。", badge: "优化", tone: "success" }
    ],
    listTitle: "本周动作",
    list: [
      { title: "补第二来源", text: "西兰花、冷鲜鸡胸、精品鸡蛋三类物料列入开发清单。", badge: "开发", tone: "danger" },
      { title: "区域均衡", text: "华南仓常用耗材建议同步开发本地供方，压缩交付半径。", badge: "区域", tone: "warn" },
      { title: "黑名单联动", text: "被暂停合作的供应商在询价环节直接禁选。", badge: "控制", tone: "success" },
      { title: "准入进度", text: "新供方准入节点显示在同一页，采购能直接追法务和品质。", badge: "准入", tone: "success" }
    ],
    tableCaption: "核心供应商样例",
    table: {
      columns: ["供应商", "主供品类", "主备角色", "区域", "状态"],
      rows: [
        ["鲜时达冷链", "精品红提 / 蔬菜礼盒", "主供", "苏州", "合作正常"],
        ["绿源肉联", "净菜分包", "备供", "昆山", "开发中"],
        ["甄鲜果蔬", "冷鲜猪五花肉（件）", "主供", "宁波", "单一来源"],
        ["家清优选", "挂面（组合装）", "主供", "东莞", "合作正常"]
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
      { title: "鲜时达冷链", text: "综合 92 分，价格稳定，响应最快，可继续扩品类合作。", badge: "A级", tone: "success" },
      { title: "甄鲜果蔬", text: "综合 78 分，交付波动大，建议限制新品导入。", badge: "整改", tone: "warn" },
      { title: "绿源肉联", text: "综合 71 分，夜班交付和缺件问题需限期改善。", badge: "观察", tone: "danger" },
      { title: "家清优选", text: "综合 89 分，质量稳定，适合作为备份拉升采购份额。", badge: "良好", tone: "success" }
    ],
    listTitle: "整改任务",
    list: [
      { title: "交付整改会", text: "甄鲜果蔬本周需提交 4 月产能保障方案。", badge: "本周", tone: "warn" },
      { title: "质量复盘", text: "绿源肉联连续两批毛边异常，需品质陪同复盘。", badge: "质量", tone: "danger" },
      { title: "份额调整", text: "家清优选拟从 18% 提升至 25%，降低主供集中度。", badge: "份额", tone: "success" },
      { title: "奖励机制", text: "A级供应商在紧急需求分配时可优先获得询价机会。", badge: "激励", tone: "success" }
    ],
    tableCaption: "本月评分清单",
    table: {
      columns: ["供应商", "交付", "质量", "价格", "综合"],
      rows: [
        ["鲜时达冷链", "96", "93", "88", "92"],
        ["甄鲜果蔬", "73", "84", "79", "78"],
        ["绿源肉联", "69", "75", "81", "71"],
        ["家清优选", "91", "88", "87", "89"]
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
      { title: "PO-540182", text: "甄鲜果蔬已口头确认改到 4 月 11 日交货，待系统回签。", badge: "延期", tone: "danger" },
      { title: "PO-540176", text: "鲜时达冷链已回签，生产中，预计 4 月 9 日发货。", badge: "正常", tone: "success" },
      { title: "PO-540169", text: "绿源肉联要求拆批发货，需仓库确认能否分批收货。", badge: "协同", tone: "warn" },
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
        ["PO-540182", "甄鲜果蔬", "¥ 186,000", "4月11日", "延期待确认"],
        ["PO-540176", "鲜时达冷链", "¥ 92,400", "4月9日", "生产中"],
        ["PO-540169", "绿源肉联", "¥ 63,200", "4月10日", "拆批协同"],
        ["PO-540151", "家清优选", "¥ 48,600", "4月8日", "到货差异"]
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
      { title: "冷鲜牛腩块", text: "若 4 月 8 日晚前不到仓，门店鲜食将出现断货风险。", badge: "红灯", tone: "danger" },
      { title: "精品脐橙礼盒", text: "客户发运节点锁死，供应商需确认明早加急发车。", badge: "项目单", tone: "warn" },
      { title: "厨房抹布（提）", text: "普通补货，可接受后移一天到货。", badge: "黄灯", tone: "success" },
      { title: "西红柿（筐）", text: "供应商已承诺今晚装车，等待上传发货单。", badge: "跟进中", tone: "success" }
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
        ["冷鲜牛腩块", "甄鲜果蔬", "断货风险", "4月8日 20:00", "确认装车截图"],
        ["精品脐橙礼盒", "鲜时达冷链", "客户交期", "4月8日 10:00", "安排早班发车"],
        ["西红柿（筐）", "绿源肉联", "工序待料", "4月7日 23:00", "追运单号"],
        ["厨房抹布（提）", "家清优选", "一般补货", "4月9日", "维持观察"]
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
      { title: "未预约 ASN-8821", text: "甄鲜果蔬今晚发货，但还未预约收货时段。", badge: "缺预约", tone: "danger" },
      { title: "精品红提批次", text: "鲜时达冷链已上传装箱明细，可直接走快速收货。", badge: "顺畅", tone: "success" },
      { title: "净菜分包批次", text: "因拆批到货，仓库需提前确认是否同单多次收货。", badge: "特殊", tone: "warn" }
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
        ["09:30", "ASN-8816", "鲜时达冷链", "A-03", "已预约"],
        ["13:15", "ASN-8821", "甄鲜果蔬", "待分配", "未预约"],
        ["14:10", "ASN-8824", "绿源肉联", "B-02", "拆批到货"],
        ["16:00", "ASN-8830", "家清优选", "A-05", "正常"]
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
      { label: "不合格批次", value: "3", trend: "净菜加工件 2 批", trendClass: "down" },
      { label: "让步接收", value: "2", trend: "待工程确认", trendClass: "warn" },
      { label: "退货处理中", value: "5", trend: "本周已关闭 6 批", trendClass: "up" }
    ],
    focus: [
      { badge: "状态", tone: "success", title: "先分待检、复判和退货", text: "采购每天最需要知道的是卡在哪一类，而不是只看一个总数。" },
      { badge: "责任", tone: "warn", title: "每个不合格批次挂责任动作", text: "采购负责追供应商，品质负责判定，工程负责确认让步接收条件。" },
      { badge: "影响", tone: "danger", title: "标记是否影响上架", text: "如果某批次影响门店陈列与售卖，页面需要直接红色提示，不让采购员自己去判断。" }
    ],
    boardTitle: "质检事件",
    board: [
      { title: "净菜批次 IQC-048", text: "异物检出超标，已申请供应商复盘并暂停后续发货。", badge: "不合格", tone: "danger" },
      { title: "五花肉批次 IQC-046", text: "尺寸轻微偏差，工程评估可让步接收。", badge: "待工程", tone: "warn" },
      { title: "挂面类批次 IQC-042", text: "抽检通过，可直接转入上架流程。", badge: "通过", tone: "success" },
      { title: "热敏价签批次 IQC-043", text: "价签与陈列不一致，需供应商补发电子价签模板。", badge: "整改", tone: "warn" }
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
        ["IQC-048", "西红柿（筐）", "不合格", "影响上架", "供应商复盘"],
        ["IQC-046", "冷鲜猪五花肉（件）", "待让步", "中", "工程确认"],
        ["IQC-043", "精品红提（箱）", "整改", "低", "补规范模板"],
        ["IQC-042", "米面副食", "通过", "无", "转上架"]
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
      { title: "鲜时达冷链 4 月月结", text: "数量已匹配，但税率字段错误，待供应商重开票。", badge: "票据差异", tone: "warn" },
      { title: "甄鲜果蔬 3 月月结", text: "收货数量与送货单差 320 件，已冻结。", badge: "数量差异", tone: "danger" },
      { title: "家清优选 4 月月结", text: "订单价格和发票一致，可直接转付款。", badge: "已匹配", tone: "success" },
      { title: "绿源肉联 4 月月结", text: "返工退货尚未冲销，暂不允许结算。", badge: "退货未结", tone: "warn" }
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
        ["ST-2404-018", "鲜时达冷链", "¥ 124,300", "税率", "待重开票"],
        ["ST-2403-026", "甄鲜果蔬", "¥ 186,000", "收货数量", "冻结"],
        ["ST-2404-011", "家清优选", "¥ 48,600", "无", "可付款"],
        ["ST-2404-015", "绿源肉联", "¥ 63,200", "退货未冲销", "待处理"]
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
      { title: "鲜时达冷链", text: "月结稳定，且承担出口急单，建议优先付款。", badge: "优先", tone: "success" },
      { title: "甄鲜果蔬", text: "对账冻结未解除，付款顺延。", badge: "冻结", tone: "danger" },
      { title: "绿源肉联", text: "发票未齐，若本周不补将延至下轮排款。", badge: "缺票", tone: "warn" },
      { title: "家清优选", text: "常规账期内，可按周计划执行。", badge: "正常", tone: "success" }
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
        ["鲜时达冷链", "¥ 124,300", "30 天", "本周优先", "待付款"],
        ["甄鲜果蔬", "¥ 186,000", "45 天", "冻结顺延", "对账未清"],
        ["绿源肉联", "¥ 63,200", "30 天", "补票后排款", "缺票"],
        ["家清优选", "¥ 48,600", "30 天", "按计划执行", "正常"]
      ]
    }
  },
  "spend-analysis": {
    kicker: "Spend Analysis",
    title: "采购支出",
    intro:
      "采购数据统计的第一视角应该是钱花到哪里去了、集中在谁身上、哪些品类涨了、哪些组织能继续降本，而不是简单的付款汇总。",
    facts: ["品类 spend", "供应商集中度", "组织对比"],
    stats: [
      { label: "本月采购额", value: "¥ 1,286万", trend: "同比 +6.2%", trendClass: "warn" },
      { label: "Top10 供应商占比", value: "63%", trend: "集中度偏高", trendClass: "down" },
      { label: "框架采购占比", value: "58%", trend: "可继续提升", trendClass: "up" },
      { label: "可压缩支出", value: "¥ 96万", trend: "来自日百低值", trendClass: "up" }
    ],
    focus: [
      { badge: "结构", tone: "success", title: "支出先看品类，再看供应商", text: "采购更容易识别哪些品类适合做框架价、目录采购或集中谈判。" },
      { badge: "集中", tone: "warn", title: "供应商集中度要醒目", text: "过高集中度意味着议价和保供都更被动，应该直接进入风险视角。" },
      { badge: "动作", tone: "danger", title: "分析后能挂到行动项", text: "例如包装与日百适合集中谈判，日百适合目录化，而不是只停留在图表。" }
    ],
    boardTitle: "分析结论",
    board: [
      { title: "生鲜果蔬 spend 增长", text: "出口业务拉动导致月度支出上升 12%，需做年度框架谈判。", badge: "重点", tone: "warn" },
      { title: "日百零散采购", text: "单笔金额小但单据多，适合做目录采购降事务成本。", badge: "优化", tone: "success" },
      { title: "肉禽集中度", text: "Top1 供应商占 72%，供方结构偏单薄。", badge: "风险", tone: "danger" },
      { title: "米面类降本", text: "通过合单采购，平均价格较去年下降 3.8%。", badge: "成果", tone: "success" }
    ],
    listTitle: "建议动作",
    list: [
      { title: "年度框架", text: "对生鲜与日配类重新谈年度量价折扣。", badge: "议价", tone: "warn" },
      { title: "目录采购", text: "把日用百货、辅料逐步转为标准目录。", badge: "标准化", tone: "success" },
      { title: "分散份额", text: "冷鲜肉禽需将部分份额转给第二来源。", badge: "保供", tone: "danger" },
      { title: "组织对标", text: "对比各工厂采购均价，沉淀最佳实践。", badge: "对标", tone: "success" }
    ],
    tableCaption: "支出拆分样例",
    table: {
      columns: ["品类", "本月金额", "占比", "同比", "建议"],
      rows: [
        ["蔬菜水果", "¥ 428万", "33%", "+12%", "年度框架"],
        ["肉禽蛋品", "¥ 316万", "25%", "+4%", "补第二来源"],
        ["米面副食", "¥ 198万", "15%", "-3%", "继续合单"],
        ["日用百货", "¥ 94万", "7%", "+9%", "转目录采购"]
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
      { label: "原材上涨", value: "4 类", trend: "畜禽行情为主", trendClass: "down" },
      { label: "可回谈项目", value: "7", trend: "本周建议启动", trendClass: "up" }
    ],
    focus: [
      { badge: "趋势", tone: "success", title: "历史价趋势放在中心位置", text: "采购需要快速知道当前价格是高于还是低于近三个月均值。" },
      { badge: "外部", tone: "warn", title: "结合原材波动解释报价", text: "如肉禽、蔬菜、能源价格上涨时，可辅助判断供应商涨价是否合理。" },
      { badge: "动作", tone: "danger", title: "价格变化后有跟进动作", text: "涨价过快时提示重新询价，价格回落时提示重谈框架价。" }
    ],
    boardTitle: "价格监控",
    board: [
      { title: "冷鲜猪五花肉（件）", text: "单价较 3 月均价上浮 6.4%，主要受猪价与饲料行情影响。", badge: "上涨", tone: "danger" },
      { title: "精品红提（箱）", text: "叶菜上市量大价格回落，可推动下一轮谈价压缩 2%-3%。", badge: "可议价", tone: "success" },
      { title: "西红柿（筐）", text: "近四周价格平稳，适合锁季度框架。", badge: "稳定", tone: "success" },
      { title: "挂面（组合装）", text: "市场价格微涨，但现有供应商报价涨幅高于市场。", badge: "复核", tone: "warn" }
    ],
    listTitle: "采购建议",
    list: [
      { title: "重谈框架", text: "对叶菜基地供应商发起二季度价格回顾。", badge: "议价", tone: "success" },
      { title: "风险说明", text: "肉禽类涨价需补充原材指数说明，避免无依据调价。", badge: "说明", tone: "warn" },
      { title: "异常涨幅", text: "高于市场均值 3pt 的报价自动标红。", badge: "预警", tone: "danger" },
      { title: "降本项目", text: "把回谈成功的项目自动归入降本成果池。", badge: "成果", tone: "success" }
    ],
    tableCaption: "价格指数样例",
    table: {
      columns: ["物料", "当前均价", "近三月均价", "波动", "建议"],
      rows: [
        ["冷鲜猪五花肉（件）", "¥ 3.42", "¥ 3.21", "+6.4%", "要求说明"],
        ["精品红提（箱）", "¥ 0.81", "¥ 0.86", "-5.8%", "启动回谈"],
        ["西红柿（筐）", "¥ 1.26", "¥ 1.24", "+1.6%", "锁季度价"],
        ["挂面（组合装）", "¥ 0.47", "¥ 0.44", "+6.8%", "重新比价"]
      ]
    }
  }
};

function buildStubModulePage(title, desc) {
  return {
    kicker: "供应链 ERP",
    title,
    intro: `${desc}。以下为示意布局，可按企业实际流程配置字段与审批。`,
    facts: ["可配置", "留痕", "协同"],
    stats: [
      { label: "待处理", value: "—", trend: "示例指标", trendClass: "warn" },
      { label: "本周新增", value: "—", trend: "示例指标", trendClass: "up" },
      { label: "异常", value: "—", trend: "示例指标", trendClass: "down" },
      { label: "已关闭", value: "—", trend: "示例指标", trendClass: "success" }
    ],
    focus: [
      {
        badge: "提示",
        tone: "success",
        title: "页面可配置",
        text: "建议先完善「基础信息」与「商品管理」主数据，再启用本模块全流程。"
      },
      {
        badge: "集成",
        tone: "warn",
        title: "与上下游联动",
        text: "采购、仓储、财务模块通过统一单号与状态机协同，减少手工对账。"
      },
      {
        badge: "合规",
        tone: "danger",
        title: "审计追溯",
        text: "关键操作保留版本与审批记录，支持事后稽核与复盘。"
      }
    ],
    boardTitle: "示例关注",
    board: [
      { title: "示例事项 A", text: "用于占位展示看板样式，上线后对接真实接口数据。", badge: "Demo", tone: "warn" },
      { title: "示例事项 B", text: "可将供应商承诺、仓库窗口等业务信号汇总到同一屏。", badge: "协同", tone: "success" }
    ],
    listTitle: "建议动作",
    list: [
      { title: "梳理业务规则", text: "与业务部门确认例外场景与审批路径。", badge: "规则", tone: "success" },
      { title: "配置权限", text: "按岗位拆分查询、编辑与导出权限。", badge: "权限", tone: "warn" }
    ],
    tableCaption: "列表示意",
    table: {
      columns: ["单号", "状态", "责任人", "更新时间"],
      rows: [
        ["—", "草稿", "—", "—"],
        ["—", "审批中", "—", "—"],
        ["—", "已生效", "—", "—"]
      ]
    }
  };
}

const subnavShell = document.getElementById("subnav-shell");
const subnav = document.getElementById("subnav");
const subnavTitle = document.getElementById("subnav-title");
const breadcrumb = document.getElementById("breadcrumb");
const pageContent = document.getElementById("page-content");

let activeMenu = "home";
let activePage = null;

function buildMainNav() {
  const cluster = document.getElementById("main-nav-cluster");
  if (!cluster) {
    return;
  }
  cluster.innerHTML = "";
  for (const key of Object.keys(menuConfig)) {
    const menu = menuConfig[key];
    const wrap = document.createElement("div");
    wrap.className = "main-nav-dropdown-wrap";

    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "main-nav-item";
    btn.dataset.menu = key;
    btn.innerHTML = `${menu.title}<span class="main-nav-chevron" aria-hidden="true">▾</span>`;

    const dd = document.createElement("div");
    dd.className = "main-nav-dropdown";
    dd.setAttribute("role", "menu");

    const head = document.createElement("div");
    head.className = "main-nav-dropdown-head";
    head.textContent = menu.title;
    dd.appendChild(head);

    for (const page of menu.pages) {
      const item = document.createElement("button");
      item.type = "button";
      item.className = "main-nav-dropdown-item";
      item.dataset.menu = key;
      item.dataset.page = page.id;
      item.setAttribute("role", "menuitem");
      item.innerHTML = `<strong>${page.label}</strong><span>${page.desc}</span>`;
      dd.appendChild(item);
    }

    wrap.appendChild(btn);
    wrap.appendChild(dd);
    cluster.appendChild(wrap);
  }
}

function updateNavActiveState() {
  document.querySelectorAll(".main-nav-cluster .main-nav-item").forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.menu === activeMenu);
  });
  document.querySelectorAll(".main-nav-dropdown-item").forEach((el) => {
    el.classList.toggle("is-active", el.dataset.menu === activeMenu && el.dataset.page === activePage);
  });
  document.querySelectorAll(".module-subtab").forEach((el) => {
    el.classList.toggle("is-active", el.dataset.page === activePage);
  });
  const feature = document.querySelector(".main-nav-feature");
  if (feature) {
    feature.classList.toggle("active", activeMenu === "function-map");
  }
}

function renderModuleSubtabs(menu) {
  return menu.pages
    .map(
      (page) => `
        <button type="button" class="module-subtab ${page.id === activePage ? "is-active" : ""}" data-page="${page.id}">
          ${page.label}
        </button>
      `
    )
    .join("");
}

function loadMapContentExpanded() {
  try {
    if (sessionStorage.getItem("mapContentExpanded") !== null) {
      return sessionStorage.getItem("mapContentExpanded") !== "0";
    }
    return sessionStorage.getItem("fishboneExpanded") !== "0";
  } catch {
    return true;
  }
}

let mapContentExpanded = loadMapContentExpanded();

function syncMapToggleUI() {
  const toggle = document.getElementById("fishbone-toggle");
  if (!toggle) {
    return;
  }

  const onPage = activeMenu === "function-map";
  const viewLabel = "流程图";
  toggle.setAttribute("aria-expanded", mapContentExpanded ? "true" : "false");
  toggle.classList.toggle("is-collapsed", onPage && !mapContentExpanded);
  toggle.title = onPage
    ? mapContentExpanded
      ? `收起${viewLabel}`
      : `展开${viewLabel}`
    : "进入功能总览（可展开/收起当前视图）";
}

function render() {
  destroyHomeCharts();
  const menu = menuConfig[activeMenu];
  const subtabsHost = document.getElementById("module-subtabs");

  if (activeMenu === "function-map") {
    activePage = null;
    subnavShell.hidden = true;
    subnavTitle.textContent = "功能总览";
    subnav.innerHTML = "";
    if (subtabsHost) {
      subtabsHost.innerHTML = "";
      subtabsHost.hidden = true;
    }
    breadcrumb.textContent = "功能总览";
    pageContent.innerHTML = renderFunctionMapPage();
    queueMicrotask(() => runEnterAnimations());
    updateNavActiveState();
    syncMapToggleUI();
    return;
  }

  subnavShell.hidden = true;
  subnav.innerHTML = "";

  const currentPage = menu.pages.find((page) => page.id === activePage) ?? menu.pages[0];
  activePage = currentPage.id;

  subnavTitle.textContent = menu.title;

  breadcrumb.textContent = `${menu.title} / ${currentPage.label}`;

  if (subtabsHost) {
    subtabsHost.hidden = false;
    subtabsHost.innerHTML = renderModuleSubtabs(menu);
  }

  if (currentPage.id === "module-biz-flow") {
    pageContent.innerHTML = renderModuleLandingPage(activeMenu);
  } else if (activeMenu === "home" && currentPage.id === "home-dashboard") {
    pageContent.innerHTML = renderHomePage();
    queueMicrotask(() => {
      runEnterAnimations();
      initHomeWorkbenchCharts();
    });
  } else if (activeMenu === "market" && currentPage.id === "market-dynamics") {
    pageContent.innerHTML = renderMarketDynamicsPage();
    queueMicrotask(() => runEnterAnimations());
  } else {
    const pageData = modulePages[activePage];
    pageContent.innerHTML = pageData ? renderModulePage(pageData) : renderModulePage(buildStubModulePage(currentPage.label, currentPage.desc));
  }
  queueMicrotask(() => runEnterAnimations());
  updateNavActiveState();
  syncMapToggleUI();
}

function runEnterAnimations(root = document) {
  animateKpiCounters(root);

  const enterEls = Array.from(
    root.querySelectorAll(".kpi-card, .home-chart-card, .home-module-card, .home-list-group, .home-inv-card, .home-rank-panel, .flowchart-node, .biz-flow-banner, .biz-flow-node")
  );
  enterEls.forEach((el, idx) => {
    el.classList.remove("is-in");
    const delay = Math.min(18 * idx, 240);
    window.setTimeout(() => el.classList.add("is-in"), delay);
  });

  const icons = Array.from(root.querySelectorAll(".biz-flow-node-icon svg, .main-nav-feature-icon, .brand-mark"));
  icons.forEach((el) => el.classList.add("is-animated-icon"));
}

function animateKpiCounters(root = document) {
  const els = Array.from(root.querySelectorAll(".kpi-value[data-value]"));
  els.forEach((el) => {
    if (el.dataset.animated === "1") return;
    el.dataset.animated = "1";

    const raw = String(el.dataset.value || el.textContent || "").trim();
    const parsed = parseValueForCount(raw);
    if (!parsed) return;

    const { prefix, suffix, value, decimals } = parsed;
    const duration = 720;
    const t0 = performance.now();

    const step = (t) => {
      const p = Math.min(1, (t - t0) / duration);
      const eased = 1 - Math.pow(1 - p, 3);
      const current = value * eased;
      el.textContent = `${prefix}${current.toFixed(decimals)}${suffix}`;
      if (p < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  });
}

function parseValueForCount(raw) {
  const m = raw.match(/-?\d+(?:\.\d+)?/);
  if (!m) return null;
  const numStr = m[0];
  const value = Number(numStr);
  if (!Number.isFinite(value)) return null;
  const idx = m.index ?? 0;
  return {
    prefix: raw.slice(0, idx),
    suffix: raw.slice(idx + numStr.length),
    value,
    decimals: (numStr.split(".")[1] || "").length
  };
}

function renderFunctionMapPage() {
  return `
    <section id="function-map-root" class="function-map-root" aria-label="功能总览">
      ${renderFlowchartSection()}
    </section>
  `;
}

function renderFlowchartSection() {
  const collapsedClass = mapContentExpanded ? "" : " flowchart-page--collapsed";

  const track = fishboneFlow
    .map((node, index) => {
      const actions = [...node.top, ...node.bottom];
      return `
    <div class="flowchart-segment">
      <article class="flowchart-node" aria-label="${node.stage}">
        <div class="flowchart-node-head">
          <span class="flowchart-node-step">${String(index + 1).padStart(2, "0")}</span>
          <h3 class="flowchart-node-title">${node.stage}</h3>
          <span class="flowchart-node-mod">${node.module}</span>
        </div>
        <ul class="flowchart-node-list">
          ${actions.map((a) => `<li>${a}</li>`).join("")}
        </ul>
      </article>
      ${
        index < fishboneFlow.length - 1
          ? `<div class="flowchart-connector" aria-hidden="true">
        <span class="flowchart-connector-line"></span>
        <span class="flowchart-connector-arrow">▶</span>
      </div>`
          : ""
      }
    </div>`;
    })
    .join("");

  return `
    <section class="flowchart-page${collapsedClass}" aria-label="主要业务模块流程图">
      <div class="flowchart-collapsed-strip" role="status">
        <span>流程图已收起，点击导航右侧「<strong>展开</strong>」可查看。</span>
      </div>
      <header class="flowchart-header">
        <div>
          <h2 class="flowchart-title">主要业务模块流程图</h2>
          <p class="flowchart-desc">
            按<strong>业务先后顺序</strong>串联各模块；线框内为对应阶段的关键操作（示意），便于对齐系统菜单与落地场景。
          </p>
        </div>
        <span class="pill success">默认</span>
      </header>
      <div class="flowchart-scroll">
        <div class="flowchart-track">
          ${track}
          <div class="flowchart-endcap" aria-hidden="true">
            <span class="flowchart-endcap-line"></span>
            <div class="flowchart-endcap-box">
              <span class="flowchart-endcap-title">价值闭环</span>
              <span class="flowchart-endcap-sub">持续改进</span>
            </div>
          </div>
        </div>
      </div>
      <footer class="flowchart-legend">
        <span><strong>说明：</strong>方框为流程节点，箭头表示先后关系；与左侧主导航模块对应。</span>
      </footer>
    </section>
  `;
}

const homeChartInstances = { line: null, pie: null, bar: null };

function destroyHomeCharts() {
  Object.keys(homeChartInstances).forEach((key) => {
    const ch = homeChartInstances[key];
    if (ch) {
      ch.destroy();
      homeChartInstances[key] = null;
    }
  });
}

function initHomeWorkbenchCharts() {
  if (typeof Chart === "undefined") {
    return;
  }
  const lineEl = document.getElementById("home-chart-line");
  const pieEl = document.getElementById("home-chart-pie");
  const barEl = document.getElementById("home-chart-bar");
  if (!lineEl && !pieEl && !barEl) {
    return;
  }

  const fontFamily = '"Segoe UI", "PingFang SC", "Microsoft YaHei", sans-serif';
  Chart.defaults.font.family = fontFamily;
  Chart.defaults.color = "#4a555c";

  if (lineEl) {
    homeChartInstances.line = new Chart(lineEl, {
      type: "line",
      data: {
        labels: ["3/8", "3/15", "3/22", "3/29", "4/5", "4/7"],
        datasets: [
          {
            label: "采购额（万元）",
            data: [118, 132, 126, 145, 158, 186],
            borderColor: "rgb(78, 205, 196)",
            backgroundColor: "rgba(78, 205, 196, 0.14)",
            fill: true,
            tension: 0.35,
            pointRadius: 3,
            pointHoverRadius: 5
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        interaction: { intersect: false, mode: "index" },
        plugins: {
          legend: { display: true, position: "bottom", labels: { boxWidth: 10, font: { size: 11 } } },
          tooltip: {
            callbacks: {
              label: (ctx) => `${ctx.dataset.label || ""}: ${ctx.parsed.y} 万`
            }
          }
        },
        scales: {
          y: {
            beginAtZero: false,
            ticks: {
              callback: (v) => (Number.isFinite(v) ? `${v}` : v),
              font: { size: 10 }
            },
            grid: { color: "rgba(31, 42, 48, 0.06)" }
          },
          x: {
            ticks: { font: { size: 10 } },
            grid: { display: false }
          }
        }
      }
    });
  }

  if (pieEl) {
    homeChartInstances.pie = new Chart(pieEl, {
      type: "pie",
      data: {
        labels: ["蔬菜水果", "肉禽蛋品", "日配乳品", "粮油调味", "日用百货"],
        datasets: [
          {
            data: [32, 22, 18, 15, 13],
            backgroundColor: ["#4ECDC4", "#2F80ED", "#FF6B6B", "#A8DADC", "#9AA3B2"],
            borderWidth: 1,
            borderColor: "#ffffff"
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            position: "bottom",
            labels: { boxWidth: 10, font: { size: 10 }, padding: 8 }
          },
          tooltip: {
            callbacks: {
              label: (ctx) => `${ctx.label}: ${ctx.raw}%（库存金额占比示意）`
            }
          }
        }
      }
    });
  }

  if (barEl) {
    homeChartInstances.bar = new Chart(barEl, {
      type: "bar",
      data: {
        labels: ["第1周", "第2周", "第3周", "第4周"],
        datasets: [
          {
            label: "中标商品数（SKU）",
            data: [12, 19, 15, 22],
            backgroundColor: "rgba(78, 205, 196, 0.85)",
            borderRadius: 4,
            borderSkipped: false
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { display: false },
          tooltip: {
            callbacks: {
              label: (ctx) => `中标 ${ctx.parsed.y} 个 SKU`
            }
          }
        },
        scales: {
          y: {
            beginAtZero: true,
            ticks: { stepSize: 5, font: { size: 10 } },
            grid: { color: "rgba(31, 42, 48, 0.06)" }
          },
          x: {
            ticks: { font: { size: 10 } },
            grid: { display: false }
          }
        }
      }
    });
  }
}

const HOME_WIDGETS = [
  { id: "coreMetrics", label: "核心数据", defaultOn: true },
  { id: "todos", label: "待办", defaultOn: true },
  { id: "notices", label: "通知", defaultOn: true },
  { id: "inventoryBacklog", label: "库存积压", defaultOn: true },
  { id: "inventoryShortage", label: "库存缺失", defaultOn: true },
  { id: "productStats", label: "商品统计", defaultOn: true },
  { id: "supplierPerf", label: "供应商绩效", defaultOn: false },
  { id: "arrears", label: "欠款统计", defaultOn: false },
  { id: "chartLine", label: "近期采购额统计", defaultOn: true },
  { id: "chartPie", label: "库存分类占比", defaultOn: true },
  { id: "chartBar", label: "近期竞价中标", defaultOn: true }
];

const HOME_WIDGETS_STORAGE_KEY = "homeWorkbenchWidgetsV2";
const HOME_WIDGETS_LEGACY_KEY = "homeWorkbenchWidgetsV1";

/** One-time rollout: new defaultOn widgets merge into legacy V1 saves only. */
function mergeDefaultOnIntoSet(set) {
  for (const w of HOME_WIDGETS) {
    if (w.defaultOn && !set.has(w.id)) {
      set.add(w.id);
    }
  }
}

function getHomeWidgetState() {
  try {
    let raw = localStorage.getItem(HOME_WIDGETS_STORAGE_KEY);
    if (!raw) {
      const legacy = localStorage.getItem(HOME_WIDGETS_LEGACY_KEY);
      if (legacy) {
        try {
          const arr = JSON.parse(legacy);
          const set = new Set(Array.isArray(arr) ? arr.filter((x) => typeof x === "string") : []);
          mergeDefaultOnIntoSet(set);
          saveHomeWidgetState(Array.from(set));
        } catch {
          /* fall through */
        }
        try {
          localStorage.removeItem(HOME_WIDGETS_LEGACY_KEY);
        } catch {
          /* ignore */
        }
        raw = localStorage.getItem(HOME_WIDGETS_STORAGE_KEY);
      }
    }
    if (!raw) {
      return new Set(HOME_WIDGETS.filter((w) => w.defaultOn).map((w) => w.id));
    }
    const arr = JSON.parse(raw);
    if (!Array.isArray(arr)) {
      return new Set(HOME_WIDGETS.filter((w) => w.defaultOn).map((w) => w.id));
    }
    return new Set(arr.filter((x) => typeof x === "string"));
  } catch {
    return new Set(HOME_WIDGETS.filter((w) => w.defaultOn).map((w) => w.id));
  }
}

function saveHomeWidgetState(ids) {
  try {
    localStorage.setItem(HOME_WIDGETS_STORAGE_KEY, JSON.stringify(ids));
  } catch {
    /* ignore */
  }
}

function resetHomeWidgetState() {
  try {
    localStorage.removeItem(HOME_WIDGETS_STORAGE_KEY);
    localStorage.removeItem(HOME_WIDGETS_LEGACY_KEY);
  } catch {
    /* ignore */
  }
}

function renderHomeCustomizeModal(enabledSet) {
  const options = HOME_WIDGETS.map((w) => {
    const checked = enabledSet.has(w.id) ? "checked" : "";
    return `
      <label class="home-customize-option">
        <input type="checkbox" class="home-customize-check" value="${w.id}" ${checked} />
        <span>${w.label}</span>
      </label>
    `;
  }).join("");

  return `
    <div class="home-modal-backdrop" id="home-customize-modal" hidden>
      <div class="home-modal" role="dialog" aria-modal="true" aria-labelledby="home-customize-title">
        <div class="home-modal-head">
          <div>
            <h3 id="home-customize-title">自定义工作台</h3>
            <p class="home-modal-sub">勾选要展示的内容（仅影响你的工作台）。</p>
          </div>
          <button type="button" class="home-modal-close" id="home-customize-cancel" aria-label="关闭">×</button>
        </div>
        <div class="home-customize-grid">
          ${options}
        </div>
        <div class="home-modal-actions">
          <button type="button" class="home-btn home-btn-ghost" id="home-customize-reset">恢复默认</button>
          <div class="home-modal-actions-right">
            <button type="button" class="home-btn home-btn-ghost" id="home-customize-cancel-2">取消</button>
            <button type="button" class="home-btn home-btn-primary" id="home-customize-save">保存</button>
          </div>
        </div>
      </div>
    </div>
  `;
}

const HOME_WIDGETS_MODAL_REV = HOME_WIDGETS.map((w) => w.id).join("|");

function ensureHomeCustomizeModal() {
  let host = document.getElementById("home-customize-modal");
  const stale =
    host &&
    (host.dataset.widgetsRev !== HOME_WIDGETS_MODAL_REV ||
      host.querySelectorAll(".home-customize-check").length !== HOME_WIDGETS.length);
  if (stale && host) {
    host.parentNode?.remove();
    host = null;
  }
  if (!host) {
    const wrap = document.createElement("div");
    wrap.innerHTML = renderHomeCustomizeModal(getHomeWidgetState());
    document.body.appendChild(wrap);
    host = document.getElementById("home-customize-modal");
    if (host) {
      host.dataset.widgetsRev = HOME_WIDGETS_MODAL_REV;
    }
  } else {
    // Refresh checked state to current storage
    const enabled = getHomeWidgetState();
    host.querySelectorAll(".home-customize-check").forEach((el) => {
      el.checked = enabled.has(el.value);
    });
  }
  if (host && host.dataset.bound !== "1") {
    host.dataset.bound = "1";
    host.addEventListener("click", (event) => {
      // click backdrop to close
      if (event.target === host) {
        host.hidden = true;
        goHomeDashboard();
        render();
        return;
      }
      const cancel = event.target.closest("#home-customize-cancel, #home-customize-cancel-2");
      if (cancel) {
        event.preventDefault();
        host.hidden = true;
        goHomeDashboard();
        render();
        return;
      }
      const resetBtn = event.target.closest("#home-customize-reset");
      if (resetBtn) {
        event.preventDefault();
        resetHomeWidgetState();
        host.hidden = true;
        goHomeDashboard();
        render();
        return;
      }
      const saveBtn = event.target.closest("#home-customize-save");
      if (saveBtn) {
        event.preventDefault();
        const checks = Array.from(host.querySelectorAll(".home-customize-check:checked"));
        const ids = checks.map((c) => c.value);
        saveHomeWidgetState(ids);
        host.hidden = true;
        goHomeDashboard();
        render();
        return;
      }
    });
  }
  return host;
}

function goHomeDashboard() {
  activeMenu = "home";
  activePage = "home-dashboard";
}

function renderHomeSupplierPerf() {
  const rows = [
    { name: "鲜时达冷链", score: "92", ontime: "96%", quality: "98%", note: "稳定" },
    { name: "甄鲜果蔬", score: "86", ontime: "89%", quality: "95%", note: "交付波动" },
    { name: "绿源肉联", score: "84", ontime: "91%", quality: "93%", note: "需复盘" }
  ];
  return `
    <section class="home-section home-section--compact home-col">
      <div class="panel-head">
        <h3>供应商绩效</h3>
        <span class="pill">近 30 天</span>
      </div>
      <div class="home-simple-table">
        <div class="home-simple-row home-simple-head">
          <span>供应商</span><span>综合</span><span>准时</span><span>质量</span><span>备注</span>
        </div>
        ${rows
          .map(
            (r) => `
          <div class="home-simple-row">
            <span>${r.name}</span><span>${r.score}</span><span>${r.ontime}</span><span>${r.quality}</span><span>${r.note}</span>
          </div>`
          )
          .join("")}
      </div>
    </section>
  `;
}

function renderHomeArrears() {
  const rows = [
    { name: "鲜时达冷链", amt: "¥ 12.4万", age: "0-15 天", status: "正常" },
    { name: "绿源肉联", amt: "¥ 6.3万", age: "16-30 天", status: "关注" },
    { name: "家清优选", amt: "¥ 4.9万", age: "31+ 天", status: "预警" }
  ];
  return `
    <section class="home-section home-section--compact home-col">
      <div class="panel-head">
        <h3>欠款统计</h3>
        <span class="pill warn">账期</span>
      </div>
      <div class="home-simple-table">
        <div class="home-simple-row home-simple-row--4 home-simple-head">
          <span>供应商</span><span>金额</span><span>账龄</span><span>状态</span>
        </div>
        ${rows
          .map(
            (r) => `
          <div class="home-simple-row home-simple-row--4">
            <span>${r.name}</span><span>${r.amt}</span><span>${r.age}</span><span>${r.status}</span>
          </div>`
          )
          .join("")}
      </div>
    </section>
  `;
}

function renderHomeInventoryBacklog() {
  const { backlog } = homeInventoryAlert;
  return `
    <section class="home-section home-section--compact home-col home-analytics">
      <div class="panel-head">
        <h3>${backlog.title}</h3>
        <span class="pill warn">资金占用</span>
      </div>
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
    </section>
  `;
}

function renderHomeInventoryShortage() {
  const { shortage } = homeInventoryAlert;
  return `
    <section class="home-section home-section--compact home-col home-analytics">
      <div class="panel-head">
        <h3>${shortage.title}</h3>
        <span class="pill danger">断货风险</span>
      </div>
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
    </section>
  `;
}

function renderHomeInventoryAlertCombined() {
  return `
    <section class="home-section home-section--compact home-col home-analytics">
      <div class="panel-head">
        <h3>库存预警</h3>
        <span class="pill warn">资金与缺货</span>
      </div>
      ${renderHomeInventoryAlert()}
    </section>
  `;
}

const MARKET_TAGS_KEY = "homeMarketTagsV1";
const MARKET_ACTIVE_TAG_KEY = "homeMarketActiveTagV1";

const defaultMarketTags = ["零售", "供应链", "物流", "商品分类选取", "企业福利市场"];

const marketNews = [
  { tag: "零售", title: "社区门店鲜食增长：即配品类占比提升", summary: "建议关注日配与熟食供应稳定性，提前锁定高峰时段产能。", time: "09:20" },
  { tag: "供应链", title: "产地直采趋势：叶菜价格波动加大", summary: "建议增加 1-2 个备选基地，并设置到货时段容错。", time: "10:05" },
  { tag: "物流", title: "冷链运力紧张：跨城干线延误风险上升", summary: "建议对关键 SKU 提前发运，设置缺货阈值预警。", time: "11:10" },
  { tag: "商品分类选取", title: "春季爆品：草莓/脐橙/西红柿动销上升", summary: "建议复核门店补货频率与陈列策略，避免积压与缺货同时发生。", time: "14:30" },
  { tag: "企业福利市场", title: "团购福利季启动：礼盒需求集中", summary: "建议提前锁定礼盒包材与果品等级，明确交付 SLA。", time: "16:05" }
];

function getMarketTags() {
  try {
    const raw = localStorage.getItem(MARKET_TAGS_KEY);
    const parsed = raw ? JSON.parse(raw) : null;
    const tags = Array.isArray(parsed) ? parsed.filter((t) => typeof t === "string" && t.trim()) : defaultMarketTags;
    return tags.length ? tags : defaultMarketTags;
  } catch {
    return defaultMarketTags;
  }
}

function saveMarketTags(tags) {
  try {
    localStorage.setItem(MARKET_TAGS_KEY, JSON.stringify(tags));
  } catch {
    /* ignore */
  }
}

function getActiveMarketTag(tags) {
  try {
    const t = localStorage.getItem(MARKET_ACTIVE_TAG_KEY);
    if (t && tags.includes(t)) return t;
  } catch {
    /* ignore */
  }
  return tags[0] ?? "";
}

function setActiveMarketTag(tag) {
  try {
    localStorage.setItem(MARKET_ACTIVE_TAG_KEY, tag);
  } catch {
    /* ignore */
  }
}

function renderMarketTagsModal(tags) {
  const value = tags.join("、");
  return `
    <div class="home-modal-backdrop" id="market-tags-modal" hidden>
      <div class="home-modal" role="dialog" aria-modal="true" aria-labelledby="market-tags-title">
        <div class="home-modal-head">
          <div>
            <h3 id="market-tags-title">市场动态标签</h3>
            <p class="home-modal-sub">用“、/，/,/空格/换行”分隔，最多 12 个。</p>
          </div>
          <button type="button" class="home-modal-close" id="market-tags-close" aria-label="关闭">×</button>
        </div>
        <div class="home-modal-body">
          <textarea class="home-textarea" id="market-tags-input" rows="4" spellcheck="false">${value}</textarea>
          <div class="home-mini-hint">示例：零售、供应链、物流、企业福利市场</div>
        </div>
        <div class="home-modal-actions">
          <button type="button" class="home-btn home-btn-ghost" id="market-tags-reset">恢复默认</button>
          <div class="home-modal-actions-right">
            <button type="button" class="home-btn home-btn-ghost" id="market-tags-cancel">取消</button>
            <button type="button" class="home-btn home-btn-primary" id="market-tags-save">保存</button>
          </div>
        </div>
      </div>
    </div>
  `;
}

function ensureMarketTagsModal() {
  let host = document.getElementById("market-tags-modal");
  if (!host) {
    const wrap = document.createElement("div");
    wrap.innerHTML = renderMarketTagsModal(getMarketTags());
    document.body.appendChild(wrap);
    host = document.getElementById("market-tags-modal");
  }
  if (host && host.dataset.bound !== "1") {
    host.dataset.bound = "1";
    host.addEventListener("click", (event) => {
      if (event.target === host) {
        host.hidden = true;
        return;
      }
      const close = event.target.closest("#market-tags-close, #market-tags-cancel");
      if (close) {
        event.preventDefault();
        host.hidden = true;
        return;
      }
      const reset = event.target.closest("#market-tags-reset");
      if (reset) {
        event.preventDefault();
        saveMarketTags(defaultMarketTags);
        setActiveMarketTag(defaultMarketTags[0]);
        host.hidden = true;
        render();
        return;
      }
      const save = event.target.closest("#market-tags-save");
      if (save) {
        event.preventDefault();
        const input = host.querySelector("#market-tags-input");
        const raw = String(input?.value || "");
        const tags = raw
          .split(/[、，,\n\r\t ]+/g)
          .map((t) => t.trim())
          .filter(Boolean)
          .slice(0, 12);
        const finalTags = tags.length ? tags : defaultMarketTags;
        saveMarketTags(finalTags);
        const active = getActiveMarketTag(finalTags);
        setActiveMarketTag(active);
        host.hidden = true;
        render();
        return;
      }
    });
  }
  return host;
}

function renderMarketDynamicsPanel(limit = 10) {
  const tags = getMarketTags();
  const active = getActiveMarketTag(tags);
  const items = marketNews.filter((n) => n.tag === active).slice(0, limit);

  return `
    <section class="home-section home-section--compact home-col" id="home-market-dynamics" tabindex="-1">
      <div class="panel-head">
        <div class="home-head-left">
          <h3>市场动态</h3>
          <span class="pill">采购视角</span>
        </div>
        <button type="button" class="home-btn home-btn-ghost" id="market-tags-open">标签设置</button>
      </div>

      <div class="market-tags" role="tablist" aria-label="市场动态标签">
        ${tags
          .map(
            (t) => `
          <button type="button" class="market-tag ${t === active ? "is-active" : ""}" data-market-tag="${t}">
            ${t}
          </button>`
          )
          .join("")}
      </div>

      <ul class="market-list">
        ${items
          .map(
            (n) => `
          <li class="market-item">
            <div class="market-item-head">
              <strong class="market-item-title">${n.title}</strong>
              <span class="market-item-time">${n.time}</span>
            </div>
            <p class="market-item-summary">${n.summary}</p>
          </li>`
          )
          .join("")}
      </ul>
    </section>
  `;
}

function renderMarketDynamicsPage() {
  return `
    <section class="home-page">
      ${renderMarketDynamicsPanel(10)}
    </section>
  `;
}


function renderHomePage() {
  const enabled = getHomeWidgetState();
  const showCore = enabled.has("coreMetrics");
  const showTodos = enabled.has("todos");
  const showNotices = enabled.has("notices");
  const showInventoryBacklog = enabled.has("inventoryBacklog");
  const showInventoryShortage = enabled.has("inventoryShortage");
  const showProductStats = enabled.has("productStats");
  const showSupplierPerf = enabled.has("supplierPerf");
  const showArrears = enabled.has("arrears");
  const showLine = enabled.has("chartLine");
  const showPie = enabled.has("chartPie");
  const showBar = enabled.has("chartBar");

  const charts = [
    showLine
      ? `<article class="home-chart-card">
            <h4 class="home-chart-title">近1个月采购额</h4>
            <div class="home-chart-canvas-wrap">
              <canvas id="home-chart-line" role="img" aria-label="近1个月采购额折线图"></canvas>
            </div>
          </article>`
      : "",
    showPie
      ? `<article class="home-chart-card">
            <h4 class="home-chart-title">库存分类占比</h4>
            <div class="home-chart-canvas-wrap">
              <canvas id="home-chart-pie" role="img" aria-label="当前库存分类占比饼图"></canvas>
            </div>
          </article>`
      : "",
    showBar
      ? `<article class="home-chart-card">
            <h4 class="home-chart-title">近1个月竞价中标</h4>
            <div class="home-chart-canvas-wrap">
              <canvas id="home-chart-bar" role="img" aria-label="近1个月竞价中标柱形图"></canvas>
            </div>
          </article>`
      : ""
  ]
    .filter(Boolean)
    .join("");

  const hasKpiCol = showCore || showTodos;
  const hasNoticeCol = showNotices;
  const topRowClass = hasKpiCol && hasNoticeCol ? "home-row home-row--two" : "home-row";

  const kpiTodoColumn = `
        <div class="home-col home-col--stack">
          ${
            showCore
              ? `<section class="home-section home-section--compact home-kpi">
          <div class="panel-head">
            <div class="home-head-left">
              <h3>工作台总览</h3>
              <span class="pill">今日</span>
            </div>
            <button type="button" class="home-btn home-btn-ghost" id="home-customize-open">自定义</button>
          </div>
          <div class="stat-grid stat-grid--home">${renderMetricCards(homeStats)}</div>
        </section>`
              : ""
          }
          ${
            showTodos
              ? `<section class="home-section home-section--compact home-todos">
          <div class="panel-head">
            <h3>我的待办</h3>
            <span class="pill warn">按模块</span>
          </div>
          <div class="home-module-grid home-module-grid--dense">
            ${homeByModule.map((g) => renderHomeTodoBlock(g)).join("")}
          </div>
        </section>`
              : ""
          }
        </div>`;

  const noticeColumn = showNotices
    ? `<section class="home-section home-section--compact home-col home-notice-col">
          <div class="panel-head">
            <h3>通知</h3>
            <span class="pill">按模块</span>
          </div>
          <div class="home-module-grid home-module-grid--dense">
            ${homeByModule.map((g) => renderHomeMessageBlock(g)).join("")}
          </div>
        </section>`
    : "";

  return `
    <section class="home-page">
      ${
        hasKpiCol || hasNoticeCol
          ? `<div class="${topRowClass}">
        ${hasKpiCol ? kpiTodoColumn : ""}
        ${hasNoticeCol ? noticeColumn : ""}
      </div>`
          : ""
      }

      ${
        charts
          ? `<section class="home-section home-section--compact home-charts-wrap" aria-label="统计图示">
        <div class="home-charts-row">${charts}</div>
      </section>`
          : ""
      }

      ${
        showInventoryBacklog || showInventoryShortage || showProductStats
          ? `<div class="home-row home-row--two">
        ${
          showInventoryBacklog && showInventoryShortage
            ? renderHomeInventoryAlertCombined()
            : showInventoryBacklog
              ? renderHomeInventoryBacklog()
              : showInventoryShortage
                ? renderHomeInventoryShortage()
                : ""
        }
        ${
          showProductStats
            ? `<section class="home-section home-section--compact home-col home-analytics">
          <div class="panel-head">
            <h3>商品统计</h3>
            <span class="pill">近 30 天</span>
          </div>
          ${renderHomeProductRankings()}
        </section>`
            : ""
        }
      </div>`
          : ""
      }

      ${
        showSupplierPerf || showArrears
          ? `<div class="home-row home-row--two">
        ${showSupplierPerf ? renderHomeSupplierPerf() : ""}
        ${showArrears ? renderHomeArrears() : ""}
      </div>`
          : ""
      }
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
              <p class="home-item-desc">${t.text}</p>
            </li>`
            )
            .join("")}
        </ul>`;

  return `
    <section class="home-list-group" aria-label="${group.name} 待办">
      <div class="home-list-group-head">
        <span class="home-list-group-name">${group.name}</span>
        <span class="home-list-group-count" aria-label="待办数量">${count}</span>
      </div>
      <div class="home-list-group-body">${items}</div>
    </section>
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
              <p class="home-item-desc">${m.text}</p>
            </li>`
            )
            .join("")}
        </ul>`;

  return `
    <section class="home-list-group home-list-group--msg" aria-label="${group.name} 通知">
      <div class="home-list-group-head">
        <span class="home-list-group-name">${group.name}</span>
      </div>
      <div class="home-list-group-body">${items}</div>
    </section>
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
          <strong class="kpi-value" data-value="${item.value}">${item.value}</strong>
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

document.getElementById("main-nav").addEventListener("click", (event) => {
  const toggle = event.target.closest("#fishbone-toggle");
  if (toggle) {
    event.preventDefault();
    event.stopPropagation();
    if (activeMenu !== "function-map") {
      activeMenu = "function-map";
      activePage = null;
      render();
      return;
    }
    mapContentExpanded = !mapContentExpanded;
    try {
      sessionStorage.setItem("mapContentExpanded", mapContentExpanded ? "1" : "0");
    } catch {
      /* ignore */
    }
    render();
    return;
  }

  const dropItem = event.target.closest(".main-nav-dropdown-item");
  if (dropItem) {
    event.preventDefault();
    activeMenu = dropItem.dataset.menu;
    activePage = dropItem.dataset.page;
    render();
    return;
  }

  const navBtn = event.target.closest(".main-nav-cluster .main-nav-item");
  if (!navBtn) {
    return;
  }

  activeMenu = navBtn.dataset.menu;
  const navMenu = menuConfig[activeMenu];
  activePage = navMenu.pages.length ? navMenu.pages[0].id : null;
  render();
});

document.addEventListener("click", (event) => {
  const openCustomize = event.target.closest("#home-customize-open, #workbench-customize-open");
  if (openCustomize) {
    event.preventDefault();
    const modal = ensureHomeCustomizeModal();
    if (modal) modal.hidden = false;
    return;
  }
});

document.getElementById("content-shell").addEventListener("click", (event) => {
  const tab = event.target.closest(".module-subtab");
  if (!tab) {
    return;
  }
  event.preventDefault();
  activePage = tab.dataset.page;
  render();
});

document.addEventListener("keydown", (event) => {
  if (event.key !== "Escape") {
    return;
  }
  const modal = document.getElementById("home-customize-modal");
  if (!modal || modal.hidden) {
    return;
  }
  modal.hidden = true;
  goHomeDashboard();
  render();
});

buildMainNav();
ensureHomeCustomizeModal();
ensureMarketTagsModal();
render();

function getNowTimeHHMM() {
  const d = new Date();
  const hh = String(d.getHours()).padStart(2, "0");
  const mm = String(d.getMinutes()).padStart(2, "0");
  return `${hh}:${mm}`;
}

function appendAiMessage(role, text) {
  const chat = document.getElementById("ai-chat");
  if (!chat) return;
  const el = document.createElement("div");
  el.className = `ai-msg ${role === "user" ? "ai-msg--user" : "ai-msg--assistant"}`;
  el.innerHTML = `
    <div class="ai-msg-meta">
      <span>${role === "user" ? "你" : "AI助理"}</span>
      <span>${getNowTimeHHMM()}</span>
    </div>
    <p class="ai-msg-text"></p>
  `;
  el.querySelector(".ai-msg-text").textContent = text;
  chat.appendChild(el);
  chat.scrollTop = chat.scrollHeight;
}

function aiDemoReply(input) {
  const q = (input || "").trim();
  const lower = q.toLowerCase();
  const enabled = getHomeWidgetState();
  const known = HOME_WIDGETS.map((w) => w.label);

  const findWidgetIdByLabel = (label) => HOME_WIDGETS.find((w) => w.label === label)?.id;
  const maybeToggle = (label, on) => {
    const id = findWidgetIdByLabel(label);
    if (!id) return false;
    if (on) enabled.add(id);
    else enabled.delete(id);
    saveHomeWidgetState(Array.from(enabled));
    goHomeDashboard();
    render();
    return true;
  };

  // Simple commands
  const hideMatch = q.match(/^(隐藏|不显示)\s*(.+)$/);
  if (hideMatch) {
    const label = hideMatch[2].trim();
    if (maybeToggle(label, false)) {
      return `已为你隐藏「${label}」。已回到工作台首页刷新。`;
    }
    return `我能隐藏的内容包括：${known.join("、")}。你可以说「隐藏 库存缺失」。`;
  }

  const showMatch = q.match(/^(显示|打开)\s*(.+)$/);
  if (showMatch) {
    const label = showMatch[2].trim();
    if (maybeToggle(label, true)) {
      return `已为你显示「${label}」。已回到工作台首页刷新。`;
    }
    return `我能显示的内容包括：${known.join("、")}。你可以说「显示 供应商绩效」。`;
  }

  if (/自定义|配置|组件|模块/.test(q)) {
    const modal = ensureHomeCustomizeModal();
    if (modal) modal.hidden = false;
    return "已为你打开「自定义工作台」面板，可以勾选想展示的内容。";
  }

  if (/总结.*待办|待办总结|今日待办/.test(q)) {
    const total = homeByModule.reduce((sum, g) => sum + (g.todos?.length || 0), 0);
    const top = homeByModule
      .map((g) => ({ name: g.name, n: g.todos?.length || 0 }))
      .sort((a, b) => b.n - a.n)
      .slice(0, 3)
      .filter((x) => x.n > 0);
    const lines = top.map((x) => `- ${x.name}: ${x.n} 条`).join("\n");
    return `今日待办共 ${total} 条（示例数据）。\n${lines || "- 暂无"}`;
  }

  if (/帮助|怎么用|指令|支持什么/.test(q) || lower === "help") {
    return `我支持（演示版）：\n- 「隐藏/显示 组件名」例如：隐藏 库存缺失\n- 「打开自定义」\n- 「总结今日待办」\n可配置组件：${known.join("、")}`;
  }

  return `收到：${q}\n（当前为前端演示版 AI 助理。你也可以直接用「隐藏/显示」指令控制工作台组件。）`;
}

function openAiDrawer() {
  const drawer = document.getElementById("ai-assistant-drawer");
  if (!drawer) return;
  drawer.hidden = false;
  requestAnimationFrame(() => drawer.classList.add("is-open"));
  const input = document.getElementById("ai-input");
  if (input) input.focus();
  const chat = document.getElementById("ai-chat");
  if (chat && chat.childElementCount === 0) {
    appendAiMessage("assistant", "你好，我是 AI 助理（演示版）。你可以问我：总结今日待办，或输入：隐藏 库存缺失。");
  }
}

function closeAiDrawer() {
  const drawer = document.getElementById("ai-assistant-drawer");
  if (!drawer) return;
  drawer.classList.remove("is-open");
  window.setTimeout(() => {
    drawer.hidden = true;
  }, 240);
}

document.addEventListener("click", (event) => {
  const openBtn = event.target.closest("#ai-assistant-open");
  if (openBtn) {
    event.preventDefault();
    openAiDrawer();
    return;
  }
  const closeBtn = event.target.closest("#ai-assistant-close");
  if (closeBtn) {
    event.preventDefault();
    closeAiDrawer();
    return;
  }
});

document.addEventListener("click", (event) => {
  const tagBtn = event.target.closest(".market-tag");
  if (tagBtn) {
    event.preventDefault();
    const tag = tagBtn.dataset.marketTag;
    if (tag) {
      setActiveMarketTag(tag);
      render();
    }
    return;
  }
  const open = event.target.closest("#market-tags-open");
  if (open) {
    event.preventDefault();
    const modal = ensureMarketTagsModal();
    if (modal) {
      // refresh textarea with current tags
      const tags = getMarketTags();
      const input = modal.querySelector("#market-tags-input");
      if (input) input.value = tags.join("、");
      modal.hidden = false;
    }
    return;
  }
});

const aiForm = document.getElementById("ai-form");
if (aiForm) {
  aiForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const input = document.getElementById("ai-input");
    const text = (input?.value || "").trim();
    if (!text) return;
    if (input) input.value = "";
    appendAiMessage("user", text);
    const reply = aiDemoReply(text);
    window.setTimeout(() => appendAiMessage("assistant", reply), 220);
  });
}

document.addEventListener("keydown", (event) => {
  if (event.key !== "Escape") return;
  const drawer = document.getElementById("ai-assistant-drawer");
  if (drawer && !drawer.hidden) {
    closeAiDrawer();
  }
});
