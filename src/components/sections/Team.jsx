import { images } from "../../assets/images";
import React, { useEffect, useState } from 'react';
import { Instagram, Mail } from 'lucide-react';

const Team = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Memicu animasi masuk setelah komponen dimuat
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  // Menggunakan struktur data sesuai permintaan Anda
  const teamMembers = [
    { 
      img: images.abyan, 
      name: "Abyan", 
      role: "CEO",
      social: { ig: "https://www.instagram.com/_abyan77/", email: "abyan.dzakky77@gmail.com" }
    },
    { 
      img: images.aulia, 
      name: "Aulia", 
      role: "CTO",
      social: { ig: "https://www.instagram.com/m.aulia_rahmannst.pdf/", email: "m.auliarnasution@gmail.com" }
    },
    { 
      img: images.amri, 
      name: "Amri", 
      role: "Engineer",
      social: { ig: "https://www.instagram.com/zikkriamri/", email: "zikkriamri123@gmail.com" }
    },
    { 
      img: images.benny, 
      name: "Benny", 
      role: "Engineer",
      social: { ig: "https://www.instagram.com/bennytamba_/", email: "bennyaryan30@gmail.com" }
    },
    { 
      img: images.aji, 
      name: "Adjie", 
      role: "Public Relation",
      social: { ig: "https://www.instagram.com/rifky.adjie/", email: "rifkyadjiekhairmalau12@gmail.com" }
    },
  ];

  return (
    <section className="bg-white py-20 px-4 sm:px-6 lg:px-8 text-center font-sans overflow-hidden">
      {/* Header Section dengan Animasi Fade-in Down */}
      <div 
        className={`max-w-4xl mx-auto mb-20 transition-all duration-1000 transform ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'
        }`}
      >
        <p className="text-teal-600 font-bold text-sm uppercase tracking-[0.2em] mb-3">Tim Kami</p>
        <h2 className="text-4xl md:text-6xl font-extrabold text-gray-900 mb-4 tracking-tight text-balance">Tim di Balik Software Anda</h2>
        <div className="w-16 h-1 bg-teal-500 mx-auto mb-8 rounded-full"></div>
        <p className="text-gray-500 max-w-2xl mx-auto leading-relaxed text-lg">
          Tim engineer dan designer yang fokus membangun software scalable, aman, dan siap mendukung pertumbuhan bisnis Anda.
        </p>
      </div>

      {/* Team Container - Flex Wrap dengan Justify Center */}
      {/* Ini memastikan jika ada item ganjil (seperti Adjie), dia akan berada di tengah pada baris baru di mobile */}
      <div className="max-w-7xl mx-auto flex flex-wrap justify-center gap-x-8 gap-y-16 sm:gap-x-12 lg:gap-x-6">
        {teamMembers.map((member, idx) => (
          <div 
            key={idx} 
            className={`flex flex-col items-center w-[140px] sm:w-[180px] md:w-[200px] lg:flex-1 lg:min-w-[180px] transition-all duration-700 transform ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
            }`}
            style={{ transitionDelay: `${idx * 150}ms` }}
          >
            {/* Image Container dengan Efek Hover Teal */}
            <div className="relative w-28 h-28 sm:w-32 sm:h-32 md:w-40 md:h-40 mb-6 rounded-full overflow-hidden border-2 border-transparent group transition-all duration-500 hover:shadow-2xl hover:shadow-teal-500/20 ring-offset-4 hover:ring-2 ring-teal-500/30">
              <img 
                src={member.img} 
                alt={member.name} 
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 ease-in-out scale-100 group-hover:scale-110"
                onError={(e) => { e.target.src = `https://ui-avatars.com/api/?name=${member.name}&background=0D9488&color=fff&rounded=true`; }}
              />
              <div className="absolute inset-0 bg-teal-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>

            {/* Nama & Role */}
            <div className="space-y-1">
              <h4 className="text-gray-900 font-extrabold text-lg md:text-2xl leading-tight">{member.name}</h4>
              <p className="text-teal-600 text-[9px] md:text-xs font-bold uppercase tracking-[0.15em]">{member.role}</p>
            </div>

            {/* Ikon Sosial Media */}
            <div className="flex items-center gap-4 mt-4">
              <a 
                href={member.social.ig} 
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-teal-600 transition-colors duration-300 transform hover:scale-110"
                aria-label={`${member.name} Instagram`}
              >
                <Instagram size={18} />
              </a>
              <a 
                href={`mailto:${member.social.email}`} 
                className="text-gray-400 hover:text-teal-600 transition-colors duration-300 transform hover:scale-110"
                aria-label={`${member.name} Email`}
              >
                <Mail size={18} />
              </a>
            </div>
            
            {/* Divider Halus (Hanya Mobile) */}
            <div className="w-8 h-[1px] bg-gray-100 mt-6 lg:hidden"></div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Team;