import React from 'react';
import { ArrowRight } from 'lucide-react';
import Reveal from '../ui/Reveal';
import useParallax from '../../hooks/useParallax';

const CTA = () => {
  const [decoRef1, decoStyle1] = useParallax(0.3);
  const [decoRef2, decoStyle2] = useParallax(-0.2);

  return (
    <section className="py-[var(--spacing-96)] bg-paper-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-[var(--spacing-24)] sm:px-[var(--spacing-40)] lg:px-[var(--spacing-64)]">

        <Reveal animation="scaleIn" duration={900}>
          {/* Hero Card with brand color */}
          <div className="bg-brand rounded-[var(--radius-heroelements)] p-[var(--spacing-64)] md:p-[var(--spacing-80)] relative overflow-hidden">

            {/* Parallax decorative circles inside card */}
            <div ref={decoRef1} style={decoStyle1} className="absolute -top-16 -right-16 w-[300px] h-[300px] rounded-full bg-paper-white/[0.08] pointer-events-none" />
            <div ref={decoRef2} style={decoStyle2} className="absolute -bottom-20 -left-20 w-[250px] h-[250px] rounded-full bg-paper-white/[0.05] pointer-events-none" />

            {/* Subtle dot grid decoration */}
            <div
              className="absolute inset-0 opacity-[0.06] pointer-events-none"
              style={{
                backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
                backgroundSize: '24px 24px'
              }}
            />

            <div className="relative z-10 max-w-2xl">
              <Reveal animation="fadeLeft" delay={200} duration={700}>
                <span className="font-[var(--font-mono)] text-[12px] leading-[1.6] tracking-[-0.36px] text-paper-white/60 uppercase block mb-[var(--spacing-24)]">
                  Mulai Sekarang
                </span>
              </Reveal>

              <Reveal animation="slideUp" delay={300} duration={900}>
                <h2 className="font-[var(--font-display)] text-[48px] md:text-[64px] lg:text-[80px] leading-[0.9] tracking-[-2.4px] text-paper-white uppercase mb-[var(--spacing-24)]">
                  MULAI DARI
                  <br />
                  PERCAKAPAN
                  <br />
                  <span className="text-midnight-ink">SEDERHANA.</span>
                </h2>
              </Reveal>

              <Reveal animation="fadeUp" delay={450} duration={700}>
                <p className="text-paper-white/70 text-[16px] leading-[1.25] tracking-[-0.42px] max-w-md mb-[var(--spacing-40)]">
                  Ceritakan kebutuhan Anda dan kami akan tunjukkan bagaimana kami bisa membantu. Gratis, tanpa komitmen apapun.
                </p>
              </Reveal>

              <Reveal animation="fadeUp" delay={550} duration={600}>
                <a href="https://wa.me/6282379097272" target="_blank" rel="noopener noreferrer">
                  <button className="group inline-flex items-center gap-2 bg-paper-white text-brand px-[var(--spacing-24)] py-4 rounded-[var(--radius-buttons)] text-[16px] font-medium tracking-[-0.42px] hover:bg-midnight-ink hover:text-paper-white shadow-lg shadow-midnight-ink/10 transition-all duration-300 cursor-pointer">
                    Mulai Percakapan
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                  </button>
                </a>
              </Reveal>
            </div>

          </div>
        </Reveal>

      </div>
    </section>
  );
};

export default CTA;
