import React, { useState, useEffect } from "react";
import { Clock, AlertCircle } from "lucide-react";
import { COUNTDOWN_TARGET_DATE } from "../data/eventData";

export const CountdownTimer: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    isExpired: false,
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const target = new Date(COUNTDOWN_TARGET_DATE).getTime();
      const now = new Date().getTime();
      const difference = target - now;

      if (difference <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0, isExpired: true });
        return;
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((difference / 1000 / 60) % 60);
      const seconds = Math.floor((difference / 1000) % 60);

      setTimeLeft({ days, hours, minutes, seconds, isExpired: false });
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="countdown-card">
      <div className="countdown-badge">
        <Clock size={16} className="text-cyan-400 animate-pulse" />
        <span>距離初賽企劃繳件截止倒數（11/30 23:59）</span>
      </div>

      <div className="countdown-grid">
        <div className="countdown-item">
          <span className="countdown-num">
            {String(timeLeft.days).padStart(2, "0")}
          </span>
          <span className="countdown-label">DAYS / 天</span>
        </div>
        <div className="countdown-colon">:</div>
        <div className="countdown-item">
          <span className="countdown-num">
            {String(timeLeft.hours).padStart(2, "0")}
          </span>
          <span className="countdown-label">HOURS / 時</span>
        </div>
        <div className="countdown-colon">:</div>
        <div className="countdown-item">
          <span className="countdown-num">
            {String(timeLeft.minutes).padStart(2, "0")}
          </span>
          <span className="countdown-label">MINUTES / 分</span>
        </div>
        <div className="countdown-colon">:</div>
        <div className="countdown-item">
          <span className="countdown-num">
            {String(timeLeft.seconds).padStart(2, "0")}
          </span>
          <span className="countdown-label">SECONDS / 秒</span>
        </div>
      </div>

      <div className="countdown-footer-note">
        <AlertCircle size={14} />
        <span>初賽採線上書面企劃審查，即刻組隊準備企劃書即可搶佔先機！</span>
      </div>
    </div>
  );
};
