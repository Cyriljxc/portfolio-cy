"use client";

import React from "react";

interface MarqueeBannerProps {
  text?: string[];
  direction?: "left" | "right";
  className?: string;
}

export default function MarqueeBanner({
  text = [
    "CYRIL JHUNE C. CANABAL",
    "BSIT • UNIVERSITY OF MAKATI",
    "10 LAB ACTIVITIES",
    "COMMUNITY OUTREACH",
    "NEXT.JS & TAILWIND",
    "TUESDAY NOV 11 PRESENTATION",
  ],
  direction = "left",
  className = "",
}: MarqueeBannerProps) {
  return (
    <div className={`w-full overflow-hidden border-y border-slate-200 dark:border-slate-800 bg-slate-50/60 dark:bg-slate-900/40 py-3.5 select-none ${className}`}>
      <div className="flex w-max animate-marquee whitespace-nowrap font-mono text-xs sm:text-sm font-bold tracking-widest uppercase">
        {/* Sequence 1 */}
        <div className="flex items-center gap-8 px-4">
          {text.map((item, idx) => (
            <React.Fragment key={`seq1-${idx}`}>
              <span className="text-slate-800 dark:text-slate-200 flex items-center gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-600 dark:bg-blue-400" />
                <span>{item}</span>
              </span>
              <span className="text-slate-300 dark:text-slate-700">/</span>
            </React.Fragment>
          ))}
        </div>

        {/* Duplicate Sequence 2 for seamless loop */}
        <div className="flex items-center gap-8 px-4" aria-hidden="true">
          {text.map((item, idx) => (
            <React.Fragment key={`seq2-${idx}`}>
              <span className="text-slate-800 dark:text-slate-200 flex items-center gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-600 dark:bg-blue-400" />
                <span>{item}</span>
              </span>
              <span className="text-slate-300 dark:text-slate-700">/</span>
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
}
