import React, { useState, useEffect } from 'react';
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
    // Outer wrapper: fixed full-width, tidak punya margin sendiri
    <div className="fixed top-0 left-0 right-0 z-50">

      {/* Floating navbar pill */}
      <header className={`transition-[background,padding,border-radius,box-shadow,margin] duration-300 ${
        isScrolled
          ? 'bg-white/95 md:bg-white/90 md:backdrop-blur-md shadow-md border border-slate-100 py-3 mt-3 mx-3 sm:mx-6 lg:mx-10 rounded-2xl'
          : 'bg-transparent py-5'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <Logo />
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
              {/* Animated burger button */}
              <button
                className="md:hidden text-slate-600 p-1 flex flex-col justify-center items-center w-8 h-8 gap-1.5"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Toggle menu"
              >
                <span className={`block h-0.5 w-5 bg-slate-700 rounded-full origin-center transition-all duration-300 ${
                  mobileMenuOpen ? 'rotate-45 translate-y-2' : ''
                }`} />
                <span className={`block h-0.5 w-5 bg-slate-700 rounded-full transition-all duration-300 ${
                  mobileMenuOpen ? 'opacity-0 scale-x-0' : ''
                }`} />
                <span className={`block h-0.5 w-5 bg-slate-700 rounded-full origin-center transition-all duration-300 ${
                  mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''
                }`} />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile menu — sibling dari header, tidak terpotong margin floating pill */}
      <div
        className={`md:hidden mx-3 sm:mx-6 mt-1 bg-white border border-slate-100 shadow-xl rounded-2xl px-4 flex flex-col gap-1 overflow-hidden transition-all duration-300 ease-in-out ${
          mobileMenuOpen ? 'py-4 opacity-100 max-h-96' : 'max-h-0 opacity-0 py-0 pointer-events-none'
        }`}
      >
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-slate-700 font-medium text-sm py-3 px-2 rounded-lg hover:bg-slate-50 hover:text-teal-500 transition-colors border-b border-slate-50 last:border-0"
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a href="https://wa.me/6282379097272" target="_blank" rel="noopener noreferrer" className="mt-2">
            <Button className="w-full">Mulai Proyek</Button>
          </a>
        </div>

    </div>
  );
};

export default Header;