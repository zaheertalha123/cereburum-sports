'use client';

import { useState, useEffect } from 'react';
import GalleryImage from '@/components/GalleryImage';
import GalleryVideo from '@/components/GalleryVideo';
import styles from './project.module.css';

export default function ClientGallery({ media, projectTitle, compact = false, pair = false, unoptimized = false }) {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  const minSwipeDistance = 50;

  // Close lightbox on escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!lightboxOpen) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') nextMedia(e);
      if (e.key === 'ArrowLeft') prevMedia(e);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxOpen, currentIndex]); // eslint-disable-line react-hooks/exhaustive-deps

  if (!media || media.length === 0) {
    if (compact) return null;
    return (
      <div className={styles.emptyGallery}>
        <p>Media gallery for this project is coming soon.</p>
      </div>
    );
  }

  const openLightbox = (index) => {
    setCurrentIndex(index);
    setLightboxOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    document.body.style.overflow = '';
  };

  const nextMedia = (e) => {
    if (e && e.stopPropagation) e.stopPropagation();
    setCurrentIndex((prev) => (prev + 1) % media.length);
  };

  const prevMedia = (e) => {
    if (e && e.stopPropagation) e.stopPropagation();
    setCurrentIndex((prev) => (prev - 1 + media.length) % media.length);
  };

  const handleTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;
    
    if (isLeftSwipe) {
      nextMedia();
    } else if (isRightSwipe) {
      prevMedia();
    }
  };

  return (
    <>
      <div
        className={
          pair ? styles.pairGrid : compact ? styles.compactGrid : styles.galleryGrid
        }
      >
        {media.map((item, idx) => (
          <div 
            key={idx} 
            className={`${styles.mediaWrapper} ${pair ? styles.mediaWrapperPair : ''}`}
            onClick={() => openLightbox(idx)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => { if (e.key === 'Enter') openLightbox(idx); }}
            aria-label={`View full screen media ${idx + 1}`}
          >
            {item.type === 'image' ? (
              <GalleryImage
                src={item.url}
                alt={
                  item.alt ||
                  `${projectTitle || 'Sports net'} installation photo ${idx + 1} - boundary safety netting by Cereburum Sports`
                }
                layout={pair ? 'cover' : 'responsive'}
                className={pair ? styles.mediaItemCover : styles.mediaItem}
                sizes={
                  pair
                    ? '(max-width: 768px) 45vw, 220px'
                    : '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
                }
                unoptimized={unoptimized}
              />
            ) : item.type === 'video' ? (
              <GalleryVideo
                src={item.url}
                className={styles.mediaItem}
                variant="inline"
                showPlayOverlay
                playOverlayClassName={styles.playIconOverlay}
              />
            ) : null}
          </div>
        ))}
      </div>

      {lightboxOpen && (
        <div 
          className={styles.lightboxOverlay} 
          onClick={closeLightbox}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <button className={styles.closeBtn} onClick={closeLightbox} aria-label="Close lightbox">✕</button>
          
          <button className={styles.navBtn} style={{ left: '1.5rem' }} onClick={prevMedia} aria-label="Previous media">❮</button>
          
          <div className={styles.lightboxContent} onClick={(e) => e.stopPropagation()}>
            {media[currentIndex].type === 'image' ? (
              <GalleryImage
                key={media[currentIndex].url}
                src={media[currentIndex].url}
                alt={
                  media[currentIndex].alt ||
                  `${projectTitle || 'Sports net'} installation photo ${currentIndex + 1} - boundary safety netting by Cereburum Sports`
                }
                variant="lightbox"
                unoptimized={unoptimized}
              />
            ) : (
              <GalleryVideo key={media[currentIndex].url} src={media[currentIndex].url} variant="lightbox" />
            )}
            {media[currentIndex].alt && (
              <div className={styles.lightboxCaption}>{media[currentIndex].alt}</div>
            )}
          </div>
          
          <button className={styles.navBtn} style={{ right: '1.5rem' }} onClick={nextMedia} aria-label="Next media">❯</button>
          
          <div className={styles.counter}>{currentIndex + 1} / {media.length}</div>
        </div>
      )}
    </>
  );
}
