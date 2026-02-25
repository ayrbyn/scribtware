import React from 'react';
import { Linkedin, Instagram, Mail, MessageCircle } from 'lucide-react';
import Logo from '../ui/Logo';

const Footer = () => {
  // Daftar link utama beserta anchor ke komponen masing-masing
  const links = [
    { label: 'Home', href: '#hero' },       // Mengarah ke Hero.jsx
    { label: 'Layanan', href: '#services' }, // Mengarah ke Services.jsx
    { label: 'Proses', href: '#process' },   // Mengarah ke Process.jsx
    { label: 'Hubungi Kami', href: 'https://wa.me/6282379097272' }
  ];

  // Daftar sosial media
  const socialLinks = [
    { icon: Linkedin, href: 'https://linkedin.com/company/scribtware', label: 'LinkedIn' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: MessageCircle, href: 'https://wa.me/6282379097272', label: 'WhatsApp' },
    { icon: Mail, href: 'mailto:info@scribtware.com', label: 'Email' }
  ];

  return (
    <footer className="relative bg-teal-500 w-full overflow-hidden pt-12 pb-6">
      
      {/* Efek dekorasi lingkaran (Shape) di sebelah kanan latar belakang (Diperkecil) */}
      <div className="absolute right-0 top-0 w-full md:w-1/2 h-full pointer-events-none overflow-hidden flex justify-end z-0">
        <div className="hidden md:block absolute -right-16 top-[-20%] w-[28rem] h-[28rem] bg-teal-600/30 rounded-full blur-2xl"></div>
        <div className="hidden md:block absolute right-8 top-[15%] w-[18rem] h-[18rem] bg-teal-600/40 rounded-full"></div>
        <div className="hidden md:block absolute right-[-5%] bottom-[-20%] w-[16rem] h-[16rem] bg-teal-700/30 rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16 mb-10">
          
          {/* Kolom Kiri: Logo, Deskripsi, dan Sosial Media */}
          <div className="flex flex-col space-y-4">
            <Logo />
            <p className="text-teal-50 text-xs sm:text-sm leading-relaxed max-w-sm">
              Scribtware berinovasi melalui layanan pengembangan perangkat lunak modern untuk bisnis Anda. Kami membantu perusahaan bertransformasi dan siap menghadapi tantangan era digital.
            </p>
            
            {/* Kumpulan Tombol Sosial Media */}
            <div className="pt-2 flex flex-wrap gap-3">
              {socialLinks.map((social, idx) => {
                const Icon = social.icon;
                return (
                  <a 
                    key={idx}
                    href={social.href} 
                    className="inline-flex w-8 h-8 sm:w-10 sm:h-10 rounded-full border border-teal-300 items-center justify-center text-teal-50 hover:bg-white hover:text-teal-600 transition-all duration-300 shadow-sm"
                    aria-label={social.label}
                    title={social.label}
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Kolom Kanan: Menu Navigasi Besar (Font dan jarak diperkecil) */}
          <div className="flex flex-col md:items-start lg:items-center justify-center space-y-4 md:pl-8 lg:pl-0">
            <div className="flex flex-col space-y-3">
              {links.map((link, i) => (
                <a 
                  key={i} 
                  href={link.href}
                  {...(link.href.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                  className="text-white text-lg md:text-xl font-medium hover:text-white transition-colors flex items-center group"
                >
                  {/* Titik indikator */}
                  <span className={`w-1.5 h-1.5 rounded-full mr-3 transition-all duration-300 ${i === 0 ? 'bg-white' : 'bg-transparent group-hover:bg-teal-200'}`}></span>
                  {link.label}
                </a>
              ))}
            </div>
          </div>
          
        </div>

        {/* Garis Pemisah (Divider) dan Bagian Bawah Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center border-t border-teal-400/60 pt-6 mt-6">
          <p className="text-teal-100 text-xs sm:text-sm mb-3 md:mb-0">
            Copyright {new Date().getFullYear()} © Scribtware. All Rights Reserved
          </p>
          <div className="flex gap-4 sm:gap-6">
            <a href="#" className="text-teal-100 hover:text-white text-xs sm:text-sm transition-colors">Privacy Policy</a>
            <a href="#" className="text-teal-100 hover:text-white text-xs sm:text-sm transition-colors">Terms & Conditions</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;