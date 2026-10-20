'use client';

import { useState } from 'react';
import Image from 'next/image';
import ProductImageZoom from './ProductImageZoom';
import styles from './product-detail.module.css';

export default function ProductImageGallery({ images, alt, tag }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeSrc = images[activeIndex];
  const showThumbs = images.length > 1;

  return (
    <div className={styles.gallery}>
      <ProductImageZoom
        key={activeSrc}
        src={activeSrc}
        alt={showThumbs ? `${alt} — image ${activeIndex + 1} of ${images.length}` : alt}
        tag={tag && activeIndex === 0 ? tag : null}
      />

      {showThumbs ? (
        <div className={styles.thumbRow} role="tablist" aria-label="Product images">
          {images.map((src, index) => {
            const selected = index === activeIndex;
            return (
              <button
                key={src}
                type="button"
                role="tab"
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
