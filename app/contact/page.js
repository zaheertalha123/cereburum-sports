import PageHero from '@/components/PageHero';
import { projects } from '@/data/projects';
import { Suspense } from 'react';
import styles from './contact.module.css';
import FAQAccordion from '@/components/FAQAccordion';
import ContactForm from '@/components/ContactForm';
import { absoluteUrl } from '@/lib/siteUrl';
import { getLocalBusinessSchema } from '@/lib/localBusiness';
import { breadcrumbJsonLd } from '@/components/Breadcrumbs';

const WHATSAPP_NUMBER = '923187768296';
const PHONE_DISPLAY = '+92 318 7768296';
const PHONE_TEL = `+${WHATSAPP_NUMBER}`;
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=Hello%2C%20I%27m%20interested%20in%20your%20sports%20products.%20Please%20share%20more%20details.`;
const contactUrl = absoluteUrl('/contact');
const breadcrumbItems = [
  { name: 'Home', href: '/' },
  { name: 'Contact', href: '/contact' },
];

export const metadata = {
  title: 'Contact Us — Sports Net Quotes & Inquiries',
  description:
    'Get in touch with Cereburum Sports via WhatsApp, phone, or email. Request custom quotes for cricket ground netting, rooftop cricket practice cages, and sports barrier nets.',
  alternates: {
    canonical: contactUrl,
  },
  openGraph: {
    type: 'website',
    locale: 'en_PK',
    url: contactUrl,
    siteName: 'Cereburum Sports',
    title: 'Contact Us — Sports Net Quotes & Inquiries | Cereburum Sports',
    description:
      'Get in touch with Cereburum Sports via WhatsApp, phone, or email. Request custom quotes for cricket ground netting, rooftop cricket practice cages, and sports barrier nets.',
    images: [
      {
        url: '/images/home/1.jpg',
        width: 1200,
        height: 630,
        alt: 'Contact Cereburum Sports for Sports Netting Quotes and Installation in Pakistan',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact Us — Sports Net Quotes & Inquiries | Cereburum Sports',
    description:
      'Get in touch with Cereburum Sports via WhatsApp, phone, or email. Request custom quotes for cricket ground netting, rooftop cricket practice cages, and sports barrier nets.',
    images: ['/images/home/1.jpg'],
  },
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

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    breadcrumbJsonLd(breadcrumbItems),
    {
      '@type': 'ContactPage',
      '@id': `${contactUrl}/#webpage`,
      url: contactUrl,
      name: 'Contact Cereburum Sports',
      description: 'Contact Cereburum Sports for custom quotes on cricket net installation and sports barrier netting across Pakistan.',
      mainEntity: getLocalBusinessSchema(),
    },
    {
      '@type': 'FAQPage',
      '@id': `${contactUrl}/#faq`,
      mainEntity: faqs.map((faq) => ({
        '@type': 'Question',
        name: faq.q,
        acceptedAnswer: {
          '@type': 'Answer',
          text: faq.a,
        },
      })),
    },
  ],
};

export default function ContactPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <PageHero
        title="Sports netting enquiries"
        description="Tell us about your ground. Share your location, dimensions and the sport you play, and our team will help you choose the netting and installation you need."
        image={projects[0].coverImage}
        imageAlt={projects[0].coverImageAlt}
        imagePosition="center 65%"
        caption="Based in Sialkot / Serving grounds across Pakistan"
        breadcrumbItems={breadcrumbItems}
        actions={<>
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn btn-whatsapp" id="contact-hero-cta">Chat on WhatsApp</a>
          <a href={`tel:${PHONE_TEL}`} className="btn btn-outline" aria-label={`Call Cereburum Sports at ${PHONE_DISPLAY}`}>Call {PHONE_DISPLAY}</a>
        </>}
      />

      {/* Email contact form */}
      <section className={`section-pad ${styles.formSection}`} aria-labelledby="email-form-heading">
        <div className="container">
          <div className={styles.formSectionInner}>
            <div className={`${styles.formSectionIntro} reveal`}>
              <span className="section-label">Email Us</span>
              <h2 className={`heading-lg ${styles.formSectionTitle}`} id="email-form-heading">
                Send a <span className="text-sand">message</span>
              </h2>
              <div className="divider divider-center" style={{ margin: '1rem auto 1.25rem' }} />
              <p className={`body-md ${styles.formSectionDesc}`}>
                Share your enquiry below and we&apos;ll reply by email. For the fastest reply, WhatsApp
                works great too.
              </p>
            </div>
            <div className={`${styles.formCard} reveal`}>
              <Suspense fallback={null}>
                <ContactForm />
              </Suspense>
            </div>
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
                    <p className={`body-md ${styles.infoItemValue}`}>GFHX+2P3, Nawan Pind, Sialkot, Pakistan</p>

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
