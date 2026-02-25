import React from 'react';
import { Target, Zap, ShieldCheck } from 'lucide-react';

const PILLARS = [
  {
    icon: Target,
    title: 'Dibuat Khusus untuk Anda',
    desc: 'Tidak ada template, tidak ada solusi copy-paste. Setiap baris kode kami tulis sesuai kebutuhan dan alur kerja bisnis Anda yang unik.',
  },
  {
    icon: Zap,
    title: 'Fokus pada Dampak Bisnis',
    desc: 'Setiap keputusan teknis kami arahkan ke satu tujuan: hasil nyata bagi bisnis Anda. Bukan sekadar software yang berjalan, tapi software yang berdampak.',
  },
  {
    icon: ShieldCheck,
    title: 'Transparan dari Awal hingga Akhir',
    desc: 'Estimasi biaya jelas, progress selalu terbuka, dan tidak ada kejutan di tengah jalan. Kami percaya kepercayaan dibangun lewat komunikasi, bukan janji.',
  },
];

const About = () => (
  <section id="about" className="py-24 lg:py-32 bg-white">
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

      {/* Header */}
      <div className="max-w-2xl mb-14 lg:mb-16">
        <span className="text-teal-500 font-semibold tracking-widest uppercase text-xs mb-4 block">
          Tentang Kami
        </span>
        <h2 className="text-3xl md:text-4xl font-extrabold text-slate-800 tracking-tight leading-tight mb-4">
          Kami tidak sekadar koding.<br />
          <span className="text-teal-500">Kami membangun solusi.</span>
        </h2>
        <p className="text-slate-500 text-base md:text-lg leading-relaxed">
          Scribtware hadir untuk menjadi partner teknologi jangka panjang bisnis Anda,
          bukan vendor yang datang lalu pergi setelah proyek selesai.
        </p>
      </div>

      {/* Pillars */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
        {PILLARS.map(({ icon: Icon, title, desc }, idx) => (
          <div
            key={idx}
            className="group flex flex-col gap-5 p-7 lg:p-8 bg-slate-50 rounded-2xl border border-slate-100 hover:border-teal-100 hover:bg-white hover:shadow-md transition-all duration-300"
          >
            {/* Icon */}
            <div className="w-12 h-12 bg-white group-hover:bg-teal-50 rounded-xl flex items-center justify-center border border-slate-100 group-hover:border-teal-100 shadow-sm transition-all duration-300 shrink-0">
              <Icon className="w-5 h-5 text-teal-500" />
            </div>

            {/* Text */}
            <div>
              <h3 className="font-bold text-slate-800 text-lg mb-2 leading-snug group-hover:text-teal-600 transition-colors duration-300">
                {title}
              </h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                {desc}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom bridge */}
      <div className="mt-12 lg:mt-14 flex flex-col sm:flex-row items-start sm:items-center gap-3">
        <div className="h-px flex-1 bg-slate-100 hidden sm:block" />
        <p className="text-slate-400 text-sm text-center sm:text-left shrink-0 max-w-lg">
          Siap melihat bagaimana kami bisa membantu bisnis Anda?{' '}
          <a href="#services" className="text-teal-500 font-semibold hover:text-teal-600 transition-colors">
            Lihat layanan kami →
          </a>
        </p>
        <div className="h-px flex-1 bg-slate-100 hidden sm:block" />
      </div>

    </div>
  </section>
);

export default About;
