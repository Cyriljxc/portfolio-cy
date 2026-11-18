import React from "react";
import Link from "next/link";
import { ArrowLeft, Square, ArrowUpRight, Download, Send, Check } from "lucide-react";

export const metadata = {
  title: "Activity 09: Buttons & Micro-Interactions — Cyril Jhune",
  description: "Interactive button matrix featuring primary CTA, secondary outline, ghost buttons, and tactile feedback states.",
};

export default function ButtonActivityPage() {
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
            <Square size={14} />
            <span>ACTIVITY 09 // INTERACTIVE BUTTON MATRIX</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight">
            BUTTONS &amp; TACTILE FEEDBACK
          </h1>
          <p className="text-sm sm:text-base text-slate-600 font-sans max-w-2xl">
            A comprehensive design system matrix demonstrating primary call-to-actions, secondary borders, ghost pills, and touch targets exceeding the 44px mobile accessibility threshold.
          </p>
        </div>

        {/* Button Variants Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Primary Action Buttons */}
          <div className="p-6 sm:p-8 rounded-2xl bg-slate-50 border border-slate-200 space-y-6">
            <div className="border-b border-slate-200 pb-2 font-mono text-xs font-bold uppercase tracking-wider text-slate-900">
              Primary &amp; Solid Variants
            </div>

            <div className="space-y-4">
              <div className="flex flex-wrap items-center gap-3">
                <button className="bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white font-mono text-xs font-bold px-5 py-3 rounded-xl shadow-xs transition-all hover:-translate-y-0.5 active:translate-y-0">
                  PRIMARY BLUE CTA
                </button>
                <button className="bg-slate-900 hover:bg-black active:bg-slate-800 text-white font-mono text-xs font-bold px-5 py-3 rounded-xl shadow-xs transition-all hover:-translate-y-0.5">
                  DARK OBSIDIAN
                </button>
              </div>

              <div className="flex flex-wrap items-center gap-3">
                <button className="inline-flex items-center gap-2 bg-blue-600 text-white font-mono text-xs font-bold px-4 py-2.5 rounded-lg shadow-xs hover:bg-blue-700">
                  <Download size={14} />
                  <span>DOWNLOAD ARTIFACT</span>
                </button>
                <button className="inline-flex items-center gap-2 bg-emerald-600 text-white font-mono text-xs font-bold px-4 py-2.5 rounded-lg shadow-xs hover:bg-emerald-700">
                  <Check size={14} />
                  <span>SUBMIT MODULE</span>
                </button>
              </div>
            </div>
          </div>

          {/* Secondary & Outline Buttons */}
          <div className="p-6 sm:p-8 rounded-2xl bg-slate-50 border border-slate-200 space-y-6">
            <div className="border-b border-slate-200 pb-2 font-mono text-xs font-bold uppercase tracking-wider text-slate-900">
              Secondary, Outline &amp; Ghost
            </div>

            <div className="space-y-4">
              <div className="flex flex-wrap items-center gap-3">
                <button className="bg-white hover:bg-slate-100 text-slate-800 border border-slate-300 font-mono text-xs font-bold px-5 py-3 rounded-xl transition-all hover:-translate-y-0.5">
                  SECONDARY OUTLINE
                </button>
                <button className="text-slate-700 hover:text-blue-600 hover:bg-blue-50 font-mono text-xs font-bold px-5 py-3 rounded-xl transition-colors">
                  GHOST BUTTON
                </button>
              </div>

              <div className="flex flex-wrap items-center gap-3">
                <button className="inline-flex items-center gap-2 bg-white hover:bg-slate-50 text-blue-600 border border-blue-200 font-mono text-xs font-bold px-4 py-2.5 rounded-lg shadow-2xs">
                  <span>EXTERNAL LINK</span>
                  <ArrowUpRight size={14} />
                </button>
                <button className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 hover:bg-blue-100 font-mono text-xs font-bold px-4 py-2.5 rounded-lg">
                  <Send size={14} />
                  <span>TRANSMIT</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
