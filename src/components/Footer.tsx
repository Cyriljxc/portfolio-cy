import React from "react";
import Link from "next/link";
import CjcLogo from "./CjcLogo";
import { ArrowUp } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full bg-slate-50 border-t border-slate-200 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand Info */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-3">
              <CjcLogo size={32} />
              <span className="font-mono text-sm font-bold tracking-wider text-slate-900">
                CYRIL JHUNE C. CANABAL
              </span>
            </Link>
            <p className="text-xs text-slate-500 leading-relaxed font-sans">
              First-year BS Information Technology student at the University of Makati. Focused on modern web development, software engineering, and computational logic.
            </p>
            <div className="font-mono text-[11px] text-blue-600 font-semibold">
              UMak College of Computing and Information Sciences
            </div>
          </div>

          {/* Column 1: Main Sections */}
          <div className="space-y-3">
            <div className="font-mono text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-200 pb-2">
              Main Sections
            </div>
            <ul className="space-y-2 text-xs font-medium text-slate-600">
              <li>
                <Link href="/#hero" className="hover:text-blue-600 transition-colors">
                  Home Overview
                </Link>
              </li>
              <li>
                <Link href="/#showcase" className="hover:text-blue-600 transition-colors">
                  Photo & Video Showcase
                </Link>
              </li>
              <li>
                <Link href="/activities/calendar" className="hover:text-blue-600 transition-colors">
                  Academic Calendar
                </Link>
              </li>
              <li>
                <Link href="/activities/resume" className="hover:text-blue-600 transition-colors">
                  Professional Resume
                </Link>
              </li>
              <li>
                <Link href="/#contact" className="hover:text-blue-600 transition-colors">
                  Contact Information
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 2: Activities 01 - 05 */}
          <div className="space-y-3">
            <div className="font-mono text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-200 pb-2">
              Activities 01 - 05
            </div>
            <ul className="space-y-2 text-xs font-medium text-slate-600">
              <li>
                <Link href="/activities/calendar" className="hover:text-blue-600 transition-colors">
                  01. Interactive Calendar
                </Link>
              </li>
              <li>
                <Link href="/activities/resume" className="hover:text-blue-600 transition-colors">
                  02. Student Resume
                </Link>
              </li>
              <li>
                <Link href="/activities/table" className="hover:text-blue-600 transition-colors">
                  03. Curriculum Table
                </Link>
              </li>
              <li>
                <Link href="/activities/font-text" className="hover:text-blue-600 transition-colors">
                  04. Typography & Font Text
                </Link>
              </li>
              <li>
                <Link href="/activities/layout-demo" className="hover:text-blue-600 transition-colors">
                  05. Grid Layout System
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Activities 06 - 10 */}
          <div className="space-y-3">
            <div className="font-mono text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-200 pb-2">
              Activities 06 - 10
            </div>
            <ul className="space-y-2 text-xs font-medium text-slate-600">
              <li>
                <Link href="/activities/background" className="hover:text-blue-600 transition-colors">
                  06. Background Surfaces
                </Link>
              </li>
              <li>
                <Link href="/activities/logo" className="hover:text-blue-600 transition-colors">
                  07. CJC Cyber Monogram
                </Link>
              </li>
              <li>
                <Link href="/activities/frame" className="hover:text-blue-600 transition-colors">
                  08. Frame & Containers
                </Link>
              </li>
              <li>
                <Link href="/activities/button" className="hover:text-blue-600 transition-colors">
                  09. Buttons & Interactive States
                </Link>
              </li>
              <li>
                <Link href="/activities/draft" className="hover:text-blue-600 transition-colors">
                  10. Wireframes & Draft
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-500">
          <div>
            &copy; {new Date().getFullYear()} Cyril Jhune C. Canabal. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <span>Built with Next.js 15 & Tailwind CSS</span>
            <a
              href="#hero"
              className="inline-flex items-center gap-1.5 text-blue-600 hover:text-blue-800 transition-colors"
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
