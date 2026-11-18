import React from "react";
import Link from "next/link";
import { ArrowLeft, Square, ArrowRight, Download, Send } from "lucide-react";

export const metadata = {
  title: "Activity 09: Buttons & States — Cyril Jhune",
  description: "Interactive button styles, states, and responsive actions.",
};

export default function ButtonActivityPage() {
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
            <Square size={14} />
            <span>ACTIVITY 09 • BUTTONS</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 dark:text-white tracking-tight">
            BUTTONS &amp; INTERACTIVE STATES
          </h1>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 font-sans max-w-2xl">
            A showcase of button variants including primary, secondary, outline, and icon buttons with hover and active states.
          </p>
        </div>

        {/* Buttons Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Primary CTA */}
          <div className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-4">
            <span className="font-mono text-xs text-slate-400 dark:text-slate-500">Primary Button</span>
            <div>
              <button className="w-full inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-mono text-xs font-bold py-3 px-4 rounded-xl shadow-sm transition-all active:scale-95">
                <span>Primary Action</span>
                <ArrowRight size={14} />
              </button>
            </div>
            <p className="text-[11px] text-slate-500 dark:text-slate-400 font-sans">
              Main call-to-action button with cobalt blue fill.
            </p>
          </div>

          {/* Secondary Outline */}
          <div className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-4">
            <span className="font-mono text-xs text-slate-400 dark:text-slate-500">Secondary Outline</span>
            <div>
              <button className="w-full inline-flex items-center justify-center gap-2 bg-white dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 border border-slate-300 dark:border-slate-700 font-mono text-xs font-bold py-3 px-4 rounded-xl shadow-sm transition-all active:scale-95">
                <Download size={14} className="text-blue-600 dark:text-blue-400" />
                <span>Download File</span>
              </button>
            </div>
            <p className="text-[11px] text-slate-500 dark:text-slate-400 font-sans">
              Secondary action with clean border and subtle hover background.
            </p>
          </div>

          {/* Ghost Button */}
          <div className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-4">
            <span className="font-mono text-xs text-slate-400 dark:text-slate-500">Ghost Button</span>
            <div>
              <button className="w-full inline-flex items-center justify-center gap-2 hover:bg-slate-200/60 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 font-mono text-xs font-bold py-3 px-4 rounded-xl transition-all">
                <span>Cancel / Back</span>
              </button>
            </div>
            <p className="text-[11px] text-slate-500 dark:text-slate-400 font-sans">
              Border-less button for low-priority actions.
            </p>
          </div>

          {/* Rounded Pill */}
          <div className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-4">
            <span className="font-mono text-xs text-slate-400 dark:text-slate-500">Pill Button</span>
            <div>
              <button className="w-full inline-flex items-center justify-center gap-2 bg-blue-50 dark:bg-blue-950/60 hover:bg-blue-100 dark:hover:bg-blue-900/60 border border-blue-200 dark:border-blue-900 text-blue-700 dark:text-blue-300 font-mono text-xs font-bold py-3 px-4 rounded-full transition-all active:scale-95">
                <Send size={14} />
                <span>Send Message</span>
              </button>
            </div>
            <p className="text-[11px] text-slate-500 dark:text-slate-400 font-sans">
              Full rounded pill styling for tags or quick actions.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
