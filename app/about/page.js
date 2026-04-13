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
  { year: '2014', event: 'Founded', desc: 'Cereburum Sports was founded with a focus on quality cricket netting for local academies.' },
  { year: '2017', event: 'Expansion', desc: 'Expanded product range to include football, tennis, and multi-sport netting solutions.' },
  { year: '2020', event: 'Scale-Up', desc: 'Scaled operations to handle large-scale stadium and ground installations across major cities.' },
  { year: '2023', event: '500+ Projects', desc: 'Crossed 500 completed installations, establishing Cereburum as a trusted national brand.' },
  { year: '2024', event: 'Innovation', desc: 'Introduced custom structural netting for rooftop and complex architectural environments.' },
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
              { v: '10+',  l: 'Years Active' },
              { v: '500+', l: 'Projects Done' },
              { v: '8+',   l: 'Sports Covered' },
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

      {/* Mission & Vision */}
      <section className={`section-pad ${styles.missionSection}`} aria-labelledby="mission-heading">
        <div className="container">
          <div className={styles.missionGrid}>
            <div className={`${styles.missionCard} ${styles.mission} reveal`}>
              <div className={styles.missionIcon} aria-hidden="true">🎯</div>
              <h2 className={`heading-lg ${styles.missionTitle}`} id="mission-heading">Our Mission</h2>
              <div className="divider" />
              <p className="body-lg">
                To provide Pakistan&apos;s sports community with premium, safety-compliant barrier netting and 
                equipment — backed by expert consultation and professional installation — so that every athlete 
                can train and compete in a safe, high-quality environment.
              </p>
            </div>
            <div className={`${styles.missionCard} ${styles.vision} reveal`}>
              <div className={styles.missionIcon} aria-hidden="true">🔭</div>
              <h2 className={`heading-lg ${styles.missionTitle}`}>Our Vision</h2>
              <div className="divider" />
              <p className="body-lg">
                To become the most trusted name in sports infrastructure across South Asia — known for 
                uncompromising quality, innovative solutions, and a genuine commitment to advancing 
                sport at every level.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className={`section-pad ${styles.valuesSection}`} aria-labelledby="values-heading">
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

      {/* Team / Closing CTA */}
      <section className={`section-pad ${styles.ctaSection}`} aria-label="Contact CTA">
        <div className="container">
          <div className={`${styles.ctaCard} reveal`}>
            <div className={styles.ctaCardBg} aria-hidden="true" />
            <div className={styles.ctaCardContent}>
              <span className="section-label">Work With Us</span>
              <h2 className={`display-lg ${styles.ctaTitle}`}>
                Ready to Build Your<br />
                <span className="text-sand">Sports Facility?</span>
              </h2>
              <p className={`body-lg ${styles.ctaDesc}`}>
                Talk directly with our specialists on WhatsApp. We respond quickly and provide free consultations for all project sizes.
              </p>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-whatsapp btn-lg"
                aria-label="Contact us on WhatsApp"
                id="about-whatsapp-cta"
              >
                <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 2.126.553 4.122 1.522 5.857L0 24l6.335-1.509C8.05 23.447 9.977 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818c-1.86 0-3.601-.504-5.09-1.38l-.365-.217-3.762.896.956-3.665-.238-.377C2.504 15.44 2.181 13.758 2.181 12 2.181 6.57 6.57 2.181 12 2.181c5.431 0 9.819 4.389 9.819 9.819 0 5.431-4.388 9.818-9.819 9.818z"/>
                </svg>
                Start a Conversation
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
