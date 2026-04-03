const menuConfig = {
  workbench: {
    title: "工作台",
    pages: [{ id: "overview", label: "首页概览", desc: "销售全景与日常协同" }]
  },
  customer: {
    title: "客户管理",
    pages: [
      { id: "customer-list", label: "客户列表", desc: "查看客户池与跟进状态" },
      { id: "customer-clue", label: "线索管理", desc: "新线索分配与转化" },
      { id: "customer-visit", label: "拜访记录", desc: "沉淀客户触达过程" },
      { id: "customer-follow", label: "客户跟进", desc: "推进商机与签约节奏" }
    ]
  },
  tender: {
    title: "投标管理",
    pages: [
      { id: "tender-project", label: "投标项目", desc: "项目全景与排期管理" },
      { id: "tender-document", label: "标书管理", desc: "标书资料与版本维护" },
      { id: "tender-result", label: "中标结果", desc: "结果追踪与复盘沉淀" }
    ]
  },
  business: {
    title: "业务管理",
    pages: [
      { id: "business-order", label: "业务订单", desc: "销售订单与状态追踪" },
      { id: "business-procurement", label: "集采备货", desc: "备货计划与需求协同" },
      { id: "business-solution", label: "配品方案", desc: "组合配品与报价支持" },
      { id: "business-contract", label: "合同管理", desc: "签约流程与归档管理" }
    ]
  },
  bidding: {
    title: "竞价平台",
    pages: [
      { id: "bidding-project", label: "竞价项目", desc: "项目看板与投标排期" },
      { id: "bidding-price", label: "报价策略", desc: "测算毛利与报价区间" },
      { id: "bidding-result", label: "竞价结果", desc: "结果复盘与经验沉淀" },
      { id: "bidding-analysis", label: "价格分析", desc: "竞品价格与中标区间分析" }
    ]
  },
  fulfillment: {
    title: "订单履约",
    pages: [
      { id: "fulfillment-order", label: "履约看板", desc: "订单进度与履约状态" },
      { id: "fulfillment-stock", label: "库存分配", desc: "库存锁定与异常处理" },
      { id: "fulfillment-delivery", label: "出库发运", desc: "出库排程与物流跟踪" },
      { id: "fulfillment-after", label: "售后处理", desc: "退换货与工单闭环" }
    ]
  },
  design: {
    title: "设计中心",
    pages: [
      { id: "design-template", label: "设计模板", desc: "常用业务模板与素材库" },
      { id: "design-combo", label: "组合图", desc: "商品组合图与场景化配图" },
      { id: "design-poster", label: "宣传海报", desc: "活动海报与营销物料" }
    ]
  },
  mall: {
    title: "来福商城",
    pages: [
      { id: "mall-products", label: "商品运营", desc: "上架、调价与活动配置" },
      { id: "mall-orders", label: "订单中心", desc: "订单流转与售后处理" },
      { id: "mall-members", label: "会员增长", desc: "复购、转化与权益运营" }
    ]
  },
  report: {
    title: "统计报表",
    pages: [
      { id: "report-sales", label: "销售报表", desc: "销售额、目标和趋势分析" },
      { id: "report-customer", label: "客户报表", desc: "客户结构与转化表现" },
      { id: "report-product", label: "商品报表", desc: "品类销售与毛利分析" },
      { id: "report-finance", label: "经营分析", desc: "回款、欠款和利润汇总" }
    ]
  },
  wallet: {
    title: "销售钱包",
    pages: [
      { id: "wallet-estimate", label: "预计提成", desc: "预计可分提成与收入汇总" },
      { id: "wallet-income", label: "提成收入", desc: "订单提成收入明细" },
      { id: "wallet-deduction", label: "提成扣减", desc: "扣减项与原因说明" },
      { id: "wallet-order", label: "订单利润", desc: "履后毛利与非销费用分析" }
    ]
  },
  finance: {
    title: "财务管理",
    pages: [
      { id: "finance-receivable", label: "应收看板", desc: "回款进度与风险预警" },
      { id: "finance-settlement", label: "结算中心", desc: "对账与结算流程" },
      { id: "finance-expense", label: "费用申请", desc: "报销与预算控制" }
    ]
  }
};

