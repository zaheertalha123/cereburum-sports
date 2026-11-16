import { SOCIAL } from '@/data/social';
import { locations } from '@/data/locations';
import { absoluteUrl } from '@/lib/siteUrl';

export const BUSINESS_EMAIL = 'cereburum.sports@gmail.com';

/** Shared LocalBusiness / Organization fields for JSON-LD (home, about, contact). */
export function getLocalBusinessSchema(extra = {}) {
  const siteUrl = absoluteUrl();

  return {
    '@type': ['Organization', 'LocalBusiness'],
    '@id': `${siteUrl}/#organization`,
    name: 'Cereburum Sports',
    url: siteUrl,
    logo: absoluteUrl('/logo.png'),
    image: absoluteUrl('/images/home/1.jpg'),
    description:
      'Pakistan’s trusted specialist for cricket net installation services, rooftop cricket nets, and cricket ground netting, alongside manufacturing and supplying all types of sports nets, football netting, and safety barrier nets nationwide.',
    telephone: '+923187768296',
    email: BUSINESS_EMAIL,
    // TODO(owner): Add priceRange only when a verified PKR range is available.
    // TODO(owner): which address is current? This site publishes GFHX+2P3, Nawan Pind.
    // Do not replace it with the Deuty Bagh listing unless you confirm that premises.
    // TODO(owner): Sunday opening? Friday hours? Keep Monday–Saturday 10:00–23:00 until confirmed.
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'GFHX+2P3, Nawan Pind',
      addressLocality: 'Sialkot',
      addressRegion: 'Punjab',
      addressCountry: 'PK',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 32.527253,
      longitude: 74.499947,
    },
    hasMap: 'https://www.google.com/maps/search/?api=1&query=GFHX%2B2P3%2C+Nawan+Pind%2C+Sialkot',
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
      ],
      opens: '10:00',
      closes: '23:00',
    },
    areaServed: [
      { '@type': 'Country', name: 'Pakistan' },
      ...locations.map((location) => ({ '@type': 'City', name: location.city })),
    ],
    sameAs: [SOCIAL.facebook, SOCIAL.instagram, SOCIAL.tiktok],
    ...extra,
  };
}
