import ClientProductsPage from './ClientProductsPage';

export const metadata = {
  title: 'Products — Sports Barrier Netting & Equipment',
  description:
    'Browse Cereburum Sports\'s full range of sports barrier netting, cricket nets, football nets, and custom netting solutions for sports facilities across Pakistan.',
};

const categories = [
  {
    id: 'crickeet-net-24',
    title: 'Parachute 24',
    subtitle: 'Cricket Netting',
    filterGroup: 'Cricket',
    image: '/images/products/parachute-24.jpg',
    tag: 'Best Seller',
    tagColor: 'sand',
    desc: 'Premium joint-free cotton netting, machine-made for superior durability and fully customizable in size and color to suit sports, animal enclosures, and multi-purpose safety needs.',
    features: ['Joint-free construction', 'Machine-made high-quality', 'Fully customizable size and color', 'Optimized for softball and multi-sport use'],
    specs: [
      { label: 'Material', value: 'Parachute 24' },
      { label: 'Mesh Size', value: '1.75" (45mm)' },
      { label: 'Dimensions', value: '100 ft. x 10 ft.' },
      { label: 'Customizable', value: 'Yes' },
    ],
  },
  {
    id: 'cricket-net-36',
    title: 'Parachute 36',
    subtitle: 'Cricket Netting',
    filterGroup: 'Cricket',
    image: '/images/products/parachute-36.jpg',
    tag: 'Best Seller',
    tagColor: 'sand',
    desc: 'Parachute 36 is an ultra-durable, joint-free netting offering machine-made precision and superior strength for professional sports, safety, and heavy-duty custom needs.',
    features: ['Seamless joint-free design', 'Premium-grade machine-knit mesh', 'Tailor-made dimensions and color palettes', 'Engineered specifically for hardball cricket'],
    specs: [
      { label: 'Material', value: 'Parachute 36' },
      { label: 'Mesh Size', value: '1.75" (45mm)' },
      { label: 'Dimensions', value: '100 ft. x 10 ft.' },
      { label: 'Customizable', value: 'Yes' },
    ],
  },
  {
    id: 'cricket-net-60',
    title: 'Parachute 60',
    subtitle: 'Cricket Netting',
    filterGroup: 'Cricket',
    image: '/images/products/parachute-60.jpg',
    tag: 'Best Seller',
    tagColor: 'sand',
    desc: 'The gold-standard Parachute 60 offers ultimate-strength boundary and goal netting with a heavy-duty, weatherproof build designed for professional stadiums and high-intensity match play.',
    features: ['Industrial-grade reinforced mesh', 'Maximum impact resistance', 'Weatherproof boundary and goal solutions', 'Bespoke sizing for Olympic-standard pitches'],
    specs: [
      { label: 'Material', value: 'Parachute 60' },
      { label: 'Mesh Size', value: '1.75" (45mm)' },
      { label: 'Dimensions', value: '100 ft. x 10 ft.' },
      { label: 'Customizable', value: 'Yes' },
    ],
  },
  {
    id: 'polyester-8',
    title: 'Polyester 8',
    subtitle: 'Cricket Netting',
    filterGroup: 'Cricket',
    image: '/images/products/polyester-8.jpg',
    tag: null,
    tagColor: null,
    desc: 'Polyester 8 is a premium, stretch-enhanced netting featuring a high-elasticity knit for superior flexibility and vibrant, fine-tuned color shades across professional sports and custom installations.',
    features: ['High-stretch elastic composition', 'Seamless joint-free precision', 'Rich, multi-tonal color finishes', 'Dynamic impact absorption for high-performance sports'],
    specs: [
      { label: 'Material', value: 'Polyester 8' },
      { label: 'Mesh Size', value: '1.75" (45mm)' },
      { label: 'Dimensions', value: '100 ft. x 10 ft.' },
      { label: 'Customizable', value: 'Yes' },
    ],
  },
  {
    id: 'polyester-12',
    title: 'Polyester 12',
    subtitle: 'Cricket Netting',
    filterGroup: 'Cricket',
    image: '/images/products/polyester-12.jpg',
    tag: null,
    tagColor: null,
    desc: 'The advanced Polyester 12 is a reinforced, high-tenacity netting that combines superior tensile strength with elastic precision, delivering a heavy-duty, joint-free solution for professional-grade sports environments.',
    features: ['Enhanced high-density elastic weave', 'Industrial-strength joint-free construction', 'Superior color retention and vibrant shading', 'Optimized shock absorption for hardball cricket'],
    specs: [
      { label: 'Material', value: 'Polyester 12' },
      { label: 'Mesh Size', value: '1.75" (45mm)' },
      { label: 'Dimensions', value: '100 ft. x 10 ft.' },
      { label: 'Customizable', value: 'Yes' },
    ],
  },
  {
    id: 'polyester-double-layer',
    title: 'Polyester DL',
    subtitle: 'Cricket Netting',
    filterGroup: 'Cricket',
    image: '/images/products/polyester-dl.jpg',
    tag: null,
    tagColor: null,
    desc: 'The Polyester Double Layer features a dual-reinforced weave for maximum density, offering heavy-duty impact resistance and superior shock absorption for high-velocity sports and professional enclosures.',
    features: ['High-density dual-layered architecture', 'Maximum impact for high-velocity play', 'Reinforced elastic-enhanced weave', 'Industrial-strength joint-free construction'],
    specs: [
      { label: 'Material', value: 'Polyester Double Layer' },
      { label: 'Mesh Size', value: '1.75" (45mm)' },
      { label: 'Dimensions', value: '100 ft. x 10 ft.' },
      { label: 'Customizable', value: 'Yes' },
    ],
  },
  {
    id: 'custom',
    title: 'Custom Solutions',
    subtitle: 'Bespoke & Tailored',
    filterGroup: 'Custom',
    image: null,
    tag: 'Tailored',
    tagColor: 'sand',
    desc: 'Got a unique project? We design, manufacture, and install bespoke netting systems for complex architectural spaces, non-standard dimensions, and special requirements.',
    features: ['Full custom design service', 'CAD drawings provided', 'Any dimension or shape', 'Specialized materials', 'Project management included'],
    specs: [
      { label: 'Min. Lead Time', value: '5 business days' },
      { label: 'Design', value: 'CAD-assisted' },
      { label: 'Materials', value: 'Any grade available' },
      { label: 'Dimensions', value: 'No limit' },
    ],
  },
];

export default function ProductsPage() {
  return <ClientProductsPage categories={categories} />;
}
