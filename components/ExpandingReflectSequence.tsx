"use client";

import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { siteContent } from "@/data/content";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export const ExpandingReflectSequence: React.FC = () => {
  const { reflectSequence } = siteContent;
  const containerRef = useRef<HTMLDivElement>(null);
  const stagePhotoRef = useRef<HTMLDivElement>(null);
  const purpleLayerRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLDivElement>(null);

  // Doodle refs
  const globeDoodleRef = useRef<SVGSVGElement>(null);
  const statueDoodleRef = useRef<SVGSVGElement>(null);
  const archDoodleRef = useRef<SVGSVGElement>(null);
  const treeDoodleRef = useRef<SVGSVGElement>(null);

  // Photo card refs
  const card1Ref = useRef<HTMLDivElement>(null);
  const card2Ref = useRef<HTMLDivElement>(null);
  const card3Ref = useRef<HTMLDivElement>(null);
  const card4Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Extended Scrubbed Timeline for smooth one-by-one presentation
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "+=500%",
          pin: true,
          scrub: 0.75,
          anticipatePin: 1,
        },
      });

      // -------------------------------------------------------------
      // 1. Initial State: Expand Purple Circle over Stage Photo (Pages 1 -> 3)
      // -------------------------------------------------------------
      tl.fromTo(
        purpleLayerRef.current,
        { clipPath: "circle(0% at 50% 50%)" },
        { clipPath: "circle(150% at 50% 50%)", ease: "power2.inOut", duration: 1.2 }
      )
        .fromTo(
          headlineRef.current,
          { opacity: 0, scale: 0.9 },
          { opacity: 1, scale: 1, ease: "power2.out", duration: 0.8 },
          "-=0.6"
        );

      // Helper function to animate an element in, hold, then out (ONE AT A TIME)
      const animateOneByOne = (
        target: gsap.DOMTarget,
        enterVars: gsap.TweenVars,
        exitVars: gsap.TweenVars
      ) => {
        tl.fromTo(
          target,
          { opacity: 0, ...enterVars },
          { opacity: 1, x: 0, y: 0, scale: 1, duration: 0.5, ease: "power2.out" }
        )
          .to(target, { opacity: 1, duration: 0.4 }) // Hold period
          .to(target, { opacity: 0, ...exitVars, duration: 0.4, ease: "power2.in" });
      };

      // -------------------------------------------------------------
      // 2. ONE-BY-ONE SEQUENTIAL PRESENTATION (Pages 4 through 11)
      // -------------------------------------------------------------

      // Step 1 (Page 4): Globe Doodle (bottom-right)
      if (globeDoodleRef.current) {
        animateOneByOne(
          globeDoodleRef.current,
          { scale: 0.4, rotation: -20 },
          { scale: 0.4, rotation: 20 }
        );
      }

      // Step 2 (Page 5): Card 1 - Skyline (top-right)
      if (card1Ref.current) {
        animateOneByOne(
          card1Ref.current,
          { scale: 0.6, x: 80, y: -50, rotation: 15 },
          { scale: 0.6, x: 60, y: -40, opacity: 0 }
        );
      }

      // Step 3 (Page 6): Statue / Torch Doodle (top-left)
      if (statueDoodleRef.current) {
        animateOneByOne(
          statueDoodleRef.current,
          { scale: 0.4, rotation: 15 },
          { scale: 0.4, rotation: -15 }
        );
      }

      // Step 4 (Page 7): Card 2 - Historic Bridge (bottom-left)
      if (card2Ref.current) {
        animateOneByOne(
          card2Ref.current,
          { scale: 0.6, x: -80, y: 50, rotation: -15 },
          { scale: 0.6, x: -60, y: 40, opacity: 0 }
        );
      }

      // Step 5 (Page 8): Arch Doodle (bottom-right)
      if (archDoodleRef.current) {
        animateOneByOne(
          archDoodleRef.current,
          { scale: 0.4, rotation: -10 },
          { scale: 0.4, rotation: 15 }
        );
      }

      // Step 6 (Page 9): Card 3 - Neighborhood Brownstones (top-right)
      if (card3Ref.current) {
        animateOneByOne(
          card3Ref.current,
          { scale: 0.6, x: 80, y: -40, rotation: 12 },
          { scale: 0.6, x: 60, y: -30, opacity: 0 }
        );
      }

      // Step 7 (Page 10): Tree Bouquet Doodle (top-left)
      if (treeDoodleRef.current) {
        animateOneByOne(
          treeDoodleRef.current,
          { scale: 0.4, rotation: -15 },
          { scale: 0.4, rotation: 20 }
        );
      }

      // Step 8 (Page 11): Card 4 - Campus Avenue (left)
      if (card4Ref.current) {
        tl.fromTo(
          card4Ref.current,
          { opacity: 0, scale: 0.6, x: -80, y: 20, rotation: -12 },
          { opacity: 1, scale: 1, x: 0, y: 0, duration: 0.5, ease: "power2.out" }
        ).to(card4Ref.current, { opacity: 1, duration: 0.5 });
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="relative w-full h-screen overflow-hidden bg-black select-none">
      {/* ============================================================ */}
      {/* 1. STAGE / THEATRE / COMMUNITY FULL-BLEED PHOTO (Page 1)     */}
      {/* ============================================================ */}
      <div
        ref={stagePhotoRef}
        className="absolute inset-0 w-full h-full bg-cover bg-center"
        style={{
          backgroundImage: `url('${reflectSequence.bgImage}')`,
        }}
      >
        <div className="absolute inset-0 bg-black/35" />
      </div>

      {/* ============================================================ */}
      {/* 2. EXPANDING PURPLE LAYER & SEQUENTIAL POP-OUTS (Pages 2-11) */}
      {/* ============================================================ */}
      <div
        ref={purpleLayerRef}
        style={{
          backgroundColor: "#8D4685",
          clipPath: "circle(0% at 50% 50%)",
          WebkitClipPath: "circle(0% at 50% 50%)",
        }} // Signature Reference Purple
        className="absolute inset-0 w-full h-full flex items-center justify-center overflow-hidden z-20"
      >
        {/* Central Headline */}
        <div
          ref={headlineRef}
          className="relative z-10 max-w-5xl mx-auto text-center px-4 flex flex-col items-center pointer-events-none"
        >
          {/* Eyebrow Label */}
          <span className="text-[11px] sm:text-xs font-mono font-bold tracking-[0.25em] uppercase text-[#211F1D] mb-4 sm:mb-6">
            {reflectSequence.eyebrow}
          </span>

          {/* 3-Line Big Display Stack */}
          <h2 className="font-kensington text-[3.8rem] sm:text-[6.5rem] md:text-[8.5rem] lg:text-[10rem] xl:text-[11rem] leading-[0.84] tracking-tight uppercase text-[#211F1D]">
            <span className="block">{reflectSequence.titleLine1}</span>
            <span className="block">{reflectSequence.titleLine2}</span>
            <span className="block">{reflectSequence.titleLine3}</span>
          </h2>
        </div>

        {/* ============================================================ */}
        {/* YELLOW DOODLES (Shown ONE AT A TIME)                         */}
        {/* ============================================================ */}

        {/* Doodle 1: Globe at bottom-right (Page 4) */}
        <svg
          ref={globeDoodleRef}
          className="absolute bottom-16 right-10 sm:bottom-24 sm:right-28 lg:right-44 w-28 h-28 sm:w-36 sm:h-36 text-[#FDE047] pointer-events-none z-20 opacity-0"
          viewBox="0 0 100 100"
          fill="none"
          stroke="currentColor"
          strokeWidth="3.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="50" cy="50" r="42" strokeWidth="3.5" />
          <path d="M22 28 Q36 22, 48 30 T60 48 T80 40" />
          <path d="M24 72 Q38 58, 52 74 T82 66" />
          <path d="M42 12 Q36 30, 48 48 T40 88" />
        </svg>

        {/* Doodle 2: Landmark / Statue Torch at top-left (Page 6) */}
        <svg
          ref={statueDoodleRef}
          className="absolute top-14 left-8 sm:top-20 sm:left-24 lg:left-36 w-24 h-24 sm:w-32 sm:h-32 text-[#FDE047] pointer-events-none z-20 opacity-0"
          viewBox="0 0 100 100"
          fill="none"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M45 20 L50 8 L55 20 Z" fill="#FDE047" fillOpacity="0.3" />
          <path d="M48 20 L48 40 M52 20 L52 40 M42 40 L58 40 L54 60 L46 60 Z" />
          <path d="M36 50 Q28 65, 34 85 L66 85 Q72 65, 64 50" />
          <path d="M30 35 L42 42 M70 35 L58 42" />
        </svg>

        {/* Doodle 3: Historic Arch at bottom-right (Page 8) */}
        <svg
          ref={archDoodleRef}
          className="absolute bottom-10 right-8 sm:bottom-16 sm:right-20 lg:right-32 w-28 h-28 sm:w-36 sm:h-36 text-[#FDE047] pointer-events-none z-20 opacity-0"
          viewBox="0 0 100 100"
          fill="none"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect x="18" y="25" width="64" height="60" rx="4" />
          <path d="M34 85 L34 50 Q50 35, 66 50 L66 85" />
          <line x1="18" y1="38" x2="82" y2="38" />
          <line x1="26" y1="25" x2="26" y2="38" />
          <line x1="74" y1="25" x2="74" y2="38" />
          <path d="M40 20 L60 20 L55 25 L45 25 Z" />
        </svg>

        {/* Doodle 4: Tree Bouquet at top-left (Page 10) */}
        <svg
          ref={treeDoodleRef}
          className="absolute top-12 left-6 sm:top-16 sm:left-20 lg:left-32 w-28 h-28 sm:w-36 sm:h-36 text-[#FDE047] pointer-events-none z-20 opacity-0"
          viewBox="0 0 100 100"
          fill="none"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M50 85 L50 55 M42 70 L50 62 L58 70" />
          <ellipse cx="50" cy="35" rx="12" ry="18" />
          <ellipse cx="30" cy="45" rx="14" ry="12" />
          <ellipse cx="70" cy="45" rx="14" ry="12" />
          <ellipse cx="38" cy="25" rx="10" ry="14" />
          <ellipse cx="62" cy="25" rx="10" ry="14" />
        </svg>

        {/* ============================================================ */}
        {/* TOSSED PHOTO CARDS (Shown ONE AT A TIME)                     */}
        {/* ============================================================ */}

        {/* Card 1: City Skyline (Top-Right, Page 5) */}
        <div
          ref={card1Ref}
          className="absolute top-12 right-6 sm:top-20 sm:right-16 lg:right-28 w-48 sm:w-68 md:w-84 rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-white z-20 opacity-0 rotate-6"
        >
          <img
            src={reflectSequence.cards.card1.image}
            alt={reflectSequence.cards.card1.title}
            className="w-full h-32 sm:h-44 md:h-52 object-cover"
          />
        </div>

        {/* Card 2: Historic Bridge / Arch (Bottom-Left, Page 7) */}
        <div
          ref={card2Ref}
          className="absolute bottom-12 left-6 sm:bottom-20 sm:left-14 lg:left-24 w-48 sm:w-64 md:w-76 rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-white z-20 opacity-0 -rotate-6"
        >
          <img
            src={reflectSequence.cards.card2.image}
            alt={reflectSequence.cards.card2.title}
            className="w-full h-36 sm:h-48 md:h-60 object-cover"
          />
        </div>

        {/* Card 3: Neighborhood Brownstones / Blossoms (Top-Right, Page 9) */}
        <div
          ref={card3Ref}
          className="absolute top-16 right-8 sm:top-24 sm:right-20 lg:right-36 w-48 sm:w-68 md:w-84 rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-white z-20 opacity-0 rotate-4"
        >
          <img
            src={reflectSequence.cards.card3.image}
            alt={reflectSequence.cards.card3.title}
            className="w-full h-32 sm:h-44 md:h-52 object-cover"
          />
        </div>

        {/* Card 4: Tree-Lined Campus Street (Left, Page 11) */}
        <div
          ref={card4Ref}
          className="absolute top-1/3 left-6 sm:left-16 lg:left-24 -translate-y-1/2 w-48 sm:w-64 md:w-76 rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-white z-20 opacity-0 -rotate-3"
        >
          <img
            src={reflectSequence.cards.card4.image}
            alt={reflectSequence.cards.card4.title}
            className="w-full h-44 sm:h-60 md:h-72 object-cover"
          />
        </div>
      </div>
    </div>
  );
};
