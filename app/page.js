import Link from 'next/link';
import Image from 'next/image';
import { absoluteUrl } from '@/lib/siteUrl';
import { getLocalBusinessSchema } from '@/lib/localBusiness';
import styles from './page.module.css';

const WHATSAPP_NUMBER = '923187768296';
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=Hello%2C%20I%27m%20interested%20in%20your%20sports%20products.`;
const siteUrl = absoluteUrl();

export const metadata = {
  title: {
    absolute: 'Cricket Net Installation & Sports Nets in Pakistan | Cereburum Sports',
  },
  description:
    'Professional cricket net installation across Pakistan for grounds, academies and rooftops. Explore cricket nets, football nets and custom sports netting solutions.',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_PK',
    url: siteUrl,
    siteName: 'Cereburum Sports',
    title: 'Cricket Net Installation & Sports Nets in Pakistan | Cereburum Sports',
    description:
      'Turnkey cricket net installation services across Pakistan. Alongside professional installation, we supply all types of sports nets including cricket, football, court & barrier nets.',
    images: [
      {
        url: '/images/home/1.jpg',
        width: 1200,
        height: 630,
        alt: 'Sports barrier netting and football net installation in Pakistan - Cereburum Sports',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cricket Net Installation & Sports Nets in Pakistan | Cereburum Sports',
    description:
      'Turnkey cricket net installation services across Pakistan. We also supply cricket nets, football netting, court nets & sports barrier nets.',
    images: ['/images/home/1.jpg'],
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebSite',
      '@id': `${siteUrl}/#website`,
      url: siteUrl,
      name: 'Cereburum Sports',
      description: 'Cricket Net Installation & Sports Nets Supply Across Pakistan',
      inLanguage: 'en-PK',
      publisher: {
        '@id': `${siteUrl}/#organization`,
      },
    },
    getLocalBusinessSchema({
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Sports Net Installation Services & Sports Nets Supply',
        itemListElement: [
          {
            '@type': 'Offer',
            url: absoluteUrl('/works'),
            itemOffered: {
              '@type': 'Service',
              name: 'Cricket Net Installation Services',
              url: absoluteUrl('/works'),
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
            url: absoluteUrl('/products?filter=Cricket'),
            itemOffered: {
              '@type': 'Service',
              name: 'Cricket Ground Netting & Rooftop Cricket Nets Installation',
              url: absoluteUrl('/products?filter=Cricket'),
              description:
                'Professional installation of high-tensile cricket ground netting and engineered rooftop cricket nets for residential and commercial facilities.',
              areaServed: {
                '@type': 'Country',
                name: 'Pakistan',
              },
            },
          },
          {
            '@type': 'Offer',
            url: absoluteUrl('/products/cricket-net-24'),
            itemOffered: {
              '@type': 'Service',
              name: 'Cricket Practice Nets & Academy Nets Setup',
              url: absoluteUrl('/products/cricket-net-24'),
              description:
                'Heavy-duty cricket practice net cages and multi-lane cricket academy nets installation engineered for hardball cricket.',
              areaServed: {
                '@type': 'Country',
                name: 'Pakistan',
              },
            },
          },
          {
            '@type': 'Offer',
            url: absoluteUrl('/products/custom'),
            itemOffered: {
              '@type': 'Service',
              name: 'Sports Barrier Netting & Custom Installation Solutions',
              url: absoluteUrl('/products/custom'),
              description:
                'Professional sports net installation for high-durability barrier netting and safety nets protecting spectators and facilities.',
              areaServed: {
                '@type': 'Country',
                name: 'Pakistan',
              },
            },
          },
          {
            '@type': 'Offer',
            url: absoluteUrl('/products?filter=Cricket'),
            itemOffered: {
              '@type': 'Product',
              name: 'Cricket Nets (Practice, Pitch & Boundary Nets)',
              url: absoluteUrl('/products?filter=Cricket'),
              description:
                'High-density UV-treated cricket nets, joint-free parachute netting, and practice nets available in custom dimensions.',
            },
          },
          {
            '@type': 'Offer',
            url: absoluteUrl('/products?filter=Football'),
            itemOffered: {
              '@type': 'Product',
              name: 'Football Netting & Goal Nets',
              url: absoluteUrl('/products?filter=Football'),
              description:
                'All-weather football goal nets, futsal nets, and pitch boundary netting manufactured for durability.',
            },
          },
          {
            '@type': 'Offer',
            url: absoluteUrl('/products?filter=Badminton'),
            itemOffered: {
              '@type': 'Product',
              name: 'Sports Safety Nets & Court Netting',
              url: absoluteUrl('/products?filter=Badminton'),
              description:
                'Heavy-duty sports safety barrier netting, badminton nets, and multi-sport court netting solutions for diverse sports facilities.',
            },
          },
        ],
      },
    }),
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
    icon: '/images/icons/cricket-net.png',
    title: 'Cricket Ground & Academy Net Installation',
    desc: 'Turnkey cricket net installation services for cricket grounds, practice cages, and academy enclosures across Pakistan, built for hardball and softball cricket.',
    filter: 'Cricket',
    ctaText: 'Explore Cricket Nets',
  },
  {
    id: 'football-netting',
    icon: '/images/icons/football-net.png',
    title: 'Football Netting & Goal Nets',
    desc: 'Weatherproof football netting, goal nets, and pitch perimeter barrier nets. Tailored mesh sizes and professional installation for football grounds.',
    filter: 'Football',
    ctaText: 'View Football Nets',
  },
  {
    id: 'rooftop-safety',
    icon: '/images/icons/practice-cage.png',
    title: 'Rooftop Cricket Nets & Practice Cages',
    desc: 'Specialized rooftop cricket net installation custom-engineered for residential terraces, clubs, and training facilities with durable safety barrier netting.',
    filter: 'Custom',
    ctaText: 'Explore Rooftop & Safety Nets',
  },
  {
    id: 'badminton-nets',
    icon: '/images/icons/badminton.png',
    title: 'Badminton, Court & Multi-Sport Nets',
    desc: 'Regulation badminton nets, tennis/volleyball court netting, and multi-sport barrier solutions supplied and installed for indoor and outdoor complexes.',
    filter: 'Badminton',
    ctaText: 'View Court Nets',
  },
];

