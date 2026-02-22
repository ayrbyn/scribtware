import React from 'react';
import { ArrowUp, Linkedin, Instagram, Facebook, Globe } from 'lucide-react';
import Logo from '../ui/Logo';
import { FOOTER_LINKS } from '../../constants';

const Footer = () => {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="bg-slate-50 pt-20 pb-10 border-t border-slate-200 relative">
      <button 
        onClick={scrollToTop}
        className="absolute -top-6 right-8 md:right-16 bg-slate-800 text-white p-4 rounded-full shadow-xl hover:bg-teal-500 transition-colors duration-300 border-4 border-white z-20 group"
        aria-label="Scroll to top"
      >
        <ArrowUp className="w-5 h-5 group-hover:-translate-y-1 transition-transform" />
      </button>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          
          <div className="lg:col-span-2 space-y-6">
            <Logo />
            <p className="text-slate-500 text-sm leading-relaxed max-w-sm">
              Scribtware berinovasi melalui layanan pengembangan perangkat lunak modern untuk bisnis Anda. Kami membantu perusahaan bertransformasi dan siap menghadapi tantangan era digital.
            </p>
            <div className="flex gap-4 pt-2">
              {[Linkedin, Instagram, Facebook, Globe].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-400 hover:bg-teal-500 hover:text-white hover:border-teal-500 transition-all duration-300 shadow-sm">
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-bold text-slate-800 mb-6 text-sm uppercase tracking-wider">Blog</h4>
            <ul className="space-y-4">
              {FOOTER_LINKS.blog.map((link, i) => (
                <li key={i}><a href="#" className="text-slate-500 hover:text-teal-500 text-sm transition-colors">{link}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-slate-800 mb-6 text-sm uppercase tracking-wider">Perusahaan</h4>
            <ul className="space-y-4">
              {FOOTER_LINKS.company.map((link, i) => (
                <li key={i}><a href="#" className="text-slate-500 hover:text-teal-500 text-sm transition-colors">{link}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-slate-800 mb-6 text-sm uppercase tracking-wider">Sosial</h4>
            <ul className="space-y-4">
              {FOOTER_LINKS.social.map((link, i) => (
                <li key={i}><a href="#" className="text-slate-500 hover:text-teal-500 text-sm transition-colors">{link}</a></li>
              ))}
            </ul>
          </div>

        </div>

        <div className="flex flex-col md:flex-row justify-between items-center border-t border-slate-200 pt-8 mt-8">
          <p className="text-slate-400 text-sm">
            © {new Date().getFullYear()} Scribtware. All rights reserved.
          </p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="text-slate-400 hover:text-teal-500 text-sm transition-colors">Privacy Policy</a>
            <a href="#" className="text-slate-400 hover:text-teal-500 text-sm transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;