"use client";

import React, { useRef, useState, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { siteContent } from "@/data/siteContent";
import { X } from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export const Hero: React.FC = () => {
  const { hero, newsAndEvents } = siteContent;
  const [isEventsOpen, setIsEventsOpen] = useState(false);

  const containerRef = useRef<HTMLDivElement>(null);
  const bgImageRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLDivElement>(null);
  const underlineRef = useRef<SVGPathElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.fromTo(
        bgImageRef.current,
        { scale: 1.06, opacity: 0 },
        { scale: 1, opacity: 1, duration: 1.2 }
      ).fromTo(
        headlineRef.current,
        { opacity: 0, y: 45 },
        { opacity: 1, y: 0, duration: 0.8 },
        "-=0.6"
      );

      if (underlineRef.current) {
        const len = underlineRef.current.getTotalLength();
        gsap.set(underlineRef.current, { strokeDasharray: len, strokeDashoffset: len });
        tl.to(
          underlineRef.current,
          { strokeDashoffset: 0, duration: 1.1, ease: "power2.out" },
          "-=0.4"
        );
      }

      // Parallax scroll on scrub
      gsap.to(bgImageRef.current, {
        yPercent: 15,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });

      gsap.to(headlineRef.current, {
        yPercent: -15,
        opacity: 0.5,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative w-full h-screen min-h-[640px] flex items-center justify-center overflow-hidden bg-black text-white"
    >
      {/* 1. Full-Bleed Background Photo */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div
          ref={bgImageRef}
          className="w-full h-full bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2070&auto=format&fit=crop')`,
            filter: "brightness(0.68) contrast(1.1)",
          }}
        />
        {/* Balanced Dark Vignette Layer matching Screenshot 1 & 36 */}
        <div className="absolute inset-0 bg-black/45" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-black/40" />
      </div>

      {/* 2. Massive Headline strictly matching Screenshot 1 & 36 */}
      <div
        ref={headlineRef}
        className="relative z-10 text-center px-4 sm:px-8 w-full max-w-7xl mx-auto flex flex-col items-center select-none"
      >
        <h1 className="font-kensington text-[4.5rem] sm:text-[7rem] md:text-[9.5rem] lg:text-[11.5rem] xl:text-[13rem] leading-[0.84] text-white">
          <span className="block">
            WHERE <span className="text-[#d31f3a]">PURPOSE</span>
          </span>
          <span className="block -mt-1 sm:-mt-3">
            AND <span className="text-[#d31f3a]">DISCOVERY.</span>
          </span>
        </h1>

        {/* Hand-Drawn Thin White Underline Stroke */}
        <div className="w-full max-w-xl sm:max-w-2xl md:max-w-3xl mx-auto mt-2 sm:mt-4 overflow-visible">
          <svg
            viewBox="0 0 600 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-4 sm:h-6 text-white"
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

      {/* 3. Fixed Vertical "NEWS & EVENTS" Tab on Right Edge */}
      <aside className="fixed right-0 top-1/2 -translate-y-1/2 z-30 pointer-events-auto">
        <button
          onClick={() => setIsEventsOpen(true)}
          className="group flex items-center gap-2 bg-[#7d1334] hover:bg-[#501031] text-white py-4 px-2.5 shadow-2xl transition-all duration-300 cursor-pointer"
          aria-label="Open News and Events"
        >
          <span className="text-[11px] font-mono font-bold tracking-[0.2em] uppercase [writing-mode:vertical-rl] rotate-180">
            {newsAndEvents.label}
          </span>
        </button>
      </aside>

      {/* Slide-Out News & Events Drawer */}
      {isEventsOpen && (
        <>
          <div
            onClick={() => setIsEventsOpen(false)}
            className="fixed inset-0 bg-black/75 z-50 backdrop-blur-sm transition-opacity"
          />
          <div className="fixed top-0 right-0 bottom-0 w-full max-w-sm bg-[#501031] text-white z-50 p-8 flex flex-col justify-between shadow-2xl overflow-y-auto">
            <div>
              <div className="flex items-center justify-between pb-6 border-b border-white/20">
                <span className="font-kensington text-2xl uppercase tracking-wider">
                  News &amp; Events
                </span>
                <button
                  onClick={() => setIsEventsOpen(false)}
                  className="p-1 hover:text-[#d31f3a] transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="mt-6 p-3.5 rounded-xl bg-black/25 border border-white/10">
                <span className="text-[10px] font-mono uppercase tracking-widest text-[#d31f3a] font-bold">
                  Announcement
                </span>
                <p className="text-xs text-white/90 mt-1 font-medium">
                  {newsAndEvents.alert}
                </p>
              </div>

              <div className="mt-6 space-y-5">
                {newsAndEvents.newsItems.map((item) => (
                  <div key={item.title} className="border-b border-white/10 pb-4">
                    <span className="text-[10px] font-mono uppercase tracking-widest text-white/60">
                      {item.date}
                    </span>
                    <h4 className="font-kensington text-lg uppercase text-white mt-0.5">
                      {item.title}
                    </h4>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-6 border-t border-white/20">
              <a
                href="#calendar"
                onClick={() => setIsEventsOpen(false)}
                className="block text-center border border-white text-white font-mono text-xs uppercase tracking-widest py-3 hover:bg-white hover:text-black transition-colors"
              >
                View Full Calendar →
              </a>
            </div>
          </div>
        </>
      )}
    </section>
  );
};
