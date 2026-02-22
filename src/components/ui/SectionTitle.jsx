import React from 'react';

const SectionTitle = ({ title, subtitle, align = 'center' }) => (
  <div className={`mb-16 ${align === 'center' ? 'text-center' : 'text-left'}`}>
    {subtitle && <span className="text-teal-500 font-semibold tracking-wider uppercase text-sm mb-3 block">{subtitle}</span>}
    <h2 className="text-3xl md:text-4xl font-extrabold text-slate-800 tracking-tight">{title}</h2>
    <div className={`h-1.5 w-12 bg-teal-500 rounded-full mt-4 ${align === 'center' ? 'mx-auto' : ''}`}></div>
  </div>
);

export default SectionTitle;