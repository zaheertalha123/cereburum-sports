'use client';

import { useState } from 'react';
import Image from 'next/image';
import styles from './products.module.css';


export default function ClientProductsPage({ categories }) {
  // Adding synthetic filter options based on product types
  const filterOptions = ['All', 'Cricket', 'Football', 'Hardware', 'Custom'];
  const [activeFilter, setActiveFilter] = useState('All');

  const filteredCategories = activeFilter === 'All'
    ? categories
    : categories.filter(cat => cat.filterGroup === activeFilter);

  return (
    <>
      <section className={styles.pageHeader} aria-label="Products page header">
        <div className={styles.pageHeaderBg} aria-hidden="true">
          <div className={styles.pageHeaderGrad} />
          <div className={styles.pageHeaderGrid} />
        </div>
        <div className={`container ${styles.pageHeaderContent}`}>
          <span className="section-label animate-fade-in">Our Products</span>
          <h1 className={`display-lg ${styles.pageTitle} animate-fade-in-up`}>
            Sports Netting &<br />
            <span className="text-sand">Equipment Range</span>
          </h1>
          <div className="divider divider-center" style={{ margin: '1.25rem auto 1.75rem' }} />
          <p className={`body-lg ${styles.pageDesc} animate-fade-in`}>
            From perimeter barrier systems to specialized court nets — we carry the full spectrum
            of sports netting solutions for every facility need.
          </p>

          <div className={styles.filterRow} role="list" aria-label="Product categories">
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

      <section className={`section-pad ${styles.productsSection}`} aria-label="Products list">
        <div className="container">
          <div className={styles.productsGrid}>
            {filteredCategories.map((cat, i) => (
              <article
                key={cat.id}
                id={cat.id}
                className={`${styles.productCard} reveal`}
                style={{ transitionDelay: `${(i % 3) * 0.1}s` }}
                aria-label={cat.title}
              >
                {/* Visual Area for Product */}
                <div className={styles.productVisual}>
                  {cat.image ? (
                    <Image
                      src={cat.image}
                      alt={cat.title}
                      fill
                      className={styles.productImage}
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 25vw"
                    />
                  ) : (
                    <div className={styles.placeholderVisual}>
                      <span className={styles.placeholderText}>Image Coming Soon</span>
                    </div>
                  )}
                </div>

                {/* Card header */}
                <div className={styles.cardHeader}>
                  <div className={styles.cardHeaderLeft}>
                    <div>
                      <p className={`label ${styles.cardSubtitle}`}>{cat.subtitle}</p>
                      <h2 className={`heading-lg ${styles.cardTitle}`}>{cat.title}</h2>
                    </div>
                  </div>
                  {cat.tag && (
                    <span className={`${styles.cardTag} ${styles[`tag-${cat.tagColor}`]}`}>
                      {cat.tag}
                    </span>
                  )}
                </div>

                <p className={`body-md ${styles.cardDesc}`}>{cat.desc}</p>

                {/* Features */}
                <ul className={styles.featureList} role="list" aria-label={`${cat.title} features`}>
                  {cat.features.slice(0, 4).map((f) => (
                    <li key={f} className={styles.featureItem}>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className={styles.featureCheck} aria-hidden="true">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      {f}
                    </li>
                  ))}
                </ul>

                {/* Specs */}
                <div className={styles.specsGrid} role="table" aria-label={`${cat.title} specifications`}>
                  {cat.specs.slice(0, 4).map(({ label, value }) => (
                    <div key={label} className={styles.specItem} role="row">
                      <span className={`label ${styles.specLabel}`} role="rowheader">{label}</span>
                      <span className={`body-sm ${styles.specValue}`} role="cell">{value}</span>
                    </div>
                  ))}
                </div>

                {/* CTA */}
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
