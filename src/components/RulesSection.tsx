import React from "react";
import { motion } from "framer-motion";
import { Users, FileCheck, Layers, Award } from "lucide-react";

export const RulesSection: React.FC = () => {
  return (
    <section className="section-block" id="rules">
      <div className="section-container">
        {/* 章節標籤與標題 */}
        <div className="section-title-header">
          <span className="section-overline">02 / RULES</span>
          <h2 className="section-heading">參賽資格與雙階段賽制</h2>
          <p className="section-subheading">
            不限科系學校 · 鼓勵多元跨域組隊 · 從初賽企劃書審到決賽現場 Pitch
          </p>
        </div>

        {/* 參賽對象 vs 繳件文件 雙欄對比 */}
        <div className="rules-two-col-grid">
          <motion.div
            className="rules-spec-card"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="spec-card-header">
              <Users size={24} className="text-cyan-400" />
              <h3>參賽資格與組隊規範</h3>
            </div>
            <ul className="spec-item-list">
              <li>
                <div className="spec-dot" />
                <div>
                  <strong>參與對象</strong>
                  <span>中華民國境內大專校院在學學生（含大學部、碩士生及博士生）。</span>
                </div>
              </li>
              <li>
                <div className="spec-dot" />
                <div>
                  <strong>年齡與身份</strong>
                  <span>年滿 18 歲以上，具備有效中華民國大專院校學生身份。</span>
                </div>
              </li>
              <li>
                <div className="spec-dot" />
                <div>
                  <strong>組隊規模</strong>
                  <span>每隊 <b>2 至 5 人</b>，可自由跨校、跨系所、跨年級組隊。</span>
                </div>
              </li>
              <li>
                <div className="spec-dot" />
                <div>
                  <strong>科系不限</strong>
                  <span>不限專業背景，強烈鼓勵法學、設計、資訊、商管多元背景跨域合作。</span>
                </div>
              </li>
            </ul>
          </motion.div>

          <motion.div
            className="rules-spec-card"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="spec-card-header">
              <FileCheck size={24} className="text-blue-400" />
              <h3>初賽必備繳件規格</h3>
            </div>
            <ul className="spec-item-list">
              <li>
                <div className="spec-dot" />
                <div>
                  <strong>報名方式</strong>
                  <span>於報名截止（11/30 23:59）前完成線上 Google 報名表單填寫。</span>
                </div>
              </li>
              <li>
                <div className="spec-dot" />
                <div>
                  <strong>身份證明文件</strong>
                  <span>全員之學生證影本或在學證明文件（電子檔）。</span>
                </div>
              </li>
              <li>
                <div className="spec-dot" />
                <div>
                  <strong>初賽企劃書（PDF）</strong>
                  <span><b>3 至 10 頁</b>。包含問題定義、AI×法學解方構想與預期社會效益。</span>
                </div>
              </li>
              <li>
                <div className="spec-dot" />
                <div>
                  <strong>加分參考資料（選填）</strong>
                  <span>2 分鐘內 Pitch 影片或 Prototype 概念原型（Figma / PartyRock 連結）。</span>
                </div>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* 雙階段競賽流程推進卡 */}
        <div className="phases-container">
          <div className="phase-card">
            <div className="phase-badge">PHASE 01 / 初賽階段</div>
            <div className="phase-body">
              <div className="phase-icon-col">
                <Layers size={32} className="text-cyan-400" />
              </div>
              <div className="phase-content-col">
                <h4 className="phase-title">書面審查 · 點子淬鍊</h4>
                <p className="phase-desc">
                  團隊針對真實法律科技議題提出創新企劃書。評審團由法學專家與 AI 業界顧問組成，依企劃完整性、創意性、AI 技術契合度進行閉門盲審，遴選晉級決賽名單。
                </p>
                <div className="phase-dates">
                  <span>📅 報名收件：2026/10/15 – 11/30 23:59</span>
                  <span>📢 名單公告：2026/12/02 寄信通知隊長</span>
                </div>
              </div>
            </div>
          </div>

          <div className="phase-card">
            <div className="phase-badge highlight">PHASE 02 / 決賽階段</div>
            <div className="phase-body">
              <div className="phase-icon-col">
                <Award size={32} className="text-purple-400" />
              </div>
              <div className="phase-content-col">
                <h4 className="phase-title">增能輔導 · 現場 Pitch 與實機展示</h4>
                <p className="phase-desc">
                  入圍團隊參與 12/5 增能工作坊接受業師一對一輔導；於 12/25 繳交最終成品，並於 12/27 在東吳大學城中校區遊藝廣場進行簡報 Pitch 與實機 Demo 展示，角逐各項殊榮！
                </p>
                <div className="phase-dates">
                  <span>🎤 增能工作坊：2026/12/05 19:00–21:00</span>
                  <span>🏆 決賽暨頒獎：2026/12/27 11:30–20:00</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
