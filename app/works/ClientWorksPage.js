import Link from 'next/link';
import Image from 'next/image';
import PageHero from '@/components/PageHero';
import styles from './works.module.css';

function filterHref(value) {
  if (!value || value === 'All') return '/works';
  return `/works?filter=${encodeURIComponent(value)}`;
}

export default function ClientWorksPage({ projects, categories, breadcrumbItems, activeCategory = 'All' }) {
  const filteredProjects =
    activeCategory === 'All'
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <>
      {/* Page Header */}
      <PageHero
        title="Sports netting projects"
        description="See our netting in place. Explore cricket arenas, rooftop practice spaces and custom installations across Pakistan."
        image={projects[0].coverImage}
        imageAlt={projects[0].coverImageAlt}
        caption="Nowshera, Pakistan / Cricket arena"
        breadcrumbItems={breadcrumbItems}
      >
        <ul className={styles.filterRow} aria-label="Project categories">
          {categories.map((cat) => (
            <li key={cat}>
              <Link
                scroll={false}
                href={filterHref(cat)}
                className={`${styles.filterPill} ${cat === activeCategory ? styles.filterActive : ''}`}
                aria-current={cat === activeCategory ? 'page' : undefined}
              >
                {cat}
              </Link>
            </li>
          ))}
        </ul>
      </PageHero>

      {/* Projects Grid */}
      <section className={`section-pad ${styles.projectsSection}`} aria-label="Project portfolio">
        <div className="container">
          <div className={styles.projectsGrid}>
            {filteredProjects.map((project, i) => (
              <Link
                href={`/works/${project.id}`}
                key={project.id}
                id={project.id}
                className={`${styles.projectCard} reveal ${i === 0 && activeCategory === 'All' ? styles.featured : ''}`}
                style={{ '--reveal-delay': `${(i % 2) * 50}ms` }}
                aria-label={project.title}
              >
                {/* Visual area */}
                <div
                  className={styles.cardVisual}
                  style={!project.coverImage ? { background: project.gradient } : undefined}
                  aria-hidden="true"
                >
                  {project.coverImage ? (
                    <Image
                      src={project.coverImage}
                      alt={
                        project.coverImageAlt ||
                        `${project.title} - ${project.category || 'Sports Ground Netting'} Installation in ${project.location || 'Pakistan'} | Cereburum Sports`
                      }
                      fill
                      className={styles.coverImage}
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  ) : null}
                  <div className={styles.cardVisualDecor} />
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
                  <ul className={styles.highlights} role="group" aria-label="Project highlights">
                    {project.highlights.map((h) => (
                      <li key={h} className={styles.highlight}>
                        <span className={styles.highlightDot} aria-hidden="true" />
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
