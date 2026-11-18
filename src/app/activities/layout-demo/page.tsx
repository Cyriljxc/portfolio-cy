import React from "react";
import Link from "next/link";
import { ArrowLeft, Layout } from "lucide-react";

export const metadata = {
  title: "Activity 05: Layout & Grid Demo — Cyril Jhune",
  description: "Responsive layout system showing CSS Grid and Flexbox alignment.",
};

export default function LayoutDemoActivityPage() {
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
            <Layout size={14} />
            <span>ACTIVITY 05 • LAYOUT SYSTEMS</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 dark:text-white tracking-tight">
            CSS GRID &amp; FLEXBOX LAYOUTS
          </h1>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 font-sans max-w-2xl">
            Responsive multi-column cards, flexbox alignment, and adaptive spacing that scales smoothly from smartphones to desktop screens.
          </p>
        </div>

        {/* 12-Column Grid Simulation */}
        <div className="space-y-4">
          <h3 className="font-mono text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider">
            12-Column Responsive Layout
          </h3>
          <div className="grid grid-cols-12 gap-3">
            <div className="col-span-12 sm:col-span-8 p-6 rounded-2xl bg-blue-50 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-900 space-y-2">
              <span className="font-mono text-xs font-bold text-blue-600 dark:text-blue-400">8 Columns (Primary Content)</span>
              <p className="text-xs text-slate-600 dark:text-slate-300 font-sans">
                Main article or content area taking up two-thirds of the grid on desktop.
              </p>
            </div>
            <div className="col-span-12 sm:col-span-4 p-6 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-2">
              <span className="font-mono text-xs font-bold text-slate-700 dark:text-slate-300">4 Columns (Sidebar)</span>
              <p className="text-xs text-slate-500 dark:text-slate-400 font-sans">
                Sidebar widget or quick links column.
              </p>
            </div>
          </div>
        </div>

        {/* 3-Column Equal Grid */}
        <div className="space-y-4">
          <h3 className="font-mono text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider">
            3-Column Equal Cards
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[1, 2, 3].map((card) => (
              <div
                key={card}
                className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-2"
              >
                <div className="font-mono text-xs font-bold text-blue-600 dark:text-blue-400">Card {card}</div>
                <div className="font-bold text-sm text-slate-900 dark:text-white">Responsive Container</div>
                <p className="text-xs text-slate-500 dark:text-slate-400 font-sans leading-relaxed">
                  Demonstrating clean auto-wrapping without horizontal page overflow.
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
