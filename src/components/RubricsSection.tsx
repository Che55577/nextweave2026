import React, { useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle, BarChart3, Award } from "lucide-react";
import { RUBRICS_PRELIM, RUBRICS_FINALS } from "../data/eventData";

export const RubricsSection: React.FC = () => {
  const [activeStage, setActiveStage] = useState<"prelim" | "finals">("prelim");

  const currentRubrics = activeStage === "prelim" ? RUBRICS_PRELIM : RUBRICS_FINALS;

  return (
    <section className="section-block" id="rubrics">
      <div className="section-container">
        {/* 章節標籤與標題 */}
        <div className="section-title-header">
          <span className="section-overline">03 / RUBRICS</span>
          <h2 className="section-heading">競賽評分標準規準</h2>
          <p className="section-subheading">
            產學權威專家聯席評審 · 權重指標公開透明 · 著重痛點解構與實踐可行性
          </p>
        </div>

        {/* 評分階段切換按鈕 */}
        <div className="rubrics-toggle-row">
          <button
            className={`rubric-toggle-btn ${activeStage === "prelim" ? "active" : ""}`}
            onClick={() => setActiveStage("prelim")}
          >
            <BarChart3 size={18} />
            <span>初賽書面企劃審查評分標準（100%）</span>
          </button>
          <button
            className={`rubric-toggle-btn ${activeStage === "finals" ? "active" : ""}`}
            onClick={() => setActiveStage("finals")}
          >
            <Award size={18} />
            <span>決賽現場簡報與實機展示評分標準（100%）</span>
          </button>
        </div>

        {/* 評分標準卡片容器 */}
        <div className="rubrics-board">
          <div className="rubrics-board-header">
            <div className="board-header-badge">
              {activeStage === "prelim" ? "書面企劃書審審查標準" : "現場 Demo 與答辯審查標準"}
            </div>
            <p className="board-header-tip">
              評審團由法學學者、執業律師與 AI 科技創業者共同組成
            </p>
          </div>

          <div className="rubrics-list">
            {currentRubrics.map((item, idx) => (
              <div key={idx} className="rubric-item">
                <div className="rubric-item-top">
                  <div className="rubric-item-title-group">
                    <CheckCircle size={20} className="text-cyan-400 flex-shrink-0" />
                    <div>
                      <h4 className="rubric-label">{item.label}</h4>
                      <p className="rubric-desc">{item.desc}</p>
                    </div>
                  </div>
                  <div className="rubric-weight-badge" style={{ color: item.color }}>
                    {item.weightText}
                  </div>
                </div>

                {/* 動態進度條 */}
                <div className="rubric-bar-track">
                  <motion.div
                    className="rubric-bar-fill"
                    style={{ backgroundColor: item.color }}
                    initial={{ width: 0 }}
                    whileInView={{ width: `${item.weight}%` }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{
                      duration: 0.85,
                      delay: idx * 0.1,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="rubrics-board-footer">
            <span>
              💡 <b>加分要點提示：</b>附帶可運作之 AWS PartyRock 原型連結或 2 分鐘內 Demo 影片，將作為初審加分關鍵考量。
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
