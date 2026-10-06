import React from "react";
import { motion } from "framer-motion";
import { STATS_DATA } from "../data/eventData";

export const StatsSection: React.FC = () => {
  return (
    <section className="stats-section">
      <div className="stats-container">
        <div className="stats-grid">
          {STATS_DATA.map((item, index) => (
            <motion.div
              key={index}
              className="stat-card"
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="stat-value-wrap">
                <span className="stat-value">{item.value}</span>
              </div>
              <h3 className="stat-label">{item.label}</h3>
              <p className="stat-detail">{item.detail}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
