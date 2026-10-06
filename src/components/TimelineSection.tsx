import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Clock } from "lucide-react";
import { TIMELINE_DATA, REGISTRATION_URL } from "../data/eventData";

export const TimelineSection: React.FC = () => {
  return (
    <section className="section-block" id="timeline">
      <div className="section-container">
        {/* 章節標籤與標題 */}
        <div className="section-title-header">
          <span className="section-overline">07 / TIMELINE</span>
          <h2 className="section-heading">賽事關鍵時程進度</h2>
          <p className="section-subheading">
            關鍵時間點全面掌握 · 從企劃徵件到決賽榮耀的完整旅程
          </p>
        </div>

        {/* 垂直交錯時間軸 */}
        <div className="vertical-timeline-container">
          <div className="timeline-spine-line" />

          {TIMELINE_DATA.map((item, idx) => {
            const isEven = idx % 2 === 0;
            const isDeadline = item.status === "deadline";

            return (
              <motion.div
                key={idx}
                className={`timeline-entry ${isEven ? "left" : "right"} ${isDeadline ? "deadline-entry" : ""}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: idx * 0.08, ease: [0.16, 1, 0.3, 1] }}
              >
                {/* 節點中心圓標 */}
                <div className={`timeline-node-pin ${isDeadline ? "deadline" : ""}`}>
                  <div className="pin-pulse-core" />
                </div>

                {/* 時間卡片主體 */}
                <div className={`timeline-bubble-card ${isDeadline ? "deadline-card" : ""}`}>
                  <div className="bubble-header">
                    <span className="bubble-date-pill">{item.date}</span>
                    <span className="bubble-fulldate">{item.fullDate}</span>
                  </div>
                  <h4 className="bubble-title">{item.title}</h4>
                  <p className="bubble-subtitle">{item.subtitle}</p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* 底部 11/30 衝刺號召 Banner */}
        <div className="timeline-deadline-banner">
          <div className="deadline-banner-left">
            <div className="deadline-icon-circle">
              <Clock size={28} className="text-yellow-400" />
            </div>
            <div>
              <h3 className="deadline-banner-title">11 月 30 日（日）23:59 初賽繳件截止</h3>
              <p className="deadline-banner-desc">
                請預先完成線上報名與成員資料填寫，企劃書可於截止日前隨時補充上傳！
              </p>
            </div>
          </div>
          <a
            href={REGISTRATION_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="deadline-banner-cta"
          >
            <span>立即填寫報名表</span>
            <ArrowRight size={18} />
          </a>
        </div>
      </div>
    </section>
  );
};
