import Link from 'next/link';
import Image from 'next/image';
import styles from './Footer.module.css';

const WHATSAPP_NUMBER = '923187768296';
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=Hello%2C%20I%27m%20interested%20in%20your%20sports%20products.`;

const navLinks = [
  { href: '/',         label: 'Home' },
  { href: '/products', label: 'Products' },
  { href: '/works',    label: 'Our Works' },
  { href: '/about',    label: 'About Us' },
  { href: '/contact',  label: 'Contact' },
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
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
              <path d="M12 0C5.373 0 0 5.373 0 12c0 2.126.553 4.122 1.522 5.857L0 24l6.335-1.509C8.05 23.447 9.977 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818c-1.86 0-3.601-.504-5.09-1.38l-.365-.217-3.762.896.956-3.665-.238-.377C2.504 15.44 2.181 13.758 2.181 12 2.181 6.57 6.57 2.181 12 2.181c5.431 0 9.819 4.389 9.819 9.819 0 5.431-4.388 9.818-9.819 9.818z"/>
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
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                <path d="M12 0C5.373 0 0 5.373 0 12c0 2.126.553 4.122 1.522 5.857L0 24l6.335-1.509C8.05 23.447 9.977 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818c-1.86 0-3.601-.504-5.09-1.38l-.365-.217-3.762.896.956-3.665-.238-.377C2.504 15.44 2.181 13.758 2.181 12 2.181 6.57 6.57 2.181 12 2.181c5.431 0 9.819 4.389 9.819 9.819 0 5.431-4.388 9.818-9.819 9.818z"/>
              </svg>
              +92 318 7768296
            </a>
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
              <li className={`body-sm ${styles.contactItem}`}>Pakistan</li>
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
