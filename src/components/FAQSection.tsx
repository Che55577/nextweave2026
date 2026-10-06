import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, HelpCircle } from "lucide-react";
import { FAQ_DATA } from "../data/eventData";

export const FAQSection: React.FC = () => {
  const [openIds, setOpenIds] = useState<string[]>(["faq-1"]);

  const toggleFAQ = (id: string) => {
    setOpenIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  return (
    <section className="section-block" id="faq">
      <div className="section-container">
        {/* 章節標籤與標題 */}
        <div className="section-title-header">
          <span className="section-overline">08 / FAQ</span>
          <h2 className="section-heading">參賽常見問題解答</h2>
          <p className="section-subheading">
            想參賽但還有疑惑？我們為你整理了大專院校同學最常詢問的關鍵疑問
          </p>
        </div>

        {/* 手風琴問答清單 */}
        <div className="faq-accordion-list">
          {FAQ_DATA.map((faq) => {
            const isOpen = openIds.includes(faq.id);

            return (
              <div key={faq.id} className={`faq-accordion-card ${isOpen ? "open" : ""}`}>
                <button
                  className="faq-question-btn"
                  onClick={() => toggleFAQ(faq.id)}
                  aria-expanded={isOpen}
                >
                  <div className="faq-question-left">
                    <span className="faq-category-pill">{faq.category}</span>
                    <h4 className="faq-question-text">{faq.question}</h4>
                  </div>
                  <ChevronDown
                    size={22}
                    className={`faq-chevron ${isOpen ? "rotated" : ""}`}
                  />
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      className="faq-answer-container"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    >
                      <div className="faq-answer-inner">
                        <p className="faq-answer-text">{faq.answer}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* 還有其他問題提示 */}
        <div className="faq-footer-support">
          <HelpCircle size={18} className="text-cyan-400" />
          <span>
            有未列出的特殊疑問或合作諮詢？歡迎隨時來信：
            <a href="mailto:ai.scu.club@gmail.com" className="support-email">
              ai.scu.club@gmail.com
            </a>
          </span>
        </div>
      </div>
    </section>
  );
};
