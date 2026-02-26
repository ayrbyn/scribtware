import React from 'react';
import Button from '../ui/Button';
import Reveal from '../ui/Reveal';

const CTA = () => (
  // Diperbarui: Menata ulang section CTA menjadi desain 'floating banner card' agar ukurannya lebih terkontrol (tidak melebar berlebihan ke ujung layar)
  <section className="bg-slate-50 py-20 relative overflow-hidden">
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      
      <Reveal>
        <div className="bg-gradient-to-r from-teal-500 to-teal-600 rounded-[2.5rem] p-10 md:p-16 flex flex-col md:flex-row items-center justify-between gap-10 shadow-2xl shadow-teal-500/20 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '32px 32px' }}></div>
          <div className="text-white md:max-w-xl text-center md:text-left relative z-10">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">Mulai dari percakapan sederhana.</h3>
            <p className="text-teal-50 text-base md:text-lg opacity-90 leading-relaxed">Ceritakan kebutuhan Anda dan kami akan tunjukkan bagaimana kami bisa membantu. Gratis, tanpa komitmen apapun.</p>
          </div>
          <div className="relative z-10 shrink-0">
            <a href="https://wa.me/6282379097272" target="_blank" rel="noopener noreferrer">
              <Button variant="white" className="py-4 px-10 text-lg rounded-full shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 text-teal-600 font-bold">
                Mulai Percakapan
              </Button>
            </a>
          </div>
        </div>
      </Reveal>

    </div>
  </section>
);

export default CTA;
