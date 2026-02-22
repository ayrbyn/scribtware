import React from 'react';
import { ArrowRight } from 'lucide-react';
import Button from '../ui/Button';

const Hero = () => (
  <section id="hero" className="pt-32 pb-20 lg:pt-32 lg:pb-24 min-h-screen flex items-center bg-slate-50 relative overflow-hidden">
    <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
      <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-teal-100/50 blur-3xl opacity-50"></div>
      <div className="absolute top-40 -left-20 w-[400px] h-[400px] rounded-full bg-blue-100/50 blur-3xl opacity-50"></div>
    </div>

    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex flex-col lg:flex-row items-center relative z-10 gap-12 lg:gap-0">
      
      <div className="w-full lg:w-1/2 lg:pr-12">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-teal-100/50 border border-teal-200 text-teal-700 text-xs font-semibold mb-6">
          <span className="w-2 h-2 rounded-full bg-teal-500 animate-pulse"></span>
          Solusi Digital Modern
        </div>
        <h1 className="text-4xl md:text-5xl xl:text-6xl font-extrabold text-slate-800 leading-[1.15] mb-6 tracking-tight">
        MEMBANGUN <span className="text-transparent bg-clip-text bg-teal-500">SOFTWARE</span><br />
        MEMBANTU BISNIS TUMBUH
        </h1>
        <p className="text-slate-600 text-base md:text-lg leading-relaxed mb-8 max-w-lg">
        Kami membantu bisnis membangun produk digital yang profesional dan modern.
        Dirancang untuk meningkatkan kredibilitas, efisiensi, dan pertumbuhan bisnis Anda.
        Website, aplikasi, dan software custom berkualitas tinggi untuk kebutuhan jangka panjang.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Button className="group px-8 py-4 text-base">
            Mulai Proyek
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
          </Button>
        <a href="#about">
        <Button variant="secondary" className="px-8 py-4 text-base">
            Pelajari Lebih Lanjut
        </Button>
        </a>
        </div>
      </div>

      <div className="w-full lg:w-1/2 relative flex justify-center lg:justify-end mt-10 lg:mt-0">
        <div className="relative w-full max-w-lg aspect-square lg:aspect-[4/5] rounded-3xl z-10 overflow-hidden shadow-2xl shadow-slate-300/50 group">
          {/* DIUBAH: Gambar pria berjas diganti dengan gambar monitor kode dari Unsplash */}
          <img 
            src="https://images.unsplash.com/photo-1542831371-29b0f74f9713?auto=format&fit=crop&w=1000&q=80" 
            alt="Programming Code" 
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent"></div>
        </div>
        <div className="absolute -bottom-6 -left-6 lg:left-auto lg:-right-6 lg:top-6 w-full max-w-lg aspect-square lg:aspect-[4/5] rounded-3xl border-2 border-teal-500/20 z-0"></div>
        <div className="absolute -bottom-8 -left-8 lg:left-auto lg:-right-8 lg:top-8 w-full max-w-lg aspect-square lg:aspect-[4/5] rounded-3xl bg-teal-500 z-[-1] opacity-10"></div>
      </div>

    </div>
  </section>
);

export default Hero;