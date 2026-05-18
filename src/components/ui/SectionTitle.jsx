import React from 'react';

const SectionTitle = ({ title, subtitle, align = 'left' }) => (
  <div className={`mb-[var(--spacing-64)] ${align === 'center' ? 'text-center' : 'text-left'}`}>
    {subtitle && (
      <span
        className="font-[var(--font-mono)] text-[12px] leading-[1.6] tracking-[-0.36px] text-fog-gray uppercase block mb-[var(--spacing-16)]"
      >
        {subtitle}
      </span>
    )}
    <h2 className="font-[var(--font-display)] text-[40px] sm:text-[48px] md:text-[64px] leading-[0.9] tracking-[-1.5px] sm:tracking-[-1.44px] text-midnight-ink uppercase">
      {title}
    </h2>
  </div>
);

export default SectionTitle;