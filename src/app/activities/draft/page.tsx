import React from "react";
import Link from "next/link";
import { ArrowLeft, Layers, PenTool, LayoutTemplate, Compass } from "lucide-react";

export const metadata = {
  title: "Activity 10: Draft & Wireframes — Cyril Jhune",
  description: "Architectural wireframes, layout planning diagrams, and early computational design blueprints.",
};

export default function DraftActivityPage() {
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
            <Layers size={14} />
            <span>ACTIVITY 10 // STRUCTURAL WIREFRAMES &amp; DRAFTS</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight">
            WIREFRAMES &amp; SYSTEM DRAFTS
          </h1>
          <p className="text-sm sm:text-base text-slate-600 font-sans max-w-2xl">
            Documentation of initial layout wireframes, structural component blueprints, and design iterations that preceded the final Next.js production build.
          </p>
        </div>

        {/* Structural Wireframe Breakdown Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
            <div className="flex items-center gap-2 text-blue-600 font-mono text-xs font-bold">
              <PenTool size={16} />
              <span>DRAFT STAGE 01</span>
            </div>
            <h3 className="text-lg font-bold text-slate-900">Information Architecture</h3>
            <p className="text-xs text-slate-600 leading-relaxed font-sans">
              Mapping out the 3 primary architectural zones: Identity Hero, Multimedia Showcase (photos + outreach reels), and Course Activity Directory.
            </p>
            <div className="p-3 rounded-lg bg-white border border-slate-200 text-xs font-mono text-slate-500">
              Flow: Hero &rarr; Showcase &rarr; Calendar &rarr; Activities
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
            <div className="flex items-center gap-2 text-blue-600 font-mono text-xs font-bold">
              <LayoutTemplate size={16} />
              <span>DRAFT STAGE 02</span>
            </div>
            <h3 className="text-lg font-bold text-slate-900">Wireframe Layout Grid</h3>
            <p className="text-xs text-slate-600 leading-relaxed font-sans">
              Prototyping responsive breakpoint boundaries for 360px (mobile), 768px (tablet), and 1280px (desktop) with 0 horizontal overflow constraints.
            </p>
            <div className="p-3 rounded-lg bg-white border border-slate-200 text-xs font-mono text-slate-500">
              Breakpoints: 360px // 768px // 1280px
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
            <div className="flex items-center gap-2 text-blue-600 font-mono text-xs font-bold">
              <Compass size={16} />
              <span>DRAFT STAGE 03</span>
            </div>
            <h3 className="text-lg font-bold text-slate-900">Modern Light Aesthetics</h3>
            <p className="text-xs text-slate-600 leading-relaxed font-sans">
              Transitioning from initial dark theme to crisp white paper background with electric cobalt highlights and high contrast slate text.
            </p>
            <div className="p-3 rounded-lg bg-white border border-slate-200 text-xs font-mono text-slate-500">
              Palette: White #FFF // Cobalt #2563EB // Slate #0F172A
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
