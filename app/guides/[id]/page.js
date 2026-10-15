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
import { projects } from '@/data/projects';
import ClientGallery from '@/app/works/[id]/ClientGallery';
import galleryStyles from '@/app/works/[id]/project.module.css';
import GuideSectionNav from './GuideSectionNav';
import GuideSection from './GuideSection';
import { absoluteUrl, absoluteMediaUrl } from '@/lib/siteUrl';
import Breadcrumbs, { breadcrumbJsonLd } from '@/components/Breadcrumbs';
import RelatedCards from '@/components/RelatedCards';
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
      url: absoluteMediaUrl(image.url),
      width: 1200,
      height: 630,
      alt: image.alt || guide.title,
    }),
  );
  const imageUrl = ogImages[0]?.url || absoluteMediaUrl();

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
  const guidesHref = guide.category
    ? `/guides?filter=${encodeURIComponent(guide.category)}`
    : '/guides';
  const canonicalUrl = absoluteUrl(`/guides/${guide.id}`);
  const coverPath = cover || guide.image;
  const imageUrl = absoluteMediaUrl(coverPath);
  const breadcrumbItems = [
    { name: 'Home', href: '/' },
    { name: 'Guides', href: '/guides' },
    ...(guide.category ? [{ name: guide.category, href: guidesHref }] : []),
    { name: guide.title, href: `/guides/${guide.id}` },
  ];

  const relatedGuides = guides
    .filter((item) => item.id !== guide.id)
    .slice(0, 3)
    .map((item) => ({
      id: item.id,
      href: `/guides/${item.id}`,
      image: getGuideCover(item),
      imageAlt: getGuideCoverAlt(item),
      eyebrow: item.category,
      name: item.title,
      cta: 'Read guide →',
    }));

  const relatedItems =
    relatedGuides.length > 0
      ? relatedGuides
      : projects.slice(0, 3).map((item) => ({
          id: item.id,
          href: `/works/${item.id}`,
          image: item.coverImage,
          imageAlt: item.coverImageAlt || item.title,
          eyebrow: item.category || 'Installation',
          name: item.title,
          cta: 'View project →',
        }));

  const relatedMeta =
    relatedGuides.length > 0
      ? {
          label: 'Keep learning',
          title: 'Related Guides',
          viewAllHref: '/guides',
          viewAllLabel: 'View all guides',
          ariaLabel: 'Related guides',
        }
      : {
          label: 'See it installed',
          title: 'Related Projects',
          viewAllHref: '/works',
          viewAllLabel: 'View all works',
          ariaLabel: 'Related projects',
        };

  const installationSteps = guide.installation?.steps;
  const hasSteps = Array.isArray(installationSteps) && installationSteps.length > 0;

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      breadcrumbJsonLd(breadcrumbItems),
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
          <Breadcrumbs items={breadcrumbItems} />

          <div className={styles.heroContent}>
            <div className={styles.heroKicker}>
              {guide.category ? <span className={styles.categoryBadge}>{guide.category}</span> : null}
              <span className={styles.kickerLine} aria-hidden="true" />
              <span className={styles.kickerText}>Field guide</span>
            </div>
            <h1 className={`display-lg ${styles.title} animate-fade-in-up`}>{guide.title}</h1>
            {guide.desc ? <p className={`${styles.desc} animate-fade-in`}>{guide.desc}</p> : null}
            <div className={styles.heroRule} aria-hidden="true" />
          </div>
        </div>
      </section>

      <GuideSectionNav sections={sections} />

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

      <RelatedCards
        label={relatedMeta.label}
        title={relatedMeta.title}
        viewAllHref={relatedMeta.viewAllHref}
        viewAllLabel={relatedMeta.viewAllLabel}
        ariaLabel={relatedMeta.ariaLabel}
        items={relatedItems}
      />
    </>
  );
}
