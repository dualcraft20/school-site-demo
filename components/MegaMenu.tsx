"use client";

import React, { useState, useEffect } from "react";
import { Search, Heart, ChevronDown } from "lucide-react";
import { siteContent } from "@/data/content";

interface MegaMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MegaMenu: React.FC<MegaMenuProps> = ({ isOpen, onClose }) => {
  const { menuCategories, topBarLinks } = siteContent.navigation;
  const { domain } = siteContent.school;
  const [activeIdx, setActiveIdx] = useState<number>(0);
  const activeItem = menuCategories[activeIdx] || menuCategories[0];

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  return (
    <div
      className={`fixed inset-0 z-50 bg-[#6E1332] text-white flex flex-col justify-between overflow-hidden transition-all duration-300 ease-in-out ${
        isOpen
          ? "opacity-100 pointer-events-auto scale-100"
          : "opacity-0 pointer-events-none scale-[0.99]"
      }`}
    >
      {/* Top Header Row inside MegaMenu */}
      <div className="w-full px-6 sm:px-10 lg:px-14 py-6 flex items-center justify-end z-20">
        <div className="flex items-center gap-6 sm:gap-8">
          <div className="hidden md:flex items-center gap-7 text-xs font-mono font-bold tracking-wider uppercase text-white">
            <a href="#family" onClick={onClose} className="hover:text-white/80 flex items-center gap-1.5">
              <span>{topBarLinks.familyPortal}</span>
              <ChevronDown className="w-3.5 h-3.5" />
            </a>
            <a href="#community" onClick={onClose} className="hover:text-white/80 flex items-center gap-1.5">
              <span>{topBarLinks.community}</span>
              <ChevronDown className="w-3.5 h-3.5" />
            </a>
            <a href="#give" onClick={onClose} className="hover:text-white/80 flex items-center gap-1.5">
              <Heart className="w-3.5 h-3.5 fill-white text-white" />
              <span>{topBarLinks.give}</span>
            </a>
          </div>

          <button aria-label="Search" className="text-white hover:text-white/80 transition-colors p-1 cursor-pointer">
            <Search className="w-5 h-5" />
          </button>

          {/* Circular Lime Green CLOSE Button */}
          <button
            onClick={onClose}
            className="w-12 h-12 rounded-full bg-[#E5F97A] hover:bg-[#D4E866] text-[#000000] font-mono text-xs font-black tracking-wider flex items-center justify-center transition-transform hover:scale-105 active:scale-95 shadow-md cursor-pointer"
            aria-label="Close navigation"
          >
            CLOSE
          </button>
        </div>
      </div>

      {/* Main Content Layout: Left Curved Photo + Right Big Menu */}
      <div className="flex-1 w-full grid grid-cols-1 lg:grid-cols-12 overflow-hidden relative">
        {/* Left Column: Photo with Curved Crescent Mask & Glitter Pink Edge */}
        <div className="hidden lg:block lg:col-span-5 relative h-full overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center transition-all duration-500"
            style={{
              backgroundImage: `url('${activeItem.image}')`,
              clipPath: "ellipse(95% 85% at 5% 50%)",
            }}
          />

          {/* Glitter Rose Crescent Border Overlay */}
          <div
            className="absolute top-0 bottom-0 right-0 w-16 pointer-events-none"
            style={{
              background: "linear-gradient(to right, transparent, rgba(226, 141, 166, 0.4), #6E1332)",
            }}
          />
        </div>

        {/* Right Column: Menu Items & Submenu */}
        <div className="lg:col-span-7 flex flex-col justify-center px-6 sm:px-12 lg:px-16 py-6 sm:py-8 relative overflow-y-auto max-h-[calc(100vh-130px)]">
          {/* Dot Grid Background at bottom right */}
          <div
            className="absolute bottom-6 right-12 w-80 h-32 opacity-20 pointer-events-none"
            style={{
              backgroundImage: "radial-gradient(#ffffff 1.5px, transparent 1.5px)",
              backgroundSize: "16px 16px",
            }}
          />

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center relative z-10">
            {/* Primary Menu Categories */}
            <nav className="md:col-span-7 flex flex-col space-y-3 sm:space-y-4">
              {menuCategories.map((item, idx) => {
                const isActive = idx === activeIdx;
                return (
                  <button
                    key={item.id}
                    onMouseEnter={() => setActiveIdx(idx)}
                    onClick={() => setActiveIdx(idx)}
                    className="group text-left flex items-center justify-between cursor-pointer py-0.5 focus:outline-none"
                  >
                    <span
                      className={`font-kensington text-4xl sm:text-5xl lg:text-[4rem] tracking-tight uppercase transition-colors duration-150 ${
                        isActive
                          ? "text-white"
                          : "text-white/60 group-hover:text-white/90"
                      }`}
                    >
                      {item.title}
                    </span>
                    {isActive && (
                      <span className="text-[#E5F97A] text-2xl sm:text-3xl ml-3 font-bold">
                        ≫
                      </span>
                    )}
                  </button>
                );
              })}
            </nav>

            {/* Submenu Links on Right */}
            <div className="md:col-span-5 pl-2 md:pl-6">
              <div className="flex flex-col space-y-3">
                {activeItem.subItems.map((sub) => (
                  <a
                    key={sub}
                    href="#"
                    onClick={onClose}
                    className="text-base text-white/90 hover:text-[#E5F97A] font-medium tracking-wide transition-colors duration-150"
                  >
                    {sub}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom minimal URL indicator */}
      <div className="w-full px-6 sm:px-14 py-3 text-[11px] font-mono text-white/40 z-20">
        {domain}/{activeItem.id}
      </div>
    </div>
  );
};
