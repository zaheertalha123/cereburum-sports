import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppFAB from '@/components/WhatsAppFAB';
import ScrollReveal from '@/components/ScrollReveal';

export const metadata = {
  metadataBase: new URL('https://cereburumsports.com'),
  title: {
    default: 'Cereburum Sports — Premium Sports Barrier Netting & Equipment',
    template: '%s | Cereburum Sports',
  },
  description:
    'Cereburum Sports specializes in premium sports barrier nettings, cricket nets, football nets, and custom sports equipment for facilities across Pakistan.',
  keywords: [
    'sports barrier netting', 'cricket nets', 'football netting', 'sports equipment Pakistan',
    'barrier netting installation', 'sports facility netting', 'Cereburum Sports',
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
      'Specialists in sports barrier nettings and custom sports equipment. Quality installations for grounds, academies, and sports facilities.',
    images: [{ url: '/logo.png', width: 800, height: 600, alt: 'Cereburum Sports Logo' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cereburum Sports — Premium Sports Barrier Netting',
    description: 'Quality sports barrier nettings and equipment for sports facilities.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
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
      </body>
    </html>
  );
}
