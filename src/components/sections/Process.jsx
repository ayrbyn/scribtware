import React from 'react';
import { FileSearch, Code2, FlaskConical, Rocket } from 'lucide-react';
import { PROCESS_STEPS } from '../../constants';

const ICONS = [FileSearch, Code2, FlaskConical, Rocket];

const Process = () => (
  <section id="process" className="py-24 lg:py-32 bg-white">
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

      {/* Header */}
      <div className="max-w-xl mb-16 lg:mb-20">
        <span className="text-teal-500 font-semibold tracking-widest uppercase text-xs mb-4 block">
          Metodologi Kerja
        </span>
        <h2 className="text-3xl md:text-4xl font-extrabold text-slate-800 tracking-tight leading-tight">
          Bagaimana kami membangun produk Anda
        </h2>
      </div>

      {/* ── DESKTOP: Horizontal flow ── */}
      <div className="hidden lg:flex items-start justify-between gap-0">
        {PROCESS_STEPS.map((step, idx) => {
          const Icon = ICONS[idx];
          const isLast = idx === PROCESS_STEPS.length - 1;
          return (
            <React.Fragment key={idx}>
              {/* Step */}
              <div className="group flex flex-col items-center text-center flex-1 px-4">
                {/* Icon circle */}
                <div className="w-16 h-16 rounded-full bg-teal-500 group-hover:bg-teal-600 shadow-md shadow-teal-500/25 group-hover:shadow-teal-500/40 group-hover:-translate-y-1 flex items-center justify-center transition-all duration-300 mb-5">
                  <Icon className="w-7 h-7 text-white" />
                </div>

                {/* Number + Title + Desc */}
                <p className="text-xs font-black text-teal-400 tracking-[0.2em] uppercase mb-2">
                  {step.number}
                </p>
                <h3 className="font-extrabold text-slate-800 text-lg leading-snug mb-2.5 group-hover:text-teal-600 transition-colors duration-300">
                  {step.title}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed">
                  {step.desc}
                </p>
              </div>

              {/* Connector arrow — between steps */}
              {!isLast && (
                <div className="flex items-start pt-7 shrink-0">
                  <svg width="48" height="20" viewBox="0 0 48 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <line x1="0" y1="10" x2="36" y2="10" stroke="#5eead4" strokeWidth="2.5" strokeDasharray="5 4" strokeLinecap="round" />
                    <path d="M34 4 L44 10 L34 16" stroke="#14b8a6" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                  </svg>
                </div>
              )}
            </React.Fragment>
          );
        })}
      </div>

      {/* ── MOBILE: Vertical stepper ── */}
      <div className="flex flex-col lg:hidden">
        {PROCESS_STEPS.map((step, idx) => {
          const Icon = ICONS[idx];
          const isLast = idx === PROCESS_STEPS.length - 1;
          return (
            <div key={idx} className="flex gap-4">
              {/* Left: icon + line */}
              <div className="flex flex-col items-center">
                <div className="w-10 h-10 rounded-full bg-teal-500 shadow-sm shadow-teal-500/20 flex items-center justify-center shrink-0">
                  <Icon className="w-4 h-4 text-white" />
                </div>
                {!isLast && <div className="w-0.5 flex-1 bg-teal-100 my-1.5" />}
              </div>
              {/* Right: text */}
              <div className={`flex-1 pt-1 ${isLast ? 'pb-0' : 'pb-7'}`}>
                <p className="text-[10px] font-bold text-teal-500 tracking-widest mb-1">{step.number}</p>
                <h4 className="font-bold text-slate-800 text-sm leading-snug mb-1">{step.title}</h4>
                <p className="text-slate-500 text-xs leading-relaxed">{step.desc}</p>
              </div>
            </div>
          );
        })}
      </div>

    </div>
  </section>
);

export default Process;
