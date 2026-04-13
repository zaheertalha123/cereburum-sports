'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

/**
 * Attaches an IntersectionObserver that adds the .visible class
 * to all elements with the .reveal class when they enter the viewport.
 */
export default function ScrollReveal() {
  const pathname = usePathname();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );

    const observeReveals = (root = document) => {
      root.querySelectorAll?.('.reveal').forEach((el) => {
        if (!el.classList.contains('visible')) {
          observer.observe(el);
        }
      });
    };

    // Run once for initial content, then once more on next frame for route transitions.
    observeReveals();
    const rafId = requestAnimationFrame(() => observeReveals());

    const mutationObserver = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        mutation.addedNodes.forEach((node) => {
          if (!(node instanceof Element)) {
            return;
          }

          if (node.classList.contains('reveal') && !node.classList.contains('visible')) {
            observer.observe(node);
          }

          observeReveals(node);
        });
      });
    });

    mutationObserver.observe(document.body, { childList: true, subtree: true });

    return () => {
      cancelAnimationFrame(rafId);
      mutationObserver.disconnect();
      observer.disconnect();
    };
  }, [pathname]);

  return null;
}
