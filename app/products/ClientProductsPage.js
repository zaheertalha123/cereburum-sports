'use client';

import { useCallback } from 'react';
import Link from 'next/link';
import { useSearchParams, useRouter, usePathname } from 'next/navigation';
import Image from 'next/image';
import { productFilterGroups } from '@/data/products';
import PageHero from '@/components/PageHero';
import styles from './products.module.css';

const FILTER_PARAM = 'filter';

function resolveFilter(value) {
  return productFilterGroups.includes(value) ? value : 'All';
}

export default function ClientProductsPage({ products, breadcrumbItems }) {
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
      <PageHero
        title="Sports nets & equipment"
        description="Cricket practice nets, goal nets and custom barriers. Find the right material and mesh for your ground, court or rooftop."
        image={products.find((product) => product.id === "cricket-net-36").image}
        imageAlt="Parachute 36 cricket netting manufactured by Cereburum Sports"
        caption="Parachute 36 / Cricket netting"
        breadcrumbItems={breadcrumbItems}
      >
          <div className={styles.filterRow} role="group" aria-label="Product categories">
            {productFilterGroups.map((opt) => (
              <button
                key={opt}
                onClick={() => setActiveFilter(opt)}
                className={`${styles.filterPill} ${opt === activeFilter ? styles.filterActive : ''}`}
                aria-pressed={opt === activeFilter}
              >
                {opt}
              </button>
            ))}
          </div>
      </PageHero>

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
