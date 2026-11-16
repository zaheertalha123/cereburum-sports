import { notFound } from 'next/navigation';
import { getServicePage, servicePages } from '@/data/servicePages';
import EditorialPage, { editorialMetadata } from '@/components/EditorialPage';

export function generateStaticParams() {
  return servicePages.map((page) => ({ slug: page.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const page = getServicePage(slug);
  if (!page) return { title: 'Service Not Found' };
  return editorialMetadata(page, `/services/${page.slug}`);
}

export default async function ServicePage({ params }) {
  const { slug } = await params;
  const page = getServicePage(slug);
  if (!page) notFound();

  return (
    <EditorialPage
      page={page}
      breadcrumbs={[
        { name: 'Home', href: '/' },
        { name: page.title, href: `/services/${page.slug}` },
      ]}
    />
  );
}
