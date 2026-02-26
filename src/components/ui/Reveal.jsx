import React from 'react';
import useReveal from '../../hooks/useReveal';

/**
 * Wraps children with a fade-in + slide-up animation
 * triggered once when scrolled into view.
 *
 * Props:
 *  - delay (ms): stagger delay, default 0
 *  - y (px): starting vertical offset, default 28
 *  - threshold: 0–1 visibility threshold, default 0.15
 *  - className: extra classes on the wrapper
 *  - as: HTML tag for wrapper ('div' | 'li' | etc), default 'div'
 */
const Reveal = ({
  children,
  delay = 0,
  y = 28,
  threshold = 0.15,
  className = '',
  as: Tag = 'div',
}) => {
  const [ref, visible] = useReveal(threshold);

  return (
    <Tag
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0px)' : `translateY(${y}px)`,
        transition: `opacity 0.55s ease ${delay}ms, transform 0.55s ease ${delay}ms`,
        willChange: 'opacity, transform',
      }}
    >
      {children}
    </Tag>
  );
};

export default Reveal;
