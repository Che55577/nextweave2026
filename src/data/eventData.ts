export const REGISTRATION_URL =
  "https://docs.google.com/forms/d/1pV3JRWR1VF0grXSnMURSD6RUXyooklGbZhrUU8SW9fA/viewform";

export const PAST_SITE_URL = "https://aiscuclub.github.io/NEXTWAVE/";

// 初賽繳件截止倒數目標時間 (2026/11/30 23:59:59)
export const COUNTDOWN_TARGET_DATE = "2026-11-30T23:59:59+08:00";

// 頂部導航列錨點清單
export interface NavLink {
  id: string;
  label: string;
  number: string;
}

export const NAV_LINKS: NavLink[] = [
  { id: "about", label: "活動介紹", number: "01" },
  { id: "rules", label: "賽制規則", number: "02" },
  { id: "rubrics", label: "評分標準", number: "03" },
  { id: "prizes", label: "獎金資訊", number: "04" },
  { id: "highlights", label: "精彩回顧", number: "05" },
  { id: "workshop", label: "增能工作坊", number: "06" },
  { id: "timeline", label: "重要時程", number: "07" },
  { id: "faq", label: "常見問題", number: "08" },
  { id: "organizers", label: "主辦單位", number: "09" },
];

// 核心亮點數據看板
export interface StatItem {
  value: string;
  label: string;
  detail: string;
  accent: string;
}

export const STATS_DATA: StatItem[] = [
  {
    value: "NT$ 50,000",
    label: "總獎金池",
    detail: "第一名高達兩萬元，人人有機會",
    accent: "from-amber-400 to-yellow-500",
  },
  {
    value: "2–5 人",
    label: "自由組隊規模",
    detail: "不限科系學校，鼓勵法學×科技跨域",
    accent: "from-cyan-400 to-blue-500",
  },
  {
    value: "10/15 – 11/30",
    label: "初賽企劃繳件",
    detail: "線上報名填表，書面企劃審查",
    accent: "from-purple-400 to-indigo-500",
  },
  {
    value: "PartyRock",
    label: "零門檻 AI 平台",
    detail: "AWS 生成式 AI 實作工具全額支援",
    accent: "from-pink-400 to-rose-500",
  },
];

// 競賽核心主題
export interface ThemeItem {
  id: string;
  title: string;
  subtitle: string;
  desc: string;
  tags: string[];
}

export const THEMES_DATA: ThemeItem[] = [
  {
    id: "theme-access",
    title: "法律可近性提升",
    subtitle: "Legal Accessibility",
    desc: "運用生成式 AI 拆解繁複生澀的法律術語，打造引導式流程，讓一般大眾與弱勢族群能更快速理解權益並獲得精準協助。",
    tags: ["權益普及", "白話法律", "流程指引"],
  },
  {
    id: "theme-review",
    title: "智慧判決與合規審閱",
    subtitle: "AI Judgment & Compliance",
    desc: "運用大型語言模型進行大量裁判書要旨摘要、法條關聯性檢索，或輔助企業進行合約條款初審與風險評估。",
    tags: ["裁判書分析", "合規檢測", "智慧契約"],
  },
  {
    id: "theme-assistant",
    title: "生成式法律對話應用",
    subtitle: "Generative Law Assistant",
    desc: "針對租屋糾紛、勞資爭議、消保申訴等日常場景，打造對話式法律諮詢助手與自動存證信函/訴狀生成工具。",
    tags: ["生活法律", "對話式 AI", "書狀生成"],
  },
  {
    id: "theme-innovation",
    title: "跨域公共議題解決方案",
    subtitle: "Cross-Disciplinary Solutions",
    desc: "結合設計思考、商業模式與法學科技，提出兼具社會影響力、合規性與商業可落地性的新世代解決方案。",
    tags: ["社會創新", "科技倫理", "商業可行性"],
  },
];

// 2025 精彩回顧照片清單 (共 20 張優化代表照片)
const BASE = import.meta.env.BASE_URL.endsWith("/")
  ? import.meta.env.BASE_URL
  : `${import.meta.env.BASE_URL}/`;

export interface RetrospectivePhoto {
  id: number;
  filename: string;
  src: string;
  alt: string;
}

export const RETROSPECTIVE_PHOTOS: RetrospectivePhoto[] = Array.from(
  { length: 20 },
  (_, i) => {
    const numStr = String(i + 1).padStart(2, "0");
    return {
      id: i + 1,
      filename: `photo-${numStr}.jpg`,
      src: `${BASE}retrospective2025/photo-${numStr}.jpg`,
      alt: `NextWave 2025 活動精采片刻 ${i + 1}`,
    };
  }
);

// 重要時程
export interface TimelineItem {
  date: string;
  fullDate: string;
  title: string;
  subtitle: string;
  status?: "upcoming" | "active" | "deadline";
}

