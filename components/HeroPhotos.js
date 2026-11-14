'use client';

import { useEffect, useId, useState } from 'react';
import Image from 'next/image';
import styles from '@/app/page.module.css';

const slideDuration = 6500;

export default function HeroPhotos({ photos, children }) {
  const photoId = useId();
  const [activeIndex, setActiveIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    let timer;
    function scheduleSlide() {
      window.clearTimeout(timer);
      if (reducedMotion.matches || document.hidden) return;
      timer = window.setTimeout(() => {
        setActiveIndex((index) => (index + 1) % photos.length);
      }, slideDuration);
    }

    scheduleSlide();
    reducedMotion.addEventListener('change', scheduleSlide);
    document.addEventListener('visibilitychange', scheduleSlide);
    return () => {
      window.clearTimeout(timer);
      reducedMotion.removeEventListener('change', scheduleSlide);
      document.removeEventListener('visibilitychange', scheduleSlide);
    };
  }, [activeIndex, paused, photos.length]);

  return (
    <>
      <div
        className={styles.heroPhotos}
        id={photoId}
        data-paused={paused}
        style={{ '--hero-slide-duration': `${slideDuration}ms` }}
      >
        {photos.map(({ src, alt, position }, index) => (
          <div key={src} className={styles.heroSlide} data-active={index === activeIndex} aria-hidden={index !== activeIndex}>
            <Image
              src={src}
              alt={alt}
              fill
              preload={index === 0}
              fetchPriority={index === 0 ? undefined : 'low'}
              sizes="100vw"
              className={styles.heroImage}
              style={{ objectPosition: position, transformOrigin: position }}
            />
          </div>
        ))}
      </div>
      <div className={styles.heroShade} aria-hidden="true" />
      {children}
      <div className={styles.heroPhotoControls} role="group" aria-label="Hero photos">
        <button
          type="button"
          className={styles.heroPlayback}
          aria-label={paused ? 'Play slideshow' : 'Pause slideshow'}
          aria-controls={photoId}
          onClick={() => setPaused((wasPaused) => !wasPaused)}
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
            {paused ? <path d="M5 2.5v11l8-5.5z" /> : <path d="M4 3h3v10H4zm5 0h3v10H9z" />}
          </svg>
        </button>
        {photos.map(({ src, alt }, index) => (
          <button
            key={src}
            type="button"
            className={styles.heroPhotoChoice}
            aria-label={alt}
            aria-controls={photoId}
            aria-pressed={index === activeIndex}
            onClick={() => setActiveIndex(index)}
          />
        ))}
      </div>
    </>
  );
}
