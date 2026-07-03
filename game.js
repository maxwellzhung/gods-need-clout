const wishes = [
  { code: "0248", city: "深圳", time: "凌晨 2:13", text: "想让前任刷到我过得超好并立刻后悔", type: "情感", element: "火", risk: 22, reward: 44, emotion: "执念", tags: ["复合", "轻微报复", "高传播潜力"] },
  { code: "0249", city: "杭州", time: "上午 9:41", text: "希望老板今天开会突然失声三小时", type: "职场", element: "金", risk: 42, reward: 62, emotion: "委屈", tags: ["职场", "报复", "易反噬"] },
  { code: "0250", city: "广州", time: "晚上 11:05", text: "想一夜暴富，但最好不要上法治新闻", type: "财运", element: "水", risk: 35, reward: 70, emotion: "贪心", tags: ["暴富", "因果重", "地府关注"] },
  { code: "0251", city: "成都", time: "下午 4:20", text: "求把证件照修成命定贵人脸", type: "美貌", element: "木", risk: 18, reward: 36, emotion: "焦虑", tags: ["变美", "轻委托", "可安抚"] },
  { code: "0252", city: "上海", time: "凌晨 1:47", text: "想让直播间从 7 人涨到 70 万人", type: "流量", element: "火", risk: 50, reward: 88, emotion: "上头", tags: ["爆红", "黑红高", "热搜体质"] },
  { code: "0253", city: "南京", time: "中午 12:00", text: "求转运，最近外卖筷子都少一根", type: "转运", element: "土", risk: 12, reward: 30, emotion: "倒霉", tags: ["公益", "稳妥", "适合攒功德"] },
  { code: "0254", city: "北京", time: "上午 10:18", text: "希望竞争对手的 PPT 全部变宋体", type: "职场", element: "金", risk: 28, reward: 46, emotion: "阴阳怪气", tags: ["小报复", "规则", "可爆梗"] },
  { code: "0255", city: "厦门", time: "晚上 8:33", text: "想让暗恋对象梦见我，但别梦成恐怖片", type: "情感", element: "水", risk: 25, reward: 42, emotion: "忐忑", tags: ["梦境", "姻缘", "容易跑偏"] },
  { code: "0256", city: "武汉", time: "清晨 6:52", text: "求孩子考试超常发挥，别超到能看见答案", type: "学业", element: "木", risk: 31, reward: 52, emotion: "焦虑", tags: ["学业", "边界模糊", "功德判断"] },
  { code: "0257", city: "苏州", time: "下午 3:08", text: "想把水逆退订，自动续费太烦了", type: "转运", element: "土", risk: 16, reward: 34, emotion: "疲惫", tags: ["转运", "低风险", "黄历友好"] },
  { code: "0258", city: "重庆", time: "晚上 9:12", text: "求让我在同学会上轻描淡写地赢一次", type: "面子", element: "火", risk: 24, reward: 48, emotion: "不服", tags: ["面子", "热搜潜力", "适合火行"] },
  { code: "0259", city: "长沙", time: "凌晨 0:26", text: "想让健身卡自己产生使用记录", type: "偷懒", element: "水", risk: 38, reward: 55, emotion: "荒唐", tags: ["懒愿", "投诉风险", "可劝退"] },
  { code: "0260", city: "西安", time: "上午 8:08", text: "想让面试官觉得我像天选打工人", type: "求职", element: "木", risk: 20, reward: 45, emotion: "焦虑", tags: ["求职", "成长", "适合木行"] },
  { code: "0261", city: "青岛", time: "下午 5:55", text: "求店里新品突然被种草，但不要被扒配方", type: "生意", element: "火", risk: 36, reward: 72, emotion: "急切", tags: ["种草", "商业", "热搜风险"] },
  { code: "0262", city: "郑州", time: "上午 7:31", text: "希望邻居装修队集体顿悟静音美学", type: "生活", element: "土", risk: 26, reward: 40, emotion: "崩溃", tags: ["生活", "稳定", "适合土行"] },
  { code: "0263", city: "天津", time: "晚上 10:22", text: "想让拖欠尾款的甲方梦见合同条款", type: "讨债", element: "金", risk: 33, reward: 58, emotion: "委屈", tags: ["合同", "规则", "判官加成"] },
  { code: "0264", city: "昆明", time: "中午 1:14", text: "求猫主子承认我是家里一把手", type: "家庭", element: "水", risk: 17, reward: 33, emotion: "卑微", tags: ["家庭", "梦境", "低风险"] },
  { code: "0265", city: "合肥", time: "凌晨 3:19", text: "想让论文查重率像功德一样清白", type: "学业", element: "木", risk: 46, reward: 80, emotion: "心虚", tags: ["学业", "高风险", "建议审核"] }
];

