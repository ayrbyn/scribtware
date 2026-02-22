import React from 'react';
import SectionTitle from '../ui/SectionTitle';
import { SERVICES_DATA } from '../../constants';

const Services = () => (
  // Diperbarui: padding Y disesuaikan agar memberi jarak (breathing room) yang cukup di bawah
  <section id="services" className="py-20 lg:pt-24 lg:pb-32 bg-slate-50 border-y border-slate-100">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <SectionTitle title="Layanan Kami" subtitle="Keahlian Kami" />
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        {SERVICES_DATA.map((service, idx) => {
          const Icon = service.icon;
          return (
            // Diperbarui: Padding card dikurangi (p-6) agar tidak terlalu kebesaran
            <div key={idx} className="group bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl hover:shadow-teal-500/5 hover:-translate-y-1 transition-all duration-300">
              <div className="w-12 h-12 bg-teal-50 text-teal-600 rounded-xl flex items-center justify-center mb-5 group-hover:bg-teal-500 group-hover:text-white transition-colors duration-300">
                <Icon className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-slate-800 text-base mb-2 leading-tight">{service.title}</h3>
              <p className="text-slate-500 text-xs leading-relaxed">{service.desc}</p>
            </div>
          );
        })}
      </div>
    </div>
  </section>
);

export default Services;
