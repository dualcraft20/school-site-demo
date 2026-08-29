"use client";

import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight } from "lucide-react";
import { siteContent } from "@/data/content";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export const BentoGrid: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const itemsRef = useRef<(HTMLDivElement | null)[]>([]);
  const { bento } = siteContent;

  useEffect(() => {
    const ctx = gsap.context(() => {
      itemsRef.current.forEach((item, idx) => {
        if (!item) return;
        gsap.fromTo(
          item,
          { opacity: 0, y: 50, scale: 0.96 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
              trigger: item,
              start: "top 85%",
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
      data-theme="light"
      className="relative w-full py-28 sm:py-36 px-6 sm:px-10 lg:px-16"
      style={{ backgroundColor: "#f0e9e2", color: "#371336" }}
    >
      {/* Header */}
      <div className="max-w-4xl mx-auto text-center mb-16 sm:mb-20">
        <span className="text-[11px] sm:text-xs font-mono font-bold tracking-[0.25em] uppercase text-[#d31f3a] mb-3 block">
          {bento.eyebrow}
        </span>
        <h2 className="font-kensington text-[3.2rem] sm:text-[5.5rem] md:text-[6.5rem] leading-[0.88] uppercase tracking-tight text-[#371336]">
          {bento.headline}
        </h2>
      </div>

      {/* Asymmetrical Bento Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-6">
        {/* Item 1: Writers & Scholars (7 cols) */}
        <div
          ref={(el) => { itemsRef.current[0] = el; }}
          className="md:col-span-7 bg-white rounded-3xl p-6 sm:p-8 shadow-xl flex flex-col justify-between overflow-hidden relative group"
        >
          <div className="flex justify-between items-start mb-6">
            <span className="px-3.5 py-1.5 rounded-full bg-[#f0e9e2] text-[#371336] font-mono text-[10px] sm:text-xs font-bold uppercase tracking-wider">
              {bento.items[0].category}
            </span>
            <span className="font-script text-xl text-[#d31f3a] font-bold -rotate-6">
              {bento.items[0].annotation}
            </span>
          </div>

          <div className="h-60 sm:h-72 rounded-2xl overflow-hidden mb-6 bg-gray-100">
            <img
              src={bento.items[0].image}
              alt={bento.items[0].title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              width={600}
              height={300}
              loading="lazy"
            />
          </div>

          <div>
            <h3 className="font-kensington text-3xl sm:text-4xl uppercase tracking-tight text-[#211f1d]">
              {bento.items[0].title}
            </h3>
            <p className="text-sm text-gray-600 font-body mt-2 leading-relaxed">
              {bento.items[0].detail}
            </p>
          </div>
        </div>

        {/* Item 2: 100% Matriculation Stat Block (5 cols) */}
        <div
          ref={(el) => { itemsRef.current[1] = el; }}
          className="md:col-span-5 bg-[#d31f3a] text-white rounded-3xl p-8 sm:p-10 shadow-xl flex flex-col justify-between"
        >
          <span className="px-3.5 py-1.5 rounded-full bg-white/20 text-white font-mono text-[10px] sm:text-xs font-bold uppercase tracking-wider self-start">
            {bento.items[1].category}
          </span>

          <div className="my-auto py-8 text-center">
            <span className="font-kensington text-7xl sm:text-8xl lg:text-9xl block leading-none">
              {bento.items[1].stat}
            </span>
            <span className="font-mono text-xs sm:text-sm uppercase tracking-[0.2em] font-bold text-white/80 mt-2 block">
              {bento.items[1].statLabel}
            </span>
          </div>

          <p className="text-sm text-white/90 font-body leading-relaxed text-center">
            {bento.items[1].detail}
          </p>
        </div>

        {/* Item 3: Creators & Designers (5 cols) */}
        <div
          ref={(el) => { itemsRef.current[2] = el; }}
          className="md:col-span-5 bg-white rounded-3xl p-6 sm:p-8 shadow-xl flex flex-col justify-between overflow-hidden group"
        >
          <div className="flex justify-between items-start mb-4">
            <span className="px-3.5 py-1.5 rounded-full bg-[#f0e9e2] text-[#371336] font-mono text-[10px] sm:text-xs font-bold uppercase tracking-wider">
              {bento.items[2].category}
            </span>
            <div className="w-8 h-8 rounded-full bg-[#f0e9e2] group-hover:bg-[#371336] group-hover:text-white flex items-center justify-center transition-colors">
              <ArrowUpRight className="w-4 h-4" />
            </div>
          </div>

          <div className="h-48 sm:h-56 rounded-2xl overflow-hidden my-4 bg-gray-100">
            <img
              src={bento.items[2].image}
              alt={bento.items[2].title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              width={400}
              height={250}
              loading="lazy"
            />
          </div>

          <div>
            <h3 className="font-kensington text-2xl sm:text-3xl uppercase tracking-tight text-[#211f1d]">
              {bento.items[2].title}
            </h3>
            <p className="text-xs text-gray-600 font-body mt-1 leading-relaxed">
              {bento.items[2].detail}
            </p>
          </div>
        </div>

        {/* Item 4: Community Service (7 cols) */}
        <div
          ref={(el) => { itemsRef.current[3] = el; }}
          className="md:col-span-7 bg-[#13375c] text-white rounded-3xl p-8 sm:p-10 shadow-xl flex flex-col justify-between"
        >
          <div className="flex justify-between items-start">
            <span className="px-3.5 py-1.5 rounded-full bg-white/15 text-white font-mono text-[10px] sm:text-xs font-bold uppercase tracking-wider">
              {bento.items[3].category}
            </span>
            <span className="font-mono text-xs uppercase tracking-widest text-[#E5F97A]">
              CIVIC LEADERSHIP
            </span>
          </div>

          <div className="my-auto py-6">
            <span className="font-kensington text-6xl sm:text-7xl lg:text-8xl block leading-none text-[#E5F97A]">
              {bento.items[3].stat}
            </span>
            <p className="text-sm sm:text-base text-white/85 font-body mt-3 max-w-lg leading-relaxed">
              {bento.items[3].detail}
            </p>
          </div>

          <div className="pt-4 border-t border-white/15 flex items-center justify-between text-xs font-mono text-white/70">
            <span>ENGAGED CITIZENSHIP</span>
            <span>COMMUNITY PARTNERSHIPS →</span>
          </div>
        </div>
      </div>
    </section>
  );
};
