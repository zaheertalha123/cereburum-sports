import { Suspense } from 'react';
import ClientWorksPage from './ClientWorksPage';
import { projects, projectCategories as categories } from '../../data/projects';

export const metadata = {
  title: 'Sports Net Installation Portfolio & Projects in Pakistan | Cereburum Sports',
  description:
    'Browse our portfolio of completed cricket ground netting, rooftop cricket practice cages, football pitch barrier nets, and sports facility installations across Pakistan.',
  alternates: {
    canonical: 'https://www.cereburumsports.site/works',
  },
  openGraph: {
    type: 'website',
    locale: 'en_PK',
    url: 'https://www.cereburumsports.site/works',
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
    url: 'https://www.cereburumsports.site/works',
    numberOfItems: projects.length,
    itemListElement: projects.map((project, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      item: {
        '@type': 'CreativeWork',
        '@id': `https://www.cereburumsports.site/works/${project.id}`,
        name: project.title,
        description: project.description || project.subtitle,
        image: project.image ? `https://www.cereburumsports.site${project.image}` : 'https://www.cereburumsports.site/images/home/1.jpg',
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
      <h1 className="sr-only">Completed Sports Net Installation Projects Portfolio in Pakistan</h1>
      <Suspense fallback={null}>
        <ClientWorksPage projects={projects} categories={categories} />
      </Suspense>
    </>
  );
}