const spirits = [
  {
    id: "stove",
    icon: "灶",
    name: "落魄灶王",
    role: "家宅与人情愿望处理专员",
    trait: "管家宅、人情、饭局",
    elements: ["火", "土"],
    power: 22,
    unlock: 1,
    bond: 0,
    stress: 0,
    personality: "碎嘴、护短、讨厌职场霸凌",
    skills: ["饭桌圆场", "烟火气护身", "让老板突然想吃饭", "锅气镇宅"],
    flaw: "处理职场愿望时容易把问题拐到厨房管理。",
    want: "一碗热粥、干净灶台、不要再接静音老板单",
    quote: "天天让我管老板闭嘴，我是管厨房的，不是管职场霸凌的。"
  },
  {
    id: "fox",
    icon: "狐",
    name: "社恐狐仙",
    role: "情感类愿望处理专员",
    trait: "擅长魅力、梦境、复合",
    elements: ["木", "水"],
    power: 25,
    unlock: 1,
    bond: 0,
    stress: 1,
    personality: "怕生、嘴硬、容易吃醋",
    skills: ["梦里见你", "偶遇制造", "让对方突然想起你", "过度脑补"],
    flaw: "处理复合愿望时，有概率加入私人情绪。",
    want: "桂花糕、安静的角落、不要让龙王靠太近",
    quote: "我不是不想上班，我只是对前任类愿望过敏。"
  },
  {
    id: "dragon",
    icon: "龙",
    name: "打工龙王",
    role: "财运与流量水位调度员",
    trait: "会调水运、财运、流量",
    elements: ["水", "金"],
    power: 28,
    unlock: 1,
    bond: 0,
    stress: 2,
    personality: "想准点下班，嘴上很佛，心里很累",
    skills: ["涨潮带货", "财运回流", "直播间起雾", "水逆退订"],
    flaw: "加班太多会把愿望全部处理成下雨。",
    want: "加班茶、干燥龙鳞护理、不要被叫去直播",
    quote: "我以前管江河，现在管流量池，时代对龙也太狠了。"
  },
  {
    id: "judge",
    icon: "判",
    name: "地府实习判官",
    role: "合规、因果与反噬控制员",
    trait: "懂因果、审查、反噬",
    elements: ["金", "土"],
    power: 24,
    unlock: 1,
    bond: 0,
    stress: 0,
    personality: "表格脑、胆小但讲义气",
    skills: ["因果备案", "甩锅失败预警", "合同入梦", "地府说情"],
    flaw: "太怕出事时会把所有愿望都打回重填。",
    want: "红章、整齐文件夹、一个不背锅的下午",
    quote: "请解释为什么一名凡人在 24 小时内连续偶遇前任 7 次。"
  },
  {
    id: "mirror",
    icon: "镜",
    name: "铜镜器灵",
    role: "人设、颜值与评论区观察员",
    trait: "照见人设、颜值、热搜",
    elements: ["金", "火"],
    power: 21,
    unlock: 1,
    bond: 0,
    stress: 0,
    personality: "爱看评论区，嘴毒但审美在线",
    skills: ["人设打光", "照出滤镜", "热评预判", "小范围爆梗"],
    flaw: "遇到变美愿望会忍不住先点评穿搭。",
    want: "擦镜布、好看的供花、最新热搜截图",
    quote: "有些愿望不是不灵，是自拍角度先不灵。"
  },
  {
    id: "beast",
    icon: "讙",
    name: "山海讙兽",
    role: "驱邪、镇场与破霉运外勤",
    trait: "驱邪、破霉运、镇场面",
    elements: ["土", "木"],
    power: 34,
    unlock: 2,
    bond: 0,
    stress: 0,
    personality: "很凶，但喜欢被摸头夸靠谱",
    skills: ["霉运咬碎", "镇住场面", "搬走烂桃花", "排队秩序维护"],
    flaw: "太认真时会把小事办得像山海经大事件。",
    want: "新香炉、山泉水、写有名字的工牌",
    quote: "我可以镇邪，也可以镇住门口插队的人。"
  },
  {
    id: "lamp",
    icon: "灯",
    name: "夜行路灯精",
    role: "城市传闻、匿名爆料与夜间愿望专员",
    trait: "城市传闻、夜路、匿名爆料",
    elements: ["火", "水"],
    power: 31,
    unlock: 3,
    bond: 0,
    stress: 0,
    personality: "安静、八卦、只在夜里精神",
    skills: ["照亮真相", "匿名投稿", "夜路护送", "热搜侧漏"],
    flaw: "白天上班效率很低，还容易闪烁。",
    want: "备用灯泡、旧城区地图、凌晨三点的安静",
    quote: "我见过很多愿望，它们通常在夜里变诚实。"
  }
];

const relics = [
  { id: "coin", icon: "钱", name: "招财裂纹铜钱", element: "金", power: 14 },
  { id: "bell", icon: "铃", name: "二手姻缘铃", element: "水", power: 12 },
  { id: "seal", icon: "印", name: "地府加急章", element: "土", power: 13 },
  { id: "fan", icon: "扇", name: "热搜借风扇", element: "火", power: 16 },
  { id: "twig", icon: "枝", name: "转运桃枝", element: "木", power: 11 },
  { id: "thread", icon: "线", name: "前任遗忘红线", element: "木", power: 15 }
];

