import Link from 'next/link';
import styles from './products.module.css';

const WHATSAPP_NUMBER = '923187768296';
const WHATSAPP_URL = (msg) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;

export const metadata = {
  title: 'Products — Sports Barrier Netting & Equipment',
  description:
    'Browse Cereburum Sports\'s full range of sports barrier netting, cricket nets, football nets, and custom netting solutions for sports facilities across Pakistan.',
};

const categories = [
  {
    id: 'barrier-netting',
    title: 'Sports Barrier Netting',
    subtitle: 'Perimeter & Safety',
    icon: '🏟️',
    tag: 'Best Seller',
    tagColor: 'sand',
    desc: 'Heavy-duty perimeter netting engineered for safety and durability across all sports environments. Ideal for cricket grounds, football stadiums, and multi-sport venues.',
    features: ['UV-Resistant HDPE Material', 'Height up to 30 feet', 'Wind-load tested', 'Custom colors available', 'Professional installation'],
    specs: [
      { label: 'Material', value: 'HDPE / Nylon' },
      { label: 'Mesh Size', value: '45mm – 100mm' },
      { label: 'Max Height', value: '30 ft' },
      { label: 'Lifespan', value: '10–15 years' },
    ],
  },
  {
    id: 'cricket-nets',
    title: 'Cricket Practice Nets',
    subtitle: 'Practice & Training',
    icon: '🏏',
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
    icon: '⚽',
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
    icon: '🎾',
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
    icon: '🏅',
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
    icon: '🔧',
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
  return (
    <>
      {/* Page Header */}
      <section className={styles.pageHeader} aria-label="Products page header">
        <div className={styles.pageHeaderBg} aria-hidden="true">
          <div className={styles.pageHeaderGrad} />
          <div className={styles.pageHeaderGrid} />
        </div>
        <div className={`container ${styles.pageHeaderContent}`}>
          <span className="section-label animate-fade-in">Our Products</span>
          <h1 className={`display-lg ${styles.pageTitle} animate-fade-in-up`}>
            Sports Netting &<br />
            <span className="text-sand">Equipment Range</span>
          </h1>
          <div className="divider divider-center" style={{ margin: '1.25rem auto 1.75rem' }} />
          <p className={`body-lg ${styles.pageDesc} animate-fade-in`}>
            From perimeter barrier systems to specialized court nets — we carry the full spectrum
            of sports netting solutions for every facility need.
          </p>
        </div>
      </section>

      {/* Products Grid */}
      <section className={`section-pad ${styles.productsSection}`} aria-label="Products list">
        <div className="container">
          <div className={styles.productsGrid}>
            {categories.map((cat, i) => (
              <article
                key={cat.id}
                id={cat.id}
                className={`${styles.productCard} reveal`}
                style={{ transitionDelay: `${(i % 2) * 0.1}s` }}
                aria-label={cat.title}
              >
                {/* Card header */}
                <div className={styles.cardHeader}>
                  <div className={styles.cardHeaderLeft}>
                    <div className={styles.cardIcon} aria-hidden="true">{cat.icon}</div>
                    <div>
                      <p className={`label ${styles.cardSubtitle}`}>{cat.subtitle}</p>
                      <h2 className={`heading-lg ${styles.cardTitle}`}>{cat.title}</h2>
                    </div>
                  </div>
                  {cat.tag && (
                    <span className={`${styles.cardTag} ${styles[`tag-${cat.tagColor}`]}`}>
                      {cat.tag}
                    </span>
                  )}
                </div>

                <p className={`body-md ${styles.cardDesc}`}>{cat.desc}</p>

                {/* Features */}
                <ul className={styles.featureList} role="list" aria-label={`${cat.title} features`}>
                  {cat.features.map((f) => (
                    <li key={f} className={styles.featureItem}>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className={styles.featureCheck} aria-hidden="true">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      {f}
                    </li>
                  ))}
                </ul>

                {/* Specs */}
                <div className={styles.specsGrid} role="table" aria-label={`${cat.title} specifications`}>
                  {cat.specs.map(({ label, value }) => (
                    <div key={label} className={styles.specItem} role="row">
                      <span className={`label ${styles.specLabel}`} role="rowheader">{label}</span>
                      <span className={`body-sm ${styles.specValue}`} role="cell">{value}</span>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <a
                  href={WHATSAPP_URL(`Hello, I'm interested in your ${cat.title}. Please share more details.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`btn btn-whatsapp ${styles.cardCta}`}
                  aria-label={`Enquire about ${cat.title} on WhatsApp`}
                  id={`product-cta-${cat.id}`}
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                    <path d="M12 0C5.373 0 0 5.373 0 12c0 2.126.553 4.122 1.522 5.857L0 24l6.335-1.509C8.05 23.447 9.977 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818c-1.86 0-3.601-.504-5.09-1.38l-.365-.217-3.762.896.956-3.665-.238-.377C2.504 15.44 2.181 13.758 2.181 12 2.181 6.57 6.57 2.181 12 2.181c5.431 0 9.819 4.389 9.819 9.819 0 5.431-4.388 9.818-9.819 9.818z"/>
                  </svg>
                  Enquire on WhatsApp
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
