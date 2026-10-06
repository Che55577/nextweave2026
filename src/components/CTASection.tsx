import React from "react";
import { REGISTRATION_URL, RULES_PDF_URL } from "../data/eventData";
import { ArrowRight, Sparkles, FileDown } from "lucide-react";

export const CTASection: React.FC = () => {
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

              <a
                href={RULES_PDF_URL}
                target="_blank"
                rel="noopener noreferrer"
                download="NextWave_AI法創黑客松_簡章.pdf"
                className="cta-secondary-btn"
              >
                <FileDown size={18} />
                <span>下載官方簡章 (PDF)</span>
              </a>
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
