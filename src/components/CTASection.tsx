import React from "react";
import { REGISTRATION_URL } from "../data/eventData";
import { ArrowRight, Sparkles, FileText } from "lucide-react";

export const CTASection: React.FC = () => {
  const scrollToRules = () => {
    const el = document.getElementById("rules");
    if (el) {
      const navHeight = 90;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navHeight;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
  };

  return (
    <section className="cta-final-section">
      <div className="cta-final-container">
        <div className="cta-final-card">
          <div className="cta-ambient-glow" />

          <div className="cta-final-content">
            <div className="cta-badge">
              <Sparkles size={16} className="text-cyan-400" />
              <span>FINAL CALL · 立即加入</span>
            </div>

            <h2 className="cta-title">準備好挑戰 AI × 法律的科技前沿了嗎？</h2>
            <p className="cta-desc">
              召集跨域戰友，提交你的創新解方構想，角逐 5 萬元總獎金與榮譽肯定！
            </p>

            <div className="cta-actions-row">
              <a
                href={REGISTRATION_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="cta-primary-btn"
              >
                <span>立即線上報名</span>
                <ArrowRight size={20} />
              </a>

              <button className="cta-secondary-btn" onClick={scrollToRules}>
                <FileText size={18} />
                <span>複習競賽辦法</span>
              </button>
            </div>

            <p className="cta-micro-note">
              ※ 線上報名表單填寫約需 3–5 分鐘 · 初賽企劃書於 11/30 23:59 前上傳即可
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
