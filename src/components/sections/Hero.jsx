import React from 'react';
import { ArrowRight, Code2, Layers, CheckCircle2 } from 'lucide-react';
import Reveal from '../ui/Reveal';
import useParallax from '../../hooks/useParallax';

const VALUE_PROPS = [
  { icon: Code2,        text: 'Website, Aplikasi & Software Custom' },
  { icon: Layers,       text: 'Sistem Internal, SaaS & Otomatisasi' },
  { icon: CheckCircle2, text: 'Konsultasi awal gratis, tanpa komitmen' },
];

const Hero = () => {
  const [parallaxRef, parallaxStyle] = useParallax(0.15);
  const [floatRef1, floatStyle1] = useParallax(-0.25);
  const [floatRef2, floatStyle2] = useParallax(0.35);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-end bg-canvas-ice overflow-hidden pt-32 pb-[var(--spacing-80)]"
    >
      {/* ── Parallax decorative elements ── */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden">
        {/* Large brand circle — parallax */}
        <div ref={parallaxRef} style={parallaxStyle}>
          <div className="absolute -top-20 -right-32 w-[500px] h-[500px] rounded-full bg-brand/[0.06] hidden lg:block" />
        </div>

        {/* Floating accent shapes */}
        <div ref={floatRef1} style={floatStyle1}>
          <div className="absolute top-[30%] right-[15%] w-3 h-3 rounded-full bg-brand/40 hidden lg:block" style={{ animation: 'float 4s ease-in-out infinite' }} />
          <div className="absolute top-[25%] right-[20%] w-1.5 h-1.5 rounded-full bg-brand/25 hidden lg:block" style={{ animation: 'float 5s ease-in-out infinite 0.5s' }} />
        </div>

        <div ref={floatRef2} style={floatStyle2}>
          <div className="absolute bottom-[25%] left-[8%] w-4 h-4 rounded-[var(--radius-md)] bg-brand/10 rotate-45 hidden lg:block" style={{ animation: 'float 6s ease-in-out infinite 1s' }} />
          <div className="absolute bottom-[35%] left-[5%] w-2 h-2 rounded-full bg-brand/20 hidden lg:block" style={{ animation: 'float 4.5s ease-in-out infinite 0.3s' }} />
        </div>

        {/* Subtle grid pattern */}
        <svg className="absolute inset-0 w-full h-full opacity-[0.03] hidden lg:block" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" x="0" y="0" width="48" height="48" patternUnits="userSpaceOnUse">
              <path d="M 48 0 L 0 0 0 48" fill="none" stroke="#259194" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* ── Content ── */}
      <div className="relative z-10 max-w-7xl mx-auto px-[var(--spacing-24)] sm:px-[var(--spacing-40)] lg:px-[var(--spacing-64)] w-full">

        {/* Caption label */}
        <Reveal animation="fadeLeft" delay={0} duration={600}>
          <span className="font-[var(--font-mono)] text-[12px] leading-[1.6] tracking-[-0.36px] text-brand uppercase block mb-[var(--spacing-24)]">
            Software Development Agency
          </span>
        </Reveal>

        {/* Hero Headline */}
        <Reveal animation="slideUp" delay={150} duration={900}>
          <h1 className="font-[var(--font-display)] text-[48px] sm:text-[64px] md:text-[100px] lg:text-[130px] leading-[0.9] tracking-[-2px] sm:tracking-[-3.9px] text-midnight-ink uppercase max-w-5xl">
            BISNIS LEBIH MAJU,
            <br />
            DIMULAI DARI
            <br />
            <span className="relative inline-block">
              SCRIBTWARE
              <span className="absolute -bottom-1 left-0 w-full h-[6px] bg-brand rounded-sm" />
            </span>
          </h1>
        </Reveal>

        {/* Sub-headline + Value Props */}
        <div className="mt-[var(--spacing-64)] grid grid-cols-1 lg:grid-cols-2 gap-[var(--spacing-40)]">
          <Reveal animation="fadeUp" delay={300} duration={700}>
            <p className="text-ash-gray text-[16px] md:text-[18px] leading-[1.25] tracking-[-0.42px] max-w-lg">
              Kami merancang dan membangun software yang membantu bisnis Anda bergerak lebih efisien, melayani lebih baik, dan tumbuh lebih cepat.
            </p>
          </Reveal>

          <Reveal animation="fadeRight" delay={400} duration={700}>
            <ul className="flex flex-col gap-3">
              {VALUE_PROPS.map(({ icon: Icon, text }, i) => (
                <li key={text} className="flex items-center gap-3 text-[14px] text-midnight-ink tracking-[-0.42px] font-normal">
                  <div className="w-8 h-8 rounded-[var(--radius-lg)] bg-brand flex items-center justify-center shrink-0">
                    <Icon className="w-4 h-4 text-paper-white" />
                  </div>
                  {text}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        {/* CTAs */}
        <Reveal animation="fadeUp" delay={500} duration={600}>
          <div className="flex flex-col sm:flex-row gap-3 mt-[var(--spacing-40)] w-full sm:w-auto">
            <a href="https://wa.me/6282379097272" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto block">
              <button className="group w-full sm:w-auto flex justify-center items-center gap-2 bg-brand text-paper-white px-[var(--spacing-24)] py-4 sm:py-3.5 rounded-[var(--radius-buttons)] text-[15px] sm:text-[14px] font-medium tracking-[-0.42px] hover:bg-brand-dark shadow-md shadow-brand/20 hover:shadow-lg hover:shadow-brand/30 transition-all duration-300 cursor-pointer">
                Mulai Proyek
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
              </button>
            </a>
            <a href="#services" className="w-full sm:w-auto block">
              <button className="flex w-full sm:w-auto justify-center items-center gap-2 bg-transparent border border-canvas-ice sm:border-transparent text-ash-gray px-[var(--spacing-24)] py-4 sm:py-3.5 rounded-[var(--radius-buttons)] text-[15px] sm:text-[14px] font-normal tracking-[-0.42px] hover:text-brand hover:border-brand-light sm:hover:border-transparent transition-all duration-200 cursor-pointer">
                Lihat Layanan
              </button>
            </a>
          </div>
        </Reveal>

      </div>
    </section>
  );
};

export default Hero;