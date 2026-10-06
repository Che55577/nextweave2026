import React from "react";
import heroImg from "../assets/hero.png";
import { REGISTRATION_URL, PAST_SITE_URL, RULES_PDF_URL } from "../data/eventData";
import { ExternalLink, Sparkles, FileDown, ArrowRight, ChevronDown } from "lucide-react";
import { CountdownTimer } from "./CountdownTimer";

export const Hero: React.FC = () => {
  const scrollToAbout = () => {
    const el = document.getElementById("about");
    if (el) {
      const navHeight = 90;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navHeight;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
  };

  return (
    <section className="hero-section" id="hero">
      <div className="hero-ambient-glow" />

      <div className="hero-container">
        {/* 頂部標章 */}
        <div className="hero-pill-badge">
          <Sparkles size={16} className="text-cyan-400" />
          <span>2026 旗艦啟動 · 全台大專院校 AI × 法律科技黑客松</span>
        </div>

        {/* 雙行超大標題 */}
        <h1 className="hero-main-title">
          <span className="hero-title-en">NextWave 2026</span>
          <span className="hero-title-tw">AI 法創黑客松</span>
        </h1>

        {/* 副標題 */}
        <p className="hero-description">
          結合 <span className="highlight-ai">AI 人工智慧</span> ×{" "}
          <span className="highlight-law">法學思維</span> ×{" "}
          <span className="highlight-tech">雲端科技</span> ×{" "}
          <span className="highlight-creative">社會創新</span>
          <br className="hidden sm:inline" />
          運用低程式門檻平台，共同打造新世代法律科技（LawTech）解決方案！
        </p>

        {/* 實時倒數計時器模組 */}
        <div className="hero-countdown-wrapper">
          <CountdownTimer />
        </div>

        {/* 三元行動按鈕群 */}
        <div className="hero-actions-group">
          <a
            href={REGISTRATION_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hero-btn-primary"
          >
            <span>立即線上報名</span>
            <ArrowRight size={20} />
          </a>
          <a
            href={RULES_PDF_URL}
            target="_blank"
            rel="noopener noreferrer"
            download="NextWave_AI法創黑客松_簡章.pdf"
            className="hero-btn-outline"
          >
            <FileDown size={18} />
            <span>下載競賽簡章 (PDF)</span>
          </a>
          <a
            href={PAST_SITE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hero-btn-ghost"
          >
            <span>2025 歷屆成果</span>
            <ExternalLink size={16} />
          </a>
        </div>

        {/* 主視覺海報框架 */}
        <div className="hero-banner-wrapper">
          <div className="hero-banner-frame">
            <img
              src={heroImg}
              alt="NextWave 2026 AI法創黑客松主視覺海報"
              className="hero-banner-image"
            />
          </div>
        </div>

        {/* 底部跳動滾動提示 (Bounce Scroll Indicator) */}
        <div className="hero-scroll-indicator" onClick={scrollToAbout} role="button" tabIndex={0}>
          <span className="scroll-indicator-text">SCROLL TO EXPLORE</span>
          <div className="scroll-indicator-arrow">
            <ChevronDown size={20} />
          </div>
        </div>
      </div>
    </section>
  );
};
