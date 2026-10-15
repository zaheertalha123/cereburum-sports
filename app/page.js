import Link from 'next/link';
import Image from 'next/image';
import styles from './page.module.css';

const WHATSAPP_NUMBER = '923187768296';
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=Hello%2C%20I%27m%20interested%20in%20your%20sports%20products.`;

export const metadata = {
  title: {
    absolute: 'Cricket Net Installation in Pakistan | Cereburum Sports',
  },
  description:
    'Professional cricket net installation in Pakistan. Reliable cricket net installation services, rooftop cricket nets, practice nets & cricket ground safety netting.',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_PK',
    url: 'https://www.cereburumsports.site',
    siteName: 'Cereburum Sports',
    title: 'Cricket Net Installation in Pakistan | Cereburum Sports',
    description:
      'Turnkey cricket net installation services across Pakistan. High-tensile cricket practice nets, cricket ground netting, rooftop cricket nets, and sports safety nets.',
    images: [
      {
        url: '/images/home/1.jpg',
        width: 1200,
        height: 630,
        alt: 'Cricket Net Installation in Pakistan - Cereburum Sports',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cricket Net Installation in Pakistan | Cereburum Sports',
    description:
      'Turnkey cricket net installation services across Pakistan. Cricket practice nets, ground netting, rooftop nets & sports safety nets.',
    images: ['/images/home/1.jpg'],
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebSite',
      '@id': 'https://www.cereburumsports.site/#website',
      url: 'https://www.cereburumsports.site',
      name: 'Cereburum Sports',
      description: 'Cricket Net Installation in Pakistan & Sports Barrier Netting Manufacturer',
      inLanguage: 'en-PK',
      publisher: {
        '@id': 'https://www.cereburumsports.site/#organization',
      },
    },
    {
      '@type': ['SportsActivityLocation', 'LocalBusiness'],
      '@id': 'https://www.cereburumsports.site/#organization',
      name: 'Cereburum Sports',
      url: 'https://www.cereburumsports.site',
      logo: 'https://www.cereburumsports.site/logo.png',
      image: 'https://www.cereburumsports.site/images/home/1.jpg',
      description:
        'Pakistan’s trusted specialist for cricket net installation, cricket ground netting, rooftop cricket nets, cricket practice nets, and sports safety nets nationwide.',
      telephone: '+923187768296',
      email: 'cereburum.sports@gmail.com',
      priceRange: '$$',
      address: {
        '@type': 'PostalAddress',
        addressCountry: 'PK',
      },
      areaServed: {
        '@type': 'Country',
        name: 'Pakistan',
      },
      sameAs: [
        'https://facebook.com/cereburumsports',
        'https://instagram.com/cereburumsports',
        'https://tiktok.com/@cereburumsports',
      ],
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Cricket Netting & Sports Barrier Installation Services',
        itemListElement: [
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Cricket Net Installation Services',
              description:
                'Turnkey cricket net installation services across Pakistan for grounds, academies, rooftop practice setups, and sports facilities.',
              areaServed: {
                '@type': 'Country',
                name: 'Pakistan',
              },
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Cricket Ground Netting & Cricket Ground Safety Netting',
              description:
                'High-tensile cricket ground netting and perimeter cricket ground safety netting for tournament grounds, stadiums, and training complexes.',
              areaServed: {
                '@type': 'Country',
                name: 'Pakistan',
              },
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Rooftop Cricket Nets',
              description:
                'Engineered rooftop cricket netting systems for residential terraces, clubs, and urban sports centers.',
              areaServed: {
                '@type': 'Country',
                name: 'Pakistan',
              },
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Cricket Practice Nets & Cricket Academy Nets',
              description:
                'Heavy-duty cricket practice nets and multi-lane cricket academy nets built for hardball cricket training.',
              areaServed: {
                '@type': 'Country',
                name: 'Pakistan',
              },
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Sports Net Installation & Sports Safety Nets',
              description:
                'Professional sports net installation for high-durability sports safety nets and barrier netting protecting spectators and facilities.',
              areaServed: {
                '@type': 'Country',
                name: 'Pakistan',
              },
            },
          },
        ],
      },
    },
  ],
};

const stats = [
  { value: '100+', label: 'Projects Completed' },
  { value: '8+', label: 'Years Experience' },
  { value: '100%', label: 'Quality Assured' },
  { value: '50+', label: 'Sports Facilities' },
];

const products = [
  {
    id: 'cricket-netting',
    icon: '🏏',
    title: 'Cricket Practice & Academy Nets',
    desc: 'Heavy-duty cricket practice nets and cricket academy nets built for hardball cricket. Custom multi-lane cages and UV-stabilized mesh.',
    tag: 'Best Seller',
    filter: 'Cricket',
    ctaText: 'Explore Cricket Nets',
  },
  {
    id: 'ground-netting',
    icon: '⚽',
    title: 'Cricket Ground Netting & Goal Nets',
    desc: 'High-tensile cricket ground netting, perimeter barrier nets, and football goal nets for tournament grounds and sports pitches of all dimensions.',
    tag: null,
    filter: 'Football',
    ctaText: 'View Ground & Goal Nets',
  },
  {
    id: 'rooftop-safety',
    icon: '🔧',
    title: 'Rooftop Cricket Nets & Safety Netting',
    desc: 'Engineered rooftop cricket nets and sports safety nets for residential terraces, clubs, and urban facilities with nationwide installation support.',
    tag: 'Tailored',
    filter: 'Custom',
    ctaText: 'Explore Rooftop & Safety Nets',
  },
  {
    id: 'badminton-nets',
    icon: '🏸',
    title: 'Badminton & Court Nets',
    desc: 'Tournament-standard court nets featuring regulation mesh, reinforced edges, and steel cable systems for indoor and outdoor sports complexes.',
    tag: null,
    filter: 'Badminton',
    ctaText: 'View Court Nets',
  },
];

const trusts = [
  {
    icon: '✅',
    title: 'High-Tensile Weatherproof Netting',
    desc: 'UV-resistant, high-density polyethylene and nylon materials engineered to withstand intense sunlight and severe weather across all regions of Pakistan.',
  },
  {
    icon: '📏',
    title: 'Tailored Dimensions & Sizing',
    desc: 'Precision manufacturing tailored to your exact pitch, ground, or rooftop specifications with generous coverage that never falls short.',
  },
  {
    icon: '⚡',
    title: 'Turnkey Sports Net Installation',
    desc: 'Professional installation teams providing efficient setup for cricket grounds, rooftop facilities, and sports academies nationwide.',
  },
  {
    icon: '📞',
    title: 'Direct Manufacturer Support',
    desc: 'Connect directly with our netting specialists on WhatsApp for instant guidance, custom sizing advice, quotes, and responsive nationwide delivery.',
  },
];

const portfolioShowcase = [
  {
    id: 1,
    alt: 'Cricket ground safety netting and perimeter barrier net installation project in Pakistan | Cereburum Sports',
  },
  {
    id: 2,
    alt: 'Rooftop cricket nets and practice net cage installation project in Pakistan | Cereburum Sports',
  },
  {
    id: 3,
    alt: 'Cricket academy nets and sports safety barrier netting installation project in Pakistan | Cereburum Sports',
  },
];

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ── HERO ─────────────────────────────────────────────── */}
      <section className={styles.hero} aria-label="Hero">
        <div className={styles.heroBg} aria-hidden="true">
          <div className={styles.heroBgGrad} />
          <div className={styles.heroOrb1} />
          <div className={styles.heroOrb2} />
          <div className={styles.heroGrid} />
        </div>

        <div className={`container ${styles.heroContent}`}>
          <div className={`animate-fade-in-up ${styles.heroText}`}>
            <span className="section-label">Nationwide Sports Netting Specialists</span>
            <h1 className={`display-xl ${styles.heroHeading}`}>
              Cricket Net Installation<br />
              <span className={styles.heroAccent}>In Pakistan</span>
            </h1>
            <p className={`body-lg ${styles.heroSub}`}>
              Pakistan&apos;s trusted specialists in cricket net installation services, cricket ground netting, rooftop cricket nets, and durable sports safety nets. Delivering professional sports net installation to academies, clubs, and facilities nationwide.
            </p>

            <div className={styles.heroCtas}>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-whatsapp btn-lg"
                aria-label="Get a free quote on WhatsApp"
                id="hero-whatsapp-cta"
              >
                <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 2.126.553 4.122 1.522 5.857L0 24l6.335-1.509C8.05 23.447 9.977 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818c-1.86 0-3.601-.504-5.09-1.38l-.365-.217-3.762.896.956-3.665-.238-.377C2.504 15.44 2.181 13.758 2.181 12 2.181 6.57 6.57 2.181 12 2.181c5.431 0 9.819 4.389 9.819 9.819 0 5.431-4.388 9.818-9.819 9.818z" />
                </svg>
                Get Free Quote
              </a>
              <Link href="/products" className="btn btn-outline btn-lg" id="hero-products-btn">
                View Products
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>

          {/* Stats strip */}
          <div className={`${styles.statsStrip} animate-fade-in`} style={{ animationDelay: '0.3s' }}>
            {stats.map(({ value, label }) => (
              <div key={label} className={styles.statItem}>
                <span className={`display-md ${styles.statValue}`}>{value}</span>
                <span className={`body-sm ${styles.statLabel}`}>{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PRODUCTS OVERVIEW ─────────────────────────────────── */}
      <section className={`section-pad ${styles.productsSection}`} aria-labelledby="products-heading">
        <div className="container">
          <div className={`${styles.sectionHeader} reveal text-center`}>
            <span className="section-label">Sports Netting Catalog</span>
            <h2 className={`display-lg ${styles.sectionTitle}`} id="products-heading">
              Complete Sports Netting<br />
              <span className="text-sand">&amp; Installation Solutions</span>
            </h2>
            <div className="divider divider-center" />
            <p className={`body-lg ${styles.sectionDesc}`}>
              From high-impact cricket practice nets and rooftop cricket nets to complete cricket ground safety netting, we manufacture, supply, and deliver turnkey sports net installation services across Pakistan.
            </p>
          </div>

          <div className={styles.productsGrid}>
            {products.map((product, i) => (
              <article
                key={product.id}
                className={`card ${styles.productCard} reveal`}
                style={{ animationDelay: `${i * 0.1}s` }}
                aria-label={product.title}
              >
                {product.tag && (
                  <span className={styles.productTag}>{product.tag}</span>
                )}
                <div className={styles.productIcon} aria-hidden="true">{product.icon}</div>
                <h3 className={`heading-md ${styles.productTitle}`}>{product.title}</h3>
                <p className={`body-md ${styles.productDesc}`}>{product.desc}</p>
                <Link
                  href={product.filter ? `/products?filter=${encodeURIComponent(product.filter)}` : '/products'}
                  className={`btn btn-outline btn-sm ${styles.productBtn}`}
                  aria-label={`${product.ctaText} - ${product.title}`}
                >
                  {product.ctaText}
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </Link>
              </article>
            ))}
          </div>

          <div className={`${styles.productsCta} text-center`}>
            <Link href="/products" className="btn btn-primary btn-lg" id="all-products-btn">
              View All Sports Nets
            </Link>
          </div>
        </div>
      </section>

      {/* ── TRUST INDICATORS ──────────────────────────────────── */}
      <section className={`section-pad ${styles.trustSection}`} aria-labelledby="trust-heading">
        <div className="container">
          <div className={`${styles.sectionHeader} reveal text-center`}>
            <span className="section-label">Why Choose Us</span>
            <h2 className={`display-lg ${styles.sectionTitle}`} id="trust-heading">
              Quality Sports Netting<br />
              <span className="text-sand">Engineered to Last</span>
            </h2>
            <div className="divider divider-center" />
          </div>

          <div className={styles.trustGrid}>
            {trusts.map((item, i) => (
              <div key={item.title} className={`${styles.trustCard} reveal`} style={{ animationDelay: `${i * 0.1}s` }}>
                <div className={styles.trustIcon} aria-hidden="true">{item.icon}</div>
                <h3 className={`heading-sm ${styles.trustTitle}`}>{item.title}</h3>
                <p className={`body-sm ${styles.trustDesc}`}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WORKS TEASER ──────────────────────────────────────── */}
      <section className={`section-pad ${styles.worksTeaser}`} aria-labelledby="works-heading">
        <div className="container">
          <div className={`${styles.worksTeaserInner} reveal`}>
            <div className={styles.worksTeaserText}>
              <span className="section-label">Nationwide Portfolio</span>
              <h2 className={`display-lg ${styles.sectionTitle}`} id="works-heading">
                Proven Sports Netting<br />
                <span className="text-sand">Projects Across Pakistan</span>
              </h2>
              <div className="divider" />
              <p className={`body-lg ${styles.sectionDesc}`}>
                Explore our completed installations — from cricket academy nets and rooftop cricket nets to stadium-scale cricket ground netting and durable sports safety nets across Pakistan.
              </p>
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <Link href="/works" className="btn btn-primary btn-lg" id="view-works-btn">
                  View Installation Portfolio
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </Link>
                <Link href="/guides" className="btn btn-outline btn-lg" id="view-guides-btn">
                  Installation Guides
                </Link>
              </div>
            </div>
            <div className={styles.worksTeaserCards}>
              {portfolioShowcase.map(({ id, alt }) => (
                <div key={id} className={`${styles.worksTeaserCard} ${styles[`card${id}`]}`}>
                  <Image
                    src={`/images/home/${id}.jpg`}
                    alt={alt}
                    fill
                    sizes="300px"
                    className={styles.teaserImage}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
