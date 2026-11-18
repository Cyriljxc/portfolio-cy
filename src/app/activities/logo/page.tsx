import React from "react";
import Link from "next/link";
import CjcLogo from "@/components/CjcLogo";
import { ArrowLeft, Sparkles, Compass, Shield, Maximize } from "lucide-react";

export const metadata = {
  title: "Activity 07: Logo & CJC Cyber Monogram — Cyril Jhune",
  description: "Official personal brand identity specification, mathematical SVG vector curves, and construction blueprint.",
};

export default function LogoActivityPage() {
  return (
    <div className="py-12 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <Link
          href="/#activities"
          className="inline-flex items-center gap-2 text-xs font-mono font-bold text-slate-500 hover:text-blue-600 transition-colors"
        >
          <ArrowLeft size={14} />
          <span>BACK TO ACTIVITIES DIRECTORY</span>
        </Link>

        {/* Header */}
        <div className="space-y-3 border-b border-slate-200 pb-6">
          <div className="inline-flex items-center gap-2 font-mono text-xs font-bold text-blue-600 uppercase tracking-widest">
            <Sparkles size={14} />
            <span>ACTIVITY 07 // BRAND IDENTITY DESIGN</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight">
            CJC CYBER MONOGRAM SPECIFICATION
          </h1>
          <p className="text-sm sm:text-base text-slate-600 font-sans max-w-2xl">
            A precision vector monogram intertwining the letters C, J, and C with mathematical cubic bezier curves, squircle boundary geometry, and a computing focus node.
          </p>
        </div>

        {/* Primary Horizontal Brand Lockup Card */}
        <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200 shadow-sm flex flex-col sm:flex-row items-center gap-6">
          <CjcLogo size={80} className="shadow-md rounded-2xl" />
          <div className="space-y-1 text-center sm:text-left">
            <div className="text-xs font-mono text-slate-400 font-bold uppercase tracking-widest">
              Primary Academic Identity Lockup
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 font-sans tracking-tight">
              CYRIL JHUNE C. CANABAL
            </h2>
            <p className="text-xs sm:text-sm font-mono text-blue-600 font-semibold">
              First-Year BSIT // University of Makati (UMak)
            </p>
          </div>
        </div>

        {/* Multi-Scale & Multi-Surface Showcase */}
        <div className="space-y-4">
          <h3 className="font-mono text-xs font-bold text-slate-900 uppercase tracking-wider">
            Multi-Scale &amp; Multi-Surface Adaptations
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {/* Scale 1: Display */}
            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm flex flex-col items-center justify-center space-y-4 text-center">
              <span className="font-mono text-xs text-slate-400">01 // DISPLAY HERO SCALE</span>
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100">
                <CjcLogo size={100} />
              </div>
              <div className="text-xs font-mono font-semibold text-slate-700">100 x 100 px (Splash / Large)</div>
            </div>

            {/* Scale 2: Header / Nav */}
            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm flex flex-col items-center justify-center space-y-4 text-center">
              <span className="font-mono text-xs text-slate-400">02 // APP BAR SCALE</span>
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100">
                <CjcLogo size={40} />
              </div>
              <div className="text-xs font-mono font-semibold text-slate-700">40 x 40 px (Navigation / UI)</div>
            </div>

            {/* Scale 3: Blueprint Grid */}
            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm flex flex-col items-center justify-center space-y-4 text-center">
              <span className="font-mono text-xs text-slate-400">03 // BLUEPRINT GEOMETRY</span>
              <div className="p-2 rounded-2xl bg-emerald-50 border border-emerald-200">
                <CjcLogo size={100} variant="blueprint" />
              </div>
              <div className="text-xs font-mono font-semibold text-emerald-700">Engineering Schematic</div>
            </div>
          </div>
        </div>

        {/* Geometry & Blueprint Breakdown */}
        <div className="bg-slate-50 p-6 sm:p-8 rounded-2xl border border-slate-200 space-y-6">
          <div className="flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-200 pb-3">
            <Compass size={18} className="text-blue-600" />
            <span>Construction Geometry &amp; Grid Anchors</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="p-4 rounded-xl bg-white border border-slate-200 space-y-1.5">
              <span className="font-mono text-[11px] font-bold text-blue-600">01 // OUTER SQUIRCLE</span>
              <div className="text-xs font-bold text-slate-900">Radius: 22px on 90x90 Box</div>
              <p className="text-[11px] text-slate-500 font-sans">
                Matches modern operating system application iconography with continuous curvature.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-white border border-slate-200 space-y-1.5">
              <span className="font-mono text-[11px] font-bold text-blue-600">02 // CYRIL ARC (C)</span>
              <div className="text-xs font-bold text-slate-900">Stroke: 8px Cubic Bezier</div>
              <p className="text-[11px] text-slate-500 font-sans">
                Anchored from (65, 30) through apex (25, 50) to (65, 70), embodying Cyril and Computing.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-white border border-slate-200 space-y-1.5">
              <span className="font-mono text-[11px] font-bold text-blue-600">03 // JHUNE ANCHOR (J)</span>
              <div className="text-xs font-bold text-slate-900">Vertical Stem &amp; Hook</div>
              <p className="text-[11px] text-slate-500 font-sans">
                Plunges from (52, 28) down to (52, 61), hooking smoothly left into a 15px radius baseline.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-white border border-slate-200 space-y-1.5">
              <span className="font-mono text-[11px] font-bold text-blue-600">04 // COMPUTING BIT</span>
              <div className="text-xs font-bold text-slate-900">Focus Node at (68, 50)</div>
              <p className="text-[11px] text-slate-500 font-sans">
                Solid circular node symbolizing binary data logic, terminal cursor, and Canabal initial.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
