// 這個區段放網站要顯示的核心資料，方便初學者閱讀與修改
const breadData = [
  {
    title: "吐司",
    intro: "鬆軟柔軟、切片方便，是三明治和吐司蛋糕最常見的基礎麵包。",
  },
  {
    title: "歐式麵包",
    intro: "外殼偏酥脆、內部彈牙，用於做三明治、義大利麵包沙拉底最常見。",
  },
  {
    title: "牛角麵包",
    intro: "外層焦香、層次分明，通常加黃油製作，口感更豐富。",
  },
  {
    title: "奶油麵包",
    intro: "添加奶油、糖與奶粉，香甜適中，常見於早午餐和甜點。",
  },
];

const historyData = [
  "古代先民把澱粉與水混合發酵，慢慢形成了第一代發酵麵包。",
  "中世紀歐洲加入烤箱與烘烤技術，麵包從日常食物變成穩定的主食。",
  "工業化時代後，發酵、切片與包裝更標準化，讓麵包更容易進入家庭。",
];

const factData = [
  "酵母在空氣與溫度條件下會將糖分轉成二氧化碳，讓麵團發起來。",
  "鹽除了調味，也能調整麵團發酵速度與延展性。",
  "高蛋白麵粉會比較有咬勁，適合做彈性較強的麵包。",
];

const breadCards = document.getElementById("breadCards");
const historyList = document.getElementById("historyList");
const factList = document.getElementById("factList");
const factsPanel = document.getElementById("factsPanel");
const toggleFacts = document.getElementById("toggleFacts");
const footerText = document.getElementById("footerText");

function createBreadCards() {
  // 逐一建立每張麵包卡片，避免手動重複寫多段 HTML
  breadData.forEach((item) => {
    const card = document.createElement("article");
    card.className = "bread-card";

    const title = document.createElement("h3");
    title.textContent = item.title;

    const text = document.createElement("p");
    text.textContent = item.intro;

    card.appendChild(title);
    card.appendChild(text);
    breadCards.appendChild(card);
  });
}

function createHistory() {
  // 用有序清單顯示簡短歷史發展
  historyData.forEach((step) => {
    const li = document.createElement("li");
    li.textContent = step;
    historyList.appendChild(li);
  });
}

function createFacts() {
  // 先建立小知識列表，按鈕會控制顯示或收合
  factData.forEach((fact) => {
    const li = document.createElement("li");
    li.textContent = fact;
    factList.appendChild(li);
  });
}

function setFooterYear() {
  const now = new Date();
  footerText.textContent = `今天是 ${now.getFullYear()} 年 ${now.getMonth() + 1} 月 ${now.getDate()} 日，快來一起做一塊好麵包吧！麵包師傅的名字是 willy。`;
}

function init() {
  createBreadCards();
  createHistory();
  createFacts();
  setFooterYear();

  toggleFacts.addEventListener("click", () => {
    const open = factsPanel.hasAttribute("hidden");
    if (open) {
      factsPanel.removeAttribute("hidden");
      toggleFacts.textContent = "收合麵包小知識";
    } else {
      factsPanel.setAttribute("hidden", "");
      toggleFacts.textContent = "顯示麵包小知識";
    }
  });
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", init);
} else {
  init();
}
