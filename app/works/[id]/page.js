import { projects } from '../../../data/projects';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import styles from './project.module.css';
import ClientGallery from './ClientGallery';

export async function generateStaticParams() {
  return projects.map((project) => ({
    id: project.id,
  }));
}

export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const project = projects.find((p) => p.id === resolvedParams.id);

  if (!project) {
    return { title: 'Project Not Found | Cereburum Sports' };
  }

  const title = `${project.title} | Cereburum Sports`;
  const description = project.desc || `${project.title} sports netting project installed in ${project.location || 'Pakistan'} by Cereburum Sports.`;
  const canonicalUrl = `https://www.cereburumsports.site/works/${project.id}`;
  const imageUrl = project.coverImage
    ? (project.coverImage.startsWith('http') ? project.coverImage : `https://www.cereburumsports.site${project.coverImage}`)
    : 'https://www.cereburumsports.site/images/home/1.jpg';

  return {
    title,
    description,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      type: 'website',
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
          alt: project.coverImageAlt || `${project.title} - ${project.category || 'Sports Netting'} in ${project.location || 'Pakistan'} | Cereburum Sports`,
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

export default async function ProjectPage({ params }) {
  const resolvedParams = await params;
  const project = projects.find((p) => p.id === resolvedParams.id);

  if (!project) {
    notFound();
  }

  const canonicalUrl = `https://www.cereburumsports.site/works/${project.id}`;
  const imageUrl = project.coverImage
    ? (project.coverImage.startsWith('http') ? project.coverImage : `https://www.cereburumsports.site${project.coverImage}`)
    : 'https://www.cereburumsports.site/images/home/1.jpg';

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
            name: 'Works',
            item: 'https://www.cereburumsports.site/works',
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: project.title,
            item: canonicalUrl,
          },
        ],
      },
      {
        '@type': 'CreativeWork',
        '@id': `${canonicalUrl}#work`,
        name: project.title,
        description: project.desc,
        image: imageUrl,
        genre: project.category || 'Sports Netting Installation',
        dateCreated: project.year ? `${project.year}-01-01` : undefined,
        locationCreated: {
          '@type': 'Place',
          name: project.location || 'Pakistan',
        },
        creator: {
          '@type': 'Organization',
          name: 'Cereburum Sports',
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
          {project.coverImage ? (
            <Image
              src={project.coverImage}
              alt={
                project.coverImageAlt ||
                `${project.title} - ${project.category || 'Sports Ground Netting'} Installation in ${project.location || 'Pakistan'} | Cereburum Sports`
              }
              fill
              className={styles.heroImage}
              priority
            />
          ) : (
            <div style={{ background: project.gradient, width: '100%', height: '100%', opacity: 0.4 }} />
          )}
          <div className={styles.heroGradient} />
        </div>

        <div className="container" style={{ position: 'relative', zIndex: 10 }}>
          <div className={styles.backLinkContainer}>
            <Link href="/works" className={styles.backLink}>
              ← Back
            </Link>
          </div>

          <div className={styles.heroContent}>
            <div className={styles.metaRow}>
              <span className={styles.categoryBadge}>{project.category}</span>
              <span className={styles.yearText}>{project.year}</span>
            </div>
            <h1 className={`display-md ${styles.title} animate-fade-in-up`}>{project.title}</h1>
            <p className={`${styles.desc} animate-fade-in`}>{project.desc}</p>

            <div className={styles.highlightsRow}>
              {project.highlights.map((h, i) => (
                <span key={i} className={styles.highlightItem}>
                  <span className={styles.highlightDot} />
                  {h}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className={styles.gallerySection}>
        <div className="container">
          <h2 className="heading-md" style={{ color: 'var(--white)' }}>Project Gallery</h2>
          <ClientGallery media={project.media} projectTitle={project.title} />
        </div>
      </section>
    </>
  );
}