import { faqsById } from '@/data/buyerFaqs';

const sharedLinks = [
  { href: '/services/cricket-net-installation-pakistan', label: 'Cricket net installation' },
  { href: '/guides/cricket-net-price-pakistan', label: 'How pricing works' },
  { href: '/guides/cricket-net-materials', label: 'Net materials' },
  { href: '/products/custom', label: 'Custom sizes' },
  { href: '/contact', label: 'Request a quote' },
];

export const catalogPages = [
  {
    slug: 'cricket-nets',
    filterGroup: 'Cricket',
    title: 'Cricket Nets — Practice, Arena and Rooftop',
    h1: 'Cricket nets — practice, arena and rooftop',
    description: 'Cricket practice, arena and rooftop nets manufactured in Sialkot. Standard panels and custom sizes, supplied and installed across Pakistan.',
    lede: [
      'Cereburum Sports manufactures cricket nets in Sialkot and installs them across Pakistan where it is practical to do so. The catalog below is the published range: standard panel sizes, and custom sizes when the ground needs them.',
    ],
    sections: [
      {
        heading: 'Practice nets, arenas and rooftops',
        paragraphs: [
          'A 100 ft by 10 ft practice panel and a full arena are different jobs. Arena projects already on this site include Nowshera at 90 ft by 60 ft and Mirpur at 100 ft by 65 ft. Rooftop cages are quoted separately.',
        ],
        links: [
          { href: '/works/cricket-arena-nowshera', label: 'Nowshera arena' },
          { href: '/works/cricket-arena-mirpur', label: 'Mirpur arena' },
          { href: '/guides/rooftop-cricket-practice-net', label: 'Rooftop practice nets' },
        ],
      },
    ],
    links: sharedLinks,
    faqs: faqsById('manufacture', 'cost', 'material'),
    priceRows: [
      { id: 'practicePanel', label: '100×10 practice panel' },
      { id: 'parachute24Panel', label: 'Parachute 24, 100×10 ft, net only' },
      { id: 'parachute36Panel', label: 'Parachute 36, 100×10 ft, net only' },
    ],
  },
  {
    slug: 'football-goal-nets',
    filterGroup: 'Football',
    title: 'Football Goal Net Manufacturer in Pakistan',
    h1: 'Football goal nets manufactured in Sialkot',
    description: 'Football goal nets manufactured in Sialkot. Nylon, parachute and polypropylene grades, standard goals and custom sizes, supplied across Pakistan.',
    lede: [
      'Cereburum Sports manufactures football goal nets in Sialkot. The grades below are the ones published in the catalog, in nylon, parachute and polypropylene, with a listed standard goal size and custom sizes.',
    ],
    sections: [
      {
        heading: 'Standard goals and custom sizes',
        paragraphs: [
          'Each football grade lists its mesh and whether the size can be changed. Nylon 105 is described on its product page as handmade knotted construction with a 3 inch mesh. Installation and delivery are available across Pakistan where it is practical.',
        ],
        links: [{ href: '/products/nylon-105', label: 'Nylon 105' }, { href: '/products/custom', label: 'Custom sizes' }],
      },
    ],
    links: sharedLinks,
    faqs: faqsById('manufacture', 'range', 'cities'),
    // TODO(owner): standard goal sizes you stock, and a starting pair price if you want one published.
    priceRows: [{ id: 'footballPair', label: 'Football goal net pair' }],
  },
  {
    slug: 'court-nets',
    // TODO(owner): volleyball, tennis — add products only if you sell them.
    filterGroup: 'Badminton',
    title: 'Court and Badminton Nets in Pakistan',
    h1: 'Court and badminton nets',
    description: 'Badminton and court nets manufactured in Sialkot by Cereburum Sports, with custom sizes for multi-sport spaces.',
    lede: [
      'The court nets in this catalog are badminton nets, made in Sialkot. Tell us the court size and whether the space is used for more than one sport.',
    ],
    sections: [
      {
        heading: 'Multi-sport spaces',
        paragraphs: [
          'Custom sizes, colours and mesh are part of the custom net service when a standard badminton net is not the right fit.',
        ],
        links: [{ href: '/products/custom', label: 'Custom sizes' }],
      },
    ],
    links: sharedLinks,
    faqs: faqsById('range', 'manufacture'),
    priceRows: [],
  },
  {
    slug: 'futsal-nets',
    filterGroup: 'Futsal',
    title: 'Futsal Goal Nets in Pakistan',
    h1: 'Futsal goal nets',
    description: 'Futsal goal nets manufactured in Sialkot. See the nylon futsal grades in the Cereburum Sports catalog.',
    lede: [
      'The futsal goal nets below are the grades already listed in the catalog, manufactured in Sialkot and supplied across Pakistan.',
    ],
    sections: [
      {
        heading: 'Sizes',
        paragraphs: [
          'Check the mesh and dimensions on each grade. Custom sizes are available when the goal is not a standard one.',
        ],
        links: [{ href: '/products/custom', label: 'Custom sizes' }],
      },
    ],
    links: sharedLinks,
    faqs: faqsById('range', 'cities'),
    priceRows: [],
  },
];

export function getCatalogPage(slug) {
  return catalogPages.find((page) => page.slug === slug) || null;
}
