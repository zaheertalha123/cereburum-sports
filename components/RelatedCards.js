import Link from 'next/link';
import Image from 'next/image';
import styles from './RelatedCards.module.css';

/**
 * @param {{
 *   label?: string,
 *   title: string,
 *   viewAllHref?: string,
 *   viewAllLabel?: string,
 *   items: Array<{
 *     id: string,
 *     href: string,
 *     image?: string,
 *     imageAlt?: string,
 *     eyebrow?: string,
 *     name: string,
 *     cta?: string,
 *   }>,
 *   ariaLabel?: string,
 * }} props
 */
export default function RelatedCards({
  label,
  title,
  viewAllHref,
  viewAllLabel,
  items,
  ariaLabel,
}) {
  if (!items?.length) return null;

  return (
    <section className={styles.relatedSection} aria-label={ariaLabel || title}>
      <div className="container">
        <div className={styles.relatedHeader}>
          <div>
            {label ? <span className="section-label">{label}</span> : null}
            <h2 className={`heading-lg ${styles.relatedTitle}`}>{title}</h2>
          </div>
          {viewAllHref ? (
            <Link href={viewAllHref} className={styles.relatedLink}>
              {viewAllLabel || 'View all'} →
            </Link>
          ) : null}
        </div>

        <div className={styles.relatedGrid}>
          {items.map((item) => (
            <Link key={item.id} href={item.href} className={styles.relatedCard}>
              <div className={styles.relatedVisual}>
                {item.image ? (
                  <Image
                    src={item.image}
                    alt={item.imageAlt || item.name}
                    fill
                    className={styles.relatedImage}
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                ) : null}
              </div>
              <div className={styles.relatedBody}>
                {item.eyebrow ? (
                  <span className={styles.relatedSubtitle}>{item.eyebrow}</span>
                ) : null}
                <span className={styles.relatedName}>{item.name}</span>
                <span className={styles.relatedCta}>{item.cta || 'View →'}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
