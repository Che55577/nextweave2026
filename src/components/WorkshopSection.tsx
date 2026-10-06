import React, { useState } from "react";
import { Clock, MapPin, Sparkles, Video, Users, CheckCircle, Calendar } from "lucide-react";
import { WORKSHOP_FLOW, FINALS_FLOW } from "../data/eventData";

export const WorkshopSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"workshop" | "finals">("workshop");

  return (
    <section className="section-block" id="workshop">
      <div className="section-container">
        {/* 章節標籤與標題 */}
        <div className="section-title-header">
          <span className="section-overline">06 / WORKSHOP</span>
          <h2 className="section-heading">決賽增能工作坊與現場議程</h2>
          <p className="section-subheading">
            產學顧問實戰指導 · AWS PartyRock 零門檻實作 · 決賽現場高規格 Pitch 展示
          </p>
        </div>

        {/* 切換標籤 */}
        <div className="workshop-toggle-tabs">
          <button
            className={`ws-tab-btn ${activeTab === "workshop" ? "active" : ""}`}
            onClick={() => setActiveTab("workshop")}
          >
            <Calendar size={18} />
            <span>12/05 增能工作坊與線上說明會</span>
          </button>
          <button
            className={`ws-tab-btn ${activeTab === "finals" ? "active" : ""}`}
            onClick={() => setActiveTab("finals")}
          >
            <Users size={18} />
            <span>12/27 決賽現場 Pitch 暨頒獎典禮</span>
          </button>
        </div>

        {/* 內容區塊 */}
        {activeTab === "workshop" ? (
          <div className="workshop-detail-card fade-in">
            {/* 頂部資訊看板 */}
            <div className="ws-highlight-box">
              <div className="ws-meta-grid">
                <div className="ws-meta-item">
                  <Clock size={20} className="text-cyan-400" />
                  <div>
                    <strong>活動時間</strong>
                    <span>2026/12/05（五）19:00 – 21:00</span>
                  </div>
                </div>
                <div className="ws-meta-item">
                  <MapPin size={20} className="text-blue-400" />
                  <div>
                    <strong>實體地點</strong>
                    <span>東吳大學 城中校區（中正區貴陽街一段 56 號）</span>
                  </div>
                </div>
                <div className="ws-meta-item">
                  <Video size={20} className="text-purple-400" />
                  <div>
                    <strong>線上同步</strong>
                    <span>Google Meet 直播（連結將隨決賽入選通知寄出）</span>
                  </div>
                </div>
              </div>

              {/* 加分機制 Callout */}
              <div className="ws-bonus-banner">
                <Sparkles size={20} className="text-yellow-400 flex-shrink-0 animate-pulse" />
                <div>
                  <strong>🌟 決賽加分機制：</strong>
                  <span>
                    晉級決賽之團隊參與本次工作坊，將獲得決賽原型實作加分！現場安排技術講師與法學顧問一對一答疑。
                  </span>
                </div>
              </div>
            </div>

            {/* 流程步進清單 */}
            <h3 className="ws-flow-title">📌 工作坊活動議程（19:00 – 21:00）</h3>
            <div className="ws-flow-stepper">
              {WORKSHOP_FLOW.map((item, idx) => (
                <div key={idx} className="ws-step-item">
                  <div className="ws-step-time">{item.time}</div>
                  <div className="ws-step-marker">
                    <div className="ws-step-dot" />
                    {idx < WORKSHOP_FLOW.length - 1 && <div className="ws-step-line" />}
                  </div>
                  <div className="ws-step-content">
                    <h4 className="ws-step-name">{item.event}</h4>
                    <span className="ws-step-host">主講 / 負責：{item.host}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="workshop-detail-card fade-in">
            {/* 頂部決賽看板 */}
            <div className="ws-highlight-box finals">
              <div className="ws-meta-grid">
                <div className="ws-meta-item">
                  <Clock size={20} className="text-amber-400" />
                  <div>
                    <strong>活動時間</strong>
                    <span>2026/12/27（六）11:30 – 20:00</span>
                  </div>
                </div>
                <div className="ws-meta-item">
                  <MapPin size={20} className="text-amber-400" />
                  <div>
                    <strong>決賽地點</strong>
                    <span>東吳大學城中校區 遊藝廣場（備用場地：城中2123）</span>
                  </div>
                </div>
                <div className="ws-meta-item">
                  <CheckCircle size={20} className="text-green-400" />
                  <div>
                    <strong>展示方式</strong>
                    <span>現場簡報 Pitch（7 分鐘簡報 + 5 分鐘評審提問與 Demo）</span>
                  </div>
                </div>
              </div>

              <div className="ws-bonus-banner finals">
                <Sparkles size={20} className="text-amber-400 flex-shrink-0" />
                <div>
                  <strong>注意事項：</strong>
                  <span>
                    簡報順序將於當日報到時現場公開抽籤。展示請自備筆記型電腦與相關展示設備。
                  </span>
                </div>
              </div>
            </div>

            {/* 決賽當日流程步進 */}
            <h3 className="ws-flow-title">🏆 決賽當日流程安排</h3>
            <div className="ws-flow-stepper">
              {FINALS_FLOW.map((item, idx) => (
                <div key={idx} className="ws-step-item">
                  <div className="ws-step-time">{item.time}</div>
                  <div className="ws-step-marker">
                    <div className="ws-step-dot gold" />
                    {idx < FINALS_FLOW.length - 1 && <div className="ws-step-line gold" />}
                  </div>
                  <div className="ws-step-content">
                    <h4 className="ws-step-name">{item.event}</h4>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
