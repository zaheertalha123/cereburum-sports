import { projects } from '../../../data/projects';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { absoluteUrl, absoluteMediaUrl } from '@/lib/siteUrl';
import Breadcrumbs, { breadcrumbJsonLd } from '@/components/Breadcrumbs';
import RelatedCards from '@/components/RelatedCards';
import styles from './project.module.css';
import ClientGallery from './ClientGallery';

export async function generateStaticParams() {
  return projects.map((project) => ({
    id: project.id,
  }));
}

function getRelatedProjects(project, limit = 3) {
  const others = projects.filter((item) => item.id !== project.id);
  const sameCategory = others.filter((item) => item.category === project.category);

  if (sameCategory.length >= limit) {
    return { items: sameCategory.slice(0, limit), mixed: false };
  }

  const picked = new Set(sameCategory.map((item) => item.id));
  const rest = others.filter((item) => !picked.has(item.id));
  return {
    items: [...sameCategory, ...rest].slice(0, limit),
    mixed: rest.length > 0 && sameCategory.length < limit,
  };
}

export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const project = projects.find((p) => p.id === resolvedParams.id);

  if (!project) {
    return { title: 'Project Not Found' };
  }

  const title = project.title;
  const socialTitle = `${project.title} | Cereburum Sports`;
  const description = project.desc || `${project.title} sports netting project installed in ${project.location || 'Pakistan'} by Cereburum Sports.`;
  const canonicalUrl = absoluteUrl(`/works/${project.id}`);
  const imageUrl = absoluteMediaUrl(project.coverImage);

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
      title: socialTitle,
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
      title: socialTitle,
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

  const canonicalUrl = absoluteUrl(`/works/${project.id}`);
  const imageUrl = absoluteMediaUrl(project.coverImage);
  const categoryHref = project.category
    ? `/works?filter=${encodeURIComponent(project.category)}`
    : '/works';
  const breadcrumbItems = [
    { name: 'Home', href: '/' },
    { name: 'Works', href: '/works' },
    ...(project.category
      ? [{ name: project.category, href: categoryHref }]
      : []),
    { name: project.title, href: `/works/${project.id}` },
  ];

  const { items: related, mixed: relatedIsMixed } = getRelatedProjects(project);

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      breadcrumbJsonLd(breadcrumbItems),
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
          <Breadcrumbs items={breadcrumbItems} />

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
          <h2 className="heading-md" style={{ color: 'var(--ink)' }}>Project Gallery</h2>
          <ClientGallery media={project.media} projectTitle={project.title} />
          <div className={styles.projectEnquiry}><div><h2>Planning a ground of your own?</h2><p>Tell us about your space and installation requirements.</p></div><Link href="/contact?service=installation#email-form-heading" className="btn btn-primary">Discuss your installation</Link></div>
        </div>
      </section>

      <RelatedCards
        label={relatedIsMixed ? 'More projects' : `More in ${project.category}`}
        title={relatedIsMixed ? 'Related Installations' : 'Similar Projects'}
        viewAllHref={relatedIsMixed ? '/works' : categoryHref}
        viewAllLabel={relatedIsMixed ? 'View all works' : `View all ${project.category}`}
        ariaLabel="Related projects"
        items={related.map((item) => ({
          id: item.id,
          href: `/works/${item.id}`,
          image: item.coverImage,
          imageAlt: item.coverImageAlt || item.title,
          eyebrow: item.category || item.location,
          name: item.title,
          cta: 'View project →',
        }))}
      />
    </>
  );
}
