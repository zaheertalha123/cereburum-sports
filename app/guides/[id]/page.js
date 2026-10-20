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
import GuideSectionNav from './GuideSectionNav';
import GuideSteps from './GuideSteps';
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

function FactCard({ title, items, images }) {
  const hasItems = items?.length > 0;
  const hasImages = images?.length > 0;
  if (!hasItems && !hasImages) return null;

  return (
    <section className={styles.factCard} aria-label={title}>
      <h2 className={styles.factTitle}>{title}</h2>
      {hasItems ? (
        <ul className={styles.factList}>
          {items.map((item) => (
            <li key={item} className={styles.factItem}>
              <span className={styles.factMark} aria-hidden="true" />
              {item}
            </li>
          ))}
        </ul>
      ) : null}
      {hasImages ? (
        <div className={styles.factMedia}>
          <ClientGallery media={toGuideMedia(images)} projectTitle={title} compact />
        </div>
      ) : null}
    </section>
  );
}

export default async function GuidePage({ params }) {
  const { id } = await params;
  const guide = getGuideById(id);

  if (!guide) {
    notFound();
  }

  const cover = getGuideCover(guide);
  const gallery = toGuideMedia(getGuideGallery(guide));
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

  const showFacts =
    hasSectionContent(guide.features) ||
    hasSectionContent(guide.applications) ||
    hasSectionContent(guide.benefits);
  const showMaterials = hasSectionContent(guide.materials);
  const steps = guide.installation?.steps ?? [];
  const installImages = guide.installation?.images ?? [];
  const showSteps = steps.length > 0 || installImages.length > 0;
  const showBuild = showMaterials || showSteps;
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
              name: typeof step === 'string' ? `Step ${index + 1}` : step.title || `Step ${index + 1}`,
              text: typeof step === 'string' ? step : step.text || step.description || step.title || '',
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

      <section id="guide-overview" className={`${styles.heroSection} ${styles.anchorSection}`} aria-label="Guide">
        <div className={styles.heroBg} aria-hidden="true">
          {cover ? (
            <Image src={cover} alt="" fill className={styles.heroImage} priority />
          ) : (
            <div className={styles.heroFallback} />
          )}
          <div className={styles.heroGradient} />
        </div>
        <div className="container" style={{ position: 'relative', zIndex: 10 }}>
          <Breadcrumbs items={breadcrumbItems} />

          <div className={styles.heroContent}>
            {guide.category ? <span className={styles.categoryBadge}>{guide.category}</span> : null}
            <h1 className={`display-md ${styles.heroTitle} animate-fade-in-up`}>{guide.title}</h1>
            {guide.desc ? <p className={`${styles.heroDesc} animate-fade-in`}>{guide.desc}</p> : null}
            <GuideSectionNav sections={sections} />
          </div>
        </div>
      </section>

      <article className={styles.article}>
        <div className="container">
          {showFacts ? (
            <div className={styles.facts}>
              <FactCard title="Features" items={guide.features?.items} images={guide.features?.images} />
              <FactCard title="Applications" items={guide.applications?.items} images={guide.applications?.images} />
              <FactCard title="Benefits" items={guide.benefits?.items} images={guide.benefits?.images} />
            </div>
          ) : null}

          {gallery.length > 0 ? (
            <section id="guide-gallery" className={styles.block} aria-label="Gallery">
              <h2 className={`heading-md ${styles.blockTitle}`}>Gallery</h2>
              <ClientGallery media={gallery} projectTitle={guide.title} unoptimized />
            </section>
          ) : null}

          {showBuild ? (
            <section
              id="guide-build"
              className={`${styles.build} ${showMaterials && showSteps ? styles.buildSplit : ''}`}
              aria-label={showSteps ? 'Installation' : 'Materials'}
            >
              {showMaterials ? (
                <div className={styles.materials}>
                  <h2 className={`heading-md ${styles.blockTitle}`}>Materials</h2>
                  {guide.materials.items?.length ? (
                    <ul className={styles.materialList}>
                      {guide.materials.items.map((item) => (
                        <li key={item} className={styles.materialItem}>
                          {item}
                        </li>
                      ))}
                    </ul>
                  ) : null}
                  {guide.materials.images?.length ? (
                    <div className={styles.materialImages}>
                      <ClientGallery
                        media={toGuideMedia(guide.materials.images)}
                        projectTitle="Materials"
                        pair
                        unoptimized
                      />
                    </div>
                  ) : null}
                </div>
              ) : null}

              {showSteps ? (
                <div className={styles.stepsCol}>
                  <h2 className={`heading-md ${styles.blockTitle}`}>Installation</h2>
                  {steps.length ? <GuideSteps steps={steps} embedded /> : null}
                  {installImages.length ? (
                    <div className={styles.installMedia}>
                      <ClientGallery
                        media={toGuideMedia(installImages)}
                        projectTitle="Installation"
                        compact
                        unoptimized
                      />
                    </div>
                  ) : null}
                </div>
              ) : null}
            </section>
          ) : null}
        </div>
      </article>

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
