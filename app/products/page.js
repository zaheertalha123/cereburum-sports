import { Suspense } from 'react';
import ClientProductsPage from './ClientProductsPage';
import { products } from '@/data/products';
import { absoluteUrl, absoluteMediaUrl } from '@/lib/siteUrl';
import { breadcrumbJsonLd } from '@/components/Breadcrumbs';

const productsUrl = absoluteUrl('/products');
const breadcrumbItems = [
  { name: 'Home', href: '/' },
  { name: 'Products', href: '/products' },
];

export const metadata = {
  title: 'Sports Nets Catalog & Netting Solutions in Pakistan',
  description:
    'Explore high-durability cricket ground nets, football goal netting, rooftop practice cages, and court nets. Direct manufacturer supply and installation across Pakistan.',
  alternates: {
    canonical: productsUrl,
  },
  openGraph: {
    type: 'website',
    locale: 'en_PK',
    url: productsUrl,
    siteName: 'Cereburum Sports',
    title: 'Sports Nets Catalog & Netting Solutions in Pakistan | Cereburum Sports',
    description:
      'Explore high-durability cricket ground nets, football goal netting, rooftop practice cages, and court nets. Direct manufacturer supply and installation across Pakistan.',
    images: [
      {
        url: '/images/home/1.jpg',
        width: 1200,
        height: 630,
        alt: 'Sports Nets Catalog and Custom Netting Solutions - Cereburum Sports',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sports Nets Catalog & Netting Solutions in Pakistan | Cereburum Sports',
    description:
      'Explore high-durability cricket ground nets, football goal netting, rooftop practice cages, and court nets. Direct manufacturer supply and installation across Pakistan.',
    images: ['/images/home/1.jpg'],
  },
};

export default function ProductsPage() {
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
      <Suspense fallback={null}>
        <ClientProductsPage products={products} breadcrumbItems={breadcrumbItems} />
      </Suspense>
    </>
  );
}
