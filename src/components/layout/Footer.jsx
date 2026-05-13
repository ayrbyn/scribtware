import React from "react";
import { Mail, MessageCircle, ArrowUpRight } from "lucide-react";
import Logo from "../ui/Logo";
import Reveal from "../ui/Reveal";
import useParallax from "../../hooks/useParallax";

const Footer = () => {
  const [decoRef, decoStyle] = useParallax(0.2);

  const links = [
    { label: "Home", href: "#hero" },
    { label: "Tentang", href: "#about" },
    { label: "Layanan", href: "#services" },
    { label: "Portfolio", href: "#portfolio" },
    { label: "Proses", href: "#process" },
  ];

  const socialLinks = [
    {
      icon: MessageCircle,
      href: "https://wa.me/6282379097272",
      label: "WhatsApp",
    },
    { icon: Mail, href: "mailto:info@scribtware.com", label: "Email" },
  ];

  return (
    <footer className="bg-midnight-ink w-full pt-[var(--spacing-80)] pb-[var(--spacing-40)] relative overflow-hidden">
      {/* Parallax decorative */}
      <div ref={decoRef} style={decoStyle} className="absolute -right-16 top-1/4 w-[400px] h-[400px] rounded-full bg-brand/[0.06] pointer-events-none hidden lg:block" />

      <div className="max-w-7xl mx-auto px-[var(--spacing-24)] sm:px-[var(--spacing-40)] lg:px-[var(--spacing-64)] relative z-10">

        {/* Big footer headline */}
        <Reveal animation="slideUp" duration={900}>
          <div className="mb-[var(--spacing-80)]">
            <h2 className="font-[var(--font-display)] text-[48px] md:text-[80px] lg:text-[100px] leading-[0.9] tracking-[-2.4px] text-paper-white uppercase">
              MARI BANGUN
              <br />
              SESUATU YANG
              <br />
              <span className="text-brand">BERDAMPAK.</span>
            </h2>
            <div className="mt-[var(--spacing-40)]">
              <a
                href="https://wa.me/6282379097272"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 bg-brand text-paper-white px-[var(--spacing-24)] py-3 rounded-[var(--radius-buttons)] font-medium text-[14px] tracking-[-0.42px] hover:bg-brand-dark shadow-md shadow-brand/20 transition-all duration-300"
              >
                Mulai Percakapan
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
              </a>
            </div>
          </div>
        </Reveal>

        {/* Footer grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-[var(--spacing-40)] mb-[var(--spacing-64)]">

          {/* Column 1: Brand */}
          <Reveal animation="fadeUp" delay={100} duration={700}>
            <div className="flex flex-col gap-[var(--spacing-16)]">
              <Logo light />
              <p className="text-fog-gray text-[14px] leading-[1.3] tracking-[-0.42px] max-w-[280px]">
                Kami bantu bisnis di Indonesia membangun software yang benar-benar
                bekerja untuk mereka.
              </p>
            </div>
          </Reveal>

          {/* Column 2: Navigation */}
          <Reveal animation="fadeUp" delay={200} duration={700}>
            <div className="flex flex-col gap-[var(--spacing-8)]">
              <span className="font-[var(--font-mono)] text-[12px] leading-[1.6] tracking-[-0.36px] text-fog-gray uppercase mb-[var(--spacing-8)]">
                Navigasi
              </span>
              {links.map((link, i) => (
                <a
                  key={i}
                  href={link.href}
                  className="text-paper-white text-[14px] font-normal tracking-[-0.42px] hover:text-brand transition-colors duration-200 py-1"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </Reveal>

          {/* Column 3: Contact */}
          <Reveal animation="fadeUp" delay={300} duration={700}>
            <div className="flex flex-col gap-[var(--spacing-8)]">
              <span className="font-[var(--font-mono)] text-[12px] leading-[1.6] tracking-[-0.36px] text-fog-gray uppercase mb-[var(--spacing-8)]">
                Kontak
              </span>
              {socialLinks.map((social, idx) => {
                const Icon = social.icon;
                return (
                  <a
                    key={idx}
                    href={social.href}
                    target={social.href.startsWith("http") ? "_blank" : undefined}
                    rel={social.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="inline-flex items-center gap-3 text-paper-white text-[14px] font-normal tracking-[-0.42px] hover:text-brand transition-colors duration-200 py-1"
                    aria-label={social.label}
                  >
                    <Icon className="w-4 h-4 text-brand" />
                    {social.label}
                  </a>
                );
              })}
            </div>
          </Reveal>
        </div>

        {/* Bottom bar */}
        <Reveal animation="fadeUp" delay={400} duration={600}>
          <div className="flex flex-col md:flex-row justify-between items-center border-t border-deep-smoke pt-[var(--spacing-24)]">
            <p className="text-fog-gray text-[12px] font-[var(--font-mono)] tracking-[-0.36px] mb-3 md:mb-0">
              © {new Date().getFullYear()} Scribtware. All Rights Reserved.
            </p>
            <div className="flex gap-[var(--spacing-24)]">
              <a href="#" className="text-fog-gray hover:text-brand text-[12px] font-[var(--font-mono)] tracking-[-0.36px] transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-fog-gray hover:text-brand text-[12px] font-[var(--font-mono)] tracking-[-0.36px] transition-colors">
                Terms & Conditions
              </a>
            </div>
          </div>
        </Reveal>

      </div>
    </footer>
  );
};

export default Footer;