const events = [
  { name: "城隍夜巡", copy: "宜：补合规、接土金单。忌：强行复合。地府眼神很亮。", element: "土", power: 10, risk: -4, rewardRate: 0, fanRate: 0, auditStart: -5, auditAfter: -2 },
  { name: "财神直播间打赏", copy: "宜：财运、生意、扫码上香。忌：承诺一夜暴富。", element: "金", power: 8, risk: 2, rewardRate: 0.16, fanRate: 0.04, auditStart: 3, auditAfter: 2 },
  { name: "热搜借东风", copy: "宜：流量单、神谕回应。忌：让老板闭嘴。爆红概率上升。", element: "火", power: 9, risk: 6, rewardRate: 0.08, fanRate: 0.2, auditStart: 4, auditAfter: 4 },
  { name: "雨师补班", copy: "宜：梦境、情绪、退水逆。忌：夜间硬开坛。", element: "水", power: 10, risk: -2, rewardRate: 0.04, fanRate: 0.06, auditStart: -2, auditAfter: -1 },
  { name: "桃木开花", copy: "宜：修复关系、求职成长。忌：过度脑补。功德更好攒。", element: "木", power: 10, risk: -1, rewardRate: 0.02, fanRate: 0.02, auditStart: 0, auditAfter: -1 }
];

const strategies = {
  balanced: { label: "稳妥办", power: 0, risk: 0, incense: 1, fans: 1, merit: 0, chaos: 1, audit: 0, note: "收益和风险都比较平。" },
  merit: { label: "劝放下", power: -4, risk: -9, incense: 0.78, fans: 0.68, merit: 9, chaos: 0.45, audit: -6, note: "少赚一点，但功德稳、反噬轻。" },
  clout: { label: "冲热搜", power: 4, risk: 12, incense: 1.18, fans: 1.42, merit: -3, chaos: 1.5, audit: 8, note: "更容易爆红，也更容易被盯上。" }
};

const elementRules = {
  金: "规则、裁断、财运",
  木: "成长、复合、修复",
  水: "情绪、梦境、隐秘",
  火: "爆红、欲望、名声",
  土: "稳定、房子、工作"
};

const festivalGoals = {
  incense: 600,
  fans: 350,
  merit: 90
};

const state = {
  day: 0,
  templeLevel: 1,
  incense: 120,
  merit: 50,
  fans: 36,
  chaos: 0,
  audit: 8,
  wishPool: [],
  selectedWish: null,
  selectedSpirit: spirits[0],
  selectedAssistant: spirits[1],
  focusedStaff: spirits[0],
  selectedRelic: relics[0],
  element: "木",
  strategy: "balanced",
  event: null,
  lastOutcome: null,
  lastTicket: "",
  festivalWon: false,
  festivalReviewed: false,
  hotTopics: [
    { topic: "#灶王爷称自己不管PUA#", badge: "笑" },
    { topic: "#财神到底能不能帮人暴富#", badge: "沸" },
    { topic: "#地府回应小庙违规许愿#", badge: "新" },
    { topic: "#龙王开始接职场单了#", badge: "热" }
  ],
  log: []
};

const $ = (selector) => document.querySelector(selector);

function sample(list, count) {
  return [...list].sort(() => Math.random() - 0.5).slice(0, count);
}

function clamp(value, min, max) {
  return Math.max(min, Math.min(max, value));
}

function signed(value) {
  return value > 0 ? `+${value}` : `${value}`;
}

function currentStrategy() {
  return strategies[state.strategy];
}

function dailyReset() {
  spirits.forEach((spirit) => {
    spirit.stress = clamp(spirit.stress - 1, 0, 10);
  });
  state.chaos = clamp(state.chaos - 3, 0, 999);
  if (state.merit >= 80) state.audit = clamp(state.audit - 2, 0, 100);
}

function pickEvent() {
  state.event = sample(events, 1)[0];
  state.audit = clamp(state.audit + state.event.auditStart, 0, 100);
  state.log.unshift(`今日黄历：${state.event.name}。${state.event.copy}`);
}

function refreshWishes(advance = true) {
  if (advance) {
    state.day += 1;
    dailyReset();
  } else {
    state.day = 1;
  }
  pickEvent();
  const poolSize = 5 + Math.min(2, state.templeLevel);
  state.wishPool = sample(wishes, poolSize);
  state.selectedWish = state.wishPool[0];
  checkFestivalDeadline();
  render();
}

function moodBonus(spirit) {
  return Math.floor(spirit.bond / 2) - Math.floor(spirit.stress * 1.5);
}

function flipProbability(wish) {
  return clamp(Math.round(wish.risk + state.audit * 0.22 + state.chaos * 0.12), 8, 88);
}

function cloutLevel(wish) {
  const score = wish.reward + wish.risk + (wish.element === "火" ? 16 : 0);
  if (score >= 112) return "高";
  if (score >= 76) return "中";
  return "低";
}