export const TIMELINE_DATA: TimelineItem[] = [
  {
    date: "10/15",
    fullDate: "2026/10/15 (三)",
    title: "開放報名與企劃繳件",
    subtitle: "線上 Google 表單開放報名與上傳初賽企劃書",
    status: "upcoming",
  },
  {
    date: "11/30",
    fullDate: "2026/11/30 (日) 23:59",
    title: "初賽繳件截止",
    subtitle: "初賽企劃書（3–10 頁 PDF）截止收件，逾時不候",
    status: "deadline",
  },
  {
    date: "12/02",
    fullDate: "2026/12/02 (二)",
    title: "決賽名單公告",
    subtitle: "評審團書審結束，寄發決賽入選通知至隊長信箱",
    status: "upcoming",
  },
  {
    date: "12/05",
    fullDate: "2026/12/05 (五) 19:00–21:00",
    title: "競賽工作坊與行前說明會",
    subtitle: "東吳大學城中校區實體講座 ＋ Google Meet 線上同步直播",
    status: "upcoming",
  },
  {
    date: "12/25",
    fullDate: "2026/12/25 (四) 23:59",
    title: "決賽簡報與成品繳交",
    subtitle: "上傳最終簡報投影片與 PartyRock Prototype 連結",
    status: "deadline",
  },
  {
    date: "12/27",
    fullDate: "2026/12/27 (六) 11:30–20:00",
    title: "決賽現場 Pitch 暨頒獎典禮",
    subtitle: "東吳城中遊藝廣場現場展示、評審提問與大合照",
    status: "upcoming",
  },
];

// 獎金名次
export interface PrizeTier {
  id: string;
  rank: string;
  title: string;
  amount: string;
  quota: string;
  perks: string[];
  featured?: boolean;
  accent: string;
}

export const PRIZES_DATA: PrizeTier[] = [
  {
    id: "gold",
    rank: "01",
    title: "第一名（金獎）",
    amount: "NT$ 20,000",
    quota: "1 組",
    perks: [
      "大會獎金 NT$ 20,000",
      "獲獎團隊獎狀每人乙紙",
      "東吳人本AI研究中心專題報導宣傳",
      "後續法律科技創育優先輔導推薦",
    ],
    featured: true,
    accent: "gold",
  },
  {
    id: "silver",
    rank: "02",
    title: "第二名（銀獎）",
    amount: "NT$ 10,000",
    quota: "1 組",
    perks: [
      "大會獎金 NT$ 10,000",
      "獲獎團隊獎狀每人乙紙",
      "活動官方平台成果曝光展示",
    ],
    accent: "silver",
  },
  {
    id: "bronze",
    rank: "03",
    title: "第三名（銅獎）",
    amount: "NT$ 5,000",
    quota: "1 組",
    perks: [
      "大會獎金 NT$ 5,000",
      "獲獎團隊獎狀每人乙紙",
      "官方成果集列名肯定",
    ],
    accent: "bronze",
  },
  {
    id: "merit",
    rank: "佳作",
    title: "佳作獎",
    amount: "NT$ 2,000",
    quota: "3 組",
    perks: ["大會獎金 NT$ 2,000", "入選團隊佳作獎狀每人乙紙"],
    accent: "cyan",
  },
  {
    id: "presentation",
    rank: "特別",
    title: "最佳簡報獎",
    amount: "NT$ 2,000",
    quota: "2 組",
    perks: ["大會獎金 NT$ 2,000", "最佳台風與展示評審特別表揚"],
    accent: "purple",
  },
];

export const TOTAL_PRIZE = "NT$ 50,000";

// 評分標準
export interface RubricCriteria {
  label: string;
  weight: number;
  weightText: string;
  desc: string;
  color: string;
}

export const RUBRICS_PRELIM: RubricCriteria[] = [
  {
    label: "企劃完整性與邏輯",
    weight: 35,
    weightText: "35%",
    desc: "問題定義清晰度、目標受眾痛點分析及企劃書結構嚴謹度",
    color: "#00F0FF",
  },
  {
    label: "創新與原創性",
    weight: 30,
    weightText: "30%",
    desc: "相較現有法律科技服務的突破亮點與創意思維",
    color: "#38BDF8",
  },
  {
    label: "AI 技術應用與整合度",
    weight: 25,
    weightText: "25%",
    desc: "所選 AI 技術之契合度、提示詞工程設計及資料合規性",
    color: "#818CF8",
  },
  {
    label: "技術執行可行性",
    weight: 10,
    weightText: "10%",
    desc: "低門檻原型（PartyRock / API）落地與後續實作之可行評估",
    color: "#C084FC",
  },
];

