"use client";

import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight } from "lucide-react";
import { siteContent } from "@/data/content";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export const DivisionsSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const rowsRef = useRef<(HTMLDivElement | null)[]>([]);
  const { divisions } = siteContent;

  useEffect(() => {
    const ctx = gsap.context(() => {
      rowsRef.current.forEach((row, idx) => {
        if (!row) return;
        gsap.fromTo(
          row,
          { opacity: 0, y: 60 },
          {
            opacity: 1,
            y: 0,
            duration: 0.9,
            ease: "power3.out",
            scrollTrigger: {
              trigger: row,
              start: "top 80%",
              toggleActions: "play none none reverse",
            },
          }
        );
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      id="academics"
      data-theme="light"
      className="relative w-full py-28 sm:py-36 px-6 sm:px-10 lg:px-16"
      style={{ backgroundColor: "#f0e9e2", color: "#371336" }}
    >
      {/* Top Framed Crest Emblem */}
      <div className="w-full flex justify-center mb-6">
        <div className="w-12 h-12 rounded-lg border border-[#371336]/30 flex items-center justify-center p-1 bg-white/60 shadow-sm">
          <svg
            viewBox="0 0 100 100"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            className="w-full h-full text-[#371336]"
          >
            <circle cx="50" cy="50" r="40" stroke="currentColor" />
            <path d="M50 20 L50 80 M20 50 L80 50 M30 30 L70 70 M30 70 L70 30" />
          </svg>
        </div>
      </div>

      {/* Section Header */}
      <div className="text-center max-w-5xl mx-auto mb-16 sm:mb-24">
        <span className="text-xs sm:text-sm font-mono font-extrabold tracking-[0.3em] uppercase text-[#d31f3a] mb-4 block">
          {divisions.eyebrow}
        </span>
        <h2 className="font-kensington text-[3.6rem] sm:text-[6rem] md:text-[7.5rem] leading-[0.86] uppercase tracking-tight text-[#371336]">
          {divisions.headlinePrefix} <span className="text-[#d31f3a]">{divisions.accentWord}</span> {divisions.headlineSuffix}
        </h2>
      </div>

      {/* Division Rows Stack */}
      <div className="max-w-6xl mx-auto flex flex-col space-y-16 sm:space-y-24">
        {divisions.items.map((div, idx) => {
          const isEven = idx % 2 === 0;
          return (
            <div
              key={div.id}
              ref={(el) => { rowsRef.current[idx] = el; }}
              className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center pb-12 sm:pb-16 border-b border-[#371336]/15`}
            >
              {/* Image Column */}
              <div
                className={`lg:col-span-6 relative overflow-hidden rounded-3xl group shadow-xl ${
                  isEven ? "lg:order-1" : "lg:order-2"
                }`}
              >
                <div className="h-72 sm:h-96 w-full overflow-hidden bg-gray-200">
                  <img
                    src={div.image}
                    alt={div.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    width={600}
                    height={400}
                    loading="lazy"
                  />
                </div>
                <div className="absolute top-4 left-4">
                  <span className="px-3.5 py-1.5 rounded-full bg-[#371336] text-white font-mono text-[10px] sm:text-xs font-bold uppercase tracking-wider shadow-md">
                    {div.grade}
                  </span>
                </div>
              </div>

              {/* Text Column */}
              <div
                className={`lg:col-span-6 flex flex-col space-y-4 sm:space-y-5 ${
                  isEven ? "lg:order-2" : "lg:order-1"
                }`}
              >
                <span className="text-xs sm:text-sm font-mono font-extrabold tracking-[0.25em] text-[#d31f3a] uppercase">
                  {div.highlight}
                </span>

                <h3 className="font-kensington text-5xl sm:text-6xl md:text-7xl lg:text-[5rem] uppercase tracking-tight text-[#371336] leading-[0.88]">
                  {div.title}
                </h3>

                <p className="text-lg sm:text-xl lg:text-2xl text-[#211f1d]/90 font-body font-medium leading-relaxed max-w-xl">
                  {div.description}
                </p>

                <div className="pt-2">
                  <a
                    href={`#${div.id}`}
                    className="inline-flex items-center gap-3 px-7 py-3.5 rounded-full border-2 border-[#371336] text-[#371336] font-mono text-xs sm:text-sm font-bold uppercase tracking-wider hover:bg-[#371336] hover:text-white hover:shadow-xl transition-all duration-200"
                  >
                    <span>EXPLORE {div.title.toUpperCase()}</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
