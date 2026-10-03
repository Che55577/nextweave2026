import "./App.css";
import { useState } from "react";
import heroImg from "./assets/hero.png";

function App() {
  const [activeTab, setActiveTab] = useState("goals");

  return (
    <div className="app">
      {/* Hero 區塊 */}
      <section className="hero">
        <h1 className="title">NextWave：AI法創黑客松</h1>
        <p className="subtitle">
          結合 <span className="ai">AI</span> × <span className="law">法律</span> ×{" "}
          <span className="tech">科技</span> × <span className="creative">創意</span>
          ，打造新世代法律科技解決方案！
        </p>

        {/* 首頁主視覺圖片 */}
        <img
          src={heroImg}
          alt="NextWave 2026 AI法創黑客松"
          className="hero-img"
        />

        <div className="buttons">
          <a href="https://forms.gle/nnMcJcDN1iay39Yx5" target="_blank" rel="noopener noreferrer">
            <button className="btn primary">立即報名</button>
          </a>
          <button
            className="btn outline"
            onClick={() => {
              setActiveTab("rules");
              document.getElementById("content-section")?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            查看簡章
          </button>
          <a href="https://aiscuclub.github.io/NEXTWAVE/" target="_blank" rel="noopener noreferrer">
            <button className="btn outline">2025 歷屆活動網站 ↗</button>
          </a>
        </div>
      </section>

      {/* 分頁標籤 */}
      <div id="content-section"></div>
      <section className="tabs">
        <button
          className={`tab-btn ${activeTab === "goals" ? "active" : ""}`}
          onClick={() => setActiveTab("goals")}
        >
          活動目標
        </button>
        <button
          className={`tab-btn ${activeTab === "timeline" ? "active" : ""}`}
          onClick={() => setActiveTab("timeline")}
        >
          重要時程
        </button>
        <button
          className={`tab-btn ${activeTab === "rules" ? "active" : ""}`}
          onClick={() => setActiveTab("rules")}
        >
          參賽資格
        </button>
        <button
          className={`tab-btn ${activeTab === "rules1" ? "active" : ""}`}
          onClick={() => setActiveTab("rules1")}
        >
          競賽辦法
        </button>
        <button
          className={`tab-btn ${activeTab === "workshop" ? "active" : ""}`}
          onClick={() => setActiveTab("workshop")}
        >
          決賽與工作坊
        </button>
        <button
          className={`tab-btn ${activeTab === "prize" ? "active" : ""}`}
          onClick={() => setActiveTab("prize")}
        >
          獎金名次
        </button>
        <button
          className={`tab-btn ${activeTab === "contact" ? "active" : ""}`}
          onClick={() => setActiveTab("contact")}
        >
          主辦聯絡資訊
        </button>
      </section>

      {/* 分頁內容 */}
      <section className="cards">
        {activeTab === "goals" && (
          <div className="card fade-in">
            <h3>活動目標</h3>
            <p style={{ lineHeight: "2.2", marginTop: "20px" }}>
              1. 鼓勵大專院校學生運用創意思維與 AI 技術，提出提升法律可近性與服務效率的創新解決方案。<br />
              2. 引導學生使用低程式門檻平台（如 AWS PartyRock）進行原型實作。<br />
              3. 促進法學、設計、資訊等領域跨域合作，提升法律科技素養。
            </p>
          </div>
        )}

        {activeTab === "timeline" && (
          <div className="card fade-in">
            <h3>重要時程</h3>
            <div className="timeline-horizontal">
              <div className="timeline-item">
                <div className="timeline-dot" />
                <div className="timeline-content">
                  <span className="date">10/15</span>
                  <p>開放報名</p>
                </div>
              </div>
              <div className="timeline-item">
                <div className="timeline-dot" />
                <div className="timeline-content">
                  <span className="date">11/30</span>
                  <p>初賽繳件截止<br /><small style={{ color: "#94a3b8" }}>23:59 前</small></p>
                </div>
              </div>
              <div className="timeline-item">
                <div className="timeline-dot" />
                <div className="timeline-content">
                  <span className="date">12/2</span>
                  <p>決賽名單公告<br /><small style={{ color: "#94a3b8" }}>寄信通知</small></p>
                </div>
              </div>
              <div className="timeline-item">
                <div className="timeline-dot" />
                <div className="timeline-content">
                  <span className="date">12/5</span>
                  <p>競賽工作坊<br /><small style={{ color: "#94a3b8" }}>19:00–21:00</small></p>
                </div>
              </div>
              <div className="timeline-item">
                <div className="timeline-dot" />
                <div className="timeline-content">
                  <span className="date">12/25</span>
                  <p>決賽繳件截止<br /><small style={{ color: "#94a3b8" }}>23:59 前</small></p>
                </div>
              </div>
              <div className="timeline-item">
                <div className="timeline-dot" />
                <div className="timeline-content">
                  <span className="date">12/27</span>
                  <p>決賽暨頒獎典禮<br /><small style={{ color: "#94a3b8" }}>13:00–21:00</small></p>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === "rules" && (
          <div className="card fade-in">
            <h3>參賽資格與報名流程</h3>
            <div style={{ marginTop: "25px", lineHeight: "2" }}>
              <h4 style={{ color: "cyan", fontSize: "1.4rem" }}>📌 參賽資格</h4>
              <ul style={{ paddingLeft: "25px" }}>
                <li><b>參與對象：</b>中華民國境內大專校院在學學生（大學部及碩、博士生）。</li>
                <li><b>年齡限制：</b>需年滿 18 歲以上。</li>
                <li><b>組隊方式：</b>每隊 2–5 人，可跨校、跨系組隊。</li>
                <li><b>領域限制：</b>不限科系、年級、國籍及專業領域，鼓勵跨域組隊合作。</li>
              </ul>

              <h4 style={{ color: "cyan", fontSize: "1.4rem", marginTop: "30px" }}>📝 報名流程</h4>
              <ul style={{ paddingLeft: "25px" }}>
                <li><b>報名期間：</b>即日起至 2026/10/15 23:59 截止。</li>
                <li><b>報名方式：</b>線上報名表單填寫。</li>
                <li><b>必備文件：</b>
                  <ol type="1" style={{ marginTop: "8px", paddingLeft: "20px" }}>
                    <li>團隊成員學生身份證明文件</li>
                    <li>競賽動機說明</li>
                    <li>初賽企劃書（3–10 頁）</li>
                  </ol>
                </li>
              </ul>
            </div>
          </div>
        )}

        {activeTab === "rules1" && (
          <div className="card fade-in">
            <h3 style={{ textAlign: "center" }}>初賽競賽辦法</h3>
            <hr style={{ width: "20%", margin: "20px auto", border: "1px solid cyan" }} />
            
            <div className="cards-row">
              {/* 區塊一 */}
              <div className="section">
                <h4>一、流程公告</h4>
                <ul>
                  <li>入選名額：進入決賽團隊將寄信通知</li>
                  <li>公告時間：12/2 前寄信通知並公布名單</li>
                </ul>
              </div>

              {/* 區塊二 */}
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
                      <li>使用的 AI 技術</li>
                      <li>法律應用場景</li>
                      <li>預期效益評估</li>
                      <li>技術架構圖或概念示意圖（選填，加分項）</li>
                    </ul>
                  </li>
                  <li>
                    <b>團隊簡介</b>
                    <ul>
                      <li>成員名單與專業背景</li>
                      <li>在學學生證明</li>
                    </ul>
                  </li>
                  <li>
                    <b>補充資料（選填，加分項）</b>
                    <ul>
                      <li>簡短 Pitch 影片（2 分鐘內）</li>
                      <li>原型連結（Figma、Notion、GitHub 等）</li>
                    </ul>
                  </li>
                </ol>
              </div>

              {/* 區塊三 */}
              <div className="section">
                <h4>三、初賽評分標準</h4>
                <div className="criteria-list">
                  <div className="criteria-item">
                    <span className="icon">📑</span>
                    <span className="label">企劃完整性</span>
                    <span className="weight">35%</span>
                  </div>
                  <div className="criteria-item">
                    <span className="icon">💡</span>
                    <span className="label">創意性</span>
                    <span className="weight">30%</span>
                  </div>
                  <div className="criteria-item">
                    <span className="icon">🤖</span>
                    <span className="label">AI 應用整合性</span>
                    <span className="weight">25%</span>
                  </div>
                  <div className="criteria-item">
                    <span className="icon">⚙️</span>
                    <span className="label">技術可執行性</span>
                    <span className="weight">10%</span>
                  </div>
                </div>
              </div>
            </div>

            <h3 style={{ textAlign: "center", margin: "50px 0px -10px 0px" }}>決賽競賽說明</h3>
            <hr style={{ width: "20%", margin: "20px auto", border: "1px solid cyan" }} />

            <div className="cards-row">
              <div className="card fade-in">
                <h4>一、工作坊參與</h4>
                入選決賽團隊須參與 12/5 實體或線上工作坊，獲得：
                <ul>
                  <li>實作技術支援（生成式 AI 工具、無程式工具、API 使用說明）</li>
                  <li>法學應用諮詢（合規性、使用場景設計）</li>
                  <li>跨域創新指導（UX、專案管理、LawTech 案例介紹）</li>
                </ul>
              </div>

              <div className="card fade-in">
                <h4>二、決賽提案</h4>
                <ol type="a" className="nested-list">
                  <li>繳件期限：12/25 23:59 前上傳決賽簡報及展示成品</li>
                  <li>現場展示：12/27 進行簡報提案與實際 Prototype 展示，並於決賽當日公布名次</li>
                </ol>
              </div>

              <div className="card fade-in">
                <h4>三、決賽評分標準</h4>
                <div className="criteria-list">
                  <div className="criteria-item">
                    <span className="icon">📑</span>
                    <span className="label">問題聚焦與社會影響力</span>
                    <span className="weight">35%</span>
                  </div>
                  <div className="criteria-item">
                    <span className="icon">💡</span>
                    <span className="label">簡報表現</span>
                    <span className="weight">20%</span>
                  </div>
                  <div className="criteria-item">
                    <span className="icon">🤖</span>
                    <span className="label">AI 技術應用與創新性</span>
                    <span className="weight">25%</span>
                  </div>
                  <div className="criteria-item">
                    <span className="icon">⚙️</span>
                    <span className="label">未來可行性</span>
                    <span className="weight">20%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === "workshop" && (
          <div className="fade-in">
            {/* 實體工作坊 */}
            <div className="card workshop-card">
              <h3 className="card-title">🎤 決賽前工作坊</h3>
              <p className="card-subtitle">
                透過 <b>講座＋實作</b> 的混合型式，引導參賽者高效完成提案具象化，強化其 Demo 展示力與產品說服力
              </p>

              <div className="info-box">
                <p>🕒 <b>時間：</b>2026/12/5（五）19:00–21:00</p>
                <p>📍 <b>地點：</b>東吳大學 城中校區</p>
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
                    <td>PartyRock 簡介與簡單實作</td>
                    <td>技術講師</td>
                  </tr>
                  <tr>
                    <td>20:00–20:50</td>
                    <td>法學議題相關講座</td>
                    <td>法學專家</td>
                  </tr>
                  <tr>
                    <td>20:50–21:00</td>
                    <td>總結與任務提醒</td>
                    <td>主辦單位</td>
                  </tr>
                </tbody>
              </table>

              <p className="note">📺 * 當天錄影會公告於當周末的決賽行前說明會</p>
            </div>

            {/* 決賽線上說明會 */}
            <div className="card workshop-card" style={{ marginTop: "30px" }}>
              <h3 className="card-title">💻 決賽線上說明會</h3>
              <p className="card-subtitle">
                重要評分規則解析與競賽 Q&A（每隊須派出一名代表簽到，未到者視同棄權）
              </p>

              <div className="info-box">
                <p>🕒 <b>時間：</b>2026/12/5 19:00–21:00</p>
                <p>📍 <b>地點：</b>Google Meet（待決賽組別公告後會郵寄至隊長信箱）</p>
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
                    <td>19:10–19:10</td>
                    <td>主辦與評審老師介紹</td>
                    <td>主辦單位</td>
                  </tr>
                  <tr>
                    <td>19:10–19:40</td>
                    <td>評分規則要點與案例說明</td>
                    <td>主辦單位</td>
                  </tr>
                  <tr>
                    <td>19:40–20:00</td>
                    <td>Q&A</td>
                    <td>全體參與者</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* 決賽暨頒獎典禮 */}
            <div className="card workshop-card" style={{ marginTop: "30px" }}>
              <h3 className="card-title">🏆 決賽暨頒獎典禮</h3>
              <p className="card-subtitle">
                現場 Prototype 展示、專業評審回饋與頒獎榮耀時刻
              </p>

              <div className="info-box">
                <p>🕒 <b>時間：</b>2026/12/27（日）11:30–20:00</p>
                <p>📍 <b>地點：</b>東吳大學城中校區 遊藝廣場（備用場地：城中2123）</p>
                <p>🗺️ <b>地址：</b>100 台北市中正區貴陽街一段 56 號</p>
                <p>⚠️ <b>注意事項：</b>晉級決賽之隊伍將於下午進行簡報，簡報順序現場抽籤。</p>
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
                    <td>參賽者與貴賓報到</td>
                  </tr>
                  <tr>
                    <td>12:00–12:15</td>
                    <td>開場與主辦單位致詞</td>
                  </tr>
                  <tr>
                    <td>12:15–15:00</td>
                    <td>決賽隊伍創意簡報（上半場）</td>
                  </tr>
                  <tr>
                    <td>15:00–17:00</td>
                    <td>決賽隊伍創意簡報（下半場）</td>
                  </tr>
                  <tr>
                    <td>17:00–17:20</td>
                    <td>評審意見回饋與總結</td>
                  </tr>
                  <tr>
                    <td>17:40–18:00</td>
                    <td>頒獎典禮與感言分享</td>
                  </tr>
                  <tr>
                    <td>18:00–20:00</td>
                    <td>合影留念、場地復原</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        )}

        {activeTab === "prize" && (
          <div className="awards fade-in">
            <h3>🏆 獎勵辦法</h3>
            <table className="awards-table">
              <thead>
                <tr>
                  <th>獎項</th>
                  <th>獎金</th>
                  <th>名額 / 備註</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>第一名</td>
                  <td>NT$ 20,000</td>
                  <td>一組</td>
                </tr>
                <tr>
                  <td>第二名</td>
                  <td>NT$ 10,000</td>
                  <td>一組</td>
                </tr>
                <tr>
                  <td>第三名</td>
                  <td>NT$ 5,000</td>
                  <td>一組</td>
                </tr>
                <tr>
                  <td>佳作獎</td>
                  <td>NT$ 2,000</td>
                  <td>3 組</td>
                </tr>
                <tr>
                  <td>最佳簡報獎</td>
                  <td>NT$ 2,000</td>
                  <td>2 組</td>
                </tr>
                <tr>
                  <td>參賽證明</td>
                  <td>-</td>
                  <td>所有入圍決賽者均可獲得</td>
                </tr>
              </tbody>
            </table>
            <div className="total-prize">
              🎉 總獎金：<span>NT$ 50,000</span>
            </div>
          </div>
        )}

        {activeTab === "contact" && (
          <div className="card fade-in" style={{ textAlign: "center", lineHeight: "2.4" }}>
            <h3>主辦與指導資訊</h3>
            <div style={{ marginTop: "20px" }}>
              <p style={{ fontSize: "1.6rem", fontWeight: "bold", color: "cyan" }}>
                東吳大學 人工智慧應用社
              </p>
              <p style={{ fontSize: "1.2rem", color: "#e2e8f0" }}>
                <b>指導單位：</b>東吳大學人本AI研究中心、台灣法學基金會
              </p>
              <p style={{ fontSize: "1.2rem", color: "#94a3b8" }}>
                <b>協辦單位：</b>（持續募集中）
              </p>
              <p style={{ fontSize: "1.3rem", marginTop: "15px" }}>
                📧 <b>聯絡信箱：</b>
                <a href="mailto:ai.scu.club@gmail.com" style={{ color: "cyan", marginLeft: "8px" }}>
                  ai.scu.club@gmail.com
                </a>
              </p>
              <p style={{ fontSize: "1.3rem" }}>
                📞 <b>聯絡電話：</b>0906-831-267
              </p>
              <p style={{ fontSize: "1.1rem", color: "#94a3b8", marginTop: "10px" }}>
                有任何疑問或贊助合作洽詢，歡迎隨時來信詢問！
              </p>
            </div>
          </div>
        )}
      </section>

      {/* Call to Action */}
      <section className="cta">
        <h2>立即加入，共創法律科技新未來！</h2>
        <p>提交你的企劃書，挑戰創意與技術的極限。</p>

        <a href="https://forms.gle/nnMcJcDN1iay39Yx5" target="_blank" rel="noopener noreferrer">
          <button className="btn highlight">前往報名表單</button>
        </a>
      </section>

      {/* Footer */}
      <footer>
        <p>© 2026 東吳大學人工智慧應用社 · AI 法創黑客松</p>
      </footer>
    </div>
  );
}

export default App;
