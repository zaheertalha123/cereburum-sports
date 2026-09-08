import { Suspense } from 'react';
import ClientGuidesPage from './ClientGuidesPage';
import { guides, guideCategories as categories } from '../../data/guides';

export const metadata = {
  title: 'Guides — Sports Net Installation & Facility Setup | Cereburum Sports',
  description:
    'Step-by-step guides for sports net installation, net manufacturing, floodlight setup, and ground preparation — from the experts at Cereburum Sports.',
};

export default function GuidesPage() {
  return (
    <Suspense fallback={null}>
      <ClientGuidesPage guides={guides} categories={categories} />
    </Suspense>
  );
}
