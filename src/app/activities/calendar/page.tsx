import React from "react";
import InteractiveCalendar from "@/components/InteractiveCalendar";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata = {
  title: "Activity 01: Interactive Academic Calendar — Cyril Jhune",
  description: "2026 Academic schedule with 12-month navigation, weekend indicators, and INTCOMP presentation date.",
};

export default function CalendarPage() {
  return (
    <div className="py-8 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6">
        <Link
          href="/#activities"
          className="inline-flex items-center gap-2 text-xs font-mono font-bold text-slate-500 hover:text-blue-600 transition-colors"
        >
          <ArrowLeft size={14} />
          <span>BACK TO ACTIVITIES DIRECTORY</span>
        </Link>
      </div>
      <InteractiveCalendar />
    </div>
  );
}
