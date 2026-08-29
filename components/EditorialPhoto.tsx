"use client";

import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { siteContent } from "@/data/siteContent";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export const EditorialPhoto: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const captionRef = useRef<HTMLDivElement>(null);
  const { editorialPhoto } = siteContent;

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Ken Burns zoom scrub on scroll
      gsap.fromTo(
        imageRef.current,
        { scale: 1 },
        {
          scale: 1.15,
          ease: "none",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: 1,
          },
        }
      );

      // Caption fade and float
      gsap.fromTo(
        captionRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 70%",
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
      className="relative w-full h-[70vh] sm:h-[85vh] lg:h-[90vh] overflow-hidden bg-black"
    >
      {/* Background Image with Ken Burns zoom */}
      <div
        ref={imageRef}
        className="absolute inset-0 w-full h-full bg-cover bg-center will-change-transform"
        style={{
          backgroundImage: `url('${editorialPhoto.image}')`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/60" />
      </div>

      {/* Editorial Caption Tag (Bottom Left) */}
      <div
        ref={captionRef}
        className="absolute bottom-8 left-6 sm:bottom-12 sm:left-12 lg:left-16 z-10 max-w-lg"
      >
        <div className="bg-black/60 backdrop-blur-md border border-white/20 rounded-2xl px-6 py-4 text-white shadow-2xl">
          <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#d31f3a] font-bold block mb-1">
            CAMPUS PERSPECTIVE
          </span>
          <h3 className="font-body font-bold text-lg sm:text-xl text-white">
            {editorialPhoto.caption}
          </h3>
          <p className="text-xs text-white/70 font-mono mt-0.5">
            {editorialPhoto.subCaption}
          </p>
        </div>
      </div>
    </section>
  );
};
