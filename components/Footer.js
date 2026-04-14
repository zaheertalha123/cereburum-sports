import Link from 'next/link';
import Image from 'next/image';
import styles from './Footer.module.css';
import { SOCIAL } from '@/data/social';

const WHATSAPP_NUMBER = '923187768296';
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=Hello%2C%20I%27m%20interested%20in%20your%20sports%20products.`;

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/products', label: 'Products' },
  { href: '/works', label: 'Our Works' },
  { href: '/about', label: 'About Us' },
  { href: '/contact', label: 'Contact' },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className={styles.footer} role="contentinfo">
      {/* CTA band */}
      <div className={styles.ctaBand}>
        <div className={`container ${styles.ctaInner}`}>
          <div>
            <p className={`label ${styles.ctaLabel}`}>Ready to get started?</p>
            <h2 className={`display-md ${styles.ctaHeading}`}>
              Let&apos;s build your<br />
              <span className="text-sand">perfect sports facility</span>
            </h2>
          </div>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className={`btn btn-whatsapp btn-lg ${styles.ctaBtn}`}
            aria-label="Contact us on WhatsApp"
            id="footer-whatsapp-cta"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
              <path d="M12 0C5.373 0 0 5.373 0 12c0 2.126.553 4.122 1.522 5.857L0 24l6.335-1.509C8.05 23.447 9.977 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818c-1.86 0-3.601-.504-5.09-1.38l-.365-.217-3.762.896.956-3.665-.238-.377C2.504 15.44 2.181 13.758 2.181 12 2.181 6.57 6.57 2.181 12 2.181c5.431 0 9.819 4.389 9.819 9.819 0 5.431-4.388 9.818-9.819 9.818z" />
            </svg>
            Chat on WhatsApp
          </a>
        </div>
      </div>

      {/* Main footer */}
      <div className={styles.main}>
        <div className={`container ${styles.mainInner}`}>
          {/* Brand col */}
          <div className={styles.brandCol}>
            <Link href="/" aria-label="Cereburum Sports home">
              <Image
                src="/logo.png"
                alt="Cereburum Sports"
                width={160}
                height={48}
                style={{ height: '44px', width: 'auto', objectFit: 'contain' }}
              />
            </Link>
            <p className={`body-sm ${styles.tagline}`}>
              Premium sports barrier nettings and equipment for facilities that demand excellence.
            </p>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.whatsappLink}
              aria-label="WhatsApp number"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                <path d="M12 0C5.373 0 0 5.373 0 12c0 2.126.553 4.122 1.522 5.857L0 24l6.335-1.509C8.05 23.447 9.977 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818c-1.86 0-3.601-.504-5.09-1.38l-.365-.217-3.762.896.956-3.665-.238-.377C2.504 15.44 2.181 13.758 2.181 12 2.181 6.57 6.57 2.181 12 2.181c5.431 0 9.819 4.389 9.819 9.819 0 5.431-4.388 9.818-9.819 9.818z" />
              </svg>
              +92 318 7768296
            </a>
            <ul className={styles.socialRow} aria-label="Social media">
              <li>
                <a
                  href={SOCIAL.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.socialLink}
                  aria-label="Cereburum Sports on Facebook"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </a>
              </li>
              <li>
                <a
                  href={SOCIAL.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.socialLink}
                  aria-label="Cereburum Sports on Instagram"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M12 0C8.74 0 8.333.015 7.108.063 5.838.108 4.828.278 3.962.525a5.566 5.566 0 00-2.004 1.304A5.56 5.56 0 00 .525 3.962C.278 4.828.108 5.838.063 7.108.015 8.333 0 8.74 0 12s.015 3.667.063 4.892c.045 1.27.215 2.28.462 3.146a5.566 5.566 0 001.304 2.004 5.56 5.56 0 002.004 1.305c.866.247 1.876.417 3.146.462 1.225.048 1.632.063 4.892.063s3.667-.015 4.892-.063c1.27-.045 2.28-.215 3.146-.462a5.566 5.566 0 002.004-1.304 5.56 5.56 0 001.305-2.004c.247-.866.417-1.876.462-3.146.048-1.225.063-1.632.063-4.892s-.015-3.667-.063-4.892c-.045-1.27-.215-2.28-.462-3.146a5.566 5.566 0 00-1.304-2.004 5.56 5.56 0 00-2.004-1.305C19.172.278 18.162.108 16.892.063 15.667.015 15.26 0 12 0zm0 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.204-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 11-2.881 0 1.44 1.44 0 012.881 0z" />
                  </svg>
                </a>
              </li>
              <li>
                <a
                  href={SOCIAL.tiktok}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.socialLink}
                  aria-label="Cereburum Sports on TikTok"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64v-3.5a6.67 6.67 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.14-5.1v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z" />
                  </svg>
                </a>
              </li>
            </ul>
          </div>

          {/* Nav col */}
          <div className={styles.navCol}>
            <h3 className={`label ${styles.colLabel}`}>Navigation</h3>
            <ul className={styles.linkList} role="list">
              {navLinks.map(({ href, label }) => (
                <li key={href}>
                  <Link href={href} className={styles.footerLink}>{label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products col */}
          <div className={styles.navCol}>
            <h3 className={`label ${styles.colLabel}`}>Products</h3>
            <ul className={styles.linkList} role="list">
              {['Sports Barrier Netting', 'Cricket Nets', 'Football Nets', 'Tennis Court Nets', 'Multi-Sport Netting', 'Custom Solutions'].map((item) => (
                <li key={item}>
                  <Link href="/products" className={styles.footerLink}>{item}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact col */}
          <div className={styles.navCol}>
            <h3 className={`label ${styles.colLabel}`}>Contact</h3>
            <ul className={styles.contactList} role="list">
              <li>
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className={styles.footerLink}>
                  WhatsApp Us
                </a>
              </li>
              <li className={`body-sm ${styles.contactItem}`}>Sialkot, Pakistan</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className={styles.bottom}>
        <div className={`container ${styles.bottomInner}`}>
          <p className={`body-sm ${styles.copyright}`}>
            &copy; {currentYear} Cereburum Sports. All rights reserved.
          </p>
          <p className={`body-sm ${styles.credit}`}>
            Premium Sports Equipment & Netting
          </p>
        </div>
      </div>
    </footer>
  );
}
