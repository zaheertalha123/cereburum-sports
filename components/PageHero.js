import Image from 'next/image';
import Breadcrumbs from './Breadcrumbs';
import styles from './PageHero.module.css';

export default function PageHero({ title, description, image, imageAlt, imagePosition = 'center', caption, breadcrumbItems, actions, children }) {
  return (
    <header className={styles.header}>
      <section className={styles.hero} aria-label={title}>
        <Image src={image} alt={imageAlt} fill priority sizes="100vw" className={styles.image} style={{ objectPosition: imagePosition }} />
        <div className={styles.scrim} />
        <div className={`container ${styles.inner}`}>
          <Breadcrumbs items={breadcrumbItems} className={styles.breadcrumbs} />
          <div className={styles.copy}>
            <h1 className={styles.title}>{title}</h1>
            <p className={styles.description}>{description}</p>
            {actions && <div className={styles.actions}>{actions}</div>}
          </div>
          <p className={styles.caption}><span className={styles.captionLine} aria-hidden="true" />{caption}</p>
        </div>
      </section>
      {children && <div className={styles.toolbar}><div className={`container ${styles.toolbarInner}`}>{children}</div></div>}
    </header>
  );
}
