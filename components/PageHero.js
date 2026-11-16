import Image from 'next/image';
import HeroPhotos from './HeroPhotos';
import Breadcrumbs from './Breadcrumbs';
import styles from './PageHero.module.css';

export default function PageHero({ title, description, image, imageAlt, imagePosition = 'center', caption, photos, breadcrumbItems, actions, children }) {
  const content = (
    <div className={`container ${styles.inner}`}>
      <Breadcrumbs items={breadcrumbItems} className={styles.breadcrumbs} />
      <div className={styles.copy}>
        <h1 className={styles.title}>{title}</h1>
        <p className={styles.description}>{description}</p>
        {actions && <div className={styles.actions}>{actions}</div>}
      </div>
      {caption && <p className={styles.caption}><span className={styles.captionLine} aria-hidden="true" />{caption}</p>}
    </div>
  );

  return (
    <header className={styles.header}>
      <section className={styles.hero} data-gallery={photos ? true : undefined} aria-label={title}>
        {photos ? (
          <HeroPhotos photos={photos}>{content}</HeroPhotos>
        ) : (
          <>
            <Image src={image} alt={imageAlt} fill priority sizes="100vw" className={styles.image} style={{ objectPosition: imagePosition }} />
            <div className={styles.scrim} />
            {content}
          </>
        )}
      </section>
      {children && <div className={styles.toolbar}><div className={`container ${styles.toolbarInner}`}>{children}</div></div>}
    </header>
  );
}
