import React from "react";
import { FileText, GraduationCap, Briefcase, Award, CheckCircle, Code, Layers, Mail, Phone, MapPin, Download } from "lucide-react";

export default function ResumeSection() {
  return (
    <section id="resume" className="w-full bg-slate-50 py-16 md:py-24 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-slate-200 pb-6">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 font-mono text-xs font-bold text-blue-600 uppercase tracking-widest">
              <FileText size={14} />
              <span>ACTIVITY 02 // CURRICULUM VITAE</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight">
              STUDENT RESUME
            </h2>
            <p className="text-sm sm:text-base text-slate-600 font-sans max-w-2xl">
              Comprehensive academic record, programming competency, coursework projects, and technical skills of Cyril Jhune C. Canabal at the University of Makati.
            </p>
          </div>

          <a
            href="javascript:window.print()"
            className="inline-flex items-center gap-2 bg-white hover:bg-slate-100 text-slate-800 border border-slate-200 px-4 py-2.5 rounded-xl font-mono text-xs font-bold shadow-2xs transition-all hover:border-slate-300"
          >
            <Download size={14} className="text-blue-600" />
            <span>PRINT / SAVE PDF</span>
          </a>
        </div>

        {/* Resume Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Column (4 cols): Bio & Skills */}
          <div className="lg:col-span-4 space-y-6">
            {/* Identity Card */}
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
              <div className="space-y-1">
                <h3 className="font-mono text-lg font-bold text-slate-900">
                  Cyril Jhune C. Canabal
                </h3>
                <p className="text-xs font-mono text-blue-600 font-semibold uppercase">
                  First-Year BSIT Student
                </p>
                <p className="text-xs text-slate-500 font-sans">
                  University of Makati // CCIS
                </p>
              </div>

              <div className="pt-3 border-t border-slate-100 space-y-2.5 text-xs text-slate-600 font-sans">
                <div className="flex items-center gap-2.5">
                  <MapPin size={14} className="text-blue-600 flex-shrink-0" />
                  <span>Brgy. Olympia, Makati City, Metro Manila</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Mail size={14} className="text-blue-600 flex-shrink-0" />
                  <span className="font-mono text-[11px]">canabalcyriljhune@gmail.com</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Phone size={14} className="text-blue-600 flex-shrink-0" />
                  <span className="font-mono text-[11px]">+63 (900) 000-0000</span>
                </div>
              </div>
            </div>

            {/* Technical Skills Card */}
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
              <div className="flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-100 pb-3">
                <Code size={16} className="text-blue-600" />
                <span>Technical Competencies</span>
              </div>

              <div className="space-y-3">
                <div>
                  <div className="text-[11px] font-mono text-slate-400 font-bold uppercase mb-1.5">
                    Frontend &amp; Frameworks
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {["Next.js", "React 19", "TypeScript", "Tailwind CSS", "HTML5", "CSS3"].map((skill) => (
                      <span key={skill} className="px-2.5 py-1 rounded-md bg-blue-50 text-blue-700 font-mono text-xs font-semibold border border-blue-100">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <div className="text-[11px] font-mono text-slate-400 font-bold uppercase mb-1.5">
                    Computing &amp; Logic
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {["Algorithms", "Data Structures", "Database Logic", "OOP", "Git / GitHub"].map((skill) => (
                      <span key={skill} className="px-2.5 py-1 rounded-md bg-slate-100 text-slate-700 font-mono text-xs font-medium border border-slate-200">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <div className="text-[11px] font-mono text-slate-400 font-bold uppercase mb-1.5">
                    Creative &amp; Design Tools
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {["Figma", "SVG Vector Geometry", "Video Production", "Technical Docs"].map((skill) => (
                      <span key={skill} className="px-2.5 py-1 rounded-md bg-slate-100 text-slate-700 font-mono text-xs font-medium border border-slate-200">
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
            <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm space-y-6">
              <div className="flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-100 pb-3">
                <GraduationCap size={18} className="text-blue-600" />
                <span>Academic Education</span>
              </div>

              <div className="space-y-6">
                {/* College */}
                <div className="relative pl-6 border-l-2 border-blue-600 space-y-1.5">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                    <h4 className="text-base font-bold text-slate-900">
                      Bachelor of Science in Information Technology (BSIT)
                    </h4>
                    <span className="font-mono text-xs font-semibold text-blue-600 bg-blue-50 px-2.5 py-0.5 rounded-full border border-blue-200 w-fit">
                      2025 — Present
                    </span>
                  </div>
                  <div className="text-xs font-mono text-slate-600 font-semibold">
                    University of Makati (UMak) — College of Computing and Information Sciences
                  </div>
                  <p className="text-xs text-slate-500 font-sans leading-relaxed pt-1">
                    First-year undergraduate curriculum covering Introduction to Computing, Computer Programming, Web Systems, Discrete Mathematics, and Computing Architecture.
                  </p>
                </div>

                {/* Senior High School */}
                <div className="relative pl-6 border-l-2 border-slate-300 space-y-1.5">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                    <h4 className="text-base font-bold text-slate-900">
                      Senior High School — TVL Information &amp; Communications Technology
                    </h4>
                    <span className="font-mono text-xs text-slate-500 bg-slate-100 px-2.5 py-0.5 rounded-full border border-slate-200 w-fit">
                      Graduated 2025
                    </span>
                  </div>
                  <div className="text-xs font-mono text-slate-600 font-semibold">
                    Technical Vocational Livelihood Track // Computer Programming Strand
                  </div>
                  <p className="text-xs text-slate-500 font-sans leading-relaxed pt-1">
                    Specialized in foundational software development, markup languages, logic formulation, and hardware fundamentals.
                  </p>
                </div>
              </div>
            </div>

            {/* Academic Coursework & Projects */}
            <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm space-y-6">
              <div className="flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-100 pb-3">
                <Briefcase size={18} className="text-blue-600" />
                <span>Selected Coursework &amp; Computing Projects</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
                  <div className="font-bold text-sm text-slate-900">
                    Comprehensive Web Portfolio (Next.js)
                  </div>
                  <p className="text-xs text-slate-500 font-sans leading-relaxed">
                    Full architectural portfolio featuring responsive 12-month calendar, student resume, curriculum table, and 10 individual computing activities.
                  </p>
                  <div className="font-mono text-[11px] text-blue-600 font-semibold">
                    Next.js // React // Tailwind CSS
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
                  <div className="font-bold text-sm text-slate-900">
                    Community Outreach Documentary
                  </div>
                  <p className="text-xs text-slate-500 font-sans leading-relaxed">
                    Production, sequencing, and web integration of short-form video reels highlighting civic duty, youth engagement, and social responsibility.
                  </p>
                  <div className="font-mono text-[11px] text-blue-600 font-semibold">
                    Video Production // HTML5 Video
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
                  <div className="font-bold text-sm text-slate-900">
                    CJC Cyber Monogram Brand Identity
                  </div>
                  <p className="text-xs text-slate-500 font-sans leading-relaxed">
                    Precision vector monogram generated with SVG cubic bezier geometry, squircle construction anchors, and multi-scale adaptations.
                  </p>
                  <div className="font-mono text-[11px] text-blue-600 font-semibold">
                    SVG Mathematics // Graphic Design
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
                  <div className="font-bold text-sm text-slate-900">
                    Academic Grade &amp; Subject Matrix
                  </div>
                  <p className="text-xs text-slate-500 font-sans leading-relaxed">
                    Structured semantic data table showcasing first-year BSIT subjects, lecture/laboratory credit units, and academic grading rubrics.
                  </p>
                  <div className="font-mono text-[11px] text-blue-600 font-semibold">
                    Data Tables // Semantic HTML
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
