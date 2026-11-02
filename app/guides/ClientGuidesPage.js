import Link from 'next/link';
import Image from 'next/image';
import { getGuideCover, getGuideCoverAlt } from '@/data/guides';
import Breadcrumbs from '@/components/Breadcrumbs';
import styles from './guides.module.css';

const ALL_FILTER = 'all';

function filterHref(value) {
  if (!value || value === ALL_FILTER) return '/guides';
  return `/guides?filter=${encodeURIComponent(value)}`;
}

export default function ClientGuidesPage({ guides, categories, breadcrumbItems, activeFilter = ALL_FILTER }) {
  const filtered =
    activeFilter === ALL_FILTER
      ? guides
      : guides.filter((guide) => guide.category === activeFilter);

  const activeCategory = categories.find((category) => category.id === activeFilter);

  return (
    <>
      <section className={styles.pageHeader} aria-label="Guides page header">
        <div className={styles.headerBg} aria-hidden="true">
          <div className={styles.headerGrad} />
          <div className={styles.headerGrid} />
        </div>
        <div className={`container ${styles.headerContent}`}>
          {breadcrumbItems?.length ? <Breadcrumbs items={breadcrumbItems} /> : null}
          <span className="section-label animate-fade-in">Knowledge Base</span>
          <h1 className={`display-lg ${styles.pageTitle} animate-fade-in-up`}>
            Installation &amp;
            <br />
            <span className="text-sand">Setup Guides</span>
          </h1>
          <div
            className="divider divider-center"
            style={{ margin: '1.25rem auto 1.75rem' }}
          />
          <p className={`body-lg ${styles.pageDesc} animate-fade-in`}>
            Step-by-step installation guides for sports netting enclosures,
            corner doors, and facility setup — written from real install jobs
            across Pakistan.
          </p>

          {categories.length > 1 && (
            <ul className={styles.filterRow} aria-label="Guide categories">
              {categories.map((category) => (
                <li key={category.id}>
                  <Link
                    href={filterHref(category.id)}
                    className={`${styles.filterPill} ${category.id === activeFilter ? styles.filterActive : ''}`}
                    aria-current={category.id === activeFilter ? 'page' : undefined}
                  >
                    {category.label}
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
      </section>

      <section
        className={`section-pad ${styles.guidesSection}`}
        aria-label="Guides list"
      >
        <div className="container">
          {filtered.length === 0 ? (
            <div className={styles.emptyState}>
              <p className={`body-lg ${styles.emptyTitle}`}>
                No guides in {activeCategory?.label ?? 'this category'} yet.
              </p>
              <p className={`body-sm ${styles.emptyDesc}`}>
                New guides are added regularly — browse all guides or check back soon.
              </p>
              <Link href="/guides" className={styles.emptyAction}>
                View all guides
              </Link>
            </div>
          ) : (
            <div className={styles.guidesGrid}>
              {filtered.map((guide, i) => (
                <Link
                  key={guide.id}
                  href={`/guides/${guide.id}`}
                  className={`${styles.guideCardLink} reveal`}
                  style={{ transitionDelay: `${(i % 3) * 0.1}s` }}
                  aria-label={`View guide: ${guide.title}`}
                >
                  <article className={styles.guideCard}>
                    <div className={styles.guideVisual}>
                      {getGuideCover(guide) ? (
                        <Image
                          src={getGuideCover(guide)}
                          alt={getGuideCoverAlt(guide)}
                          fill
                          className={styles.guideImage}
                          sizes="(max-width: 768px) 100vw, 50vw"
                        />
                      ) : (
                        <div className={styles.guideVisualFallback} aria-hidden="true" />
                      )}
                    </div>

                    <div className={styles.cardBody}>
                      <div className={styles.cardMeta}>
                        <span className={styles.categoryBadge}>
                          {guide.categoryLabel || guide.category}
                        </span>
                      </div>
                      <h2 className={`heading-md ${styles.cardTitle}`}>
                        {guide.title}
                      </h2>
                      {guide.desc ? (
                        <p className={`body-sm ${styles.cardDesc}`}>{guide.desc}</p>
                      ) : null}
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
