import { notFound } from 'next/navigation';
import { projects } from '@/data/projects';
import { getLocation, locations } from '@/data/locations';
import { absoluteUrl } from '@/lib/siteUrl';
import { buyerGraph } from '@/lib/buyerSchema';
import { faqsById } from '@/data/buyerFaqs';
import BuyerArticle from '@/components/BuyerArticle';
import { editorialMetadata } from '@/components/EditorialPage';

function firstSentence(text) {
  const sentence = String(text || '').split(/(?<=[.!?])\s+/)[0];
  return sentence || text;
}

export function generateStaticParams() {
  return locations.map((location) => ({ slug: location.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const location = getLocation(slug);
  if (!location) return { title: 'Location Not Found' };
  return editorialMetadata(
    {
      title: `Cricket Net Installation in ${location.city}`,
      h1: `Cricket and sports net installation in ${location.city}`,
      description: `Cricket and sports net installation in ${location.city}. Nets are manufactured in Sialkot by Cereburum Sports and installed where it is practical.`,
    },
    `/locations/${location.slug}`,
  );
}

export default async function LocationPage({ params }) {
  const { slug } = await params;
  const location = getLocation(slug);
  if (!location) notFound();

  const installed = location.projectIds
    .map((id) => projects.find((project) => project.id === id))
    .filter(Boolean);
  const homeCity = location.slug === 'sialkot';
  const path = `/locations/${location.slug}`;
  const url = absoluteUrl(path);
  const title = `Cricket and sports net installation in ${location.city}`;
  const description = `Cricket and sports net installation in ${location.city}. Nets are manufactured in Sialkot by Cereburum Sports and installed where it is practical.`;
  const breadcrumbs = [
    { name: 'Home', href: '/' },
    { name: location.city, href: path },
  ];
  const faqs = faqsById('cities', 'manufacture', 'cost');
  const lede = homeCity
    ? ['Cereburum Sports manufactures sports nets in Sialkot. The workshop address published on the contact page is GFHX+2P3, Nawan Pind. Installation and delivery go out from here across Pakistan where it is practical.']
    : [`Cereburum Sports manufactures sports nets in Sialkot and takes enquiries for ${location.city}. There is no Cereburum office in ${location.city}. Supply and installation are offered where the site makes them practical.`];
  const sections = [
    installed.length
      ? {
          heading: `Published work in ${location.city}`,
          paragraphs: installed.map((project) => `${project.title}. ${firstSentence(project.desc)}`),
          links: installed.map((project) => ({ href: `/works/${project.id}`, label: project.title })),
        }
      : {
          heading: `Enquiries for ${location.city}`,
          paragraphs: [
            `There is no completed project page for ${location.city} on this site yet. Send the ground or roof size, the sport, and photos of access, and we will say what we can manufacture and whether installation is practical.`,
          ],
        },
    {
      heading: 'Nets and guides',
      paragraphs: ['Cricket, football, court and custom nets are manufactured in Sialkot. Start with the range that matches the ground.'],
      links: [
        { href: '/products/cricket-nets', label: 'Cricket nets' },
        { href: '/products/football-goal-nets', label: 'Football goal nets' },
        { href: '/guides/rooftop-cricket-practice-net', label: 'Rooftop practice nets' },
        { href: '/services/school-sports-ground-netting', label: 'School grounds' },
        { href: '/services/cricket-net-installation-pakistan', label: 'Installation' },
        { href: '/contact', label: 'Contact' },
      ],
    },
  ];

  const jsonLd = buyerGraph({
    url,
    name: title,
    description,
    breadcrumbs,
    faqs,
    serviceName: `Cricket net installation in ${location.city}`,
    areaServed: [
      { '@type': 'City', name: location.city },
      { '@type': 'Country', name: 'Pakistan' },
    ],
  });

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <BuyerArticle
        breadcrumbItems={breadcrumbs}
        kicker={location.region}
        title={title}
        lede={lede}
        sections={sections}
        faqs={faqs}
      />
    </>
  );
}
