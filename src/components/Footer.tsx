import React from "react";
import Link from "next/link";
import CjcLogo from "./CjcLogo";
import { ArrowUp } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full bg-slate-50 dark:bg-slate-900/60 border-t border-slate-200 dark:border-slate-800 mt-20 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand Info */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-3">
              <CjcLogo size={32} />
              <span className="font-mono text-sm font-bold tracking-wider text-slate-900 dark:text-white">
                CYRIL JHUNE C. CANABAL
              </span>
            </Link>
            <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed font-sans">
              First-year BS Information Technology student at the University of Makati.
            </p>
            <div className="font-mono text-[11px] text-blue-600 dark:text-blue-400 font-semibold">
              UMak College of Computing and Information Sciences
            </div>
          </div>

          {/* Column 1: Main Sections */}
          <div className="space-y-3">
            <div className="font-mono text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white border-b border-slate-200 dark:border-slate-800 pb-2">
              Main Sections
            </div>
            <ul className="space-y-2 text-xs font-medium text-slate-600 dark:text-slate-400">
              <li>
                <Link href="/#hero" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/#showcase" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  Photos &amp; Videos
                </Link>
              </li>
              <li>
                <Link href="/activities/calendar" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  Academic Calendar
                </Link>
              </li>
              <li>
                <Link href="/activities/resume" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  Student Resume
                </Link>
              </li>
              <li>
                <Link href="/#contact" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 2: Activities 01 - 05 */}
          <div className="space-y-3">
            <div className="font-mono text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white border-b border-slate-200 dark:border-slate-800 pb-2">
              Activities 01 - 05
            </div>
            <ul className="space-y-2 text-xs font-medium text-slate-600 dark:text-slate-400">
              <li>
                <Link href="/activities/calendar" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  01. Calendar
                </Link>
              </li>
              <li>
                <Link href="/activities/resume" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  02. Resume
                </Link>
              </li>
              <li>
                <Link href="/activities/table" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  03. Schedule Table
                </Link>
              </li>
              <li>
                <Link href="/activities/font-text" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  04. Font &amp; Text
                </Link>
              </li>
              <li>
                <Link href="/activities/layout-demo" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  05. Layout Grid
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Activities 06 - 10 */}
          <div className="space-y-3">
            <div className="font-mono text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white border-b border-slate-200 dark:border-slate-800 pb-2">
              Activities 06 - 10
            </div>
            <ul className="space-y-2 text-xs font-medium text-slate-600 dark:text-slate-400">
              <li>
                <Link href="/activities/background" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  06. Backgrounds
                </Link>
              </li>
              <li>
                <Link href="/activities/logo" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  07. Logo Design
                </Link>
              </li>
              <li>
                <Link href="/activities/frame" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  08. UI Frames
                </Link>
              </li>
              <li>
                <Link href="/activities/button" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  09. Buttons &amp; States
                </Link>
              </li>
              <li>
                <Link href="/activities/draft" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  10. Wireframe Drafts
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-500 dark:text-slate-400">
          <div>
            &copy; {new Date().getFullYear()} Cyril Jhune C. Canabal. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <span>Next.js &amp; Tailwind CSS</span>
            <a
              href="#hero"
              className="inline-flex items-center gap-1.5 text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors"
            >
              <span>Back to top</span>
              <ArrowUp size={14} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
