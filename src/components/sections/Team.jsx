import React from 'react';
import { images } from "../../assets/images";

const Team = () => {
  // Diperbarui: Menambahkan 5 anggota tim beserta informasi nama dan posisi
  const teamMembers = [
  { img: images.abyan, name: "Abyan", role: "CEO" },
  { img: images.aulia, name: "aulia", role: "CTO" },
  { img: images.amri, name: "Siti", role: "engineer" },
  { img: images.benny, name: "Siti", role: "engineer" },
  { img: images.aji, name: "Siti", role: "Public Relation" },
];

  return (
    <section className="bg-slate-900 py-0 flex flex-col lg:flex-row overflow-hidden">
      {/* Diperbarui: Mengubah grid menjadi 5 kolom (lg:grid-cols-5) */}
      <div className="flex-1 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 h-auto lg:h-[600px]">
        {teamMembers.map((member, idx) => (
          <div key={idx} className="relative group overflow-hidden h-[300px] lg:h-full">
            <img 
              src={member.img} 
              alt={`Team member ${member.name}`} 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
            />
            {/* Overlay gradien untuk memudahkan membaca teks */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent opacity-90 transition-opacity duration-300"></div>
            
            {/* Teks Nama & Posisi di bagian bawah */}
            <div className="absolute bottom-0 left-0 w-full p-5 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
              <h4 className="text-white font-bold text-lg mb-0.5">{member.name}</h4>
              <p className="text-teal-400 text-xs font-medium uppercase tracking-wider">{member.role}</p>
            </div>
          </div>
        ))}
      </div>
      
      {/* Menyesuaikan lebar kontainer teks agar kelima gambar memiliki ruang yang pas */}
      <div className="w-full lg:w-[400px] bg-slate-800 text-white p-10 lg:p-14 flex flex-col justify-center relative shrink-0">
        <div className="absolute left-0 top-0 bottom-0 w-1 bg-teal-500"></div>
        <h2 className="text-4xl font-bold mb-6">Tim Kami</h2>
        <div className="w-12 h-1 bg-teal-500 mb-8 rounded-full"></div>
        <p className="text-slate-300 text-sm leading-relaxed">
          Tim Scribtware terdiri dari desainer dan developer yang
          berpengalaman dalam membangun produk digital
          modern. Kami berdedikasi untuk menghasilkan solusi
          teknologi dengan kualitas tinggi yang membantu bisnis
          berkembang dan beradaptasi dengan tren industri yang
          dinamis.
        </p>
      </div>
    </section>
  );
};

export default Team;
