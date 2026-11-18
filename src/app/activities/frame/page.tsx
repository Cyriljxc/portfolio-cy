import React from "react";
import Link from "next/link";
import { ArrowLeft, Box, Layers, Maximize } from "lucide-react";

export const metadata = {
  title: "Activity 08: Frame & Containers — Cyril Jhune",
  description: "Architectural component frames, container padding systems, and mobile-friendly elevations.",
};

export default function FrameActivityPage() {
  return (
    <div className="py-12 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <Link
          href="/#activities"
          className="inline-flex items-center gap-2 text-xs font-mono font-bold text-slate-500 hover:text-blue-600 transition-colors"
        >
          <ArrowLeft size={14} />
          <span>BACK TO ACTIVITIES DIRECTORY</span>
        </Link>

        <div className="space-y-3 border-b border-slate-200 pb-6">
          <div className="inline-flex items-center gap-2 font-mono text-xs font-bold text-blue-600 uppercase tracking-widest">
            <Box size={14} />
            <span>ACTIVITY 08 // CONTAINER ARCHITECTURE</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight">
            FRAME &amp; CONTAINER SYSTEMS
          </h1>
          <p className="text-sm sm:text-base text-slate-600 font-sans max-w-2xl">
            Study of component frames, structural padding tiers, hairline border boundaries, and viewport containment to maintain structural integrity across mobile screens.
          </p>
        </div>

        {/* 3 Frame Tiers */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Flat Minimal Frame */}
          <div className="p-6 rounded-2xl bg-white border border-slate-200 space-y-3">
            <span className="font-mono text-xs font-bold text-blue-600">FRAME TIER 01</span>
            <h3 className="text-lg font-bold text-slate-900">Hairline Border Frame</h3>
            <p className="text-xs text-slate-600 leading-relaxed font-sans">
              Strict 1px border using <code>#e2e8f0</code> with zero shadow, emphasizing modern flat architectural aesthetics.
            </p>
            <div className="p-3 rounded-lg bg-slate-50 border border-slate-100 font-mono text-xs text-slate-600">
              border-slate-200 // No Shadow
            </div>
          </div>

          {/* Elevated Subtle Frame */}
          <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-3">
            <span className="font-mono text-xs font-bold text-blue-600">FRAME TIER 02</span>
            <h3 className="text-lg font-bold text-slate-900">Elevated Soft Shadow</h3>
            <p className="text-xs text-slate-600 leading-relaxed font-sans">
              Hairline border paired with a featherlight 2-stop ambient shadow for natural z-axis hierarchy.
            </p>
            <div className="p-3 rounded-lg bg-slate-50 border border-slate-100 font-mono text-xs text-slate-600">
              shadow-sm // Ambient Elevation
            </div>
          </div>

          {/* Interactive Active Frame */}
          <div className="p-6 rounded-2xl bg-white border border-blue-300 shadow-md ring-2 ring-blue-100 space-y-3">
            <span className="font-mono text-xs font-bold text-blue-600">FRAME TIER 03</span>
            <h3 className="text-lg font-bold text-slate-900">Focus &amp; Active State</h3>
            <p className="text-xs text-slate-600 leading-relaxed font-sans">
              Accent ring with electric cobalt glow to clearly signify selected, focused, or active interaction states.
            </p>
            <div className="p-3 rounded-lg bg-blue-50/60 border border-blue-200 font-mono text-xs text-blue-700">
              ring-2 ring-blue-100 // Active Focus
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
