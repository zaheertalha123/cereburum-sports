'use client';

import { useEffect, useId, useRef, useState } from 'react';
import Image from 'next/image';
import { heroFallbackSrc, heroSrcSet } from '@/lib/heroImage';
import styles from '@/app/page.module.css';

const slideDuration = 6500;

export default function HeroPhotos({ photos, children }) {
  const photoId = useId();
  const [activeIndex, setActiveIndex] = useState(0);
  const [requestedIndex, setRequestedIndex] = useState(0);
  const [mountedSlides, setMountedSlides] = useState([0]);
  const loadedSlides = useRef(new Set());
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused || requestedIndex !== activeIndex) return;

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    let timer;
    function scheduleSlide() {
      window.clearTimeout(timer);
      if (reducedMotion.matches || document.hidden) return;
      timer = window.setTimeout(() => {
        setRequestedIndex((activeIndex + 1) % photos.length);
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
  }, [activeIndex, paused, photos.length, requestedIndex]);

  useEffect(() => {
    if (loadedSlides.current.has(requestedIndex)) {
      setActiveIndex(requestedIndex);
    } else {
      setMountedSlides((slides) => slides.includes(requestedIndex) ? slides : [...slides, requestedIndex]);
    }
  }, [requestedIndex]);

  return (
    <>
      <div
        className={styles.heroPhotos}
        id={photoId}
        data-paused={paused}
        style={{ '--hero-slide-duration': `${slideDuration}ms` }}
      >
        {mountedSlides.map((index) => {
          const { src, alt, position, responsive } = photos[index];
          const first = index === 0;
          const imageProps = {
            src,
            alt,
            sizes: '100vw',
            className: styles.heroImage,
            style: { objectPosition: position, transformOrigin: position },
            onLoad: () => {
              loadedSlides.current.add(index);
              if (requestedIndex === index) setActiveIndex(index);
            },
            onError: () => {
              if (requestedIndex === index) setRequestedIndex(activeIndex);
            },
          };
          const srcSet = responsive ? heroSrcSet(src) : undefined;
          const slideStyle = first
            ? { position: 'absolute', inset: 0, opacity: 1, zIndex: 1 }
            : undefined;
          const imageStyle = first
            ? {
                position: 'absolute',
                inset: 0,
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                objectPosition: position,
                opacity: 1,
              }
            : imageProps.style;

          return (
            <div
              key={src}
              className={first ? 'hero-lcp-slide' : styles.heroSlide}
              style={slideStyle}
              data-active={index === activeIndex || undefined}
              data-first={first || undefined}
              aria-hidden={index !== activeIndex}
            >
              {srcSet ? (
                <img
                  {...imageProps}
                  src={heroFallbackSrc(src, true)}
                  srcSet={srcSet}
                  sizes="100vw"
                  width={750}
                  height={560}
                  className="hero-lcp-img"
                  style={imageStyle}
                  fetchPriority={first ? 'high' : 'low'}
                  decoding="async"
                />
              ) : (
                <Image
                  {...imageProps}
                  fill
                  preload={first}
                  fetchPriority={first ? 'high' : 'low'}
                  loading={first ? undefined : 'lazy'}
                />
              )}
            </div>
          );
        })}
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
            onClick={() => setRequestedIndex(index)}
          />
        ))}
      </div>
    </>
  );
}
