import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { products, getProductById } from '@/data/products';
import ProductImageZoom from './ProductImageZoom';
import { productInquiryMessage, whatsAppUrl } from '@/lib/whatsapp';
import styles from './product-detail.module.css';

export async function generateStaticParams() {
  return products.map((product) => ({ id: product.id }));
}

export async function generateMetadata({ params }) {
  const { id } = await params;
  const product = getProductById(id);

  if (!product) {
    return { title: 'Product Not Found' };
  }

  return {
    title: `${product.title} — ${product.subtitle}`,
    description: product.desc,
    openGraph: {
      title: `${product.title} — Cereburum Sports`,
      description: product.desc,
      images: product.image ? [{ url: product.image, alt: product.imageAlt || product.title }] : [],
    },
  };
}

function getRelatedProducts(product, limit = 3) {
  const others = products.filter((item) => item.id !== product.id);
  const sameGroup = others.filter((item) => item.filterGroup === product.filterGroup);

  if (sameGroup.length >= limit) {
    return { items: sameGroup.slice(0, limit), mixed: false };
  }

  const picked = new Set(sameGroup.map((item) => item.id));
  const rest = others.filter((item) => !picked.has(item.id));
  const featured = rest.filter((item) => item.tag);
  const filler = [...featured, ...rest.filter((item) => !item.tag)].slice(0, limit - sameGroup.length);

  return { items: [...sameGroup, ...filler], mixed: filler.length > 0 };
}

export default async function ProductDetailPage({ params }) {
  const { id } = await params;
  const product = getProductById(id);

  if (!product) {
    notFound();
  }

  const { items: related, mixed: relatedIsMixed } = getRelatedProducts(product);

  const whatsappUrl = whatsAppUrl(productInquiryMessage(product));
  const productsFilterHref =
    product.filterGroup && product.filterGroup !== 'Custom'
      ? `/products?filter=${encodeURIComponent(product.filterGroup)}`
      : '/products';

  return (
    <div className={styles.page}>
      <section className={styles.hero} aria-label={`${product.title} product details`}>
        <div className={styles.heroBg} aria-hidden="true">
          <div className={styles.heroGrad} />
          <div className={styles.heroGrid} />
        </div>

        <div className="container">
          <nav className={styles.crumb} aria-label="Breadcrumb">
            <Link href="/products">Products</Link>
            <span aria-hidden="true">/</span>
            <Link href={productsFilterHref}>{product.filterGroup}</Link>
            <span aria-hidden="true">/</span>
            <span aria-current="page">{product.title}</span>
          </nav>

          <div className={styles.layout}>
            {product.image ? (
              <ProductImageZoom
                src={product.image}
                alt={
                  product.imageAlt ||
                  `${product.title} - ${product.subtitle} - Sports Net Manufacturer Pakistan | Cereburum Sports`
                }
                tag={product.tag}
              />
            ) : null}

            <div className={styles.contentPanel}>
              <div className={styles.headingBlock}>
                <p className={styles.eyebrow}>{product.subtitle}</p>
                <h1 className={`display-md ${styles.title}`}>{product.title}</h1>
                <p className={styles.desc}>{product.desc}</p>
              </div>

              <div className={styles.specsGrid} role="table" aria-label={`${product.title} specifications`}>
                {product.specs.map(({ label, value }) => (
                  <div key={label} className={styles.specItem} role="row">
                    <span className={styles.specLabel} role="rowheader">
                      {label}
                    </span>
                    <span className={styles.specValue} role="cell">
                      {value}
                    </span>
                  </div>
                ))}
              </div>

              <div className={styles.section}>
                <h2 className={styles.sectionTitle}>Key Features</h2>
                <ul className={styles.featureList} role="list">
                  {product.features.map((feature) => (
                    <li key={feature} className={styles.featureItem}>
                      <span className={styles.featureCheck} aria-hidden="true">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                      </span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div className={styles.enquiry}>
                <div className={styles.enquiryCopy}>
                  <p className={styles.enquiryTitle}>Need this net for your ground?</p>
                  <p className={styles.enquiryText}>
                    Tell us the size, color, and location. We manufacture in Sialkot and deliver across Pakistan.
                  </p>
                </div>
                <div className={styles.ctaRow}>
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-whatsapp btn-lg"
                    aria-label={`Enquire about ${product.title} on WhatsApp`}
                  >
                    Enquire on WhatsApp
                  </a>
                  <Link
                    href={`/contact?product=${encodeURIComponent(product.id)}&service=custom-net#email-form-heading`}
                    className="btn btn-outline btn-lg"
                  >
                    Request a Quote
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {related.length > 0 ? (
        <section className={styles.relatedSection} aria-label="Related products">
          <div className="container">
            <div className={styles.relatedHeader}>
              <div>
                <span className="section-label">
                  {relatedIsMixed ? 'From our range' : `More in ${product.filterGroup}`}
                </span>
                <h2 className={`heading-lg ${styles.relatedTitle}`}>
                  {relatedIsMixed ? 'You May Also Like' : 'Related Products'}
                </h2>
              </div>
              <Link href={relatedIsMixed ? '/products' : productsFilterHref} className={styles.relatedLink}>
                {relatedIsMixed ? 'View all products' : `View all ${product.filterGroup}`} →
              </Link>
            </div>

            <div className={styles.relatedGrid}>
              {related.map((item) => (
                <Link key={item.id} href={`/products/${item.id}`} className={styles.relatedCard}>
                  <div className={styles.relatedVisual}>
                    {item.image ? (
                      <Image
                        src={item.image}
                        alt={item.imageAlt || item.title}
                        fill
                        className={styles.relatedImage}
                        sizes="(max-width: 768px) 100vw, 33vw"
                      />
                    ) : null}
                  </div>
                  <div className={styles.relatedBody}>
                    <span className={styles.relatedSubtitle}>{item.subtitle}</span>
                    <span className={styles.relatedName}>{item.title}</span>
                    <span className={styles.relatedCta}>View product →</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      ) : null}
    </div>
  );
}
