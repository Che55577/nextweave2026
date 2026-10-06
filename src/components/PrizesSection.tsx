import React from "react";
import { motion } from "framer-motion";
import { Trophy, Medal, Award, Sparkles, Check, Gift } from "lucide-react";
import { PRIZES_DATA, TOTAL_PRIZE } from "../data/eventData";

export const PrizesSection: React.FC = () => {
  const goldPrize = PRIZES_DATA.find((p) => p.id === "gold");
  const silverPrize = PRIZES_DATA.find((p) => p.id === "silver");
  const bronzePrize = PRIZES_DATA.find((p) => p.id === "bronze");
  const otherPrizes = PRIZES_DATA.filter(
    (p) => p.id !== "gold" && p.id !== "silver" && p.id !== "bronze"
  );

  return (
    <section className="section-block" id="prizes">
      <div className="section-container">
        {/* 章節標籤與標題 */}
        <div className="section-title-header">
          <span className="section-overline">04 / PRIZES</span>
          <h2 className="section-heading">賽事獎勵與榮譽榮銜</h2>
          <p className="section-subheading">
            總獎金 {TOTAL_PRIZE} · 官方獎狀證書 · 產學專題報導與創育輔導支援
          </p>
        </div>

        {/* 頂部重點膠囊徽章 */}
        <div className="prizes-badges-row">
          <div className="prize-pill-badge gold">
            <Trophy size={18} />
            <span>總獎金池 {TOTAL_PRIZE}</span>
          </div>
          <div className="prize-pill-badge blue">
            <Sparkles size={18} />
            <span>第一名最高獨得 NT$ 20,000</span>
          </div>
          <div className="prize-pill-badge purple">
            <Award size={18} />
            <span>入圍決賽全員頒發官方證書</span>
          </div>
        </div>

        {/* 階梯式金銀銅頒獎台 (Podium Layout) */}
        <div className="podium-grid">
          {/* 銀獎 (左側) */}
          {silverPrize && (
            <motion.div
              className="podium-card silver"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="podium-rank-tag">
                <Medal size={20} className="text-slate-300" />
                <span>SILVER / 第二名</span>
              </div>
              <h3 className="podium-title">{silverPrize.title}</h3>
              <div className="podium-amount">{silverPrize.amount}</div>
              <span className="podium-quota">獲獎名額：{silverPrize.quota}</span>

              <div className="podium-divider" />
              <ul className="podium-perks">
                {silverPrize.perks.map((perk, idx) => (
                  <li key={idx}>
                    <Check size={16} className="text-slate-300" />
                    <span>{perk}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          )}

          {/* 金獎 (中央突出) */}
          {goldPrize && (
            <motion.div
              className="podium-card gold featured"
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="podium-crown-badge">
                <Trophy size={22} className="text-yellow-400 animate-bounce" />
                <span>CHAMPION / 第一名</span>
              </div>
              <h3 className="podium-title gold-gradient">{goldPrize.title}</h3>
              <div className="podium-amount gold-text">{goldPrize.amount}</div>
              <span className="podium-quota">獲獎名額：{goldPrize.quota}</span>

              <div className="podium-divider gold-div" />
              <ul className="podium-perks">
                {goldPrize.perks.map((perk, idx) => (
                  <li key={idx}>
                    <Check size={18} className="text-yellow-400" />
                    <span className="font-semibold text-slate-100">{perk}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          )}

          {/* 銅獎 (右側) */}
          {bronzePrize && (
            <motion.div
              className="podium-card bronze"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="podium-rank-tag">
                <Medal size={20} className="text-amber-600" />
                <span>BRONZE / 第三名</span>
              </div>
              <h3 className="podium-title">{bronzePrize.title}</h3>
              <div className="podium-amount">{bronzePrize.amount}</div>
              <span className="podium-quota">獲獎名額：{bronzePrize.quota}</span>

              <div className="podium-divider" />
              <ul className="podium-perks">
                {bronzePrize.perks.map((perk, idx) => (
                  <li key={idx}>
                    <Check size={16} className="text-amber-600" />
                    <span>{perk}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
        </div>

        {/* 佳作與特別獎卡片 */}
        <div className="other-prizes-grid">
          {otherPrizes.map((prize, idx) => (
            <div key={idx} className="other-prize-card">
              <div className="other-prize-icon">
                <Gift size={24} className="text-cyan-400" />
              </div>
              <div className="other-prize-body">
                <div className="other-prize-header">
                  <h4 className="other-prize-title">{prize.title}</h4>
                  <span className="other-prize-amount">{prize.amount}</span>
                </div>
                <div className="other-prize-quota">名額：{prize.quota}</div>
                <p className="other-prize-desc">{prize.perks.join(" · ")}</p>
              </div>
            </div>
          ))}

          {/* 參賽證明特別卡 */}
          <div className="other-prize-card certificate">
            <div className="other-prize-icon">
              <Award size={24} className="text-purple-400" />
            </div>
            <div className="other-prize-body">
              <div className="other-prize-header">
                <h4 className="other-prize-title">決賽入圍證明</h4>
                <span className="other-prize-amount cert">官方證書</span>
              </div>
              <div className="other-prize-quota">名額：入圍決賽隊伍全員</div>
              <p className="other-prize-desc">
                凡進入決賽之全體參賽學生，均可獲頒東吳人本AI研究中心官方參賽證明乙紙。
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
