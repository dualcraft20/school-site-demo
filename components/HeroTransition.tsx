"use client";

import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { siteContent } from "@/data/content";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface HeroTransitionProps {
  onOpenNews: () => void;
}

export const HeroTransition: React.FC<HeroTransitionProps> = ({ onOpenNews }) => {
  const { hero, newsAndEvents } = siteContent;

  const containerRef = useRef<HTMLDivElement>(null);
  const linenLayerRef = useRef<HTMLDivElement>(null);
  const headlineDarkRef = useRef<HTMLDivElement>(null);
  const headlineLinenRef = useRef<HTMLDivElement>(null);
  const underlineDarkRef = useRef<SVGPathElement>(null);
  const underlineLinenRef = useRef<SVGPathElement>(null);
  const missionRowRef = useRef<HTMLDivElement>(null);
  const emblemRef = useRef<HTMLDivElement>(null);
  const arrowRef = useRef<SVGPathElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1. Initial Page Load Animation
      const loadTl = gsap.timeline({ defaults: { ease: "power3.out" } });

      loadTl.fromTo(
        headlineDarkRef.current,
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 1 }
      );

      if (underlineDarkRef.current) {
        const len = underlineDarkRef.current.getTotalLength();
        gsap.set(underlineDarkRef.current, { strokeDasharray: len, strokeDashoffset: len });
        loadTl.to(
          underlineDarkRef.current,
          { strokeDashoffset: 0, duration: 1.1, ease: "power2.out" },
          "-=0.5"
        );
      }

      // 2. Master Scrubbed Scroll Timeline (Single Headline Split-Color Wipe)
      const scrubTl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "+=180%",
          pin: true,
          scrub: 0.75,
          anticipatePin: 1,
        },
      });

      // Step A (0% -> 50% scroll): Wipe the Linen layer from bottom to top over the identical headline
      scrubTl.fromTo(
        linenLayerRef.current,
        { clipPath: "inset(100% 0% 0% 0%)" },
        { clipPath: "inset(0% 0% 0% 0%)", ease: "none", duration: 1 },
        0
      );

      // Step B (50% -> 100% scroll): Lift headline smoothly and reveal 2-column mission story
      scrubTl
        .to(
          [headlineDarkRef.current, headlineLinenRef.current],
          {
            y: -110,
            scale: 0.92,
            ease: "power2.out",
            duration: 0.8,
          },
          0.6
        )
        .fromTo(
          emblemRef.current,
          { opacity: 0, y: -20 },
          { opacity: 1, y: 0, ease: "power2.out", duration: 0.4 },
          0.65
        )
        .fromTo(
          missionRowRef.current,
          { opacity: 0, y: 35 },
          { opacity: 1, y: 0, ease: "power2.out", duration: 0.7 },
          0.7
        );

      if (arrowRef.current) {
        const arrowLen = arrowRef.current.getTotalLength();
        gsap.set(arrowRef.current, { strokeDasharray: arrowLen, strokeDashoffset: arrowLen });
        scrubTl.to(
          arrowRef.current,
          { strokeDashoffset: 0, ease: "power2.out", duration: 0.4 },
          0.95
        );
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="relative w-full h-screen overflow-hidden bg-black select-none">
      {/* ============================================================ */}
      {/* LAYER 1 (BOTTOM): DARK HERO                                  */}
      {/* ============================================================ */}
      <div className="absolute inset-0 z-10 w-full h-full flex flex-col justify-center items-center bg-black text-white overflow-hidden">
        {/* Background Photo */}
        <div
          className="absolute inset-0 z-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('${hero.bgImage}')`,
            filter: "brightness(0.68) contrast(1.1)",
          }}
        >
          <div className="absolute inset-0 bg-black/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-black/40" />
        </div>

        {/* Central Headline Layer (White + Crimson) */}
        <div
          ref={headlineDarkRef}
          className="relative z-10 text-center px-4 sm:px-8 w-full max-w-7xl mx-auto flex flex-col items-center"
        >
          <h1 className="font-kensington text-[3.2rem] xs:text-[3.8rem] sm:text-[6.8rem] md:text-[9.5rem] lg:text-[11.5rem] xl:text-[13rem] leading-[0.86] text-white">
            <span className="block">
              {hero.titleLine1.prefix} <span className="text-[#d31f3a]">{hero.titleLine1.accent}</span>
            </span>
            <span className="block -mt-1 sm:-mt-3">
              {hero.titleLine2.prefix} <span className="text-[#d31f3a]">{hero.titleLine2.accent}</span>
            </span>
          </h1>

          {/* Thin White Hand-Drawn Underline Stroke */}
          <div className="w-full max-w-xl sm:max-w-2xl md:max-w-3xl mx-auto mt-2 sm:mt-4 overflow-visible">
            <svg
              viewBox="0 0 600 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full h-4 sm:h-6 text-white"
            >
              <path
                ref={underlineDarkRef}
                d="M4 14C120 4 340 3 596 16"
                stroke="currentColor"
                strokeWidth="3.2"
                strokeLinecap="round"
              />
              <path
                d="M40 18C160 10 380 9 550 19"
                stroke="currentColor"
                strokeWidth="1.4"
                strokeLinecap="round"
                strokeOpacity="0.75"
              />
            </svg>
          </div>
        </div>
      </div>

      {/* ============================================================ */}
      {/* LAYER 2 (TOP): LINEN CREAM LAYER WITH EXACT SPLIT-WIPE       */}
      {/* ============================================================ */}
      <div
        ref={linenLayerRef}
        data-theme="light"
        style={{
          backgroundColor: "#f0e9e2",
          color: "#371336",
          clipPath: "inset(100% 0% 0% 0%)",
          WebkitClipPath: "inset(100% 0% 0% 0%)",
        }}
        className="absolute inset-0 z-20 w-full h-full flex flex-col justify-center items-center px-6 sm:px-10 lg:px-14 overflow-hidden select-none"
      >
        {/* Top Emblem (Absolute pinned to top) */}
        <div
          ref={emblemRef}
          style={{ opacity: 0 }}
          className="absolute top-5 sm:top-7 left-1/2 -translate-x-1/2 flex justify-center z-10"
        >
          <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-lg border border-[#371336]/30 flex items-center justify-center p-1 bg-white/60 shadow-sm">
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

        {/* Identically Positioned Headline (Deep Plum + Crimson) */}
        <div
          ref={headlineLinenRef}
          className="relative z-10 text-center px-4 sm:px-8 w-full max-w-7xl mx-auto flex flex-col items-center"
        >
          <h2 className="font-kensington text-[3.2rem] xs:text-[3.8rem] sm:text-[6.8rem] md:text-[9.5rem] lg:text-[11.5rem] xl:text-[13rem] leading-[0.86] text-[#371336]">
            <span className="block">
              {hero.titleLine1.prefix} <span className="text-[#d31f3a]">{hero.titleLine1.accent}</span>
            </span>
            <span className="block -mt-1 sm:-mt-3">
              {hero.titleLine2.prefix} <span className="text-[#d31f3a]">{hero.titleLine2.accent}</span>
            </span>
          </h2>

          {/* Crimson Hand-Drawn Underline */}
          <div className="w-full max-w-xl sm:max-w-2xl md:max-w-3xl mx-auto mt-2 sm:mt-4 overflow-visible">
            <svg
              viewBox="0 0 600 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full h-4 sm:h-6 text-[#d31f3a]"
            >
              <path
                ref={underlineLinenRef}
                d="M4 14C120 4 340 3 596 16"
                stroke="currentColor"
                strokeWidth="3.2"
                strokeLinecap="round"
              />
              <path
                d="M40 18C160 10 380 9 550 19"
                stroke="currentColor"
                strokeWidth="1.4"
                strokeLinecap="round"
                strokeOpacity="0.75"
              />
            </svg>
          </div>
        </div>

        {/* Two-Column Mission Story + Student Circle (Positioned in Bottom Region) */}
        <div
          ref={missionRowRef}
          style={{ opacity: 0 }}
          className="absolute bottom-5 sm:bottom-8 lg:bottom-10 left-0 right-0 max-w-6xl w-full mx-auto px-6 sm:px-10 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-center z-10"
        >
          {/* Left Column: Heading + Paragraph */}
          <div className="lg:col-span-7 flex flex-col space-y-3 text-left">
            <h3 className="font-body font-extrabold text-xl sm:text-2xl lg:text-3xl text-[#371336] leading-tight tracking-tight">
              The profound impact of an education that grows with you.
            </h3>
            <p className="text-xs sm:text-sm lg:text-base text-[#211f1d]/85 leading-relaxed font-normal max-w-2xl">
              {hero.description}
            </p>
          </div>

          {/* Right Column: Student Circle + Handwritten Annotation */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end relative pr-2 lg:pr-6">
            <div className="absolute -top-9 right-2 sm:right-6 lg:right-0 flex flex-col items-center z-20 pointer-events-none">
              <span className="font-script text-2xl sm:text-3xl font-bold text-[#371336] -rotate-6">
                {hero.annotationLabel}
              </span>
              <svg
                width="40"
                height="40"
                viewBox="0 0 600 600"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-10 h-10 text-[#d31f3a] -mt-1 ml-6 rotate-12"
              >
                <path
                  ref={arrowRef}
                  d="M100 100 C250 150, 380 280, 420 450 M420 450 L320 400 M420 450 L400 320"
                  stroke="currentColor"
                  strokeWidth="28"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>

            {/* Circular Photo with White Border & Cyan Backdrop */}
            <div className="relative w-36 h-36 sm:w-48 sm:h-48 lg:w-56 lg:h-56 rounded-full overflow-hidden border-4 border-white shadow-2xl bg-[#45B8D1]">
              <img
                src={hero.studentPortrait}
                alt="Student Portrait"
                className="w-full h-full object-cover object-top"
              />
            </div>
          </div>
        </div>

        {/* Subtle Bottom Dot Grid */}
        <div
          className="absolute bottom-2 left-10 right-10 h-8 opacity-25 pointer-events-none"
          style={{
            backgroundImage: "radial-gradient(#371336 1.5px, transparent 1.5px)",
            backgroundSize: "18px 18px",
          }}
        />
      </div>
    </div>
  );
};
