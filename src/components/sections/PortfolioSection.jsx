import React, { useState } from 'react';
import SectionTitle from '../ui/SectionTitle';
import Reveal from '../ui/Reveal';
import { ExternalLink, ChevronLeft, ChevronRight } from 'lucide-react';

const PORTFOLIO_DATA = [
  {
    title: "PhotoBooth 1",
    url: "https://photoboothone.vercel.app",
    desc: "Website company profile photobooth modern dengan tampilan interaktif dan desain yang menarik"
  },
  {
    title: "PhotoBooth 2",
    url: "https://photoboth-two.vercel.app",
    desc: "Website landing page layanan photobooth dengan desain playful dan warna pastel yang menarik."
  },
  {
    title: "Professional Company Profile",
    url: "https://comprolorem.vercel.app",
    desc: "Website company profile modern dengan desain clean dan profesional."
  }
];

const PortfolioSection = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3; // Ubah ke 2 jika ingin melihat paginasi berjalan sekarang

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = PORTFOLIO_DATA.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(PORTFOLIO_DATA.length / itemsPerPage);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
    // Auto scroll ke atas section saat ganti halaman
    document.getElementById('portfolio').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="portfolio" className="py-20 lg:py-32 bg-white border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <Reveal>
          <SectionTitle 
            title="Portfolio Kami" 
            subtitle="Karya Terbaik yang Telah Kami Buat" 
          />
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-8 mt-10 lg:mt-12">
          {currentItems.map((project, idx) => (
            <Reveal key={idx} delay={idx * 100}>
              <div className="group relative bg-teal-50/40 rounded-2xl border border-teal-100 shadow-sm hover:shadow-xl hover:-translate-y-2 hover:border-teal-300 hover:bg-teal-50/80 transition-all duration-300 overflow-hidden flex flex-col h-full cursor-pointer">
                
                {/* Iframe Preview Container */}
                <div className="relative w-full aspect-video bg-white border-b border-teal-100 overflow-hidden">
                  <div 
                    className="absolute top-0 left-0 w-[400%] h-[400%] origin-top-left pointer-events-none opacity-90 group-hover:opacity-100 transition-opacity duration-300" 
                    style={{ transform: 'scale(0.25)' }}
                  >
                    <iframe 
                      src={project.url} 
                      className="w-full h-full border-0 bg-white"
                      scrolling="no"
                      tabIndex={-1}
                      title={`Preview of ${project.title}`}
                    />
                  </div>
                  <div className="absolute inset-0 z-10 bg-teal-500/0 group-hover:bg-teal-500/5 transition-colors duration-300" />
                </div>

                <div className="p-5 sm:p-8 flex flex-col flex-grow relative">
                  <h3 className="font-bold text-slate-800 text-lg sm:text-xl mb-2 sm:mb-3 group-hover:text-teal-600 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-6 flex-grow">
                    {project.desc}
                  </p>

                  <a 
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-auto inline-flex items-center justify-center gap-2 w-full px-4 py-2.5 sm:py-3 bg-white hover:bg-teal-500 text-teal-700 hover:text-white font-medium text-xs sm:text-sm rounded-xl transition-all duration-300 border border-teal-200 hover:border-teal-500 shadow-sm group/btn relative overflow-hidden z-10"
                  >
                    <span className="relative z-10">Kunjungi Website</span>
                    <ExternalLink className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-teal-500 group-hover/btn:text-white transition-colors relative z-10" />
                  </a>
                </div>

              </div>
            </Reveal>
          ))}
        </div>

        {/* Pagination Controls */}
        {totalPages > 1 && (
          <Reveal delay={200}>
            <div className="mt-12 lg:mt-16 flex items-center justify-center gap-3">
              <button
                onClick={() => paginate(Math.max(1, currentPage - 1))}
                disabled={currentPage === 1}
                className="w-10 h-10 rounded-xl border border-teal-100 flex items-center justify-center bg-white text-teal-600 disabled:opacity-30 disabled:cursor-not-allowed hover:bg-teal-50 transition-all"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              
              {[...Array(totalPages)].map((_, i) => (
                <button
                  key={i}
                  onClick={() => paginate(i + 1)}
                  className={`w-10 h-10 rounded-xl font-bold text-sm transition-all ${
                    currentPage === i + 1 
                      ? 'bg-teal-500 text-white shadow-lg shadow-teal-200' 
                      : 'bg-white text-slate-500 border border-teal-100 hover:bg-teal-50'
                  }`}
                >
                  {i + 1}
                </button>
              ))}

              <button
                onClick={() => paginate(Math.min(totalPages, currentPage + 1))}
                disabled={currentPage === totalPages}
                className="w-10 h-10 rounded-xl border border-teal-100 flex items-center justify-center bg-white text-teal-600 disabled:opacity-30 disabled:cursor-not-allowed hover:bg-teal-50 transition-all"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </Reveal>
        )}

      </div>
    </section>
  );
};

export default PortfolioSection;
