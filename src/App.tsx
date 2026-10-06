import "./App.css";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { StatsSection } from "./components/StatsSection";
import { AboutSection } from "./components/AboutSection";
import { RulesSection } from "./components/RulesSection";
import { RubricsSection } from "./components/RubricsSection";
import { PrizesSection } from "./components/PrizesSection";
import { PhotoCarousel2025 } from "./components/PhotoCarousel2025";
import { WorkshopSection } from "./components/WorkshopSection";
import { TimelineSection } from "./components/TimelineSection";
import { FAQSection } from "./components/FAQSection";
import { OrganizersSection } from "./components/OrganizersSection";
import { CTASection } from "./components/CTASection";
import { Footer } from "./components/Footer";

function App() {
  return (
    <div className="app-root">
      {/* 00. 頂部浮動島嶼毛玻璃導覽列 */}
      <Header />

      {/* 主要內容全頁垂直滾動故事線 */}
      <main className="main-content">
        {/* 01. Hero 首頁旗艦視覺 + 實時倒數計時器 */}
        <Hero />

        {/* 02. 4 大關鍵數據指標看板 */}
        <StatsSection />

        {/* 03. 01 / ABOUT 活動介紹與 4 大法創競賽挑戰 */}
        <AboutSection />

        {/* 04. 02 / RULES 參賽資格與雙階段賽制規範 */}
        <RulesSection />

        {/* 05. 03 / RUBRICS 評分規準動態百分比進度條 */}
        <RubricsSection />

        {/* 06. 04 / PRIZES 獎金資訊與金銀銅階梯頒獎台 */}
        <PrizesSection />

        {/* 07. 05 / HIGHLIGHTS 2025 精彩回顧毛玻璃照片輪播與燈箱 */}
        <PhotoCarousel2025 />

        {/* 08. 06 / WORKSHOP 增能工作坊與決賽現場時間軸步進器 */}
        <WorkshopSection />

        {/* 09. 07 / TIMELINE 垂直交錯時間軸與衝刺號召 */}
        <TimelineSection />

        {/* 10. 08 / FAQ 參賽常見問題動態手風琴折疊 */}
        <FAQSection />

        {/* 11. 09 / ORGANIZERS 指導、主辦單位展示與一鍵複製信箱 */}
        <OrganizersSection />

        {/* 12. 終端號召區塊 */}
        <CTASection />
      </main>

      {/* 13. 現代化頁尾 */}
      <Footer />
    </div>
  );
}

export default App;
