'use client';

import Image from 'next/image';
import GalleryMediaPlaceholder from './GalleryMediaPlaceholder';
import { useGalleryMediaLoad } from './useGalleryMediaLoad';
import styles from './GalleryMedia.module.css';

export default function GalleryImage({
  src,
  alt,
  variant = 'inline',
  layout = 'responsive',
  className = '',
  imageStyle,
  sizes,
  width = 800,
  height = 800,
  unoptimized = false,
  loadedSrc,
  onLoad,
}) {
  const { displayUrl } = useGalleryMediaLoad(loadedSrc ? null : src);
  const imageUrl = loadedSrc || displayUrl;
  const ready = Boolean(imageUrl);
  const useBlob = imageUrl?.startsWith('blob:');

  const shellClass =
    layout === 'cover'
      ? `${styles.mediaShell} ${styles.mediaShellCover}`
      : styles.mediaShell;

  return (
    <div className={shellClass}>
      {!ready ? (
        <GalleryMediaPlaceholder
          variant={variant}
          cover={layout === 'cover'}
          label="Loading image"
        />
      ) : null}

      {ready ? (
        layout === 'cover' ? (
          <Image
            src={imageUrl}
            alt={alt}
            fill
            className={className}
            sizes={sizes}
            unoptimized={unoptimized || useBlob || Boolean(loadedSrc)}
            onLoad={onLoad}
          />
        ) : (
          <Image
            src={imageUrl}
            alt={alt}
            width={width}
            height={height}
            className={className || styles.mediaReady}
            style={
              imageStyle ||
              (variant === 'lightbox'
                ? { width: 'auto', height: '100%', maxHeight: '85vh', maxWidth: '85vw', objectFit: 'contain' }
                : { width: '100%', height: 'auto', display: 'block' })
            }
            sizes={sizes}
            unoptimized={unoptimized || useBlob || Boolean(loadedSrc)}
            onLoad={onLoad}
          />
        )
      ) : null}
    </div>
  );
}
