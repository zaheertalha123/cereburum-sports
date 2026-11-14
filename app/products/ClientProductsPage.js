import Link from 'next/link';
import Image from 'next/image';
import { productFilterGroups } from '@/data/products';
import PageHero from '@/components/PageHero';
import styles from './products.module.css';

const heroPhotos = [
  { src: '/images/product_hero/product_hero_01.webp', alt: 'White square-mesh sports net on a dark background', position: 'center' },
  { src: '/images/product_hero/product_hero_02.webp', alt: 'Close-up of a knotted diamond-mesh net', position: 'center' },
  { src: '/images/product_hero/product_hero_03.webp', alt: 'Fine square-mesh net with knotted intersections', position: 'center' },
  { src: '/images/product_hero/product_hero_04.webp', alt: 'Thick braided netting with square openings', position: 'center' },
  { src: '/images/product_hero/product_hero_05.webp', alt: 'Close-up of a thick white net with evenly spaced square openings', position: 'center' },
];

function filterHref(value) {
  if (!value || value === 'All') return '/products';
  return `/products?filter=${encodeURIComponent(value)}`;
}

export default function ClientProductsPage({ products, breadcrumbItems, activeFilter = 'All' }) {
  const filteredProducts =
    activeFilter === 'All'
      ? products
      : products.filter((product) => product.filterGroup === activeFilter);

  return (
    <>
      <PageHero
        title="Sports nets & equipment"
        description="Cricket practice nets, goal nets and custom barriers. Find the right material and mesh for your ground, court or rooftop."
        photos={heroPhotos}
        breadcrumbItems={breadcrumbItems}
      >
        <ul className={styles.filterRow} aria-label="Product categories">
          {productFilterGroups.map((opt) => (
            <li key={opt}>
              <Link
                scroll={false}
                href={filterHref(opt)}
                className={`${styles.filterPill} ${opt === activeFilter ? styles.filterActive : ''}`}
                aria-current={opt === activeFilter ? 'page' : undefined}
              >
                {opt}
              </Link>
            </li>
          ))}
        </ul>
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
                  style={{ '--reveal-delay': `${(i % 3) * 50}ms` }}
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
