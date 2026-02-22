import React from 'react';

const Button = ({ children, variant = 'primary', className = '', ...props }) => {
  const baseStyle = "px-6 py-2.5 rounded-lg text-sm font-semibold transition-all duration-300 flex items-center justify-center gap-2";
  const variants = {
    primary: "bg-teal-500 hover:bg-teal-600 text-white shadow-md hover:shadow-teal-500/30",
    secondary: "bg-white hover:bg-slate-50 text-teal-600 border border-teal-100 shadow-sm",
    white: "bg-white text-teal-600 hover:bg-teal-50"
  };

  return (
    <button className={`${baseStyle} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
};

export default Button;