function riskStars(value) {
  const count = clamp(Math.ceil(value / 18), 1, 5);
  return "★★★★★".slice(0, count) + "☆☆☆☆☆".slice(0, 5 - count);
}

function scoreDispatch() {
  const wish = state.selectedWish;
  const spirit = state.selectedSpirit;
  const assistant = state.selectedAssistant;
  const relic = state.selectedRelic;
  const strategy = currentStrategy();
  const spiritMatch = spirit.elements.includes(wish.element) ? 18 : 0;
  const assistantMatch = assistant.elements.includes(wish.element) ? 10 : 0;
  const relicMatch = relic.element === wish.element ? 14 : 0;
  const arrayMatch = state.element === wish.element ? 12 : 0;
  const eventMatch = state.event?.element === wish.element ? state.event.power : 0;
  const elementMatch = spiritMatch + assistantMatch + relicMatch + arrayMatch + eventMatch;
  const pressure = wish.risk + state.audit * 0.45 + state.chaos * 0.22 + strategy.risk + (state.event?.risk ?? 0);
  const power = spirit.power + Math.round(assistant.power * 0.55) + relic.power + state.templeLevel * 5 + elementMatch + moodBonus(spirit) + Math.round(moodBonus(assistant) * 0.6) + strategy.power;
  const probability = clamp(Math.round(52 + (power - pressure) * 0.8), 6, 94);
  const backlash = clamp(Math.round(100 - probability + state.audit * 0.22 + state.chaos * 0.12), 4, 92);
  return { power, pressure, probability, backlash, elementMatch, eventMatch };
}

function createOutcome(kind, wish, spirit, assistant, relic, score) {
  const base = {
    great: {
      title: "大灵验",
      trend: "#小庙显灵冲上同城热榜",
      copy: `${spirit.name}主坛，${assistant.name}在旁边补了一手，${relic.name}精准出手。愿主当场还愿，评论区开始排队求同款。`,
      incense: wish.reward + 24,
      merit: 9,
      fans: 38,
      chaos: 4,
      audit: 3,
      bond: 3,
      stress: 1
    },
    ok: {
      title: "灵验但没完全灵",
      trend: "#玄学但好像有用",
      copy: `${wish.text}这事成了一半，另一半靠愿主自己圆。香客表示“有用，但很难评”。`,
      incense: wish.reward,
      merit: 4,
      fans: 18,
      chaos: 2,
      audit: 1,
      bond: 1,
      stress: 1
    },
    viral: {
      title: "因果偏航",
      trend: "#这庙是不是过于努力",
      copy: `${spirit.name}理解偏了，${relic.name}还添了一把火。事情没完全坏，但热搜味儿很浓。`,
      incense: Math.floor(wish.reward * 0.55),
      merit: -7,
      fans: 28,
      chaos: 18,
      audit: 11,
      bond: 0,
      stress: 3
    },
    backlash: {
      title: "大型反噬",
      trend: "#地府已关注",
      copy: `愿望实现得太彻底。${assistant.name}被请去写情况说明，庙门口多了一张整改通知。`,
      incense: -22,
      merit: -14,
      fans: -4,
      chaos: 26,
      audit: 18,
      bond: -1,
      stress: 4
    }
  }[kind];

  const strategy = currentStrategy();
  const eventReward = 1 + (state.event?.rewardRate ?? 0);
  const eventFans = 1 + (state.event?.fanRate ?? 0);
  const outcome = { ...base, kind };
  outcome.incense = Math.round(outcome.incense * strategy.incense * eventReward);
  outcome.fans = Math.round(outcome.fans * strategy.fans * eventFans);
  outcome.merit = Math.round(outcome.merit + strategy.merit);
  outcome.chaos = Math.round(outcome.chaos * strategy.chaos);
  outcome.audit = Math.round(outcome.audit + strategy.audit + (state.event?.auditAfter ?? 0));
  outcome.strategyLabel = strategy.label;
  outcome.probability = score.probability;
  outcome.wishText = wish.text;
  outcome.wishType = wish.type;
  outcome.spiritName = spirit.name;
  outcome.assistantName = assistant.name;
  outcome.relicName = relic.name;
  outcome.arrayName = `${state.element}行阵`;

  if (score.elementMatch >= 46) {
    outcome.copy += " 五行契合到发亮，像是老天爷也点了赞。";
    outcome.merit += 3;
  } else if (score.elementMatch <= 14) {
    outcome.copy += " 五行没搭上，神龛旁边的签筒都沉默了。";
    outcome.audit += 2;
  }

  if (state.strategy === "merit" && kind !== "backlash") {
    outcome.copy += " 你没有完全照着欲望走，反而让愿主少绕了点弯路。";
  }

  if (state.strategy === "clout" && kind !== "great") {
    outcome.copy += " 流量倒是来了，就是评论区开始考古。";
  }

  return outcome;
}

