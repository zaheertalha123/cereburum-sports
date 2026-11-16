import { faqsById } from '@/data/buyerFaqs';

const quoteLinks = [
  { href: '/contact', label: 'Contact form' },
  { href: '/products/custom', label: 'Custom sizes' },
];

export const buyerGuides = [
  {
    slug: 'cricket-net-price-pakistan',
    title: 'Cricket Net Price in Pakistan',
    h1: 'Cricket net price in Pakistan',
    description: 'How Cereburum Sports prices a cricket practice panel, a rooftop cage and a netted arena in Pakistan. Quotes depend on size, grade and installation.',
    kicker: 'Pricing',
    lede: [
      'A 100 ft by 10 ft practice panel and a full cricket arena are different products. Retail panel prices and an installed arena are not the same figure, so this page explains what we quote on instead of borrowing someone else’s numbers.',
    ],
    sections: [
      {
        heading: 'What changes the price',
        paragraphs: [
          'The quote moves with the grade, the size and the structure. Published cricket grades include Parachute 12, 24, 36, 66 and 72, plus polyester and cotton. Height, a roof net, and a bamboo frame or an iron frame all change the job. So do access and the city.',
          'Contact us for a figure. Standard-size products are usually ready in 1–2 days, and custom sizes are listed at about 4–5 days to manufacture, or a minimum of 5 business days on the custom product page.',
        ],
        links: [
          { href: '/products/cricket-nets', label: 'Cricket net grades' },
          { href: '/guides/cricket-arena-cost-pakistan', label: 'Arena cost' },
          { href: '/guides/rooftop-cricket-practice-net', label: 'Rooftop cages' },
        ],
      },
      {
        heading: 'How to get a quote',
        paragraphs: [
          'Send the length, width and height on WhatsApp or the contact form, or visit the factory in Sialkot. Say whether you need the net only or installation as well. Payment for custom orders is 50% in advance, with the balance before dispatch after video proof.',
        ],
        links: quoteLinks,
      },
    ],
    faqs: faqsById('cost', 'material', 'cities'),
    priceRows: [
      { id: 'practicePanel', label: '100×10 ft practice panel' },
      { id: 'rooftopCage', label: 'Rooftop cage' },
      { id: 'fullArena', label: 'Full practice arena' },
      { id: 'parachute24Panel', label: 'Parachute 24 panel, net only' },
      { id: 'parachute36Panel', label: 'Parachute 36 panel, net only' },
    ],
  },
  {
    slug: 'cricket-arena-cost-pakistan',
    title: 'Cricket Arena Cost in Pakistan',
    h1: 'Cost to build a cricket practice arena',
    description: 'What goes into the cost of a netted cricket practice or indoor arena in Pakistan, with published examples from Nowshera and Mirpur.',
    kicker: 'Arenas',
    lede: [
      'This page is about a netted practice or indoor cricket arena, not a government or PCB stadium. Published examples on this site are the Nowshera arena at 90 ft by 60 ft and the Mirpur arena at 100 ft by 65 ft.',
    ],
    sections: [
      {
        heading: 'What the build includes',
        paragraphs: [
          'The cricket arena guide covers steel poles, horizontal and diagonal support pipes, side netting, roof netting, ropes, floodlights and anti-rust paint. Doors and labour are part of an installation quote when the site needs them. Mirpur’s published specification is Parachute 36 on the sides and Parachute 24 on the roof, with 30 ft of height. Nowshera’s published net is Parachute 36, with 35 ft of height.',
          'We need the ground size, the height you want, photos of access, and the city. Installation goes ahead where the ground, weather and access make it practical.',
        ],
        links: [
          { href: '/guides/cricket-arena', label: 'How to build a practice arena' },
          { href: '/works/cricket-arena-nowshera', label: 'Nowshera, 90×60 ft' },
          { href: '/works/cricket-arena-mirpur', label: 'Mirpur, 100×65 ft' },
          { href: '/guides/cricket-net-price-pakistan', label: 'How net pricing works' },
        ],
      },
    ],
    faqs: faqsById('cost', 'manufacture'),
    priceRows: [
      { id: 'arenaLow', label: 'Smaller practice arena' },
      { id: 'arenaTypical', label: 'Typical practice arena' },
      { id: 'arenaLarge', label: 'Large practice arena' },
    ],
  },
  {
    slug: 'cricket-net-materials',
    // TODO(owner): fibre or polymer for Parachute grades; whether HDPE is offered under that or another name; recommended grade for outdoor walls, roofs, tape-ball and hard ball.
    title: 'Cricket Net Materials for Outdoor Enclosures',
    h1: 'Net materials for an outdoor cricket enclosure',
    description: 'Parachute, polyester, nylon and cotton cricket net grades from Cereburum Sports in Sialkot, with the gauge and mesh already published for each one.',
    kicker: 'Materials',
    lede: [
      'Buyers often ask about HDPE, nylon, polyester and UV-stabilised mesh. On this site the grades keep the names we manufacture under: Parachute, polyester, cotton and nylon. The table uses the gauge, mesh and finish already published on each product.',
    ],
    sections: [
      {
        heading: 'Made in Sialkot, or brought in',
        paragraphs: [
          'These nets are manufactured in Sialkot. Custom sizes are available, and the installation team fits them where it is practical. You can visit the factory before ordering.',
          'The netting-age guide shows a new thread beside a four-year-old thread from outdoor use. It does not state a guaranteed lifespan beyond that comparison.',
        ],
        links: [
          { href: '/guides/netting-age', label: 'New and four-year-old netting' },
          { href: '/about', label: 'Sialkot manufacturer' },
          { href: '/products/cricket-nets', label: 'Cricket net grades' },
        ],
      },
      {
        heading: 'How published projects used the grades',
        paragraphs: [
          'Bloomfield Hall School in Kharian and the Mirpur arena both used Parachute 36 on the sides and Parachute 24 on the roof. The Gohadpur rooftop in Sialkot used Parachute 24 across an 84 ft by 38 ft cage at 20 ft. Those are records of finished jobs.',
        ],
        links: [
          { href: '/works/bloomfield-hall-school-khariyan', label: 'Bloomfield Hall School' },
          { href: '/works/cricket-arena-mirpur', label: 'Mirpur arena' },
          { href: '/works/roof-top-net-sialkot', label: 'Gohadpur rooftop' },
        ],
      },
    ],
    faqs: faqsById('material', 'manufacture'),
    showGradeTable: true,
    priceRows: [],
  },
  {
    slug: 'rooftop-cricket-practice-net',
    // TODO(owner): structural caveats you want stated, such as roof strength and landlord permission. Do not invent load or wind ratings.
    title: 'Rooftop Cricket Practice Net in Pakistan',
    h1: 'Build a cricket practice net on a rooftop',
    description: 'Rooftop cricket practice nets in Pakistan: bamboo or iron frames, how height is measured, and published Sialkot rooftop installations.',
    kicker: 'Rooftops',
    lede: [
      'Rooftop installations are common. A bamboo support is the cost-effective option, and an iron frame is the more durable one. Which one fits depends on the roof layout, access and site conditions.',
    ],
    sections: [
      {
        heading: 'Sialkot rooftops already installed',
        paragraphs: [
          'Gohadpur is 84 ft by 38 ft, 20 ft high, in Parachute 24. Daska Road is 60 ft by 20 ft, 15 ft high, in Parachute 60. The house rooftop is an L-shaped layout in Parachute 60.',
          'Measure the height from the top of the pole to the ground, with extra margin for the net fall, using the height guide. Custom sizes have no listed maximum on the custom product page.',
        ],
        links: [
          { href: '/works/roof-top-net-sialkot', label: 'Gohadpur, 84×38 ft' },
          { href: '/works/roof-top-net-sialkot-daska-road', label: 'Daska Road, 60×20 ft' },
          { href: '/works/house-roof-top-net-sialkot', label: 'L-shaped house rooftop' },
          { href: '/guides/height-measurement', label: 'How to measure height' },
          { href: '/guides/roof-installation', label: 'How roof netting is installed' },
        ],
      },
      {
        heading: 'Ask before we schedule',
        paragraphs: [
          'Send the roof length and width, the height you want, and photos of access. We install where it is practical to do so.',
        ],
        links: [{ href: '/contact', label: 'Send the roof details' }],
      },
    ],
    faqs: faqsById('rooftop', 'cost', 'cities'),
    priceRows: [{ id: 'rooftopCage', label: 'Rooftop cage' }],
  },
];

export function getBuyerGuide(slug) {
  return buyerGuides.find((guide) => guide.slug === slug) || null;
}