export const RUBRICS_FINALS: RubricCriteria[] = [
  {
    label: "社會影響力與痛點聚焦",
    weight: 35,
    weightText: "35%",
    desc: "對法律可近性提升之實質貢獻與社會效益評估",
    color: "#00F0FF",
  },
  {
    label: "AI 技術深度與原型創新",
    weight: 25,
    weightText: "25%",
    desc: "現場 Prototype 實機運作流暢度、生成品質與技術整合展現",
    color: "#38BDF8",
  },
  {
    label: "現場簡報與團隊答辯",
    weight: 20,
    weightText: "20%",
    desc: "Demo 展示力、台風掌握、團隊分工與評審專業問答應對",
    color: "#818CF8",
  },
  {
    label: "未來落地與商用潛力",
    weight: 20,
    weightText: "20%",
    desc: "後續進階開發規劃、推廣策略與市場需求可持續性",
    color: "#C084FC",
  },
];

// 常見問題 FAQ
export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export const FAQ_DATA: FAQItem[] = [
  {
    id: "faq-1",
    category: "參賽資格",
    question: "非法律系或非資訊相關科系的大專生可以組隊參加嗎？",
    answer:
      "完全可以！本競賽強烈鼓勵跨領域組隊。法律問題的解決往往需要人文、商管、設計等多方思維，搭配 AWS PartyRock 等無程式碼生成式 AI 工具，任何科系皆能輕鬆上手建立原型。",
  },
  {
    id: "faq-2",
    category: "團隊組成",
    question: "可以跨校、跨系或跨學制組隊嗎？可以個人參賽嗎？",
    answer:
      "每隊人數限制為 2 至 5 人，可以跨校、跨系、跨年級（大學部、碩士、博士皆可）。因黑客松強調團隊協作與跨域互補，不開放個人單獨參賽。",
  },
  {
    id: "faq-3",
    category: "初賽繳件",
    question: "初賽企劃書的規格與內容重點為何？",
    answer:
      "初賽企劃書需為 3 至 10 頁的 PDF 檔案，內容應包含：問題定義與背景分析（約 300 字）、AI × 法學解決方案構想書（1–3 頁，說明創新亮點、所用 AI 技術及預期效益）、團隊成員專業簡介及在學證明。可自由附加架構圖或原型連結作為加分項。",
  },
  {
    id: "faq-4",
    category: "技術工具",
    question: "競賽中推薦或限制使用哪些 AI 工具與平台？",
    answer:
      "我們特別推薦使用 AWS PartyRock 平台，此工具無須寫程式即可透過對話快速建構多模態生成式 AI 應用原型。團隊亦可自由搭配其他開源模型、Claude、ChatGPT API 或自建服務，重點在於解決方案與法律場景的結合度。",
  },
  {
    id: "faq-5",
    category: "決賽流程",
    question: "入選決賽後需要到現場參加嗎？是否有提供培訓？",
    answer:
      "晉級決賽的隊伍需出席 12/5 的競賽增能工作坊（提供實體與線上 Google Meet 直播雙軌），我們將安排生成式 AI 專家與法學顧問親自指導修訂；並於 12/27 於東吳大學城中校區遊藝廣場進行實機 Demo 與口頭 Pitch。",
  },
  {
    id: "faq-6",
    category: "智慧財產權",
    question: "參賽作品的智慧財產權與專利歸屬為何？",
    answer:
      "參賽作品之著作權與智慧財產權完全歸屬於參賽團隊成員所有。主辦單位僅擁有為推廣賽事成果所必需之非營利展示、宣傳及刊登權利。",
  },
];

// 工作坊活動議程
export const WORKSHOP_FLOW = [
  { time: "18:50–19:00", event: "開放入場、技術設備測試", host: "大會工作團隊" },
  { time: "19:00–19:10", event: "開場與規則說明：工作坊目的與決賽要點", host: "主辦單位代表" },
  { time: "19:10–20:00", event: "AWS PartyRock 快速上手與原型實作引導", host: "AI 技術專家講師" },
  { time: "20:00–20:50", event: "法學科技（LawTech）場景實務應用專題講座", host: "法學專家" },
  { time: "20:50–21:00", event: "Q&A 問答、總結與決賽任務提醒", host: "全體參與者" },
];

// 決賽當日流程
export const FINALS_FLOW = [
  { time: "11:30–12:00", event: "參賽者與評審貴賓報到、設備實機測試" },
  { time: "12:00–12:15", event: "大會開幕、主辦單位致詞與評審介紹" },
  { time: "12:15–15:00", event: "決賽入圍隊伍創意 Pitch 與現場展示（上半場）" },
  { time: "15:00–17:00", event: "決賽入圍隊伍創意 Pitch 與現場展示（下半場）" },
  { time: "17:00–17:20", event: "評審團閉門評選會議與講評回饋" },
  { time: "17:40–18:00", event: "隆重頒獎典禮與獲獎感言分享" },
  { time: "18:00–20:00", event: "交流茶會、團隊大合照與場地復原" },
];
