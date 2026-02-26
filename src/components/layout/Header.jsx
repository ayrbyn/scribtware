import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import Logo from '../ui/Logo';
import Button from '../ui/Button';
import { NAV_LINKS } from '../../constants';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-[background,padding,border-radius,box-shadow] duration-300 ${isScrolled ? 'bg-white/95 md:bg-white/90 md:backdrop-blur-md shadow-md border border-slate-100 py-3 mt-3 mx-3 sm:mx-6 lg:mx-10 rounded-2xl' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <Logo />

          {/* Wrapper flex baru untuk merapatkan navigasi dan tombol CTA di sebelah kanan */}
          <div className="flex items-center gap-6 lg:gap-10">
            <nav className="hidden md:flex items-center gap-8">
              {NAV_LINKS.map((link) => (
                <a key={link.label} href={link.href} className="text-slate-600 hover:text-teal-500 font-medium text-sm transition-colors">
                  {link.label}
                </a>
              ))}
            </nav>

            <div className="hidden md:block">
              <a href="https://wa.me/6282379097272" target="_blank" rel="noopener noreferrer">
                <Button>Mulai Proyek</Button>
              </a>
            </div>

            <button className="md:hidden text-slate-600" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white border-b border-slate-100 shadow-lg px-4 py-4 flex flex-col gap-4">
           {NAV_LINKS.map((link) => (
              <a key={link.label} href={link.href} className="text-slate-600 font-medium text-sm py-2 border-b border-slate-50">
                {link.label}
              </a>
            ))}
            <a href="https://wa.me/6282379097272" target="_blank" rel="noopener noreferrer" className="w-full mt-2">
              <Button className="w-full">Mulai Proyek</Button>
            </a>
        </div>
      )}
    </header>
  );
};

export default Header;