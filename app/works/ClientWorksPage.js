'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './works.module.css';

export default function ClientWorksPage({ projects, categories }) {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(p => p.category === activeCategory);

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

          {/* Category filter pills */}
          <div className={styles.filterRow} role="list" aria-label="Project categories">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`${styles.filterPill} ${cat === activeCategory ? styles.filterActive : ''}`}
                role="listitem"
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
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
                {/* Visual area */}
                <div
                  className={styles.cardVisual}
                  style={!project.coverImage ? { background: project.gradient } : undefined}
                  aria-hidden="true"
                >
                  {project.coverImage ? (
                    <Image
                      src={project.coverImage}
                      alt={project.title}
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
                  <ul className={styles.highlights} role="list" aria-label="Project highlights">
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
