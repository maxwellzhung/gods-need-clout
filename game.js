const wishes = [
  { text: "想让前任刷到我过得超好并立刻后悔", type: "复合", element: "火", risk: 22, reward: 44 },
  { text: "希望老板今天开会突然失声三小时", type: "报复", element: "金", risk: 42, reward: 62 },
  { text: "想一夜暴富，但最好不要上法治新闻", type: "暴富", element: "水", risk: 35, reward: 70 },
  { text: "求把证件照修成命定贵人脸", type: "变美", element: "木", risk: 18, reward: 36 },
  { text: "想让直播间从 7 人涨到 70 万人", type: "出名", element: "火", risk: 50, reward: 88 },
  { text: "求转运，最近外卖筷子都少一根", type: "转运", element: "土", risk: 12, reward: 30 },
  { text: "希望竞争对手的 PPT 全部变宋体", type: "职场", element: "金", risk: 28, reward: 46 },
  { text: "想让暗恋对象梦见我，但别梦成恐怖片", type: "情感", element: "水", risk: 25, reward: 42 },
  { text: "求孩子考试超常发挥，别超到能看见答案", type: "学业", element: "木", risk: 31, reward: 52 },
  { text: "想把水逆退订，自动续费太烦了", type: "转运", element: "土", risk: 16, reward: 34 },
  { text: "求让我在同学会上轻描淡写地赢一次", type: "面子", element: "火", risk: 24, reward: 48 },
  { text: "想让健身卡自己产生使用记录", type: "偷懒", element: "水", risk: 38, reward: 55 }
];

const spirits = [
  { id: "stove", icon: "灶", name: "落魄灶王", trait: "管家宅、人情、饭局", elements: ["火", "土"], power: 22, mood: "想证明自己还管用" },
  { id: "fox", icon: "狐", name: "社恐狐仙", trait: "擅长魅力、梦境、复合", elements: ["木", "水"], power: 25, mood: "被太多人许愿后有点怕生" },
  { id: "dragon", icon: "龙", name: "打工龙王", trait: "会调水运、财运、流量", elements: ["水", "金"], power: 28, mood: "下班前不想再求雨" },
  { id: "judge", icon: "判", name: "地府实习判官", trait: "懂因果、审查、反噬", elements: ["金", "土"], power: 24, mood: "KPI 是少出事" },
  { id: "mirror", icon: "镜", name: "铜镜器灵", trait: "照见人设、颜值、热搜", elements: ["金", "火"], power: 21, mood: "爱看评论区" }
];

const relics = [
  { id: "coin", icon: "钱", name: "招财裂纹铜钱", element: "金", power: 14 },
  { id: "bell", icon: "铃", name: "醒梦小铃", element: "水", power: 12 },
  { id: "seal", icon: "印", name: "临时神职印", element: "土", power: 13 },
  { id: "fan", icon: "扇", name: "热搜借风扇", element: "火", power: 16 },
  { id: "twig", icon: "枝", name: "转运桃枝", element: "木", power: 11 }
];

const state = {
  day: 1,
  templeLevel: 1,
  incense: 120,
  merit: 50,
  fans: 36,
  chaos: 0,
  audit: 8,
  wishPool: [],
  selectedWish: null,
  selectedSpirit: spirits[0],
  selectedRelic: relics[0],
  element: "木",
  log: []
};

const $ = (selector) => document.querySelector(selector);

function sample(list, count) {
  return [...list].sort(() => Math.random() - 0.5).slice(0, count);
}

function clamp(value, min, max) {
  return Math.max(min, Math.min(max, value));
}

function refreshWishes() {
  state.wishPool = sample(wishes, 4 + Math.min(2, state.templeLevel));
  state.selectedWish = state.wishPool[0];
  state.day += 1;
  render();
}

