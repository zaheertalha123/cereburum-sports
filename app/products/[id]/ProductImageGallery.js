'use client';

import { useState, useId } from 'react';
import Image from 'next/image';
import ProductImageZoom from './ProductImageZoom';
import styles from './product-detail.module.css';

export default function ProductImageGallery({ images, alt, tag }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const galleryId = useId();
  const panelId = `${galleryId}-panel`;

  function onTabKey(event, index) {
    let next;
    if (event.key === 'ArrowRight') next = (index + 1) % images.length;
    else if (event.key === 'ArrowLeft') next = (index - 1 + images.length) % images.length;
    else if (event.key === 'Home') next = 0;
    else if (event.key === 'End') next = images.length - 1;
    else return;
    event.preventDefault();
    setActiveIndex(next);
    event.currentTarget.parentElement.querySelectorAll('[role="tab"]')[next]?.focus();
  }
  const activeSrc = images[activeIndex];
  const showThumbs = images.length > 1;

  return (
    <div className={styles.gallery}>
      <div id={panelId} role={showThumbs ? "tabpanel" : undefined} aria-labelledby={showThumbs ? `${galleryId}-tab-${activeIndex}` : undefined}>
      <ProductImageZoom
        key={activeSrc}
        src={activeSrc}
        alt={showThumbs ? `${alt} — image ${activeIndex + 1} of ${images.length}` : alt}
        tag={tag && activeIndex === 0 ? tag : null}
      />

      </div>

      {showThumbs ? (
        <div className={styles.thumbRow} role="tablist" aria-label="Product images">
          {images.map((src, index) => {
            const selected = index === activeIndex;
            return (
              <button
                key={src}
                type="button"
                role="tab"
                id={`${galleryId}-tab-${index}`}
                aria-controls={panelId}
                tabIndex={selected ? 0 : -1}
                onKeyDown={(event) => onTabKey(event, index)}
                aria-selected={selected}
                aria-label={`View image ${index + 1} of ${images.length}`}
                className={`${styles.thumb} ${selected ? styles.thumbActive : ''}`}
                onClick={() => setActiveIndex(index)}
              >
                <Image src={src} alt="" fill className={styles.thumbImage} sizes="88px" />
              </button>
            );
          })}
        </div>
      ) : null}
    </div>
  );
}
