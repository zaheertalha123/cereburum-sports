import { products } from '@/data/products';
import { absoluteUrl } from '@/lib/siteUrl';
import { buyerGraph } from '@/lib/buyerSchema';
import BuyerArticle, { CatalogList } from '@/components/BuyerArticle';
import styles from '@/components/buyer.module.css';

function specValue(product, label) {
  return product.specs?.find((spec) => spec.label === label)?.value || '—';
}

function GradeTable() {
  const grades = products.filter((product) => product.filterGroup === 'Cricket');
  return (
    <section className={styles.section}>
      <h2>Published grades</h2>
      <div className={styles.tableWrap}>
        <table>
          <caption>Gauge, mesh and finish taken from the product pages.</caption>
          <thead>
            <tr>
              <th scope="col">Grade</th>
              <th scope="col">Material</th>
              <th scope="col">Mesh</th>
              <th scope="col">Gauge</th>
              <th scope="col">Weather</th>
            </tr>
          </thead>
          <tbody>
            {grades.map((product) => (
              <tr key={product.id}>
                <th scope="row">{product.title}</th>
                <td>{specValue(product, 'Material')}</td>
                <td>{specValue(product, 'Mesh Size')}</td>
                <td>{specValue(product, 'Gauge')}</td>
                <td>{specValue(product, 'Weather Resistance')}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

export function editorialMetadata(page, path) {
  const url = absoluteUrl(path);
  const socialTitle = `${page.title} | Cereburum Sports`;
  return {
    title: page.title,
    description: page.description,
    alternates: { canonical: url },
    openGraph: {
      type: 'website',
      locale: 'en_PK',
      url,
      siteName: 'Cereburum Sports',
      title: socialTitle,
      description: page.description,
    },
    twitter: {
      card: 'summary_large_image',
      title: socialTitle,
      description: page.description,
    },
  };
}

export default function EditorialPage({ page, breadcrumbs, catalogProducts }) {
  const url = absoluteUrl(breadcrumbs[breadcrumbs.length - 1].href);
  const jsonLd = buyerGraph({
    url,
    name: page.h1,
    description: page.description,
    breadcrumbs,
    faqs: page.faqs,
    serviceName: page.serviceName,
  });

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <BuyerArticle
        breadcrumbItems={breadcrumbs}
        kicker={page.kicker}
        title={page.h1}
        lede={page.lede}
        sections={page.sections}
        faqs={page.faqs}
        priceRows={page.priceRows}
      >
        {page.showGradeTable ? <GradeTable /> : null}
        {catalogProducts?.length ? (
          <section className={styles.catalogWrap} aria-label="Products">
            <h2>Grades in this range</h2>
            <CatalogList products={catalogProducts} />
          </section>
        ) : null}
      </BuyerArticle>
    </>
  );
}
