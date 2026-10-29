import Link from 'next/link';
import PageHero from '@/components/PageHero';
import Image from 'next/image';
import { projects } from '@/data/projects';
import { absoluteUrl } from '@/lib/siteUrl';
import { getLocalBusinessSchema } from '@/lib/localBusiness';
import { breadcrumbJsonLd } from '@/components/Breadcrumbs';
import styles from './about.module.css';

const WHATSAPP_NUMBER = '923187768296';
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=Hello%2C%20I%27d%20like%20to%20learn%20more%20about%20Cereburum%20Sports.`;
const aboutUrl = absoluteUrl('/about');
const breadcrumbItems = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
];

export const metadata = {
  title: 'About Us — Sports Net Manufacturer & Installer',
  description:
    'Learn about Cereburum Sports — Pakistan’s trusted sports netting manufacturer and specialist installer for cricket grounds, rooftop practice nets, football pitches, and multi-sport facilities.',
  alternates: {
    canonical: aboutUrl,
  },
  openGraph: {
    type: 'website',
    locale: 'en_PK',
    url: aboutUrl,
    siteName: 'Cereburum Sports',
    title: 'About Us — Sports Net Manufacturer & Installer | Cereburum Sports',
    description:
      'Learn about Cereburum Sports — Pakistan’s trusted sports netting manufacturer and specialist installer for cricket grounds, rooftop practice nets, football pitches, and multi-sport facilities.',
    images: [
      {
        url: '/images/home/1.jpg',
        width: 1200,
        height: 630,
        alt: 'About Cereburum Sports - Sports Netting Manufacturer and Facility Installer in Pakistan',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Us — Sports Net Manufacturer & Installer | Cereburum Sports',
    description:
      'Learn about Cereburum Sports — Pakistan’s trusted sports netting manufacturer and specialist installer for cricket grounds, rooftop practice nets, football pitches, and multi-sport facilities.',
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
        title="Cereburum Sports"
        description="Sports net manufacturers and installers, based in Sialkot. Since 2019, we have helped turn grounds, courts and rooftops into spaces to play."
        image={projects[2].coverImage}
        imageAlt={projects[2].coverImageAlt}
        caption="Bahria Town, Islamabad / Custom folding nets"
        breadcrumbItems={breadcrumbItems}
        actions={<Link href="/works" className="btn btn-primary">Explore our projects</Link>}
      />

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
              <div key={v.title} className={`${styles.valueCard} reveal`} style={{ transitionDelay: `${i * 0.1}s` }}>
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
              <div key={item.year} className={`${styles.timelineItem} reveal`} style={{ transitionDelay: `${i * 0.1}s` }} role="listitem">
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
