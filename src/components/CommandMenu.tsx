"use client";

import React, { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import {
  Search,
  Calendar,
  FileText,
  Table,
  Type,
  Layout,
  Palette,
  Sparkles,
  Box,
  Square,
  Layers,
  Sun,
  Moon,
  Globe,
  ArrowRight,
  X,
  Compass,
  Home,
  Camera,
  Code
} from "lucide-react";
import { useTheme } from "./ThemeProvider";

function GithubIcon({ size = 16, className = "" }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

interface CommandItem {
  id: string;
  title: string;
  category: "Activities" | "Navigation" | "Actions";
  href?: string;
  icon: React.ComponentType<{ size?: number; className?: string }>;
  action?: () => void;
}

export default function CommandMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();
  const { theme, toggleTheme } = useTheme();

  const items: CommandItem[] = [
    // Navigation
    { id: "nav-home", title: "Home Overview", category: "Navigation", href: "/#hero", icon: Home },
    { id: "nav-media", title: "Photos & Video Showcase", category: "Navigation", href: "/#showcase", icon: Camera },
    { id: "nav-cal", title: "2026 Academic Calendar", category: "Navigation", href: "/activities/calendar", icon: Calendar },
    { id: "nav-resume", title: "Student Resume", category: "Navigation", href: "/activities/resume", icon: FileText },
    { id: "nav-contact", title: "Get in Touch", category: "Navigation", href: "/#contact", icon: Compass },

    // Activities
    { id: "act-1", title: "Activity 01: Calendar (Nov 11 Presentation)", category: "Activities", href: "/activities/calendar", icon: Calendar },
    { id: "act-2", title: "Activity 02: Student Resume & Skills", category: "Activities", href: "/activities/resume", icon: FileText },
    { id: "act-3", title: "Activity 03: BSIT Schedule & Grades Table", category: "Activities", href: "/activities/table", icon: Table },
    { id: "act-4", title: "Activity 04: Typography & Font Text", category: "Activities", href: "/activities/font-text", icon: Type },
    { id: "act-5", title: "Activity 05: CSS Grid & Flexbox Layout", category: "Activities", href: "/activities/layout-demo", icon: Layout },
    { id: "act-6", title: "Activity 06: Background & Color Surfaces", category: "Activities", href: "/activities/background", icon: Palette },
    { id: "act-7", title: "Activity 07: CJC Monogram Logo Design", category: "Activities", href: "/activities/logo", icon: Sparkles },
    { id: "act-8", title: "Activity 08: UI Containers & Cards Frame", category: "Activities", href: "/activities/frame", icon: Box },
    { id: "act-9", title: "Activity 09: Buttons & Interactive States", category: "Activities", href: "/activities/button", icon: Square },
    { id: "act-10", title: "Activity 10: Wireframes & Planning Draft", category: "Activities", href: "/activities/draft", icon: Layers },

    // Actions
    {
      id: "act-toggle",
      title: theme === "dark" ? "Switch to Light Mode" : "Switch to Dark Mode",
      category: "Actions",
      icon: theme === "dark" ? Sun : Moon,
      action: () => toggleTheme(),
    },
    {
      id: "act-gh",
      title: "View GitHub Profile (Cyriljxc)",
      category: "Actions",
      icon: GithubIcon,
      action: () => window.open("https://github.com/Cyriljxc", "_blank"),
    },
    {
      id: "act-vercel",
      title: "View Vercel Workspace",
      category: "Actions",
      icon: Globe,
      action: () => window.open("https://vercel.com/canabalcyriljhune-7338", "_blank"),
    },
  ];

  const filtered = items.filter((item) =>
    item.title.toLowerCase().includes(search.toLowerCase())
  );

  // Keyboard shortcut listener (Cmd+K / Ctrl+K)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setIsOpen((prev) => !prev);
      }
      if (e.key === "Escape") {
        setIsOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Auto-focus input on open
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
      setSelectedIndex(0);
    } else {
      setSearch("");
    }
  }, [isOpen]);

  // Handle Enter / Arrow navigation
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setSelectedIndex((prev) => (prev + 1) % (filtered.length || 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setSelectedIndex((prev) => (prev - 1 + filtered.length) % (filtered.length || 1));
    } else if (e.key === "Enter" && filtered[selectedIndex]) {
      e.preventDefault();
      execute(filtered[selectedIndex]);
    }
  };

  const execute = (item: CommandItem) => {
    setIsOpen(false);
    if (item.action) {
      item.action();
    } else if (item.href) {
      router.push(item.href);
    }
  };

  return (
    <>
      {/* Trigger Button in Navbar */}
      <button
        onClick={() => setIsOpen(true)}
        aria-label="Search activities and pages"
        title="Quick search (Ctrl+K / Cmd+K)"
        className="flex items-center gap-2 h-9 px-2.5 sm:px-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-100/80 dark:bg-slate-900/80 hover:bg-slate-200/70 dark:hover:bg-slate-800 text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-all text-xs font-mono"
      >
        <Search size={14} className="text-blue-600 dark:text-blue-400" />
        <span className="hidden sm:inline text-slate-600 dark:text-slate-400">Search</span>
        <kbd className="hidden sm:inline-block px-1.5 py-0.5 rounded bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-[10px] font-bold text-slate-500 dark:text-slate-400 shadow-2xs">
          ⌘K
        </kbd>
      </button>

      {/* Modal Backdrop & Dialog */}
      {isOpen && (
        <div
          className="fixed inset-0 z-50 bg-slate-950/70 backdrop-blur-sm flex items-start justify-center pt-16 sm:pt-24 px-4 animate-in fade-in duration-150"
          onClick={() => setIsOpen(false)}
        >
          <div
            className="relative w-full max-w-lg bg-white dark:bg-slate-900 rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-800 overflow-hidden animate-in zoom-in-95 duration-150"
            onClick={(e) => e.stopPropagation()}
            onKeyDown={handleKeyDown}
          >
            {/* Input Header */}
            <div className="flex items-center gap-3 px-4 py-3.5 border-b border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/50">
              <Search size={18} className="text-blue-600 dark:text-blue-400 flex-shrink-0" />
              <input
                ref={inputRef}
                value={search}
                onChange={(e) => {
                  setSearch(e.target.value);
                  setSelectedIndex(0);
                }}
                placeholder="Search activities, sections, or actions..."
                className="w-full bg-transparent text-sm text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:outline-none font-sans"
              />
              <button
                onClick={() => setIsOpen(false)}
                className="p-1 rounded-lg text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
                aria-label="Close"
              >
                <X size={16} />
              </button>
            </div>

            {/* Results List */}
            <div className="max-h-80 overflow-y-auto p-2 space-y-1">
              {filtered.length === 0 ? (
                <div className="p-8 text-center text-xs font-mono text-slate-400">
                  No matching results found for &quot;{search}&quot;
                </div>
              ) : (
                filtered.map((item, idx) => {
                  const Icon = item.icon;
                  const isSelected = idx === selectedIndex;
                  return (
                    <button
                      key={item.id}
                      onClick={() => execute(item)}
                      onMouseEnter={() => setSelectedIndex(idx)}
                      className={`w-full flex items-center justify-between p-3 rounded-xl text-left transition-colors text-xs ${
                        isSelected
                          ? "bg-blue-50 dark:bg-blue-950/60 text-blue-900 dark:text-blue-100"
                          : "hover:bg-slate-50 dark:hover:bg-slate-800/60 text-slate-700 dark:text-slate-300"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div
                          className={`p-2 rounded-lg ${
                            isSelected
                              ? "bg-blue-600 text-white"
                              : "bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400"
                          }`}
                        >
                          <Icon size={14} />
                        </div>
                        <div>
                          <div className="font-semibold text-slate-900 dark:text-white">
                            {item.title}
                          </div>
                          <div className="text-[10px] font-mono text-slate-400 dark:text-slate-500">
                            {item.category}
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center gap-1 text-slate-400">
                        {isSelected && <ArrowRight size={14} className="text-blue-600 dark:text-blue-400" />}
                      </div>
                    </button>
                  );
                })
              )}
            </div>

            {/* Command Menu Footer */}
            <div className="px-4 py-2.5 bg-slate-50 dark:bg-slate-950 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-[11px] font-mono text-slate-400 dark:text-slate-500">
              <div className="flex items-center gap-2">
                <span>Navigate: ↑ ↓</span>
                <span>Select: ↵</span>
                <span>Close: Esc</span>
              </div>
              <span className="text-blue-600 dark:text-blue-400 font-semibold">Cyril Portfolio</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