const contentMap = {
  overview: renderWorkbenchOverview,
  performance: () =>
    renderModulePage({
      title: "业绩追踪",
      intro:
        "从个人、团队、区域三个维度查看销售目标完成情况，快速识别高潜市场与待提升环节。",
      stats: [
        ["本月签约额", "¥ 3,280,000", "较上月 +18%"],
        ["目标达成率", "76%", "华东区领先"],
        ["新增机会", "42", "本周新增 9 条"]
      ],
      items: [
        ["华东大区", "目标完成率 84%，重点项目推进稳定，预计月末冲刺可突破 90%。", "区域表现"],
        ["KA 客户组", "高价值客户续约率保持 92%，建议加快二季度联名方案推进。", "客户续约"],
        ["渠道团队", "新增经销商 6 家，转化较快，但交付协同仍需关注。", "渠道增长"],
        ["产品 B 线", "平均成交周期缩短 5 天，报价策略表现良好。", "产品表现"]
      ]
    }),
  schedule: () =>
    renderModulePage({
      title: "日程中心",
      intro:
        "统一承接拜访、评审、签约与复盘安排，让个人节奏和团队协作都更清晰。",
      stats: [
        ["今日待执行", "7 项", "含 2 个重点客户拜访"],
        ["本周会议", "16 场", "跨部门会议 5 场"],
        ["提醒事项", "11 条", "3 条需今日确认"]
      ],
      items: [
        ["09:30 华星医疗拜访", "确认续签框架协议与季度返利细则，已同步法务准备资料。", "外出拜访"],
        ["13:30 集采备货评审", "聚焦华南区域库存补货节奏，协调供应与物流计划。", "内部会议"],
        ["15:00 竞价项目复盘", "复盘市一院投标策略，整理报价模型优化建议。", "项目复盘"],
        ["17:20 合同审批催办", "跟进 3 份待审批合同，避免影响本周回款。", "流程提醒"]
      ]
    }),
  "customer-list": () =>
    renderModulePage({
      title: "客户列表",
      intro:
        "集中查看客户分层、当前阶段与负责人，适合快速定位重点客户和跟进节奏。",
      stats: [
        ["客户总量", "1,286", "A 类客户 184 家"],
        ["本周活跃", "319", "较上周 +12%"],
        ["流失预警", "27", "建议优先回访"]
      ],
      items: [
        ["上海瑞康", "本月预计签约，当前处于商务谈判阶段，负责人为张晨。", "重点客户"],
        ["苏州华达", "近 14 天无跟进记录，需补充拜访计划并确认采购节奏。", "跟进提醒"],
        ["宁波盛禾", "已进入样品测试阶段，转化概率较高，建议提前准备报价。", "转化机会"],
        ["合肥医采", "历史回款稳定，可纳入二季度重点拓展名单。", "优质客户"]
      ]
    }),
  "customer-clue": () =>
    renderModulePage({
      title: "线索管理",
      intro:
        "用于接收市场、渠道和商城沉淀的新线索，追踪分配、首联和转化全过程。",
      stats: [
        ["待分配线索", "18", "今日新增 5 条"],
        ["首联完成率", "88%", "平均响应 2.6 小时"],
        ["转商机率", "36%", "重点关注华中区域"]
      ],
      items: [
        ["展会收集线索", "建议按行业和采购规模重新分组，优先给 KA 组处理。", "来源分析"],
        ["线上咨询客户", "商城活动带来的一批咨询中，企业采购意向明显上升。", "活动转化"],
        ["渠道转介绍", "合作伙伴本周转介绍 7 条，质量较高，建议单独标记。", "高质量线索"],
        ["沉默线索激活", "计划通过短信与福利券进行二次触达。", "运营动作"]
      ]
    }),
  "customer-visit": () =>
    renderModulePage({
      title: "拜访记录",
      intro:
        "沉淀客户拜访过程、沟通要点和后续动作，方便团队协同与复盘。",
      stats: [
        ["本周拜访", "24 次", "面对面 15 次"],
        ["已提交纪要", "20 份", "完整率 83%"],
        ["待跟进动作", "13 项", "3 项已超时"]
      ],
      items: [
        ["华东医院集团", "客户关注集中采购后的价格波动，希望获得年度价格保护方案。", "客户反馈"],
        ["嘉禾连锁药房", "门店扩张节奏加快，对快速补货能力要求更高。", "经营洞察"],
        ["明瑞科技", "计划四月中旬启动试点采购，需准备试用合同。", "下一步动作"],
        ["康信器械", "竞品近期做促销，建议同步更新对比话术。", "竞争情报"]
      ]
    }),
  "customer-follow": () =>
    renderModulePage({
      title: "客户跟进",
      intro:
        "按客户阶段管理推进动作，明确下一步计划与负责人，让商机转化更稳定。",
      stats: [
        ["跟进中客户", "86", "重点客户 18 家"],
        ["今日待联系", "12", "其中 4 家需电话确认"],
        ["本周推进率", "72%", "较上周提升 9%"]
      ],
      items: [
        ["华星医疗", "客户已确认季度采购意向，待补发正式报价单。", "推进中"],
        ["嘉禾药房", "返利方案需本周确认，避免影响合同签署。", "关键节点"],
        ["合肥医采", "计划下周安排商务拜访，推动样品测试转采购。", "计划动作"],
        ["苏州华达", "连续 14 天未触达，建议优先回访。", "预警"]
      ]
    }),
  "tender-project": () =>
    renderModulePage({
      title: "投标项目",
      intro:
        "统一管理招投标项目排期、报名、答疑和投标进度，保证关键节点不遗漏。",
      stats: [
        ["进行中项目", "18", "本周新增 3 个"],
        ["本月截止", "7", "需重点跟进资料准备"],
        ["中标率", "29%", "环比提升 4%"]
      ],
      items: [
        ["市一院耗材招标", "进入答疑阶段，周五前提交技术响应。", "重点项目"],
        ["华北医联体项目", "报名资料已提交，待确认评审时间。", "已报名"],
        ["妇幼设备采购", "需补充售后服务证明文件。", "资料待补"],
        ["南城新区医院", "预计下周开标，报价方案需最终确认。", "待开标"]
      ]
    }),
  "tender-document": () =>
    renderModulePage({
      title: "标书管理",
      intro:
        "集中维护标书模板、资质文件和版本记录，减少重复整理和错漏风险。",
      stats: [
        ["标书模板", "42 套", "本月更新 5 套"],
        ["资质文件", "116 份", "8 份即将到期"],
        ["版本管理", "23 次", "本周新增 6 次"]
      ],
      items: [
        ["商务标模板", "已统一新版封面和目录格式。", "模板更新"],
        ["资质证照", "3 份证照下月到期，需提前续办。", "到期提醒"],
        ["投标承诺函", "建议增加电子签版本，便于快速提交。", "效率优化"],
        ["参数响应表", "高频品类已整理为标准答复库。", "素材沉淀"]
      ]
    }),
  "tender-result": () =>
    renderModulePage({
      title: "中标结果",
      intro:
        "沉淀中标与失标原因，为后续报价策略、投标材料和项目选择提供参考。",
      stats: [
        ["本季中标", "14", "金额 ¥ 620 万"],
        ["失标复盘", "9", "价格原因占 44%"],
        ["复盘沉淀", "21", "已同步知识库"]
      ],
      items: [
        ["华东医联体", "中标关键在交付时效和售后承诺。", "成功经验"],
        ["北区试剂项目", "失标主因是价格竞争力不足。", "失标原因"],
        ["市妇幼采购", "专家更看重服务响应材料完整性。", "评审偏好"],
        ["经验库更新", "建议沉淀高频问答和资质清单。", "知识沉淀"]
      ]
    }),
  "business-order": () =>
    renderModulePage({
      title: "业务订单",
      intro:
        "追踪订单创建、审核、分配和出库状态，帮助销售实时掌握业务订单进展。",
      stats: [
        ["今日订单", "126", "新增企业订单 18 笔"],
        ["待审核", "9", "2 笔需补采购附件"],
        ["异常订单", "7", "3 笔待人工处理"]
      ],
      items: [
        ["订单 11897768", "超时未分配库存，需尽快协调仓库锁定。", "异常订单"],
        ["订单 11897792", "客户要求拆单发货，待业务确认。", "待确认"],
        ["订单 11897653", "已完成审核，等待出库排程。", "待履约"],
        ["企业集采订单", "建议单独标识大客户订单，优先跟踪。", "管理建议"]
      ]
    }),
  "business-procurement": () =>
    renderModulePage({
      title: "集采备货",
      intro:
        "根据销售预测、活动计划和库存状况制定备货方案，降低缺货和积压风险。",
      stats: [
        ["本周备货计划", "12", "活动专项 3 个"],
        ["紧急补货", "4", "较上周下降 2 次"],
        ["预测准确率", "87%", "重点品类较稳定"]
      ],
      items: [
        ["华东活动备货", "商城活动预计带来 20% 增长，建议提前补货。", "活动协同"],
        ["基础耗材组合", "建议按区域销量拆分备货节奏。", "品类趋势"],
        ["冷门 SKU 清理", "可通过套餐促销减少慢周转库存。", "库存优化"],
        ["季度备货评审", "需销售补充客户拉货预测。", "协同提醒"]
      ]
    }),
  "business-solution": () =>
    renderModulePage({
      title: "配品方案",
      intro:
        "为不同客户场景提供组合配品、替代品推荐和报价支持，提升方案成交率。",
      stats: [
        ["方案库", "68 套", "本月新增 9 套"],
        ["待确认方案", "11", "其中 4 套需产品复核"],
        ["成交转化", "33%", "组合方案表现更优"]
      ],
      items: [
        ["社区门诊方案", "主推高频耗材加低温配送组合。", "常用场景"],
        ["连锁药房方案", "建议用动销快的蓝莓系列带动关联品。", "配品建议"],
        ["妇幼专科方案", "可增加一次性包类组合，提升客单。", "重点行业"],
        ["替代推荐", "缺货时优先切换同等级替代品。", "应急处理"]
      ]
    }),
  "business-contract": () =>
    renderModulePage({
      title: "合同管理",
      intro:
        "围绕合同拟定、审批、签署和归档做统一管理，保障签约效率和资料留存。",
      stats: [
        ["审批中", "14 份", "紧急件 3 份"],
        ["待签署", "8 份", "本周可完成 3 份"],
        ["已归档", "2,416 份", "电子签占比 74%"]
      ],
      items: [
        ["上海瑞康续签合同", "卡在财务复核节点，待补信用期限说明。", "流程阻塞"],
        ["嘉禾年度框架协议", "已进入法务复核，本周重点推进。", "重点合同"],
        ["新版模板启用", "返利与账期条款已统一更新。", "模板更新"],
        ["归档清单", "待补 11 份附件资料。", "归档提醒"]
      ]
    }),
  "contract-draft": () =>
    renderModulePage({
      title: "合同草拟",
      intro:
        "标准模板与条款组件沉淀后，销售可更快发起合同，提高签约流转效率。",
      stats: [
        ["本月新建", "36 份", "模板使用率 91%"],
        ["待补条款", "8 份", "主要集中在返利政策"],
        ["平均草拟时长", "18 分钟", "较上月缩短 6 分钟"]
      ],
      items: [
        ["渠道合作协议", "新增返点阶梯模板，适合区域经销商合作场景。", "模板升级"],
        ["框架采购合同", "法务已确认新版争议解决条款，可直接引用。", "条款更新"],
        ["年度续签合同", "建议默认带出历史采购额与续签优惠信息。", "效率建议"],
        ["试用合作协议", "适合样品测试与短期试点项目。", "轻量模板"]
      ]
    }),
  "contract-approval": () =>
    renderModulePage({
      title: "审批进度",
      intro:
        "查看合同从销售、法务、财务到管理层的审批状态，及时发现阻塞节点。",
      stats: [
        ["审批中", "14 份", "其中紧急件 3 份"],
        ["平均耗时", "2.3 天", "法务节点最长"],
        ["退回修改", "5 份", "本周需重点清理"]
      ],
      items: [
        ["上海瑞康续签合同", "卡在财务复核节点，需补充信用期限说明。", "流程阻塞"],
        ["华南渠道协议", "管理层已审批通过，等待电子签章。", "临近完成"],
        ["明瑞科技试点协议", "法务建议调整保密条款，销售需确认范围。", "修改提醒"],
        ["嘉禾药房年度框架", "已加急处理，预计今日内完成。", "加急件"]
      ]
    }),
  "contract-archive": () =>
    renderModulePage({
      title: "合同归档",
      intro:
        "对已签订合同进行编号、分类和检索，保证后续续签、回款与审计都能快速追踪。",
      stats: [
        ["已归档合同", "2,416 份", "电子签占比 74%"],
        ["本月新增归档", "58 份", "自动归档率提升"],
        ["待补附件", "11 份", "需补营业执照扫描件"]
      ],
      items: [
        ["归档完整率", "建议对补充协议和附件做一致性检查，避免续签时遗漏。", "质量建议"],
        ["编号规则", "可按区域 + 年份 + 客户编码统一管理。", "规范说明"],
        ["检索热词", "近三个月高频查询集中在返利、账期、终止条款。", "查询洞察"],
        ["审计支持", "支持导出合同清单与签章记录，方便审计复核。", "场景支持"]
      ]
    }),
  "bidding-project": () =>
    renderModulePage({
      title: "竞价项目",
      intro:
        "跟踪招标项目阶段、投标时间和协同责任人，让竞价动作更可控。",
      stats: [
        ["进行中项目", "22", "本周新增 4 个"],
        ["重点投标", "6", "本月中标窗口期"],
        ["平均中标率", "31%", "高于行业均值"]
      ],
      items: [
        ["市一院器械采购项目", "进入答疑阶段，需在周五前提交技术参数说明。", "重点项目"],
        ["华北联合集采", "报价窗口已开启，需同步核算运输成本。", "报价准备"],
        ["明德医院试剂招标", "竞争对手强势，建议保守报价并强调交付能力。", "策略提醒"],
        ["南城新区医院", "项目需求变更频繁，需保持与采购方沟通。", "风险点"]
      ]
    }),
  "bidding-price": () =>
    renderModulePage({
      title: "报价策略",
      intro:
        "结合底价、毛利、库存与竞争态势，提前形成更稳健的报价策略。",
      stats: [
        ["策略测算", "17 次", "本周新增 6 次"],
        ["目标毛利率", "22%", "重点项目可适度下探"],
        ["竞争敏感项目", "9 个", "需联合产品部门评估"]
      ],
      items: [
        ["区域差异定价", "建议按履约成本和交付难度设置不同梯度。", "策略建议"],
        ["保价机制", "针对大客户长周期项目可预留价格保护空间。", "客户策略"],
        ["套装报价", "组合销售在商城和集采场景表现更优。", "产品打法"],
        ["竞争分析", "竞品近期在华南区有明显降价动作，需动态跟踪。", "市场信号"]
      ]
    }),
  "bidding-result": () =>
    renderModulePage({
      title: "中标结果",
      intro:
        "沉淀中标和失标原因，帮助销售、产品和运营一起形成更强的方法论。",
      stats: [
        ["本季中标", "19 个", "金额 ¥ 860 万"],
        ["失标复盘", "11 个", "价格原因占 45%"],
        ["经验沉淀", "27 条", "已同步知识库"]
      ],
      items: [
        ["华东医联体项目", "中标关键在于交付时效承诺和增值服务方案。", "成功经验"],
        ["北区试剂项目", "失标原因为价格竞争力不足，建议优化采购成本。", "失标原因"],
        ["市妇幼设备采购", "评审专家更重视售后响应，需强化服务证明材料。", "评审偏好"],
        ["经验库更新", "建议将高频问答沉淀为标准投标素材。", "知识沉淀"]
      ]
    }),
  "bidding-analysis": () =>
    renderModulePage({
      title: "价格分析",
      intro:
        "对竞品价格带、中标区间和自身报价策略进行对比分析，辅助竞价决策。",
      stats: [
        ["监控项目", "24", "重点项目 9 个"],
        ["竞品价格波动", "11 次", "华南波动更明显"],
        ["目标毛利率", "22%", "重点项目可适度下探"]
      ],
      items: [
        ["蓝莓系列", "竞品本周降价明显，需关注负毛利风险。", "价格预警"],
        ["套装报价", "组合报价在商城和集采场景表现较优。", "策略建议"],
        ["区域差异定价", "建议按履约成本设置报价梯度。", "定价策略"],
        ["中标区间", "华东区中标价格集中在目标价下浮 3%-5%。", "区间洞察"]
      ]
    }),
  "fulfillment-order": () =>
    renderModulePage({
      title: "履约看板",
      intro:
        "统一查看订单从审核、分配库存到出库签收的全流程状态，快速识别卡点。",
      stats: [
        ["履约中订单", "82", "今日新增 16 笔"],
        ["超时订单", "5", "需优先处理"],
        ["准时履约率", "93%", "较上周提升 2%"]
      ],
      items: [
        ["订单 11897768", "超时未分配库存，影响今日发货。", "重点处理"],
        ["KA 客户订单", "已锁库完成，待仓库出库。", "推进中"],
        ["拆单订单", "需业务确认拆单发运方式。", "待确认"],
        ["异常签收", "2 笔订单需补签收回执。", "异常跟踪"]
      ]
    }),
  "fulfillment-stock": () =>
    renderModulePage({
      title: "库存分配",
      intro:
        "根据订单优先级和库存状态完成锁库、调拨和异常库存处理，保障交付节奏。",
      stats: [
        ["待分配库存", "17", "超时 3 笔"],
        ["调拨申请", "6", "华中区为主"],
        ["缺货预警", "12", "蓝莓系列需重点关注"]
      ],
      items: [
        ["订单 11897768", "需优先分配可用库存并反馈交期。", "超时预警"],
        ["华南仓调拨", "可支援华中仓 2 个热销 SKU。", "调拨建议"],
        ["蓝莓 P0003123", "商品负毛利，需同步业务确认是否继续出库。", "风险商品"],
        ["安全库存", "基础耗材库存正常，冷门 SKU 略高。", "库存状态"]
      ]
    }),
  "fulfillment-delivery": () =>
    renderModulePage({
      title: "出库发运",
      intro:
        "聚焦出库排程、物流签收和异常反馈，确保订单按承诺时效完成发运。",
      stats: [
        ["今日出库", "39", "金额 ¥ 198K"],
        ["待出库", "14", "加急单 4 笔"],
        ["物流异常", "3", "需跟进签收情况"]
      ],
      items: [
        ["加急订单", "优先安排今日 16:00 前出库。", "出库优先级"],
        ["华东大客户", "预计今晚完成整车发运。", "重点发运"],
        ["签收异常", "2 笔客户反馈地址信息不完整。", "异常反馈"],
        ["物流时效", "本周整体签收时效稳定。", "履约表现"]
      ]
    }),
  "fulfillment-after": () =>
    renderModulePage({
      title: "售后处理",
      intro:
        "统一跟踪退换货、补发和投诉工单，确保问题及时闭环并反馈业务团队。",
      stats: [
        ["售后工单", "14", "今日新增 3 条"],
        ["待补发", "5", "2 笔加急"],
        ["关闭时长", "1.2 天", "整体可控"]
      ],
      items: [
        ["破损补发", "已通知仓库优先补发。", "补发处理"],
        ["规格不符", "需业务确认客户实际需求。", "问题确认"],
        ["客诉回访", "重点客户投诉需 24 小时内闭环。", "时效要求"],
        ["退货审批", "3 笔待主管审批。", "流程待办"]
      ]
    }),
  "design-template": () =>
    renderModulePage({
      title: "设计模板",
      intro:
        "统一管理销售和商城常用模板，提升报价、提案和活动物料输出效率。",
      stats: [
        ["模板总数", "86", "本月新增 12 套"],
        ["高频模板", "24", "报价和活动模板使用最多"],
        ["待更新", "7", "需同步品牌素材升级"]
      ],
      items: [
        ["报价模板", "适合销售报价、客户提案和商务沟通。", "常用模板"],
        ["活动模板", "可复用到商城活动页与宣传物料。", "营销支持"],
        ["客户提报模板", "用于大客户汇报和方案展示。", "业务支持"],
        ["品牌素材库", "统一主视觉、图标和产品图。", "素材管理"]
      ]
    }),
  "design-combo": () =>
    renderModulePage({
      title: "组合图",
      intro:
        "针对配品方案、促销套餐和活动推荐快速生成组合图，便于销售展示和商城运营。",
      stats: [
        ["组合图数量", "132", "本周新增 18 张"],
        ["待确认", "9", "需业务复核组合逻辑"],
        ["高频场景", "3 类", "门诊、药房、妇幼使用最多"]
      ],
      items: [
        ["门诊耗材组合", "适合基层客户快速选品。", "常用场景"],
        ["蓝莓系列组合图", "可用于活动页和配品方案展示。", "营销搭配"],
        ["节日促销组合", "适合与海报、商城专题配套使用。", "活动素材"],
        ["替代品组合", "缺货时快速给出替代推荐。", "业务辅助"]
      ]
    }),
  "design-poster": () =>
    renderModulePage({
      title: "宣传海报",
      intro:
        "承接商城活动、节点促销和客户宣传需求，统一管理宣传海报和投放版本。",
      stats: [
        ["海报模板", "58", "活动类模板占比最高"],
        ["本周制作", "14", "商城活动需求较多"],
        ["待审核", "5", "需业务确认文案和价格"]
      ],
      items: [
        ["商城活动海报", "适配首页 Banner 和专题活动页。", "线上投放"],
        ["促销价格海报", "用于门店与客户群传播。", "销售支持"],
        ["新品物料", "配合重点商品做统一宣传包装。", "新品推广"],
        ["节气海报", "适合节日活动和专题营销。", "节点营销"]
      ]
    }),
  "report-sales": () =>
    renderModulePage({
      title: "销售报表",
      intro:
        "按时间、区域和团队查看销售表现，辅助复盘目标完成进度和增长趋势。",
      stats: [
        ["本月销售额", "¥ 3.28M", "较上月 +18%"],
        ["目标达成率", "76%", "华东区领先"],
        ["日均销售额", "¥ 286K", "今日已完成 12 单"]
      ],
      items: [
        ["区域销售排行", "华东、华南、华北位列前三。", "区域分析"],
        ["团队完成率", "KA 组表现最好，渠道组提升明显。", "团队表现"],
        ["周趋势", "本周销售连续三天高于均值。", "趋势观察"],
        ["月度目标", "预计月末可完成目标的 92%。", "预测"]
      ]
    }),
  "report-customer": () =>
    renderModulePage({
      title: "客户报表",
      intro:
        "从客户数量、活跃度、转化率和流失预警等维度分析客户经营情况。",
      stats: [
        ["客户总数", "1,286", "A 类客户 184 家"],
        ["本周活跃", "319", "较上周 +12%"],
        ["转化率", "36%", "高潜客户占比提升"]
      ],
      items: [
        ["客户结构", "医疗机构与连锁药房占比最高。", "结构分布"],
        ["活跃趋势", "本周活跃客户主要来自华东区。", "活跃分析"],
        ["流失预警", "27 家客户需优先回访。", "风险提醒"],
        ["新客转化", "展会线索与商城咨询转化较快。", "来源表现"]
      ]
    }),
  "report-product": () =>
    renderModulePage({
      title: "商品报表",
      intro:
        "查看商品销售额、销量、毛利和品类结构，支持选品与定价决策。",
      stats: [
        ["在售商品", "1,904", "本月上新 86 款"],
        ["高毛利商品", "142", "蓝莓系列需关注价格波动"],
        ["缺货预警", "19", "重点关注活动商品"]
      ],
      items: [
        ["热销品类", "基础耗材与组合包销量最高。", "销售排行"],
        ["负毛利商品", "P0003123 蓝莓需尽快优化价格策略。", "风险商品"],
        ["动销分析", "低动销商品建议搭配爆品促销。", "运营建议"],
        ["品类贡献", "前 20 个 SKU 贡献主要销售额。", "贡献分析"]
      ]
    }),
  "report-finance": () =>
    renderModulePage({
      title: "经营分析",
      intro:
        "聚合销售、回款、欠款和利润数据，帮助管理层快速掌握整体经营状况。",
      stats: [
        ["回款金额", "¥ 2.1M", "本周完成度 93%"],
        ["欠款余额", "¥ 12.6M", "15 家风险客户"],
        ["综合毛利率", "22%", "重点项目可适度下探"]
      ],
      items: [
        ["回款结构", "大客户回款稳定，经销商周期较长。", "回款分析"],
        ["账龄分布", "30 天内应收占比 68%。", "账龄分析"],
        ["利润趋势", "本月利润保持稳步提升。", "利润趋势"],
        ["经营预警", "华中区欠款改善空间较大。", "区域预警"]
      ]
    }),
  "wallet-estimate": () =>
    renderWalletEstimatePage(),
  "wallet-income": () =>
    renderTablePage({
      title: "提成收入",
      intro:
        "按订单查看销售提成收入明细，方便核对每一笔订单对应的收入来源。",
      stats: [
        ["提成收入笔数", "36", "本月新增 9 笔"],
        ["平均单笔提成", "¥ 1,175", "高毛利订单更优"],
        ["最高提成订单", "¥ 8,640", "来自瑞康年度续签"]
      ],
      columns: ["订单号", "销售渠道", "商品名称", "销售金额", "履后毛利"],
      rows: [
        ["SO2026040218", "大客户直销", "蓝莓系列组合包", "¥ 128,000", "¥ 43,200"],
        ["SO2026040172", "渠道分销", "基础耗材套装", "¥ 86,500", "¥ 21,680"],
        ["SO2026040109", "来福商城", "门诊耗材组合", "¥ 42,900", "¥ 9,460"],
        ["SO2026040086", "区域直营网", "妇幼专科组合", "¥ 67,300", "¥ 18,920"],
        ["SO2026040061", "渠道分销", "蓝莓单品包", "¥ 35,800", "¥ 8,140"]
      ]
    }),
  "wallet-deduction": () =>
    renderTablePage({
      title: "提成扣减",
      intro:
        "展示提成扣减原因与明细，包括负毛利、异常费用和售后影响，便于销售提前预判。",
      stats: [
        ["扣减金额", "¥ 6,820", "本月累计扣减"],
        ["扣减订单", "7", "3 笔需重点复核"],
        ["主要原因", "负毛利", "其次为非销费用分摊"]
      ],
      columns: ["费用类型", "单据", "扣减金额"],
      rows: [
        ["负毛利扣减", "订单 SO2026040132", "¥ 2,360"],
        ["非销费用分摊", "费用单 FY2026040211", "¥ 1,280"],
        ["售后补发扣减", "售后单 SH2026040114", "¥ 860"],
        ["物流超支扣减", "费用单 FY2026040186", "¥ 1,120"],
        ["活动物料分摊", "费用单 FY2026040156", "¥ 1,200"]
      ]
    }),
  "wallet-order": () =>
    renderModulePage({
      title: "订单利润",
      intro:
        "按订单查看履后毛利、非销费用和提成基数，帮助销售理解每一笔订单的收益构成。",
      stats: [
        ["履后毛利率", "22.4%", "高于目标值"],
        ["非销费用", "¥ 18,700", "物流与活动费用为主"],
        ["可分提成基数", "¥ 312K", "基于已核算订单"]
      ],
      items: [
        ["订单 SO2026040218", "履后毛利 ¥ 43,200，非销费用 ¥ 2,600。", "利润明细"],
        ["订单 SO2026040189", "活动订单费用偏高，影响最终提成。", "费用偏高"],
        ["订单 SO2026040166", "渠道订单利润稳定，可作为标准样本。", "稳定订单"],
        ["核算说明", "提成按履后毛利和费用分摊后计算。", "计算口径"]
      ]
    }),
  "procurement-plan": () =>
    renderModulePage({
      title: "备货计划",
      intro:
        "根据销售预测、商城活动和区域库存协同制定备货节奏，降低缺货与积压。",
      stats: [
        ["本周计划", "12 份", "含 3 个活动专项"],
        ["预测准确率", "87%", "重点品类更稳定"],
        ["紧急补货", "4 次", "较上周下降"]
      ],
      items: [
        ["华东活动备货", "商城活动预计带来 20% 增长，建议前置补货。", "活动协同"],
        ["器械耗材组合", "组合采购提升明显，可集中排产。", "品类趋势"],
        ["季度备货会", "需要销售提供客户侧拉货预测，减少盲目备货。", "协同要求"],
        ["冷门 SKU 清理", "可通过套餐促销降低慢周转库存。", "库存优化"]
      ]
    }),
  "procurement-stock": () =>
    renderModulePage({
      title: "库存概况",
      intro:
        "快速识别高周转、临期和安全库存不足商品，支持销售与供应联动。",
      stats: [
        ["库存 SKU", "3,462", "安全库存正常 89%"],
        ["临期商品", "38", "需尽快处置"],
        ["周转天数", "27 天", "优于目标值"]
      ],
      items: [
        ["高周转品类", "基础耗材持续走高，需保持安全库存充足。", "稳定补货"],
        ["低周转风险", "部分定制产品备货偏多，建议按单生产。", "风险提醒"],
        ["区域调拨", "华南仓可支援华中仓 2 个热销 SKU。", "协同动作"],
        ["临期清单", "建议商城联动做限时折扣。", "处置建议"]
      ]
    }),
  "procurement-supplier": () =>
    renderModulePage({
      title: "供应协同",
      intro:
        "围绕供应商交期、履约和价格波动，保障集采与备货计划稳定执行。",
      stats: [
        ["合作供应商", "126", "核心供应商 24 家"],
        ["准时交付率", "93%", "连续两周提升"],
        ["异常预警", "7 条", "集中在跨省物流"]
      ],
      items: [
        ["重点供应商月评", "建议把交期稳定性纳入季度评分。", "管理动作"],
        ["原料涨价", "部分品类成本抬升，需预判报价影响。", "成本预警"],
        ["交付异常", "华南区域受天气影响，需准备替代发货方案。", "应急协同"],
        ["战略合作", "可与核心供应商探索年度框架锁价。", "长期策略"]
      ]
    }),
  "mall-products": () =>
    renderModulePage({
      title: "商品运营",
      intro:
        "围绕商品上新、调价、活动和内容包装，支撑商城增长和销售协同。",
      stats: [
        ["在售商品", "1,904", "本月上新 86 款"],
        ["活动商品", "214", "平均转化率 6.8%"],
        ["缺货预警", "19", "需联动备货"]
      ],
      items: [
        ["新品专区", "可聚焦高毛利组合包，兼顾商城与线下转化。", "运营建议"],
        ["价格策略", "节前可做阶梯满减，提升客单价。", "活动打法"],
        ["详情页优化", "头部商品可加入客户案例增强转化。", "内容提升"],
        ["动销分析", "低动销商品建议搭配爆品做促销。", "增长动作"]
      ]
    }),
  "mall-orders": () =>
    renderModulePage({
      title: "订单中心",
      intro:
        "查看订单状态、履约进度和售后问题，确保商城体验与交付效率。",
      stats: [
        ["今日订单", "268", "企业订单占 41%"],
        ["待发货", "53", "优先处理加急单"],
        ["售后工单", "14", "平均关闭时长 1.2 天"]
      ],
      items: [
        ["大客户采购单", "建议单独标识并开放客服绿色通道。", "服务优化"],
        ["异常订单", "需重点关注地址变更与库存不足场景。", "风险提醒"],
        ["售后退换", "医疗耗材类需明确退换规则，减少争议。", "流程规范"],
        ["履约监控", "仓配高峰期间要提前预警发货时效。", "体验保障"]
      ]
    }),
  "mall-members": () =>
    renderModulePage({
      title: "会员增长",
      intro:
        "围绕拉新、复购和权益运营，打造更稳定的商城用户增长体系。",
      stats: [
        ["活跃会员", "86,400", "企业会员增速更快"],
        ["月复购率", "28%", "高于目标 3 个点"],
        ["权益活动", "9 场", "优惠券核销率 62%"]
      ],
      items: [
        ["企业会员体系", "可引入采购额度分层权益，增强粘性。", "策略方向"],
        ["复购激活", "对 30 天未复购客户推送专属补货提醒。", "运营动作"],
        ["积分玩法", "将拜访纪要、商城下单和活动参与串联成积分体系。", "联动设计"],
        ["客户画像", "重点关注高频采购与高毛利客户群。", "精细运营"]
      ]
    }),
  "finance-receivable": () =>
    renderModulePage({
      title: "应收看板",
      intro:
        "按客户、区域和账龄查看回款进度，帮助销售和财务共同降低坏账风险。",
      stats: [
        ["应收余额", "¥ 12.6M", "账龄 30 天内占 68%"],
        ["本周回款", "¥ 2.1M", "完成周目标 93%"],
        ["风险客户", "15", "需重点催收"]
      ],
      items: [
        ["瑞康医疗", "账龄即将超过 45 天，建议销售负责人本周上门沟通。", "重点催收"],
        ["华南经销商", "回款稳定，但合同发票节点需提前校验。", "稳定客户"],
        ["区域趋势", "华北区账龄改善明显，华中区需加强跟进。", "区域分析"],
        ["月末冲刺", "建议按到账概率拆分催收优先级。", "行动建议"]
      ]
    }),
  "finance-settlement": () =>
    renderModulePage({
      title: "结算中心",
      intro:
        "统一处理对账、开票和结算流程，降低销售和财务之间的信息损耗。",
      stats: [
        ["待对账单", "21", "本周需清理 8 单"],
        ["开票申请", "34", "电子发票占比提升"],
        ["结算完成率", "79%", "接近月度目标"]
      ],
      items: [
        ["大客户月结", "建议建立固定对账日，减少跨月差异。", "流程优化"],
        ["异常差异", "重点检查折扣、返利和运费分摊数据。", "核对重点"],
        ["电子开票", "可与合同归档联动减少资料补录。", "效率提升"],
        ["跨部门协同", "销售提交单据完整度直接影响结算时效。", "协同提醒"]
      ]
    }),
  "finance-expense": () =>
    renderModulePage({
      title: "费用申请",
      intro:
        "管理差旅、招待、市场活动等销售相关费用，兼顾效率和预算约束。",
      stats: [
        ["待审批申请", "12", "平均审批时长 1.1 天"],
        ["本月已用预算", "63%", "市场活动支出偏高"],
        ["超标预警", "4 条", "需补充说明"]
      ],
      items: [
        ["客户招待费", "建议与客户等级挂钩，形成统一标准。", "费用规范"],
        ["差旅申请", "高频出差人员可使用月度预算包管理。", "管理建议"],
        ["活动报销", "需对活动名单、物料和转化效果做闭环。", "投入产出"],
        ["预算预警", "华东区市场预算使用较快，建议阶段性复盘。", "风险关注"]
      ]
    })
};

