import React from "react";
import Link from "next/link";
import { ArrowLeft, Palette, Sparkles, Layers } from "lucide-react";

export const metadata = {
  title: "Activity 06: Background Surfaces & Patterns — Cyril Jhune",
  description: "Exploration of architectural light background surfaces, mesh gradients, subtle dot matrices, and hairline borders.",
};

export default function BackgroundActivityPage() {
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
            <Palette size={14} />
            <span>ACTIVITY 06 // BACKGROUND SURFACES &amp; TEXTURES</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight">
            LIGHT &amp; WHITE SURFACES
          </h1>
          <p className="text-sm sm:text-base text-slate-600 font-sans max-w-2xl">
            A comprehensive study of clean architectural backgrounds: pure white paper canvas, slate elevation cards, subtle engineering dot matrices, and soft electric cobalt mesh gradients.
          </p>
        </div>

        {/* 4 Surface Variations Showcase */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Surface 1: Pure White Canvas */}
          <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs flex flex-col justify-between space-y-4">
            <div>
              <span className="font-mono text-xs font-bold text-blue-600">01 // PAPER WHITE</span>
              <h3 className="text-base font-bold text-slate-900 mt-1">Pure White Canvas</h3>
              <p className="text-xs text-slate-500 font-sans mt-2 leading-relaxed">
                Hex code <code>#ffffff</code>. Default foundational canvas delivering maximum contrast, razor-sharp typographic legibility, and distraction-free content viewing.
              </p>
            </div>
            <div className="font-mono text-[11px] text-slate-400 bg-slate-50 p-2 rounded-lg border border-slate-100">
              bg-white // #FFFFFF
            </div>
          </div>

          {/* Surface 2: Subtle Slate Muted */}
          <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col justify-between space-y-4">
            <div>
              <span className="font-mono text-xs font-bold text-blue-600">02 // SUBTLE SLATE</span>
              <h3 className="text-base font-bold text-slate-900 mt-1">Off-White Surface</h3>
              <p className="text-xs text-slate-500 font-sans mt-2 leading-relaxed">
                Hex code <code>#f8fafc</code> (Slate-50). Secondary elevation layer used for structural separation, card groups, and subtle contrast distinctions.
              </p>
            </div>
            <div className="font-mono text-[11px] text-slate-500 bg-white p-2 rounded-lg border border-slate-200">
              bg-slate-50 // #F8FAFC
            </div>
          </div>

          {/* Surface 3: Architectural Grid Matrix */}
          <div className="relative p-6 rounded-2xl bg-white border border-slate-200 overflow-hidden flex flex-col justify-between space-y-4">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:1.5rem_1.5rem] opacity-40 pointer-events-none" />
            <div className="relative z-10">
              <span className="font-mono text-xs font-bold text-blue-600">03 // BLUEPRINT GRID</span>
              <h3 className="text-base font-bold text-slate-900 mt-1">Engineering Grid Matrix</h3>
              <p className="text-xs text-slate-600 font-sans mt-2 leading-relaxed">
                Subtle 1.5rem linear CSS grid lines evoking architectural drafting paper and software schematic precision.
              </p>
            </div>
            <div className="relative z-10 font-mono text-[11px] text-slate-600 bg-white/90 backdrop-blur-xs p-2 rounded-lg border border-slate-200">
              CSS Linear-Gradient Grid
            </div>
          </div>

          {/* Surface 4: Soft Cobalt Glow */}
          <div className="p-6 rounded-2xl bg-gradient-to-br from-blue-50/80 via-white to-slate-50 border border-blue-200 flex flex-col justify-between space-y-4 shadow-sm">
            <div>
              <span className="font-mono text-xs font-bold text-blue-600">04 // COBALT AURA</span>
              <h3 className="text-base font-bold text-slate-900 mt-1">Electric Mesh Gradient</h3>
              <p className="text-xs text-slate-600 font-sans mt-2 leading-relaxed">
                Gentle radial aura mixing <code>#eff6ff</code> with pure white, providing subtle brand focus without washing out text.
              </p>
            </div>
            <div className="font-mono text-[11px] text-blue-700 bg-blue-100/60 p-2 rounded-lg border border-blue-200">
              Radial Mesh Gradient
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
