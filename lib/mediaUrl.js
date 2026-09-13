/**
 * Resolve a site media path to a full URL.
 * Local paths like `/images/guides/foo.jpg` become
 * `${NEXT_PUBLIC_MEDIA_URL}/images/guides/foo.jpg` when configured.
 */
export function mediaUrl(path) {
  if (!path) return path;
  if (/^https?:\/\//i.test(path)) return path;

  const base = process.env.NEXT_PUBLIC_MEDIA_URL?.trim().replace(/\/$/, '');
  const normalized = path.startsWith('/') ? path : `/${path}`;

  return base ? `${base}${normalized}` : normalized;
}
