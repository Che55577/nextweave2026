import React, { useEffect, useCallback, useRef } from "react";
import { ChevronLeft, ChevronRight, X, Maximize2 } from "lucide-react";
import type { RetrospectivePhoto } from "../data/eventData";

interface LightboxModalProps {
  isOpen: boolean;
  photos: RetrospectivePhoto[];
  currentIndex: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({
  isOpen,
  photos,
  currentIndex,
  onClose,
  onPrev,
  onNext,
}) => {
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    },
    [isOpen, onClose, onPrev, onNext]
  );

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, handleKeyDown]);

  if (!isOpen || photos.length === 0) return null;

  const currentPhoto = photos[currentIndex];

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const distance = touchStartX.current - touchEndX.current;
    const isSwipe = Math.abs(distance) > 40;
    if (isSwipe) {
      if (distance > 0) {
        onNext();
      } else {
        onPrev();
      }
    }
    touchStartX.current = null;
    touchEndX.current = null;
  };

  return (
    <div
      className="lightbox-overlay"
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          onClose();
        }
      }}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      role="dialog"
      aria-modal="true"
      aria-label="照片放大預覽"
    >
      {/* 頂部操作列 */}
      <div className="lightbox-header">
        <div className="lightbox-counter">
          <Maximize2 size={16} className="lightbox-icon" />
          <span>
            {currentIndex + 1} / {photos.length}
          </span>
        </div>
        <button
          className="lightbox-close-btn"
          onClick={onClose}
          aria-label="關閉全螢幕預覽"
          title="關閉 (Esc)"
        >
          <X size={26} />
        </button>
      </div>

      {/* 左切換按鈕 */}
      <button
        className="lightbox-nav-btn prev"
        onClick={(e) => {
          e.stopPropagation();
          onPrev();
        }}
        aria-label="上一張照片"
        title="上一張 (←)"
      >
        <ChevronLeft size={36} />
      </button>

      {/* 主展示相片 */}
      <div className="lightbox-content">
        <img
          key={currentPhoto.id}
          src={currentPhoto.src}
          alt={currentPhoto.alt}
          className="lightbox-image"
        />
      </div>

      {/* 右切換按鈕 */}
      <button
        className="lightbox-nav-btn next"
        onClick={(e) => {
          e.stopPropagation();
          onNext();
        }}
        aria-label="下一張照片"
        title="下一張 (→)"
      >
        <ChevronRight size={36} />
      </button>

      {/* 底部指示 */}
      <div className="lightbox-footer">
        <span className="lightbox-hint">
          支援鍵盤 ← → 鍵切換，手機滑動手勢，點擊背景或 Esc 鍵關閉
        </span>
      </div>
    </div>
  );
};