let activeMenu = "workbench";
let activePage = "overview";

const pageContent = document.querySelector("#page-content");
const breadcrumb = document.querySelector("#breadcrumb");
const mainNavItems = document.querySelectorAll(".main-nav-item");
const navDropdown = document.querySelector("#nav-dropdown");
const mainNav = document.querySelector(".main-nav");
const functionOverview = document.querySelector("#function-overview");
const overviewContent = document.querySelector("#overview-content");
const overviewTrigger = document.querySelector("#overview-trigger");
const overviewClose = document.querySelector("#overview-close");

const overviewFlowConfig = [
  {
    title: "客户开发",
    items: [
      ["customer", "customer-clue"],
      ["customer", "customer-list"],
      ["customer", "customer-follow"],
      ["customer", "customer-visit"]
    ]
  },
  {
    title: "商机成交",
    items: [
      ["business", "business-solution"],
      ["business", "business-order"],
      ["business", "business-contract"],
      ["finance", "finance-receivable"]
    ]
  },
  {
    title: "投标竞价",
    items: [
      ["tender", "tender-project"],
      ["tender", "tender-document"],
      ["bidding", "bidding-project"],
      ["bidding", "bidding-analysis"]
    ]
  },
  {
    title: "备货履约",
    items: [
      ["business", "business-procurement"],
      ["fulfillment", "fulfillment-order"],
      ["fulfillment", "fulfillment-stock"],
      ["fulfillment", "fulfillment-delivery"],
      ["fulfillment", "fulfillment-after"]
    ]
  },
  {
    title: "商城运营",
    items: [
      ["design", "design-template"],
      ["design", "design-combo"],
      ["mall", "mall-products"],
      ["mall", "mall-orders"],
      ["mall", "mall-members"],
      ["design", "design-poster"]
    ]
  },
  {
    title: "财务闭环",
    items: [
      ["report", "report-sales"],
      ["report", "report-finance"],
      ["wallet", "wallet-estimate"],
      ["wallet", "wallet-income"],
      ["finance", "finance-receivable"],
      ["finance", "finance-settlement"],
      ["finance", "finance-expense"],
      ["wallet", "wallet-deduction"],
      ["wallet", "wallet-order"],
      ["report", "report-customer"],
      ["report", "report-product"]
    ]
  }
];

