import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { guides } from '@/data/guides';
import ClientGallery from '@/app/works/[id]/ClientGallery';
import galleryStyles from '@/app/works/[id]/project.module.css';
import GuideSectionNav from './GuideSectionNav';
import GuideSteps from './GuideSteps';
import styles from './guide.module.css';

export async function generateStaticParams() {
  return guides.map((guide) => ({ id: guide.id }));
}

export async function generateMetadata({ params }) {
  const { id } = await params;
  const guide = guides.find((g) => g.id === id);

  if (!guide) {
    return { title: 'Guide Not Found' };
  }

  return {
    title: `${guide.title} — Cereburum Sports Guides`,
    description: guide.desc,
  };
}

function toGalleryMedia(guide) {
  const items = (guide.images ?? []).map(({ url, alt }, index) => ({
    type: 'image',
    url,
    alt:
      alt ||
      `${guide.title} step ${index + 1} - ground boundary netting installation instruction`,
  }));

  if (items.length === 0 && guide.image) {
    items.push({
      type: 'image',
      url: guide.image,
      alt:
        guide.imageAlt ||
        `${guide.title} - Step by Step Sports Netting Installation Guide | Cereburum Sports`,
    });
  }

  return items;
}

export default async function GuidePage({ params }) {
  const { id } = await params;
  const guide = guides.find((g) => g.id === id);

  if (!guide) {
    notFound();
  }

  const media = toGalleryMedia(guide);
  const backHref = `/guides?filter=${encodeURIComponent(guide.category)}`;

  return (
    <>
      <section className={styles.heroSection}>
        <div className={styles.heroBg} aria-hidden="true">
          <Image
            src={guide.image}
            alt={
              guide.imageAlt ||
              `${guide.title} - Step by Step Sports Netting Installation Guide | Cereburum Sports`
            }
            fill
            className={styles.heroImage}
            priority
          />
          <div className={styles.heroGradient} />
        </div>

        <div className="container" style={{ position: 'relative', zIndex: 10 }}>
          <div className={styles.backLinkContainer}>
            <Link href={backHref} className={styles.backLink}>
              ← Back to Guides
            </Link>
          </div>

          <div className={styles.heroContent}>
            <span className={styles.categoryBadge}>{guide.category}</span>
            <h1 className={`display-md ${styles.title} animate-fade-in-up`}>
              {guide.title}
            </h1>
            <p className={`${styles.desc} animate-fade-in`}>{guide.desc}</p>
            <GuideSectionNav />
          </div>
        </div>
      </section>

      <section
        id="guide-media"
        className={`${galleryStyles.gallerySection} ${styles.anchorSection}`}
        aria-label="Guide gallery"
      >
        <div className="container">
          <h2 className="heading-md" style={{ color: 'var(--white)' }}>
            Guide Gallery
          </h2>
          <ClientGallery media={media} projectTitle={guide.title} />
        </div>
      </section>

      <section
        id="guide-steps"
        className={`${styles.stepsSection} ${styles.anchorSection}`}
        aria-label="Installation steps"
      >
        <div className="container">
          <GuideSteps title="Installation Steps" steps={guide.steps} />
        </div>
      </section>
    </>
  );
}
