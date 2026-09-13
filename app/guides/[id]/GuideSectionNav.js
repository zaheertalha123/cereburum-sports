'use client';

import styles from './guide.module.css';

const SECTIONS = [
  { id: 'guide-media', label: 'Media' },
  { id: 'guide-steps', label: 'Steps' },
];

export default function GuideSectionNav() {
  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <nav className={styles.sectionNav} aria-label="Guide sections">
      {SECTIONS.map(({ id, label }) => (
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
