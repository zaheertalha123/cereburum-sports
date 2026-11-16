export const buyerFaqs = [
  {
    id: 'manufacture',
    q: 'Do you manufacture sports nets in Sialkot?',
    a: 'Yes. Cereburum Sports is based in Sialkot and manufactures, supplies and installs sports netting for grounds, rooftops and arenas across Pakistan.',
  },
  {
    id: 'range',
    q: 'Which sports nets do you make?',
    a: 'Cricket practice and arena nets, including roof netting, football and futsal goal nets, badminton and court nets, hockey nets, and custom sizes.',
  },
  {
    id: 'rooftop',
    q: 'Can you install a cricket practice net on a rooftop?',
    a: 'Yes. Rooftop installations are common. We can use a cost-effective bamboo support structure or a more durable iron frame, depending on the roof layout. Feasibility still depends on access and site conditions.',
    links: [
      { href: '/guides/rooftop-cricket-practice-net', label: 'Rooftop practice net guide' },
      { href: '/works/roof-top-net-sialkot', label: 'Gohadpur rooftop, Sialkot' },
      { href: '/works/roof-top-net-sialkot-daska-road', label: 'Daska Road rooftop' },
      { href: '/works/house-roof-top-net-sialkot', label: 'House rooftop, Sialkot' },
    ],
  },
  {
    id: 'school',
    q: 'Do you install netting for schools?',
    a: 'Yes. We have installed a school sports enclosure at Bloomfield Hall School, Kharian: Parachute 36 sides, Parachute 24 roof, 40 ft by 40 ft, and 20 ft height. Share the ground size and the sport and we will confirm what is possible.',
    links: [
      { href: '/works/bloomfield-hall-school-khariyan', label: 'Bloomfield Hall School project' },
      { href: '/services/school-sports-ground-netting', label: 'School sports ground netting' },
    ],
  },
  {
    id: 'cost',
    // TODO(owner): replace this answer with approved PKR ranges. Do not copy competitor prices.
    q: 'How much does a cricket net or arena cost?',
    a: 'We quote from size, material grade, support structure and installation access. Standard-size products and custom sizes are both available. Request a quote on WhatsApp or the contact form.',
    links: [
      { href: '/guides/cricket-net-price-pakistan', label: 'How cricket net pricing works' },
      { href: '/guides/cricket-arena-cost-pakistan', label: 'How arena cost is scoped' },
    ],
  },
  {
    id: 'material',
    // TODO(owner): short recommended mapping, for example Parachute 24 for roofs and Parachute 36 for sides, only if that is the real recommendation.
    q: 'Which material should I use outdoors?',
    a: 'We supply UV-treated parachute, nylon, polyester and the other grades listed in the catalog. Published projects at Bloomfield Hall School and the Mirpur arena use Parachute 36 on the sides and Parachute 24 on the roof. That records those jobs. It is not a rule for every ground.',
    links: [{ href: '/guides/cricket-net-materials', label: 'Cricket net materials' }],
  },
  {
    id: 'cities',
    // TODO(owner): list cities you will travel to for installation, and any areas that are supply-only.
    q: 'Do you serve Lahore, Karachi, Islamabad and Rawalpindi?',
    a: 'We are based in Sialkot and deliver and install across Pakistan where it is practical to do so. We do not have a separate office in Lahore, Karachi, Islamabad or Rawalpindi.',
    links: [
      { href: '/locations/lahore', label: 'Lahore' },
      { href: '/locations/karachi', label: 'Karachi' },
      { href: '/locations/islamabad', label: 'Islamabad' },
      { href: '/locations/rawalpindi', label: 'Rawalpindi' },
    ],
  },
];

export function faqsById(...ids) {
  return ids.map((id) => buyerFaqs.find((faq) => faq.id === id)).filter(Boolean);
}

export function faqAnswerText(faq) {
  const links = (faq.links || []).map((link) => `${link.label} (${link.href})`).join(' ');
  return links ? `${faq.a} ${links}` : faq.a;
}
