import styles from './contact.module.css';
import FAQAccordion from '@/components/FAQAccordion';

const WHATSAPP_NUMBER = '923187768296';
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=Hello%2C%20I%27m%20interested%20in%20your%20sports%20products.%20Please%20share%20more%20details.`;

export const metadata = {
  title: 'Contact — Get in Touch via WhatsApp',
  description:
    'Contact Cereburum Sports directly via WhatsApp for product enquiries, project consultations, and quotes. Fast response guaranteed.',
};

const faqs = [
  {
    q: 'How quickly do you respond on WhatsApp?',
    a: 'We typically respond within a few hours during business hours (Mon–Sat, 9am–6pm). Urgent enquiries are usually answered the same day.',
  },
  {
    q: 'Do you provide on-site consultations?',
    a: 'Yes! For larger projects we provide free on-site assessments across major cities in Pakistan. Contact us to schedule.',
  },
  {
    q: 'Can you install as well as supply?',
    a: 'Absolutely. We handle the full project lifecycle — supply, delivery, and professional installation by our trained teams.',
  },
  {
    q: 'Do you offer custom sizing?',
    a: 'Custom dimensions are our specialty. We manufacture to exact specifications for any project type or space.',
  },
  {
    q: 'What areas do you cover?',
    a: 'We operate across Pakistan including Lahore, Karachi, Islamabad, Faisalabad, Rawalpindi, and surrounding regions.',
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
          <p className={`body-sm ${styles.phoneNum}`}>
            or click-to-call: <a href="tel:+923187768296">+92 318 7768296</a>
          </p>
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
                    <a href="tel:+923187768296" className={`body-md ${styles.infoItemValue}`}>+92 318 7768296</a>
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
                    <p className={`body-md ${styles.infoItemValue}`}>Street # 03, Deputy Bagh, Green Wood St, Sialkot, Pakistan</p>

                    <div className={styles.mapWrapper}>
                      <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d841.2977046459647!2d74.53582413313522!3d32.49432867226835!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391eeb7d9571ed8f%3A0x97ce0d42c8cfdbca!2sCereburum%20Sports%20%7C%20Net%20%7C%20Net%20Manufacturer%20%7C%20Net%20Customization%20%7C%20Net%20Installation!5e0!3m2!1sen!2s!4v1776159685061!5m2!1sen!2s"
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
