import React from "react";
import { ArrowUp, ExternalLink } from "lucide-react";
import { REGISTRATION_URL, PAST_SITE_URL } from "../data/eventData";

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const navHeight = 90;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navHeight;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
  };

  return (
    <footer className="footer-modern">
      <div className="footer-container">
        {/* 上方導覽與品牌列 */}
        <div className="footer-top-grid">
          {/* 品牌資訊 */}
          <div className="footer-brand-col">
            <div className="footer-logo-row" onClick={scrollToTop} role="button" tabIndex={0}>
              <img
                src={`${import.meta.env.BASE_URL}favicon.png`}
                alt="AISCU Logo"
                className="footer-logo-img"
              />
              <div>
                <span className="footer-brand-title">NextWave 2026</span>
                <span className="footer-brand-sub">AI 法創黑客松</span>
              </div>
            </div>
            <p className="footer-brand-desc">
              結合 AI × 法律 × 科技 × 創意，引導青年跨域探索，賦能法律科技（LawTech）新未來。
            </p>
          </div>

          {/* 快速導航 */}
          <div className="footer-nav-col">
            <h4 className="footer-col-title">賽事快速導覽</h4>
            <div className="footer-nav-links">
              <button onClick={() => scrollTo("about")}>活動介紹</button>
              <button onClick={() => scrollTo("rules")}>參賽資格</button>
              <button onClick={() => scrollTo("rubrics")}>評分標準</button>
              <button onClick={() => scrollTo("prizes")}>獎金名次</button>
              <button onClick={() => scrollTo("highlights")}>精彩回顧</button>
              <button onClick={() => scrollTo("workshop")}>增能工作坊</button>
              <button onClick={() => scrollTo("timeline")}>重要時程</button>
              <button onClick={() => scrollTo("faq")}>常見問題</button>
            </div>
          </div>

          {/* 外部資源 */}
          <div className="footer-links-col">
            <h4 className="footer-col-title">外部官方連結</h4>
            <ul className="footer-ext-list">
              <li>
                <a href={REGISTRATION_URL} target="_blank" rel="noopener noreferrer">
                  <span>線上報名表單</span>
                  <ExternalLink size={14} />
                </a>
              </li>
              <li>
                <a href={PAST_SITE_URL} target="_blank" rel="noopener noreferrer">
                  <span>2025 歷屆活動網站</span>
                  <ExternalLink size={14} />
                </a>
              </li>
              <li>
                <a href="mailto:ai.scu.club@gmail.com">
                  <span>聯絡主辦秘書處</span>
                  <ExternalLink size={14} />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* 下方版權與回到頂部 */}
        <div className="footer-bottom-row">
          <p className="footer-copyright">
            © 2026 東吳大學人工智慧應用社 · 指導單位：東吳人本AI研究中心、台灣法學基金會
          </p>
          <button className="footer-back-to-top" onClick={scrollToTop}>
            <span>回到頂部</span>
            <ArrowUp size={16} />
          </button>
        </div>
      </div>
    </footer>
  );
};
