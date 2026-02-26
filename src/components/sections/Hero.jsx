import React from 'react';
import { ArrowRight, Code2, Layers, CheckCircle2 } from 'lucide-react';
import Button from '../ui/Button';
import Reveal from '../ui/Reveal';

const VALUE_PROPS = [
  { icon: Code2,        text: 'Website, Aplikasi & Software Custom' },
  { icon: Layers,       text: 'Sistem Internal, SaaS & Otomatisasi' },
  { icon: CheckCircle2, text: 'Konsultasi awal gratis, tanpa komitmen' },
];

const Hero = () => (
  <section
    id="hero"
    className="relative min-h-screen flex items-center justify-center bg-slate-50 overflow-hidden pt-24 pb-16"
  >

    {/* ── Abstract backdrop ── */}
    <div
      className="absolute inset-0 pointer-events-none select-none"
      style={{ willChange: 'transform', transform: 'translateZ(0)' }}
    >
      {/* Large soft blobs — hidden on mobile (too expensive for GPU) */}
      <div className="hidden lg:block absolute top-[-20%] left-[-10%] w-[600px] h-[600px] rounded-full bg-teal-100/50 blur-[80px]" />
      <div className="hidden lg:block absolute bottom-[-20%] right-[-10%] w-[500px] h-[500px] rounded-full bg-slate-200/60 blur-[80px]" />

      {/* Mobile-only: simple lightweight gradient instead of blur */}
      <div className="lg:hidden absolute top-0 left-0 right-0 h-64 bg-gradient-to-b from-teal-50/60 to-transparent" />

      {/* Dot grid — desktop only */}
      <svg className="hidden lg:block absolute inset-0 w-full h-full opacity-[0.3]" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="dots" x="0" y="0" width="24" height="24" patternUnits="userSpaceOnUse">
            <circle cx="1" cy="1" r="1" fill="#94a3b8" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#dots)" />
      </svg>

      {/* Decorative rings — desktop only */}
      <div className="hidden lg:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full border border-teal-200/30" />
      <div className="hidden lg:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full border border-teal-200/20" />

      {/* Floating accent dots — desktop only */}
      <div className="hidden lg:block absolute top-24 right-24 w-3 h-3 rounded-full bg-teal-400/60" />
      <div className="hidden lg:block absolute top-32 right-40 w-1.5 h-1.5 rounded-full bg-teal-300/60" />
      <div className="hidden lg:block absolute bottom-32 left-24 w-2.5 h-2.5 rounded-full bg-teal-400/50" />
      <div className="hidden lg:block absolute bottom-24 left-40 w-1.5 h-1.5 rounded-full bg-teal-300/50" />
    </div>

    {/* ── Content ── */}
    <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center gap-6">

      {/* Badge */}
      <Reveal delay={0} y={16}>
        <div className="inline-flex items-center gap-2 px-3.5 py-2 rounded-full bg-white border border-teal-200 text-teal-700 text-sm font-semibold shadow-sm">
          <span className="w-2 h-2 rounded-full bg-teal-500 animate-pulse shrink-0" />
          Solusi Digital Anda
        </div>
      </Reveal>

      {/* Headline */}
      <Reveal delay={100} y={24}>
        <h1 className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-extrabold text-slate-800 leading-[1.1] tracking-tight">
          Bisnis Lebih Maju,
          <br />
          <span className="text-teal-500">Dimulai dari Scribtware.</span>
        </h1>
      </Reveal>

      {/* Sub-headline */}
      <Reveal delay={200} y={20}>
        <p className="text-slate-500 text-sm md:text-base lg:text-lg leading-relaxed max-w-xl">
          Kami merancang dan membangun software yang membantu bisnis Anda bergerak lebih efisien, melayani lebih baik, dan tumbuh lebih cepat.
        </p>
      </Reveal>

      {/* Value props */}
      <Reveal delay={300} y={16}>
        <ul className="flex flex-col sm:flex-row flex-wrap justify-center gap-y-2 gap-x-6 text-sm text-slate-600">
          {VALUE_PROPS.map(({ icon: Icon, text }) => (
            <li key={text} className="flex items-center gap-2 font-medium">
              <Icon className="w-4 h-4 text-teal-500 shrink-0" />
              {text}
            </li>
          ))}
        </ul>
      </Reveal>

      {/* CTAs */}
      <Reveal delay={400} y={16}>
        <div className="flex flex-col sm:flex-row gap-3 pt-2 w-full sm:w-auto">
          <a href="https://wa.me/6282379097272" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
            <Button className="group px-8 py-3.5 text-base w-full">
              Mulai Proyek
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform duration-200" />
            </Button>
          </a>
          <a href="#services" className="w-full sm:w-auto">
            <Button variant="secondary" className="px-8 py-3.5 text-base w-full">
              Lihat Layanan
            </Button>
          </a>
        </div>
      </Reveal>

    </div>
  </section>
);

export default Hero;