function chooseOutcome(probability) {
  const roll = Math.random() * 100;
  if (roll <= probability * 0.34) return "great";
  if (roll <= probability) return "ok";
  if (roll <= probability + (100 - probability) * 0.62) return "viral";
  return "backlash";
}

function applyOutcome(outcome, spirit, assistant) {
  state.incense = clamp(state.incense + outcome.incense, 0, 9999);
  state.merit = clamp(state.merit + outcome.merit, 0, 999);
  state.fans = clamp(state.fans + outcome.fans, 0, 9999);
  state.chaos = clamp(state.chaos + outcome.chaos, 0, 999);
  state.audit = clamp(state.audit + outcome.audit + Math.floor(state.chaos / 85), 0, 100);
  spirit.bond = clamp(spirit.bond + outcome.bond, 0, 20);
  spirit.stress = clamp(spirit.stress + outcome.stress, 0, 10);
  assistant.bond = clamp(assistant.bond + Math.max(0, outcome.bond - 1), 0, 20);
  assistant.stress = clamp(assistant.stress + Math.max(1, outcome.stress - 1), 0, 10);

  if (state.audit >= 100) {
    state.audit = 68;
    state.incense = clamp(state.incense - 80, 0, 9999);
    state.merit = clamp(state.merit - 18, 0, 999);
    state.chaos = clamp(state.chaos - 30, 0, 999);
    state.log.unshift("地府临检：整改一轮，香火被罚，黑红热度暂时降温。");
  }
}

function buildTicket(outcome) {
  return [
    "神明也要流量",
    "愿望处理单",
    `委托内容：${outcome.wishText}`,
    `派遣组合：${outcome.spiritName} + ${outcome.assistantName} + ${outcome.relicName} + ${outcome.arrayName}`,
    `处理结果：${outcome.title}`,
    `评级：${outcome.trend}`,
    `香火 ${signed(outcome.incense)} / 功德 ${signed(outcome.merit)} / 粉丝 ${signed(outcome.fans)} / 黑红 ${signed(outcome.chaos)}`,
    "本小票仅供截图传播，最终解释权归地府风险管理司所有。"
  ].join("\n");
}

function dispatchWish() {
  if (!state.selectedWish || !state.selectedSpirit || !state.selectedAssistant || !state.selectedRelic) return;

  const wish = state.selectedWish;
  const spirit = state.selectedSpirit;
  const assistant = state.selectedAssistant;
  const relic = state.selectedRelic;
  const score = scoreDispatch();
  const kind = chooseOutcome(score.probability);
  const outcome = createOutcome(kind, wish, spirit, assistant, relic, score);

  applyOutcome(outcome, spirit, assistant);
  state.lastOutcome = outcome;
  state.lastTicket = buildTicket(outcome);
  state.hotTopics.unshift({ topic: outcome.trend, badge: kind === "great" ? "爆" : kind === "backlash" ? "罚" : "热" });
  state.hotTopics = state.hotTopics.slice(0, 6);
  state.log.unshift(`${outcome.title}：${wish.type}委托 · ${outcome.trend}`);
  removeWish(wish);
  checkFestivalWin();
  render();
}

function removeWish(wish) {
  state.wishPool = state.wishPool.filter((item) => item !== wish);
  if (state.selectedWish === wish) state.selectedWish = state.wishPool[0] ?? null;
}

function handleWishAction(wish, action) {
  if (action === "accept") {
    state.selectedWish = wish;
    state.log.unshift(`已接单：${wish.text}`);
    render();
    return;
  }

  if (action === "reject") {
    state.merit = clamp(state.merit + 7, 0, 999);
    state.audit = clamp(state.audit - 3, 0, 100);
    state.log.unshift(`劝退成功：${wish.type}委托被放下，功德 +7。`);
  }

  if (action === "pool") {
    state.merit = clamp(state.merit + 10, 0, 999);
    state.incense = clamp(state.incense - 4, 0, 9999);
    state.log.unshift(`丢进功德池：牺牲一点香火，换来一笔干净功德。`);
  }

  if (action === "audit") {
    state.audit = clamp(state.audit - 6, 0, 100);
    state.merit = clamp(state.merit + 2, 0, 999);
    state.log.unshift(`交给地府审核：这单先不碰，风险下降。`);
  }

  removeWish(wish);
  checkFestivalWin();
  render();
}

function upgradeTemple() {
  const cost = 90 + state.templeLevel * 70;
  if (state.incense < cost) return;
  const oldLevel = state.templeLevel;
  state.incense -= cost;
  state.templeLevel += 1;
  state.merit += 8;
  state.audit = clamp(state.audit - 6, 0, 100);

  const unlocked = spirits
    .filter((spirit) => spirit.unlock > oldLevel && spirit.unlock <= state.templeLevel)
    .map((spirit) => spirit.name);
  state.log.unshift(`小庙扩建到 Lv.${state.templeLevel}，门口排队的人开始问能不能办会员。`);
  if (unlocked.length) state.log.unshift(`新员工入职：${unlocked.join("、")}。`);
  refreshWishes();
}

