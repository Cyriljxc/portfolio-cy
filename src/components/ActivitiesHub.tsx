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
    subtitle: "Interactive 12-Month Schedule",
    desc: "Single-month focused academic calendar with month-to-month arrow flipping, weekend indicators, and Tuesday Nov 11 class presentation highlight.",
    icon: Calendar,
    href: "/activities/calendar",
    badge: "Interactive UI"
  },
  {
    num: "02",
    title: "Resume",
    subtitle: "Academic Curriculum Vitae",
    desc: "Formal undergraduate student resume detailing BSIT education at UMak, programming languages, coursework projects, and technical skills.",
    icon: FileText,
    href: "/activities/resume",
    badge: "Career Document"
  },
  {
    num: "03",
    title: "Table",
    subtitle: "BSIT Curriculum Matrix",
    desc: "Clean data table displaying first-year BSIT subject codes, course descriptions, lecture/lab units, schedule timings, and grading rubrics.",
    icon: Table,
    href: "/activities/table",
    badge: "Data Structuring"
  },
  {
    num: "04",
    title: "Font & Text",
    subtitle: "Geist Typography Showcase",
    desc: "Exploration of typographic hierarchy, letter-spacing, line-heights, monospace code styling, and architectural font pairings.",
    icon: Type,
    href: "/activities/font-text",
    badge: "Typography"
  },
  {
    num: "05",
    title: "Layout",
    subtitle: "Grid & Flex Architecture",
    desc: "Demonstration of responsive layout systems, multi-column CSS grid distribution, and flexible card auto-wrapping without horizontal overflow.",
    icon: Layout,
    href: "/activities/layout-demo",
    badge: "Responsive System"
  },
  {
    num: "06",
    title: "Background",
    subtitle: "Surface Textures & Gradients",
    desc: "Study of architectural background surfaces, mesh gradients, subtle dot matrices, hairline dividers, and light theme contrast.",
    icon: Palette,
    href: "/activities/background",
    badge: "Visual Design"
  },
  {
    num: "07",
    title: "Logo",
    subtitle: "CJC Cyber Monogram Blueprint",
    desc: "Vector identity mark combining C, J, and C with computing node precision, squircle construction geometry, and multi-scale adaptations.",
    icon: Sparkles,
    href: "/activities/logo",
    badge: "Brand Identity"
  },
  {
    num: "08",
    title: "Frame",
    subtitle: "UI Containers & Cards",
    desc: "Architectural component frames, elevated cards, hairline borders, interactive focus outlines, and mobile-friendly containers.",
    icon: Box,
    href: "/activities/frame",
    badge: "Component UI"
  },
  {
    num: "09",
    title: "Buttons",
    subtitle: "Tactile Interactive States",
    desc: "Interactive button matrix featuring primary CTA, secondary outline, ghost buttons, icon pill triggers, and tactile press feedback.",
    icon: Square,
    href: "/activities/button",
    badge: "Micro-interactions"
  },
  {
    num: "10",
    title: "Draft",
    subtitle: "Architectural Wireframes",
    desc: "Preliminary structural drafts, wireframe sketches, layout planning, and computational design iteration documentation.",
    icon: Layers,
    href: "/activities/draft",
    badge: "System Design"
  }
];

export default function ActivitiesHub() {
  return (
    <section id="activities" className="w-full bg-white py-16 md:py-24 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Header */}
        <div className="space-y-3">
          <div className="inline-flex items-center gap-2 font-mono text-xs font-bold text-blue-600 uppercase tracking-widest">
            <Layers size={14} />
            <span>COURSE DIRECTORY // 10 LAB ACTIVITIES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight">
            ACTIVITIES DIRECTORY
          </h2>
          <p className="text-sm sm:text-base text-slate-600 font-sans max-w-2xl">
            Complete set of laboratory activities developed for Introduction to Computing at the University of Makati, showcasing progressive web development techniques and computing foundations.
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
                className="group relative bg-white rounded-2xl border border-slate-200 p-6 shadow-sm hover:shadow-md hover:border-blue-400 transition-all duration-300 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  {/* Top Bar: Number & Icon */}
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs font-black text-blue-600 bg-blue-50 border border-blue-200 px-2.5 py-1 rounded-md">
                      ACTIVITY {act.num}
                    </span>
                    <div className="p-2.5 rounded-xl bg-slate-50 text-slate-600 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                      <Icon size={18} />
                    </div>
                  </div>

                  {/* Title & Subtitle */}
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                      {act.title}
                    </h3>
                    <div className="text-xs font-mono text-slate-500 pt-0.5">
                      {act.subtitle}
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-slate-600 font-sans leading-relaxed line-clamp-3">
                    {act.desc}
                  </p>
                </div>

                {/* Card Bottom CTA */}
                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-mono font-semibold text-slate-700 group-hover:text-blue-600 transition-colors">
                  <span className="text-[11px] uppercase tracking-wider text-slate-400">
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
