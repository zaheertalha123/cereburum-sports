import ClientWorksPage from './ClientWorksPage';
import { projects, projectCategories as categories } from '../../data/projects';

export const metadata = {
  title: 'Our Works — Completed Sports Facility Installations',
  description:
    'Browse Cereburum Sports\'s portfolio of completed sports barrier netting installations. Cricket grounds, football pitches, academies, and multi-sport facilities across Pakistan.',
};

export default function WorksPage() {
  return <ClientWorksPage projects={projects} categories={categories} />;
}
