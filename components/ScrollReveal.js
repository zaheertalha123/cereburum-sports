'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

/** CSS owns the motion; observe one entrance per element, including streamed content. */
export default function ScrollReveal() {
  const pathname = usePathname();

  useEffect(() => {
    if (!('IntersectionObserver' in window)) return;
    if (document.documentElement.dataset.motion) document.documentElement.dataset.motion = 'ready';

    const observed = new WeakSet();
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(({ isIntersecting, target }) => {
        if (!isIntersecting) return;
        target.dataset.reveal = 'visible';
        observer.unobserve(target);
      });
    }, { threshold: 0, rootMargin: '0px 0px 48px 0px' });

    const observe = (element) => {
      if (element.closest('[data-reveal-scope="pending"]')) return;
      if (observed.has(element) || element.dataset.reveal === 'visible') return;
      observed.add(element);
      observer.observe(element);
    };
    const scan = (root) => {
      if (root.matches?.('.reveal')) observe(root);
      root.querySelectorAll?.('.reveal').forEach(observe);
    };

    const mutations = new MutationObserver((records) => {
      records.forEach(({ addedNodes, type, target }) => {
        if (type === 'attributes') scan(target);
        addedNodes.forEach((node) => {
          if (node instanceof Element) scan(node);
        });
      });
    });
    mutations.observe(document.body, { childList: true, subtree: true, attributes: true, attributeFilter: ['data-reveal-scope'] });
    const frame = requestAnimationFrame(() => scan(document));

    return () => {
      cancelAnimationFrame(frame);
      mutations.disconnect();
      observer.disconnect();
    };
  }, [pathname]);

  return null;
}
