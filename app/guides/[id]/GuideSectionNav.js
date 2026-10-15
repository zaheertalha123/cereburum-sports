'use client';

import styles from './guide.module.css';

export default function GuideSectionNav({ sections }) {
  if (!sections?.length) return null;

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className={styles.sectionNavShell}>
      <nav className={styles.sectionNav} aria-label="Guide sections">
        <span className={styles.sectionNavLabel}>On this page</span>
        <div className={styles.sectionNavLinks}>
          {sections.map(({ id, label }, index) => (
            <button
              key={id}
              type="button"
              className={styles.sectionNavBtn}
              onClick={() => scrollToSection(id)}
            >
              <span aria-hidden="true">{String(index + 1).padStart(2, '0')}</span>
              {label}
            </button>
          ))}
        </div>
      </nav>
    </div>
  );
}
