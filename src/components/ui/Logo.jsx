import React from 'react';
import logo from '../../assets/logo.png';

const Logo = () => (
  <div className="flex items-center gap-2.5 cursor-pointer group">

    <div className="w-9 h-9 rounded-xl bg-white overflow-hidden shadow-lg shadow-teal-500/50 group-hover:rotate-12 transition-transform duration-300">
      <img
        src={logo}
        alt="Scribtware Logo"
        className="w-full h-full object-contain"
      />
    </div>

    <span className="text-2xl font-bold text-slate-800 tracking-tight">
      Scribtware
    </span>

  </div>
);

export default Logo;