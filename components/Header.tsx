"use client";

import React, { useState } from "react";
import { Search } from "lucide-react";
import { MegaMenu } from "./MegaMenu";
import { siteContent } from "@/data/siteContent";

interface HeaderProps {
  onOpenNews?: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenNews }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { school } = siteContent;

  return (
    <>
      <header
        className={`absolute top-0 left-0 right-0 z-40 px-6 sm:px-10 lg:px-14 py-7 flex items-center justify-between transition-opacity duration-200 pointer-events-auto ${
          isMenuOpen ? "opacity-0 pointer-events-none" : "opacity-100"
        }`}
      >
        {/* Left: School Crest Seal & Wordmark */}
        <a href="#" className="flex items-center gap-3 text-white group focus:outline-none">
          <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full border border-white/40 flex items-center justify-center p-1 group-hover:border-white transition-colors">
            <svg
              viewBox="0 0 100 100"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              className="w-full h-full text-white"
            >
              <circle cx="50" cy="50" r="46" stroke="currentColor" strokeWidth="2" strokeDasharray="3 3" />
              <circle cx="50" cy="50" r="40" stroke="currentColor" strokeWidth="2" />
              <path d="M50 22 L50 78 M28 36 C38 30 62 30 72 36 M28 50 C38 44 62 44 72 50 M28 64 C38 58 62 58 72 64" />
              <circle cx="50" cy="50" r="10" fill="currentColor" fillOpacity="0.1" />
            </svg>
          </div>

          <div className="flex flex-col leading-none">
            <span className="text-[9px] uppercase font-serif tracking-widest text-white/70 italic mb-0.5">
              the
            </span>
            <span className="font-serif text-xl sm:text-2xl font-bold tracking-tight text-white">
              {school.wordmark} <span className="font-light">School</span>
            </span>
          </div>
        </a>

        {/* Right: Login Pill + Search Icon + Circular Berry Menu Button */}
        <div className="flex items-center gap-3 sm:gap-6">
          <a
            href="#login"
            className="hidden sm:flex items-center gap-2 px-5 py-2 rounded-full border border-white text-white text-xs font-mono font-medium tracking-wider uppercase hover:bg-white hover:text-black transition-all duration-200"
          >
            <span>LOGIN</span>
            <span className="text-sm">→</span>
          </a>

          <button
            onClick={() => setIsMenuOpen(true)}
            aria-label="Search site"
            className="text-white hover:text-white/80 transition-colors p-1 cursor-pointer"
          >
            <Search className="w-5 h-5" />
          </button>

          {/* Solid Circular Berry Menu Button */}
          <button
            onClick={() => setIsMenuOpen(true)}
            className="w-12 h-12 rounded-full bg-[#7d1334] hover:bg-[#501031] text-white font-mono text-xs font-bold tracking-wider flex items-center justify-center transition-transform hover:scale-105 active:scale-95 shadow-lg cursor-pointer"
            aria-label="Open navigation menu"
          >
            MENU
          </button>
        </div>
      </header>

      {/* Fullscreen MegaMenu Overlay (Screenshot 3) */}
      <MegaMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </>
  );
};
