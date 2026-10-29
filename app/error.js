'use client';

import ErrorState from '@/components/ErrorState';

export default function Error({ reset }) {
  return <ErrorState code="Oops" title="We hit an unexpected snag." description="This page couldn’t load. Please try again, or head back to home to keep exploring." onRetry={reset} />;
}