function renderSubNav(menuKey) {
  const menu = menuConfig[menuKey];
  navDropdown.innerHTML = menu.pages
    .map(
      (page) => `
        <button class="nav-dropdown-item ${page.id === activePage && activeMenu === menuKey ? "active" : ""}" data-menu="${menuKey}" data-page="${page.id}">
          ${page.label}
          <span>${page.desc}</span>
        </button>
      `
    )
    .join("");

  document.querySelectorAll(".nav-dropdown-item").forEach((item) => {
    item.addEventListener("click", () => {
      activeMenu = item.dataset.menu;
      activePage = item.dataset.page;
      hideDropdown();
      render();
    });
  });
}

function showDropdown(menuKey, target) {
  const menu = menuConfig[menuKey];
  if (!menu || menu.pages.length <= 1) {
    hideDropdown();
    return;
  }

  renderSubNav(menuKey);
  const navRect = mainNav.getBoundingClientRect();
  const targetRect = target.getBoundingClientRect();
  navDropdown.classList.add("open");
  navDropdown.style.top = `${navRect.bottom + 8 + window.scrollY}px`;
  navDropdown.style.left = `${targetRect.left + window.scrollX}px`;
}

function hideDropdown() {
  navDropdown.classList.remove("open");
}

function buildOverviewPanel() {
  const stages = overviewFlowConfig
    .map((group, index) => {
      const links = group.items
        .map(([menuKey, pageId]) => {
          const menu = menuConfig[menuKey];
          const page = menu?.pages.find((item) => item.id === pageId);
          if (!menu || !page) {
            return "";
          }

          return `
            <button class="overview-link" type="button" data-menu="${menuKey}" data-page="${pageId}">
              ${page.label}
            </button>
          `;
        })
        .join("");

      return `
        <section class="fishbone-stage ${index % 2 === 0 ? "top" : "bottom"}" style="grid-column:${index + 1}">
          <div class="overview-stage-header">
            <h3 class="overview-stage-title">${group.title}</h3>
          </div>
          <div class="overview-links">${links}</div>
        </section>
      `;
    })
    .join("");

  overviewContent.innerHTML = `
    <div class="fishbone">
      ${stages}
      <div class="fishbone-spine"></div>
      <div class="fishbone-head">
        <div>
          <strong>销售全流程</strong>
        </div>
      </div>
    </div>
  `;

  document.querySelectorAll(".overview-link").forEach((item) => {
    item.addEventListener("click", () => {
      activeMenu = item.dataset.menu;
      activePage = item.dataset.page;
      functionOverview.classList.remove("open");
      render();
    });
  });
}

