import { Suspense } from 'react';
import ClientWorksPage from './ClientWorksPage';
import { projects, projectCategories as categories } from '../../data/projects';
import { absoluteUrl } from '@/lib/siteUrl';

const worksUrl = absoluteUrl('/works');

export const metadata = {
  title: 'Sports Net Installation Portfolio & Projects in Pakistan',
  description:
    'Browse our portfolio of completed cricket ground netting, rooftop cricket practice cages, football pitch barrier nets, and sports facility installations across Pakistan.',
  alternates: {
    canonical: worksUrl,
  },
  openGraph: {
    type: 'website',
    locale: 'en_PK',
    url: worksUrl,
    siteName: 'Cereburum Sports',
    title: 'Sports Net Installation Portfolio & Projects in Pakistan | Cereburum Sports',
    description:
      'Browse our portfolio of completed cricket ground netting, rooftop cricket practice cages, football pitch barrier nets, and sports facility installations across Pakistan.',
    images: [
      {
        url: '/images/home/1.jpg',
        width: 1200,
        height: 630,
        alt: 'Completed sports barrier netting and cricket net installation portfolio across Pakistan - Cereburum Sports',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sports Net Installation Portfolio & Projects in Pakistan | Cereburum Sports',
    description:
      'Browse our portfolio of completed cricket ground netting, rooftop cricket practice cages, football pitch barrier nets, and sports facility installations across Pakistan.',
    images: ['/images/home/1.jpg'],
  },
};

export default function WorksPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Completed Sports Netting Projects Portfolio - Cereburum Sports',
    description: 'Portfolio of cricket net installations, rooftop cages, football barrier nets, and sports complexes built across Pakistan.',
    url: worksUrl,
    numberOfItems: projects.length,
    itemListElement: projects.map((project, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      item: {
        '@type': 'CreativeWork',
        '@id': absoluteUrl(`/works/${project.id}`),
        name: project.title,
        description: project.description || project.subtitle,
        image: absoluteUrl(project.coverImage || '/images/home/1.jpg'),
        creator: {
          '@type': 'Organization',
          name: 'Cereburum Sports',
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
        <ClientWorksPage projects={projects} categories={categories} />
      </Suspense>
    </>
  );
}
