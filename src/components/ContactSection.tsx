import React from "react";
import { Mail, Globe, MapPin, ArrowUpRight, GraduationCap } from "lucide-react";

function GithubIcon({ size = 24 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

export default function ContactSection() {
  return (
    <section id="contact" className="w-full bg-slate-50 dark:bg-slate-900/40 py-16 md:py-24 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Header */}
        <div className="space-y-3">
          <div className="inline-flex items-center gap-2 font-mono text-xs font-bold text-blue-600 dark:text-blue-400 uppercase tracking-widest">
            <Mail size={14} />
            <span>CONTACT</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 dark:text-white tracking-tight">
            GET IN TOUCH
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 font-sans max-w-2xl">
            Feel free to connect or view my code repositories and projects through the links below.
          </p>
        </div>

        {/* Contact Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* GitHub Card */}
          <a
            href="https://github.com/Cyriljxc"
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md hover:border-blue-400 dark:hover:border-blue-500 transition-all flex flex-col justify-between"
          >
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white group-hover:bg-blue-600 group-hover:text-white transition-colors flex items-center justify-center">
                <GithubIcon size={24} />
              </div>
              <div className="space-y-1">
                <div className="text-xs font-mono text-slate-400 dark:text-slate-500 uppercase tracking-wider font-semibold">
                  GitHub Profile
                </div>
                <div className="text-base font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  github.com/Cyriljxc
                </div>
              </div>
              <p className="text-xs text-slate-500 dark:text-slate-400 font-sans leading-relaxed">
                Check out my repositories, course projects, and latest code updates.
              </p>
            </div>
            <div className="pt-4 mt-4 border-t border-slate-100 dark:border-slate-800 flex items-center gap-1 font-mono text-xs font-bold text-blue-600 dark:text-blue-400">
              <span>View GitHub</span>
              <ArrowUpRight size={14} />
            </div>
          </a>

          {/* Vercel Card */}
          <a
            href="https://vercel.com/canabalcyriljhune-7338"
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md hover:border-blue-400 dark:hover:border-blue-500 transition-all flex flex-col justify-between"
          >
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white group-hover:bg-blue-600 group-hover:text-white transition-colors flex items-center justify-center">
                <Globe size={24} />
              </div>
              <div className="space-y-1">
                <div className="text-xs font-mono text-slate-400 dark:text-slate-500 uppercase tracking-wider font-semibold">
                  Vercel Deployments
                </div>
                <div className="text-base font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  canabalcyriljhune-7338
                </div>
              </div>
              <p className="text-xs text-slate-500 dark:text-slate-400 font-sans leading-relaxed">
                Live Next.js production deployments and web applications on Vercel.
              </p>
            </div>
            <div className="pt-4 mt-4 border-t border-slate-100 dark:border-slate-800 flex items-center gap-1 font-mono text-xs font-bold text-blue-600 dark:text-blue-400">
              <span>View Vercel</span>
              <ArrowUpRight size={14} />
            </div>
          </a>

          {/* School Card */}
          <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col justify-between">
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-xl bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 flex items-center justify-center">
                <GraduationCap size={24} />
              </div>
              <div className="space-y-1">
                <div className="text-xs font-mono text-slate-400 dark:text-slate-500 uppercase tracking-wider font-semibold">
                  School
                </div>
                <div className="text-base font-bold text-slate-900 dark:text-white">
                  University of Makati
                </div>
              </div>
              <p className="text-xs text-slate-500 dark:text-slate-400 font-sans leading-relaxed">
                College of Computing and Information Sciences (CCIS), West Rembo, Taguig / Makati City.
              </p>
            </div>
            <div className="pt-4 mt-4 border-t border-slate-100 dark:border-slate-800 flex items-center gap-2 font-mono text-xs text-slate-600 dark:text-slate-400">
              <MapPin size={14} className="text-blue-600 dark:text-blue-400" />
              <span>Makati City, Philippines</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
