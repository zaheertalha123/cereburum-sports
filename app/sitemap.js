import { projects } from '@/data/projects';

/** Same origin as `metadataBase` in app/layout.js */
const BASE_URL = 'https://cereburumsports.com';

export default function sitemap() {
  const staticEntries = [
    { path: '/', changeFrequency: 'weekly', priority: 1 },
    { path: '/about', changeFrequency: 'monthly', priority: 0.85 },
    { path: '/contact', changeFrequency: 'monthly', priority: 0.85 },
    { path: '/products', changeFrequency: 'weekly', priority: 0.9 },
    { path: '/works', changeFrequency: 'weekly', priority: 0.9 },
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
