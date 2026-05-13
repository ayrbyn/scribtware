import { useEffect, useRef, useState, useCallback } from 'react';

/**
 * Parallax scroll hook.
 * Returns [ref, offset] where offset is a value that changes based on scroll position.
 * 
 * @param {number} speed - Parallax speed factor. Positive = moves opposite to scroll, negative = moves with scroll. Default 0.3
 * @param {string} direction - 'vertical' or 'horizontal'. Default 'vertical'
 */
const useParallax = (speed = 0.3, direction = 'vertical') => {
  const ref = useRef(null);
  const [offset, setOffset] = useState(0);

  const handleScroll = useCallback(() => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const windowHeight = window.innerHeight;
    
    // Calculate how far through the viewport the element is
    // 0 = element just entered bottom, 1 = element just left top
    const progress = (windowHeight - rect.top) / (windowHeight + rect.height);
    const clampedProgress = Math.max(0, Math.min(1, progress));
    
    // Center the parallax effect (offset is 0 when element is centered)
    const centered = (clampedProgress - 0.5) * 2; // -1 to 1
    setOffset(centered * speed * 100);
  }, [speed]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial calculation
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  const style = direction === 'vertical'
    ? { transform: `translateY(${offset}px)`, willChange: 'transform' }
    : { transform: `translateX(${offset}px)`, willChange: 'transform' };

  return [ref, style, offset];
};

export default useParallax;
