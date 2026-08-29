"use client";

import React, { useEffect } from "react";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { siteContent } from "@/data/content";

interface NewsDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export const NewsDrawer: React.FC<NewsDrawerProps> = ({ isOpen, onClose }) => {
  const { newsHeading, eventsHeading, newsItems, events } = siteContent.newsAndEvents;

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
      className={`fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex justify-end transition-opacity duration-300 ${
        isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
      }`}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        className={`w-full max-w-5xl bg-[#6E1332] text-white h-full p-8 sm:p-12 overflow-y-auto flex flex-col justify-between relative transform transition-transform duration-350 ease-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Top Right Close Button */}
        <div className="flex justify-end mb-6">
          <button
            onClick={onClose}
            className="w-12 h-12 rounded-full bg-[#E5F97A] hover:bg-[#D4E866] text-black font-mono text-xs font-black tracking-wider flex items-center justify-center transition-transform hover:scale-105 active:scale-95 shadow-md cursor-pointer"
            aria-label="Close News and Events"
          >
            CLOSE
          </button>
        </div>

        {/* Two-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 flex-1 items-start">
          {/* Left Column: Latest News & Cards */}
          <div className="lg:col-span-7 flex flex-col space-y-6">
            {/* Header with Yellow Doodle */}
            <div className="flex items-center gap-3">
              <svg
                width="36"
                height="36"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="text-[#FDE047]"
              >
                <path
                  d="M6 10 C6 6, 34 6, 34 16 C34 26, 18 28, 12 34 L12 28 C8 28, 6 24, 6 20 Z"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <circle cx="15" cy="17" r="1.5" fill="currentColor" />
                <circle cx="20" cy="17" r="1.5" fill="currentColor" />
                <circle cx="25" cy="17" r="1.5" fill="currentColor" />
              </svg>
              <h3 className="font-kensington text-2xl sm:text-3xl uppercase tracking-tight text-white">
                {newsHeading} <span className="font-light text-white/50">|</span> STORIES
              </h3>
            </div>

            {/* News Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {newsItems.map((item, idx) => (
                <div key={idx} className="bg-white rounded-3xl overflow-hidden shadow-xl text-black flex flex-col justify-between">
                  <div className="h-44 overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-5 flex flex-col justify-between flex-1">
                    <div>
                      <h4 className="font-body font-bold text-sm leading-snug text-[#211f1d]">
                        {item.title}
                      </h4>
                      <span className="text-[11px] font-mono uppercase text-gray-500 block mt-3 font-semibold">
                        {item.date}
                      </span>
                    </div>
                    <div className="flex justify-end mt-4">
                      <div className="w-8 h-8 rounded-full bg-[#d31f3a] text-white flex items-center justify-center">
                        <ArrowRight className="w-4 h-4" />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom Pagination & Action Pills */}
            <div className="flex flex-wrap items-center gap-3 pt-4">
              <button className="w-10 h-10 rounded-full border border-white/40 flex items-center justify-center hover:bg-white/10 text-white cursor-pointer">
                <ArrowLeft className="w-4 h-4" />
              </button>
              <button className="w-10 h-10 rounded-full border border-white/40 flex items-center justify-center hover:bg-white/10 text-white cursor-pointer">
                <ArrowRight className="w-4 h-4" />
              </button>
              <a
                href="#news"
                onClick={onClose}
                className="px-5 py-2 rounded-full border border-white text-white text-xs font-mono font-bold uppercase tracking-wider hover:bg-white hover:text-black transition-colors"
              >
                ALL NEWS →
              </a>
              <a
                href="#publications"
                onClick={onClose}
                className="px-5 py-2 rounded-full border border-white text-white text-xs font-mono font-bold uppercase tracking-wider hover:bg-white hover:text-black transition-colors"
              >
                PUBLICATIONS →
              </a>
            </div>
          </div>

          {/* Right Column: Upcoming Events List */}
          <div className="lg:col-span-5 flex flex-col space-y-6 lg:border-l border-white/10 lg:pl-10">
            <h3 className="font-kensington text-2xl sm:text-3xl uppercase tracking-tight text-white">
              {eventsHeading}
            </h3>

            <div className="space-y-6 pt-2">
              {events.map((evt, idx) => (
                <div key={idx} className="flex items-start gap-4 pb-4 border-b border-white/15">
                  <div className="w-14 h-14 rounded-full bg-[#d31f3a] text-white flex flex-col items-center justify-center flex-shrink-0 leading-none">
                    <span className="text-[9px] font-mono uppercase tracking-wider font-bold">{evt.month}</span>
                    <span className="font-kensington text-xl mt-0.5">{evt.day}</span>
                  </div>
                  <div>
                    <h4 className="font-body font-bold text-base text-white">
                      {evt.title}
                    </h4>
                    <span className="text-xs text-white/60 block mt-1 font-mono uppercase">
                      🕒 {evt.time}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom Event Action Pills */}
            <div className="flex items-center gap-3 pt-4">
              <button className="w-10 h-10 rounded-full border border-white/40 flex items-center justify-center hover:bg-white/10 text-white cursor-pointer">
                <ArrowLeft className="w-4 h-4" />
              </button>
              <button className="w-10 h-10 rounded-full border border-white/40 flex items-center justify-center hover:bg-white/10 text-white cursor-pointer">
                <ArrowRight className="w-4 h-4" />
              </button>
              <a
                href="#calendar"
                onClick={onClose}
                className="px-5 py-2 rounded-full border border-white text-white text-xs font-mono font-bold uppercase tracking-wider hover:bg-white hover:text-black transition-colors"
              >
                FULL CALENDAR →
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
