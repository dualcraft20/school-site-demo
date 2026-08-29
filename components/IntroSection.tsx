"use client";

import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { siteContent } from "@/data/content";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export const IntroSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLDivElement>(null);
  const underlineRef = useRef<SVGPathElement>(null);
  const leftColRef = useRef<HTMLDivElement>(null);
  const rightColRef = useRef<HTMLDivElement>(null);
  const arrowRef = useRef<SVGPathElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 75%",
          toggleActions: "play none none reverse",
        },
      });

      tl.fromTo(
        headlineRef.current,
        { opacity: 0, y: 35 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" }
      );

      if (underlineRef.current) {
        const len = underlineRef.current.getTotalLength();
        gsap.set(underlineRef.current, { strokeDasharray: len, strokeDashoffset: len });
        tl.to(
          underlineRef.current,
          { strokeDashoffset: 0, duration: 1, ease: "power2.out" },
          "-=0.5"
        );
      }

      tl.fromTo(
        [leftColRef.current, rightColRef.current],
        { opacity: 0, y: 35 },
        { opacity: 1, y: 0, duration: 0.8, stagger: 0.15, ease: "power3.out" },
        "-=0.4"
      );

      if (arrowRef.current) {
        const arrowLen = arrowRef.current.getTotalLength();
        gsap.set(arrowRef.current, { strokeDasharray: arrowLen, strokeDashoffset: arrowLen });
        tl.to(
          arrowRef.current,
          { strokeDashoffset: 0, duration: 0.8, ease: "power2.out" },
          "-=0.3"
        );
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      style={{ backgroundColor: "#f0e9e2", color: "#371336" }}
      className="relative z-20 w-full min-h-screen px-6 sm:px-10 lg:px-14 py-20 sm:py-28 flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Top Small Boxed Emblem matching Screenshot 2 & 3 */}
      <div className="w-12 h-12 rounded-lg border border-[#371336]/30 flex items-center justify-center mb-8 p-1 bg-white/60 shadow-sm">
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

      {/* Repeated Statement in Deep Plum & Crimson matching Screenshot 2 & 3 */}
      <div ref={headlineRef} className="text-center w-full max-w-7xl mx-auto mb-16 sm:mb-20 select-none">
        <h2 className="font-kensington text-[4rem] sm:text-[6.5rem] md:text-[8.5rem] lg:text-[10rem] xl:text-[11.5rem] leading-[0.84] text-[#371336]">
          <span className="block">
            WHERE <span className="text-[#d31f3a]">PURPOSE</span>
          </span>
          <span className="block -mt-1 sm:-mt-3">
            AND <span className="text-[#d31f3a]">DISCOVERY.</span>
          </span>
        </h2>

        {/* Hand-Drawn Underline in Crimson */}
        <div className="w-full max-w-xl sm:max-w-2xl md:max-w-3xl mx-auto mt-2 sm:mt-4 overflow-visible">
          <svg
            viewBox="0 0 600 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-4 sm:h-6 text-[#d31f3a]"
          >
            <path
              ref={underlineRef}
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

      {/* Two-Column Editorial Layout matching Screenshot 3 */}
      <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* Left Column: Heading + Paragraph */}
        <div ref={leftColRef} className="lg:col-span-6 flex flex-col space-y-6 text-left">
          <h3 className="font-body font-extrabold text-3xl sm:text-4xl lg:text-5xl text-[#371336] leading-tight tracking-tight">
            The profound impact of an education that grows with you.
          </h3>
          <p className="text-lg text-[#211f1d]/85 leading-relaxed font-normal">
            {siteContent.hero.description}
          </p>
        </div>

        {/* Right Column: Circular Student Photo + Hand-drawn Arrow & Script Annotation */}
        <div
          ref={rightColRef}
          className="lg:col-span-6 flex justify-center lg:justify-end relative pr-4 lg:pr-12"
        >
          {/* Hand-drawn Annotation + Arrow */}
          <div className="absolute -top-12 right-2 sm:right-10 lg:right-0 flex flex-col items-center z-20">
            <span className="font-script text-3xl sm:text-4xl font-bold text-[#371336] -rotate-6 select-none">
              {siteContent.hero.annotationLabel}
            </span>
            {/* Hand-drawn curved arrow SVG */}
            <svg
              width="54"
              height="54"
              viewBox="0 0 60 60"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="text-[#d31f3a] -mt-1 ml-8 rotate-12"
            >
              <path
                ref={arrowRef}
                d="M10 10 C25 15, 38 28, 42 45 M42 45 L32 40 M42 45 L40 32"
                stroke="currentColor"
                strokeWidth="2.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>

          {/* Circular Photo with Crisp White Border & Soft Elevation Shadow */}
          <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-white shadow-2xl bg-[#985299]/20">
            <img
              src={siteContent.hero.studentPortrait}
              alt="Student Portrait"
              className="w-full h-full object-cover object-center"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
