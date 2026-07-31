import { useEffect } from 'react';

export default function useCountUp() {
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const countEls = document.querySelectorAll('[data-count-to]');
    if (!countEls.length) return;

    const statObserver = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const el = entry.target;
          obs.unobserve(el);
          const target = parseFloat(el.dataset.countTo);
          const prefix = el.dataset.prefix || '';
          const suffix = el.dataset.suffix || '';

          if (prefersReducedMotion) {
            el.textContent = `${prefix}${target}${suffix}`;
            return;
          }

          const duration = 1200;
          const start = performance.now();
          function tick(now) {
            const progress = Math.min((now - start) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            const value = Math.round(target * eased);
            el.textContent = `${prefix}${value}${suffix}`;
            if (progress < 1) requestAnimationFrame(tick);
          }
          requestAnimationFrame(tick);
        });
      },
      { threshold: 0.4 }
    );

    countEls.forEach((el) => statObserver.observe(el));

    return () => statObserver.disconnect();
  }, []);
}
