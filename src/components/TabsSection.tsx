import React from "react";
import {
  Target,
  Calendar,
  UserCheck,
  BookOpen,
  Presentation,
  Trophy,
  Mail,
  MapPin,
  Phone,
  Clock,
  Info,
} from "lucide-react";
import {
  TIMELINE_DATA,
  PRIZES_DATA,
  TOTAL_PRIZE,
  EVALUATION_CRITERIA_PRELIM,
  EVALUATION_CRITERIA_FINALS,
} from "../data/eventData";

interface TabsSectionProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export const TabsSection: React.FC<TabsSectionProps> = ({
  activeTab,
  setActiveTab,
}) => {
  const tabsList = [
    { id: "goals", label: "活動目標", icon: <Target size={18} /> },
    { id: "timeline", label: "重要時程", icon: <Calendar size={18} /> },
    { id: "rules", label: "參賽資格", icon: <UserCheck size={18} /> },
    { id: "rules1", label: "競賽辦法", icon: <BookOpen size={18} /> },
    { id: "workshop", label: "決賽與工作坊", icon: <Presentation size={18} /> },
    { id: "prize", label: "獎金名次", icon: <Trophy size={18} /> },
    { id: "contact", label: "主辦聯絡資訊", icon: <Mail size={18} /> },
  ];

  return (
    <div id="content-section" className="tabs-container-wrapper">
      {/* 分頁按鈕列 */}
      <section className="tabs">
        {tabsList.map((tab) => (
          <button
            key={tab.id}
            className={`tab-btn ${activeTab === tab.id ? "active" : ""}`}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.icon}
            <span>{tab.label}</span>
          </button>
        ))}
      </section>

      {/* 分頁卡片內容 */}
      <section className="cards">
        {activeTab === "goals" && (
          <div className="card fade-in">
            <div className="card-header-flex">
              <Target size={28} className="card-header-icon" />
              <h3>活動目標</h3>
            </div>
            <p className="lead-text">
              1. 鼓勵大專院校學生運用創意思維與 AI 技術，提出提升法律可近性與服務效率的創新解決方案。
              <br />
              2. 引導學生使用低程式門檻平台（如 AWS PartyRock）進行原型實作，快速將創意具象化。
              <br />
              3. 促進法學、設計、資訊等領域跨域合作，提升法律科技（LawTech）實務素養。
            </p>
          </div>
        )}

        {activeTab === "timeline" && (
          <div className="card fade-in">
            <div className="card-header-flex">
              <Calendar size={28} className="card-header-icon" />
              <h3>重要時程</h3>
            </div>
            <div className="timeline-horizontal">
              {TIMELINE_DATA.map((item, idx) => (
                <div key={idx} className="timeline-item">
                  <div className="timeline-dot" />
                  <div className="timeline-content">
                    <span className="date">{item.date}</span>
                    <p className="timeline-title">{item.title}</p>
                    {item.subtitle && (
                      <small className="timeline-subtitle">{item.subtitle}</small>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === "rules" && (
          <div className="card fade-in">
            <div className="card-header-flex">
              <UserCheck size={28} className="card-header-icon" />
              <h3>參賽資格與報名流程</h3>
            </div>
            <div className="rules-content">
              <h4 className="rules-subheading">📌 參賽資格</h4>
              <ul className="rules-list">
                <li>
                  <b>參與對象：</b>中華民國境內大專校院在學學生（大學部及碩、博士生）。
                </li>
                <li>
                  <b>年齡限制：</b>需年滿 18 歲以上。
                </li>
                <li>
                  <b>組隊方式：</b>每隊 2–5 人，可跨校、跨系組隊。
                </li>
                <li>
                  <b>領域限制：</b>不限科系、年級、國籍及專業領域，鼓勵法律與科技領域跨域合作。
                </li>
              </ul>

              <h4 className="rules-subheading" style={{ marginTop: "32px" }}>
                📝 報名流程
              </h4>
              <ul className="rules-list">
                <li>
                  <b>報名期間：</b>2026/10/15（三）開放，至 2026/11/30（日）23:59 截止。
                </li>
                <li>
                  <b>報名方式：</b>線上 Google 表單填寫提交。
                </li>
                <li>
                  <b>必備文件：</b>
                  <ol type="1" className="nested-numbered-list">
                    <li>團隊成員學生身份證明文件</li>
                    <li>競賽動機說明</li>
                    <li>初賽企劃書（3–10 頁，PDF 格式）</li>
                  </ol>
                </li>
              </ul>
            </div>
          </div>
        )}

        {activeTab === "rules1" && (
          <div className="card fade-in">
            <div className="card-header-flex center">
              <BookOpen size={28} className="card-header-icon" />
              <h3 style={{ margin: 0 }}>初賽競賽辦法</h3>
            </div>
            <div className="cyan-divider" />

            <div className="cards-row">
              <div className="section">
                <h4>一、流程公告</h4>
                <ul>
                  <li><b>入選名額：</b>進入決賽團隊將寄信通知隊長。</li>
                  <li><b>公告時間：</b>12/2 前寄信通知並於官方渠道公布入選名單。</li>
                </ul>
              </div>

              <div className="section">
                <h4>二、初賽企劃書內容</h4>
                <ol type="a" className="nested-list">
                  <li>
                    <b>問題定義與背景分析（約 300 字）</b>
                    <ul>
                      <li>法律議題描述</li>
                      <li>AI 技術關聯性與挑戰分析</li>
                    </ul>
                  </li>
                  <li>
                    <b>AI × 法學解決方案構想書（1–3 頁）</b>
                    <ul>
                      <li>創新亮點說明</li>
                      <li>使用的 AI 技術與模型</li>
                      <li>法律應用場景</li>
                      <li>預期效益評估</li>
                      <li>技術架構圖或概念示意圖（選填，加分項）</li>
                    </ul>
                  </li>
                  <li>
                    <b>團隊簡介</b>
                    <ul>
                      <li>成員名單與專業背景分工</li>
                      <li>在學學生證明文件</li>
                    </ul>
                  </li>
                  <li>
                    <b>補充資料（選填，加分項）</b>
                    <ul>
                      <li>簡短 Pitch 影片（2 分鐘內）</li>
                      <li>原型展示連結（Figma、PartyRock、GitHub 等）</li>
                    </ul>
                  </li>
                </ol>
              </div>

              <div className="section">
                <h4>三、初賽評分標準</h4>
                <div className="criteria-list">
                  {EVALUATION_CRITERIA_PRELIM.map((item, idx) => (
                    <div key={idx} className="criteria-item">
                      <span className="icon">{item.icon}</span>
                      <span className="label">{item.label}</span>
                      <span className="weight">{item.weight}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="card-header-flex center" style={{ marginTop: "55px" }}>
              <Presentation size={28} className="card-header-icon" />
              <h3 style={{ margin: 0 }}>決賽競賽說明</h3>
            </div>
            <div className="cyan-divider" />

            <div className="cards-row">
              <div className="card nested-card">
                <h4>一、工作坊參與</h4>
                <p>入選決賽團隊須參與 12/5 實體或線上工作坊，獲得：</p>
                <ul>
                  <li>實作技術支援（生成式 AI 工具、AWS PartyRock、API 使用說明）</li>
                  <li>法學應用諮詢（合規性、法學場景設計）</li>
                  <li>跨域創新指導（UX、專案管理、LawTech 案例解析）</li>
                </ul>
              </div>

              <div className="card nested-card">
                <h4>二、決賽提案</h4>
                <ol type="a" className="nested-list">
                  <li>
                    <b>繳件期限：</b>12/25 23:59 前上傳決賽簡報及展示成品。
                  </li>
                  <li>
                    <b>現場展示：</b>12/27 進行現場 Pitch 與 Prototype 實機展示，並於當日評定名次與頒獎。
                  </li>
                </ol>
              </div>

              <div className="card nested-card">
                <h4>三、決賽評分標準</h4>
                <div className="criteria-list">
                  {EVALUATION_CRITERIA_FINALS.map((item, idx) => (
                    <div key={idx} className="criteria-item">
                      <span className="icon">{item.icon}</span>
                      <span className="label">{item.label}</span>
                      <span className="weight">{item.weight}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === "workshop" && (
          <div className="fade-in">
            {/* 實體工作坊 */}
            <div className="card workshop-card">
              <h3 className="card-title">🎤 決賽前實體工作坊</h3>
              <p className="card-subtitle">
                透過 <b>講座＋實作</b> 的混合型式，引導參賽者高效完成提案具象化，強化 Demo 展示力與產品說服力
              </p>

              <div className="info-box">
                <p>
                  <Clock size={16} className="inline-icon" /> <b>時間：</b>
                  2026/12/05（五）19:00–21:00
                </p>
                <p>
                  <MapPin size={16} className="inline-icon" /> <b>地點：</b>
                  東吳大學 城中校區
                </p>
              </div>

              <h4 className="section-title">📌 活動流程</h4>
              <table className="flow-table">
                <thead>
                  <tr>
                    <th>時間</th>
                    <th>活動內容</th>
                    <th>負責單位</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>18:50–19:00</td>
                    <td>開放入場、技術測試</td>
                    <td>工作人員協助</td>
                  </tr>
                  <tr>
                    <td>19:00–19:10</td>
                    <td>開場與說明：工作坊目的與決賽要求</td>
                    <td>主辦單位代表</td>
                  </tr>
                  <tr>
                    <td>19:10–20:00</td>
                    <td>AWS PartyRock 簡介與原型快速實作</td>
                    <td>技術講師</td>
                  </tr>
                  <tr>
                    <td>20:00–20:50</td>
                    <td>法學科技議題與場景應用講座</td>
                    <td>法學專家</td>
                  </tr>
                  <tr>
                    <td>20:50–21:00</td>
                    <td>總結與任務提醒</td>
                    <td>主辦單位</td>
                  </tr>
                </tbody>
              </table>

              <p className="note">📺 * 工作坊錄影將提供予決賽入選團隊非同步回放學習</p>
            </div>

            {/* 決賽線上說明會 */}
            <div className="card workshop-card" style={{ marginTop: "30px" }}>
              <h3 className="card-title">💻 決賽行前線上說明會</h3>
              <p className="card-subtitle">
                重要評分規則解析與競賽 Q&A（入圍各隊須派至少一名代表出席簽到）
              </p>

              <div className="info-box">
                <p>
                  <Clock size={16} className="inline-icon" /> <b>時間：</b>
                  2026/12/05（五）19:00–21:00（與工作坊同步連線）
                </p>
                <p>
                  <MapPin size={16} className="inline-icon" /> <b>地點：</b>
                  Google Meet（入圍名單公告後寄發會議連結至隊長信箱）
                </p>
              </div>

              <h4 className="section-title">📌 說明會議程</h4>
              <table className="flow-table">
                <thead>
                  <tr>
                    <th>時間</th>
                    <th>活動內容</th>
                    <th>負責單位</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>19:00–19:10</td>
                    <td>開放入場、簽到</td>
                    <td>主辦單位代表</td>
                  </tr>
                  <tr>
                    <td>19:10–19:40</td>
                    <td>評分規則要點與評審案例說明</td>
                    <td>主辦單位</td>
                  </tr>
                  <tr>
                    <td>19:40–20:00</td>
                    <td>現場 Q&A 問答</td>
                    <td>全體參與者</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* 決賽暨頒獎典禮 */}
            <div className="card workshop-card" style={{ marginTop: "30px" }}>
              <h3 className="card-title">🏆 決賽暨頒獎典禮</h3>
              <p className="card-subtitle">
                現場 Prototype 展示、專業評審回饋與榮耀頒獎時刻
              </p>

              <div className="info-box">
                <p>
                  <Clock size={16} className="inline-icon" /> <b>時間：</b>
                  2026/12/27（日）11:30–20:00
                </p>
                <p>
                  <MapPin size={16} className="inline-icon" /> <b>地點：</b>
                  東吳大學城中校區 遊藝廣場（備用場地：城中2123）
                </p>
                <p>
                  <MapPin size={16} className="inline-icon" /> <b>地址：</b>
                  100 台北市中正區貴陽街一段 56 號
                </p>
                <p className="alert-note">
                  <Info size={16} className="inline-icon" />{" "}
                  晉級決賽之隊伍將於下午進行現場簡報與展示，簡報順序現場抽籤。
                </p>
              </div>

              <h4 className="section-title">📌 決賽流程（暫定）</h4>
              <table className="flow-table">
                <thead>
                  <tr>
                    <th>時間</th>
                    <th>活動內容</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>11:30–12:00</td>
                    <td>參賽者與貴賓報到、測試設備</td>
                  </tr>
                  <tr>
                    <td>12:00–12:15</td>
                    <td>開場與主辦單位致詞</td>
                  </tr>
                  <tr>
                    <td>12:15–15:00</td>
                    <td>決賽隊伍創意簡報與展示（上半場）</td>
                  </tr>
                  <tr>
                    <td>15:00–17:00</td>
                    <td>決賽隊伍創意簡報與展示（下半場）</td>
                  </tr>
                  <tr>
                    <td>17:00–17:20</td>
                    <td>評審團閉門評選與講評回饋</td>
                  </tr>
                  <tr>
                    <td>17:40–18:00</td>
                    <td>頒獎典禮與得獎感言分享</td>
                  </tr>
                  <tr>
                    <td>18:00–20:00</td>
                    <td>交流合影、場地復原</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        )}

        {activeTab === "prize" && (
          <div className="awards fade-in">
            <div className="card-header-flex center">
              <Trophy size={32} className="card-header-icon gold" />
              <h3>🏆 獎勵辦法</h3>
            </div>
            <table className="awards-table">
              <thead>
                <tr>
                  <th>獎項</th>
                  <th>獎金</th>
                  <th>名額 / 備註</th>
                </tr>
              </thead>
              <tbody>
                {PRIZES_DATA.map((prize, idx) => (
                  <tr key={idx}>
                    <td className="prize-rank">{prize.rank}</td>
                    <td className="prize-amount">{prize.amount}</td>
                    <td>{prize.quota}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="total-prize">
              🎉 總獎金：<span>{TOTAL_PRIZE}</span>
            </div>
          </div>
        )}

        {activeTab === "contact" && (
          <div className="card fade-in contact-card">
            <div className="card-header-flex center">
              <Mail size={30} className="card-header-icon" />
              <h3>主辦與指導資訊</h3>
            </div>
            <div className="contact-details">
              <p className="organizer-title">東吳大學 人工智慧應用社</p>
              <p className="organizer-guidance">
                <b>指導單位：</b>東吳大學人本AI研究中心、台灣法學基金會
              </p>
              <p className="organizer-partner">
                <b>協辦單位：</b>（持續募集中）
              </p>

              <div className="contact-links">
                <p>
                  <Mail size={18} className="inline-icon" /> <b>聯絡信箱：</b>
                  <a href="mailto:ai.scu.club@gmail.com">ai.scu.club@gmail.com</a>
                </p>
                <p>
                  <Phone size={18} className="inline-icon" /> <b>聯絡電話：</b>
                  <a href="tel:0906831267">0906-831-267</a>
                </p>
              </div>

              <p className="contact-note">
                有任何疑問或贊助合作洽詢，歡迎隨時來信聯繫！
              </p>
            </div>
          </div>
        )}
      </section>
    </div>
  );
};
