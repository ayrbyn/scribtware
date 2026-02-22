import React from 'react';
import { Trophy } from 'lucide-react';
import SectionTitle from '../ui/SectionTitle';
import { PROCESS_STEPS } from '../../constants';

const Process = () => (
  // Diperbarui: Padding bottom ditingkatkan menjadi lg:pb-40 dan h-[500px] agar ada jarak ekstrim yang memisahkan area ini dengan section Tim
  <section id="process" className="py-24 lg:pt-24 lg:pb-40 bg-white overflow-hidden relative">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <SectionTitle title="Bagaimana Kami Membangun Produk Anda" subtitle="Metodologi Kerja" />

      {/* Desktop Layout (lg and up) - Diperbarui h-[500px] */}
      <div className="relative mt-24 mb-10 hidden lg:block h-[500px]">
        {/* Main Horizontal Line */}
        <div className="absolute top-1/2 left-0 right-10 h-0.5 bg-gradient-to-r from-teal-200 via-teal-500 to-teal-200 -translate-y-1/2 z-0"></div>

        {/* Target/Trophy Icon at end */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full border-4 border-teal-50 flex items-center justify-center z-20 shadow-lg">
           <Trophy className="w-6 h-6 text-yellow-500" fill="currentColor" />
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-6 gap-6 relative z-10 h-full">
          {PROCESS_STEPS.map((step, idx) => {
            const isTop = step.position === 'top';
            return (
              <div key={idx} className="relative w-full h-full flex justify-center">

                {/* Node Dot exactly at center line */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-5 h-5 rounded-full bg-white border-4 border-teal-500 z-20 shadow-md"></div>

                {/* Connecting Vertical Line */}
                {isTop ? (
                  <div className="absolute bottom-1/2 left-1/2 -translate-x-1/2 w-[2px] h-8 bg-teal-200 z-10"></div>
                ) : (
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 w-[2px] h-8 bg-teal-200 z-10"></div>
                )}

                {/* Card Container */}
                <div className={`absolute left-0 right-0 ${isTop ? 'bottom-1/2 mb-8' : 'top-1/2 mt-8'}`}>
                  <div className="bg-white p-5 rounded-2xl border border-slate-100 shadow-md hover:shadow-lg hover:border-teal-200 transition-all duration-300 w-full relative z-30 flex flex-col items-center text-center group">
                    <span className="text-4xl font-black text-slate-50 opacity-50 absolute top-2 right-4 z-0 transition-opacity group-hover:text-teal-50 group-hover:opacity-100">{step.number}</span>
                    <div className="relative z-10">
                      <h4 className="font-bold text-slate-800 text-sm mb-2 group-hover:text-teal-600 transition-colors">{step.title}</h4>
                      <p className="text-slate-500 text-xs leading-relaxed">{step.desc}</p>
                    </div>
                  </div>
                </div>

              </div>
            );
          })}
        </div>
      </div>

      {/* Mobile & Tablet Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12 lg:hidden relative z-10">
         {PROCESS_STEPS.map((step, idx) => (
            <div key={idx} className="bg-white p-6 rounded-2xl border border-slate-100 shadow-md hover:shadow-lg transition-all duration-300 w-full relative overflow-hidden flex flex-col items-center text-center group">
                <span className="text-6xl font-black text-slate-50 opacity-50 absolute -right-2 -top-2 z-0">{step.number}</span>
                <div className="relative z-10">
                    <h4 className="font-bold text-slate-800 text-base mb-3 text-teal-600">{step.number}. {step.title}</h4>
                    <p className="text-slate-500 text-sm leading-relaxed">{step.desc}</p>
                </div>
            </div>
         ))}
      </div>

    </div>
  </section>
);

export default Process;