function render() {
  const menu = menuConfig[activeMenu];
  const currentPage = menu.pages.find((page) => page.id === activePage) || menu.pages[0];

  mainNavItems.forEach((item) => {
    item.classList.toggle("active", item.dataset.menu === activeMenu);
  });

  breadcrumb.textContent = `${menu.title} / ${currentPage.label}`;

  const renderer = contentMap[activePage];
  pageContent.innerHTML = renderer ? renderer() : "<div>页面建设中</div>";
}

function renderWorkbenchOverview() {
  return `
    <section class="hero-side">
      <article class="metric-card">
        <p class="card-label">业绩完成率</p>
        <strong>76%</strong>
        <span class="metric-trend up">较昨日提升 4%</span>
      </article>
      <article class="metric-card">
        <p class="card-label">今日销售金额</p>
        <strong>¥ 286K</strong>
        <span class="metric-trend up">完成 12 单</span>
      </article>
      <article class="metric-card">
        <p class="card-label">今日出库金额</p>
        <strong>¥ 198K</strong>
        <span class="metric-trend up">已出库 9 单</span>
      </article>
      <article class="metric-card">
        <p class="card-label">异常订单数</p>
        <strong>7</strong>
        <span class="metric-trend down">3 单待人工处理</span>
      </article>
      <article class="metric-card">
        <p class="card-label">欠款金额合计</p>
        <strong>¥ 2.10M</strong>
        <span class="metric-trend down">4 笔超 45 天</span>
      </article>
    </section>

    <section class="dashboard-grid">
      <article class="panel-card">
        <div class="panel-head">
          <div>
            <p class="eyebrow">Quick Access</p>
            <h3 class="section-title">常用功能</h3>
          </div>
        </div>
        <div class="shortcut-grid">
          <div class="shortcut-card">
            <strong>新建客户</strong>
            <p>录入客户</p>
          </div>
          <div class="shortcut-card">
            <strong>审批发起</strong>
            <p>合同流程</p>
          </div>
          <div class="shortcut-card">
            <strong>拜访纪要</strong>
            <p>客户反馈</p>
          </div>
          <div class="shortcut-card">
            <strong>回款登记</strong>
            <p>同步回款</p>
          </div>
          <div class="shortcut-card">
            <strong>集采备货</strong>
            <p>备货计划</p>
          </div>
          <div class="shortcut-card">
            <strong>配品方案</strong>
            <p>组合推荐</p>
          </div>
        </div>
      </article>

      <article class="panel-card">
        <div class="panel-head">
          <div>
            <p class="eyebrow">To-do</p>
            <h3 class="section-title">我的待办</h3>
          </div>
          <span class="tag warn">4 项紧急</span>
        </div>
        <div class="todo-list">
          <div class="todo-item">
            <div class="todo-top">
              <span class="todo-title">集采调整单 TZ260239771</span>
              <span class="status-pill urgent">今日必办</span>
            </div>
            <p>待审批</p>
          </div>
          <div class="todo-item">
            <div class="todo-top">
              <span class="todo-title">配品方案 FA20260402012</span>
              <span class="status-pill pending">待提交</span>
            </div>
            <p>待业务确认</p>
          </div>
          <div class="todo-item">
            <div class="todo-top">
              <span class="todo-title">订单 11897768</span>
              <span class="status-pill urgent">超时处理</span>
            </div>
            <p>待分配库存</p>
          </div>
          <div class="todo-item">
            <div class="todo-top">
              <span class="todo-title">合同 HT20260402108</span>
              <span class="status-pill pending">待盖章</span>
            </div>
            <p>客户已确认条款</p>
          </div>
        </div>
      </article>

      <article class="panel-card">
        <div class="panel-head">
          <div>
            <p class="eyebrow">Messages</p>
            <h3 class="section-title">消息通知</h3>
          </div>
          <span class="tag">12 条未读</span>
        </div>
        <div class="message-list">
          <div class="list-row">
            <div class="list-row-top">
              <strong class="notice-title">订单 11897768</strong>
              <span class="mini-label">10:25</span>
            </div>
            <p>超时未分配库存</p>
          </div>
          <div class="list-row">
            <div class="list-row-top">
              <strong class="notice-title">商品 P0003123 蓝莓</strong>
              <span class="mini-label">09:40</span>
            </div>
            <p>商品负毛利</p>
          </div>
          <div class="list-row">
            <div class="list-row-top">
              <strong class="notice-title">竞价项目更新</strong>
              <span class="mini-label">09:12</span>
            </div>
            <p>市一院报价需更新运输成本</p>
          </div>
          <div class="list-row">
            <div class="list-row-top">
              <strong class="notice-title">合同审批提醒</strong>
              <span class="mini-label">08:45</span>
            </div>
            <p>嘉禾协议进入法务复核</p>
          </div>
        </div>
      </article>

      <article class="panel-card">
        <div class="panel-head">
          <div>
            <p class="eyebrow">Announcements</p>
            <h3 class="section-title">部门通告</h3>
          </div>
          <span class="tag">本周重点</span>
        </div>
        <div class="notice-list">
          <div class="notice-item">
            <strong class="notice-title">二季度冲刺方案已发布</strong>
            <p>4 月 8 日前完成目标拆解</p>
          </div>
          <div class="notice-item">
            <strong class="notice-title">新版合同模板启用</strong>
            <p>返利与账期条款已更新</p>
          </div>
          <div class="notice-item">
            <strong class="notice-title">集采备货联动机制试运行</strong>
            <p>销售提交预测后 24 小时内反馈库存建议</p>
          </div>
          <div class="notice-item">
            <strong class="notice-title">异常订单需当天闭环</strong>
            <p>超时未分配库存订单需业务与仓储联合处理</p>
          </div>
        </div>
      </article>
    </section>
  `;
}

