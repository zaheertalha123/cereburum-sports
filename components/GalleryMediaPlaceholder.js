import Image from 'next/image';
import styles from './GalleryMedia.module.css';

const LOGO_SRC = '/logo.png';

export default function GalleryMediaPlaceholder({ variant = 'inline', cover = false, label = 'Loading media' }) {
  return (
    <div
      className={`${styles.placeholder} ${cover ? styles.placeholderCover : ''} ${
        variant === 'lightbox' ? styles.placeholderLightbox : ''
      }`}
      role="status"
      aria-label={label}
    >
      <div className={styles.loaderShell}>
        <span className={styles.orbit} aria-hidden="true" />
        <span className={styles.orbitInner} aria-hidden="true" />
        <span className={styles.glow} aria-hidden="true" />
        <Image src={LOGO_SRC} alt="" width={64} height={64} className={styles.logo} priority />
      </div>
    </div>
  );
}
