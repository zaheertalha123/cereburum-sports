import './globals.css';
import { Bebas_Neue, Inter } from 'next/font/google';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppFAB from '@/components/WhatsAppFAB';
import ScrollReveal from '@/components/ScrollReveal';
import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { getSiteUrl } from '@/lib/siteUrl';

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-inter',
});

const bebas = Bebas_Neue({
  subsets: ['latin'],
  weight: '400',
  display: 'swap',
  variable: '--font-bebas',
});

const siteUrl = getSiteUrl();

export const metadata = {
  metadataBase: new URL(siteUrl),
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
    url: siteUrl,
    siteName: 'Cereburum Sports',
    title: 'Cereburum Sports — Premium Sports Barrier Netting & Equipment',
    description:
      'Net manufacturer and custom net maker. Specialists in sports barrier nettings and custom equipment — quality installations for grounds, academies, and sports facilities.',
    images: [{ url: '/logo.png', width: 1387, height: 569, alt: 'Cereburum Sports Logo' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cereburum Sports — Premium Sports Barrier Netting',
    description:
      'Sports net maker and manufacturer — premium barrier nettings and equipment for facilities.',
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#07051A',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${bebas.variable}`} suppressHydrationWarning>
      <body suppressHydrationWarning>
        <ScrollReveal />
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
