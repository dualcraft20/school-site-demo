"use client";

import React from "react";
import { ArrowUp, Instagram, Facebook, Youtube, Linkedin } from "lucide-react";
import { siteContent } from "@/data/content";

export const Footer: React.FC = () => {
  const { school, navigation, footer } = siteContent;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="w-full bg-[#501031] text-white pt-20 pb-12 px-6 sm:px-12 lg:px-16 border-t border-white/10 select-none">
      {/* Top Footer Section */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-white/15">
        {/* Left Column: School Identity & Address */}
        <div className="md:col-span-5 flex flex-col justify-between">
          <div>
            {/* School Crest Seal & Wordmark */}
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full border border-white/40 flex items-center justify-center p-1">
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
                </svg>
              </div>

              <div className="flex flex-col leading-none">
                <span className="text-[9px] uppercase font-serif tracking-widest text-white/70 italic mb-0.5">
                  the
                </span>
                <span className="font-serif text-2xl font-bold tracking-tight text-white">
                  {school.wordmark} <span className="font-light">School</span>
                </span>
              </div>
            </div>

            <p className="text-sm text-white/80 font-body max-w-sm leading-relaxed">
              {footer.description}
            </p>

            <div className="mt-6 space-y-1 text-xs font-mono text-white/70">
              <p>{school.address.street}</p>
              <p>{school.address.city}, {school.address.state} {school.address.zip}</p>
              <p className="text-white pt-2 font-bold">{school.phone}</p>
              <p className="text-[#E5F97A]">{school.email}</p>
            </div>
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-4 mt-8">
            <a href="#instagram" className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#d31f3a] flex items-center justify-center transition-colors">
              <Instagram className="w-4 h-4" />
            </a>
            <a href="#facebook" className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#d31f3a] flex items-center justify-center transition-colors">
              <Facebook className="w-4 h-4" />
            </a>
            <a href="#youtube" className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#d31f3a] flex items-center justify-center transition-colors">
              <Youtube className="w-4 h-4" />
            </a>
            <a href="#linkedin" className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#d31f3a] flex items-center justify-center transition-colors">
              <Linkedin className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Middle Column: Academic & Campus Links */}
        <div className="md:col-span-4 grid grid-cols-2 gap-6">
          <div>
            <h4 className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-[#E5F97A] mb-4">
              DIVISIONS
            </h4>
            <ul className="space-y-2.5 text-sm font-medium text-white/80">
              {navigation.footerDivisions.map((link, idx) => (
                <li key={idx}>
                  <a href={link.href} className="hover:text-white transition-colors">
                    {link.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-[#E5F97A] mb-4">
              COMMUNITY
            </h4>
            <ul className="space-y-2.5 text-sm font-medium text-white/80">
              {navigation.footerCommunity.map((link, idx) => (
                <li key={idx}>
                  <a href={link.href} className="hover:text-white transition-colors">
                    {link.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Right Column: Mission Slogan & Back-to-Top */}
        <div className="md:col-span-3 flex flex-col justify-between items-start md:items-end">
          <div className="text-left md:text-right">
            <span className="font-kensington text-3xl sm:text-4xl uppercase tracking-tight text-white/90 block leading-tight">
              {footer.closingHeadline}
            </span>
            <span className="text-xs font-mono uppercase tracking-widest text-[#E5F97A] mt-2 block">
              {footer.closingLocation}
            </span>
          </div>

          <button
            onClick={scrollToTop}
            className="group mt-8 md:mt-0 flex items-center gap-2 px-5 py-2.5 rounded-full border border-white/30 hover:border-white hover:bg-white/10 text-xs font-mono uppercase tracking-wider text-white transition-all cursor-pointer"
          >
            <span>BACK TO TOP</span>
            <ArrowUp className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>
      </div>

      {/* Bottom Legal & Accreditations Bar */}
      <div className="max-w-7xl mx-auto pt-8 flex flex-col sm:flex-row items-center justify-between text-[11px] font-mono text-white/60 gap-4">
        <p>© {new Date().getFullYear()} {school.name}. All rights reserved.</p>
        <div className="flex items-center gap-6">
          {navigation.legalLinks.map((link, idx) => (
            <a key={idx} href={link.href} className="hover:text-white transition-colors">
              {link.title}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};
