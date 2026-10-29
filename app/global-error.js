'use client';

import ErrorState from '@/components/ErrorState';

export default function GlobalError() {
  return (
    <html lang="en">
      <head>
        <title>Something Went Wrong | Cereburum Sports</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="noindex, nofollow" />
      </head>
      <body style={{ margin: 0 }}>
        <main>
          <ErrorState standalone code="Oops" title="We couldn’t load the site." description="Something went wrong on our side. Try reloading the page, or return home in a moment." onRetry={() => window.location.reload()} />
        </main>
      </body>
    </html>
  );
}
