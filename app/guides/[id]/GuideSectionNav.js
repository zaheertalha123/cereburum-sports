'use client';

import styles from './guide.module.css';

export default function GuideSectionNav({ sections }) {
  if (!sections?.length) return null;

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <nav className={styles.sectionNav} aria-label="Guide sections">
      {sections.map(({ id, label }) => (
        <button
          key={id}
          type="button"
          className={styles.sectionNavBtn}
          onClick={() => scrollToSection(id)}
        >
          {label}
        </button>
      ))}
    </nav>
  );
}
