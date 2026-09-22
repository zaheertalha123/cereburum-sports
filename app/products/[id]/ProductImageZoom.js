'use client';

import { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import Image from 'next/image';
import styles from './product-detail.module.css';

const ZOOM = 2.4;
const PANE = 260;

function paintedImageBox(frame, img) {
  const rect = frame.getBoundingClientRect();
  const nw = img.naturalWidth || 1;
  const nh = img.naturalHeight || 1;
  const scale = Math.min(rect.width / nw, rect.height / nh);
  const width = nw * scale;
  const height = nh * scale;
  return {
    rect,
    nw,
    nh,
    offsetX: (rect.width - width) / 2,
    offsetY: (rect.height - height) / 2,
    width,
    height,
  };
}

export default function ProductImageZoom({ src, alt, tag }) {
  const frameRef = useRef(null);
  const [zoom, setZoom] = useState(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  function updateZoom(event) {
    const frame = frameRef.current;
    const img = frame?.querySelector('img');
    if (!frame || !img) return;

    const box = paintedImageBox(frame, img);
    const px = event.clientX - box.rect.left;
    const py = event.clientY - box.rect.top;
    const inside =
      px >= box.offsetX &&
      py >= box.offsetY &&
      px <= box.offsetX + box.width &&
      py <= box.offsetY + box.height;

    if (!inside) {
      setZoom(null);
      return;
    }

    const x = (px - box.offsetX) / box.width;
    const y = (py - box.offsetY) / box.height;
    const bgWidth = PANE * ZOOM;
    const bgHeight = bgWidth * (box.nh / box.nw);

    let left = box.rect.right + 18;
    let top = event.clientY - PANE / 2;
    if (top < 12) top = 12;
    if (top + PANE > window.innerHeight - 12) top = window.innerHeight - PANE - 12;
    if (left + PANE > window.innerWidth - 12) {
      left = Math.max(12, box.rect.left);
      top = Math.min(box.rect.bottom + 12, window.innerHeight - PANE - 12);
    }

    setZoom({
      left,
      top,
      lensX: px,
      lensY: py,
      backgroundSize: `${bgWidth}px ${bgHeight}px`,
      backgroundPosition: `${PANE / 2 - x * bgWidth}px ${PANE / 2 - y * bgHeight}px`,
    });
  }

  return (
    <div className={styles.imagePanel}>
      <div
        ref={frameRef}
        className={styles.imageFrame}
        onMouseMove={updateZoom}
        onMouseLeave={() => setZoom(null)}
      >
        <Image
          src={src}
          alt={alt}
          fill
          className={styles.productImage}
          sizes="(max-width: 992px) 100vw, 48vw"
          priority
        />
        {zoom ? (
          <span
            className={styles.zoomLens}
            style={{ left: zoom.lensX, top: zoom.lensY }}
            aria-hidden="true"
          />
        ) : null}
        {tag ? <span className={styles.imageTag}>{tag}</span> : null}
      </div>

      {mounted && zoom
        ? createPortal(
            <div
              className={styles.zoomWindow}
              aria-hidden="true"
              style={{
                left: zoom.left,
                top: zoom.top,
                backgroundImage: `url("${src}")`,
                backgroundSize: zoom.backgroundSize,
                backgroundPosition: zoom.backgroundPosition,
              }}
            />,
            document.body,
          )
        : null}
    </div>
  );
}