function offerIncense() {
  const spirit = state.focusedStaff;
  if (state.incense < 30) return;
  state.incense -= 30;
  spirit.bond = clamp(spirit.bond + 2, 0, 20);
  spirit.stress = clamp(spirit.stress - 1, 0, 10);
  state.log.unshift(`给${spirit.name}上香：羁绊 +2，压力 -1。`);
  render();
}

function talkToStaff() {
  const spirit = state.focusedStaff;
  spirit.bond = clamp(spirit.bond + 1, 0, 20);
  spirit.stress = clamp(spirit.stress - 2, 0, 10);
  state.merit = clamp(state.merit + 1, 0, 999);
  state.log.unshift(`听${spirit.name}诉苦：庙里员工关系略有回暖。`);
  render();
}

function restStaff() {
  const spirit = state.focusedStaff;
  spirit.stress = clamp(spirit.stress - 4, 0, 10);
  state.fans = clamp(state.fans - 3, 0, 9999);
  state.log.unshift(`安排${spirit.name}休息：少接一点单，别把神明也逼到塌房。`);
  render();
}

function checkFestivalWin() {
  if (state.festivalWon) return;
  const won = state.incense >= festivalGoals.incense && state.fans >= festivalGoals.fans && state.merit >= festivalGoals.merit;
  if (!won) return;
  state.festivalWon = true;
  state.incense += 120;
  state.fans += 160;
  state.merit += 20;
  state.audit = clamp(state.audit - 12, 0, 100);
  state.log.unshift("七日庙会出圈：小庙被列入城市玄学打卡点，额外香火到账。");
}

function checkFestivalDeadline() {
  if (state.festivalReviewed || state.festivalWon || state.day <= 7) return;
  state.festivalReviewed = true;
  state.log.unshift("七日庙会复盘：目标还差一点，但小庙已经从无人问津变成有人催更。");
}

function riskState() {
  if (state.audit >= 70) {
    return {
      label: "高",
      advice: "重点关注：黑红值增长异常。建议劝退报复类愿望，找判官说情。"
    };
  }
  if (state.audit >= 36) {
    return {
      label: "中",
      advice: "地府正在旁听。建议多接公益愿望，减少复合类业务。"
    };
  }
  return {
    label: "低",
    advice: "风险暂稳。可以接一两单高传播愿望，但别连续冲热搜。"
  };
}

function templeCaption() {
  if (state.lastOutcome?.kind === "backlash") return "地府刚来过，香炉旁还贴着整改便签。";
  if (state.lastOutcome?.kind === "viral") return "今日有点黑红，石狮子都被评论区吵醒了。";
  if (state.templeLevel >= 3) return "愿望小票堆满桌子，网红神庙但还是漏水。";
  if (state.fans > 200) return "门口开始排队，灶王爷要求加班费。";
  return "今日香火略有回暖，扫码上香牌终于有人扫了。";
}

function renderGoals() {
  const update = (key, value, goal) => {
    const percent = clamp(Math.round((value / goal) * 100), 0, 100);
    $(`#goal${key}`).style.width = `${percent}%`;
    $(`#goal${key}Text`).textContent = `${Math.min(value, goal)}/${goal}`;
  };
  update("Incense", state.incense, festivalGoals.incense);
  update("Fans", state.fans, festivalGoals.fans);
  update("Merit", state.merit, festivalGoals.merit);

  if (state.festivalWon) {
    $("#festivalLabel").textContent = "七日庙会已出圈";
  } else if (state.day <= 7) {
    $("#festivalLabel").textContent = `七日庙会还剩 ${8 - state.day} 日`;
  } else {
    $("#festivalLabel").textContent = "七日庙会复盘中";
  }
}

function renderResources() {
  const risk = riskState();
  $("#templeLevel").textContent = state.templeLevel;
  $("#incense").textContent = state.incense;
  $("#merit").textContent = state.merit;
  $("#fans").textContent = state.fans;
  $("#chaos").textContent = state.chaos;
  $("#audit").textContent = `${state.audit}%`;
  $("#auditBar").style.width = `${state.audit}%`;
  $("#riskLabel").textContent = risk.label;
  $("#auditAdvice").textContent = risk.advice;
  $("#upgradeBtn").textContent = `扩建 ${90 + state.templeLevel * 70}`;
  $("#upgradeBtn").disabled = state.incense < 90 + state.templeLevel * 70;
  $("#dayLabel").textContent = `第 ${state.day} 日 · 宜${["爆红", "还愿", "避坑", "接单"][state.day % 4]}`;
  $("#eventName").textContent = state.event?.name ?? "待开坛";
  $("#eventCopy").textContent = state.event?.copy ?? "香火未燃，今日运势还在路上。";
  $("#pendingCount").textContent = state.wishPool.length;
  $("#templeCaption").textContent = templeCaption();
  renderGoals();
}

