import Link from 'next/link';
import Image from 'next/image';
import { getGuideCover, getGuideCoverAlt } from '@/data/guides';
import PageHero from '@/components/PageHero';
import styles from './guides.module.css';

const ALL_FILTER = 'all';

const heroPhotos = [
  { src: '/images/guide_hero/guide_hero_01.webp', alt: 'Steel support frame for a sports netting enclosure', position: 'center 48%' },
  { src: '/images/guide_hero/guide_hero_02.webp', alt: 'Netting and upright support poles around an outdoor practice area', position: 'center 53%' },
  { src: '/images/guide_hero/guide_hero_03.webp', alt: 'Installation crew working beside scaffolding and steel netting supports', position: '64% 53%' },
  { src: '/images/guide_hero/guide_hero_04.webp', alt: 'Sports netting draped from scaffolding during installation', position: '62% 50%' },
  { src: '/images/guide_hero/guide_hero_05.webp', alt: 'Crane lifting an installer to reach overhead netting', position: '60% 50%' },
  { src: '/images/guide_hero/guide_hero_06.webp', alt: 'Close-up of white mesh tied to a perimeter cable', position: 'center 42%' },
  { src: '/images/guide_hero/guide_hero_07.webp', alt: 'Floodlit practice enclosure with a framed netting entrance', position: '65% 53%' },
];

function filterHref(value) {
  if (!value || value === ALL_FILTER) return '/guides';
  return `/guides?filter=${encodeURIComponent(value)}`;
}

export default function ClientGuidesPage({ guides, categories, breadcrumbItems, activeFilter = ALL_FILTER }) {
  const filtered =
    activeFilter === ALL_FILTER
      ? guides
      : guides.filter((g) => g.category === activeFilter);

  const activeCategory = categories.find((category) => category.id === activeFilter);

  return (
    <>
      {/* Page Header */}
      <PageHero
        title="Installation & setup guides"
        description="Plan your space, choose your supports and install your netting. Practical instructions drawn from our work on real sports grounds."
        photos={heroPhotos}
        breadcrumbItems={breadcrumbItems}
      >
        {categories.length > 1 && (
          <ul className={styles.filterRow} aria-label="Guide categories">
            {categories.map((category) => (
              <li key={category.id}>
                <Link
                  scroll={false}
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
      </PageHero>

      {/* Guides Grid */}
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
                style={{ '--reveal-delay': `${(i % 3) * 50}ms` }}
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
