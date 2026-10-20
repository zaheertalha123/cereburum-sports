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
import { absoluteUrl } from '@/lib/siteUrl';
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
  const title = guide.title;
  const socialTitle = `${guide.title} | Cereburum Sports`;
  const description = guide.desc || `${guide.title} - Step-by-step sports netting guide by Cereburum Sports.`;
  const canonicalUrl = absoluteUrl(`/guides/${guide.id}`);
  const ogImages = (photos.length ? photos : cover ? [{ url: cover, alt: getGuideCoverAlt(guide) }] : []).map(
    (image) => ({
      url: absoluteUrl(image.url),
      width: 1200,
      height: 630,
      alt: image.alt || guide.title,
    }),
  );
  const imageUrl = ogImages[0]?.url || absoluteUrl('/images/home/1.jpg');

  return {
    title,
    description,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      type: 'article',
      locale: 'en_PK',
      url: canonicalUrl,
      siteName: 'Cereburum Sports',
      title: socialTitle,
      description,
      images: ogImages.length
        ? ogImages
        : [
            {
              url: imageUrl,
              width: 1200,
              height: 630,
              alt: getGuideCoverAlt(guide) || `${guide.title} - Cereburum Sports`,
            },
          ],
    },
    twitter: {
      card: 'summary_large_image',
      title: socialTitle,
      description,
      images: [imageUrl],
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
  const gallery = toGuideMedia(getGuideGallery(guide));
  const hasVideo = gallery.some((item) => item.type === 'video');
  const sections = getVisibleGuideSections(guide);
  const backHref = `/guides?filter=${encodeURIComponent(guide.category)}`;
  const canonicalUrl = absoluteUrl(`/guides/${guide.id}`);
  const coverPath = cover || guide.image;
  const imageUrl = absoluteUrl(coverPath || '/images/home/1.jpg');

  const installationSteps = guide.installation?.steps;
  const hasSteps = Array.isArray(installationSteps) && installationSteps.length > 0;

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Home',
            item: absoluteUrl(),
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'Guides',
            item: absoluteUrl('/guides'),
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: guide.title,
            item: canonicalUrl,
          },
        ],
      },
      hasSteps
        ? {
          '@type': 'HowTo',
          '@id': `${canonicalUrl}#howto`,
          name: guide.title,
          description: guide.desc,
          image: imageUrl,
          step: installationSteps.map((step, index) => ({
            '@type': 'HowToStep',
            position: index + 1,
            name: typeof step === 'string' ? `Step ${index + 1}` : (step.title || `Step ${index + 1}`),
            text: typeof step === 'string' ? step : (step.text || step.description || step.title || ''),
          })),
          publisher: {
            '@type': 'Organization',
            name: 'Cereburum Sports',
            logo: {
              '@type': 'ImageObject',
              url: absoluteUrl('/logo.png'),
            },
          },
        }
        : {
          '@type': 'Article',
          '@id': `${canonicalUrl}#article`,
          headline: guide.title,
          description: guide.desc,
          image: imageUrl,
          author: {
            '@type': 'Organization',
            name: 'Cereburum Sports',
          },
          publisher: {
            '@type': 'Organization',
            name: 'Cereburum Sports',
            logo: {
              '@type': 'ImageObject',
              url: absoluteUrl('/logo.png'),
            },
          },
        },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

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
