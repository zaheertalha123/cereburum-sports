import Link from 'next/link';
import Image from 'next/image';
import { productFilterGroups } from '@/data/products';
import PageHero from '@/components/PageHero';
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
      <PageHero
        title="Sports nets & equipment"
        description="Cricket practice nets, goal nets and custom barriers. Find the right material and mesh for your ground, court or rooftop."
        image={products.find((product) => product.id === "cricket-net-36").image}
        imageAlt="Parachute 36 cricket netting manufactured by Cereburum Sports"
        caption="Parachute 36 / Cricket netting"
        breadcrumbItems={breadcrumbItems}
      >
          <ul className={styles.filterRow} aria-label="Product categories">
            {productFilterGroups.map((opt) => (
              <li key={opt}>
                <Link
                  href={filterHref(opt)}
                  className={`${styles.filterPill} ${opt === activeFilter ? styles.filterActive : ''}`}
                  aria-current={opt === activeFilter ? 'page' : undefined}
