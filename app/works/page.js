import styles from './works.module.css';

const WHATSAPP_NUMBER = '923187768296';
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=Hello%2C%20I%20saw%20your%20past%20projects%20and%20I%27d%20like%20a%20similar%20installation.`;

export const metadata = {
  title: 'Our Works — Completed Sports Facility Installations',
  description:
    'Browse Cereburum Sports\'s portfolio of completed sports barrier netting installations. Cricket grounds, football pitches, academies, and multi-sport facilities across Pakistan.',
};

const projects = [
  {
    id: 'cricket-academy',
    title: 'Elite Cricket Academy, Lahore',
    category: 'Cricket Nets',
    type: 'Practice Facility',
    desc: 'Full installation of 8-lane cricket practice nets with HDPE barrier netting around the full perimeter. Three months from design to handover.',
    highlights: ['8 batting lanes', '30-ft perimeter barrier', '4,200 sq ft coverage'],
    year: '2024',
    badge: 'Featured',
    gradient: 'linear-gradient(135deg, rgba(18,17,74,0.9), rgba(7,5,26,0.95))',
  },
  {
    id: 'football-ground',
    title: 'District Football Ground, Faisalabad',
    category: 'Barrier Netting',
    type: 'Sports Ground',
    desc: 'High-tensile perimeter netting installed on all four sides of a standard FIFA full-size pitch. Wind-load tested to category 3 standards.',
    highlights: ['Full 360° perimeter', '25-ft barrier height', 'Wind-rated Category 3'],
    year: '2024',
    badge: null,
    gradient: 'linear-gradient(135deg, rgba(26,24,112,0.7), rgba(7,5,26,0.95))',
  },
  {
    id: 'school-sports',
    title: 'Beacon House School Sports Complex',
    category: 'Multi-Sport',
    type: 'School Facility',
    desc: 'Multi-sport netting system covering cricket, football, and basketball court areas, designed to retract between sports sessions.',
    highlights: ['3 sports covered', 'Retractable design', 'Child-safe specifications'],
    year: '2023',
    badge: null,
    gradient: 'linear-gradient(135deg, rgba(18,17,74,0.8), rgba(26,24,112,0.7))',
  },
  {
    id: 'tennis-club',
    title: 'Gulberg Tennis & Squash Club',
    category: 'Court Nets',
    type: 'Tennis Club',
    desc: 'ITF-compliant tennis court boundary and net replacement for 4 hard courts and 2 clay courts. All-weather materials selected.',
    highlights: ['6 courts completed', 'ITF compliant', 'All-weather materials'],
    year: '2023',
    badge: null,
    gradient: 'linear-gradient(135deg, rgba(187,181,101,0.12), rgba(7,5,26,0.95))',
  },
  {
    id: 'rooftop-cricket',
    title: 'Rooftop Cricket Facility, Karachi',
    category: 'Custom Solution',
    type: 'Rooftop Facility',
    desc: 'Bespoke structural netting designed for a rooftop cricket net facility. Full safety-rated enclosure with fire escape compliance.',
    highlights: ['Custom structural design', 'Safety-rated enclosure', 'Rooftop compliant'],
    year: '2023',
    badge: 'Custom',
    gradient: 'linear-gradient(135deg, rgba(26,24,112,0.85), rgba(18,17,74,0.7))',
  },
  {
    id: 'stadium-barrier',
    title: 'Community Cricket Stadium, Rawalpindi',
    category: 'Barrier Netting',
    type: 'Stadium',
    desc: 'Large-scale barrier netting installation for a 5,000-seat community cricket stadium. Spectator safety nets plus sight screens.',
    highlights: ['5,000 seat capacity', 'Spectator safety nets', 'Sight screens included'],
    year: '2022',
    badge: null,
    gradient: 'linear-gradient(135deg, rgba(7,5,26,0.95), rgba(18,17,74,0.8))',
  },
];

const categories = ['All', 'Cricket Nets', 'Barrier Netting', 'Multi-Sport', 'Court Nets', 'Custom Solution'];

export default function WorksPage() {
  return (
    <>
      {/* Page Header */}
      <section className={styles.pageHeader} aria-label="Our works page header">
        <div className={styles.headerBg} aria-hidden="true">
          <div className={styles.headerGrad} />
          <div className={styles.headerGrid} />
        </div>
        <div className={`container ${styles.headerContent}`}>
          <span className="section-label animate-fade-in">Portfolio</span>
          <h1 className={`display-lg ${styles.pageTitle} animate-fade-in-up`}>
            Our Work Speaks<br />
            <span className="text-sand">For Itself</span>
          </h1>
          <div className="divider divider-center" style={{ margin: '1.25rem auto 1.75rem' }} />
          <p className={`body-lg ${styles.pageDesc} animate-fade-in`}>
            500+ installations and counting — from local academies to professional-grade facilities
            across Pakistan.
          </p>

          {/* Category filter pills (static for now, JS-free) */}
          <div className={styles.filterRow} role="list" aria-label="Project categories">
            {categories.map((cat) => (
              <span
                key={cat}
                className={`${styles.filterPill} ${cat === 'All' ? styles.filterActive : ''}`}
                role="listitem"
              >
                {cat}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className={`section-pad ${styles.projectsSection}`} aria-label="Project portfolio">
        <div className="container">
          <div className={styles.projectsGrid}>
            {projects.map((project, i) => (
              <article
                key={project.id}
                id={project.id}
                className={`${styles.projectCard} ${i === 0 ? styles.featured : ''} reveal`}
                style={{ transitionDelay: `${(i % 3) * 0.08}s` }}
                aria-label={project.title}
              >
                {/* Visual area */}
                <div
                  className={styles.cardVisual}
                  style={{ background: project.gradient }}
                  aria-hidden="true"
                >
                  <div className={styles.cardVisualDecor} />
                  <div className={styles.cardVisualIcon}>
                    {project.category === 'Cricket Nets'    && '🏏'}
                    {project.category === 'Barrier Netting' && '🏟️'}
                    {project.category === 'Multi-Sport'     && '🏅'}
                    {project.category === 'Court Nets'      && '🎾'}
                    {project.category === 'Custom Solution' && '🔧'}
                  </div>
                </div>

                {/* Content */}
                <div className={styles.cardContent}>
                  <div className={styles.cardMeta}>
                    <span className={styles.cardCategory}>{project.category}</span>
                    {project.badge && (
                      <span className={styles.cardBadge}>{project.badge}</span>
                    )}
                    <span className={styles.cardYear}>{project.year}</span>
                  </div>

                  <h2 className={`heading-md ${styles.cardTitle}`}>{project.title}</h2>
                  <p className={`body-sm ${styles.cardType}`}>{project.type}</p>
                  <p className={`body-sm ${styles.cardDesc}`}>{project.desc}</p>

                  {/* Highlights */}
                  <ul className={styles.highlights} role="list" aria-label="Project highlights">
                    {project.highlights.map((h) => (
                      <li key={h} className={styles.highlight}>
                        <span className={styles.highlightDot} aria-hidden="true" />
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>

          {/* Bottom CTA */}
          {/* <div className={`${styles.bottomCta} text-center`}>
            <p className={`body-lg ${styles.ctaText}`}>Interested in a similar project?</p>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-whatsapp btn-lg"
              aria-label="Discuss your project on WhatsApp"
              id="works-whatsapp-cta"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                <path d="M12 0C5.373 0 0 5.373 0 12c0 2.126.553 4.122 1.522 5.857L0 24l6.335-1.509C8.05 23.447 9.977 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818c-1.86 0-3.601-.504-5.09-1.38l-.365-.217-3.762.896.956-3.665-.238-.377C2.504 15.44 2.181 13.758 2.181 12 2.181 6.57 6.57 2.181 12 2.181c5.431 0 9.819 4.389 9.819 9.819 0 5.431-4.388 9.818-9.819 9.818z"/>
              </svg>
              Discuss Your Project
            </a>
          </div> */}
        </div>
      </section>
    </>
  );
}
