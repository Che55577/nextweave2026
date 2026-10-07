// 外部連結與官方表單
export const REGISTRATION_URL =
  "https://docs.google.com/forms/d/1pV3JRWR1VF0grXSnMURSD6RUXyooklGbZhrUU8SW9fA/viewform";

export const PAST_SITE_URL = "https://aiscuclub.github.io/NEXTWAVE/";

const BASE = import.meta.env.BASE_URL.endsWith("/")
  ? import.meta.env.BASE_URL
  : `${import.meta.env.BASE_URL}/`;

export const RULES_PDF_URL = `${BASE}NextWave_AI法創黑客松_簡章.pdf`;
export const PROPOSAL_HTML_URL = `${BASE}proposal.html`;
export const PROPOSAL_DOCX_URL = `${BASE}2026年NextWave競賽提案書.docx`;

// 2025 精彩回顧照片清單 (共 20 張優化代表照片)
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
      alt: `NextWave 2025 活動精彩回顧 ${i + 1}`,
    };
  }
);
