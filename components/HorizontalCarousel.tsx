"use client";

import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight } from "lucide-react";
import { siteContent } from "@/data/content";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export const HorizontalCarousel: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const { horizontalCarousel } = siteContent;

  useEffect(() => {
    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      // Desktop: Pinned horizontal track animation
      mm.add("(min-width: 768px)", () => {
        const track = trackRef.current;
        if (!track) return;

        const totalScroll = track.scrollWidth - window.innerWidth + 120;

        gsap.to(track, {
          x: () => -totalScroll,
          ease: "none",
          scrollTrigger: {
            trigger: containerRef.current,
            pin: true,
            scrub: 1,
            start: "top top",
            end: () => `+=${totalScroll}`,
            invalidateOnRefresh: true,
          },
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative w-full min-h-screen md:h-screen overflow-hidden text-white flex flex-col justify-between py-12"
      style={{ backgroundColor: "#13375c" }} // Midnight Blue
    >
      {/* Top Header */}
      <div className="w-full px-6 sm:px-12 lg:px-16 flex flex-col sm:flex-row items-start sm:items-end justify-between z-10">
        <div>
          <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#E5F97A] font-bold block mb-2">
            {horizontalCarousel.badge}
          </span>
          <h2 className="font-kensington text-4xl sm:text-6xl uppercase tracking-tight text-white">
            {horizontalCarousel.title}
          </h2>
        </div>
        <p className="text-sm font-mono text-white/70 max-w-sm mt-3 sm:mt-0">
          {horizontalCarousel.subtitle}
        </p>
      </div>

      {/* Horizontal Scroll Track (Native touch swipe on mobile, GSAP translate on desktop) */}
      <div className="flex-1 flex items-center overflow-x-auto md:overflow-hidden my-auto py-6 md:py-0 scrollbar-none snap-x snap-mandatory md:snap-none">
        <div
          ref={trackRef}
          className="flex items-center gap-6 sm:gap-12 pl-6 sm:pl-16 pr-12 sm:pr-24 will-change-transform"
        >
          {horizontalCarousel.cards.map((card, idx) => (
            <div
              key={card.id}
              className={`w-[82vw] sm:w-[460px] lg:w-[540px] h-[52vh] sm:h-[58vh] min-h-[380px] bg-white rounded-3xl overflow-hidden shadow-2xl flex-shrink-0 text-black flex flex-col justify-between p-6 sm:p-8 relative group transition-transform duration-300 hover:scale-[1.02] snap-center ${card.rotation}`}
            >
              {/* Background Photo with Soft Overlay */}
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                style={{ backgroundImage: `url('${card.image}')` }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/20" />
              </div>

              {/* Card Top Tag */}
              <div className="relative z-10 flex justify-between items-center">
                <span
                  className="px-3.5 py-1.5 rounded-full font-mono text-[10px] sm:text-xs font-bold tracking-wider uppercase text-white shadow-md"
                  style={{ backgroundColor: card.accentColor }}
                >
                  {card.tag}
                </span>
                <span className="text-white/70 font-mono text-sm font-bold">
                  0{idx + 1}
                </span>
              </div>

              {/* Card Bottom Content */}
              <div className="relative z-10 text-white">
                <h3 className="font-kensington text-3xl sm:text-4xl uppercase tracking-tight text-white mb-2 leading-none">
                  {card.title}
                </h3>
                <p className="text-xs sm:text-sm text-white/80 font-body leading-relaxed max-w-md line-clamp-3">
                  {card.description}
                </p>

                <div className="mt-4 pt-3 border-t border-white/20 flex items-center justify-between">
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#E5F97A]">
                    EXPLORE PROGRAM
                  </span>
                  <div className="w-8 h-8 rounded-full bg-white text-black flex items-center justify-center group-hover:translate-x-1 transition-transform">
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Minimal Drag / Scroll Indicator */}
      <div className="w-full px-6 sm:px-16 flex items-center justify-between text-xs font-mono text-white/50 z-10">
        <span>← SCROLL TO EXPLORE →</span>
        <span>{horizontalCarousel.cards.length} SIGNATURE EXPERIENCES</span>
      </div>
    </section>
  );
};
