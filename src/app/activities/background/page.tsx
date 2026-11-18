import React from "react";
import Link from "next/link";
import { ArrowLeft, Palette } from "lucide-react";

export const metadata = {
  title: "Activity 06: Background & Colors — Cyril Jhune",
  description: "Study of background patterns, colors, and surface themes.",
};

export default function BackgroundActivityPage() {
  return (
    <div className="py-12 bg-white dark:bg-slate-950 min-h-screen transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <Link
          href="/#activities"
          className="inline-flex items-center gap-2 text-xs font-mono font-bold text-slate-500 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
        >
          <ArrowLeft size={14} />
          <span>BACK TO ACTIVITIES</span>
        </Link>

        {/* Header */}
        <div className="space-y-3 border-b border-slate-200 dark:border-slate-800 pb-6">
          <div className="inline-flex items-center gap-2 font-mono text-xs font-bold text-blue-600 dark:text-blue-400 uppercase tracking-widest">
            <Palette size={14} />
            <span>ACTIVITY 06 • BACKGROUNDS &amp; COLORS</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 dark:text-white tracking-tight">
            BACKGROUNDS &amp; THEME SURFACES
          </h1>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 font-sans max-w-2xl">
            Clean background textures, subtle grid patterns, and light/dark theme surface contrast.
          </p>
        </div>

        {/* Surface Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {/* Surface 1: Clean White/Obsidian */}
          <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-3">
            <div className="h-28 rounded-xl bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 flex items-center justify-center">
              <span className="font-mono text-xs font-bold text-slate-600 dark:text-slate-400">Default Canvas</span>
            </div>
            <div className="font-bold text-sm text-slate-900 dark:text-white">Clean Canvas</div>
            <p className="text-xs text-slate-500 dark:text-slate-400 font-sans">
              Pure white in light mode, deep obsidian in dark mode.
            </p>
          </div>

          {/* Surface 2: Subtle Grid Pattern */}
          <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-3">
            <div className="h-28 rounded-xl bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:1.5rem_1.5rem] border border-slate-200 dark:border-slate-800 flex items-center justify-center">
              <span className="font-mono text-xs font-bold text-slate-700 dark:text-slate-300 bg-white/90 dark:bg-slate-900/90 px-2 py-1 rounded">
                Grid Pattern
              </span>
            </div>
            <div className="font-bold text-sm text-slate-900 dark:text-white">Subtle Grid Texture</div>
            <p className="text-xs text-slate-500 dark:text-slate-400 font-sans">
              Geometric grid overlay used in the hero header.
            </p>
          </div>

          {/* Surface 3: Cobalt Accent Surface */}
          <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-3">
            <div className="h-28 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-700 text-white flex items-center justify-center">
              <span className="font-mono text-xs font-bold text-white">Electric Cobalt</span>
            </div>
            <div className="font-bold text-sm text-slate-900 dark:text-white">Primary Brand Accent</div>
            <p className="text-xs text-slate-500 dark:text-slate-400 font-sans">
              High-contrast blue gradient used for interactive actions and milestones.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
