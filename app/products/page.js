import { Suspense } from 'react';
import ClientProductsPage from './ClientProductsPage';
import { products } from '@/data/products';

export const metadata = {
  title: 'Sports Nets Catalog & Netting Solutions in Pakistan',
  description:
    'Explore high-durability cricket ground nets, football goal netting, rooftop practice cages, and court nets. Direct manufacturer supply and installation across Pakistan.',
  alternates: {
    canonical: 'https://www.cereburumsports.site/products',
  },
  openGraph: {
    type: 'website',
    locale: 'en_PK',
    url: 'https://www.cereburumsports.site/products',
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
    '@type': 'ItemList',
    name: 'Sports Net Catalog - Cereburum Sports',
    description: 'High-durability sports nets, cricket net installation, and barrier netting in Pakistan.',
    url: 'https://www.cereburumsports.site/products',
    numberOfItems: products.length,
    itemListElement: products.map((product, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      item: {
        '@type': 'Product',
        '@id': `https://www.cereburumsports.site/products#${product.id}`,
        name: product.title || product.name,
        description: product.desc || product.description,
        image: product.image ? `https://www.cereburumsports.site${product.image}` : 'https://www.cereburumsports.site/images/home/1.jpg',
        brand: {
          '@type': 'Brand',
          name: 'Cereburum Sports',
        },
        offers: {
          '@type': 'Offer',
          priceCurrency: 'PKR',
          availability: 'https://schema.org/InStock',
          seller: {
            '@type': 'Organization',
            name: 'Cereburum Sports',
          },
        },
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Suspense fallback={null}>
        <ClientProductsPage products={products} />
      </Suspense>
    </>
  );
}