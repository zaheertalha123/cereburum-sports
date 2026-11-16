import { preload } from 'react-dom';

const WIDTHS = [750, 1200, 1600];

export function heroSrcSet(src) {
  return WIDTHS.map((width) => `${src.replace(/\.webp$/, `-${width}.webp`)} ${width}w`).join(', ');
}

export function heroFallbackSrc(src, responsive) {
  if (!responsive) return src;
  return src.replace(/\.webp$/, '-750.webp');
}

/** Discover the first hero frame from the server so it is not waiting on a CSS chunk. */
export function preloadHeroImage(photo) {
  if (!photo?.src) return;
  const srcSet = photo.responsive ? heroSrcSet(photo.src) : undefined;
  preload(heroFallbackSrc(photo.src, photo.responsive), {
    as: 'image',
    fetchPriority: 'high',
    ...(srcSet ? { imageSrcSet: srcSet, imageSizes: '100vw' } : {}),
  });
}
