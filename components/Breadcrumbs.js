import Link from 'next/link';
import { absoluteUrl } from '@/lib/siteUrl';
import styles from './Breadcrumbs.module.css';

/**
 * @param {{ items: Array<{ name: string, href?: string }> }} props
 * Prefer an `href` on every item (including the current page) for schema.
 * The last crumb is rendered as the current page, not a link.
 */
export function breadcrumbJsonLd(items) {
  return {
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      ...(item.href ? { item: absoluteUrl(item.href) } : {}),
    })),
  };
}

export default function Breadcrumbs({ items, className = '' }) {
  if (!items?.length) return null;

  return (
    <nav className={`${styles.crumb} ${className}`.trim()} aria-label="Breadcrumb">
      {items.map((item, index) => {
        const isLast = index === items.length - 1;
        return (
          <span key={`${item.name}-${index}`} className={styles.crumbItem}>
            {index > 0 ? <span className={styles.sep} aria-hidden="true">/</span> : null}
            {isLast || !item.href ? (
              <span aria-current={isLast ? 'page' : undefined}>{item.name}</span>
            ) : (
              <Link href={item.href}>{item.name}</Link>
            )}
          </span>
        );
      })}
    </nav>
  );
}
