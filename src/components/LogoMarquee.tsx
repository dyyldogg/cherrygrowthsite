"use client";

import React, { useState } from "react";

// Logo filenames from /public folder
const CLIENT_LOGOS = [
  "techstars.png",
  "y-comb-logo.png",
  "berkeleyhaas (1).png",
  "shopifylogo.png",
  "kwlogo.png",
  "remax-logo.png",
  "youtubecreators.png",
  "cameupinthedroughlogi.png",
];

export default function LogoMarquee() {
  const [logos] = useState<string[]>(CLIENT_LOGOS);

  return (
    <div className="w-full overflow-hidden py-12 border-y border-black/5 bg-transparent">
      <div className="relative w-full max-w-7xl mx-auto px-4 mb-8 text-center">
        <p className="text-sm font-medium uppercase tracking-widest text-black/40">
          Trusted by high-growth companies
        </p>
      </div>
      
      {/* Marquee Container */}
      <div className="relative flex w-full overflow-hidden">
        {/* Gradients for fade effect at edges */}
        <div className="absolute left-0 top-0 z-10 h-full w-12 bg-gradient-to-r from-[var(--background)] to-transparent"></div>
        <div className="absolute right-0 top-0 z-10 h-full w-12 bg-gradient-to-l from-[var(--background)] to-transparent"></div>

        {/* Inner Track - duplicated for seamless loop */}
        <div className="flex min-w-full shrink-0 animate-marquee items-center justify-around gap-12 md:gap-24 px-12">
          {logos.map((logo, i) => (
            <img
              key={i}
              src={`/${logo}`}
              alt="Client Logo"
              className="h-8 w-auto max-w-[120px] object-contain grayscale opacity-60 transition-all duration-500 hover:grayscale-0 hover:opacity-100 hover:scale-105"
            />
          ))}
        </div>
        <div aria-hidden="true" className="flex min-w-full shrink-0 animate-marquee items-center justify-around gap-12 md:gap-24 px-12">
          {logos.map((logo, i) => (
            <img
              key={i}
              src={`/${logo}`}
              alt="Client Logo"
              className="h-8 w-auto max-w-[120px] object-contain grayscale opacity-60 transition-all duration-500 hover:grayscale-0 hover:opacity-100 hover:scale-105"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
