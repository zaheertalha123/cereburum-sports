import Link from 'next/link';

// Next.js already inserts one `<meta name="robots" content="noindex">` for this page.
// A robots field here would add a second tag.
export const metadata = {
  title: 'Page not found',
};

export default function NotFound() {
  return (
    <section className="section-pad" style={{ textAlign: 'center', minHeight: '50vh' }}>
      <div className="container">
        <p className="section-label">404</p>
        <h1 className="display-lg" style={{ color: 'var(--white)' }}>Page not found</h1>
        <p className="body-lg" style={{ color: 'var(--gray-400)', maxWidth: 520, margin: '1rem auto 2rem' }}>
          That address is not on this site. You can go back home or browse the product, project, and guide pages.
        </p>
        <Link href="/" className="btn btn-outline">Back to home</Link>
      </div>
    </section>
  );
}
