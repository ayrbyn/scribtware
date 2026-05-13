import { useEffect, useRef, useState, useCallback } from 'react';

/**
 * Enhanced reveal hook with multiple animation directions.
 * Returns [ref, isVisible].
 * Once visible, stays visible (no re-trigger on scroll back).
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
          observer.disconnect();
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
