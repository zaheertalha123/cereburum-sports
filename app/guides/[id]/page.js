import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import {
  guides,
  getGuideById,
  getGuideCover,
  getGuideCoverAlt,
  getGuideGallery,
  getVisibleGuideSections,
  hasSectionContent,
  toGuideMedia,
} from '@/data/guides';
import ClientGallery from '@/app/works/[id]/ClientGallery';
import galleryStyles from '@/app/works/[id]/project.module.css';
import GuideSectionNav from './GuideSectionNav';
import GuideSection from './GuideSection';
import styles from './guide.module.css';

export async function generateStaticParams() {
  return guides.map((guide) => ({ id: guide.id }));
}

export async function generateMetadata({ params }) {
  const { id } = await params;
  const guide = getGuideById(id);

  if (!guide) {
    return { title: 'Guide Not Found' };
  }

  const cover = getGuideCover(guide);
  const photos = toGuideMedia(getGuideGallery(guide)).filter((item) => item.type === 'image');

  return {
    title: `${guide.title} — Cereburum Sports Guides`,
    description: guide.desc,
    openGraph: {
      title: `${guide.title} — Cereburum Sports`,
      description: guide.desc,
      images: (photos.length ? photos : cover ? [{ url: cover, alt: getGuideCoverAlt(guide) }] : []).map(
        (image) => ({ url: image.url, alt: image.alt || guide.title }),
      ),
    },
  };
}

export default async function GuidePage({ params }) {
  const { id } = await params;
  const guide = getGuideById(id);

  if (!guide) {
    notFound();
  }

  const cover = getGuideCover(guide);
  const coverAlt = getGuideCoverAlt(guide);
  const gallery = toGuideMedia(getGuideGallery(guide));
  const hasVideo = gallery.some((item) => item.type === 'video');
  const sections = getVisibleGuideSections(guide);
  const backHref = `/guides?filter=${encodeURIComponent(guide.category)}`;

  return (
    <>
      <section id="guide-overview" className={`${styles.heroSection} ${styles.anchorSection}`}>
        {cover ? (
          <div className={styles.heroBg} aria-hidden="true">
            <Image src={cover} alt="" fill className={styles.heroImage} priority />
            <div className={styles.heroGradient} />
          </div>
        ) : (
          <div className={styles.heroBg} aria-hidden="true">
            <div className={styles.heroFallback} />
            <div className={styles.heroGradient} />
          </div>
        )}

        <div className="container" style={{ position: 'relative', zIndex: 10 }}>
          <div className={styles.backLinkContainer}>
            <Link href={backHref} className={styles.backLink}>
              ← Back to Guides
            </Link>
          </div>

          <div className={styles.heroContent}>
            {guide.category ? <span className={styles.categoryBadge}>{guide.category}</span> : null}
            <h1 className={`display-md ${styles.title} animate-fade-in-up`}>{guide.title}</h1>
            {guide.desc ? <p className={`${styles.desc} animate-fade-in`}>{guide.desc}</p> : null}
            <GuideSectionNav sections={sections} />
          </div>
        </div>
      </section>

      {gallery.length > 0 ? (
        <section
          id="guide-gallery"
          className={`${galleryStyles.gallerySection} ${styles.anchorSection}`}
          aria-label="Guide gallery"
        >
          <div className="container">
            <header className={`${styles.sectionHeader} reveal`}>
              <span className="section-label">Visuals</span>
              <h2 className={`heading-md ${styles.sectionTitle}`}>Image Gallery</h2>
              <p className={styles.sectionSubtitle}>
                {gallery.length === 1
                  ? 'A reference photo for this component.'
                  : hasVideo
                    ? 'Reference photos and videos of this component in place.'
                    : 'Reference photos of this component in place.'}
              </p>
            </header>
            <ClientGallery media={gallery} projectTitle={guide.title} unoptimized />
          </div>
        </section>
      ) : null}

      {hasSectionContent(guide.features) ? (
        <GuideSection
          id="guide-features"
          eyebrow="Build"
          title="Key Features"
          items={guide.features.items}
          images={guide.features.images}
          itemVariant="list"
          tone="alt"
        />
      ) : null}

      {hasSectionContent(guide.applications) ? (
        <GuideSection
          id="guide-applications"
          eyebrow="Use"
          title="Applications"
          items={guide.applications.items}
          images={guide.applications.images}
          itemVariant="chips"
        />
      ) : null}

      {hasSectionContent(guide.materials) ? (
        <GuideSection
          id="guide-materials"
          eyebrow="Specification"
          title="Materials"
          items={guide.materials.items}
          images={guide.materials.images}
          itemVariant="cards"
          tone="alt"
        />
      ) : null}

      {hasSectionContent(guide.installation) ? (
        <GuideSection
          id="guide-installation"
          eyebrow="Process"
          title="Installation Process"
          subtitle="Follow each step in order for a safe, professional installation."
          steps={guide.installation.steps}
          images={guide.installation.images}
        />
      ) : null}

      {hasSectionContent(guide.benefits) ? (
        <GuideSection
          id="guide-benefits"
          eyebrow="Why it matters"
          title="Benefits"
          items={guide.benefits.items}
          images={guide.benefits.images}
          itemVariant="list"
          tone="alt"
        />
      ) : null}
    </>
  );
}