function renderWishes() {
  $("#wishList").innerHTML = state.wishPool.map((wish, index) => `
    <article class="wish-card ${wish === state.selectedWish ? "active" : ""}" data-wish="${index}">
      <div class="wish-origin">
        <span>愿望委托 #${wish.code}</span>
        <span>${wish.city} / ${wish.time} / 手机上香</span>
      </div>
      <div class="wish-title">${wish.text}</div>
      <div class="wish-meta">
        <span class="tag">${wish.type}</span>
        <span class="tag">${wish.emotion}</span>
        ${wish.tags.map((tag) => `<span>${tag}</span>`).join("")}
      </div>
      <div class="wish-risk">
        <span>因果风险 ${riskStars(wish.risk)}</span>
        <span>翻车概率 ${flipProbability(wish)}%</span>
        <span>可爆红 ${cloutLevel(wish)}</span>
      </div>
      <div class="wish-actions">
        <button data-action="accept" type="button">接单</button>
        <button data-action="reject" type="button">劝退</button>
        <button data-action="pool" type="button">功德池</button>
        <button data-action="audit" type="button">地府审核</button>
      </div>
    </article>
  `).join("");
  $("#selectedWishLabel").textContent = state.selectedWish ? `${state.selectedWish.type} · ${state.selectedWish.element}过旺 · 推荐${elementRules[state.selectedWish.element]}` : "无单可接";
}

function renderRosterList(containerId, selectedId, role) {
  $(`#${containerId}`).innerHTML = spirits.map((spirit) => {
    const locked = state.templeLevel < spirit.unlock;
    return `
      <button class="spirit-card ${spirit.id === selectedId ? "active" : ""} ${locked ? "locked" : ""}" data-spirit="${spirit.id}" data-role="${role}" type="button" ${locked ? "disabled" : ""}>
        <span class="avatar">${spirit.icon}</span>
        <span>
          <span class="name">${spirit.name}</span>
          <span class="trait">${locked ? `Lv.${spirit.unlock} 解锁` : spirit.trait}</span>
          <span class="mood-row">
            <span class="mood-pill">羁绊 ${spirit.bond}</span>
            <span class="mood-pill ${spirit.stress >= 6 ? "hot" : ""}">压力 ${spirit.stress}</span>
          </span>
        </span>
        <span class="power">${locked ? "锁" : `+${spirit.power + moodBonus(spirit)}`}</span>
      </button>
    `;
  }).join("");
}

function renderRoster() {
  renderRosterList("spiritList", state.selectedSpirit.id, "main");
  renderRosterList("assistantList", state.selectedAssistant.id, "assistant");

  $("#relicList").innerHTML = relics.map((relic) => `
    <button class="relic-card ${relic.id === state.selectedRelic.id ? "active" : ""}" data-relic="${relic.id}" type="button">
      <span class="avatar">${relic.icon}</span>
      <span><span class="name">${relic.name}</span><span class="trait">${relic.element}行法器</span></span>
      <span class="power">+${relic.power}</span>
    </button>
  `).join("");

  $("#mainSlot").textContent = state.selectedSpirit.name;
  $("#assistantSlot").textContent = state.selectedAssistant.name;
  $("#relicSlot").textContent = state.selectedRelic.name;
  $("#arraySlot").textContent = `${state.element}行阵`;

  document.querySelectorAll(".element").forEach((button) => {
    button.classList.toggle("active", button.dataset.element === state.element);
  });

  document.querySelectorAll(".strategy").forEach((button) => {
    button.classList.toggle("active", button.dataset.strategy === state.strategy);
  });
}

function renderForecast() {
  const card = $("#forecastCard");
  if (!state.selectedWish) {
    card.innerHTML = `<span>灵验率</span><strong>--</strong><p>今日愿望池暂时见底，签筒开始摸鱼。</p>`;
    return;
  }
  const score = scoreDispatch();
  const strategy = currentStrategy();
  const eventText = score.eventMatch > 0 ? `今日黄历加成 +${score.eventMatch}` : "今日黄历未加成";
  card.innerHTML = `
    <span>灵验率</span>
    <strong>${score.probability}%</strong>
    <p>${strategy.note} ${eventText}，翻车压力 ${score.backlash}。</p>
  `;
}

function resultClass(kind) {
  if (kind === "backlash") return "notice";
  if (kind === "viral") return "hot-ticket";
  return "receipt";
}

function renderResult() {
  const result = state.lastOutcome;
  $("#trendLabel").textContent = result?.trend ?? "暂无热搜";
  $("#shareBtn").disabled = !state.lastTicket;
  if (!result) return;

  const resultCard = $("#resultCard");
  resultCard.className = `result-card ${resultClass(result.kind)}`;
  resultCard.innerHTML = `
    <span class="sigil">${result.kind === "backlash" ? "罚" : result.kind === "viral" ? "热" : "签"}</span>
    <h3>${result.title}</h3>
    <p>${result.copy}</p>
    <div class="receipt">
      <span>委托内容：${result.wishText}</span>
      <span>派遣组合：${result.spiritName} + ${result.assistantName} + ${result.relicName} + ${result.arrayName}</span>
      <span>处理意见：${result.strategyLabel} · 预估灵验率 ${result.probability}%</span>
    </div>
    <div class="delta-grid">
      <span>香火 ${signed(result.incense)}</span>
      <span>功德 ${signed(result.merit)}</span>
      <span>粉丝 ${signed(result.fans)}</span>
      <span>黑红 ${signed(result.chaos)}</span>
    </div>
  `;

  $("#feed").innerHTML = state.log.slice(0, 8).map((item) => `<div class="feed-item">${item}</div>`).join("");
}

