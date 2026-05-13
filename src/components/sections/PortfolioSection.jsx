import React, { useState } from "react";
import SectionTitle from "../ui/SectionTitle";
import Reveal from "../ui/Reveal";
import { ExternalLink, ChevronLeft, ChevronRight } from "lucide-react";

const PORTFOLIO_DATA = [
  {
    title: "PhotoBooth 1",
    url: "https://photoboothone.vercel.app",
    desc: "Website company profile photobooth modern dengan tampilan interaktif dan desain yang menarik",
    type: "Photobooth",
  },
  {
    title: "PhotoBooth 2",
    url: "https://photoboth-two.vercel.app",
    desc: "Website landing page layanan photobooth dengan desain playful dan warna pastel yang menarik.",
    type: "Photobooth",
  },
  {
    title: "Professional Company Profile",
    url: "https://comprolorem.vercel.app",
    desc: "Website company profile modern dengan desain clean dan profesional.",
    type: "Profile Company",
  },
  {
    title: "Online Course Landing Page",
    url: "https://coursecompro.vercel.app/",
    desc: "Website company profile course mandarin modern dengan desain clean dan profesional.",
    type: "Online Course",
  },
  {
    title: "English Course Profile",
    url: "https://english-course-compro.vercel.app/",
    desc: "Website company profile kursus bahasa Inggris modern dengan desain clean dan profesional.",
    type: "English Course",
  },
  {
    title: "Southern English Course",
    url: "https://southernenglishcourse.vercel.app/",
    desc: "Website company profile Southern English Course dengan desain interaktif dan responsif.",
    type: "English Course",
  },
  {
    title: "SEC Company Profile",
    url: "https://compro-sec.vercel.app/",
    desc: "Website landing page untuk SEC dengan layout yang informatif dan elegan.",
    type: "Company Profile",
  },
];

const PortfolioSection = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = PORTFOLIO_DATA.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(PORTFOLIO_DATA.length / itemsPerPage);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
    document.getElementById("portfolio").scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="portfolio"
      className="py-[var(--spacing-96)] bg-canvas-ice"
    >
      <div className="max-w-7xl mx-auto px-[var(--spacing-24)] sm:px-[var(--spacing-40)] lg:px-[var(--spacing-64)]">
        <Reveal animation="fadeLeft" duration={800}>
          <SectionTitle
            title="Karya Terbaik Kami"
            subtitle="Portfolio"
          />
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[var(--spacing-24)]">
          {currentItems.map((project, idx) => (
            <Reveal key={`${currentPage}-${idx}`} animation="slideUp" delay={idx * 120} duration={800}>
              <div className="group bg-paper-white rounded-[var(--radius-cards)] overflow-hidden flex flex-col h-full hover:-translate-y-2 transition-all duration-500 hover:shadow-xl hover:shadow-brand/10">
                {/* Iframe Preview */}
                <div className="relative w-full aspect-video bg-faint-mist overflow-hidden">
                  <div
                    className="absolute top-0 left-0 w-[400%] h-[400%] origin-top-left pointer-events-none opacity-90 group-hover:opacity-100 transition-opacity duration-300"
                    style={{ transform: "scale(0.25)" }}
                  >
                    <iframe
                      src={project.url}
                      className="w-full h-full border-0 bg-white"
                      scrolling="no"
                      tabIndex={-1}
                      title={`Preview of ${project.title}`}
                    />
                  </div>
                  {/* Brand overlay on hover */}
                  <div className="absolute inset-0 z-10 bg-brand/0 group-hover:bg-brand/5 transition-colors duration-300" />
                </div>

                <div className="p-[var(--spacing-24)] flex flex-col flex-grow">
                  {/* Type badge */}
                  <span className="font-[var(--font-mono)] text-[12px] leading-[1.6] tracking-[-0.36px] text-brand uppercase mb-[var(--spacing-8)]">
                    {project.type}
                  </span>

                  <h3 className="font-medium text-midnight-ink text-[18px] leading-[1.2] tracking-[-0.72px] mb-[var(--spacing-8)] group-hover:text-brand transition-colors duration-200">
                    {project.title}
                  </h3>

                  <p className="text-ash-gray text-[14px] leading-[1.3] tracking-[-0.42px] mb-[var(--spacing-24)] flex-grow">
                    {project.desc}
                  </p>

                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-brand text-[14px] font-medium tracking-[-0.42px] hover:text-brand-dark transition-colors duration-200"
                  >
                    Kunjungi Website
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Pagination Controls */}
        {totalPages > 1 && (
          <Reveal animation="fadeUp" delay={200}>
            <div className="mt-[var(--spacing-64)] flex items-center justify-center gap-2">
              <button
                onClick={() => paginate(Math.max(1, currentPage - 1))}
                disabled={currentPage === 1}
                className="w-10 h-10 rounded-[var(--radius-lg)] border border-canvas-ice flex items-center justify-center bg-paper-white text-midnight-ink disabled:opacity-30 disabled:cursor-not-allowed hover:bg-brand-light hover:border-brand/20 transition-all cursor-pointer"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              {[...Array(totalPages)].map((_, i) => (
                <button
                  key={i}
                  onClick={() => paginate(i + 1)}
                  className={`w-10 h-10 rounded-[var(--radius-lg)] font-medium text-[14px] transition-all cursor-pointer ${
                    currentPage === i + 1
                      ? "bg-brand text-paper-white shadow-md shadow-brand/20"
                      : "bg-paper-white text-ash-gray border border-canvas-ice hover:bg-brand-light hover:border-brand/20"
                  }`}
                >
                  {i + 1}
                </button>
              ))}

              <button
                onClick={() => paginate(Math.min(totalPages, currentPage + 1))}
                disabled={currentPage === totalPages}
                className="w-10 h-10 rounded-[var(--radius-lg)] border border-canvas-ice flex items-center justify-center bg-paper-white text-midnight-ink disabled:opacity-30 disabled:cursor-not-allowed hover:bg-brand-light hover:border-brand/20 transition-all cursor-pointer"
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
