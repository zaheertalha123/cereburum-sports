import ClientProductsPage, { productHeroPhotos } from './ClientProductsPage';
import { preloadHeroImage } from '@/lib/heroImage';
import { productFilterGroups, products } from '@/data/products';
import { absoluteUrl, absoluteMediaUrl } from '@/lib/siteUrl';
import { breadcrumbJsonLd } from '@/components/Breadcrumbs';
const filterCanonical = {
  Cricket: '/products/cricket-nets',
  Football: '/products/football-goal-nets',
  Badminton: '/products/court-nets',
  Futsal: '/products/futsal-nets',
};

const productsUrl = absoluteUrl('/products');
const breadcrumbItems = [
  { name: 'Home', href: '/' },
  { name: 'Products', href: '/products' },
];

export async function generateMetadata({ searchParams }) {
  const params = await searchParams;
  const activeFilter = resolveFilter(params?.filter);
  const canonicalPath = filterCanonical[activeFilter] || '/products';
  const url = absoluteUrl(canonicalPath);
  const description = 'Standard sizes and custom sizes of cricket, football, futsal, badminton and hockey nets, manufactured in Sialkot and installed across Pakistan.';
  return {
  title: 'Sports Nets Catalog & Netting Solutions in Pakistan',
  description,
  alternates: {
    canonical: url,
  },
  openGraph: {
    type: 'website',
    locale: 'en_PK',
    url,
    siteName: 'Cereburum Sports',
    title: 'Sports Nets Catalog & Netting Solutions in Pakistan | Cereburum Sports',
    description,
    images: [
      {
        url: '/images/home/1.jpg',
        width: 600,
        height: 600,
        alt: 'Sports Nets Catalog and Custom Netting Solutions - Cereburum Sports',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sports Nets Catalog & Netting Solutions in Pakistan | Cereburum Sports',
    description,
    images: ['/images/home/1.jpg'],
  },
  };
}

function resolveFilter(value) {
  const filter = Array.isArray(value) ? value[0] : value;
  return productFilterGroups.includes(filter) ? filter : 'All';
}

export default async function ProductsPage({ searchParams }) {
  preloadHeroImage(productHeroPhotos[0]);
  const params = await searchParams;
  const activeFilter = resolveFilter(params?.filter);
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      breadcrumbJsonLd(breadcrumbItems),
      {
        '@type': 'ItemList',
        name: 'Sports Net Catalog - Cereburum Sports',
        description: 'High-durability sports nets, cricket net installation, and barrier netting in Pakistan.',
        url: productsUrl,
        numberOfItems: products.length,
        itemListElement: products.map((product, index) => {
          const productUrl = absoluteUrl(`/products/${product.id}`);
          return {
            '@type': 'ListItem',
            position: index + 1,
            item: {
              '@type': 'Product',
              '@id': productUrl,
              url: productUrl,
              name: product.title || product.name,
              description: product.desc || product.description,
              image: absoluteMediaUrl(product.image),
              brand: {
                '@type': 'Brand',
                name: 'Cereburum Sports',
              },
            },
          };
        }),
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ClientProductsPage
        products={products}
        breadcrumbItems={breadcrumbItems}
        activeFilter={activeFilter}
      />
    </>
  );
}
