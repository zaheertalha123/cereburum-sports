'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './Navbar.module.css';

const navLinks = [
  { href: '/products', label: 'Products' },
  { href: '/works', label: 'Projects' },
  { href: '/guides', label: 'Guides' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const toggleRef = useRef(null);
  const isActive = (href) => pathname === href || pathname.startsWith(`${href}/`);

  useEffect(() => { setMenuOpen(false); }, [pathname]);
  useEffect(() => {
    if (!menuOpen) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    menuRef.current?.querySelector('a')?.focus();
    const close = () => { setMenuOpen(false); toggleRef.current?.focus(); };
    const onKey = (event) => {
      if (event.key === 'Escape') { event.preventDefault(); close(); }
      if (event.key === 'Tab') {
        const items = [toggleRef.current, ...menuRef.current.querySelectorAll('a')];
        const first = items[0];
        const last = items[items.length - 1];
        if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
        else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
      }
    };
    const onResize = () => { if (window.innerWidth >= 1000) close(); };
    document.addEventListener('keydown', onKey);
    window.addEventListener('resize', onResize);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener('keydown', onKey);
      window.removeEventListener('resize', onResize);
    };
  }, [menuOpen]);

  return (
    <header className={styles.header}>
      <div className={`container ${styles.inner}`}>
        <Link href="/" className={styles.logo} aria-label="Cereburum Sports — Home"><img src="/logo.png" alt="Cereburum Sports" width="1387" height="565" className={styles.logoImage} /></Link>
        <nav className={styles.nav} aria-label="Main navigation"><ul className={styles.navList}>{navLinks.map(({ href, label }) => <li key={href}><Link href={href} className={`${styles.navLink} ${isActive(href) ? styles.active : ''}`} aria-current={isActive(href) ? 'page' : undefined}>{label}</Link></li>)}</ul></nav>
        <Link href="/contact#email-form-heading" className={`btn btn-primary ${styles.quote}`}>Get a Quote</Link>
        <button ref={toggleRef} className={`${styles.hamburger} ${menuOpen ? styles.open : ''}`} type="button" onClick={() => setMenuOpen(!menuOpen)} aria-expanded={menuOpen} aria-controls="mobile-menu" aria-label={menuOpen ? 'Close menu' : 'Open menu'} id="hamburger-btn"><span /><span /><span /></button>
      </div>
      <nav ref={menuRef} id="mobile-menu" className={styles.mobileMenu} aria-label="Mobile navigation" hidden={!menuOpen}>
        <Link href="/" onClick={() => setMenuOpen(false)}>Home</Link>
        {navLinks.map(({ href, label }) => <Link key={href} href={href} onClick={() => setMenuOpen(false)} aria-current={isActive(href) ? 'page' : undefined}>{label}</Link>)}
        <Link href="/contact#email-form-heading" className="btn btn-primary" onClick={() => setMenuOpen(false)}>Get a Quote</Link>
      </nav>
    </header>
  );
}
