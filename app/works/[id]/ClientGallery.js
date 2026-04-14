'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import styles from './project.module.css';

export default function ClientGallery({ media }) {
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
      <div className={styles.galleryGrid}>
        {media.map((item, idx) => (
          <div 
            key={idx} 
            className={styles.mediaWrapper}
            onClick={() => openLightbox(idx)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => { if (e.key === 'Enter') openLightbox(idx); }}
            aria-label={`View full screen media ${idx + 1}`}
          >
            {item.type === 'image' ? (
              <Image
                src={item.url}
                alt={item.alt || `Gallery Item ${idx + 1}`}
                width={800}
                height={800}
                className={styles.mediaItem}
                style={{ width: '100%', height: 'auto', display: 'block' }}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            ) : item.type === 'video' ? (
              <div style={{ position: 'relative' }}>
                <video
                  muted
                  loop
                  playsInline
                  autoPlay
                  className={styles.mediaItem}
                  poster={item.poster}
                  style={{ width: '100%', height: 'auto', display: 'block' }}
                >
                  <source src={item.url} type="video/mp4" />
                </video>
                <div className={styles.playIconOverlay}>▶</div>
              </div>
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
              <Image
                src={media[currentIndex].url}
                alt={media[currentIndex].alt || 'Enlarged Image'}
                width={1920}
                height={1080}
                className={styles.lightboxMedia}
                style={{ width: 'auto', height: '100%', maxHeight: '85vh', maxWidth: '85vw', objectFit: 'contain' }}
              />
            ) : (
              <video
                controls
                autoPlay
                playsInline
                className={styles.lightboxMedia}
                style={{ maxHeight: '85vh', maxWidth: '85vw' }}
              >
                <source src={media[currentIndex].url} type="video/mp4" />
              </video>
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
