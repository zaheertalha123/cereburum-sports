'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import GalleryMediaPlaceholder from './GalleryMediaPlaceholder';
import styles from './GalleryMedia.module.css';

function isFullyBuffered(video) {
  if (!video.duration || !Number.isFinite(video.duration)) return false;
  const { buffered, duration } = video;
  if (buffered.length === 0) return false;
  return buffered.end(buffered.length - 1) >= duration - 0.25;
}

export default function GalleryVideo({
  src,
  className = '',
  videoStyle,
  variant = 'inline',
  showPlayOverlay = false,
  playOverlayClassName = '',
}) {
  const [playUrl, setPlayUrl] = useState(null);
  const bufferVideoRef = useRef(null);
  const displayVideoRef = useRef(null);
  const objectUrlRef = useRef(null);

  const markReady = useCallback((url) => {
    setPlayUrl((prev) => (prev === url ? prev : url));
  }, []);

  useEffect(() => {
    let cancelled = false;
    let detachBuffer = null;
    const ac = new AbortController();

    const cleanupObjectUrl = () => {
      if (objectUrlRef.current) {
        URL.revokeObjectURL(objectUrlRef.current);
        objectUrlRef.current = null;
      }
    };

    const attachBufferListeners = () => {
      const el = bufferVideoRef.current;
      if (!el) return null;

      const check = () => {
        if (cancelled) return;
        if (isFullyBuffered(el)) {
          markReady(src);
        }
      };

      el.addEventListener('progress', check);
      el.addEventListener('loadedmetadata', check);
      el.preload = 'auto';
      el.muted = true;
      el.playsInline = true;
      el.src = src;
      el.load();

      return () => {
        el.removeEventListener('progress', check);
        el.removeEventListener('loadedmetadata', check);
        el.removeAttribute('src');
        el.load();
      };
    };

    (async () => {
      try {
        const res = await fetch(src, { signal: ac.signal, credentials: 'omit', mode: 'cors' });
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const blob = await res.blob();
        if (cancelled) return;
        cleanupObjectUrl();
        const url = URL.createObjectURL(blob);
        objectUrlRef.current = url;
        markReady(url);
      } catch {
        if (cancelled) return;
        detachBuffer = attachBufferListeners();
      }
    })();

    return () => {
      cancelled = true;
      ac.abort();
      detachBuffer?.();
      cleanupObjectUrl();
      setPlayUrl(null);
    };
  }, [src, markReady]);

  useEffect(() => {
    const el = displayVideoRef.current;
    if (!el || !playUrl) return;
    el.play().catch(() => {});
  }, [playUrl]);

  const ready = Boolean(playUrl);

  return (
    <div className={styles.mediaShell}>
      {!ready ? <GalleryMediaPlaceholder variant={variant} label="Loading video" /> : null}

      <video ref={bufferVideoRef} className={styles.videoHidden} tabIndex={-1} aria-hidden="true" muted playsInline />

      {ready ? (
        <>
          <video
            ref={displayVideoRef}
            className={className || styles.mediaReady}
            style={
              videoStyle ||
              (variant === 'lightbox'
                ? { maxHeight: '85vh', maxWidth: '85vw', width: 'auto', height: 'auto', objectFit: 'contain' }
                : undefined)
            }
            muted={variant === 'inline'}
            loop={variant === 'inline'}
            playsInline
            autoPlay
            controls={variant === 'lightbox'}
            preload="auto"
          >
            <source src={playUrl} type="video/mp4" />
          </video>
          {variant === 'inline' && showPlayOverlay ? (
            <div className={playOverlayClassName} aria-hidden="true">
              ▶
            </div>
          ) : null}
        </>
      ) : null}
    </div>
  );
}
