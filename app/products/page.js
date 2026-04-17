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
    id: 'tennis-nets',
    title: 'Tennis & Badminton',
    subtitle: 'Court Nets',
    filterGroup: 'Nets',
    image: null,
    tag: null,
    tagColor: null,
    desc: 'High-quality court nets for tennis, badminton, and volleyball. Meets ITF and BWF specifications for professional play.',
    features: ['ITF/BWF compliant', 'Steel cable top edge', 'Natural & synthetic options', 'Indoor & outdoor grades', 'Complete net post kits'],
    specs: [
      { label: 'Material', value: 'Braided Polyester' },
      { label: 'Width', value: '12.8m (tennis)' },
      { label: 'Height', value: '0.91m (tennis center)' },
      { label: 'Standard', value: 'ITF / BWF' },
    ],
  },
  {
    id: 'multi-sport',
    title: 'Multi-Sport Netting',
    subtitle: 'Versatile Solutions',
    filterGroup: 'Hardware',
    image: null,
    tag: 'Versatile',
    tagColor: 'navy',
    desc: 'Flexible netting systems designed for facilities that host multiple sports. One installation, multiple applications — cricket, football, basketball, and more.',
    features: ['Multi-sport compatibility', 'Adjustable height systems', 'Rapid deployment design', 'Color-coded systems available', 'Facility-rated load specs'],
    specs: [
      { label: 'Sports Supported', value: '8+ sports' },
      { label: 'Setup Time', value: '< 30 mins' },
      { label: 'Material', value: 'HDPE / Nylon blend' },
      { label: 'Height Range', value: '10–25 ft' },
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
