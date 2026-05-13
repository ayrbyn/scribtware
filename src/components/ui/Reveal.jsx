import React from 'react';
import useReveal from '../../hooks/useReveal';

/**
 * Enhanced Reveal wrapper with multiple animation types.
 *
 * Props:
 *  - animation: 'fadeUp' | 'fadeDown' | 'fadeLeft' | 'fadeRight' | 'scaleIn' | 'slideUp' | 'blurIn' (default 'fadeUp')
 *  - delay (ms): stagger delay, default 0
 *  - duration (ms): animation duration, default 700
 *  - threshold: 0–1 visibility threshold, default 0.12
 *  - className: extra classes on the wrapper
 *  - as: HTML tag for wrapper, default 'div'
 */

const ANIMATION_MAP = {
  fadeUp: { from: { opacity: 0, transform: 'translateY(40px)' }, to: { opacity: 1, transform: 'translateY(0)' } },
  fadeDown: { from: { opacity: 0, transform: 'translateY(-30px)' }, to: { opacity: 1, transform: 'translateY(0)' } },
  fadeLeft: { from: { opacity: 0, transform: 'translateX(-40px)' }, to: { opacity: 1, transform: 'translateX(0)' } },
  fadeRight: { from: { opacity: 0, transform: 'translateX(40px)' }, to: { opacity: 1, transform: 'translateX(0)' } },
  scaleIn: { from: { opacity: 0, transform: 'scale(0.92)' }, to: { opacity: 1, transform: 'scale(1)' } },
  slideUp: { from: { opacity: 0, transform: 'translateY(60px) scale(0.98)' }, to: { opacity: 1, transform: 'translateY(0) scale(1)' } },
  blurIn: { from: { opacity: 0, filter: 'blur(8px)', transform: 'translateY(20px)' }, to: { opacity: 1, filter: 'blur(0)', transform: 'translateY(0)' } },
};

const Reveal = ({
  children,
  animation = 'fadeUp',
  delay = 0,
  duration = 700,
  threshold = 0.12,
  className = '',
  as: Tag = 'div',
}) => {
  const [ref, visible] = useReveal(threshold);
  const anim = ANIMATION_MAP[animation] || ANIMATION_MAP.fadeUp;

  const style = visible
    ? {
        ...anim.to,
        transition: `opacity ${duration}ms cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms, transform ${duration}ms cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms, filter ${duration}ms cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms`,
        willChange: 'opacity, transform, filter',
      }
    : {
        ...anim.from,
        willChange: 'opacity, transform, filter',
      };

  return (
    <Tag ref={ref} className={className} style={style}>
      {children}
    </Tag>
  );
};

export default Reveal;