function renderStaff() {
  const spirit = state.focusedStaff;
  $("#staffDetail").innerHTML = `
    <div class="staff-title">
      <span class="avatar">${spirit.icon}</span>
      <div>
        <h3>${spirit.name}</h3>
        <small>${spirit.role}</small>
      </div>
    </div>
    <div class="staff-grid">
      <div><small>五行</small><b>${spirit.elements.join(" / ")}</b></div>
      <div><small>状态</small><b>${spirit.stress >= 7 ? "轻度厌人" : spirit.stress >= 4 ? "不想上班" : "还能接单"}</b></div>
      <div><small>羁绊</small><b>${spirit.bond}/20</b></div>
      <div><small>压力</small><b>${spirit.stress}/10</b></div>
    </div>
    <p>${spirit.personality}</p>
    <div class="skill-list">${spirit.skills.map((skill) => `<span>${skill}</span>`).join("")}</div>
    <p><b>缺点：</b>${spirit.flaw}</p>
    <p><b>想要供品：</b>${spirit.want}</p>
  `;
  $("#staffQuote").textContent = spirit.quote;
  $("#offerBtn").disabled = state.incense < 30;
}

function renderHotList() {
  $("#hotList").innerHTML = state.hotTopics.map((item, index) => `
    <li><b>${index + 1}</b><span>${item.topic}</span><em>${item.badge}</em></li>
  `).join("");
}

async function copyTicket() {
  if (!state.lastTicket) return;
  try {
    await navigator.clipboard.writeText(state.lastTicket);
    $("#shareStatus").textContent = "战报已复制。";
  } catch {
    $("#shareStatus").textContent = "复制失败，可以直接截这张战报。";
  }
}

function selectSpirit(spirit, role) {
  if (role === "main") {
    state.selectedSpirit = spirit;
    if (state.selectedAssistant === spirit) {
      state.selectedAssistant = spirits.find((item) => item !== spirit && state.templeLevel >= item.unlock) ?? state.selectedAssistant;
    }
  } else {
    state.selectedAssistant = spirit;
    if (state.selectedSpirit === spirit) {
      state.selectedSpirit = spirits.find((item) => item !== spirit && state.templeLevel >= item.unlock) ?? state.selectedSpirit;
    }
  }
  state.focusedStaff = spirit;
  render();
}

function bindEvents() {
  $("#wishList").addEventListener("click", (event) => {
    const card = event.target.closest("[data-wish]");
    if (!card) return;
    const wish = state.wishPool[Number(card.dataset.wish)];
    const actionButton = event.target.closest("[data-action]");
    if (actionButton) {
      handleWishAction(wish, actionButton.dataset.action);
      return;
    }
    state.selectedWish = wish;
    render();
  });

  document.body.addEventListener("click", (event) => {
    const spiritCard = event.target.closest("[data-spirit]");
    if (spiritCard) {
      const spirit = spirits.find((item) => item.id === spiritCard.dataset.spirit);
      if (!spirit || state.templeLevel < spirit.unlock) return;
      selectSpirit(spirit, spiritCard.dataset.role);
      return;
    }

    const relicCard = event.target.closest("[data-relic]");
    if (relicCard) {
      state.selectedRelic = relics.find((relic) => relic.id === relicCard.dataset.relic);
      render();
      return;
    }

    const elementButton = event.target.closest("[data-element]");
    if (elementButton) {
      state.element = elementButton.dataset.element;
      render();
      return;
    }

    const strategyButton = event.target.closest("[data-strategy]");
    if (strategyButton) {
      state.strategy = strategyButton.dataset.strategy;
      render();
    }
  });

  $("#dispatchBtn").addEventListener("click", dispatchWish);
  $("#refreshBtn").addEventListener("click", () => refreshWishes(true));
  $("#upgradeBtn").addEventListener("click", upgradeTemple);
  $("#shareBtn").addEventListener("click", copyTicket);
  $("#offerBtn").addEventListener("click", offerIncense);
  $("#talkBtn").addEventListener("click", talkToStaff);
  $("#restBtn").addEventListener("click", restStaff);
}

function render() {
  renderResources();
  renderWishes();
  renderRoster();
  renderForecast();
  renderResult();
  renderStaff();
  renderHotList();
  $("#dispatchBtn").disabled = !state.selectedWish;
}

bindEvents();
refreshWishes(false);
