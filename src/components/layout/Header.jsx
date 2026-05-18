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
    <div className="fixed top-0 left-0 right-0 z-50">

      {/* Sticky top bar with fade-in animation */}
      <header
        className={`transition-all duration-500 ${
          isScrolled
            ? 'bg-paper-white/95 backdrop-blur-md border-b border-canvas-ice py-3'
            : 'bg-transparent py-5'
        }`}
        style={{
          animation: 'fadeInDown 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        }}
      >
        <div className="max-w-7xl mx-auto px-[var(--spacing-24)] sm:px-[var(--spacing-40)] lg:px-[var(--spacing-64)]">
          <div className="flex items-center justify-between">
            <Logo />
            <div className="flex items-center gap-6 lg:gap-10">
              <nav className="hidden md:flex items-center gap-0">
                {NAV_LINKS.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="text-ash-gray hover:text-brand font-normal text-[14px] tracking-[-0.42px] leading-[1.3] px-[16px] py-2 transition-colors duration-200"
                  >
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
                className="md:hidden text-midnight-ink p-1 flex flex-col justify-center items-center w-8 h-8 gap-1.5"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Toggle menu"
              >
                <span className={`block h-0.5 w-5 bg-midnight-ink rounded-full origin-center transition-all duration-300 ${
                  mobileMenuOpen ? 'rotate-45 translate-y-2' : ''
                }`} />
                <span className={`block h-0.5 w-5 bg-midnight-ink rounded-full transition-all duration-300 ${
                  mobileMenuOpen ? 'opacity-0 scale-x-0' : ''
                }`} />
                <span className={`block h-0.5 w-5 bg-midnight-ink rounded-full origin-center transition-all duration-300 ${
                  mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''
                }`} />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile menu */}
      <div
        className={`md:hidden mx-4 mt-1 bg-paper-white border border-canvas-ice rounded-[var(--radius-navigationitems)] px-4 flex flex-col gap-1 overflow-hidden transition-all duration-300 ease-in-out ${
          mobileMenuOpen ? 'py-4 opacity-100 max-h-96' : 'max-h-0 opacity-0 py-0 pointer-events-none'
        }`}
      >
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-ash-gray font-normal text-[14px] tracking-[-0.42px] py-3.5 px-4 rounded-[var(--radius-lg)] hover:bg-brand-light hover:text-brand transition-colors border-b border-canvas-ice last:border-0"
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a href="https://wa.me/6282379097272" target="_blank" rel="noopener noreferrer" className="mt-2 block">
            <Button className="w-full py-3.5 text-[15px]">Mulai Proyek</Button>
          </a>
        </div>

    </div>
  );
};

export default Header;