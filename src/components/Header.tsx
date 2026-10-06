import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight, Sparkles, ChevronRight, FileText } from "lucide-react";
import { NAV_LINKS, REGISTRATION_URL } from "../data/eventData";

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 25);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // 手機版選單打開時鎖定頁面滾動
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const navHeight = 90;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navHeight;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <header className="island-header-wrapper">
        <nav className={`island-nav-bar ${isScrolled ? "scrolled" : ""}`}>
          {/* 左側品牌識別 */}
          <div className="nav-brand" onClick={scrollToTop} role="button" tabIndex={0}>
            <div className="nav-logo-box">
              <img
                src={`${import.meta.env.BASE_URL}favicon.png`}
                alt="AISCU Logo"
                className="nav-logo-img"
              />
            </div>
            <div className="nav-brand-text">
              <span className="brand-title">NextWave 2026</span>
              <span className="brand-subtitle">AI 法創黑客松</span>
            </div>
          </div>

          {/* 桌機版導覽連結 */}
          <div className="nav-links-desktop">
            {NAV_LINKS.map((link) => (
              <button
                key={link.id}
                className="nav-link-btn"
                onClick={() => scrollToSection(link.id)}
              >
                <span className="link-num">{link.number}</span>
                <span className="link-text">{link.label}</span>
              </button>
            ))}
          </div>

          {/* 右側行動按鈕 */}
          <div className="nav-actions-desktop">
            <button
              className="nav-btn-outline"
              onClick={() => scrollToSection("rules")}
            >
              <FileText size={15} />
              <span>簡章規範</span>
            </button>
            <a
              href={REGISTRATION_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="nav-btn-primary"
            >
              <span>立即報名</span>
              <ArrowUpRight size={16} />
            </a>
          </div>

          {/* 手機版漢堡按鈕 */}
          <button
            className="mobile-menu-trigger"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-label={mobileMenuOpen ? "關閉選單" : "開啟選單"}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>
      </header>

      {/* 手機版全螢幕抽屜選單 */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className="mobile-menu-overlay"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="mobile-menu-content">
              <div className="mobile-menu-header">
                <div className="nav-brand" onClick={() => { setMobileMenuOpen(false); scrollToTop(); }}>
                  <img
                    src={`${import.meta.env.BASE_URL}favicon.png`}
                    alt="Logo"
                    className="nav-logo-img"
                  />
                  <div className="nav-brand-text">
                    <span className="brand-title">NextWave 2026</span>
                    <span className="brand-subtitle">AI 法創黑客松</span>
                  </div>
                </div>
                <button
                  className="mobile-close-btn"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <X size={26} />
                </button>
              </div>

              <div className="mobile-nav-list">
                {NAV_LINKS.map((link) => (
                  <button
                    key={link.id}
                    className="mobile-nav-item"
                    onClick={() => scrollToSection(link.id)}
                  >
                    <div className="mobile-nav-item-left">
                      <span className="mobile-num">{link.number}</span>
                      <span className="mobile-label">{link.label}</span>
                    </div>
                    <ChevronRight size={18} className="chevron" />
                  </button>
                ))}
              </div>

              <div className="mobile-menu-footer">
                <a
                  href={REGISTRATION_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mobile-cta-btn primary"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <Sparkles size={18} />
                  <span>前往報名表單</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
