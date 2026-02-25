import React from 'react';
import SectionTitle from '../ui/SectionTitle';
import { SERVICES_DATA } from '../../constants';

const Services = () => (
  <section id="services" className="py-20 lg:py-32 bg-slate-50 border-y border-slate-100">
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      <SectionTitle title="Layanan Kami" subtitle="Keahlian Kami" />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-12 lg:mt-16">
        {SERVICES_DATA.map((service, idx) => {
          const Icon = service.icon;
          return (
            <div
              key={idx}
              className="group flex flex-col gap-4 p-6 sm:p-8 bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-md hover:border-teal-100 transition-all duration-300"
            >
              {/* Ikon */}
              <div className="w-14 h-14 bg-teal-500 group-hover:bg-teal-600 group-hover:-translate-y-1 rounded-xl flex items-center justify-center shadow-md shadow-teal-500/20 group-hover:shadow-teal-500/40 transition-all duration-300 shrink-0">
                <Icon className="w-7 h-7 text-white" />
              </div>

              {/* Teks */}
              <div>
                <h3 className="font-bold text-slate-800 text-lg mb-2 leading-snug group-hover:text-teal-600 transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed">
                  {service.desc}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  </section>
);

export default Services;