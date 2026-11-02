import Link from 'next/link';
import { googleReviewsUrl, testimonials } from '@/data/testimonials';
import styles from './Testimonials.module.css';

export default function Testimonials() {
  if (!testimonials.length && !googleReviewsUrl) return null;

  return (
    <section className={`section-pad ${styles.section}`} aria-labelledby="testimonials-heading">
      <div className="container">
        <span className="section-label">Clients</span>
        <h2 className="display-lg" id="testimonials-heading">What clients say</h2>
        {testimonials.length > 0 ? (
          <ul className={styles.list}>
            {testimonials.map((item) => (
              <li key={`${item.name}-${item.organisation || item.city || ''}`} className={styles.card}>
                <blockquote className={styles.quote}>
                  <p>{item.quote}</p>
                </blockquote>
                <p className={styles.person}>
                  {item.name}
                  {item.organisation ? `, ${item.organisation}` : ''}
                  {item.city ? ` — ${item.city}` : ''}
                </p>
                {item.projectHref ? (
                  <Link href={item.projectHref} className={styles.projectLink}>
                    View project
                  </Link>
                ) : null}
              </li>
            ))}
          </ul>
        ) : null}
        {googleReviewsUrl ? (
          <p className={styles.reviewsLink}>
            <a href={googleReviewsUrl} target="_blank" rel="noopener noreferrer">
              See our Google reviews
            </a>
          </p>
        ) : null}
      </div>
    </section>
  );
}
