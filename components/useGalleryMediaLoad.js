'use client';

import { useEffect, useRef, useState } from 'react';

async function fetchAsBlobUrl(src, signal) {
  const res = await fetch(src, { signal, credentials: 'omit', mode: 'cors' });
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  const blob = await res.blob();
  return URL.createObjectURL(blob);
}

function preloadImage(src) {
  return new Promise((resolve, reject) => {
    const img = new window.Image();
    img.onload = () => resolve(src);
    img.onerror = () => reject(new Error('Image load failed'));
    img.src = src;
  });
}

/**
 * Loads remote gallery media fully before display.
 * Returns a blob URL when fetch succeeds, otherwise the original src after preload.
 */
export function useGalleryMediaLoad(src) {
  const [displayUrl, setDisplayUrl] = useState(null);
  const objectUrlRef = useRef(null);

  useEffect(() => {
    if (!src) return undefined;

    let cancelled = false;
    const ac = new AbortController();

    const cleanupObjectUrl = () => {
      if (objectUrlRef.current) {
        URL.revokeObjectURL(objectUrlRef.current);
        objectUrlRef.current = null;
      }
    };

    const mark = (url) => {
      if (!cancelled) setDisplayUrl(url);
    };

    (async () => {
      try {
        const blobUrl = await fetchAsBlobUrl(src, ac.signal);
        if (cancelled) {
          URL.revokeObjectURL(blobUrl);
          return;
        }
        cleanupObjectUrl();
        objectUrlRef.current = blobUrl;
        mark(blobUrl);
      } catch {
        if (cancelled) return;
        try {
          await preloadImage(src);
          if (!cancelled) mark(src);
        } catch {
          if (!cancelled) mark(src);
        }
      }
    })();

    return () => {
      cancelled = true;
      ac.abort();
      cleanupObjectUrl();
      setDisplayUrl(null);
    };
  }, [src]);

  return { displayUrl, ready: Boolean(displayUrl) };
}
