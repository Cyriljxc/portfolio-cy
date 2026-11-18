import React from "react";
import ResumeSection from "@/components/ResumeSection";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata = {
  title: "Activity 02: Student Resume — Cyril Jhune",
  description: "Official student resume of Cyril Jhune C. Canabal, First-Year BSIT at the University of Makati.",
};

export default function ResumePage() {
  return (
    <div className="py-8 bg-white dark:bg-slate-950 min-h-screen transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6">
        <Link
          href="/#activities"
          className="inline-flex items-center gap-2 text-xs font-mono font-bold text-slate-500 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
        >
          <ArrowLeft size={14} />
          <span>BACK TO ACTIVITIES</span>
        </Link>
      </div>
      <ResumeSection />
    </div>
  );
}
