import "./App.css";
import { useState, useEffect } from "react";

function useIsMobile() {
  const [isMobile, setIsMobile] = useState(
    typeof window !== "undefined" ? window.innerWidth <= 768 : false
  );

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return isMobile;
}

const GoalsSection = () => (
  <div id="goals" className="card fade-in">
    <h3>活動目標</h3>
    <p style={{ marginTop: "30px" }}>
      1. 鼓勵大專院校學生運用創意思維與 AI 技術，提出提升法律可近性與服務效率的創新解決方案。
    </p>
    <p>
      2. 促進法學、設計、資訊等領域跨域合作，提升法律科技素養。
    </p>
    <p>
      3. 培育具備跨界整合思維的創客人才，落實跨校跨域共創精神。
    </p>
  </div>
);

const TimelineSection = () => (
  <div id="timeline" className="card fade-in">
    <h3 style={{ textAlign: "center", fontSize: "2rem", marginBottom: "13px" }}>重要時程</h3>
    <hr style={{ width: "15%", margin: "0px auto", border: "1px solid gray" }} />
    <div className="timeline-horizontal">
      {[
        { date: "10/15", time: "", text: "開放報名" },
        { date: "11/30", time: "23:59", text: "報名與初賽檔案繳交截止" },
        { date: "12/2", time: "", text: "決賽入選名單公告（寄信通知）" },
        { date: "12/5", time: "19:00", text: "競賽工作坊" },
        { date: "12/25", time: "23:59", text: "決賽資料繳件截止" },
        { date: "12/27", time: "11:30", text: "決賽暨頒獎典禮" },
      ].map((item, idx) => (
        <div className="timeline-item" key={idx}>
          <div className="timeline-dot" />
          <div className="timeline-content">
            <div className="date-block">
              <div className="day">{item.date}</div>
              {item.time && <div className="time">{item.time}</div>}
            </div>
            <p className="event">{item.text}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
);

const RulesSection = () => (
  <div id="rules" className="card fade-in">
    <h3>參賽資格</h3>
    <p style={{ marginTop: "30px" }}>
      1. 參與對象：中華民國境內大專校院在學學生（大學及碩、博士生）
    </p>
    <p>2. 年齡限制：需滿 18 歲以上</p>
    <p>3. 組隊方式：每隊 2–5 人，可跨校、跨系組隊</p>
    <p>4. 領域限制：不限科系、年級、國籍及專業領域</p>
    <div style={{ marginTop: "30px", textAlign: "center" }}>
      <a href="./NextWave_AI法創黑客松_簡章.pdf" target="_blank" rel="noopener noreferrer">
        <button className="btn outline">下載官方競賽簡章 (PDF)</button>
      </a>
    </div>
  </div>
);

const Rules1Section = () => (
  <div id="rules1" className="card fade-in">
    <h3 style={{ textAlign: "center" }}>初賽審核</h3>
    <hr style={{ width: "20%", margin: "20px auto", border: "1px solid cyan" }} />
    <div className="cards-row">
      <div className="section">
        <h4>一、流程</h4>
        <ul>
          <li>請先線上報名競賽再繳交初賽申請書</li>
          <li>申請書截止日期為 11/30 23:59，檔案規範如最下面開啟文件</li>
          <li>主辦收到報名資料後即會回信通知</li>
          <li>決賽公告時間：12/2 前寄信通知並公布名單</li>
        </ul>
        <p style={{ marginTop: "15px" }}>
          申請書格式與規範：
          <a
            href="./NextWave_AI法創黑客松_簡章.pdf"
            target="_blank"
            rel="noopener noreferrer"
            style={{ marginLeft: "10px", fontSize: "1.4rem", color: "yellow", textDecoration: "none" }}
          >
            點擊我開啟文件
          </a>
        </p>
      </div>

      <div className="section">
        <h4>二、初審企劃書內容</h4>
        <ol type="1" className="nested-list" style={{ paddingLeft: "20px" }}>
          <li style={{ marginBottom: "8px" }}>
            問題定義與背景分析（約 300 字）
            <ul>
              <li>法律議題描述</li>
              <li>AI 技術關聯性與挑戰分析</li>
            </ul>
          </li>
          <li style={{ marginBottom: "8px" }}>
            AI × 法學解決方案構想書（3–10 頁）
            <ul>
              <li>創新亮點說明</li>
              <li>使用的 AI 技術</li>
              <li>法律應用場景</li>
              <li>預期效益評估</li>
              <li>技術架構圖或概念示意圖（選填，加分項）</li>
            </ul>
          </li>
          <li style={{ marginBottom: "8px" }}>
            團隊簡介
            <ul>
              <li>成員名單與專業背景</li>
              <li>在學學生證明</li>
            </ul>
          </li>
          <li>
            補充資料（選填，加分項）
            <ul>
              <li>簡短 Pitch 影片（2 分鐘內）</li>
              <li>原型連結（Figma、Notion、GitHub 等）</li>
            </ul>
          </li>
        </ol>
      </div>

      <div className="section">
        <h4>三、評分標準</h4>
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

    <h3 style={{ textAlign: "center", margin: "50px 0px -10px 0px" }}>決賽說明</h3>
    <hr style={{ width: "20%", margin: "20px auto", border: "1px solid cyan" }} />

    <div className="cards-row">
      <div className="card fade-in">
        <h4>一、說明會與工作坊參與</h4>
        <p style={{ marginBottom: "10px" }}>
          入選決賽團隊須參與 12/5 實體或線上工作坊（每隊須至少一人簽到出席）：
        </p>
        <ul>
          <li>實作技術支援（生成式 AI 工具、無程式工具、API 使用說明）</li>
          <li>法學應用諮詢（合規性、使用場景設計）</li>
          <li>跨域創新指導（UX、專案管理、LawTech 案例介紹）</li>
        </ul>
        <h4 style={{ marginTop: "20px" }}>二、決賽提案</h4>
        <ol type="1" className="nested-list" style={{ paddingLeft: "20px" }}>
          <li style={{ marginBottom: "6px" }}>繳件期限：12/25 23:59 前上傳決賽簡報及展示成品</li>
          <li>現場展示：12/27 進行簡報提案與實際 Prototype 展示，並於決賽當日公布名次</li>
        </ol>
      </div>

      <div className="card fade-in">
        <h4>三、評分標準</h4>
        <div className="criteria-list">
          <div className="criteria-item">
            <span className="icon">📑</span>
            <span className="label">問題聚焦與社會影響力</span>
            <span className="weight">35%</span>
          </div>
          <div className="criteria-item">
            <span className="icon">🤖</span>
            <span className="label">AI 技術應用與創新性</span>
            <span className="weight">25%</span>
          </div>
          <div className="criteria-item">
            <span className="icon">💡</span>
            <span className="label">簡報表現</span>
            <span className="weight">20%</span>
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
);

const WorkshopSection = () => (
  <div id="workshop" className="card workshop-card fade-in" style={{ width: "100%" }}>
    <h3 className="card-title">🎤 決賽前工作坊</h3>
    <p className="card-subtitle">
      透過 <b>講座＋實作</b> 的混合型式，引導參賽者高效完成提案具象化，強化其 Demo 展示力與產品說服力
    </p>

    <div className="info-box">
      <p>🕒 <b>時間：</b>2026/12/05 (五) 19:00–21:00</p>
      <p>📍 <b>地點：</b>東吳大學 城中校區（遊藝廣場 / Google Meet 線上同步）</p>
      <p>⚠️ <b>注意：</b>每隊須至少派員一人完成簽到，未到視同棄權</p>
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
          <td>生成式 AI 與開發工具實作講座</td>
          <td>技術講師</td>
        </tr>
        <tr>
          <td>20:00–20:50</td>
          <td>法學議題相關講座與跨域指導</td>
          <td>法學專家</td>
        </tr>
        <tr>
          <td>20:50–21:00</td>
          <td>總結與任務提醒</td>
          <td>主辦單位</td>
        </tr>
      </tbody>
    </table>

    <p className="note">📺 * 當天錄影會公告於決賽行前說明，供團隊複習</p>
  </div>
);

const PrizeSection = () => (
  <div id="prize" className="awards fade-in">
    <h3>🏆 獎金名次</h3>
    <table className="awards-table">
      <thead>
        <tr>
          <th>獎項</th>
          <th>獎金</th>
          <th>名額</th>
          <th>備註</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>第一名</td>
          <td>NT$ 20,000</td>
          <td>1 組</td>
          <td>獎狀每人乙紙、專題報導與推薦</td>
        </tr>
        <tr>
          <td>第二名</td>
          <td>NT$ 10,000</td>
          <td>1 組</td>
          <td>獎狀每人乙紙</td>
        </tr>
        <tr>
          <td>第三名</td>
          <td>NT$ 5,000</td>
          <td>1 組</td>
          <td>獎狀每人乙紙</td>
        </tr>
        <tr>
          <td>佳作獎</td>
          <td>NT$ 3,000</td>
          <td>3 組</td>
          <td>佳作獎狀每人乙紙</td>
        </tr>
        <tr>
          <td>最佳簡報獎</td>
          <td>NT$ 2,000</td>
          <td>3 組</td>
          <td>獎狀每人乙紙</td>
        </tr>
        <tr>
          <td>參賽證明</td>
          <td>-</td>
          <td>全員</td>
          <td>所有入圍決賽者均可獲得官方證明</td>
        </tr>
      </tbody>
    </table>
    <div className="total-prize">
      🎉 總獎金：<span>NT$ 50,000</span>
    </div>
  </div>
);

const notifications = [
  { date: "2026/10/15", text: "NextWave：AI法創黑客松正式開放線上報名！" },
  { date: "2026/10/15", text: "官方競賽簡章 PDF 已開放下載，請參賽隊伍詳閱規範。" },
  { date: "2026/10/15", text: "初賽企劃書繳件截止時間為 11/30 (日) 23:59，逾期不予受理。" },
  { date: "2026/10/15", text: "若無指導老師，提案書之指導老師欄位可不填。" },
  { date: "2026/10/15", text: "決賽名單將於 12/2 (二) 公告並寄信通知入選團隊。" },
  { date: "2026/10/15", text: "決賽增能工作坊將於 12/5 (五) 19:00 舉行，每隊須派代表簽到。" },
];

const NotificationSection = () => (
  <div className="card fade-in" id="notification">
    <h3 style={{ textAlign: "center", fontSize: "2rem", marginBottom: "40px" }}>📢 重要公告</h3>
    {notifications.map((item, idx) => (
      <div
        className="card fade-in"
        key={idx}
        style={{
          marginBottom: "15px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "10px 15px",
          border: idx === 0 ? "2px solid #daa520" : "",
          borderRadius: "6px",
        }}
      >
        <span style={{ fontSize: "1.2rem", fontWeight: "bold", marginRight: "10px" }}>{idx + 1}.</span>
        <p style={{ flex: 1, fontSize: "1.3rem", margin: "0 10px" }}>{item.text}</p>
        <span style={{ fontSize: "1rem", color: "#888" }}>{item.date}</span>
      </div>
    ))}
  </div>
);

const OrgSection = () => (
  <div id="org" className="card fade-in" style={{ backgroundColor: "rgba(0,0,0,0.4)", padding: "20px" }}>
    <h3 style={{ textAlign: "center", fontSize: "2rem", marginBottom: "40px" }}>合作單位</h3>
    <div id="org-logos">
      <img
        src="./image/TLF_Logo1.png"
        alt="台灣法學基金會"
        style={{ maxWidth: "100%", width: "400px", height: "auto", objectFit: "contain" }}
      />
      <img
        src="./image/HC_Logo1.png"
        alt="東吳大學人本AI研究中心"
        style={{ maxWidth: "100%", width: "400px", height: "auto", objectFit: "contain" }}
      />
      <img
        src="./image/AISCU_Logo1.png"
        alt="東吳大學人工智慧應用社"
        style={{ maxWidth: "100%", width: "400px", height: "auto", objectFit: "contain" }}
      />
    </div>
  </div>
);

const ContactSection = () => (
  <div id="contact" className="card fade-in" style={{ padding: "20px", textAlign: "center", maxWidth: "100%" }}>
    <p style={{ fontSize: "2rem", margin: "10px 0" }}>東吳大學 人工智慧應用社</p>
    <p style={{ fontSize: "2rem", margin: "10px 0" }}>Email : ai.scu.club@gmail.com</p>
    <p style={{ fontSize: "1.5rem", margin: "10px 0" }}>電話 : 0906-831-267</p>
    <p style={{ fontSize: "1.3rem", margin: "10px 0", color: "#aaa" }}>地址 : 台北市中正區貴陽街一段 56 號</p>
    <p style={{ fontSize: "1.5rem", margin: "10px 0" }}>有任何疑問歡迎來信詢問 !</p>
  </div>
);

function App() {
  const [activeTab, setActiveTab] = useState("goals");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const isMobile = useIsMobile();

  const scrollToTabs = () => {
    const tabsSection = document.getElementById("tabs-section");
    if (tabsSection) {
      tabsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const navItems = [
    { id: "goals", label: "活動目標" },
    { id: "timeline", label: "重要時程" },
    { id: "rules", label: "參賽資格" },
    { id: "rules1", label: "競賽辦法" },
    { id: "workshop", label: "決賽工作坊" },
    { id: "prize", label: "獎金名次" },
    { id: "notification", label: "重要公告" },
    { id: "org", label: "合作單位" },
    { id: "contact", label: "主辦聯絡資訊" },
  ];

  return (
    <div className="app">
      {/* Hero 頂部全螢幕海報與下滑箭頭 */}
      <div className="hero-container">
        <div className="hero-top">
          <div className="scroll-down" onClick={scrollToTabs}>
            ⌄
          </div>
        </div>

        {/* Hero 主標與按鈕 */}
        <section id="tabs-section" className="hero">
          <h3>NextWave AI法創黑客松</h3>
          <p className="subtitle">
            結合 <span className="ai">AI</span> × <span className="law">法律</span> ×{" "}
            <span className="tech">科技</span> × <span className="creative">創意</span>
            ，打造新世代法律科技解決方案！
          </p>
          <div className="buttons">
            <a
              href="https://docs.google.com/forms/d/1pV3JRWR1VF0grXSnMURSD6RUXyooklGbZhrUU8SW9fA/viewform"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="btn primary">立即報名</button>
            </a>
            <a
              href="./NextWave_AI法創黑客松_簡章.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="btn outline">查看簡章</button>
            </a>
            <a
              href="./NextWave_AI法創黑客松_簡章.pdf"
              download="NextWave_AI法創黑客松_簡章.pdf"
            >
              <button className="btn highlight">下載簡章 (PDF)</button>
            </a>
          </div>
        </section>
      </div>

      {/* 手機版頂部固定導覽列 */}
      {isMobile && (
        <div
          style={{
            backgroundColor: "rgb(34, 59, 80)",
            width: "100%",
            height: "70px",
            position: "fixed",
            top: 0,
            left: 0,
            display: "flex",
            alignItems: "center",
            padding: "0 10px",
            zIndex: 2000,
          }}
        >
          <button
            className="sidebar-toggle"
            onClick={() => setSidebarOpen(!sidebarOpen)}
          >
            ☰
          </button>
        </div>
      )}

      {/* 分頁標籤導覽列 */}
      <section className={`tabs ${isMobile && sidebarOpen ? "sidebar-nav open" : ""}`}>
        {(!isMobile || sidebarOpen) && (
          <>
            {navItems.map((item) => (
              <button
                key={item.id}
                className={`tab-btn ${!isMobile && activeTab === item.id ? "active" : ""}`}
                onClick={() => {
                  if (isMobile) {
                    document.getElementById(item.id)?.scrollIntoView({ behavior: "smooth" });
                    setSidebarOpen(false);
                  } else {
                    setActiveTab(item.id);
                  }
                }}
              >
                {item.label}
              </button>
            ))}
          </>
        )}
      </section>

      {/* 分頁內容 */}
      <section className="cards">
        {isMobile ? (
          <>
            <GoalsSection />
            <TimelineSection />
            <RulesSection />
            <Rules1Section />
            <WorkshopSection />
            <PrizeSection />
            <NotificationSection />
            <OrgSection />
            <ContactSection />
          </>
        ) : (
          <>
            {activeTab === "goals" && <GoalsSection />}
            {activeTab === "timeline" && <TimelineSection />}
            {activeTab === "rules" && <RulesSection />}
            {activeTab === "rules1" && <Rules1Section />}
            {activeTab === "workshop" && <WorkshopSection />}
            {activeTab === "prize" && <PrizeSection />}
            {activeTab === "notification" && <NotificationSection />}
            {activeTab === "org" && <OrgSection />}
            {activeTab === "contact" && <ContactSection />}
          </>
        )}
      </section>

      {/* Call to Action */}
      <section className="cta">
        <h2>立即加入，共創法律科技新未來！</h2>
        <p>提交你的企劃書，挑戰創意與技術的極限。</p>
        <div className="buttons">
          <a
            href="https://docs.google.com/forms/d/1pV3JRWR1VF0grXSnMURSD6RUXyooklGbZhrUU8SW9fA/viewform"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="btn highlight">前往報名表單</button>
          </a>
          <a
            href="./NextWave_AI法創黑客松_簡章.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="btn outline">下載官方競賽簡章 (PDF)</button>
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <p>© 2026 東吳大學人工智慧應用社 · AI 法創黑客松</p>
      </footer>
    </div>
  );
}

export default App;
