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
    return { title: 'Guide Not Found | Cereburum Sports' };
  }

  const title = `${guide.title} | Cereburum Sports`;
  const description = guide.desc || `${guide.title} - Step-by-step sports netting guide by Cereburum Sports.`;
  const canonicalUrl = `https://www.cereburumsports.site/guides/${guide.id}`;
  const imageUrl = guide.image
    ? (guide.image.startsWith('http') ? guide.image : `https://www.cereburumsports.site${guide.image}`)
    : 'https://www.cereburumsports.site/images/home/1.jpg';

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
      title,
      description,
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: guide.imageAlt || `${guide.title} - Cereburum Sports`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [imageUrl],
    },
  };
}

function toGalleryMedia(guide) {
  const items = (guide.images ?? []).map(({ url, alt }, index) => ({
    type: 'image',
    url,
    alt: alt || `${guide.title} - Step ${index + 1} installation image | Cereburum Sports`,
  }));

  if (items.length === 0 && guide.image) {
    items.push({
      type: 'image',
      url: guide.image,
      alt: guide.imageAlt || `${guide.title} - Step by Step Sports Netting Guide | Cereburum Sports`,
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
  const canonicalUrl = `https://www.cereburumsports.site/guides/${guide.id}`;
  const imageUrl = guide.image
    ? (guide.image.startsWith('http') ? guide.image : `https://www.cereburumsports.site${guide.image}`)
    : 'https://www.cereburumsports.site/images/home/1.jpg';

  const hasSteps = Array.isArray(guide.steps) && guide.steps.length > 0;

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
            item: 'https://www.cereburumsports.site',
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'Guides',
            item: 'https://www.cereburumsports.site/guides',
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
          step: guide.steps.map((step, index) => ({
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
              url: 'https://www.cereburumsports.site/logo.png',
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
              url: 'https://www.cereburumsports.site/logo.png',
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

      <section className={styles.heroSection}>
        <div className={styles.heroBg} aria-hidden="true">
          <Image
            src={guide.image}
            alt={guide.imageAlt || `${guide.title} - Step by Step Sports Netting Guide | Cereburum Sports`}
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