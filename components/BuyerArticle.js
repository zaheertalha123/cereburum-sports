import Link from 'next/link';
import Image from 'next/image';
import Breadcrumbs from '@/components/Breadcrumbs';
import { PriceTable } from '@/components/PriceNote';
import styles from './buyer.module.css';

export default function BuyerArticle({
  breadcrumbItems,
  kicker,
  title,
  lede = [],
  sections = [],
  faqs = [],
  priceRows = [],
  children,
}) {
  return (
    <article className={styles.page}>
      <header className={styles.hero}>
        <div className="container">
          <Breadcrumbs items={breadcrumbItems} />
          {kicker ? <p className="section-label">{kicker}</p> : null}
          <h1 className={styles.title}>{title}</h1>
          {lede.map((paragraph) => (
            <p key={paragraph} className={styles.lede}>{paragraph}</p>
          ))}
        </div>
      </header>
      <div className={`container ${styles.body}`}>
        {sections.map((section) => (
          <section key={section.heading || section.title} className={styles.section}>
            <h2>{section.heading || section.title}</h2>
            {(section.paragraphs || (section.body ? [section.body] : [])).map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
            {section.links?.length ? (
              <ul className={styles.links}>
                {section.links.map((link) => (
                  <li key={link.href}><Link href={link.href}>{link.label}</Link></li>
                ))}
              </ul>
            ) : null}
          </section>
        ))}
        {priceRows.length ? <div className={styles.tableWrap}><PriceTable rows={priceRows} /></div> : null}
        {children}
        {faqs.length ? (
          <section className={styles.faq} aria-labelledby="buyer-faq-heading">
            <h2 id="buyer-faq-heading">Questions</h2>
            <dl>
              {faqs.map((faq) => (
                <div key={faq.q}>
                  <dt>{faq.q}</dt>
                  <dd>
                    <p>{faq.a}</p>
                    {faq.links?.length ? (
                      <ul className={styles.links}>
                        {faq.links.map((link) => (
                          <li key={link.href}><Link href={link.href}>{link.label}</Link></li>
                        ))}
                      </ul>
                    ) : null}
                  </dd>
                </div>
              ))}
            </dl>
          </section>
        ) : null}
      </div>
    </article>
  );
}

export function CatalogList({ products }) {
  return (
    <ul className={styles.catalog}>
      {products.map((product) => {
        const dimensions = product.specs?.find((spec) => spec.label === 'Dimensions')?.value;
        const imageAlt =
          product.imageAlt ||
          `${product.title} - ${product.subtitle || product.filterGroup || 'Sports Netting'} Manufacturer Pakistan | Cereburum Sports`;
        return (
          <li key={product.id}>
            <Link href={`/products/${product.id}`} className={styles.card}>
              {product.image ? (
                <span className={styles.cardImage}>
                  <Image
                    src={product.image}
                    alt={imageAlt}
                    fill
                    sizes="(max-width: 599px) 100vw, (max-width: 1200px) 50vw, 280px"
                    className={styles.cardPhoto}
                  />
                </span>
              ) : null}
              <strong>{product.title}</strong>
              <span>{product.subtitle}</span>
              {dimensions ? <span>{dimensions}</span> : null}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
