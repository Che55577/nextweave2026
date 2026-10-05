export const REGISTRATION_URL =
  "https://docs.google.com/forms/d/1pV3JRWR1VF0grXSnMURSD6RUXyooklGbZhrUU8SW9fA/viewform";

export const PAST_SITE_URL = "https://aiscuclub.github.io/NEXTWAVE/";

export interface RetrospectivePhoto {
  id: number;
  filename: string;
  src: string;
  alt: string;
  caption?: string;
}

// 2025 精彩回顧照片清單 (共 20 張優化代表照片)
const BASE = import.meta.env.BASE_URL.endsWith("/")
  ? import.meta.env.BASE_URL
  : `${import.meta.env.BASE_URL}/`;

export const RETROSPECTIVE_PHOTOS: RetrospectivePhoto[] = Array.from({ length: 20 }, (_, i) => {
  const numStr = String(i + 1).padStart(2, "0");
  return {
    id: i + 1,
    filename: `photo-${numStr}.jpg`,
    src: `${BASE}retrospective2025/photo-${numStr}.jpg`,
    alt: `NextWave 2025 活動精采片刻 ${i + 1}`,
  };
});

export interface TimelineItem {
  date: string;
  title: string;
  subtitle?: string;
}

export const TIMELINE_DATA: TimelineItem[] = [
  { date: "10/15", title: "開放報名", subtitle: "線上表單開放填寫" },
  { date: "11/30", title: "初賽繳件截止", subtitle: "23:59 前" },
  { date: "12/02", title: "決賽名單公告", subtitle: "寄信通知入選團隊" },
  { date: "12/05", title: "競賽工作坊與說明會", subtitle: "19:00–21:00" },
  { date: "12/25", title: "決賽繳件截止", subtitle: "23:59 前" },
  { date: "12/27", title: "決賽暨頒獎典禮", subtitle: "11:30–20:00" },
];

export interface PrizeItem {
  rank: string;
  amount: string;
  quota: string;
}

export const PRIZES_DATA: PrizeItem[] = [
  { rank: "第一名", amount: "NT$ 20,000", quota: "1 組" },
  { rank: "第二名", amount: "NT$ 10,000", quota: "1 組" },
  { rank: "第三名", amount: "NT$ 5,000", quota: "1 組" },
  { rank: "佳作獎", amount: "NT$ 2,000", quota: "3 組" },
  { rank: "最佳簡報獎", amount: "NT$ 2,000", quota: "2 組" },
  { rank: "參賽證明", amount: "-", quota: "所有入圍決賽者均可獲得" },
];

export const TOTAL_PRIZE = "NT$ 50,000";

export const EVALUATION_CRITERIA_PRELIM = [
  { icon: "📑", label: "企劃完整性", weight: "35%" },
  { icon: "💡", label: "創意性", weight: "30%" },
  { icon: "🤖", label: "AI 應用整合性", weight: "25%" },
  { icon: "⚙️", label: "技術可執行性", weight: "10%" },
];

export const EVALUATION_CRITERIA_FINALS = [
  { icon: "📑", label: "問題聚焦與社會影響力", weight: "35%" },
  { icon: "💡", label: "簡報表現", weight: "20%" },
  { icon: "🤖", label: "AI 技術應用與創新性", weight: "25%" },
  { icon: "⚙️", label: "未來可行性", weight: "20%" },
];
