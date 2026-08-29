"use client";

import React, { useState } from "react";
import { Header } from "@/components/Header";
import { HeroTransition } from "@/components/HeroTransition";
import { ExpandingReflectSequence } from "@/components/ExpandingReflectSequence";
import { HorizontalCarousel } from "@/components/HorizontalCarousel";
import { DivisionsSection } from "@/components/DivisionsSection";
import { FacultySpotlight } from "@/components/FacultySpotlight";
import { LetterMaskStatement } from "@/components/LetterMaskStatement";
import { BentoGrid } from "@/components/BentoGrid";
import { MarqueeBanner } from "@/components/MarqueeBanner";
import { Footer } from "@/components/Footer";
import { NewsDrawer } from "@/components/NewsDrawer";

export default function Home() {
  const [isNewsOpen, setIsNewsOpen] = useState(false);

  return (
    <main className="min-h-screen bg-black text-white selection:bg-crimson selection:text-white">
      {/* 1. Header with MegaMenu overlay */}
      <Header onOpenNews={() => setIsNewsOpen(true)} />

      {/* 2 & 3. Unified Hero → Linen Scroll Transition */}
      <HeroTransition onOpenNews={() => setIsNewsOpen(true)} />

      {/* 4 & 5. Expanding Circle Mask & Tossed Photo Parallax Sequence (PDF Pages 1–11) */}
      <ExpandingReflectSequence />

      {/* 6. Horizontal Scroll Card Carousel */}
      <HorizontalCarousel />

      {/* 8. "What Learning Looks Like Here" — Academic Divisions */}
      <DivisionsSection />

      {/* 9. "Learn From Passionate Educators" — Faculty Spotlight Deck */}
      <FacultySpotlight />

      {/* 10. "Be Confident in Who You Will Become" — Circular Photo-Masked Statement */}
      <LetterMaskStatement />

      {/* 11. Bento-Style Distinction Grid */}
      <BentoGrid />

      {/* 12. Infinite Kinetic Marquee & Admissions CTA Banner */}
      <MarqueeBanner />

      {/* 13. Editorial Jewel-Tone Footer */}
      <Footer />

      {/* Global Sticky Vertical "NEWS & EVENTS" Tab on Right Edge */}
      <aside className="fixed right-0 top-1/2 -translate-y-1/2 z-40 pointer-events-auto">
        <button
          onClick={() => setIsNewsOpen(true)}
          className="group flex items-center gap-2 bg-[#7d1334] hover:bg-[#501031] text-white py-4 px-2.5 rounded-l-lg shadow-2xl transition-all duration-300 hover:pr-3.5 cursor-pointer focus:outline-none focus:ring-2 focus:ring-white/50"
          aria-label="Open News and Events"
        >
          <span className="text-[11px] font-mono font-bold tracking-[0.2em] uppercase [writing-mode:vertical-rl] rotate-180 select-none">
            NEWS &amp; EVENTS
          </span>
        </button>
      </aside>

      {/* Global News & Events Drawer */}
      <NewsDrawer isOpen={isNewsOpen} onClose={() => setIsNewsOpen(false)} />
    </main>
  );
}
