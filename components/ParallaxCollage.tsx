"use client";

import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { siteContent } from "@/data/siteContent";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export const ParallaxCollage: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const doodlesRef = useRef<(SVGElement | null)[]>([]);
  const { parallaxCollage } = siteContent;

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Headline entrance
      gsap.fromTo(
        headlineRef.current,
        { opacity: 0, y: 50, scale: 0.95 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: headlineRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Staggered parallax cards entrance
      cardsRef.current.forEach((card, idx) => {
        if (!card) return;
        const yOffset = (idx % 2 === 0 ? 80 : 120) * (idx + 1) * 0.4;
        gsap.fromTo(
          card,
          { opacity: 0, y: yOffset, scale: 0.88 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.9,
            ease: "back.out(1.4)",
            scrollTrigger: {
              trigger: card,
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
          }
        );
      });

      // Floating doodles parallax drift
      doodlesRef.current.forEach((doodle, idx) => {
        if (!doodle) return;
        gsap.fromTo(
          doodle,
          { opacity: 0, rotation: idx % 2 === 0 ? -15 : 15, scale: 0.8 },
          {
            opacity: 0.85,
            rotation: 0,
            scale: 1,
            duration: 1.2,
            ease: "elastic.out(1, 0.5)",
            scrollTrigger: {
              trigger: containerRef.current,
              start: "top 70%",
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
      className="relative w-full min-h-screen py-24 sm:py-32 px-6 sm:px-10 lg:px-16 overflow-hidden text-white flex flex-col justify-between"
      style={{ backgroundColor: "#1c6043" }} // Forest Green
    >
      {/* Background Dot Texture */}
      <div
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(#ffffff 2px, transparent 2px)",
          backgroundSize: "24px 24px",
        }}
      />

      {/* Floating Hand-Drawn SVG Doodles */}
      {/* Doodle 1: Spark Star (Top Left) */}
      <svg
        ref={(el) => { doodlesRef.current[0] = el; }}
        className="absolute top-12 left-10 sm:left-24 w-16 h-16 text-[#FDE047] pointer-events-none z-10"
        viewBox="0 0 100 100"
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
      >
        <path d="M50 10 L50 90 M10 50 L90 50 M22 22 L78 78 M22 78 L78 22" />
        <circle cx="50" cy="50" r="8" fill="currentColor" fillOpacity="0.2" />
      </svg>

      {/* Doodle 2: Compass / Sunburst (Top Right) */}
      <svg
        ref={(el) => { doodlesRef.current[1] = el; }}
        className="absolute top-16 right-8 sm:right-28 w-20 h-20 text-white/60 pointer-events-none z-10"
        viewBox="0 0 100 100"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
      >
        <circle cx="50" cy="50" r="36" strokeDasharray="6 4" />
        <path d="M50 20 L50 80 M20 50 L80 50" />
        <circle cx="50" cy="50" r="4" fill="currentColor" />
      </svg>

      {/* Doodle 3: Tennessee Foothill Outline (Bottom Center) */}
      <svg
        ref={(el) => { doodlesRef.current[2] = el; }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 w-72 sm:w-96 h-20 text-white/30 pointer-events-none z-0"
        viewBox="0 0 400 80"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      >
        <path d="M0 60 Q 80 10, 160 50 T 320 20 T 400 70" />
      </svg>

      {/* Central Big Headline Stack */}
      <div
        ref={headlineRef}
        className="relative z-10 max-w-5xl mx-auto text-center my-8 sm:my-12"
      >
        <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-xs font-mono font-bold tracking-[0.2em] uppercase text-white mb-6">
          OUR CORE IDENTITY
        </span>

        <h2 className="font-kensington text-[3.2rem] sm:text-[5.5rem] md:text-[7rem] lg:text-[8rem] leading-[0.88] tracking-tight uppercase text-white">
          <span className="block">{parallaxCollage.titleLine1}</span>
          <span className="block text-[#FDE047]">{parallaxCollage.titleLine2}</span>
          <span className="block">{parallaxCollage.titleLine3}</span>
        </h2>
      </div>

      {/* Tossed Photo Cards Collage Grid */}
      <div className="relative z-10 max-w-6xl mx-auto w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 pt-8 pb-12 items-center">
        {parallaxCollage.cards.map((card, idx) => (
          <div
            key={card.id}
            ref={(el) => { cardsRef.current[idx] = el; }}
            className={`group bg-white rounded-3xl p-3 sm:p-4 shadow-2xl text-black transition-transform duration-300 hover:scale-105 hover:rotate-0 will-change-transform ${card.rotation}`}
          >
            {/* Card Image */}
            <div className="relative h-60 sm:h-64 rounded-2xl overflow-hidden bg-gray-100">
              <img
                src={card.image}
                alt={card.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <span className="absolute top-3 left-3 px-3 py-1 rounded-full bg-black/75 backdrop-blur-sm text-[10px] font-mono font-bold uppercase tracking-wider text-white">
                {card.tag}
              </span>
            </div>

            {/* Card Label */}
            <div className="pt-4 pb-2 px-1">
              <h4 className="font-body font-extrabold text-base text-[#211f1d] leading-snug">
                {card.title}
              </h4>
              <p className="text-xs text-gray-500 font-mono mt-1 font-medium">
                {card.subtitle}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
