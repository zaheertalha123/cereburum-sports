import Link from 'next/link';
import Image from 'next/image';
import { productFilterGroups } from '@/data/products';
import Breadcrumbs from '@/components/Breadcrumbs';
import styles from './products.module.css';

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
      <section className={styles.pageHeader} aria-label="Products page header">
        <div className={styles.pageHeaderBg} aria-hidden="true">
          <div className={styles.pageHeaderGrad} />
          <div className={styles.pageHeaderGrid} />
        </div>
        <div className={`container ${styles.pageHeaderContent}`}>
          {breadcrumbItems?.length ? <Breadcrumbs items={breadcrumbItems} /> : null}
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

          <ul className={styles.filterRow} aria-label="Product categories">
            {productFilterGroups.map((opt) => (
              <li key={opt}>
                <Link
                  href={filterHref(opt)}
                  className={`${styles.filterPill} ${opt === activeFilter ? styles.filterActive : ''}`}
                  aria-current={opt === activeFilter ? 'page' : undefined}
                >
                  {opt}
                </Link>
              </li>
