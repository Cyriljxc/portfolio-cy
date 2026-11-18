import React from "react";
import Link from "next/link";
import CjcLogo from "@/components/CjcLogo";
import { ArrowLeft, Sparkles, Compass } from "lucide-react";

export const metadata = {
  title: "Activity 07: Logo & CJC Monogram — Cyril Jhune",
  description: "Personal initials monogram design combining C, J, and C.",
};

export default function LogoActivityPage() {
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
            <Sparkles size={14} />
            <span>ACTIVITY 07 • LOGO DESIGN</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 dark:text-white tracking-tight">
            CJC MONOGRAM LOGO DESIGN
          </h1>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 font-sans max-w-2xl">
            A clean vector monogram combining the initials C, J, and C into a modern, rounded squircle icon.
          </p>
        </div>

        {/* Primary Brand Lockup Card */}
        <div className="p-8 rounded-3xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col sm:flex-row items-center gap-6">
          <CjcLogo size={80} className="shadow-md rounded-2xl" />
          <div className="space-y-1 text-center sm:text-left">
            <div className="text-xs font-mono text-slate-400 dark:text-slate-500 font-bold uppercase tracking-widest">
              Student Identity Lockup
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white font-sans tracking-tight">
              CYRIL JHUNE C. CANABAL
            </h2>
            <p className="text-xs sm:text-sm font-mono text-blue-600 dark:text-blue-400 font-semibold">
              First-Year BSIT • University of Makati (UMak)
            </p>
          </div>
        </div>

        {/* Multi-Scale Showcase */}
        <div className="space-y-4">
          <h3 className="font-mono text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider">
            Logo Scales
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {/* Scale 1 */}
            <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col items-center justify-center space-y-4 text-center">
              <span className="font-mono text-xs text-slate-400 dark:text-slate-500">Large Scale</span>
              <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-700">
                <CjcLogo size={90} />
              </div>
              <div className="text-xs font-mono font-semibold text-slate-700 dark:text-slate-300">90 x 90 px</div>
            </div>

            {/* Scale 2 */}
            <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col items-center justify-center space-y-4 text-center">
              <span className="font-mono text-xs text-slate-400 dark:text-slate-500">Navigation Scale</span>
              <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-700">
                <CjcLogo size={40} />
              </div>
              <div className="text-xs font-mono font-semibold text-slate-700 dark:text-slate-300">40 x 40 px</div>
            </div>

            {/* Scale 3 */}
            <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col items-center justify-center space-y-4 text-center">
              <span className="font-mono text-xs text-slate-400 dark:text-slate-500">Blueprint Grid</span>
              <div className="p-2 rounded-2xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
                <CjcLogo size={90} variant="blueprint" />
              </div>
              <div className="text-xs font-mono font-semibold text-blue-600 dark:text-blue-400">Blueprint View</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
