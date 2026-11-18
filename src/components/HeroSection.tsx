import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowDown, Calendar, FileText, Sparkles, MapPin, GraduationCap, Code } from "lucide-react";

export default function HeroSection() {
  return (
    <section id="hero" className="relative w-full bg-white border-b border-slate-200 overflow-hidden">
      {/* Architectural subtle background grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#f1f5f9_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f9_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-70 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 lg:py-24 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Typography & Info */}
          <div className="lg:col-span-7 space-y-6">
            {/* Top Monospace Tag */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 font-mono text-xs font-semibold">
              <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
              <span>BSIT // INTRODUCTION TO COMPUTING // 2026</span>
            </div>

            {/* Name & Academic Role */}
            <div className="space-y-2">
              <h2 className="text-sm sm:text-base font-mono font-bold tracking-widest text-blue-600 uppercase">
                CYRIL JHUNE C. CANABAL
              </h2>
              <p className="text-xs sm:text-sm font-mono text-slate-500 uppercase tracking-wider">
                First-Year BSIT Student // University of Makati
              </p>
            </div>

            {/* Huge Architectural Title */}
            <div className="space-y-0 tracking-tighter select-none">
              <span className="block text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-light text-slate-900 leading-none">
                PORTFOLIO
              </span>
              <span className="block text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black text-blue-600 leading-none">
                CYRIL.
              </span>
            </div>

            {/* Concise Bio */}
            <p className="text-base sm:text-lg text-slate-600 font-sans max-w-xl leading-relaxed pt-2">
              Welcome to my official digital portfolio. Developed with Next.js, TypeScript, and modern responsive design to showcase academic coursework, computational activities, community outreach reels, and software foundations.
            </p>

            {/* Quick Specs Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
              <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                <div className="flex items-center gap-2 text-slate-500 text-xs font-mono mb-1">
                  <GraduationCap size={14} className="text-blue-600" />
                  <span>INSTITUTION</span>
                </div>
                <div className="text-xs sm:text-sm font-bold text-slate-900">
                  University of Makati
                </div>
              </div>

              <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                <div className="flex items-center gap-2 text-slate-500 text-xs font-mono mb-1">
                  <MapPin size={14} className="text-blue-600" />
                  <span>LOCATION</span>
                </div>
                <div className="text-xs sm:text-sm font-bold text-slate-900">
                  Brgy. Olympia, Makati
                </div>
              </div>

              <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                <div className="flex items-center gap-2 text-slate-500 text-xs font-mono mb-1">
                  <Code size={14} className="text-blue-600" />
                  <span>ACTIVITIES</span>
                </div>
                <div className="text-xs sm:text-sm font-bold text-slate-900">
                  10 Interactive Modules
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-4">
              <Link
                href="/activities/calendar"
                className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-mono text-xs sm:text-sm font-bold px-5 py-3 rounded-xl shadow-sm hover:shadow transition-all hover:-translate-y-0.5"
              >
                <Calendar size={16} />
                <span>2026 ACADEMIC CALENDAR</span>
              </Link>
              <Link
                href="/activities/resume"
                className="inline-flex items-center gap-2 bg-slate-100 hover:bg-slate-200 text-slate-800 font-mono text-xs sm:text-sm font-bold px-5 py-3 rounded-xl border border-slate-300 transition-all hover:-translate-y-0.5"
              >
                <FileText size={16} />
                <span>STUDENT RESUME</span>
              </Link>
              <Link
                href="/#showcase"
                className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 font-mono text-xs sm:text-sm font-bold px-3 py-2 transition-colors"
              >
                <span>OUTREACH REELS</span>
                <ArrowDown size={14} />
              </Link>
            </div>
          </div>

          {/* Right Column: Student Portrait Card */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-sm sm:max-w-md">
              {/* Outer decorative card frame */}
              <div className="relative rounded-2xl bg-gradient-to-b from-blue-50 to-slate-100 p-2 border border-slate-200 shadow-xl shadow-blue-500/5">
                <div className="relative rounded-xl overflow-hidden bg-white border border-slate-200/80 aspect-[4/5]">
                  <Image
                    src="/images/portrait.png"
                    alt="Official student portrait of Cyril Jhune C. Canabal"
                    fill
                    priority
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover object-top hover:scale-105 transition-transform duration-500"
                  />
                  {/* Subtle gradient vignette at bottom */}
                  <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-white via-white/70 to-transparent" />
                  
                  {/* Floating Identity Badge */}
                  <div className="absolute bottom-3 inset-x-3 p-3 rounded-xl bg-white/95 backdrop-blur-md border border-slate-200 shadow-sm flex items-center justify-between">
                    <div>
                      <div className="font-mono text-xs font-bold text-slate-900">
                        Cyril Jhune C. Canabal
                      </div>
                      <div className="text-[11px] font-mono text-blue-600 font-semibold">
                        First-Year BSIT // Section INTCOMP
                      </div>
                    </div>
                    <div className="p-1.5 rounded-lg bg-blue-50 text-blue-600">
                      <Sparkles size={16} />
                    </div>
                  </div>
                </div>
              </div>

              {/* Status pill under image */}
              <div className="mt-3 flex items-center justify-between px-2 text-[11px] font-mono text-slate-500">
                <span className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                  Official Student Identification
                </span>
                <span>ID: UMak-2026-BSIT</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
