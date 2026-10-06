import React, { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight, Maximize2, Pause, Play } from "lucide-react";
import { RETROSPECTIVE_PHOTOS } from "../data/eventData";
import { LightboxModal } from "./LightboxModal";

export const PhotoCarousel2025: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [isPlaying, setIsPlaying] = useState(true);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  const photos = RETROSPECTIVE_PHOTOS;
  const timerRef = useRef<number | null>(null);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % photos.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + photos.length) % photos.length);
  };

  // 自動輪播計時器 (4 秒切換一次)
  useEffect(() => {
    if (isPlaying && !isLightboxOpen) {
      timerRef.current = setInterval(() => {
        nextSlide();
      }, 4200);
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPlaying, isLightboxOpen, currentIndex]);

  // 手勢滑動支援
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isSwipe = Math.abs(distance) > 50;
    if (isSwipe) {
      if (distance > 0) {
        nextSlide();
      } else {
        prevSlide();
      }
    }
    setTouchStart(null);
    setTouchEnd(null);
  };

  return (
    <section className="photo-carousel-wrapper" id="highlights">
      <h2 className="carousel-title">2025 精彩回顧</h2>
      <p className="carousel-subtitle">
        重溫歷屆現場熱血開發與跨域激盪的精彩瞬間 · 點擊任一照片即可開啟全螢幕檢視
      </p>

      {/* 主毛玻璃輪播容器 */}
      <div
        className="glass-carousel-container"
        onMouseEnter={() => setIsPlaying(false)}
        onMouseLeave={() => setIsPlaying(true)}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {/* 主要照片展示區 (點擊打開燈箱) */}
        <div
          className="carousel-main-view"
          onClick={() => setIsLightboxOpen(true)}
          role="button"
          tabIndex={0}
          aria-label="點擊放大至全螢幕檢視"
          title="點擊放大至全螢幕"
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              setIsLightboxOpen(true);
            }
          }}
        >
          {/* 照片淡入淡出堆疊 */}
          {photos.map((photo, idx) => (
            <div
              key={photo.id}
              className={`carousel-slide ${idx === currentIndex ? "active" : ""}`}
            >
              <img
                src={photo.src}
                alt={photo.alt}
                className="carousel-image"
                loading={idx === 0 ? "eager" : "lazy"}
              />
            </div>
          ))}

          {/* 毛玻璃浮層提示：全螢幕按鈕 */}
          <div className="carousel-glass-tag">
            <Maximize2 size={16} />
            <span>點擊放大全螢幕</span>
          </div>

          {/* 計數徽章 */}
          <div className="carousel-count-tag">
            <span>
              {currentIndex + 1} / {photos.length}
            </span>
          </div>
        </div>

        {/* 左右導覽按鈕 */}
        <button
          className="glass-nav-btn prev"
          onClick={(e) => {
            e.stopPropagation();
            prevSlide();
          }}
          aria-label="上一張照片"
          title="上一張"
        >
          <ChevronLeft size={28} />
        </button>

        <button
          className="glass-nav-btn next"
          onClick={(e) => {
            e.stopPropagation();
            nextSlide();
          }}
          aria-label="下一張照片"
          title="下一張"
        >
          <ChevronRight size={28} />
        </button>

        {/* 控制列：播放/暫停與圓點 */}
        <div className="carousel-controls">
          <button
            className="play-pause-btn"
            onClick={(e) => {
              e.stopPropagation();
              setIsPlaying((prev) => !prev);
            }}
            aria-label={isPlaying ? "暫停輪播" : "播放輪播"}
            title={isPlaying ? "暫停輪播" : "播放輪播"}
          >
            {isPlaying ? <Pause size={14} /> : <Play size={14} />}
          </button>

          <div className="carousel-dots">
            {photos.map((_, idx) => (
              <button
                key={idx}
                className={`carousel-dot ${idx === currentIndex ? "active" : ""}`}
                onClick={(e) => {
                  e.stopPropagation();
                  setCurrentIndex(idx);
                }}
                aria-label={`切換至第 ${idx + 1} 張照片`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* 底部小縮圖導覽條 (提升電腦瀏覽體驗) */}
      <div className="thumbnail-track">
        {photos.map((photo, idx) => (
          <button
            key={photo.id}
            className={`thumbnail-item ${idx === currentIndex ? "active" : ""}`}
            onClick={() => setCurrentIndex(idx)}
            aria-label={`檢視第 ${idx + 1} 張相片`}
          >
            <img src={photo.src} alt={photo.alt} loading="lazy" />
          </button>
        ))}
      </div>

        {/* 全螢幕燈箱 Modal */}
        <LightboxModal
          isOpen={isLightboxOpen}
          photos={photos}
          currentIndex={currentIndex}
          onClose={() => setIsLightboxOpen(false)}
          onPrev={prevSlide}
          onNext={nextSlide}
        />
    </section>
  );
};
