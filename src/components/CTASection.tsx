import React from "react";
import { REGISTRATION_URL } from "../data/eventData";
import { ArrowRight, Sparkles } from "lucide-react";

export const CTASection: React.FC = () => {
  return (
    <section className="cta">
      <div className="cta-content">
        <div className="cta-badge">
          <Sparkles size={16} />
          <span>JOIN THE HACKATHON</span>
        </div>
        <h2>立即加入，共創法律科技新未來！</h2>
        <p>提交你的創新企劃書，挑戰創意與技術的無限可能。</p>

        <a
          href={REGISTRATION_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="btn highlight cta-btn"
        >
          <span>前往報名表單</span>
          <ArrowRight size={20} />
        </a>
      </div>
    </section>
  );
};
