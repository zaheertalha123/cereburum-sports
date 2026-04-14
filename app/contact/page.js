import styles from './contact.module.css';
import FAQAccordion from '@/components/FAQAccordion';

const WHATSAPP_NUMBER = '923187768296';
const PHONE_DISPLAY = '+92 318 7768296';
const PHONE_TEL = `+${WHATSAPP_NUMBER}`;
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=Hello%2C%20I%27m%20interested%20in%20your%20sports%20products.%20Please%20share%20more%20details.`;

const SOCIAL = {
  facebook: 'https://www.facebook.com/cereburum.sports',
  instagram: 'https://www.instagram.com/cereburum.sports/',
  tiktok: 'https://www.tiktok.com/@cereburum.sports',
};

export const metadata = {
  title: 'Contact — Get in Touch via WhatsApp',
  description:
    'Contact Cereburum Sports directly via WhatsApp for product enquiries, project consultations, and quotes. Fast response guaranteed.',
};

const faqs = [
  {
    q: 'Do you provide customizations?',
    a: 'Yes. We offer customization across size, color, and material so your netting matches your space, sport, and budget.',
  },
  {
    q: 'Do you deliver?',
    a: 'Yes. We deliver sports nets throughout Pakistan and ship internationally as well. Tell us your location and we will advise timelines and options.',
  },
  {
    q: 'Do you provide net installation services?',
    a: 'Yes, we install nets where it is practical to do so. Feasibility depends on factors such as ground condition, weather, access, and site location. Share details of your venue and we will confirm what is possible.',
  },
  {
    q: 'Can customers visit the factory before ordering?',
    a: 'Yes. We welcome customers who wish to visit our facility before placing an order. It helps you see our process firsthand and builds confidence for a long-term working relationship.',
  },
  {
    q: 'I do not have a ground—only a rooftop. Can a net still be installed?',
    a: 'Yes. Rooftop installations are common. We can use a cost-effective bamboo support structure, or a more durable iron frame for greater reliability, depending on your roof layout and requirements.',
  },
  {
    q: 'How long does production and delivery take?',
    a: 'Custom-sized items typically require about 4–5 days to manufacture. Standard-size products are usually ready for dispatch within 1–2 days, subject to current workload.',
  },
  {
    q: 'What are your payment procedures?',
    a: 'For customized orders, we ask for a 50% advance to begin work—you may also visit the factory first if you prefer additional assurance. The remaining balance is due before dispatch, once we share video proof that your order is complete and ready.',
  },
];

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className={styles.hero} aria-label="Contact page hero">
        <div className={styles.heroBg} aria-hidden="true">
          <div className={styles.heroGrad} />
          <div className={styles.heroGrid} />
        </div>
        <div className={`container ${styles.heroContent}`}>
          <span className="section-label animate-fade-in">Get in Touch</span>
          <h1 className={`display-lg ${styles.heroTitle} animate-fade-in-up`}>
            Let&apos;s Talk<br />
            <span className="text-sand">On WhatsApp</span>
          </h1>
          <div className="divider divider-center" style={{ margin: '1.25rem auto 1.75rem' }} />
          <p className={`body-lg ${styles.heroDesc} animate-fade-in`}>
            We don&apos;t do complicated contact forms. Just tap the button below and chat directly
            with our team — we&apos;re ready to help with any enquiry.
          </p>

          {/* Primary CTA */}
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className={`btn btn-whatsapp btn-lg ${styles.heroCta}`}
            aria-label="Chat with Cereburum Sports on WhatsApp"
            id="contact-hero-cta"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
              <path d="M12 0C5.373 0 0 5.373 0 12c0 2.126.553 4.122 1.522 5.857L0 24l6.335-1.509C8.05 23.447 9.977 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818c-1.86 0-3.601-.504-5.09-1.38l-.365-.217-3.762.896.956-3.665-.238-.377C2.504 15.44 2.181 13.758 2.181 12 2.181 6.57 6.57 2.181 12 2.181c5.431 0 9.819 4.389 9.819 9.819 0 5.431-4.388 9.818-9.819 9.818z" />
            </svg>
            Chat on WhatsApp Now
          </a>
          <div className={styles.heroContactExtras}>
            <a
              href={`tel:${PHONE_TEL}`}
              className={`btn btn-outline btn-lg ${styles.callBtn}`}
              aria-label={`Call Cereburum Sports at ${PHONE_DISPLAY}`}
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
              </svg>
              Call {PHONE_DISPLAY}
            </a>
            <ul className={styles.socialRow}>
              <li>
                <a
                  href={SOCIAL.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`btn btn-outline btn-sm ${styles.socialBtn}`}
                  aria-label="Cereburum Sports on Facebook"
                >
                  <svg className={styles.socialIcon} width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                  Facebook
                </a>
              </li>
              <li>
                <a
                  href={SOCIAL.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`btn btn-outline btn-sm ${styles.socialBtn}`}
                  aria-label="Cereburum Sports on Instagram"
                >
                  <svg className={styles.socialIcon} width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M12 0C8.74 0 8.333.015 7.108.063 5.838.108 4.828.278 3.962.525a5.566 5.566 0 00-2.004 1.304A5.56 5.56 0 00 .525 3.962C.278 4.828.108 5.838.063 7.108.015 8.333 0 8.74 0 12s.015 3.667.063 4.892c.045 1.27.215 2.28.462 3.146a5.566 5.566 0 001.304 2.004 5.56 5.56 0 002.004 1.305c.866.247 1.876.417 3.146.462 1.225.048 1.632.063 4.892.063s3.667-.015 4.892-.063c1.27-.045 2.28-.215 3.146-.462a5.566 5.566 0 002.004-1.304 5.56 5.56 0 001.305-2.004c.247-.866.417-1.876.462-3.146.048-1.225.063-1.632.063-4.892s-.015-3.667-.063-4.892c-.045-1.27-.215-2.28-.462-3.146a5.566 5.566 0 00-1.304-2.004 5.56 5.56 0 00-2.004-1.305C19.172.278 18.162.108 16.892.063 15.667.015 15.26 0 12 0zm0 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.204-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 11-2.881 0 1.44 1.44 0 012.881 0z" />
                  </svg>
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href={SOCIAL.tiktok}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`btn btn-outline btn-sm ${styles.socialBtn}`}
                  aria-label="Cereburum Sports on TikTok"
                >
                  <svg className={styles.socialIcon} width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64v-3.5a6.67 6.67 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.14-5.1v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z" />
                  </svg>
                  TikTok
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Info + FAQ */}
      <section className={`section-pad ${styles.infoSection}`} aria-labelledby="info-heading">
        <div className="container">
          <div className={styles.infoGrid}>
            {/* Business info */}
            <div className={`${styles.infoCard} reveal`}>
              <h2 className={`heading-lg ${styles.infoTitle}`} id="info-heading">Business Information</h2>
              <div className="divider" />
              <ul className={styles.infoList} role="list">
                <li className={styles.infoItem}>
                  <div className={styles.infoItemIcon} aria-hidden="true">📞</div>
                  <div>
                    <p className={`label ${styles.infoItemLabel}`}>WhatsApp & Phone</p>
                    <a href={`tel:${PHONE_TEL}`} className={`body-md ${styles.infoItemValue}`}>{PHONE_DISPLAY}</a>
                  </div>
                </li>
                <li className={styles.infoItem}>
                  <div className={styles.infoItemIcon} aria-hidden="true">🕘</div>
                  <div>
                    <p className={`label ${styles.infoItemLabel}`}>Business Hours</p>
                    <p className={`body-md ${styles.infoItemValue}`}>Monday – Saturday: 10:00am – 11:00pm</p>
                  </div>
                </li>
                <li className={styles.infoItem}>
                  <div className={styles.infoItemIcon} aria-hidden="true">📍</div>
                  <div>
                    <p className={`label ${styles.infoItemLabel}`}>Location</p>
                    <p className={`body-md ${styles.infoItemValue}`}>GHFX+2P3, Nawan Pind, Sialkot, Pakistan</p>

                    <div className={styles.mapWrapper}>
                      <iframe
                        src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1651.1033407658563!2d74.4999468834165!3d32.527253069429136!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2s!4v1776191470000!5m2!1sen!2s"
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Cereburum Sports Location"
                      ></iframe>
                    </div>
                  </div>
                </li>
                <li className={styles.infoItem}>
                  <div className={styles.infoItemIcon} aria-hidden="true">⚡</div>
                  <div>
                    <p className={`label ${styles.infoItemLabel}`}>Response Time</p>
                    <p className={`body-md ${styles.infoItemValue}`}>Usually within a few hours</p>
                  </div>
                </li>
              </ul>
            </div>

            {/* FAQ */}
            <div className={`${styles.faqCol} reveal`}>
              <h2 className={`heading-lg ${styles.infoTitle}`} id="faq-heading">Frequently Asked Questions</h2>
              <div className="divider" />
              <FAQAccordion faqs={faqs} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
