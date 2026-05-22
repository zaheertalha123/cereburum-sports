import { projects } from '@/data/projects';
import { getSiteUrl } from '@/lib/siteUrl';

const BASE_URL = getSiteUrl();

export default function sitemap() {
  const staticEntries = [
    { path: '/', changeFrequency: 'weekly', priority: 1 },
    { path: '/about', changeFrequency: 'monthly', priority: 0.85 },
    { path: '/contact', changeFrequency: 'monthly', priority: 0.85 },
    { path: '/products', changeFrequency: 'weekly', priority: 0.9 },
    { path: '/works', changeFrequency: 'weekly', priority: 0.9 },
    { path: '/guides', changeFrequency: 'monthly', priority: 0.85 },
  ].map(({ path, changeFrequency, priority }) => ({
    url: `${BASE_URL}${path}`,
    lastModified: new Date(),
    changeFrequency,
    priority,
  }));

  const projectEntries = projects.map((project) => ({
    url: `${BASE_URL}/works/${project.id}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.75,
  }));

  return [...staticEntries, ...projectEntries];
}
