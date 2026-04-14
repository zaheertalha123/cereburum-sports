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
    return { title: 'Project Not Found' };
  }
  
  return {
    title: `${project.title} — Cereburum Sports Works`,
    description: project.desc,
  };
}

export default async function ProjectPage({ params }) {
  const resolvedParams = await params;
  const project = projects.find((p) => p.id === resolvedParams.id);

  if (!project) {
    notFound();
  }

  return (
    <>
      <section className={styles.heroSection}>
        <div className={styles.heroBg} aria-hidden="true">
          {project.coverImage ? (
            <Image 
              src={project.coverImage} 
              alt="Background" 
              fill 
              className={styles.heroImage} 
              priority 
            />
          ) : (
            <div style={{ background: project.gradient, width: '100%', height: '100%', opacity: 0.4 }} />
          )}
          <div className={styles.heroGradient} />
        </div>

        <div className={`container ${styles.heroContent}`}>
          <div className={styles.backLinkContainer}>
            <Link href="/works" className={styles.backLink}>
              ← Back to Works
            </Link>
          </div>
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
      </section>

      <section className={styles.gallerySection}>
        <div className="container">
          <h2 className="heading-md" style={{ color: 'var(--white)' }}>Project Gallery</h2>
          <ClientGallery media={project.media} />
        </div>
      </section>
    </>
  );
}
