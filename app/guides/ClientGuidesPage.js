'use client';

import { useState } from 'react';
import Image from 'next/image';
import styles from './guides.module.css';

const filterOptions = ['All', 'Installation', 'Making', 'Lights', 'Ground'];

export default function ClientGuidesPage({ guides }) {
  const [activeFilter, setActiveFilter] = useState('All');

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
            {filterOptions.map((opt) => (
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
              <article
                key={guide.id}
                id={guide.id}
                className={`${styles.guideCard} reveal`}
                style={{ transitionDelay: `${(i % 3) * 0.1}s` }}
                aria-label={guide.title}
              >
                {/* Image — displayed inline, not clickable */}
                <div className={styles.guideVisual}>
                  <Image
                    src={guide.image}
                    alt={guide.title}
                    fill
                    className={styles.guideImage}
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>

                {/* Card body */}
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

                  {/* Steps */}
                  <ol
                    className={styles.stepList}
                    aria-label={`${guide.title} steps`}
                  >
                    {guide.steps.map((step, si) => (
                      <li key={si} className={styles.stepItem}>
                        <span
                          className={styles.stepNum}
                          aria-hidden="true"
                        >
                          {si + 1}
                        </span>
                        <span className={styles.stepText}>{step}</span>
                      </li>
                    ))}
                  </ol>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
