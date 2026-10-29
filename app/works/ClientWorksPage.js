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
      : projects.filter((project) => project.category === activeCategory);

  return (
    <>
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

      <section className={`section-pad ${styles.projectsSection}`} aria-label="Project portfolio">
        <div className="container">
          <div className={styles.projectsGrid}>
            {filteredProjects.map((project, i) => (
              <Link
                href={`/works/${project.id}`}
                key={project.id}
                id={project.id}
                className={`${styles.projectCard} ${i === 0 && activeCategory === 'All' ? styles.featured : ''}`}
                aria-label={project.title}
              >
                <div
                  className={styles.cardVisual}
                  style={!project.coverImage ? { background: project.gradient } : undefined}
                  aria-hidden="true"
