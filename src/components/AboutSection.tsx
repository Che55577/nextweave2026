import React from "react";
import { motion } from "framer-motion";
import { Scale, FileSearch, Bot, Sparkles, CheckCircle2 } from "lucide-react";
import { THEMES_DATA } from "../data/eventData";

const iconMap: Record<string, React.ReactNode> = {
  "theme-access": <Scale size={28} className="theme-icon text-cyan-400" />,
  "theme-review": <FileSearch size={28} className="theme-icon text-blue-400" />,
  "theme-assistant": <Bot size={28} className="theme-icon text-purple-400" />,
  "theme-innovation": <Sparkles size={28} className="theme-icon text-pink-400" />,
};

export const AboutSection: React.FC = () => {
  return (
    <section className="section-block" id="about">
      <div className="section-container">
        {/* 章節標籤與標題 */}
        <div className="section-title-header">
          <span className="section-overline">01 / ABOUT</span>
          <h2 className="section-heading">活動宗旨與競賽主題</h2>
          <p className="section-subheading">
            打破法學與科技的跨域藩籬 · 運用生成式 AI 探索未來法律服務的無限可能
          </p>
        </div>

        {/* 核心訴求雙欄亮點區塊 */}
        <div className="about-narrative-grid">
          <div className="about-narrative-card">
            <h3 className="narrative-card-title">什麼是 NextWave AI 法創黑客松？</h3>
            <p className="narrative-card-text">
              由<b>東吳大學人工智慧應用社</b>發起，在<b>東吳人本AI研究中心</b>與<b>台灣法學基金會</b>的指導下，專為大專院校學生打造的旗艦級法律科技創新競賽。
            </p>
            <p className="narrative-card-text">
              我們聚焦於真實社會痛點，鼓勵跨域學生運用低門檻的生成式 AI 原型工具（如 AWS PartyRock），將法條條理轉化為具溫度的科技解方，讓法律不再遙不可及。
            </p>
          </div>

          <div className="about-goals-card">
            <h3 className="narrative-card-title">三大核心育成目標</h3>
            <ul className="goals-list">
              <li>
                <CheckCircle2 size={20} className="goal-check" />
                <div>
                  <strong>降低法律門檻，提升社會可近性</strong>
                  <span>運用 AI 工具將複雜法律程序白話化、流程化，普及大眾權益保護。</span>
                </div>
              </li>
              <li>
                <CheckCircle2 size={20} className="goal-check" />
                <div>
                  <strong>無痛原型實作，快速驗證產品創意</strong>
                  <span>引導無程式碼背景學生使用 AWS PartyRock，在數日內完成可互動之 Prototype。</span>
                </div>
              </li>
              <li>
                <CheckCircle2 size={20} className="goal-check" />
                <div>
                  <strong>跨領域實務協作，鏈結業界與學界資源</strong>
                  <span>促進法學、設計、資管、商創等跨系所團隊協作，獲取專家評審實務點評。</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* 4 大競賽主題挑戰卡 */}
        <div className="themes-header-wrap">
          <h3 className="themes-subheading">💡 四大推薦競賽挑戰範疇</h3>
          <p className="themes-subdesc">
            參賽隊伍可擇一主題深入挖掘，或融合多項議題提出整合型解決方案
          </p>
        </div>

        <div className="themes-grid">
          {THEMES_DATA.map((theme, idx) => (
            <motion.div
              key={theme.id}
              className="theme-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.5, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="theme-card-top">
                <div className="theme-icon-box">{iconMap[theme.id]}</div>
                <div className="theme-titles">
                  <h4 className="theme-title">{theme.title}</h4>
                  <span className="theme-subtitle">{theme.subtitle}</span>
                </div>
              </div>

              <p className="theme-desc">{theme.desc}</p>

              <div className="theme-tags">
                {theme.tags.map((tag, tIdx) => (
                  <span key={tIdx} className="theme-tag">
                    #{tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
