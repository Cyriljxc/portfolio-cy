import React from "react";
import ResumeSection from "@/components/ResumeSection";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata = {
  title: "Activity 02: Student Resume & CV — Cyril Jhune",
  description: "Comprehensive undergraduate resume detailing education, technical competencies, and academic coursework.",
};

export default function ResumePage() {
  return (
    <div className="py-8 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6">
        <Link
          href="/#activities"
          className="inline-flex items-center gap-2 text-xs font-mono font-bold text-slate-500 hover:text-blue-600 transition-colors"
        >
          <ArrowLeft size={14} />
          <span>BACK TO ACTIVITIES DIRECTORY</span>
        </Link>
      </div>
      <ResumeSection />
    </div>
  );
}
