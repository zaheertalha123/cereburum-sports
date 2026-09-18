'use client';

import { useCallback } from 'react';
import { useSearchParams, useRouter, usePathname } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import styles from './guides.module.css';

const FILTER_PARAM = 'filter';

function resolveFilter(value, categories) {
  return value && categories.includes(value) ? value : 'All';
}

export default function ClientGuidesPage({ guides, categories }) {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const activeFilter = resolveFilter(searchParams.get(FILTER_PARAM), categories);

  const setActiveFilter = useCallback(
    (opt) => {
      const params = new URLSearchParams(searchParams.toString());
      if (opt === 'All') {
        params.delete(FILTER_PARAM);
      } else {
        params.set(FILTER_PARAM, opt);
      }
      const query = params.toString();
      router.replace(query ? `${pathname}?${query}` : pathname, { scroll: false });
    },
    [pathname, router, searchParams],
  );

  const filtered =
    activeFilter === 'All'
      ? guides
      : guides.filter((g) => g.category === activeFilter);

  return (
    <>
      {/* Page Header */}
      <section className={styles.pageHeader} aria-label="Guides page header">
        <div className={styles.headerBg} aria-hidden="true">
          <div className={styles.headerGrad} />
          <div className={styles.headerGrid} />
        </div>
        <div className={`container ${styles.headerContent}`}>
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
            Expert guidance on net installation, ground preparation, and
            lighting — everything you need to build and run a professional
            sports facility.
          </p>

          {/* Filter pills */}
          <div
            className={styles.filterRow}
            role="list"
            aria-label="Guide categories"
          >
            {categories.map((opt) => (
              <button
                key={opt}
                onClick={() => setActiveFilter(opt)}
                className={`${styles.filterPill} ${opt === activeFilter ? styles.filterActive : ''}`}
                role="listitem"
              >
                {opt}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Guides Grid */}
      <section
        className={`section-pad ${styles.guidesSection}`}
        aria-label="Guides list"
      >
        <div className="container">
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
                    <Image
                      src={guide.image}
                      alt={
                        guide.imageAlt ||
                        `${guide.title} - Step by Step Sports Netting Installation Guide | Cereburum Sports`
                      }
                      fill
                      className={styles.guideImage}
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>

                  <div className={styles.cardBody}>
                    <div className={styles.cardMeta}>
                      <span className={styles.categoryBadge}>
                        {guide.category}
                      </span>
                    </div>
                    <h2 className={`heading-md ${styles.cardTitle}`}>
                      {guide.title}
                    </h2>
                    <p className={`body-sm ${styles.cardDesc}`}>{guide.desc}</p>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
