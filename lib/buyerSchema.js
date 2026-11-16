import { absoluteUrl } from '@/lib/siteUrl';
import { breadcrumbJsonLd } from '@/components/Breadcrumbs';
import { faqAnswerText } from '@/data/buyerFaqs';
import { locations } from '@/data/locations';

export function faqJsonLd(url, faqs = []) {
  if (!faqs.length) return null;
  return {
    '@type': 'FAQPage',
    '@id': `${url}#faq`,
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faqAnswerText(faq),
      },
    })),
  };
}

export function buyerGraph({ url, name, description, breadcrumbs, faqs = [], serviceName, areaServed }) {
  const siteUrl = absoluteUrl();
  const graph = [
    breadcrumbJsonLd(breadcrumbs),
    {
      '@type': 'WebPage',
      '@id': `${url}#webpage`,
      url,
      name,
      description,
      isPartOf: { '@id': `${siteUrl}/#website` },
      about: { '@id': `${siteUrl}/#organization` },
    },
    faqJsonLd(url, faqs),
  ];

  if (serviceName) {
    graph.push({
      '@type': 'Service',
      '@id': `${url}#service`,
      name: serviceName,
      url,
      description,
      provider: { '@id': `${siteUrl}/#organization` },
      areaServed: areaServed || [
        { '@type': 'Country', name: 'Pakistan' },
        ...locations.map((location) => ({ '@type': 'City', name: location.city })),
      ],
    });
  }

  return {
    '@context': 'https://schema.org',
    '@graph': graph.filter(Boolean),
  };
}
