import React from "react";
import Link from "next/link";
import { ArrowLeft, Type } from "lucide-react";

export const metadata = {
  title: "Activity 04: Font & Text — Cyril Jhune",
  description: "Typography study showing headings, body text, and monospace fonts.",
};

export default function FontTextActivityPage() {
  return (
    <div className="py-12 bg-white dark:bg-slate-950 min-h-screen transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <Link
          href="/#activities"
          className="inline-flex items-center gap-2 text-xs font-mono font-bold text-slate-500 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
        >
          <ArrowLeft size={14} />
          <span>BACK TO ACTIVITIES</span>
        </Link>

        <div className="space-y-3 border-b border-slate-200 dark:border-slate-800 pb-6">
          <div className="inline-flex items-center gap-2 font-mono text-xs font-bold text-blue-600 dark:text-blue-400 uppercase tracking-widest">
            <Type size={14} />
            <span>ACTIVITY 04 • TYPOGRAPHY</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 dark:text-white tracking-tight">
            TYPOGRAPHY &amp; TEXT STYLING
          </h1>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 font-sans max-w-2xl">
            Demonstrating font sizes, weights, line heights, and monospace code font styles using Geist and system fonts.
          </p>
        </div>

        {/* Font Pairings Showcase */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Geist Sans Card */}
          <div className="bg-slate-50 dark:bg-slate-900 p-6 sm:p-8 rounded-2xl border border-slate-200 dark:border-slate-800 space-y-6">
            <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-3">
              <span className="font-mono text-xs font-bold text-blue-600 dark:text-blue-400 uppercase">
                Sans-Serif Font (Geist Sans)
              </span>
              <span className="font-mono text-xs text-slate-500 dark:text-slate-400">Heading &amp; Body</span>
            </div>

            <div className="space-y-4">
              <div>
                <span className="text-xs font-mono text-slate-400 dark:text-slate-500 block mb-1">Display Light (300)</span>
                <div className="text-4xl sm:text-5xl font-light text-slate-900 dark:text-white">
                  Introduction to Computing
                </div>
              </div>

              <div>
                <span className="text-xs font-mono text-slate-400 dark:text-slate-500 block mb-1">Heading Bold (700)</span>
                <div className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">
                  Web Development Portfolio
                </div>
              </div>

              <div>
                <span className="text-xs font-mono text-slate-400 dark:text-slate-500 block mb-1">Body Text Regular (400)</span>
                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-sans">
                  Typography is the art and technique of arranging type to make written language legible, readable, and appealing when displayed.
                </p>
              </div>
            </div>
          </div>

          {/* Geist Mono Card */}
          <div className="bg-slate-50 dark:bg-slate-900 p-6 sm:p-8 rounded-2xl border border-slate-200 dark:border-slate-800 space-y-6">
            <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-3">
              <span className="font-mono text-xs font-bold text-blue-600 dark:text-blue-400 uppercase">
                Monospace Font (Geist Mono)
              </span>
              <span className="font-mono text-xs text-slate-500 dark:text-slate-400">Code &amp; Data</span>
            </div>

            <div className="space-y-4 font-mono">
              <div>
                <span className="text-xs text-slate-400 dark:text-slate-500 block mb-1">Code Block</span>
                <div className="p-4 rounded-xl bg-slate-900 text-blue-400 text-xs leading-relaxed overflow-x-auto">
                  <code>{`const student = {\n  name: "Cyril Jhune C. Canabal",\n  course: "BS Information Technology",\n  year: 1,\n  school: "University of Makati"\n};`}</code>
                </div>
              </div>

              <div>
                <span className="text-xs text-slate-400 dark:text-slate-500 block mb-1">Inline Metadata</span>
                <div className="flex flex-wrap gap-2 text-xs">
                  <span className="px-2 py-1 rounded bg-blue-100 dark:bg-blue-950 text-blue-700 dark:text-blue-300 font-bold">
                    HTTP/2 200 OK
                  </span>
                  <span className="px-2 py-1 rounded bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
                    Next.js 15
                  </span>
                  <span className="px-2 py-1 rounded bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
                    Tailwind CSS
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
