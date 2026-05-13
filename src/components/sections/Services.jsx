import React from 'react';
import { SERVICES_DATA } from '../../constants';
import SectionTitle from '../ui/SectionTitle';
import Reveal from '../ui/Reveal';
import { ArrowUpRight } from 'lucide-react';
import useParallax from '../../hooks/useParallax';

const Services = () => {
  const [decoRef, decoStyle] = useParallax(0.2);

  return (
    <section id="services" className="py-[var(--spacing-96)] bg-paper-white relative overflow-hidden">
      {/* Parallax decorative */}
      <div ref={decoRef} style={decoStyle} className="absolute -right-24 bottom-1/4 w-[250px] h-[250px] rounded-full bg-brand/[0.04] pointer-events-none hidden lg:block" />

      <div className="max-w-7xl mx-auto px-[var(--spacing-24)] sm:px-[var(--spacing-40)] lg:px-[var(--spacing-64)] relative z-10">

        <Reveal animation="fadeLeft" duration={800}>
          <SectionTitle
            title="Apa yang Kami Kerjakan"
            subtitle="Layanan"
          />
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-[var(--spacing-24)]">
          {SERVICES_DATA.map((service, idx) => {
            const Icon = service.icon;
            return (
              <Reveal key={idx} animation={idx % 2 === 0 ? 'fadeLeft' : 'fadeRight'} delay={idx * 100} duration={700}>
                <div className="group bg-faint-mist rounded-[var(--radius-cards)] p-[var(--spacing-40)] flex flex-col gap-[var(--spacing-24)] h-full hover:bg-brand-light transition-all duration-400 hover:-translate-y-1">
                  <div className="flex items-start justify-between">
                    <div className="w-12 h-12 rounded-[var(--radius-xl)] bg-brand flex items-center justify-center shrink-0 group-hover:shadow-lg group-hover:shadow-brand/20 transition-shadow duration-300">
                      <Icon className="w-5 h-5 text-paper-white" />
                    </div>
                    <ArrowUpRight className="w-5 h-5 text-fog-gray group-hover:text-brand group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all duration-200" />
                  </div>
                  <div>
                    <h3 className="font-medium text-midnight-ink text-[20px] leading-[1.2] tracking-[-0.72px] mb-[var(--spacing-8)]">
                      {service.title}
                    </h3>
                    <p className="text-ash-gray text-[14px] leading-[1.3] tracking-[-0.42px]">
                      {service.desc}
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

export default Services;