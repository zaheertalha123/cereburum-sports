import styles from './guide.module.css';

export default function GuideSectionNav({ sections }) {
  if (!sections || sections.length < 2) return null;

  return (
    <nav className={styles.jumpRow} aria-label="On this page">
      {sections.map(({ id, label }) => (
        <a key={id} href={`#${id}`} className={styles.jumpPill}>
          {label}
        </a>
      ))}
    </nav>
  );
}
