import { projects } from '@/data/projects';
import { guides } from '@/data/guides';
import { products } from '@/data/products';
import { catalogPages } from '@/data/catalogPages';
import { buyerGuides } from '@/data/buyerGuides';
import { servicePages } from '@/data/servicePages';
import { locations } from '@/data/locations';
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
    changeFrequency,
    priority,
  }));

  const projectEntries = projects.map((project) => ({
    url: `${BASE_URL}/works/${project.id}`,
    changeFrequency: 'monthly',
    priority: 0.75,
  }));

  const guideEntries = guides.map((guide) => ({
    url: `${BASE_URL}/guides/${guide.id}`,
    changeFrequency: 'monthly',
    priority: 0.7,
  }));

  const productEntries = products.map((product) => ({
    url: `${BASE_URL}/products/${product.id}`,
    changeFrequency: 'monthly',
    priority: 0.8,
  }));

  const catalogEntries = catalogPages.map((page) => ({
    url: `${BASE_URL}/products/${page.slug}`,
    changeFrequency: 'weekly',
    priority: 0.8,
  }));

  const buyerGuideEntries = buyerGuides.map((page) => ({
    url: `${BASE_URL}/guides/${page.slug}`,
    changeFrequency: 'monthly',
    priority: 0.7,
  }));

  const serviceEntries = servicePages.map((page) => ({
    url: `${BASE_URL}/services/${page.slug}`,
    changeFrequency: 'monthly',
    priority: 0.8,
  }));

  const locationEntries = locations.map((location) => ({
    url: `${BASE_URL}/locations/${location.slug}`,
    changeFrequency: 'monthly',
    priority: 0.7,
  }));

  return [
    ...staticEntries,
    ...projectEntries,
    ...guideEntries,
    ...productEntries,
    ...catalogEntries,
    ...buyerGuideEntries,
    ...serviceEntries,
    ...locationEntries,
  ];
}
