import React from "react";
import Link from "next/link";
import { ArrowLeft, Type, Layers, Check } from "lucide-react";

export const metadata = {
  title: "Activity 04: Font & Text — Cyril Jhune",
  description: "Geist Typography showcase demonstrating hierarchical scales, letter-spacing, and font pairing architectures.",
};

export default function FontTextActivityPage() {
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
            <Type size={14} />
            <span>ACTIVITY 04 // TYPOGRAPHY &amp; HIERARCHY</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight">
            GEIST TYPOGRAPHIC SPECIFICATION
          </h1>
          <p className="text-sm sm:text-base text-slate-600 font-sans max-w-2xl">
            Exploration of modern architectural typography pairing Geist Sans for editorial readability and Geist Mono for precision computing metadata, tabular metrics, and code interfaces.
          </p>
        </div>

        {/* Font Pairings Showcase */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Geist Sans Card */}
          <div className="bg-slate-50 p-6 sm:p-8 rounded-2xl border border-slate-200 space-y-6">
            <div className="flex items-center justify-between border-b border-slate-200 pb-3">
              <span className="font-mono text-xs font-bold text-blue-600 uppercase">
                Primary Editorial Typeface
              </span>
              <span className="font-mono text-xs text-slate-500">Geist Sans</span>
            </div>

            <div className="space-y-4">
              <div>
                <span className="text-xs font-mono text-slate-400 block mb-1">Display Light (300)</span>
                <div className="text-4xl sm:text-5xl font-light text-slate-900">
                  Architectural Computing
                </div>
              </div>

              <div>
                <span className="text-xs font-mono text-slate-400 block mb-1">Heading Bold (700)</span>
                <div className="text-2xl sm:text-3xl font-bold text-slate-900">
                  Precision Software Systems
                </div>
              </div>

              <div>
                <span className="text-xs font-mono text-slate-400 block mb-1">Body Regular (400)</span>
                <p className="text-sm text-slate-600 leading-relaxed font-sans">
                  The quick brown fox jumps over the lazy dog. Designed by Vercel for high-legibility user interfaces, dense analytical dashboards, and modern technical documentation.
                </p>
              </div>
            </div>
          </div>

          {/* Geist Mono Card */}
          <div className="bg-slate-50 p-6 sm:p-8 rounded-2xl border border-slate-200 space-y-6">
            <div className="flex items-center justify-between border-b border-slate-200 pb-3">
              <span className="font-mono text-xs font-bold text-blue-600 uppercase">
                Monospace Engineering Typeface
              </span>
              <span className="font-mono text-xs text-slate-500">Geist Mono</span>
            </div>

            <div className="space-y-4 font-mono">
              <div>
                <span className="text-xs text-slate-400 block mb-1">Mono Header (Bold 700)</span>
                <div className="text-xl sm:text-2xl font-bold text-slate-900 tracking-wider">
                  01 // INTCOMP_2026.TSX
                </div>
              </div>

              <div>
                <span className="text-xs text-slate-400 block mb-1">Code Snippet Execution</span>
                <div className="p-4 rounded-xl bg-slate-900 text-blue-400 text-xs leading-relaxed overflow-x-auto">
                  <code>
                    const student = &#123;<br />
                    &nbsp;&nbsp;name: &quot;Cyril Jhune C. Canabal&quot;,<br />
                    &nbsp;&nbsp;course: &quot;BSIT&quot;,<br />
                    &nbsp;&nbsp;campus: &quot;University of Makati&quot;,<br />
                    &nbsp;&nbsp;status: &quot;Enrolled&quot;<br />
                    &#125;;
                  </code>
                </div>
              </div>

              <div>
                <span className="text-xs text-slate-400 block mb-1">Tabular Data Figures</span>
                <div className="text-sm font-semibold text-slate-700 tracking-widest">
                  128.001.2026 // 09:41:22 UTC
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Letter Spacing & Weight Scale Card */}
        <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm space-y-6">
          <h3 className="font-mono text-sm font-bold text-slate-900 uppercase tracking-wider border-b border-slate-100 pb-3">
            Letter Spacing &amp; Tracking Hierarchy
          </h3>

          <div className="space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 p-3 rounded-lg bg-slate-50">
              <span className="font-mono text-xs text-slate-400">tracking-tighter (-0.05em)</span>
              <span className="text-2xl font-black text-slate-900 tracking-tighter">
                PORTFOLIO ARCHITECTURE
              </span>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 p-3 rounded-lg bg-slate-50">
              <span className="font-mono text-xs text-slate-400">tracking-normal (0em)</span>
              <span className="text-xl font-medium text-slate-800">
                Introduction to Computing at University of Makati
              </span>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 p-3 rounded-lg bg-slate-50">
              <span className="font-mono text-xs text-slate-400">tracking-widest (+0.1em)</span>
              <span className="text-sm font-mono font-bold text-blue-600 tracking-widest uppercase">
                FIRST-YEAR BSIT STUDENT // SECTION CYRIL
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
