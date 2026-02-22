import React from 'react';
import whyImage from '../../assets/why.png';

const About = () => (
  <section id="about" className="py-24 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col-reverse lg:flex-row items-center gap-16 lg:gap-24">
      
      <div className="w-full lg:w-1/2 flex justify-center">
        <div className="relative w-full max-w-lg p-8 bg-slate-50 rounded-[3rem] border border-slate-100 shadow-sm">
        <img
      src={whyImage}
      alt="Kenapa Scribtware"
      className="w-full h-auto drop-shadow-md"
    />
        </div>
      </div>

      <div className="w-full lg:w-1/2 space-y-10">
        <div>
          <h2 className="text-3xl font-bold text-slate-800 mb-5 relative inline-block">
            Kenapa Scribtware?
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
            Apa kelebihan Scribtware?
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
