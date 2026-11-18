import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowDown, Calendar, FileText, MapPin, GraduationCap, Code } from "lucide-react";

export default function HeroSection() {
  return (
    <section id="hero" className="relative w-full bg-white dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800 overflow-hidden transition-colors">
      {/* Subtle background grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#f1f5f9_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f9_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-60 dark:opacity-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 lg:py-24 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Typography & Info */}
          <div className="lg:col-span-7 space-y-6">
            {/* Tag Pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 dark:bg-blue-950/60 border border-blue-200 dark:border-blue-900 text-blue-700 dark:text-blue-300 font-mono text-xs font-semibold">
              <span className="w-2 h-2 rounded-full bg-blue-600 dark:bg-blue-400 animate-pulse" />
              <span>BSIT • FIRST YEAR • 2026</span>
            </div>

            {/* Name */}
            <div className="space-y-1">
              <h2 className="text-sm sm:text-base font-mono font-bold tracking-widest text-blue-600 dark:text-blue-400 uppercase">
                CYRIL JHUNE C. CANABAL
              </h2>
              <p className="text-xs sm:text-sm font-mono text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                University of Makati • College of Computing and Information Sciences
              </p>
            </div>

            {/* Hero Title */}
            <div className="space-y-0 tracking-tighter select-none">
              <span className="block text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-light text-slate-900 dark:text-white leading-none">
                PORTFOLIO
              </span>
              <span className="block text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black text-blue-600 dark:text-blue-500 leading-none">
                CYRIL.
              </span>
            </div>

            {/* Authentic Human Bio */}
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 font-sans max-w-xl leading-relaxed pt-1">
              Hi! I&apos;m Cyril, a first-year Information Technology student at the University of Makati. Welcome to my web portfolio where I showcase my class activities, campus photos, and community outreach projects.
            </p>

            {/* Quick Info Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
              <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
                <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400 text-xs font-mono mb-1">
                  <GraduationCap size={14} className="text-blue-600 dark:text-blue-400" />
                  <span>COLLEGE</span>
                </div>
                <div className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white">
                  University of Makati
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
                <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400 text-xs font-mono mb-1">
                  <MapPin size={14} className="text-blue-600 dark:text-blue-400" />
                  <span>LOCATION</span>
                </div>
                <div className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white">
                  Makati City
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
                <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400 text-xs font-mono mb-1">
                  <Code size={14} className="text-blue-600 dark:text-blue-400" />
                  <span>ACTIVITIES</span>
                </div>
                <div className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white">
                  10 Class Activities
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-4">
              <Link
                href="/activities/calendar"
                className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-mono text-xs sm:text-sm font-bold px-5 py-3 rounded-xl shadow-sm transition-all hover:shadow hover:-translate-y-0.5"
              >
                <Calendar size={16} />
                <span>VIEW CALENDAR</span>
              </Link>
              <Link
                href="/activities/resume"
                className="inline-flex items-center gap-2 bg-slate-100 hover:bg-slate-200 dark:bg-slate-900 dark:hover:bg-slate-800 text-slate-800 dark:text-slate-200 font-mono text-xs sm:text-sm font-bold px-5 py-3 rounded-xl border border-slate-300 dark:border-slate-700 transition-all hover:-translate-y-0.5"
              >
                <FileText size={16} />
                <span>RESUME</span>
              </Link>
              <Link
                href="/#showcase"
                className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 font-mono text-xs sm:text-sm font-bold px-3 py-2 transition-colors"
              >
                <span>PHOTOS &amp; VIDEOS</span>
                <ArrowDown size={14} />
              </Link>
            </div>
          </div>

          {/* Right Column: Student Portrait Card */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-sm sm:max-w-md">
              {/* Outer card frame */}
              <div className="relative rounded-2xl bg-gradient-to-b from-blue-50 to-slate-100 dark:from-slate-900 dark:to-slate-950 p-2 border border-slate-200 dark:border-slate-800 shadow-xl shadow-blue-500/5">
                <div className="relative rounded-xl overflow-hidden bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 aspect-[4/5]">
                  <Image
                    src="/images/portrait.png"
                    alt="Portrait of Cyril Jhune C. Canabal"
                    fill
                    priority
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover object-top hover:scale-105 transition-transform duration-500"
                  />
                  {/* Subtle gradient vignette at bottom */}
                  <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-white dark:from-slate-900 via-white/70 dark:via-slate-900/70 to-transparent" />
                  
                  {/* Bottom Name Card */}
                  <div className="absolute bottom-3 inset-x-3 p-3 rounded-xl bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border border-slate-200 dark:border-slate-700 shadow-sm flex items-center justify-between">
                    <div>
                      <div className="font-mono text-xs font-bold text-slate-900 dark:text-white">
                        Cyril Jhune C. Canabal
                      </div>
                      <div className="text-[11px] font-mono text-blue-600 dark:text-blue-400 font-semibold">
                        BSIT Student • CCIS
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
