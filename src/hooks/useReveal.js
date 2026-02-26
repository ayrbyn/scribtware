import { useEffect, useRef, useState } from 'react';

/**
 * Returns [ref, isVisible].
 * Once visible, stays visible (no re-trigger on scroll back).
 * Resets only on page refresh (because component remounts).
 */
const useReveal = (threshold = 0.15) => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect(); // fire once only
        }
      },
      { threshold }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return [ref, visible];
};

export default useReveal;
