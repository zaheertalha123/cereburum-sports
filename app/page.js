import Link from 'next/link';
import Image from 'next/image';
import HeroPhotos from '@/components/HeroPhotos';
import Testimonials from '@/components/Testimonials';
import { absoluteUrl } from '@/lib/siteUrl';
import { getLocalBusinessSchema } from '@/lib/localBusiness';
import styles from './page.module.css';
import { projects } from '@/data/projects';
import { products } from '@/data/products';
import { getGuideById, getGuideCategoryLabel, getGuideCover, getGuideCoverAlt } from '@/data/guides';

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
        width: 600,
        height: 600,
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

const heroPhotos = [
  { src: '/images/hero/hero_01.webp', alt: 'Floodlit cricket enclosure viewed across the grass', position: '63% 48%' },
  { src: '/images/hero/hero_02.webp', alt: 'Corner view of a floodlit sports netting enclosure', position: '56% 48%' },
  { src: '/images/hero/hero_03.webp', alt: 'Brightly lit cricket enclosure behind a low brick wall', position: '61% 42%' },
  { src: '/images/hero/hero_04.webp', alt: 'Tall sports barrier netting viewed from the street at night', position: '58% 36%' },
];

const featured = projects.find((project) => project.id === 'bloomfield-hall-school-khariyan');
const selectedProjects = ['cricket-arena-nowshera', 'cricket-arena-mirpur'].map((id) => projects.find((project) => project.id === id));
const categories = [
  { title: 'Cricket nets', note: 'Practice, academy & ground netting', href: '/products?filter=Cricket', product: 'cricket-net-36' },
  { title: 'Football nets', note: 'Goal nets made for the game', href: '/products?filter=Football', filter: 'Football' },
  { title: 'Court nets', note: 'For courts and multi-sport spaces', href: '/products?filter=Badminton', filter: 'Badminton' },
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
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <section className={styles.hero} aria-labelledby="home-heading">
        <HeroPhotos photos={heroPhotos}>
          <div className={`container ${styles.heroInner}`}>
            <p className={styles.heroLocation}>Cereburum Sports / Pakistan<span>Manufacturers & installers of sports netting</span></p>
            <div className={styles.heroCopy}>
              <h1 id="home-heading">Cricket net installation.<br />Built for your ground.</h1>
              <p>From rooftop practice spaces to full-scale arenas. We manufacture, supply and install sports nets across Pakistan.</p>
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
      <Testimonials />
    </>
  );
}
