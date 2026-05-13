import React from 'react';
import { Target, Zap, ShieldCheck, ArrowUpRight } from 'lucide-react';
import Reveal from '../ui/Reveal';
import useParallax from '../../hooks/useParallax';

const PILLARS = [
  {
    icon: Target,
    title: 'Dibuat untuk Bisnis Anda',
    desc: 'Setiap proyek kami mulai dari pemahaman mendalam tentang cara bisnis Anda bekerja. Solusi yang kami bangun menyesuaikan kebutuhan Anda, bukan sebaliknya.',
  },
  {
    icon: Zap,
    title: 'Berorientasi pada Nilai',
    desc: 'Software yang baik adalah yang benar-benar digunakan dan memberikan dampak nyata. Setiap keputusan teknis kami selalu kembali ke pertanyaan itu.',
  },
  {
    icon: ShieldCheck,
    title: 'Transparan & Dapat Diandalkan',
    desc: 'Anda selalu tahu apa yang sedang dikerjakan, berapa biayanya, dan kapan selesainya. Tidak ada kejutan di tengah jalan.',
  },
];

const About = () => {
  const [decoRef, decoStyle] = useParallax(-0.2);

  return (
    <section id="about" className="py-[var(--spacing-96)] bg-canvas-ice relative overflow-hidden">
      {/* Parallax decorative circle */}
      <div ref={decoRef} style={decoStyle} className="absolute -left-32 top-1/3 w-[300px] h-[300px] rounded-full bg-brand/[0.04] pointer-events-none hidden lg:block" />

      <div className="max-w-7xl mx-auto px-[var(--spacing-24)] sm:px-[var(--spacing-40)] lg:px-[var(--spacing-64)] relative z-10">

        {/* Header — two column */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[var(--spacing-40)] mb-[var(--spacing-80)]">
          <Reveal animation="fadeLeft" duration={800}>
            <div>
              <span className="font-[var(--font-mono)] text-[12px] leading-[1.6] tracking-[-0.36px] text-brand uppercase block mb-[var(--spacing-16)]">
                Tentang Kami
              </span>
              <h2 className="font-[var(--font-display)] text-[48px] md:text-[64px] leading-[0.9] tracking-[-1.44px] text-midnight-ink uppercase">
                KAMI TIDAK
                <br />
                SEKADAR KODING.
              </h2>
            </div>
          </Reveal>
          <Reveal animation="fadeRight" delay={150} duration={800}>
            <div className="flex flex-col justify-end h-full">
              <p className="text-ash-gray text-[16px] leading-[1.25] tracking-[-0.42px] max-w-md">
                Scribtware hadir sebagai partner teknologi, bukan sekadar vendor. Kami membangun software yang relevan dengan cara bisnis Anda bekerja dan terus berkembang bersama Anda.
              </p>
            </div>
          </Reveal>
        </div>

        {/* Pillars — 3 solid cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-[var(--spacing-24)]">
          {PILLARS.map(({ icon: Icon, title, desc }, idx) => (
            <Reveal key={idx} animation="slideUp" delay={idx * 120} duration={800}>
              <div className="group bg-brand rounded-[var(--radius-cards)] p-[var(--spacing-40)] flex flex-col gap-[var(--spacing-24)] h-full hover:-translate-y-2 transition-all duration-500 hover:shadow-xl hover:shadow-brand/20">
                <div className="w-12 h-12 rounded-[var(--radius-xl)] bg-paper-white/20 flex items-center justify-center shrink-0">
                  <Icon className="w-5 h-5 text-paper-white" />
                </div>
                <div>
                  <h3 className="font-medium text-paper-white text-[18px] leading-[1.2] tracking-[-0.72px] mb-[var(--spacing-8)]">
                    {title}
                  </h3>
                  <p className="text-paper-white/70 text-[14px] leading-[1.3] tracking-[-0.42px]">
                    {desc}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Bottom bridge */}
        <Reveal animation="fadeUp" delay={300}>
          <div className="mt-[var(--spacing-64)] flex items-center gap-[var(--spacing-24)]">
            <div className="h-px flex-1 bg-brand/15" />
            <a
              href="#services"
              className="inline-flex items-center gap-2 text-brand text-[14px] font-medium tracking-[-0.42px] hover:text-brand-dark transition-colors shrink-0"
            >
              Lihat layanan kami
              <ArrowUpRight className="w-4 h-4" />
            </a>
            <div className="h-px flex-1 bg-brand/15" />
          </div>
        </Reveal>

      </div>
    </section>
  );
};

export default About;
