"use client";

import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight, Quote } from "lucide-react";
import { siteContent } from "@/data/content";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export const FacultySpotlight: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const { faculty } = siteContent;

  useEffect(() => {
    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      // Desktop: Fanned card entrance that settles into row
      mm.add("(min-width: 768px)", () => {
        cardsRef.current.forEach((card, idx) => {
          if (!card) return;
          const initialRotation = (idx - 1) * 8; // -8deg, 0deg, 8deg
          gsap.fromTo(
            card,
            { opacity: 0, y: 80, rotation: initialRotation * 1.5, scale: 0.9 },
            {
              opacity: 1,
              y: 0,
              rotation: 0,
              scale: 1,
              duration: 1,
              ease: "back.out(1.4)",
              scrollTrigger: {
                trigger: card,
                start: "top 85%",
                toggleActions: "play none none reverse",
              },
            }
          );
        });
      });

      // Mobile: Clean vertical fade-up with no rotation tilt
      mm.add("(max-width: 767px)", () => {
        cardsRef.current.forEach((card) => {
          if (!card) return;
          gsap.fromTo(
            card,
            { opacity: 0, y: 50, scale: 0.95 },
            {
              opacity: 1,
              y: 0,
              scale: 1,
              duration: 0.8,
              ease: "power3.out",
              scrollTrigger: {
                trigger: card,
                start: "top 88%",
                toggleActions: "play none none reverse",
              },
            }
          );
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative w-full py-28 sm:py-36 px-6 sm:px-10 lg:px-16 overflow-hidden text-white"
      style={{ backgroundColor: "#501031" }} // Deep Maroon
    >
      {/* Background Subtle Dot Pattern */}
      <div
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(#ffffff 1.5px, transparent 1.5px)",
          backgroundSize: "20px 20px",
        }}
      />

      {/* Header */}
      <div className="max-w-4xl mx-auto text-center mb-16 sm:mb-24 relative z-10">
        <span className="text-[11px] sm:text-xs font-mono font-bold tracking-[0.25em] uppercase text-[#E5F97A] mb-3 block">
          {faculty.eyebrow}
        </span>
        <h2 className="font-kensington text-[3.2rem] sm:text-[5.5rem] md:text-[6.8rem] leading-[0.88] uppercase tracking-tight text-white">
          {faculty.headline}
        </h2>
        <p className="mt-6 text-base sm:text-lg text-white/80 font-body max-w-2xl mx-auto">
          {faculty.subhead}
        </p>
      </div>

      {/* Faculty Cards Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10 relative z-10">
        {faculty.cards.map((fac, idx) => (
          <div
            key={fac.id}
            ref={(el) => { cardsRef.current[idx] = el; }}
            className="bg-white rounded-3xl p-6 sm:p-8 text-black shadow-2xl flex flex-col justify-between group transition-all duration-300 hover:-translate-y-2"
          >
            {/* Top Row: Portrait + Info */}
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-[#d31f3a] shadow-md flex-shrink-0 aspect-square bg-gray-100">
                  <img
                    src={fac.image}
                    alt={fac.name}
                    className="w-full h-full object-cover object-center"
                    width={80}
                    height={80}
                    loading="lazy"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="font-kensington text-2xl uppercase tracking-tight text-[#211f1d] leading-none mb-1">
                    {fac.name}
                  </h4>
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#d31f3a] block leading-tight mb-0.5">
                    {fac.subject}
                  </span>
                  <span className="text-[11px] text-gray-500 font-mono block leading-tight">
                    {fac.title}
                  </span>
                </div>
              </div>

              {/* Quote Block */}
              <div className="relative pt-2">
                <Quote className="w-6 h-6 text-gray-300 mb-2" />
                <p className="text-sm text-gray-700 font-body italic leading-relaxed">
                  "{fac.quote}"
                </p>
              </div>
            </div>

            {/* Bottom Action */}
            <div className="mt-8 pt-4 border-t border-gray-150 flex items-center justify-between">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#371336] group-hover:text-[#d31f3a] transition-colors">
                FACULTY PROFILE
              </span>
              <div className="w-8 h-8 rounded-full bg-[#f0e9e2] group-hover:bg-[#d31f3a] group-hover:text-white text-black flex items-center justify-center transition-colors">
                <ArrowRight className="w-4 h-4" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
