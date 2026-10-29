import ErrorState from '@/components/ErrorState';

export const metadata = {
  title: 'Page Not Found',
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return <ErrorState code="404" title="This page is out of bounds." description="We couldn’t find the page you’re looking for. It may have moved, or the link may be incorrect." />;
}
