import styles from './ErrorState.module.css';

export default function ErrorState({ code, title, description, onRetry, standalone = false }) {
  return (
    <section className={`${styles.section} ${standalone ? styles.standalone : ''}`} aria-labelledby="error-title">
      <div className={styles.content}>
        <a href="/" className={styles.brand}>Cereburum Sports</a>
        <p className={styles.code}>{code}</p>
        <h1 id="error-title" className={styles.title}>{title}</h1>
        <p className={styles.description}>{description}</p>
        <div className={styles.actions}>
          {onRetry && <button type="button" onClick={onRetry} className={styles.primary}>Try again</button>}
          <a href="/" className={onRetry ? styles.secondary : styles.primary}>Back to home</a>
          {!onRetry && <a href="/guides" className={styles.secondary}>Browse guides</a>}
        </div>
        <p className={styles.help}>Need a hand? <a href="/contact#email-form-heading">Contact our team</a></p>
      </div>
    </section>
  );
}