const trusts = [
  {
    icon: '/images/icons/installation-services.png',
    title: 'Cricket Net Installation Specialists',
    desc: 'Dedicated installation teams delivering precision setup for cricket grounds, rooftop practice cages, and cricket academies across Pakistan.',
  },
  {
    icon: '/images/icons/safety-net.png',
    title: 'Football, Court & Safety Barrier Nets',
    desc: 'Alongside cricket setups, we supply and install football goal nets, badminton court netting, futsal goals, and custom facility barrier nets.',
  },
  {
    icon: '/images/icons/custom-size.png',
    title: 'Custom Sizing & Bespoke Solutions',
    desc: 'Precision net manufacturing tailored to your exact pitch, court, or rooftop dimensions with generous coverage that never falls short.',
  },
  {
    icon: '/images/icons/direct-support.png',
    title: 'Direct Manufacturer Support',
    desc: 'Connect directly with our netting specialists on WhatsApp for sizing advice, quotes on cricket net installation or sports net supply, and nationwide delivery.',
  },
];

const portfolioShowcase = [
  {
    id: 1,
    alt: 'Sports barrier netting and football pitch goal net installation | Cereburum Sports',
  },
  {
    id: 2,
    alt: 'Outdoor cricket practice net cages and academy pitch netting | Cereburum Sports',
  },
  {
    id: 3,
    alt: 'Close-up of a football striking high-tensile sports barrier netting | Cereburum Sports',
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
            <span className="section-label">Cricket Net Installation &amp; Sports Nets</span>
            <h1 className={`display-xl ${styles.heroHeading}`}>
              Cricket Net Installation<br />
              <span className={styles.heroAccent}>Services &amp; Sports Nets in Pakistan</span>
            </h1>
            <p className={`body-lg ${styles.heroSub}`}>
              Pakistan&apos;s trusted specialists in cricket net installation services — delivering turnkey setups for cricket grounds, rooftop cricket nets, practice cages, and academies nationwide. Alongside professional installation, we manufacture and supply all types of sports nets including football netting, court nets, and custom sports barrier netting.
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
              Sports Nets for Cricket, Football<br />
              <span className="text-sand">&amp; Custom Applications</span>
            </h2>
            <div className="divider divider-center" />
            <p className={`body-lg ${styles.sectionDesc}`}>
              We specialize in turnkey cricket net installation services for cricket grounds, rooftop practice setups, academy enclosures, and training facilities across Pakistan. We also manufacture and supply durable football goal nets, court netting, and custom sports barrier nets.
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
                <div className={styles.productIcon} aria-hidden="true">
                  <Image
                    src={product.icon}
                    alt=""
                    width={88}
                    height={88}
                    className={styles.productIconImg}
                  />
                </div>
                <h3 className={`heading-md ${styles.productTitle}`}>{product.title}</h3>
                <p className={`body-md ${styles.productDesc}`}>{product.desc}</p>
                <Link
                  href={product.filter ? `/products?filter=${encodeURIComponent(product.filter)}` : '/products'}
                  className={`btn btn-outline btn-sm ${styles.productBtn}`}
                  aria-label={`${product.ctaText} ${product.title}`}
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
              Explore All Available Nets
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
                <div className={styles.trustIcon} aria-hidden="true">
                  <Image
                    src={item.icon}
                    alt=""
                    width={88}
                    height={88}
                    className={styles.trustIconImg}
                  />
                </div>
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
                Explore our completed installations across Pakistan — from cricket academy nets and rooftop cricket practice setups to stadium perimeter netting and football barrier nets. We supply quality netting materials and provide complete turnkey installation.
              </p>
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <Link href="/works" className="btn btn-primary btn-lg" id="view-works-btn">
                  View Installation Portfolio
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </Link>
                <Link href="/products" className="btn btn-outline btn-lg" id="view-all-nets-btn">
                  Explore All Sports Nets
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