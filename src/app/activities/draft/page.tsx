import React from "react";
import Link from "next/link";
import { ArrowLeft, Layers, CheckSquare } from "lucide-react";

export const metadata = {
  title: "Activity 10: Wireframes & Draft — Cyril Jhune",
  description: "Wireframe sketches and planning notes for the web portfolio.",
};

export default function DraftActivityPage() {
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
            <Layers size={14} />
            <span>ACTIVITY 10 • WIREFRAMES &amp; DRAFTS</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 dark:text-white tracking-tight">
            PORTFOLIO WIREFRAME &amp; DRAFT
          </h1>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 font-sans max-w-2xl">
            Initial layout planning notes, section wireframes, and design checklist for building this portfolio.
          </p>
        </div>

        {/* Wireframe Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Wireframe Outline */}
          <div className="bg-slate-50 dark:bg-slate-900 p-6 sm:p-8 rounded-2xl border border-slate-200 dark:border-slate-800 space-y-6">
            <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-3">
              <span className="font-mono text-xs font-bold text-blue-600 dark:text-blue-400 uppercase">
                Page Structure Outline
              </span>
              <span className="font-mono text-xs text-slate-500 dark:text-slate-400">Layout Plan</span>
            </div>

            <div className="space-y-3 text-xs font-mono">
              <div className="p-3 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex items-center justify-between">
                <span className="text-slate-900 dark:text-white font-bold">01. Sticky Header / Navbar</span>
                <span className="text-blue-600 dark:text-blue-400">Desktop + Mobile Drawer + Theme Toggle</span>
              </div>
              <div className="p-3 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex items-center justify-between">
                <span className="text-slate-900 dark:text-white font-bold">02. Hero Section</span>
                <span className="text-blue-600 dark:text-blue-400">Display Title, Bio, Student Portrait</span>
              </div>
              <div className="p-3 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex items-center justify-between">
                <span className="text-slate-900 dark:text-white font-bold">03. Photos &amp; Video Showcase</span>
                <span className="text-blue-600 dark:text-blue-400">Lightbox Gallery + 2 Video Reels</span>
              </div>
              <div className="p-3 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex items-center justify-between">
                <span className="text-slate-900 dark:text-white font-bold">04. Academic Calendar</span>
                <span className="text-blue-600 dark:text-blue-400">12 Months + Nov 11 Milestone</span>
              </div>
              <div className="p-3 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex items-center justify-between">
                <span className="text-slate-900 dark:text-white font-bold">05. Student Resume</span>
                <span className="text-blue-600 dark:text-blue-400">Education, Skills, Projects</span>
              </div>
              <div className="p-3 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex items-center justify-between">
                <span className="text-slate-900 dark:text-white font-bold">06. Activities Directory</span>
                <span className="text-blue-600 dark:text-blue-400">10 Lab Activities</span>
              </div>
              <div className="p-3 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex items-center justify-between">
                <span className="text-slate-900 dark:text-white font-bold">07. Contact &amp; Footer</span>
                <span className="text-blue-600 dark:text-blue-400">GitHub, Vercel, UMak CCIS</span>
              </div>
            </div>
          </div>

          {/* Implementation Checklist */}
          <div className="bg-slate-50 dark:bg-slate-900 p-6 sm:p-8 rounded-2xl border border-slate-200 dark:border-slate-800 space-y-6">
            <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-3">
              <span className="font-mono text-xs font-bold text-blue-600 dark:text-blue-400 uppercase">
                Technical Checklist
              </span>
              <span className="font-mono text-xs text-emerald-600 dark:text-emerald-400 font-bold">Completed</span>
            </div>

            <div className="space-y-3">
              {[
                "Next.js 15 App Router architecture with TypeScript",
                "Tailwind CSS styling with full Light and Dark mode toggle",
                "100% mobile responsive with zero horizontal overflow",
                "Interactive 12-month calendar highlighting Nov 11 Tuesday",
                "Lightbox photo modal and HTML5 community outreach video reels",
                "Pushed to GitHub under Cyriljxc/portfolio-cy",
                "Live production deployment on Vercel"
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-3 text-xs font-sans text-slate-700 dark:text-slate-300">
                  <CheckSquare size={16} className="text-emerald-600 dark:text-emerald-400 flex-shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
