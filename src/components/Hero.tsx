import React from "react";
import heroImg from "../assets/hero.png";
import { REGISTRATION_URL, PAST_SITE_URL } from "../data/eventData";
import { ExternalLink, Sparkles, FileText, ArrowRight } from "lucide-react";

interface HeroProps {
  onCheckRules: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onCheckRules }) => {
  return (
    <section className="hero">
      <div className="hero-tag">
        <Sparkles size={16} className="hero-tag-icon" />
        <span>2026 全新啟動 · AI × 法律跨域黑客松</span>
      </div>

      <h1 className="title">NextWave：AI法創黑客松</h1>
      <p className="subtitle">
        結合 <span className="ai">AI</span> × <span className="law">法律</span> ×{" "}
        <span className="tech">科技</span> × <span className="creative">創意</span>
        ，打造新世代法律科技解決方案！
      </p>

      {/* 首頁主視覺圖片 */}
      <div className="hero-img-wrapper">
        <img
          src={heroImg}
          alt="NextWave 2026 AI法創黑客松主視覺"
          className="hero-img"
        />
      </div>

      <div className="buttons">
        <a
          href={REGISTRATION_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="btn primary"
        >
          <span>立即報名</span>
          <ArrowRight size={18} />
        </a>
        <button className="btn outline" onClick={onCheckRules}>
          <FileText size={18} />
          <span>查看簡章</span>
        </button>
        <a
          href={PAST_SITE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="btn outline"
        >
          <span>2025 歷屆活動網站</span>
          <ExternalLink size={16} />
        </a>
      </div>
    </section>
  );
};
