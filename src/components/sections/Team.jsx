import { images } from "../../assets/images";
import React from "react";
import { Mail } from "lucide-react";
import Reveal from "../ui/Reveal";
import useParallax from "../../hooks/useParallax";

const Team = () => {
  const [decoRef, decoStyle] = useParallax(-0.15);

  const teamMembers = [
    {
      img: images.abyan,
      name: "Abyan",
      role: "Business Operations",
      social: {
        ig: "https://www.instagram.com/_abyan77/",
        email: "abyan.dzakky77@gmail.com",
      },
    },
    {
      img: images.aulia,
      name: "Aulia",
      role: "Developer",
      social: {
        ig: "https://www.instagram.com/m.aulia_rahmannst.pdf/",
        email: "m.auliarnasution@gmail.com",
      },
    },
    {
      img: images.amri,
      name: "Amri",
      role: "Developer",
      social: {
        ig: "https://www.instagram.com/zikkriamri/",
        email: "zikkriamri123@gmail.com",
      },
    },
    {
      img: images.benny,
      name: "Benny",
      role: "Product Manager",
      social: {
        ig: "https://www.instagram.com/bennytamba_/",
        email: "bennyaryan30@gmail.com",
      },
    },
    {
      img: images.aji,
      name: "Adjie",
      role: "Developer",
      social: {
        ig: "https://www.instagram.com/rifky.adjie/",
        email: "rifkyadjiekhairmalau12@gmail.com",
      },
    },
  ];

  return (
    <section id="team" className="py-[var(--spacing-96)] bg-canvas-ice relative overflow-hidden">
      {/* Parallax decorative */}
      <div ref={decoRef} style={decoStyle} className="absolute right-[-5%] top-1/3 w-[350px] h-[350px] rounded-full bg-brand/[0.04] pointer-events-none hidden lg:block" />

      <div className="max-w-7xl mx-auto px-[var(--spacing-24)] sm:px-[var(--spacing-40)] lg:px-[var(--spacing-64)] relative z-10">

        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[var(--spacing-40)] mb-[var(--spacing-80)]">
          <Reveal animation="fadeLeft" duration={800}>
            <div>
              <span className="font-[var(--font-mono)] text-[12px] leading-[1.6] tracking-[-0.36px] text-brand uppercase block mb-[var(--spacing-16)]">
                Tim Kami
              </span>
              <h2 className="font-[var(--font-display)] text-[48px] md:text-[64px] leading-[0.9] tracking-[-1.44px] text-midnight-ink uppercase">
                TIM DI BALIK
                <br />
                SOFTWARE ANDA
              </h2>
            </div>
          </Reveal>
          <Reveal animation="fadeRight" delay={150} duration={800}>
            <div className="flex flex-col justify-end h-full">
              <p className="text-ash-gray text-[16px] leading-[1.25] tracking-[-0.42px] max-w-md">
                Tim engineer dan designer yang fokus membangun software scalable,
                aman, dan siap mendukung pertumbuhan bisnis Anda.
              </p>
            </div>
          </Reveal>
        </div>

        {/* Team grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-[var(--spacing-24)]">
          {teamMembers.map((member, idx) => (
            <Reveal key={idx} animation="scaleIn" delay={idx * 100} duration={700}>
              <div className="group flex flex-col items-center text-center">

                {/* Photo */}
                <div className="relative w-full aspect-square mb-[var(--spacing-16)] rounded-[var(--radius-3xl)] overflow-hidden bg-faint-mist group-hover:shadow-xl group-hover:shadow-brand/15 transition-shadow duration-500">
                  <img
                    src={member.img}
                    alt={member.name}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out"
                    onError={(e) => {
                      e.target.src = `https://ui-avatars.com/api/?name=${member.name}&background=259194&color=ffffff&rounded=false`;
                    }}
                  />
                  {/* Brand overlay on hover */}
                  <div className="absolute inset-0 bg-brand/0 group-hover:bg-brand/5 transition-colors duration-500" />
                </div>

                {/* Name & Role */}
                <h4 className="text-midnight-ink font-medium text-[18px] leading-[1.2] tracking-[-0.72px] mb-1">
                  {member.name}
                </h4>
                <p className="font-[var(--font-mono)] text-[12px] leading-[1.6] tracking-[-0.36px] text-brand uppercase">
                  {member.role}
                </p>

                {/* Contact */}
                <div className="flex items-center gap-3 mt-[var(--spacing-16)]">
                  <a
                    href={`mailto:${member.social.email}`}
                    className="text-fog-gray hover:text-brand transition-colors duration-200"
                    aria-label={`${member.name} Email`}
                  >
                    <Mail size={16} />
                  </a>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Team;
