import Link from 'next/link';
import Image from 'next/image';
import { getGuideCover, getGuideCoverAlt } from '@/data/guides';
import PageHero from '@/components/PageHero';
import styles from './guides.module.css';

const ALL_FILTER = 'all';

function filterHref(value) {
  if (!value || value === ALL_FILTER) return '/guides';
  return `/guides?filter=${encodeURIComponent(value)}`;
}

export default function ClientGuidesPage({ guides, categories, breadcrumbItems, activeFilter = ALL_FILTER }) {
  const filtered =
    activeFilter === ALL_FILTER
      ? guides
      : guides.filter((guide) => guide.category === activeFilter);

  const activeCategory = categories.find((category) => category.id === activeFilter);

  return (
    <>
      <PageHero
        title="Installation & setup guides"
        description="Plan your space, choose your supports and install your netting. Practical instructions drawn from our work on real sports grounds."
        image={getGuideCover(guides[0])}
        imageAlt={getGuideCoverAlt(guides[0])}
        caption="From the field / Cricket arena construction"
        breadcrumbItems={breadcrumbItems}
      >
