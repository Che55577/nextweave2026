
import "./App.css";
import { useState } from "react";

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
        <div className="buttons">
          <a href="https://forms.gle/nnMcJcDN1iay39Yx5" target="_blank" rel="noopener noreferrer">
            <button className="btn primary">立即報名</button>
          </a>
          <button className="btn outline">查看簡章</button>
        </div>
      </section>

      {/* 分頁標籤 */}
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
          決賽工作坊
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
            <p>
              1. 鼓勵大專院校學生運用創意思維與 AI 技術，提出提升法律可近性與服務效率的創新解決方案。<br />
              2. 促進法學、設計、資訊等領域跨域合作，提升法律科技素養
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
                  <span className="date" style={{ fontSize: "2.5rem" }}>10/3</span>
                  <p style={{ fontSize: "1.5rem" }}>開放報名</p>
                </div>
              </div>
              <div className="timeline-item">
                <div className="timeline-dot" />
                <div className="timeline-content">
                  <span className="date" style={{ fontSize: "2rem" }}>待公布</span>
                  <p style={{ fontSize: "1.5rem" }}>初賽截止</p>
                </div>
              </div>
              <div className="timeline-item">
                <div className="timeline-dot" />
                <div className="timeline-content">
                  <span className="date" style={{ fontSize: "2rem" }}>待公布</span>
                  <p style={{ fontSize: "1.5rem" }}>競賽工作坊</p>
                </div>
              </div>
              <div className="timeline-item">
                <div className="timeline-dot" />
                <div className="timeline-content">
                  <span className="date" style={{ fontSize: "2rem" }}>待公布</span>
                  <p style={{ fontSize: "1.5rem" }}>決賽暨頒獎典禮</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === "rules" && (
          <div className="card fade-in">
            <h3>參賽資格</h3>
            <p>
              大專院校學生（18 歲以上），2–5 人組隊，不限校系，跨領域合作參與。
            </p>
          </div>
        )}

        {activeTab === "rules1" && (
          <div className="card fade-in">
            <h3 style={{ textAlign: "center" }}>初賽審核</h3>
            <hr style={{ width: "20%", margin: "20px auto", border: "1px solid cyan" }} />
            
  {/* 入選名額 */}
{/* <div className="card fade-in horizontal"> */}
  <div className="cards-row">
    {/* 區塊一 */}
    <div className="section">
      <h4>一、流程</h4>
      <ul>
        <li>入選名額：進入決賽團隊名額待公布（請見最新簡章）</li>
        <li>公告時間：待公布（將寄信通知入選團隊並公布名單）</li>
      </ul>
    </div>

    {/* 區塊二 */}
    <div className="section">
      <h4>二、初審企劃書內容</h4>
      <ol type="a" className="nested-list">
        <li>
          問題定義與背景分析（約 300 字）
          <ul>
            <li>法律議題描述</li>
            <li>AI 技術關聯性與挑戰分析</li>
          </ul>
        </li>
        <li>
          AI × 法學解決方案構想書（1-3 頁）
          <ul>
            <li>創新亮點說明</li>
            <li>使用的 AI 技術</li>
            <li>法律應用場景</li>
            <li>預期效益評估</li>
            <li>技術架構圖或概念示意圖（選填，加分項）</li>
          </ul>
        </li>
        <li>
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

    {/* 區塊三 */}
    <div className="section">
  <h4>三、評分標準</h4>

  {/* 卡片式呈現 */}
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
{/* </div> */}




<h3 style={{ textAlign: "center" ,margin: "50px 0px -10px 0px"}}>決賽說明</h3>
<hr style={{ width: "20%", margin: "20px auto", border: "1px solid cyan" }} />

{/* 決賽競賽說明 - 三個水平卡片 */}
<div className="cards-row">
  <div className="card fade-in">
    <h4>一、工作坊參與</h4>
    入選決賽團隊須參與實體或線上工作坊（確切時間待公布），獲得：
    <ul>
      <li>實作技術支援（生成式 AI 工具、無程式工具、API 使用說明）</li>
      <li>法學應用諮詢（合規性、使用場景設計）</li>
      <li>跨域創新指導（UX、專案管理、LawTech 案例介紹）</li>
    </ul>
  </div>

  <div className="card fade-in">
    <h4>二、決賽提案</h4>
    <ol type="a" className="nested-list">
      <li>繳件期限：待公布（請依官方公告期限上傳決賽簡報及展示成品）</li>
      <li>現場展示：待公布（進行簡報提案與實際 Prototype 展示，並於決賽當日公布名次）</li>
    </ol>
  </div>

  <div className="card fade-in">
    <h4>三、評分標準</h4>
    <div className="criteria-list">
    <div className="criteria-item">
      <span className="icon">📑</span>
      <span className="label">問題聚焦與社會影響力</span>
      <span className="weight">40%</span>
    </div>
    <div className="criteria-item">
      <span className="icon">💡</span>
      <span className="label">簡報表現</span>
      <span className="weight">20%</span>
    </div>
    <div className="criteria-item">
      <span className="icon">🤖</span>
      <span className="label">AI 技術應用與創新性</span>
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
        )}

        {activeTab === "prize" && (
          <div className="awards fade-in">
            <h3>🏆 獎勵辦法</h3>
            <table className="awards-table">
              <thead>
                <tr>
                  <th>獎項</th>
                  <th>獎金</th>
                  <th>備註</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>第一名</td>
                  <td>待公布</td>
                  <td>待公布</td>
                </tr>
                <tr>
                  <td>第二名</td>
                  <td>待公布</td>
                  <td>待公布</td>
                </tr>
                <tr>
                  <td>第三名</td>
                  <td>待公布</td>
                  <td>待公布</td>
                </tr>
                <tr>
                  <td>佳作獎</td>
                  <td>待公布</td>
                  <td>待公布</td>
                </tr>
                <tr>
                  <td>參賽證明</td>
                  <td>-</td>
                  <td>所有入圍決賽者均可獲得</td>
                </tr>
              </tbody>
            </table>
            <div className="total-prize">
              🎉 總獎金：<span>待公布</span>
            </div>
          </div>
        )}


        {activeTab === "workshop" && (
          <div className="card workshop-card fade-in">
  <h3 className="card-title">🎤 決賽前工作坊</h3>
  <p className="card-subtitle">
    透過 <b>講座＋實作</b> 的混合型式，引導參賽者高效完成提案具象化，強化其 Demo 展示力與產品說服力
  </p>

  {/* 活動資訊 */}
  <div className="info-box">
    <p>🕒 <b>時間：</b>2026 年（確切時間待公布）</p>
    <p>📍 <b>地點：</b>東吳大學 城中校區</p>
  </div>

  {/* 活動流程 */}
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
        <td>待公布</td>
        <td>開放入場、技術測試</td>
        <td>工作人員協助</td>
      </tr>
      <tr>
        <td>待公布</td>
        <td>開場與說明：工作坊目的與決賽要求</td>
        <td>主辦單位代表</td>
      </tr>
      <tr>
        <td>待公布</td>
        <td>生成式 AI / 工具簡介與實作指導</td>
        <td>技術講師</td>
      </tr>
      <tr>
        <td>待公布</td>
        <td>法學議題相關講座</td>
        <td>法學專家</td>
      </tr>
      <tr>
        <td>待公布</td>
        <td>總結與任務提醒</td>
        <td>主辦單位</td>
      </tr>
    </tbody>
  </table>

  <p className="note">📺 * 當天錄影將於會後公告給入選團隊</p>
</div>

        )}

          {activeTab === "contact" && (
          <div className="card fade-in">
            <p style={{textAlign: "center",fontSize: "2rem" }}> 東吳大學 人工智慧應用社</p>
            <p style={{textAlign: "center",fontSize: "2rem" }}> email : ai.scu.club@gmail.com</p>
            <p style={{textAlign: "center",fontSize: "1.5rem" }}> 有任何疑問歡迎來信詢問 ! </p>

            
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
