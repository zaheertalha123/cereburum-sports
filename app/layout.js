import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppFAB from '@/components/WhatsAppFAB';
import ScrollReveal from '@/components/ScrollReveal';
import { Analytics } from '@vercel/analytics/next';

export const metadata = {
  metadataBase: new URL('https://cereburumsports.com'),
  title: {
    default: 'Cereburum Sports — Premium Sports Barrier Netting & Equipment',
    template: '%s | Cereburum Sports',
  },
  description:
    'Sports net manufacturer and custom net maker: premium barrier nettings, cricket nets, football nets, and installations for facilities across Pakistan.',
  keywords: [
    'sports barrier netting', 'cricket nets', 'football netting', 'sports equipment Pakistan',
    'barrier netting installation', 'sports facility netting', 'Cereburum Sports',
    'net maker', 'net manufacturer', 'custom net maker', 'sports net manufacturer',
  ],
  authors: [{ name: 'Cereburum Sports' }],
  creator: 'Cereburum Sports',
  openGraph: {
    type: 'website',
    locale: 'en_PK',
    url: 'https://cereburumsports.com',
    siteName: 'Cereburum Sports',
    title: 'Cereburum Sports — Premium Sports Barrier Netting & Equipment',
    description:
      'Net manufacturer and custom net maker. Specialists in sports barrier nettings and custom equipment — quality installations for grounds, academies, and sports facilities.',
    images: [{ url: '/logo.png', width: 800, height: 600, alt: 'Cereburum Sports Logo' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cereburum Sports — Premium Sports Barrier Netting',
    description:
      'Sports net maker and manufacturer — premium barrier nettings and equipment for facilities.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <meta name="theme-color" content="#07051A" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body suppressHydrationWarning>
        <ScrollReveal />
        <Navbar />
        <main id="main-content">
          {children}
        </main>
        <Footer />
        <WhatsAppFAB />
        <Analytics />
      </body>
    </html>
  );
}
