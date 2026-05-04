'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { contactFormSchema } from '@/lib/contactSchema';
import styles from '@/app/contact/contact.module.css';

function SendIcon({ className }) {
  return (
    <svg className={className} width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M22 2L11 13" />
      <path d="M22 2l-7 20-4-9-9-4 20-7z" />
    </svg>
  );
}

function LoaderIcon({ className }) {
  return (
    <svg className={className} width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <circle cx="12" cy="12" r="10" strokeOpacity="0.25" />
      <path d="M12 2a10 10 0 0 1 10 10" strokeLinecap="round" />
    </svg>
  );
}

export default function ContactForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [serverError, setServerError] = useState(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: '',
      email: '',
      subject: '',
      message: '',
    },
  });

  async function onSubmit(data) {
    setServerError(null);
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (response.status === 429) {
        setServerError(
          'Too many messages were sent in a short period. Please wait a few minutes and try sending your message again, or reach us on WhatsApp.'
        );
        return;
      }

      const payload = await response.json().catch(() => ({}));

      if (response.ok) {
        setIsSubmitted(true);
        reset();
        return;
      }

      const msg = typeof payload.error === 'string' ? payload.error : 'Failed to send message. Please try again.';
      setServerError(msg);
    } catch {
      setServerError('Failed to send message. Please try again.');
    }
  }

  if (isSubmitted) {
    return (
      <div className={styles.formSuccess}>
        <div className={styles.formSuccessIcon} aria-hidden="true">
          <SendIcon className={styles.formSuccessSvg} />
        </div>
        <h3 className={`heading-md ${styles.formSuccessTitle}`}>Message sent</h3>
        <p className={`body-sm text-muted ${styles.formSuccessText}`}>
          Thanks for reaching out. We&apos;ll get back to you as soon as possible.
        </p>
        <button type="button" className={`btn btn-outline ${styles.formSuccessBtn}`} onClick={() => setIsSubmitted(false)}>
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.contactForm} noValidate>
      <div className={styles.formRow2}>
        <div className={styles.formField}>
          <label htmlFor="contact-name" className={`label ${styles.formLabel}`}>
            Name
          </label>
          <input
            id="contact-name"
            type="text"
            autoComplete="name"
            placeholder="Your name"
            className={styles.formInput}
            aria-invalid={errors.name ? 'true' : 'false'}
            {...register('name')}
          />
          {errors.name && <p className={styles.formError}>{errors.name.message}</p>}
        </div>
        <div className={styles.formField}>
          <label htmlFor="contact-email" className={`label ${styles.formLabel}`}>
            Email
          </label>
          <input
            id="contact-email"
            type="email"
            autoComplete="email"
            placeholder="you@example.com"
            className={styles.formInput}
            aria-invalid={errors.email ? 'true' : 'false'}
            {...register('email')}
          />
          {errors.email && <p className={styles.formError}>{errors.email.message}</p>}
        </div>
      </div>

      <div className={styles.formField}>
        <label htmlFor="contact-subject" className={`label ${styles.formLabel}`}>
          Subject
        </label>
        <input
          id="contact-subject"
          type="text"
          placeholder="What is this regarding?"
          className={styles.formInput}
          aria-invalid={errors.subject ? 'true' : 'false'}
          {...register('subject')}
        />
        {errors.subject && <p className={styles.formError}>{errors.subject.message}</p>}
      </div>

      <div className={styles.formField}>
        <label htmlFor="contact-message" className={`label ${styles.formLabel}`}>
          Message
        </label>
        <textarea
          id="contact-message"
          rows={5}
          placeholder="Your message"
          className={styles.formTextarea}
          aria-invalid={errors.message ? 'true' : 'false'}
          {...register('message')}
        />
        {errors.message && <p className={styles.formError}>{errors.message.message}</p>}
      </div>

      {serverError && (
        <p className={styles.formServerError} role="alert">
          {serverError}
        </p>
      )}

      <button type="submit" className={`btn btn-primary btn-lg ${styles.formSubmit}`} disabled={isSubmitting}>
        {isSubmitting ? (
          <>
            <LoaderIcon className={styles.formSpinner} />
            Sending…
          </>
        ) : (
          <>
            <SendIcon />
            Send message
          </>
        )}
      </button>
    </form>
  );
}
