import Link from 'next/link';
import Image from 'next/image';
import HeroPhotos from '@/components/HeroPhotos';
import Testimonials from '@/components/Testimonials';
import { absoluteUrl } from '@/lib/siteUrl';
import { preloadHeroImage } from '@/lib/heroImage';
import { getLocalBusinessSchema } from '@/lib/localBusiness';
import { faqJsonLd } from '@/lib/buyerSchema';
import { faqsById } from '@/data/buyerFaqs';
import buyer from '@/components/buyer.module.css';
import styles from './page.module.css';
import { projects } from '@/data/projects';
import { products } from '@/data/products';
import { getGuideById, getGuideCategoryLabel, getGuideCover, getGuideCoverAlt } from '@/data/guides';

const WHATSAPP_NUMBER = '923187768296';
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=Hello%2C%20I%27m%20interested%20in%20your%20sports%20products.`;
const siteUrl = absoluteUrl();
const homeFaqs = faqsById('manufacture', 'range', 'rooftop', 'school', 'cost', 'cities');
const homeDescription = 'Cereburum Sports manufactures and installs cricket, football and court nets from Sialkot. Standard sizes or made to measure, including rooftop practice nets, for schools, academies and arenas across Pakistan.';

export const metadata = {
  title: {
    absolute: 'Sports Nets for Cricket, Football & More | Cereburum Sports',
  },
  description: homeDescription,
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_PK',
    url: siteUrl,
    siteName: 'Cereburum Sports',
    title: 'Sports Nets for Cricket, Football & More | Cereburum Sports',
    description: homeDescription,
    images: [
      {
        url: '/images/home/1.jpg',
        width: 600,
        height: 600,
        alt: 'Sports barrier netting and football net installation in Pakistan - Cereburum Sports',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sports Nets for Cricket, Football & More | Cereburum Sports',
    description: homeDescription,
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
    faqJsonLd(absoluteUrl('/'), homeFaqs),
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
            url: absoluteUrl('/products/cricket-nets'),
            itemOffered: {
              '@type': 'Service',
              name: 'Cricket Ground Netting & Rooftop Cricket Nets Installation',
              url: absoluteUrl('/products/cricket-nets'),
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
            url: absoluteUrl('/products/cricket-nets'),
            itemOffered: {
              '@type': 'Product',
              name: 'Cricket Nets (Practice, Pitch & Boundary Nets)',
              url: absoluteUrl('/products/cricket-nets'),
              description:
                'High-density UV-treated cricket nets, joint-free parachute netting, and practice nets available in custom dimensions.',
            },
          },
          {
            '@type': 'Offer',
            url: absoluteUrl('/products/football-goal-nets'),
            itemOffered: {
              '@type': 'Product',
              name: 'Football Netting & Goal Nets',
              url: absoluteUrl('/products/football-goal-nets'),
              description:
                'All-weather football goal nets, futsal nets, and pitch boundary netting manufactured for durability.',
            },
          },
          {
            '@type': 'Offer',
            url: absoluteUrl('/products/court-nets'),
            itemOffered: {
              '@type': 'Product',
              name: 'Sports Safety Nets & Court Netting',
              url: absoluteUrl('/products/court-nets'),
              description:
                'Heavy-duty sports safety barrier netting, badminton nets, and multi-sport court netting solutions for diverse sports facilities.',
            },
          },
        ],
      },
    }),
  ],
};

const heroPhotos = [
  { src: '/images/hero/hero_01.webp', responsive: true, alt: 'Floodlit cricket enclosure viewed across the grass', position: '63% 48%' },
  { src: '/images/hero/hero_02.webp', alt: 'Corner view of a floodlit sports netting enclosure', position: '56% 48%' },
  { src: '/images/hero/hero_03.webp', alt: 'Brightly lit cricket enclosure behind a low brick wall', position: '61% 42%' },
  { src: '/images/hero/hero_04.webp', alt: 'Tall sports barrier netting viewed from the street at night', position: '58% 36%' },
];

const featured = projects.find((project) => project.id === 'bloomfield-hall-school-khariyan');
const selectedProjects = ['cricket-arena-nowshera', 'cricket-arena-mirpur'].map((id) => projects.find((project) => project.id === id));
const categories = [
  { title: 'Cricket nets', note: 'Practice, academy & ground netting', href: '/products/cricket-nets', product: 'cricket-net-36' },
  { title: 'Football nets', note: 'Goal nets made for the game', href: '/products/football-goal-nets', filter: 'Football' },
  { title: 'Court nets', note: 'For courts and multi-sport spaces', href: '/products/court-nets', filter: 'Badminton' },
  { title: 'Custom installations', note: 'A fit for your space', href: '/products/custom', product: 'custom' },
];
const selectedGuides = ['cricket-arena', 'height-measurement', 'roof-installation']
  .map(getGuideById)
  .filter(Boolean);

const process = [
  { title: 'Tell us about your ground', desc: 'Share your location, dimensions and the way you want to use your space.' },
  { title: 'Find the right netting', desc: 'We help you choose the material and layout for your project.' },
  { title: 'From manufacture to installation', desc: 'Custom netting, supply and professional installation across Pakistan.' },
];

export default function HomePage() {
  preloadHeroImage(heroPhotos[0]);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <section className={`${styles.hero} hero-lcp`} aria-labelledby="home-heading" style={{ position: 'relative', minHeight: 560, background: '#07051A' }}>
        <HeroPhotos photos={heroPhotos}>
          <div className={`container ${styles.heroInner}`}>
            <p className={styles.heroLocation}>Cereburum Sports / Pakistan<span>Manufacturers & installers of sports netting</span></p>
            <div className={styles.heroCopy}>
              <h1 id="home-heading">Cricket net installation.<br />Built for your ground.</h1>
              <p>Manufactured in Sialkot and installed across Pakistan, including Lahore, Karachi, Islamabad, Rawalpindi, Gujranwala, Peshawar and the cities in our project list. From rooftop practice nets to full arenas.</p>
              <div className={styles.heroActions}>
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn btn-whatsapp" id="hero-whatsapp-cta" aria-label="Request a Quote on WhatsApp">Request a Quote</a>
                <Link href="/works" className={styles.heroLink}>Explore our projects <span aria-hidden="true">↗</span></Link>
              </div>
            </div>
          </div>
        </HeroPhotos>
      </section>
      <div className={styles.capabilities} aria-label="Our capabilities">
        <div className="container"><span>Manufacture</span><span>Supply</span><span>Install</span><p>One team. From net to ground.</p></div>
      </div>
      <section className={styles.featured} aria-labelledby="featured-heading">
        <div className={`container ${styles.featuredInner}`}>
          <div className={`${styles.featuredCopy} reveal`}>
            <span className={styles.darkLabel}>Featured installation</span>
            <h2 id="featured-heading">{featured.title}</h2>
            <p>A school sports enclosure with Parachute 36 side netting and Parachute 24 roof netting, built for daily student use.</p>
            <dl className={styles.projectFacts}><div><dt>Ground coverage</dt><dd>1,600 sq ft</dd></div><div><dt>Height clearance</dt><dd>20 ft</dd></div></dl>
            <Link href={`/works/${featured.id}`} className={styles.darkLink}>Explore the project <span aria-hidden="true">↗</span></Link>
          </div>
          <Link href={`/works/${featured.id}`} className={`${styles.featuredImage} reveal`} aria-label={`Explore the ${featured.title} installation`}><Image src={featured.coverImage} alt={featured.coverImageAlt} fill sizes="(max-width: 767px) 100vw, 65vw" /></Link>
        </div>
      </section>
      <section className={`section-pad ${styles.workSection}`} aria-labelledby="work-heading">
        <div className="container">
          <div className={`${styles.sectionHead} reveal`}><div><span className="section-label">Built across Pakistan</span><h2 id="work-heading">Different grounds.<br />The same commitment.</h2></div><Link href="/works" className={styles.textLink}>All projects <span aria-hidden="true">↗</span></Link></div>
          <div className={styles.projectGrid}>{selectedProjects.map((project) => <Link href={`/works/${project.id}`} key={project.id} className={`${styles.project} reveal`}><div className={styles.projectImage}><Image src={project.coverImage} alt={project.coverImageAlt} fill sizes="(max-width: 767px) 100vw, 50vw" /></div><div className={styles.projectCaption}><div><p>{project.location} / {project.year}</p><h3>{project.title}</h3></div><span aria-hidden="true">↗</span></div></Link>)}</div>
        </div>
      </section>
      <section className={`section-pad ${styles.categorySection}`} aria-labelledby="categories-heading">
        <div className="container">
          <div className={`${styles.sectionHead} reveal`}><div><span className="section-label">The netting range</span><h2 id="categories-heading">Netting for every space.</h2></div><Link href="/products" className={styles.textLink}>All products <span aria-hidden="true">↗</span></Link></div>
          <div className={styles.categoryGrid}>{categories.map((category) => {
            const product = products.find((item) => category.product ? item.id === category.product : item.filterGroup === category.filter);
            return <Link key={category.title} href={category.href} className={`${styles.category} reveal`}><div className={styles.categoryImage}><Image src={product.image} alt={product.imageAlt || category.title} fill sizes="(max-width: 599px) 50vw, 25vw" /></div><h3>{category.title} <span aria-hidden="true">↗</span></h3><p>{category.note}</p></Link>;
          })}</div>
        </div>
      </section>
      <section className={`section-pad ${styles.guideSection}`} aria-labelledby="home-guides-heading">
        <div className="container">
          <div className={`${styles.sectionHead} reveal`}>
            <h2 id="home-guides-heading">Installation &amp; setup guides</h2>
            <Link href="/guides" className={styles.textLink}>All guides <span aria-hidden="true">↗</span></Link>
          </div>
          <div className={styles.guideGrid}>
            {selectedGuides.map((guide) => {
              const cover = getGuideCover(guide);
              return (
                <Link href={`/guides/${guide.id}`} key={guide.id} className={`${styles.project} reveal`}>
                  {cover && (
                    <div className={styles.projectImage}>
                      <Image src={cover} alt={getGuideCoverAlt(guide)} fill sizes="(max-width: 767px) 100vw, 33vw" />
                    </div>
                  )}
                  <div className={styles.projectCaption}>
                    <div>
                      <p>{getGuideCategoryLabel(guide.category)}</p>
                      <h3>{guide.title}</h3>
                    </div>
                    <span aria-hidden="true">↗</span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
      <section className={`section-pad ${styles.processSection}`} aria-labelledby="process-heading">
        <div className="container"><div className={`${styles.sectionHead} reveal`}><div><span className="section-label">From the first conversation</span><h2 id="process-heading">A clear path to your ground.</h2></div></div><ol className={styles.processGrid}>{process.map((step, i) => <li key={step.title} className="reveal" style={{ '--reveal-delay': `${i * 50}ms` }}><span className={styles.stepNumber}>0{i + 1}</span><h3>{step.title}</h3><p>{step.desc}</p></li>)}</ol></div>
      </section>
      <section className={`section-pad ${buyer.section}`} aria-labelledby="sialkot-maker-heading">
        <div className="container">
          <h2 id="sialkot-maker-heading">Sports net manufacturers in Sialkot</h2>
          <p>Cereburum Sports manufactures, supplies and installs sports nets from Sialkot: cricket practice and arena netting, including roof netting, football and futsal goal nets, badminton and court nets, hockey nets, and custom sizes.</p>
          <ul className={buyer.links}><li><Link href="/about">About the workshop</Link></li></ul>
        </div>
      </section>
      <section className={`section-pad ${buyer.section}`} aria-labelledby="rooftop-heading">
        <div className="container">
          <h2 id="rooftop-heading">Rooftop cricket practice nets</h2>
          <p>Rooftop installations are common. A bamboo frame is the cost-effective option, and an iron frame is the more durable one. Feasibility still depends on the roof layout and access. Published Sialkot rooftops include Gohadpur, Daska Road and an L-shaped house roof.</p>
          <ul className={buyer.links}>
            <li><Link href="/guides/rooftop-cricket-practice-net">Rooftop guide</Link></li>
            <li><Link href="/works/roof-top-net-sialkot">Gohadpur</Link></li>
            <li><Link href="/works/roof-top-net-sialkot-daska-road">Daska Road</Link></li>
            <li><Link href="/works/house-roof-top-net-sialkot">House rooftop</Link></li>
          </ul>
        </div>
      </section>
      <section className={`section-pad ${buyer.section}`} aria-labelledby="school-heading">
        <div className="container">
          <h2 id="school-heading">School and academy netting</h2>
          <p>Bloomfield Hall School in Kharian has a 40 ft by 40 ft enclosure, 20 ft high, with Parachute 36 sides and a Parachute 24 roof. Share the ground size and the sports students play.</p>
          <ul className={buyer.links}>
            <li><Link href="/works/bloomfield-hall-school-khariyan">Bloomfield Hall School</Link></li>
            <li><Link href="/services/school-sports-ground-netting">School sports ground netting</Link></li>
          </ul>
        </div>
      </section>
      <section className={`section-pad ${buyer.section}`} aria-labelledby="cost-heading">
        <div className="container">
          {/* TODO(owner): add 2–3 starting ranges for a 100×10 practice panel, a rooftop cage, and a full arena. */}
          <h2 id="cost-heading">What our nets cost</h2>
          <p>Quotes depend on size, material and structure. Standard sizes and custom sizes are both available. Indicative prices are published only after we add them.</p>
          <ul className={buyer.links}>
            <li><Link href="/guides/cricket-net-price-pakistan">How cricket net pricing works</Link></li>
            <li><Link href="/guides/cricket-arena-cost-pakistan">Arena cost</Link></li>
          </ul>
        </div>
      </section>
      <section className={`section-pad ${buyer.faq}`} aria-labelledby="home-faq-heading">
        <div className="container">
          <h2 id="home-faq-heading">Questions</h2>
          <dl>
            {homeFaqs.map((faq) => (
              <div key={faq.id}>
                <dt>{faq.q}</dt>
                <dd>
                  <p>{faq.a}</p>
                  {faq.links?.length ? (
                    <ul className={buyer.links}>
                      {faq.links.map((link) => <li key={link.href}><Link href={link.href}>{link.label}</Link></li>)}
                    </ul>
                  ) : null}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>
      <Testimonials />
    </>
  );
}
