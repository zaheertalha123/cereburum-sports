import { mediaUrl } from '@/lib/mediaUrl';

/**
 * Canonical origin for metadata and sitemap `<loc>` URLs.
 * Must match the host that serves your pages (same host as your sitemap in Search Console).
 * Override any time with NEXT_PUBLIC_SITE_URL (e.g. https://cereburumsports.com).
 */
export function getSiteUrl() {
  const raw =
    process.env.NEXT_PUBLIC_SITE_URL?.trim() ||
    'https://www.cereburumsports.site';
  return raw.replace(/\/$/, '');
}

/** Build an absolute URL from a path (or pass through an already-absolute URL). */
export function absoluteUrl(path = '') {
  if (!path) return getSiteUrl();
  if (/^https?:\/\//i.test(path)) return path;
  const normalized = path.startsWith('/') ? path : `/${path}`;
  return `${getSiteUrl()}${normalized}`;
}

/**
 * Absolute URL for schema/OG images.
 * Resolves NEXT_PUBLIC_MEDIA_URL first, then the site origin — safe whether
 * media is local or on a CDN.
 */
export function absoluteMediaUrl(path, fallback = '/images/home/1.jpg') {
  return absoluteUrl(mediaUrl(path || fallback));
}