function renderModulePage({ title, intro, stats, items }) {
  return `
    <section class="module-page">
      <article class="module-intro-card">
        <div class="module-header">
          <div>
            <p class="eyebrow">Module Overview</p>
            <h3>${title}</h3>
          </div>
          <span class="tag">${title}</span>
        </div>
        <p class="module-intro">${intro}</p>
      </article>

      <section class="overview-grid">
        ${stats
          .map(
            ([label, value, meta]) => `
              <article class="overview-card">
                <p class="card-label">${label}</p>
                <strong>${value}</strong>
                <p>${meta}</p>
              </article>
            `
          )
          .join("")}
      </section>

      <section class="summary-grid">
        ${items
          .slice(0, 2)
          .map(
            ([titleText, desc, meta]) => `
              <article class="panel-card">
                <div class="module-header">
                  <h3>${titleText}</h3>
                  <span class="tag">${meta}</span>
                </div>
                <p class="module-intro">${desc}</p>
              </article>
            `
          )
          .join("")}
      </section>
    </section>
  `;
}

function renderTablePage({ title, intro, stats, columns, rows }) {
  return `
    <section class="module-page">
      <article class="module-intro-card">
        <div class="module-header">
          <div>
            <p class="eyebrow">Module Overview</p>
            <h3>${title}</h3>
          </div>
          <span class="tag">${title}</span>
        </div>
        <p class="module-intro">${intro}</p>
      </article>

      <section class="overview-grid">
        ${stats
          .map(
            ([label, value, meta]) => `
              <article class="overview-card">
                <p class="card-label">${label}</p>
                <strong>${value}</strong>
                <p>${meta}</p>
              </article>
            `
          )
          .join("")}
      </section>

      <article class="panel-card table-card">
        <div class="table-wrap">
          <table class="data-table">
            <thead>
              <tr>
                ${columns.map((column) => `<th>${column}</th>`).join("")}
              </tr>
            </thead>
            <tbody>
              ${rows
                .map(
                  (row) => `
                    <tr>
                      ${row.map((cell) => `<td>${cell}</td>`).join("")}
                    </tr>
                  `
                )
                .join("")}
            </tbody>
          </table>
        </div>
      </article>
    </section>
  `;
}

