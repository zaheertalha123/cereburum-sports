import './globals.css';
import localFont from 'next/font/local';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppFAB from '@/components/WhatsAppFAB';
import ScrollReveal from '@/components/ScrollReveal';
import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { getSiteUrl } from '@/lib/siteUrl';

const inter = localFont({
  src: '../fonts/inter-latin-wght-normal.woff2',
  weight: '400 700',
  style: 'normal',
  display: 'optional',
  variable: '--font-inter',
  preload: false,
});

const bebas = localFont({
  src: '../fonts/bebas-neue-latin-400-normal.woff2',
  weight: '400',
  display: 'swap',
  variable: '--font-bebas',
});

const editorial = localFont({
  src: '../fonts/dm-serif-display-latin-400-normal.woff2',
  weight: '400',
  display: 'optional',
  variable: '--font-dm-serif',
  preload: false,
});

const siteUrl = getSiteUrl();

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Cereburum Sports — Sports Net Manufacturer in Sialkot',
    template: '%s | Cereburum Sports',
  },
  description:
    'Cereburum Sports manufactures and installs cricket, football, futsal, court and hockey nets from Sialkot for grounds, rooftops and arenas across Pakistan.',
  keywords: [
    'sports net manufacturer Sialkot', 'cricket net installation Pakistan', 'cricket net price Pakistan', 'football goal net manufacturer',
    'barrier netting installation', 'sports facility netting', 'Cereburum Sports',
    'net maker', 'net manufacturer', 'custom net maker', 'sports net manufacturer',
  ],
  authors: [{ name: 'Cereburum Sports' }],
  creator: 'Cereburum Sports',
  openGraph: {
    type: 'website',
    locale: 'en_PK',
    url: siteUrl,
    siteName: 'Cereburum Sports',
    title: 'Cereburum Sports — Sports Net Manufacturer in Sialkot',
    description:
      'Cereburum Sports manufactures and installs cricket, football, futsal, court and hockey nets from Sialkot.',
    images: [{ url: '/logo.png', width: 1387, height: 569, alt: 'Cereburum Sports Logo' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cereburum Sports — Premium Sports Barrier Netting',
    description:
      'Sports nets manufactured and installed from Sialkot for grounds, rooftops and arenas across Pakistan.',
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#07051A',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${bebas.variable} ${editorial.variable}`} suppressHydrationWarning>
      <head>
        <style dangerouslySetInnerHTML={{ __html: '.hero-lcp{position:relative;min-height:560px;background:#07051A}' }} />
        <script dangerouslySetInnerHTML={{ __html: `if ('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) { document.documentElement.dataset.motion = 'pending'; setTimeout(function () { if (document.documentElement.dataset.motion === 'pending') delete document.documentElement.dataset.motion; }, 3000); }` }} />
      </head>
      <body suppressHydrationWarning>
        <ScrollReveal />
        <a href="#main-content" className="skip-link">Skip to content</a>
        <Navbar />
        <main id="main-content">
          {children}
        </main>
        <Footer />
        <WhatsAppFAB />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
