import React from 'react';

const Button = ({ children, variant = 'primary', className = '', ...props }) => {
  const baseStyle = "px-[16px] py-2.5 rounded-[var(--radius-buttons)] text-[14px] font-medium transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer";
  const variants = {
    primary: "bg-brand text-paper-white hover:bg-brand-dark shadow-md shadow-brand/20 hover:shadow-lg hover:shadow-brand/30",
    secondary: "bg-transparent text-ash-gray border border-ash-gray hover:text-brand hover:border-brand",
    ghost: "bg-transparent text-fog-gray hover:text-brand",
    white: "bg-paper-white text-brand hover:bg-brand-light",
    dark: "bg-midnight-ink text-paper-white hover:bg-deep-smoke",
  };

  return (
    <button className={`${baseStyle} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
};

export default Button;