function renderWalletEstimatePage() {
  const commissionRate = 0.1;
  const incomeColumns = ["订单号", "销售渠道", "商品名称", "销售金额", "履后毛利"];
  const incomeData = [
    { orderNo: "SO2026040218", channel: "大客户直销", product: "蓝莓系列组合包", sales: 128000, grossProfit: 43200 },
    { orderNo: "SO2026040172", channel: "渠道分销", product: "基础耗材套装", sales: 86500, grossProfit: 21680 },
    { orderNo: "SO2026040109", channel: "来福商城", product: "门诊耗材组合", sales: 42900, grossProfit: 9460 },
    { orderNo: "SO2026040086", channel: "区域直营网", product: "妇幼专科组合", sales: 67300, grossProfit: 18920 },
    { orderNo: "SO2026040061", channel: "渠道分销", product: "蓝莓单品包", sales: 35800, grossProfit: 8140 }
  ];
  const deductionColumns = ["费用类型", "单据", "扣减金额"];
  const deductionData = [
    { type: "负毛利扣减", document: "订单 SO2026040132", amount: 2360 },
    { type: "非销费用分摊", document: "费用单 FY2026040211", amount: 1280 },
    { type: "售后补发扣减", document: "售后单 SH2026040114", amount: 860 },
    { type: "物流超支扣减", document: "费用单 FY2026040186", amount: 1120 },
    { type: "活动物料分摊", document: "费用单 FY2026040156", amount: 1200 }
  ];
  const pendingColumns = ["缓发类型", "单据", "金额"];
  const pendingData = [
    { type: "回款未完成缓发", document: "订单 SO2026040226", amount: 2580 },
    { type: "售后未关闭缓发", document: "订单 SO2026040198", amount: 1160 },
    { type: "异常利润复核缓发", document: "订单 SO2026040163", amount: 980 },
    { type: "渠道返点待确认", document: "订单 SO2026040122", amount: 1420 }
  ];
  const incomeRows = incomeData.map((item) => [
    item.orderNo,
    item.channel,
    item.product,
    formatCurrency(item.sales),
    formatCurrency(item.grossProfit)
  ]);
  const deductionRows = deductionData.map((item) => [item.type, item.document, formatCurrency(item.amount)]);
  const pendingRows = pendingData.map((item) => [item.type, item.document, formatCurrency(item.amount)]);
  const commissionIncome = incomeData.reduce((sum, item) => sum + item.grossProfit * commissionRate, 0);
  const deductionTotal = deductionData.reduce((sum, item) => sum + item.amount, 0);
  const pendingTotal = pendingData.reduce((sum, item) => sum + item.amount, 0);
  const estimatedTotal = commissionIncome - deductionTotal - pendingTotal;

  return `
    <section class="module-page">
      <section class="rule-strip">
        <article class="rule-card rule-total">
          <div class="rule-copy">
            <span class="card-label">预计提成</span>
            <strong>提成规则说明</strong>
            <p>演示口径：每笔订单先取履后毛利，再按 10% 作为提成收入基础，最后扣减负毛利、非销费用、售后补发等影响项，得到预计提成总额。</p>
          </div>
          <div class="rule-result">
            <span class="card-label">预计提成总额</span>
            <strong>${formatCurrency(estimatedTotal)}</strong>
            <p>${formatCurrency(commissionIncome)} 提成收入 - ${formatCurrency(deductionTotal)} 提成扣减 - ${formatCurrency(pendingTotal)} 提成缓发</p>
          </div>
        </article>
      </section>

      <section class="table-grid-2">
        <section class="table-section">
          <div class="table-section-head">
            <div class="module-header" style="margin-bottom: 0;">
              <h3>本月预计提成收入</h3>
            </div>
            <span class="table-total">汇总金额：${formatCurrency(commissionIncome)}</span>
          </div>
          <article class="panel-card table-card">
            <div class="table-wrap">
              <table class="data-table">
                <thead>
                  <tr>
                    ${incomeColumns.map((column) => `<th>${column}</th>`).join("")}
                  </tr>
                </thead>
                <tbody>
                  ${incomeRows
                    .map(
                      (row) => `
                        <tr>
                          ${row.map((cell) => `<td>${cell}</td>`).join("")}
                        </tr>
                      `
                    )
                    .join("")}
                </tbody>
              </table>
            </div>
          </article>
        </section>

        <section class="table-section">
          <div class="table-section-head">
            <div class="module-header" style="margin-bottom: 0;">
              <h3>本月费用扣减</h3>
            </div>
            <span class="table-total">汇总金额：${formatCurrency(deductionTotal)}</span>
          </div>
          <article class="panel-card table-card">
            <div class="table-wrap">
              <table class="data-table">
                <thead>
                  <tr>
                    ${deductionColumns.map((column) => `<th>${column}</th>`).join("")}
                  </tr>
                </thead>
                <tbody>
                  ${deductionRows
                    .map(
                      (row) => `
                        <tr>
                          ${row.map((cell) => `<td>${cell}</td>`).join("")}
                        </tr>
                      `
                    )
                    .join("")}
                </tbody>
              </table>
            </div>
          </article>
        </section>

        <section class="table-section">
          <div class="table-section-head">
            <div class="module-header" style="margin-bottom: 0;">
              <h3>提成缓发</h3>
            </div>
            <span class="table-total">汇总金额：${formatCurrency(pendingTotal)}</span>
          </div>
          <article class="panel-card table-card">
            <div class="table-wrap">
              <table class="data-table">
                <thead>
                  <tr>
                    ${pendingColumns.map((column) => `<th>${column}</th>`).join("")}
                  </tr>
                </thead>
                <tbody>
                  ${pendingRows
                    .map(
                      (row) => `
                        <tr>
                          ${row.map((cell) => `<td>${cell}</td>`).join("")}
                        </tr>
                      `
                    )
                    .join("")}
                </tbody>
              </table>
            </div>
          </article>
        </section>
      </section>
    </section>
  `;
}

function formatCurrency(value) {
  return `¥ ${value.toLocaleString("zh-CN")}`;
}

mainNavItems.forEach((item) => {
  item.addEventListener("mouseenter", () => {
    showDropdown(item.dataset.menu, item);
  });
  item.addEventListener("click", () => {
    activeMenu = item.dataset.menu;
    activePage = menuConfig[activeMenu].pages[0].id;
    hideDropdown();
    render();
  });
});

mainNav.addEventListener("mouseleave", () => {
  window.setTimeout(() => {
    if (!navDropdown.matches(":hover")) {
      hideDropdown();
    }
  }, 80);
});

navDropdown.addEventListener("mouseleave", () => {
  hideDropdown();
});

navDropdown.addEventListener("mouseenter", () => {
  navDropdown.classList.add("open");
});

overviewTrigger.addEventListener("click", () => {
  hideDropdown();
  buildOverviewPanel();
  functionOverview.classList.toggle("open");
});

overviewClose.addEventListener("click", () => {
  functionOverview.classList.remove("open");
});

render();
