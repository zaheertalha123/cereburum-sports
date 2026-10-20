import { Suspense } from 'react';
import ClientGuidesPage from './ClientGuidesPage';
import { guides, guideCategories as categories } from '../../data/guides';
import { absoluteUrl } from '@/lib/siteUrl';

const guidesUrl = absoluteUrl('/guides');

export const metadata = {
  title: 'Sports Netting Buying Guides & Installation Tips',
  description:
    'Expert guides and step-by-step tips for sports net installation, rooftop cricket cages, maintenance, and facility setup across Pakistan by Cereburum Sports.',
  alternates: {
    canonical: guidesUrl,
  },
  openGraph: {
    type: 'website',
    locale: 'en_PK',
    url: guidesUrl,
    siteName: 'Cereburum Sports',
    title: 'Sports Netting Buying Guides & Installation Tips | Cereburum Sports',
    description:
      'Expert guides and step-by-step tips for sports net installation, rooftop cricket cages, maintenance, and facility setup across Pakistan by Cereburum Sports.',
    images: [
      {
        url: '/images/home/1.jpg',
        width: 1200,
        height: 630,
        alt: 'Sports netting guides and facility installation tips - Cereburum Sports',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sports Netting Buying Guides & Installation Tips | Cereburum Sports',
    description:
      'Expert guides and step-by-step tips for sports net installation, rooftop cricket cages, maintenance, and facility setup across Pakistan by Cereburum Sports.',
    images: ['/images/home/1.jpg'],
  },
};

export default function GuidesPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    '@id': `${guidesUrl}/#webpage`,
    url: guidesUrl,
    name: 'Sports Netting Guides & Installation Tips - Cereburum Sports',
    description: 'Educational articles and guides covering sports netting selection, cricket practice cage setups, maintenance, and installation advice.',
    mainEntity: {
      '@type': 'ItemList',
      numberOfItems: guides.length,
      itemListElement: guides.map((guide, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        item: {
          '@type': 'Article',
          '@id': absoluteUrl(`/guides/${guide.id}`),
          url: absoluteUrl(`/guides/${guide.id}`),
          headline: guide.title,
          description: guide.description || guide.desc || guide.subtitle,
          image: absoluteUrl(guide.image || '/images/home/1.jpg'),
          author: {
            '@type': 'Organization',
            name: 'Cereburum Sports',
          },
          publisher: {
            '@type': 'Organization',
            name: 'Cereburum Sports',
            logo: {
              '@type': 'ImageObject',
              url: absoluteUrl('/logo.png'),
            },
          },
        },
      })),
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Suspense fallback={null}>
        <ClientGuidesPage guides={guides} categories={categories} />
      </Suspense>
    </>
  );
}
