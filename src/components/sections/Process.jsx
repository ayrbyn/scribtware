import React from 'react';
import { FileSearch, Code2, FlaskConical, Rocket } from 'lucide-react';
import { PROCESS_STEPS } from '../../constants';
import Reveal from '../ui/Reveal';
import useParallax from '../../hooks/useParallax';

const ICONS = [FileSearch, Code2, FlaskConical, Rocket];

const Process = () => {
  const [decoRef, decoStyle] = useParallax(0.25);

  return (
    <section id="process" className="py-[var(--spacing-96)] bg-paper-white relative overflow-hidden">
      {/* Parallax decorative */}
      <div ref={decoRef} style={decoStyle} className="absolute -left-16 top-1/4 w-[200px] h-[200px] rounded-full bg-brand/[0.05] pointer-events-none hidden lg:block" />

      <div className="max-w-7xl mx-auto px-[var(--spacing-24)] sm:px-[var(--spacing-40)] lg:px-[var(--spacing-64)] relative z-10">

        {/* Header */}
        <Reveal animation="fadeLeft" duration={800}>
          <div className="mb-[var(--spacing-80)]">
            <span className="font-[var(--font-mono)] text-[12px] leading-[1.6] tracking-[-0.36px] text-brand uppercase block mb-[var(--spacing-16)]">
              Metodologi Kerja
            </span>
            <h2 className="font-[var(--font-display)] text-[48px] md:text-[64px] leading-[0.9] tracking-[-1.44px] text-midnight-ink uppercase max-w-xl">
              BAGAIMANA KAMI MEMBANGUN PRODUK ANDA
            </h2>
          </div>
        </Reveal>

        {/* Steps grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[var(--spacing-24)]">
          {PROCESS_STEPS.map((step, idx) => {
            const Icon = ICONS[idx];
            return (
              <Reveal key={idx} animation="slideUp" delay={idx * 120} duration={800}>
                <div className="group flex flex-col gap-[var(--spacing-24)] h-full">

                  {/* Step number + line */}
                  <div className="flex items-center gap-[var(--spacing-16)]">
                    <span className="font-[var(--font-display)] text-[40px] leading-[1] tracking-[-1px] text-brand">
                      {step.number}
                    </span>
                    <div className="h-px flex-1 bg-brand/15" />
                  </div>

                  {/* Icon */}
                  <div className="w-12 h-12 rounded-[var(--radius-xl)] bg-brand-light group-hover:bg-brand flex items-center justify-center transition-all duration-300 shrink-0 group-hover:shadow-lg group-hover:shadow-brand/20">
                    <Icon className="w-5 h-5 text-brand group-hover:text-paper-white transition-colors duration-300" />
                  </div>

                  {/* Content */}
                  <div>
                    <h3 className="font-medium text-midnight-ink text-[18px] leading-[1.2] tracking-[-0.72px] mb-[var(--spacing-8)]">
                      {step.title}
                    </h3>
                    <p className="text-ash-gray text-[14px] leading-[1.3] tracking-[-0.42px]">
                      {step.desc}
                    </p>
                  </div>

                </div>
              </Reveal>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Process;
