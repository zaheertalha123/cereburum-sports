'use client';

import { useCallback } from 'react';
import Link from 'next/link';
import { useSearchParams, useRouter, usePathname } from 'next/navigation';
import Image from 'next/image';
import { productFilterGroups } from '@/data/products';
import styles from './products.module.css';

const FILTER_PARAM = 'filter';

function resolveFilter(value) {
  return productFilterGroups.includes(value) ? value : 'All';
}

export default function ClientProductsPage({ products }) {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const activeFilter = resolveFilter(searchParams.get(FILTER_PARAM));

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

  const filteredProducts =
    activeFilter === 'All'
      ? products
      : products.filter((product) => product.filterGroup === activeFilter);

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
            {productFilterGroups.map((opt) => (
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
            {filteredProducts.map((product, i) => (
              <Link
                key={product.id}
                href={`/products/${product.id}`}
                className={styles.productCardLink}
                aria-label={`View ${product.title} details`}
              >
                <article
                  id={product.id}
                  className={`${styles.productCard} reveal`}
                  style={{ transitionDelay: `${(i % 3) * 0.1}s` }}
                >
                  <div className={styles.productVisual}>
                    {product.image ? (
                      <Image
                        src={product.image}
                        alt={
                          product.imageAlt ||
                          `${product.title} - ${product.subtitle || product.filterGroup || 'Sports Netting'} Manufacturer Pakistan | Cereburum Sports`
                        }
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

                  <div className={styles.cardHeader}>
                    <div className={styles.cardHeaderLeft}>
                      <div>
                        <p className={`label ${styles.cardSubtitle}`}>{product.subtitle}</p>
                        <h2 className={`heading-lg ${styles.cardTitle}`}>{product.title}</h2>
                      </div>
                    </div>
                    {product.tag ? (
                      <span className={`${styles.cardTag} ${styles[`tag-${product.tagColor}`]}`}>
                        {product.tag}
                      </span>
                    ) : null}
                  </div>

                  <div className={styles.specsGrid} role="table" aria-label={`${product.title} specifications`}>
                    {product.specs.slice(0, 4).map(({ label, value }) => (
                      <div key={label} className={styles.specItem} role="row">
                        <span className={`label ${styles.specLabel}`} role="rowheader">
                          {label}
                        </span>
                        <span className={`body-sm ${styles.specValue}`} role="cell">
                          {value}
                        </span>
                      </div>
                    ))}
                  </div>

                  <span className={styles.viewDetails}>View details →</span>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
