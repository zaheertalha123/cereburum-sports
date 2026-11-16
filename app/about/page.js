import Link from 'next/link';
import PageHero from '@/components/PageHero';
import Image from 'next/image';
import { absoluteUrl } from '@/lib/siteUrl';
import { getLocalBusinessSchema } from '@/lib/localBusiness';
import { breadcrumbJsonLd } from '@/components/Breadcrumbs';
import styles from './about.module.css';
import buyer from '@/components/buyer.module.css';

const WHATSAPP_NUMBER = '923187768296';
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=Hello%2C%20I%27d%20like%20to%20learn%20more%20about%20Cereburum%20Sports.`;
const aboutUrl = absoluteUrl('/about');
const breadcrumbItems = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
];

export const metadata = {
  title: 'Sports Net Manufacturers in Sialkot',
  description:
    'Cereburum Sports manufactures and installs sports nets in Sialkot: cricket, football, futsal, court and hockey nets, including rooftop and school enclosures across Pakistan.',
  alternates: {
    canonical: aboutUrl,
  },
  openGraph: {
    type: 'website',
    locale: 'en_PK',
    url: aboutUrl,
    siteName: 'Cereburum Sports',
    title: 'Sports Net Manufacturers in Sialkot | Cereburum Sports',
    description:
      'Cereburum Sports manufactures and installs sports nets in Sialkot: cricket, football, futsal, court and hockey nets, including rooftop and school enclosures across Pakistan.',
    images: [
      {
        url: '/images/home/1.jpg',
        width: 600,
        height: 600,
        alt: 'About Cereburum Sports - Sports Netting Manufacturer and Facility Installer in Pakistan',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sports Net Manufacturers in Sialkot | Cereburum Sports',
    description:
      'Cereburum Sports manufactures and installs sports nets in Sialkot: cricket, football, futsal, court and hockey nets, including rooftop and school enclosures across Pakistan.',
    images: ['/images/home/1.jpg'],
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    breadcrumbJsonLd(breadcrumbItems),
    {
      '@type': 'AboutPage',
      '@id': `${aboutUrl}/#webpage`,
      url: aboutUrl,
      name: 'About Cereburum Sports',
      description: 'Pakistan’s trusted specialist for cricket net installation, rooftop cricket practice cages, and sports barrier netting.',
      mainEntity: getLocalBusinessSchema(),
    },
  ],
};

const values = [
  {
    icon: '/images/icons/precision.png',
    title: 'Precision',
    desc: 'Every installation is measured, planned, and executed with engineering-grade accuracy.',
  },
  {
    icon: '/images/icons/durability.png',
    title: 'Durability',
    desc: 'We refuse to compromise on materials — only UV-resistant, weatherproof, long-life products.',
  },
  {
    icon: '/images/icons/partnership.png',
    title: 'Partnership',
    desc: 'We work alongside clients from consultation to completion and beyond.',
  },
  {
    icon: '/images/icons/expertise.png',
    title: 'Expertise',
    desc: 'Backed by years of experience in sports facility netting across Pakistan.',
  },
];

