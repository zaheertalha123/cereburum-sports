import Link from 'next/link';
import styles from './page.module.css';

const WHATSAPP_NUMBER = '923187768296';
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=Hello%2C%20I%27m%20interested%20in%20your%20sports%20products.`;

export const metadata = {
  title: 'Cereburum Sports — Premium Sports Barrier Netting & Equipment',
  description:
    'Specialists in premium sports barrier nettings, cricket nets, football netting, and custom sports equipment installations across Pakistan.',
};

const stats = [
  { value: '500+', label: 'Projects Completed' },
  { value: '10+',  label: 'Years Experience' },
  { value: '100%', label: 'Quality Assured' },
  { value: '50+',  label: 'Sports Facilities' },
];

const products = [
  {
    id: 'barrier-netting',
    icon: '🏟️',
    title: 'Sports Barrier Netting',
    desc: 'Heavy-duty perimeter netting for cricket grounds, football fields, and multi-sport facilities. Engineered for durability and safety.',
    tag: 'Most Popular',
  },
  {
    id: 'cricket-nets',
    icon: '🏏',
    title: 'Cricket Practice Nets',
    desc: 'Professional-grade cricket nets for academies, clubs, and outdoor grounds. Custom sizing available.',
    tag: null,
  },
  {
    id: 'football-nets',
    icon: '⚽',
    title: 'Football & Goal Nets',
    desc: 'Premium goal nets and boundary netting for football pitches of all sizes. Weatherproof materials.',
    tag: null,
  },
  {
    id: 'custom',
    icon: '🔧',
    title: 'Custom Solutions',
    desc: 'Bespoke netting solutions designed to your exact specifications — size, material, color, and installation.',
    tag: 'Tailored',
  },
];

const trusts = [
  { icon: '✅', title: 'Premium Materials', desc: 'UV-resistant, weatherproof nets built to last for years in all conditions.' },
  { icon: '🛡️', title: 'Safety Certified',   desc: 'All products meet international safety standards for sports facilities.' },
  { icon: '⚡', title: 'Fast Installation',  desc: 'Professional installation teams with minimal disruption to your facility.' },
  { icon: '📞', title: 'Direct Support',     desc: 'Chat with us on WhatsApp anytime — no middlemen, just fast answers.' },
];

export default function HomePage() {
  return (
    <>
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
            <span className="section-label">Pakistan&apos;s Sports Specialists</span>
            <h1 className={`display-xl ${styles.heroHeading}`}>
              Barrier Netting<br />
              <span className={styles.heroAccent}>Built for Champions</span>
            </h1>
            <p className={`body-lg ${styles.heroSub}`}>
              Premium sports barrier nettings and equipment for cricket grounds, football fields,
              and custom sports facilities. Trusted by academies across Pakistan.
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
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 2.126.553 4.122 1.522 5.857L0 24l6.335-1.509C8.05 23.447 9.977 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818c-1.86 0-3.601-.504-5.09-1.38l-.365-.217-3.762.896.956-3.665-.238-.377C2.504 15.44 2.181 13.758 2.181 12 2.181 6.57 6.57 2.181 12 2.181c5.431 0 9.819 4.389 9.819 9.819 0 5.431-4.388 9.818-9.819 9.818z"/>
                </svg>
                Get Free Quote
              </a>
              <Link href="/products" className="btn btn-outline btn-lg" id="hero-products-btn">
                View Products
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
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

        <div className={styles.heroScrollIndicator} aria-hidden="true">
          <div className={styles.scrollDot} />
        </div>
      </section>

      {/* ── PRODUCTS OVERVIEW ─────────────────────────────────── */}
      <section className={`section-pad ${styles.productsSection}`} aria-labelledby="products-heading">
        <div className="container">
          <div className={`${styles.sectionHeader} reveal text-center`}>
            <span className="section-label">Our Products</span>
            <h2 className={`display-lg ${styles.sectionTitle}`} id="products-heading">
              Everything Your<br />
              <span className="text-sand">Facility Needs</span>
            </h2>
            <div className="divider divider-center" />
            <p className={`body-lg ${styles.sectionDesc}`}>
              From perimeter barrier netting to custom solutions — we supply, deliver, and install with precision.
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
                <Link href="/products" className={`btn btn-outline btn-sm ${styles.productBtn}`}>
                  Learn More
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </Link>
              </article>
            ))}
          </div>

          <div className={`${styles.productsCta} text-center`}>
            <Link href="/products" className="btn btn-primary btn-lg" id="all-products-btn">
              View All Products
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
              Quality You Can<br />
              <span className="text-sand">Trust</span>
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
              <span className="section-label">Portfolio</span>
              <h2 className={`display-lg ${styles.sectionTitle}`} id="works-heading">
                Trusted by Facilities<br />
                <span className="text-sand">Across Pakistan</span>
              </h2>
              <div className="divider" />
              <p className={`body-lg ${styles.sectionDesc}`}>
                Explore our portfolio of completed installations — from local academies to
                professional-grade sports grounds.
              </p>
              <Link href="/works" className="btn btn-primary btn-lg" id="view-works-btn">
                View Our Work
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </Link>
            </div>
            <div className={styles.worksTeaserCards} aria-hidden="true">
              {[1, 2, 3].map((n) => (
                <div key={n} className={`${styles.worksTeaserCard} ${styles[`card${n}`]}`} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
