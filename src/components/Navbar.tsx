"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import CjcLogo from "./CjcLogo";
import ThemeToggle from "./ThemeToggle";
import { ChevronDown, Menu, X, Calendar, FileText, Table, Type, Layout, Palette, Sparkles, Box, Square, Layers, ArrowUpRight } from "lucide-react";

const activities = [
  { href: "/activities/calendar", label: "01. Calendar", icon: Calendar, desc: "Academic Schedule" },
  { href: "/activities/resume", label: "02. Resume", icon: FileText, desc: "Education & Skills" },
  { href: "/activities/table", label: "03. Table", icon: Table, desc: "BSIT Subject Schedule" },
  { href: "/activities/font-text", label: "04. Font & Text", icon: Type, desc: "Typography Study" },
  { href: "/activities/layout-demo", label: "05. Layout", icon: Layout, desc: "Responsive Grid & Flex" },
  { href: "/activities/background", label: "06. Background", icon: Palette, desc: "Colors & Surfaces" },
  { href: "/activities/logo", label: "07. Logo", icon: Sparkles, desc: "Personal Monogram" },
  { href: "/activities/frame", label: "08. Frame", icon: Box, desc: "Containers & Cards" },
  { href: "/activities/button", label: "09. Buttons", icon: Square, desc: "Buttons & States" },
  { href: "/activities/draft", label: "10. Draft", icon: Layers, desc: "Wireframe Sketches" },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown on outside click
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="sticky top-0 z-50 w-full bg-white/90 dark:bg-slate-950/90 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
        {/* Brand Link */}
        <Link
          href="/"
          className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-blue-600 rounded-lg p-1"
        >
          <CjcLogo size={36} className="transition-transform group-hover:scale-105" />
          <div className="flex flex-col">
            <span className="font-mono text-xs sm:text-sm font-bold tracking-wider text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
              CYRIL JHUNE
            </span>
            <span className="text-[10px] font-mono tracking-widest text-slate-500 dark:text-slate-400 uppercase">
              BSIT // UMak
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1 font-mono text-xs font-semibold tracking-wider text-slate-600 dark:text-slate-300">
          <Link
            href="/#hero"
            className="px-3 py-2 rounded-lg hover:text-blue-600 dark:hover:text-blue-400 hover:bg-slate-100 dark:hover:bg-slate-900 transition-colors"
          >
            HOME
          </Link>
          <Link
            href="/#showcase"
            className="px-3 py-2 rounded-lg hover:text-blue-600 dark:hover:text-blue-400 hover:bg-slate-100 dark:hover:bg-slate-900 transition-colors"
          >
            PHOTOS &amp; VIDEOS
          </Link>
          <Link
            href="/activities/calendar"
            className="px-3 py-2 rounded-lg hover:text-blue-600 dark:hover:text-blue-400 hover:bg-slate-100 dark:hover:bg-slate-900 transition-colors"
          >
            CALENDAR
          </Link>
          <Link
            href="/activities/resume"
            className="px-3 py-2 rounded-lg hover:text-blue-600 dark:hover:text-blue-400 hover:bg-slate-100 dark:hover:bg-slate-900 transition-colors"
          >
            RESUME
          </Link>

          {/* Activities Dropdown */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="flex items-center gap-1.5 px-3 py-2 rounded-lg hover:text-blue-600 dark:hover:text-blue-400 hover:bg-slate-100 dark:hover:bg-slate-900 transition-colors focus:outline-none"
              aria-expanded={dropdownOpen}
            >
              <span>ACTIVITIES</span>
              <ChevronDown
                size={14}
                className={`transition-transform duration-200 ${dropdownOpen ? "rotate-180 text-blue-600 dark:text-blue-400" : ""}`}
              />
            </button>

            {dropdownOpen && (
              <div className="absolute right-0 mt-2 w-80 bg-white dark:bg-slate-900 rounded-xl shadow-xl border border-slate-200 dark:border-slate-800 py-2 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                <div className="px-4 py-2 border-b border-slate-100 dark:border-slate-800 text-[11px] font-mono text-slate-400 dark:text-slate-500 uppercase tracking-widest">
                  Class Activities (01 - 10)
                </div>
                <div className="max-h-[70vh] overflow-y-auto py-1">
                  {activities.map((act) => {
                    const Icon = act.icon;
                    return (
                      <Link
                        key={act.href}
                        href={act.href}
                        onClick={() => setDropdownOpen(false)}
                        className="flex items-start gap-3 px-4 py-2.5 hover:bg-slate-50 dark:hover:bg-slate-800/70 transition-colors group"
                      >
                        <div className="p-1.5 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                          <Icon size={14} />
                        </div>
                        <div>
                          <div className="text-xs font-bold text-slate-800 dark:text-slate-200 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                            {act.label}
                          </div>
                          <div className="text-[11px] text-slate-500 dark:text-slate-400 font-sans">{act.desc}</div>
                        </div>
                      </Link>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        </nav>

        {/* Header Right Actions */}
        <div className="flex items-center gap-2">
          {/* Light / Dark Mode Toggle */}
          <ThemeToggle />

          <Link
            href="/#contact"
            className="hidden sm:inline-flex items-center gap-1.5 bg-blue-600 hover:bg-blue-700 text-white font-mono text-xs font-bold px-4 py-2 rounded-xl shadow-sm transition-all hover:shadow active:scale-95"
          >
            <span>CONTACT</span>
            <ArrowUpRight size={14} />
          </Link>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-xl text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 px-4 pt-3 pb-6 space-y-4 animate-in fade-in slide-in-from-top-2 duration-150">
          <div className="flex items-center justify-between pb-2 border-b border-slate-100 dark:border-slate-800">
            <span className="font-mono text-xs text-slate-500 dark:text-slate-400 font-bold uppercase tracking-wider">
              Theme:
            </span>
            <ThemeToggle showLabel />
          </div>

          <div className="grid grid-cols-2 gap-2 font-mono text-xs font-semibold">
            <Link
              href="/#hero"
              onClick={() => setMobileMenuOpen(false)}
              className="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-900 hover:bg-blue-50 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-200 hover:text-blue-600 dark:hover:text-blue-400 border border-slate-200 dark:border-slate-800 text-center"
            >
              HOME
            </Link>
            <Link
              href="/#showcase"
              onClick={() => setMobileMenuOpen(false)}
              className="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-900 hover:bg-blue-50 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-200 hover:text-blue-600 dark:hover:text-blue-400 border border-slate-200 dark:border-slate-800 text-center"
            >
              PHOTOS &amp; VIDEOS
            </Link>
            <Link
              href="/activities/calendar"
              onClick={() => setMobileMenuOpen(false)}
              className="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-900 hover:bg-blue-50 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-200 hover:text-blue-600 dark:hover:text-blue-400 border border-slate-200 dark:border-slate-800 text-center"
            >
              CALENDAR
            </Link>
            <Link
              href="/activities/resume"
              onClick={() => setMobileMenuOpen(false)}
              className="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-900 hover:bg-blue-50 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-200 hover:text-blue-600 dark:hover:text-blue-400 border border-slate-200 dark:border-slate-800 text-center"
            >
              RESUME
            </Link>
          </div>

          <div className="pt-2">
            <div className="px-1 pb-2 text-[11px] font-mono uppercase tracking-wider text-slate-400 dark:text-slate-500 font-bold">
              Class Activities (01 - 10)
            </div>
            <div className="grid grid-cols-2 gap-1.5 max-h-56 overflow-y-auto">
              {activities.map((act) => (
                <Link
                  key={act.href}
                  href={act.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-2.5 py-2 text-xs font-medium text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-slate-50 dark:hover:bg-slate-900 rounded-lg border border-slate-100 dark:border-slate-800 transition-colors"
                >
                  {act.label}
                </Link>
              ))}
            </div>
          </div>

          <div className="pt-2">
            <Link
              href="/#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 bg-blue-600 text-white font-mono text-xs font-bold py-3 rounded-xl shadow-sm"
            >
              <span>CONTACT</span>
              <ArrowUpRight size={14} />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
