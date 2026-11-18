import React from "react";
import Link from "next/link";
import { ArrowLeft, Box } from "lucide-react";

export const metadata = {
  title: "Activity 08: Frames & Containers — Cyril Jhune",
  description: "UI cards, frames, and container components.",
};

export default function FrameActivityPage() {
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
            <Box size={14} />
            <span>ACTIVITY 08 • UI FRAMES</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 dark:text-white tracking-tight">
            UI CONTAINERS &amp; CARDS
          </h1>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 font-sans max-w-2xl">
            Card components with rounded corners, subtle borders, and elevation styles for light and dark modes.
          </p>
        </div>

        {/* Frame Styles Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {/* Card 1: Standard Bordered Card */}
          <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-3">
            <span className="font-mono text-xs font-bold text-blue-600 dark:text-blue-400">Card 01</span>
            <div className="font-bold text-base text-slate-900 dark:text-white">Bordered Card</div>
            <p className="text-xs text-slate-500 dark:text-slate-400 font-sans leading-relaxed">
              Clean 1px border that adapts cleanly between light slate and dark slate.
            </p>
          </div>

          {/* Card 2: Elevated Card */}
          <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-md space-y-3">
            <span className="font-mono text-xs font-bold text-blue-600 dark:text-blue-400">Card 02</span>
            <div className="font-bold text-base text-slate-900 dark:text-white">Elevated Shadow</div>
            <p className="text-xs text-slate-500 dark:text-slate-400 font-sans leading-relaxed">
              Added box shadow for floating interactive cards and highlights.
            </p>
          </div>

          {/* Card 3: Tinted Surface Card */}
          <div className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 space-y-3">
            <span className="font-mono text-xs font-bold text-blue-600 dark:text-blue-400">Card 03</span>
            <div className="font-bold text-base text-slate-900 dark:text-white">Tinted Surface</div>
            <p className="text-xs text-slate-500 dark:text-slate-400 font-sans leading-relaxed">
              Slightly shaded background used for grouping secondary information.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
