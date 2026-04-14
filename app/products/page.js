import ClientProductsPage from './ClientProductsPage';

export const metadata = {
  title: 'Products — Sports Barrier Netting & Equipment',
  description:
    'Browse Cereburum Sports\'s full range of sports barrier netting, cricket nets, football nets, and custom netting solutions for sports facilities across Pakistan.',
};

const categories = [
  {
    id: 'barrier-netting',
    title: 'Polyester Netting',
    subtitle: 'Perimeter & Safety',
    filterGroup: 'Nets',
    image: '/images/products/polyester.jpg',
    tag: 'Best Seller',
    tagColor: 'sand',
    desc: 'Premium polyester netting engineered for safety and durability across all sports environments. Ideal for cricket grounds, football stadiums, and multi-sport venues.',
    features: ['UV-Resistant Polyester Material', 'Height up to 30 feet', 'Wind-load tested', 'Custom colors available', 'Professional installation'],
    specs: [
      { label: 'Material', value: 'Polyester' },
      { label: 'Mesh Size', value: '45mm – 100mm' },
      { label: 'Max Height', value: '30 ft' },
      { label: 'Lifespan', value: '10–15 years' },
    ],
  },
  {
    id: 'cricket-nets',
    title: 'Cricket Practice Nets',
    subtitle: 'Practice & Training',
    filterGroup: 'Nets',
    image: null,
    tag: null,
    tagColor: null,
    desc: 'Professional-grade cricket nets for batting lanes, practice cages, and outdoor strips. Designed to withstand high-impact balls over thousands of repetitions.',
    features: ['High-impact resistant nylon', 'Standard batting lane sizing', 'Suitable for indoor & outdoor', 'Rear pad system available', 'Easy clip-on installation'],
    specs: [
      { label: 'Material', value: 'Twisted Nylon' },
      { label: 'Mesh Size', value: '40mm' },
      { label: 'Thickness', value: '#12 – #18 twine' },
      { label: 'Width', value: '3.5m per lane' },
    ],
  },
  {
    id: 'football-nets',
    title: 'Football & Goal Nets',
    subtitle: 'Goal & Boundary',
    filterGroup: 'Nets',
    image: null,
    tag: null,
    tagColor: null,
    desc: 'From standard goal nets to full-pitch boundary netting. Weatherproof construction suitable for 5-a-side, 7-a-side, and full-size pitches.',
    features: ['All-weather polyethylene', 'Standard & custom goal sizes', 'High visibility options', 'Boundary netting systems', 'Rust-proof fittings'],
    specs: [
      { label: 'Material', value: 'Polyethylene' },
      { label: 'Mesh Size', value: '100mm – 120mm' },
      { label: 'Goal Sizes', value: 'All FIFA standards' },
      { label: 'Color', value: 'White / Green / Custom' },
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
