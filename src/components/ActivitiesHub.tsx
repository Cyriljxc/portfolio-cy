import React from "react";
import Link from "next/link";
import {
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
  ArrowRight
} from "lucide-react";

const allActivities = [
  {
    num: "01",
    title: "Calendar",
    subtitle: "2026 Academic Calendar",
    desc: "12-month calendar with month-to-month navigation, weekend indicators, and November 11 presentation milestone.",
    icon: Calendar,
    href: "/activities/calendar",
    badge: "Calendar"
  },
  {
    num: "02",
    title: "Resume",
    subtitle: "Student Curriculum Vitae",
    desc: "First-year student resume with educational background, technical skills, and coursework projects.",
    icon: FileText,
    href: "/activities/resume",
    badge: "Resume"
  },
  {
    num: "03",
    title: "Table",
    subtitle: "Curriculum Schedule Table",
    desc: "Clean semantic table showing first-year BSIT subjects, lecture and lab units, and schedule details.",
    icon: Table,
    href: "/activities/table",
    badge: "Data Table"
  },
  {
    num: "04",
    title: "Font & Text",
    subtitle: "Typography Showcase",
    desc: "Study of headings, body typography, letter-spacing, line-heights, and monospace code blocks.",
    icon: Type,
    href: "/activities/font-text",
    badge: "Typography"
  },
  {
    num: "05",
    title: "Layout",
    subtitle: "Grid & Flexbox Demo",
    desc: "Responsive multi-column CSS Grid and Flexbox card layouts that wrap cleanly on mobile screens.",
    icon: Layout,
    href: "/activities/layout-demo",
    badge: "Layout"
  },
  {
    num: "06",
    title: "Background",
    subtitle: "Colors & Surfaces",
    desc: "Clean background textures, subtle grid patterns, and light/dark theme contrast palettes.",
    icon: Palette,
    href: "/activities/background",
    badge: "Styling"
  },
  {
    num: "07",
    title: "Logo",
    subtitle: "CJC Monogram Design",
    desc: "Vector initials logo combining C and J with clean geometric lines for personal branding.",
    icon: Sparkles,
    href: "/activities/logo",
    badge: "Design"
  },
  {
    num: "08",
    title: "Frame",
    subtitle: "Card & Container UI",
    desc: "Modular UI card containers, rounded borders, subtle shadows, and content cards.",
    icon: Box,
    href: "/activities/frame",
    badge: "Components"
  },
  {
    num: "09",
    title: "Buttons",
    subtitle: "Interactive Button States",
    desc: "Primary, secondary, outline, and ghost button styles with hover and focus effects.",
    icon: Square,
    href: "/activities/button",
    badge: "Interactive"
  },
  {
    num: "10",
    title: "Draft",
    subtitle: "Wireframe Notes & Ideas",
    desc: "Preliminary wireframe sketches, layout planning notes, and design iteration ideas.",
    icon: Layers,
    href: "/activities/draft",
    badge: "Wireframes"
  }
];

export default function ActivitiesHub() {
  return (
    <section id="activities" className="w-full bg-white dark:bg-slate-950 py-16 md:py-24 border-b border-slate-200 dark:border-slate-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Header */}
        <div className="space-y-3">
          <div className="inline-flex items-center gap-2 font-mono text-xs font-bold text-blue-600 dark:text-blue-400 uppercase tracking-widest">
            <Layers size={14} />
            <span>COURSE ACTIVITIES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 dark:text-white tracking-tight">
            LAB ACTIVITIES DIRECTORY
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 font-sans max-w-2xl">
            10 laboratory activities developed for Introduction to Computing at the University of Makati.
          </p>
        </div>

        {/* 10-Card Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {allActivities.map((act) => {
            const Icon = act.icon;
            return (
              <Link
                key={act.num}
                href={act.href}
                className="group relative bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 shadow-sm hover:shadow-md hover:border-blue-400 dark:hover:border-blue-500 transition-all duration-300 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  {/* Top Bar: Number & Icon */}
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs font-black text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/60 border border-blue-200 dark:border-blue-900 px-2.5 py-1 rounded-lg">
                      ACTIVITY {act.num}
                    </span>
                    <div className="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 text-slate-600 dark:text-slate-400 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                      <Icon size={18} />
                    </div>
                  </div>

                  {/* Title & Subtitle */}
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {act.title}
                    </h3>
                    <div className="text-xs font-mono text-slate-500 dark:text-slate-400 pt-0.5">
                      {act.subtitle}
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 font-sans leading-relaxed line-clamp-3">
                    {act.desc}
                  </p>
                </div>

                {/* Card Bottom CTA */}
                <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs font-mono font-semibold text-slate-700 dark:text-slate-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  <span className="text-[11px] uppercase tracking-wider text-slate-400 dark:text-slate-500">
                    {act.badge}
                  </span>
                  <div className="flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                    <span>View Activity</span>
                    <ArrowRight size={14} />
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
