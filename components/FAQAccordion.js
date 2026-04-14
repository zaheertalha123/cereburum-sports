'use client';

import { useState } from 'react';
import styles from '../app/contact/contact.module.css';

export default function FAQAccordion({ faqs }) {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className={styles.faqList} role="list" aria-label="FAQ Accordion">
      {faqs.map((faq, i) => {
        const isActive = activeIndex === i;

        return (
          <div key={i} className={styles.accordionItem}>
            <button
              className={styles.accordionHeader}
              onClick={() => toggleAccordion(i)}
              aria-expanded={isActive}
              aria-controls={`faq-answer-${i}`}
            >
              <h3 className={`heading-sm ${styles.faqQ}`}>{faq.q}</h3>
              <span className={`${styles.accordionIcon} ${isActive ? styles.accordionIconActive : ''}`} aria-hidden="true">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
              </span>
            </button>
            <div
              id={`faq-answer-${i}`}
              className={`${styles.accordionContent} ${isActive ? styles.accordionContentActive : ''}`}
              role="region"
              aria-hidden={!isActive}
            >
              <div className={styles.accordionContentInner}>
                <p className={`body-sm ${styles.faqA}`}>{faq.a}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
