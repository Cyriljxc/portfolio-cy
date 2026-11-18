import React from "react";
import { FileText, GraduationCap, Briefcase, Code, Mail, MapPin, Download } from "lucide-react";

export default function ResumeSection() {
  return (
    <section id="resume" className="w-full bg-slate-50 dark:bg-slate-900/40 py-16 md:py-24 border-b border-slate-200 dark:border-slate-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-slate-200 dark:border-slate-800 pb-6">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 font-mono text-xs font-bold text-blue-600 dark:text-blue-400 uppercase tracking-widest">
              <FileText size={14} />
              <span>STUDENT RESUME</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 dark:text-white tracking-tight">
              EDUCATION &amp; SKILLS
            </h2>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 font-sans max-w-2xl">
              Educational background, technical skills, and coursework projects of Cyril Jhune C. Canabal at the University of Makati.
            </p>
          </div>

          <a
            href="javascript:window.print()"
            className="inline-flex items-center gap-2 bg-white dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-700 px-4 py-2.5 rounded-xl font-mono text-xs font-bold shadow-sm transition-all"
          >
            <Download size={14} className="text-blue-600 dark:text-blue-400" />
            <span>PRINT / SAVE PDF</span>
          </a>
        </div>

        {/* Resume Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Column (4 cols): Bio & Skills */}
          <div className="lg:col-span-4 space-y-6">
            {/* Identity Card */}
            <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
              <div className="space-y-1">
                <h3 className="font-mono text-lg font-bold text-slate-900 dark:text-white">
                  Cyril Jhune C. Canabal
                </h3>
                <p className="text-xs font-mono text-blue-600 dark:text-blue-400 font-semibold uppercase">
                  First-Year BSIT Student
                </p>
                <p className="text-xs text-slate-500 dark:text-slate-400 font-sans">
                  University of Makati • CCIS
                </p>
              </div>

              <div className="pt-3 border-t border-slate-100 dark:border-slate-800 space-y-2.5 text-xs text-slate-600 dark:text-slate-300 font-sans">
                <div className="flex items-center gap-2.5">
                  <MapPin size={14} className="text-blue-600 dark:text-blue-400 flex-shrink-0" />
                  <span>Brgy. Olympia, Makati City</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Mail size={14} className="text-blue-600 dark:text-blue-400 flex-shrink-0" />
                  <span className="font-mono text-[11px]">canabalcyriljhune@gmail.com</span>
                </div>
              </div>
            </div>

            {/* Technical Skills Card */}
            <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
              <div className="flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-800 pb-3">
                <Code size={16} className="text-blue-600 dark:text-blue-400" />
                <span>Skills &amp; Technologies</span>
              </div>

              <div className="space-y-4">
                <div>
                  <div className="text-[11px] font-mono text-slate-400 dark:text-slate-500 font-bold uppercase mb-1.5">
                    Web &amp; Frontend
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {["HTML5", "CSS3", "JavaScript", "TypeScript", "React", "Next.js", "Tailwind CSS"].map((skill) => (
                      <span key={skill} className="px-2.5 py-1 rounded-lg bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 font-mono text-xs font-semibold border border-blue-200 dark:border-blue-900">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <div className="text-[11px] font-mono text-slate-400 dark:text-slate-500 font-bold uppercase mb-1.5">
                    Programming &amp; Tools
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {["Programming Logic", "Data Structures", "Git", "GitHub", "VS Code"].map((skill) => (
                      <span key={skill} className="px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-mono text-xs font-medium border border-slate-200 dark:border-slate-700">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <div className="text-[11px] font-mono text-slate-400 dark:text-slate-500 font-bold uppercase mb-1.5">
                    Design &amp; Media
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {["Figma", "UI/UX Design", "Video Editing", "Canva"].map((skill) => (
                      <span key={skill} className="px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-mono text-xs font-medium border border-slate-200 dark:border-slate-700">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column (8 cols): Education & Projects */}
          <div className="lg:col-span-8 space-y-6">
            {/* Education Section */}
            <div className="bg-white dark:bg-slate-900 p-6 sm:p-8 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-6">
              <div className="flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-800 pb-3">
                <GraduationCap size={18} className="text-blue-600 dark:text-blue-400" />
                <span>Education</span>
              </div>

              <div className="space-y-6">
                {/* College */}
                <div className="relative pl-6 border-l-2 border-blue-600 dark:border-blue-500 space-y-1.5">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                    <h4 className="text-base font-bold text-slate-900 dark:text-white">
                      Bachelor of Science in Information Technology (BSIT)
                    </h4>
                    <span className="font-mono text-xs font-semibold text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/60 px-2.5 py-0.5 rounded-full border border-blue-200 dark:border-blue-900 w-fit">
                      2025 — Present
                    </span>
                  </div>
                  <div className="text-xs font-mono text-slate-600 dark:text-slate-400 font-semibold">
                    University of Makati (UMak) • College of Computing and Information Sciences
                  </div>
                  <p className="text-xs text-slate-500 dark:text-slate-400 font-sans leading-relaxed pt-1">
                    Undergraduate coursework includes Introduction to Computing, Computer Programming, Web Development, and Discrete Mathematics.
                  </p>
                </div>

                {/* Senior High School */}
                <div className="relative pl-6 border-l-2 border-slate-300 dark:border-slate-700 space-y-1.5">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                    <h4 className="text-base font-bold text-slate-900 dark:text-white">
                      Senior High School — TVL Information &amp; Communications Technology
                    </h4>
                    <span className="font-mono text-xs text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-800 px-2.5 py-0.5 rounded-full border border-slate-200 dark:border-slate-700 w-fit">
                      Graduated 2025
                    </span>
                  </div>
                  <div className="text-xs font-mono text-slate-600 dark:text-slate-400 font-semibold">
                    Computer Programming Strand
                  </div>
                  <p className="text-xs text-slate-500 dark:text-slate-400 font-sans leading-relaxed pt-1">
                    Focus on foundational software development, markup languages, programming logic, and computer fundamentals.
                  </p>
                </div>
              </div>
            </div>

            {/* Coursework & Projects */}
            <div className="bg-white dark:bg-slate-900 p-6 sm:p-8 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-6">
              <div className="flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-800 pb-3">
                <Briefcase size={18} className="text-blue-600 dark:text-blue-400" />
                <span>Featured Class Projects</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 space-y-2">
                  <div className="font-bold text-sm text-slate-900 dark:text-white">
                    Personal Web Portfolio
                  </div>
                  <p className="text-xs text-slate-500 dark:text-slate-400 font-sans leading-relaxed">
                    Interactive responsive portfolio built with Next.js, TypeScript, and Tailwind CSS with dark mode and mobile responsiveness.
                  </p>
                  <div className="font-mono text-[11px] text-blue-600 dark:text-blue-400 font-semibold">
                    Next.js • React • Tailwind CSS
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 space-y-2">
                  <div className="font-bold text-sm text-slate-900 dark:text-white">
                    Community Outreach Video Reels
                  </div>
                  <p className="text-xs text-slate-500 dark:text-slate-400 font-sans leading-relaxed">
                    Short-form video documentation of our student volunteer mission and youth engagement activities.
                  </p>
                  <div className="font-mono text-[11px] text-blue-600 dark:text-blue-400 font-semibold">
                    Video Production • HTML5 Video
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 space-y-2">
                  <div className="font-bold text-sm text-slate-900 dark:text-white">
                    CJC Monogram Logo Design
                  </div>
                  <p className="text-xs text-slate-500 dark:text-slate-400 font-sans leading-relaxed">
                    Personal identity vector mark designed with clean geometric shapes for web and digital profiles.
                  </p>
                  <div className="font-mono text-[11px] text-blue-600 dark:text-blue-400 font-semibold">
                    Vector Graphic Design • SVG
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 space-y-2">
                  <div className="font-bold text-sm text-slate-900 dark:text-white">
                    BSIT Curriculum Schedule Table
                  </div>
                  <p className="text-xs text-slate-500 dark:text-slate-400 font-sans leading-relaxed">
                    Clean semantic table listing first-year course subjects, unit credits, and schedules.
                  </p>
                  <div className="font-mono text-[11px] text-blue-600 dark:text-blue-400 font-semibold">
                    Semantic HTML • Responsive Table
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
