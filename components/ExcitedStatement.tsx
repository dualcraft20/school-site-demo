"use client";

import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Galaxy from "./Galaxy";
import { siteContent } from "@/data/content";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export const ExcitedStatement: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const underlineRef = useRef<SVGPathElement>(null);
  const { excitedStatement } = siteContent;

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Text entrance
      gsap.fromTo(
        textRef.current,
        { opacity: 0, scale: 0.94, y: 40 },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: textRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Underline stroke draw
      if (underlineRef.current) {
        const len = underlineRef.current.getTotalLength();
        gsap.set(underlineRef.current, { strokeDasharray: len, strokeDashoffset: len });
        gsap.to(underlineRef.current, {
          strokeDashoffset: 0,
          duration: 1.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: textRef.current,
            start: "top 75%",
            toggleActions: "play none none reverse",
          },
        });
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative w-full min-h-[90vh] sm:min-h-screen py-20 sm:py-28 px-4 sm:px-8 lg:px-12 overflow-hidden flex flex-col justify-center items-center text-center bg-black text-white"
    >
      {/* Interactive WebGL Galaxy Canvas in Deep Space Black */}
      <div className="absolute inset-0 z-0 opacity-100 pointer-events-auto">
        <Galaxy
          transparent={false}
          mouseInteraction={true}
          mouseRepulsion={true}
          repulsionStrength={2.5}
          density={1.2}
          glowIntensity={0.5}
          twinkleIntensity={0.6}
          hueShift={140}
          rotationSpeed={0.08}
          starSpeed={0.5}
          speed={1.0}
        />
      </div>

      {/* Edge-to-Edge Screen-Filling Content Container */}
      <div
        ref={textRef}
        className="relative z-10 w-full max-w-[96vw] mx-auto flex flex-col items-center pointer-events-none"
      >
        <span className="text-[11px] sm:text-xs font-mono font-bold tracking-[0.3em] uppercase text-[#d31f3a] mb-3 sm:mb-4">
          {excitedStatement.eyebrow}
        </span>

        {/* Giant Edge-to-Edge Screen-Stretching Headline */}
        <h2 className="font-kensington text-[13.5vw] sm:text-[14.5vw] lg:text-[15.5vw] leading-[0.82] uppercase tracking-tight text-white drop-shadow-2xl w-full select-none">
          <span className="block w-full">
            {excitedStatement.headlinePrefix} <span className="text-[#d31f3a]">{excitedStatement.accentWord}</span>
          </span>
          <span className="block w-full -mt-2 sm:-mt-5 lg:-mt-7">
            {excitedStatement.headlineSuffix}
          </span>
        </h2>

        {/* Hand-Drawn Crimson Underline Spanning Across the Text Width */}
        <div className="w-full max-w-2xl sm:max-w-4xl lg:max-w-5xl mt-3 sm:mt-5 overflow-visible">
          <svg
            viewBox="0 0 800 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-5 sm:h-7 text-[#d31f3a]"
          >
            <path
              ref={underlineRef}
              d="M6 16C180 5 500 4 794 18"
              stroke="currentColor"
              strokeWidth="3.5"
              strokeLinecap="round"
            />
            <path
              d="M60 22C240 12 560 11 740 23"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeOpacity="0.75"
            />
          </svg>
        </div>

        {/* Supporting Mission Paragraph */}
        <p className="mt-8 sm:mt-10 text-base sm:text-lg lg:text-2xl text-white/85 font-body font-normal leading-relaxed max-w-4xl drop-shadow-md">
          {excitedStatement.paragraph}
        </p>
      </div>
    </section>
  );
};