function scoreDispatch() {
  const wish = state.selectedWish;
  const spirit = state.selectedSpirit;
  const relic = state.selectedRelic;
  const elementMatch = (spirit.elements.includes(wish.element) ? 18 : 0) + (relic.element === wish.element ? 14 : 0) + (state.element === wish.element ? 12 : 0);
  const power = spirit.power + relic.power + state.templeLevel * 5 + elementMatch;
  const pressure = wish.risk + state.audit * 0.45 + state.chaos * 0.22;
  const roll = Math.floor(Math.random() * 56) + power - pressure;
  return { roll, power, pressure, elementMatch };
}

function dispatchWish() {
  if (!state.selectedWish || !state.selectedSpirit || !state.selectedRelic) return;

  const wish = state.selectedWish;
  const spirit = state.selectedSpirit;
  const relic = state.selectedRelic;
  const { roll, elementMatch } = scoreDispatch();
  let outcome;

  if (roll >= 48) {
    outcome = {
      title: "大灵验",
      trend: "#小庙显灵冲上同城热榜",
      copy: `${spirit.name}带着${relic.name}精准出手，愿主当场还愿，评论区开始排队求同款。`,
      incense: wish.reward + 24,
      merit: 9,
      fans: 38,
      chaos: 4,
      audit: 3
    };
  } else if (roll >= 20) {
    outcome = {
      title: "有点灵",
      trend: "#玄学但好像有用",
      copy: `${wish.text}这事成了一半，另一半靠愿主自己圆。香客说不清原理，但愿意转发。`,
      incense: wish.reward,
      merit: 4,
      fans: 18,
      chaos: 2,
      audit: 1
    };
  } else if (roll >= -8) {
    outcome = {
      title: "黑红翻车",
      trend: "#这庙是不是过于努力",
      copy: `${spirit.name}理解偏了，${relic.name}还添了一把火。事情没完全坏，但热搜味儿很浓。`,
      incense: Math.floor(wish.reward * 0.55),
      merit: -7,
      fans: 28,
      chaos: 18,
      audit: 11
    };
  } else {
    outcome = {
      title: "因果反噬",
      trend: "#地府已关注",
      copy: `愿望太歪，阵法也没压住。${spirit.name}被请去写情况说明，庙门口多了一张整改通知。`,
      incense: -22,
      merit: -14,
      fans: -4,
      chaos: 26,
      audit: 18
    };
  }

  if (elementMatch >= 26) {
    outcome.copy += " 五行对得很漂亮，像是老天爷也点了赞。";
    outcome.merit += 3;
  }

  state.incense = clamp(state.incense + outcome.incense, 0, 9999);
  state.merit = clamp(state.merit + outcome.merit, 0, 999);
  state.fans = clamp(state.fans + outcome.fans, 0, 9999);
  state.chaos = clamp(state.chaos + outcome.chaos, 0, 999);
  state.audit = clamp(state.audit + outcome.audit + Math.floor(state.chaos / 70), 0, 100);
  state.log.unshift(`${outcome.title}：${wish.type}委托 · ${outcome.trend}`);
  state.lastOutcome = outcome;
  state.wishPool = state.wishPool.filter((item) => item !== wish);
  state.selectedWish = state.wishPool[0] ?? null;
  render();
}

function upgradeTemple() {
  const cost = 90 + state.templeLevel * 70;
  if (state.incense < cost) return;
  state.incense -= cost;
  state.templeLevel += 1;
  state.merit += 8;
  state.audit = clamp(state.audit - 6, 0, 100);
  state.log.unshift(`小庙升级到 Lv.${state.templeLevel}，新城区愿望开始闻着香火来了。`);
  refreshWishes();
}

function renderResources() {
  $("#templeLevel").textContent = state.templeLevel;
  $("#incense").textContent = state.incense;
  $("#merit").textContent = state.merit;
  $("#fans").textContent = state.fans;
  $("#chaos").textContent = state.chaos;
  $("#audit").textContent = `${state.audit}%`;
  $("#auditBar").style.width = `${state.audit}%`;
  $("#upgradeBtn").textContent = `升级小庙 ${90 + state.templeLevel * 70} 香火`;
  $("#upgradeBtn").disabled = state.incense < 90 + state.templeLevel * 70;
  $("#dayLabel").textContent = `第 ${state.day} 日 · 宜${["爆红", "还愿", "避坑", "接单"][state.day % 4]}`;
}

