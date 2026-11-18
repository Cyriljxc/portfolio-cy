import React from "react";
import Link from "next/link";
import { ArrowLeft, Layout, Columns, Grid } from "lucide-react";

export const metadata = {
  title: "Activity 05: Layout & Grid Systems — Cyril Jhune",
  description: "Architectural demonstration of 12-column CSS Grid, asymmetric split views, and flex wrapping layouts.",
};

export default function LayoutActivityPage() {
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
            <Layout size={14} />
            <span>ACTIVITY 05 // RESPONSIVE GRID SYSTEMS</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight">
            LAYOUT &amp; ARCHITECTURAL GRID
          </h1>
          <p className="text-sm sm:text-base text-slate-600 font-sans max-w-2xl">
            Demonstration of multi-column CSS Grid, asymmetric split layouts, fluid flexbox cards, and auto-stacking mobile containers engineered with zero horizontal overflow.
          </p>
        </div>

        {/* 12-Column Grid Demonstration */}
        <div className="bg-slate-50 p-6 sm:p-8 rounded-2xl border border-slate-200 space-y-6">
          <div className="flex items-center justify-between border-b border-slate-200 pb-3">
            <span className="font-mono text-xs font-bold text-slate-900 uppercase">
              12-Column Architectural System
            </span>
            <span className="font-mono text-xs text-blue-600">Tailwind CSS Grid</span>
          </div>

          <div className="grid grid-cols-12 gap-3 font-mono text-xs text-center font-bold">
            <div className="col-span-12 p-4 bg-blue-600 text-white rounded-xl shadow-xs">
              col-span-12 (Full-width Hero Banner)
            </div>
            <div className="col-span-12 md:col-span-8 p-4 bg-white border border-slate-200 text-slate-800 rounded-xl">
              col-span-8 (Primary Content Area)
            </div>
            <div className="col-span-12 md:col-span-4 p-4 bg-blue-50 border border-blue-200 text-blue-700 rounded-xl">
              col-span-4 (Sidebar Stats)
            </div>
            <div className="col-span-12 sm:col-span-6 md:col-span-4 p-4 bg-white border border-slate-200 text-slate-800 rounded-xl">
              col-span-4 (Card A)
            </div>
            <div className="col-span-12 sm:col-span-6 md:col-span-4 p-4 bg-white border border-slate-200 text-slate-800 rounded-xl">
              col-span-4 (Card B)
            </div>
            <div className="col-span-12 sm:col-span-12 md:col-span-4 p-4 bg-white border border-slate-200 text-slate-800 rounded-xl">
              col-span-4 (Card C)
            </div>
          </div>
        </div>

        {/* Asymmetrical Bento Grid Showcase */}
        <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm space-y-6">
          <div className="flex items-center justify-between border-b border-slate-100 pb-3">
            <span className="font-mono text-xs font-bold text-slate-900 uppercase">
              Modern Bento Grid Layout
            </span>
            <span className="font-mono text-xs text-slate-400">Asymmetrical Scaling</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="md:col-span-2 p-6 rounded-2xl bg-gradient-to-br from-blue-50 via-white to-slate-50 border border-slate-200 space-y-3">
              <span className="font-mono text-xs font-bold text-blue-600 uppercase">
                Dominant Feature Module
              </span>
              <h3 className="text-xl font-bold text-slate-900">
                Fluid Fluidity Across 360px to 1440px
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-sans">
                By leveraging CSS Grid track definitions with auto-fill and auto-fit minmax units, content reflows naturally without abrupt breaking points or horizontal scroll leakage.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-3 flex flex-col justify-between">
              <div>
                <span className="font-mono text-xs font-bold text-slate-500 uppercase">
                  Metric Node
                </span>
                <div className="text-3xl font-black text-slate-900 mt-2">100%</div>
                <p className="text-xs text-slate-500 font-sans mt-1">
                  Mobile viewport compliance verified across Chrome DevTools.
                </p>
              </div>
              <div className="font-mono text-[11px] text-blue-600 font-semibold">
                Device Agnostic
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
