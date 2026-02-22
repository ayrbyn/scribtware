import React from 'react';

const About = () => (
  <section id="about" className="py-24 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col-reverse lg:flex-row items-center gap-16 lg:gap-24">
      
      <div className="w-full lg:w-1/2 flex justify-center">
        <div className="relative w-full max-w-lg p-8 bg-slate-50 rounded-[3rem] border border-slate-100 shadow-sm">
           <svg viewBox="0 0 500 400" fill="none" xmlns="[http://www.w3.org/2000/svg](http://www.w3.org/2000/svg)" className="w-full h-auto drop-shadow-md">
            <circle cx="250" cy="200" r="140" fill="#f0fdfa" />
            <circle cx="250" cy="200" r="180" stroke="#ccfbf1" strokeWidth="2" strokeDasharray="8 8" />
            <path d="M120 250 L 250 120 L 380 250" stroke="#14b8a6" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
            <circle cx="120" cy="250" r="12" fill="#fff" stroke="#14b8a6" strokeWidth="4" />
            <circle cx="250" cy="120" r="16" fill="#14b8a6" />
            <circle cx="380" cy="250" r="12" fill="#fff" stroke="#14b8a6" strokeWidth="4" />
            <text x="120" y="210" fontSize="40" fontWeight="bold" fill="#0d9488" textAnchor="middle" opacity="0.6">?</text>
            <text x="380" y="210" fontSize="40" fontWeight="bold" fill="#0d9488" textAnchor="middle" opacity="0.6">?</text>
            <text x="250" y="90" fontSize="50" fontWeight="bold" fill="#0f766e" textAnchor="middle">!</text>
            <path d="M180 320 C180 280 230 280 230 320" fill="#99f6e4" />
            <circle cx="205" cy="260" r="20" fill="#0d9488" />
            <path d="M270 320 C270 270 320 270 320 320" fill="#ccfbf1" />
            <circle cx="295" cy="250" r="18" fill="#14b8a6" />
          </svg>
        </div>
      </div>

      <div className="w-full lg:w-1/2 space-y-10">
        <div>
          <h2 className="text-3xl font-bold text-slate-800 mb-5 relative inline-block">
            Mengapa Scribtware?
            <span className="absolute -bottom-2 left-0 w-1/3 h-1 bg-teal-500 rounded-full"></span>
          </h2>
          <p className="text-slate-600 leading-relaxed text-base">
            Kami membangun produk digital dengan merealisasikan ide-ide yang inovatif
            yang berfokus pada skalabilitas, efisiensi, dan pertumbuhan
            jangka panjang. Setiap solusi dirancang secara strategis untuk
            mengoptimalkan kinerja sistem, memaksimalkan pengalaman pengguna (User
            Experience) dan memastikan bisnis Anda tetap kompetitif di era digital yang
            terus berkembang.
          </p>
        </div>
        <div>
          <h2 className="text-3xl font-bold text-slate-800 mb-5 relative inline-block">
            Pendekatan Strategis
            <span className="absolute -bottom-2 left-0 w-1/3 h-1 bg-teal-500 rounded-full"></span>
          </h2>
          <p className="text-slate-600 leading-relaxed text-base">
            Kami tidak hanya membangun software; kami membangun solusi
            terpadu yang sejalan dengan tujuan bisnis Anda. Dengan kombinasi
            keahlian teknis yang mendalam dan pemahaman yang kuat tentang
            implementasi teknologi modern, kami memastikan produk digital Anda
            siap bersaing, skalabel, dan relevan di masa depan.
          </p>
        </div>
      </div>

    </div>
  </section>
);

export default About;