function renderWishes() {
  $("#wishList").innerHTML = state.wishPool.map((wish, index) => `
    <button class="wish-card ${wish === state.selectedWish ? "active" : ""}" data-wish="${index}" type="button">
      <span class="wish-title">${wish.text}</span>
      <span class="wish-meta">
        <span class="tag">${wish.type}</span>
        <span>五行偏${wish.element}</span>
        <span>风险 ${wish.risk}</span>
        <span>香火 ${wish.reward}</span>
      </span>
    </button>
  `).join("");
  $("#selectedWishLabel").textContent = state.selectedWish ? `${state.selectedWish.type} · ${state.selectedWish.element}` : "无单可接";
}

function renderRoster() {
  $("#spiritList").innerHTML = spirits.map((spirit) => `
    <button class="spirit-card ${spirit.id === state.selectedSpirit.id ? "active" : ""}" data-spirit="${spirit.id}" type="button">
      <span class="avatar">${spirit.icon}</span>
      <span><span class="name">${spirit.name}</span><span class="trait">${spirit.trait}</span></span>
      <span class="power">+${spirit.power}</span>
    </button>
  `).join("");

  $("#relicList").innerHTML = relics.map((relic) => `
    <button class="relic-card ${relic.id === state.selectedRelic.id ? "active" : ""}" data-relic="${relic.id}" type="button">
      <span class="avatar">${relic.icon}</span>
      <span><span class="name">${relic.name}</span><span class="trait">${relic.element}行法器</span></span>
      <span class="power">+${relic.power}</span>
    </button>
  `).join("");

  document.querySelectorAll(".element").forEach((button) => {
    button.classList.toggle("active", button.dataset.element === state.element);
  });
}

function renderResult() {
  const result = state.lastOutcome;
  $("#trendLabel").textContent = result?.trend ?? "暂无热搜";
  if (!result) return;

  const signed = (value) => value > 0 ? `+${value}` : `${value}`;
  $("#resultCard").classList.remove("empty");
  $("#resultCard").innerHTML = `
    <span class="sigil">${result.title.slice(0, 1)}</span>
    <h3>${result.title}</h3>
    <p>${result.copy}</p>
    <div class="delta-grid">
      <span>香火 ${signed(result.incense)}</span>
      <span>功德 ${signed(result.merit)}</span>
      <span>粉丝 ${signed(result.fans)}</span>
      <span>黑红 ${signed(result.chaos)}</span>
    </div>
  `;

  $("#feed").innerHTML = state.log.slice(0, 7).map((item) => `<div class="feed-item">${item}</div>`).join("");
}

function bindEvents() {
  $("#wishList").addEventListener("click", (event) => {
    const card = event.target.closest("[data-wish]");
    if (!card) return;
    state.selectedWish = state.wishPool[Number(card.dataset.wish)];
    render();
  });

  $("#spiritList").addEventListener("click", (event) => {
    const card = event.target.closest("[data-spirit]");
    if (!card) return;
    state.selectedSpirit = spirits.find((spirit) => spirit.id === card.dataset.spirit);
    render();
  });

  $("#relicList").addEventListener("click", (event) => {
    const card = event.target.closest("[data-relic]");
    if (!card) return;
    state.selectedRelic = relics.find((relic) => relic.id === card.dataset.relic);
    render();
  });

  document.querySelector(".five-elements").addEventListener("click", (event) => {
    const button = event.target.closest("[data-element]");
    if (!button) return;
    state.element = button.dataset.element;
    render();
  });

  $("#dispatchBtn").addEventListener("click", dispatchWish);
  $("#refreshBtn").addEventListener("click", refreshWishes);
  $("#upgradeBtn").addEventListener("click", upgradeTemple);
}

function render() {
  renderResources();
  renderWishes();
  renderRoster();
  renderResult();
  $("#dispatchBtn").disabled = !state.selectedWish;
}

bindEvents();
refreshWishes();
