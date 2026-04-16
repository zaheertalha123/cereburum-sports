import styles from './about.module.css';

const WHATSAPP_NUMBER = '923187768296';
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=Hello%2C%20I%27d%20like%20to%20learn%20more%20about%20Cereburum%20Sports.`;

export const metadata = {
  title: 'About Us — Our Story & Mission',
  description:
    'Learn about Cereburum Sports — our story, mission, values, and expertise in sports barrier netting and sports equipment across Pakistan.',
};

const values = [
  { icon: '🎯', title: 'Precision', desc: 'Every installation is measured, planned, and executed with engineering-grade accuracy.' },
  { icon: '💪', title: 'Durability', desc: 'We refuse to compromise on materials — only UV-resistant, weatherproof, long-life products.' },
  { icon: '🤝', title: 'Partnership', desc: 'We work alongside clients from consultation to completion and beyond.' },
  { icon: '📐', title: 'Expertise', desc: 'Backed by a decade of experience in sports facility netting across Pakistan.' },
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
      {/* Hero */}
      <section className={styles.hero} aria-label="About us hero">
        <div className={styles.heroBg} aria-hidden="true">
          <div className={styles.heroGrad} />
          <div className={styles.heroGrid} />
          <div className={styles.heroOrb} />
        </div>
        <div className={`container ${styles.heroContent}`}>
          <div className={`animate-fade-in-up ${styles.heroText}`}>
            <span className="section-label">Our Story</span>
            <h1 className={`display-lg ${styles.heroTitle} animate-fade-in-up`}>
              Built on Quality.<br />
              <span className="text-sand">Driven by Sport.</span>
            </h1>
            <div className="divider" />
            <p className={`body-lg ${styles.heroDesc} animate-fade-in`}>
              Cereburum Sports was born from a simple belief: Pakistan&apos;s sports facilities
              deserve world-class netting and equipment, installed with professionalism and care.
              Over a decade later, that mission still drives every project we take on.
            </p>
          </div>

          {/* Stats block */}
          <div className={`${styles.heroStats} animate-fade-in`} style={{ animationDelay: '0.2s' }}>
            {[
              { v: '8+', l: 'Years Active' },
              { v: '100+', l: 'Projects Done' },
              { v: '7+', l: 'Sports Covered' },
              { v: '100%', l: 'Client Focused' },
            ].map(({ v, l }) => (
              <div key={l} className={styles.heroStat}>
                <span className={`display-md ${styles.heroStatNum}`}>{v}</span>
                <span className={`body-sm ${styles.heroStatLbl}`}>{l}</span>
              </div>
            ))}
          </div>
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
              <div key={v.title} className={`${styles.valueCard} reveal`} style={{ transitionDelay: `${i * 0.1}s` }}>
                <div className={styles.valueIcon} aria-hidden="true">{v.icon}</div>
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
              A Decade of <span className="text-sand">Excellence</span>
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
