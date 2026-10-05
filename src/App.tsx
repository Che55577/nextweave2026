import { useState } from "react";
import "./App.css";
import { Hero } from "./components/Hero";
import { PhotoCarousel2025 } from "./components/PhotoCarousel2025";
import { TabsSection } from "./components/TabsSection";
import { CTASection } from "./components/CTASection";
import { Footer } from "./components/Footer";

function App() {
  const [activeTab, setActiveTab] = useState("goals");

  const handleCheckRules = () => {
    setActiveTab("rules");
    const target = document.getElementById("content-section");
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="app">
      {/* 1. Hero 視覺首頁區塊 */}
      <Hero onCheckRules={handleCheckRules} />

      {/* 2. 2025 精彩回顧照片毛玻璃輪播與全螢幕放大 */}
      <PhotoCarousel2025 />

      {/* 3. 活動資訊分頁區塊 */}
      <TabsSection activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* 4. 立即報名號召區塊 */}
      <CTASection />

      {/* 5. 頁尾資訊 */}
      <Footer />
    </div>
  );
}

export default App;