const timeline = [
  {
    year: '2019',
    event: 'Founded & Registered',
    desc: 'Cereburum Sports was established and formally registered, beginning with premium cricket netting for local academies and a quality-first approach that still guides every job.',
  },
  {
    year: '2020',
    event: 'Expansion & Scale-Up',
    desc: 'Broadened our lineup to football, tennis, and multi-sport barrier netting while growing our install capacity — taking on larger grounds, venues, and multi-site projects across major cities.',
  },
  {
    year: '2021',
    event: 'Innovation',
    desc: 'Pushed into custom structural netting: rooftop barriers, complex facades, and engineered solutions for facilities where off-the-shelf products fall short.',
  },
  {
    year: '2025',
    event: '100+ Projects',
    desc: 'Surpassed one hundred completed installations nationwide — from training academies to professional-grade facilities — reinforcing trust in the Cereburum name.',
  },
  {
    year: '2026',
    event: 'Forward Momentum',
    desc: 'We are still moving: refining products, expanding our installation network, and partnering on new projects so Pakistan’s sports infrastructure keeps leveling up.',
  },
];

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <PageHero
        title="Sports net manufacturers and installers in Sialkot"
        description="Since 2019, Cereburum Sports has manufactured and installed sports nets for grounds, courts and rooftops. The workshop is in Sialkot."
        image="/images/about_hero/about_hero.webp"
        imageAlt="Industrial net-making machine threaded with white yarn"
        imagePosition="60% center"
        breadcrumbItems={breadcrumbItems}
        actions={<Link href="/works" className="btn btn-primary">Explore our projects</Link>}
      />

      <section className={`section-pad ${buyer.section}`} aria-labelledby="what-we-make-heading">
        <div className="container">
          <h2 id="what-we-make-heading">What we make</h2>
          <p>Cereburum Sports manufactures, supplies and installs sports nets: cricket practice and arena netting, including roof netting, football and futsal goal nets, badminton and court nets, hockey nets, and custom sizes.</p>
          <h2>Where we install</h2>
          <p>The workshop is in Sialkot. We deliver and install across Pakistan where it is practical, including Lahore, Karachi, Islamabad and Rawalpindi, and the cities already shown in the project list. There is no separate office in those cities.</p>
          <ul className={buyer.links}>
            <li><Link href="/locations/sialkot">Sialkot</Link></li>
            <li><Link href="/locations/lahore">Lahore</Link></li>
            <li><Link href="/locations/karachi">Karachi</Link></li>
            <li><Link href="/locations/islamabad">Islamabad</Link></li>
            <li><Link href="/locations/rawalpindi">Rawalpindi</Link></li>
          </ul>
          <h2>Local manufacture and imported nets</h2>
          <p>The nets are made in Sialkot, in custom sizes when you need them, and the installation team fits them where the site allows. Factory visits are welcome. That is the practical difference from buying a net and arranging installation separately.</p>
          <h2>Installed work</h2>
          <p>The public timeline includes more than 100 projects by 2025. These pages show a school enclosure, two arenas and a Sialkot rooftop.</p>
          {/* TODO(owner): approved testimonials or a Google review embed. Do not invent reviews or ratings. */}
          <ul className={buyer.links}>
            <li><Link href="/works/bloomfield-hall-school-khariyan">Bloomfield Hall School</Link></li>
            <li><Link href="/works/cricket-arena-nowshera">Nowshera arena</Link></li>
            <li><Link href="/works/cricket-arena-mirpur">Mirpur arena</Link></li>
            <li><Link href="/works/roof-top-net-sialkot">Gohadpur rooftop</Link></li>
          </ul>
        </div>
      </section>

      {/* Values */}
      <section className={styles.valuesSection} aria-labelledby="values-heading">
        <div className="container">
          <div className={`${styles.sectionHeader} reveal text-center`}>
            <span className="section-label">What Drives Us</span>
            <h2 className={`display-lg ${styles.sectionTitle}`} id="values-heading">
              Our Core <span className="text-sand">Values</span>
            </h2>
            <div className="divider divider-center" />
          </div>
          <div className={styles.valuesGrid}>
            {values.map((v, i) => (
              <div key={v.title} className={`${styles.valueCard} reveal`} style={{ '--reveal-delay': `${(i % 4) * 50}ms` }}>
                <div className={styles.valueIcon} aria-hidden="true">
                  <Image
                    src={v.icon}
                    alt=""
                    width={88}
                    height={88}
                    className={styles.valueIconImg}
                  />
                </div>
                <h3 className={`heading-md ${styles.valueTitle}`}>{v.title}</h3>
                <p className={`body-md ${styles.valueDesc}`}>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className={`section-pad ${styles.timelineSection}`} aria-labelledby="timeline-heading">
        <div className="container">
          <div className={`${styles.sectionHeader} reveal text-center`}>
            <span className="section-label">Our Journey</span>
            <h2 className={`display-lg ${styles.sectionTitle}`} id="timeline-heading">
              Years of <span className="text-sand">Excellence</span>
            </h2>
            <div className="divider divider-center" />
          </div>

          <div className={styles.timeline} role="list">
            {timeline.map((item, i) => (
              <div key={item.year} className={`${styles.timelineItem} reveal`} style={{ '--reveal-delay': `${(i % 4) * 50}ms` }} role="listitem">
                <div className={styles.timelineLeft}>
                  <span className={`display-md ${styles.timelineYear}`}>{item.year}</span>
                </div>
                <div className={styles.timelineCenter} aria-hidden="true">
                  <div className={styles.timelineDot} />
                  <div className={styles.timelineLine} />
                </div>
                <div className={styles.timelineRight}>
                  <span className={`label ${styles.timelineEvent}`}>{item.event}</span>
                  <p className={`body-md ${styles.timelineDesc}`}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
