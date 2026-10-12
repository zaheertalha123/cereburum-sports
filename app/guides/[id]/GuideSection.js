import ClientGallery from '@/app/works/[id]/ClientGallery';
import { toGuideMedia } from '@/data/guides';
import GuideSteps from './GuideSteps';
import styles from './guide.module.css';

function ItemList({ items, variant }) {
  if (!items?.length) return null;

  if (variant === 'chips') {
    return (
      <ul className={styles.chipRow} role="list">
        {items.map((item) => (
          <li key={item} className={styles.chip}>
            {item}
          </li>
        ))}
      </ul>
    );
  }

  if (variant === 'cards') {
    return (
      <ul className={styles.cardGrid} role="list">
        {items.map((item) => (
          <li key={item} className={styles.infoCard}>
            {item}
          </li>
        ))}
      </ul>
    );
  }

  return (
    <ul className={styles.featureList} role="list">
      {items.map((item) => (
        <li key={item} className={styles.featureItem}>
          <span className={styles.featureCheck} aria-hidden="true">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
              <polyline points="20 6 9 17 4 12" />
            </svg>
          </span>
          {item}
        </li>
      ))}
    </ul>
  );
}

export default function GuideSection({
  id,
  eyebrow,
  title,
  subtitle,
  items,
  steps,
  images,
  itemVariant = 'list',
  tone = 'default',
}) {
  const hasItems = items?.length > 0;
  const hasSteps = steps?.length > 0;
  const hasImages = images?.length > 0;

  if (!hasItems && !hasSteps && !hasImages) return null;

  const split = hasItems && hasImages && !hasSteps && images.length === 1;

  return (
    <section
      id={id}
      className={`${styles.contentSection} ${tone === 'alt' ? styles.contentSectionAlt : ''} ${styles.anchorSection}`}
      aria-label={title}
    >
      <div className="container">
        <header className={`${styles.sectionHeader} reveal`}>
          {eyebrow ? <span className="section-label">{eyebrow}</span> : null}
          <h2 className={`heading-md ${styles.sectionTitle}`}>{title}</h2>
          {subtitle ? <p className={styles.sectionSubtitle}>{subtitle}</p> : null}
        </header>

        <div className={split ? styles.splitLayout : styles.stackLayout}>
          <div className={styles.sectionBody}>
            <ItemList items={items} variant={itemVariant} />
            {hasSteps ? <GuideSteps steps={steps} embedded /> : null}
          </div>

          {hasImages ? (
            <div className={split ? styles.splitMedia : styles.sectionMedia}>
              <ClientGallery media={toGuideMedia(images)} projectTitle={title} compact />
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}
