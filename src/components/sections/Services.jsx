import React from 'react';
import { SERVICES_DATA } from '../../constants';
import SectionTitle from '../ui/SectionTitle';

const Services = () => (
  <section id="services" className="py-24 lg:py-32 bg-slate-50 border-y border-slate-100">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

      <SectionTitle
        title="Layanan Kami"
        subtitle="Apa yang Kami Kerjakan"
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8 -mt-4">
        {SERVICES_DATA.map((service, idx) => {
          const Icon = service.icon;
          return (
            <div
              key={idx}
              className="group relative bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-lg hover:border-teal-100 transition-all duration-300 overflow-hidden"
            >
              {/* Top teal accent line */}
              <div className="h-1 w-full bg-slate-100 group-hover:bg-teal-500 transition-colors duration-300" />

              <div className="p-7 sm:p-8 flex flex-col gap-5">
                {/* Icon */}
                <div className="w-[52px] h-[52px] bg-teal-50 group-hover:bg-teal-100 rounded-xl flex items-center justify-center transition-colors duration-300 shrink-0">
                  <Icon className="w-6 h-6 text-teal-500" />
                </div>

                {/* Text */}
                <div>
                  <h3 className="font-bold text-slate-800 text-xl mb-2.5 leading-snug group-hover:text-teal-600 transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-slate-500 text-sm leading-relaxed">
                    {service.desc}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

    </div>
  </section>
);

export default Services;