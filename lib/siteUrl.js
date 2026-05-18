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
