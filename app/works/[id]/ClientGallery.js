'use client';

import { useState, useEffect, useRef } from 'react';
import GalleryImage from '@/components/GalleryImage';
import GalleryVideo from '@/components/GalleryVideo';
import styles from './project.module.css';

export default function ClientGallery({ media, projectTitle, compact = false, pair = false, unoptimized = false }) {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  const minSwipeDistance = 50;
  const closeRef = useRef(null);
  const openerRef = useRef(null);
  const dialogRef = useRef(null);

  useEffect(() => {
    if (!lightboxOpen) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    closeRef.current?.focus();
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') closeLightbox();
      if (event.key === 'ArrowRight') nextMedia(event);
      if (event.key === 'ArrowLeft') prevMedia(event);
      if (event.key === 'Tab') {
        const buttons = dialogRef.current?.querySelectorAll('button, video[controls]');
        const first = buttons?.[0];
        const last = buttons?.[buttons.length - 1];
        if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last?.focus(); }
        else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first?.focus(); }
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = previousOverflow;
      openerRef.current?.focus();
    };
  }, [lightboxOpen]); // eslint-disable-line react-hooks/exhaustive-deps

  if (!media || media.length === 0) {
    if (compact) return null;
    return (
      <div className={styles.emptyGallery}>
        <p>Media gallery for this project is coming soon.</p>
      </div>
    );
  }

  const openLightbox = (index) => {
    openerRef.current = document.activeElement;
    setCurrentIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
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
            onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); openLightbox(idx); } }}
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
          ref={dialogRef}
          role="dialog"
          aria-modal="true"
          aria-label={`${projectTitle || 'Installation'} media gallery`}
          className={styles.lightboxOverlay} 
          onClick={closeLightbox}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <button ref={closeRef} className={styles.closeBtn} onClick={closeLightbox} aria-label="Close lightbox">✕</button>
          
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
