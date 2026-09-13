import styles from './guide.module.css';

export default function GuideSteps({ title, steps }) {
  return (
    <div className={styles.stepsLayout}>
      <div className={`${styles.stepsHeader} reveal`}>
        <span className="section-label">Process</span>
        <h2 className={`heading-md ${styles.sectionTitle}`}>{title}</h2>
        <p className={styles.stepsSubtitle}>
          Follow each step in order for a safe, professional installation.
        </p>
        <div
          className="divider divider-center"
          style={{ margin: '1.25rem auto 0' }}
        />
      </div>

      <ol className={styles.stepsTimeline} aria-label={`${title} steps`}>
        {steps.map((step, i) => (
          <li
            key={i}
            className={`${styles.stepItem} reveal`}
            style={{ transitionDelay: `${i * 0.12}s` }}
          >
            <div className={styles.stepMarkerCol} aria-hidden="true">
              <span className={styles.stepMarker}>{i + 1}</span>
              {i < steps.length - 1 && <span className={styles.stepConnector} />}
            </div>

            <div className={styles.stepCard}>
              <span className={styles.stepLabel}>
                Step {String(i + 1).padStart(2, '0')}
              </span>
              <p className={styles.stepText}>{step}</p>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}
