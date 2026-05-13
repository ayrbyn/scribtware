import React from 'react';
import logo from '../../assets/logo.png';

const Logo = ({ light = false }) => (
  <div className="flex items-center gap-2.5 cursor-pointer group">
    <div className="w-9 h-9 rounded-[var(--radius-xl)] bg-paper-white overflow-hidden group-hover:rotate-6 transition-transform duration-300">
      <img
        src={logo}
        alt="Scribtware Logo"
        className="w-full h-full object-contain"
        fetchPriority="high"
        loading="eager"
      />
    </div>

    <span className={`text-[20px] font-medium tracking-[-0.72px] ${light ? 'text-paper-white' : 'text-midnight-ink'}`}>
      Scribtware
    </span>
  </div>
);

export default Logo;