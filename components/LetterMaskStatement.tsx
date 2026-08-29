"use client";

import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { siteContent } from "@/data/content";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export const LetterMaskStatement: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLDivElement>(null);
  const circlePhotoRef = useRef<HTMLDivElement>(null);
  const { letterMask } = siteContent;

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        headlineRef.current,
        { opacity: 0, scale: 0.92, y: 50 },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: headlineRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );

      gsap.fromTo(
        circlePhotoRef.current,
        { scale: 0, rotation: -45 },
        {
          scale: 1,
          rotation: 0,
          duration: 1.2,
          ease: "elastic.out(1, 0.6)",
          scrollTrigger: {
            trigger: headlineRef.current,
            start: "top 75%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative w-full py-32 sm:py-44 px-6 sm:px-12 lg:px-20 overflow-hidden flex items-center justify-center text-center text-white"
      style={{ backgroundColor: "#13375c" }} // Midnight Blue
    >
      {/* Background Dot Grid */}
      <div
        className="absolute inset-0 opacity-15 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(#ffffff 2px, transparent 2px)",
          backgroundSize: "28px 28px",
        }}
      />

      {/* Content Container */}
      <div
        ref={headlineRef}
        className="relative z-10 max-w-6xl mx-auto flex flex-col items-center select-none"
      >
        <span className="text-[11px] sm:text-xs font-mono font-bold tracking-[0.3em] uppercase text-[#E5F97A] mb-4 sm:mb-6">
          {letterMask.eyebrow}
        </span>

        {/* Display Typography with Circular Mask for 'O' in 'WHO' */}
        <h2 className="font-kensington text-[3.4rem] sm:text-[6rem] md:text-[8rem] lg:text-[9.5rem] leading-[0.88] uppercase tracking-tight text-white flex flex-col items-center">
          <span className="block">{letterMask.line1}</span>
          <span className="inline-flex items-center justify-center flex-wrap gap-x-[0.28em] leading-none">
            {/* The single unified word 'WHO' */}
            <span className="inline-flex items-center tracking-tight">
              <span>{letterMask.line2Prefix}</span>
              <span
                ref={circlePhotoRef}
                className="inline-flex items-center justify-center w-[0.72em] h-[0.72em] rounded-full overflow-hidden border-[0.04em] border-[#E5F97A] shadow-2xl bg-black align-middle mx-[0.02em] -mt-[0.06em] transform transition-transform hover:scale-105 flex-shrink-0"
              >
                <img
                  src={letterMask.studentImage}
                  alt="Graduate Portrait"
                  className="w-full h-full object-cover object-center"
                  width={160}
                  height={160}
                  loading="lazy"
                />
              </span>
            </span>
            <span>{letterMask.line2Suffix}</span>
          </span>
          <span className="block text-[#E5F97A]">{letterMask.line3Accent}</span>
        </h2>

        {/* Bottom Supporting Note */}
        <p className="mt-8 sm:mt-12 text-base sm:text-lg lg:text-xl text-white/80 font-body max-w-2xl leading-relaxed">
          {letterMask.paragraph}
        </p>
      </div>
    </section>
  );
};
