"use client";

import React from "react";
import { ArrowRight, Sparkles } from "lucide-react";
import { siteContent } from "@/data/content";

export const MarqueeBanner: React.FC = () => {
  const { marqueeCta } = siteContent;

  return (
    <section className="relative w-full bg-[#d31f3a] text-white overflow-hidden">
      {/* Infinite Moving Marquee Strip */}
      <div className="w-full overflow-hidden whitespace-nowrap border-y-2 border-white/20 py-4 sm:py-5 bg-[#7d1334] relative shadow-inner z-10">
        <div className="flex w-max animate-marquee">
          {/* First loop track */}
          <div className="flex shrink-0 items-center gap-6 sm:gap-10 font-kensington text-4xl sm:text-6xl md:text-7xl uppercase tracking-wider text-white select-none pr-6 sm:pr-10">
            <span>{marqueeCta.marqueeText}</span>
            <span>{marqueeCta.marqueeText}</span>
          </div>

          {/* Duplicate loop track for seamless continuous loop */}
          <div className="flex shrink-0 items-center gap-6 sm:gap-10 font-kensington text-4xl sm:text-6xl md:text-7xl uppercase tracking-wider text-white select-none pr-6 sm:pr-10" aria-hidden="true">
            <span>{marqueeCta.marqueeText}</span>
            <span>{marqueeCta.marqueeText}</span>
          </div>
        </div>
      </div>

      {/* Main CTA Action Container */}
      <div className="max-w-5xl mx-auto px-6 sm:px-12 py-20 sm:py-28 text-center flex flex-col items-center relative z-10">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/15 border border-white/25 text-xs font-mono font-bold tracking-[0.2em] uppercase text-white mb-6">
          <Sparkles className="w-3.5 h-3.5 text-[#E5F97A]" />
          <span>{marqueeCta.badge}</span>
        </div>

        <h2 className="font-kensington text-[3.4rem] sm:text-[5.5rem] md:text-[7rem] leading-[0.88] uppercase tracking-tight text-white max-w-3xl">
          {marqueeCta.headline}
        </h2>

        <p className="mt-6 text-base sm:text-lg text-white/90 font-body max-w-xl leading-relaxed">
          {marqueeCta.paragraph}
        </p>

        {/* Action Buttons */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <a
            href={marqueeCta.primaryBtn.href}
            className="px-8 py-4 rounded-full bg-white text-[#d31f3a] font-mono text-xs font-bold uppercase tracking-wider hover:bg-[#E5F97A] hover:text-black transition-all duration-200 shadow-xl flex items-center gap-2"
          >
            <span>{marqueeCta.primaryBtn.text}</span>
            <ArrowRight className="w-4 h-4" />
          </a>
          <a
            href={marqueeCta.secondaryBtn.href}
            className="px-8 py-4 rounded-full border border-white text-white font-mono text-xs font-bold uppercase tracking-wider hover:bg-white hover:text-black transition-all duration-200"
          >
            {marqueeCta.secondaryBtn.text}
          </a>
        </div>
      </div>
    </section>
  );
};
