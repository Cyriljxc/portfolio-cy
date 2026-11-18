import React from "react";
import Link from "next/link";
import { ArrowLeft, Table, CheckCircle2, Award, BookOpen } from "lucide-react";

export const metadata = {
  title: "Activity 03: Curriculum & Grade Table — Cyril Jhune",
  description: "Semantic data table displaying first-year BSIT courses, unit distribution, schedule, and grade status.",
};

const subjects = [
  { code: "CC101", title: "Introduction to Computing", lec: 2, lab: 3, units: 3, schedule: "Mon / Thu 08:00 - 10:00", room: "LAB-402", grade: "1.25", status: "Passed" },
  { code: "CC102", title: "Computer Programming 1 (Python)", lec: 2, lab: 3, units: 3, schedule: "Tue / Fri 10:00 - 12:30", room: "LAB-405", grade: "1.00", status: "Passed" },
  { code: "IT101", title: "Web Systems & Technologies 1", lec: 2, lab: 3, units: 3, schedule: "Wed 13:00 - 17:00", room: "LAB-401", grade: "1.25", status: "Passed" },
  { code: "MS101", title: "Discrete Mathematics for IT", lec: 3, lab: 0, units: 3, schedule: "Mon / Thu 13:00 - 14:30", room: "RM-304", grade: "1.50", status: "Passed" },
  { code: "GE101", title: "Purposive Communication", lec: 3, lab: 0, units: 3, schedule: "Tue / Fri 08:30 - 10:00", room: "RM-208", grade: "1.25", status: "Passed" },
  { code: "GE102", title: "Understanding the Self", lec: 3, lab: 0, units: 3, schedule: "Wed 09:00 - 12:00", room: "RM-210", grade: "1.50", status: "Passed" },
  { code: "PE101", title: "Physical Activities Towards Health & Fitness 1", lec: 2, lab: 0, units: 2, schedule: "Sat 08:00 - 10:00", room: "GYM-A", grade: "1.00", status: "Passed" },
  { code: "NSTP1", title: "National Service Training Program 1 (CWTS)", lec: 3, lab: 0, units: 3, schedule: "Sun 08:00 - 12:00", room: "COMM-CTR", grade: "1.00", status: "Passed" },
];

export default function TableActivityPage() {
  const totalUnits = subjects.reduce((sum, s) => sum + s.units, 0);

  return (
    <div className="py-12 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Breadcrumb Navigation */}
        <Link
          href="/#activities"
          className="inline-flex items-center gap-2 text-xs font-mono font-bold text-slate-500 hover:text-blue-600 transition-colors"
        >
          <ArrowLeft size={14} />
          <span>BACK TO ACTIVITIES DIRECTORY</span>
        </Link>

        {/* Header */}
        <div className="space-y-3 border-b border-slate-200 pb-6">
          <div className="inline-flex items-center gap-2 font-mono text-xs font-bold text-blue-600 uppercase tracking-widest">
            <Table size={14} />
            <span>ACTIVITY 03 // DATA TABLES &amp; STRUCTURING</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight">
            BSIT CURRICULUM &amp; GRADE MATRIX
          </h1>
          <p className="text-sm sm:text-base text-slate-600 font-sans max-w-2xl">
            Structured semantic HTML5 table displaying first-year BSIT subject loads, laboratory allocations, scheduling periods, and academic performance grading rubrics at the University of Makati.
          </p>
        </div>

        {/* Summary Stat Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
            <div className="text-xs font-mono text-slate-500 uppercase">Total Subjects</div>
            <div className="text-2xl font-black text-slate-900 mt-1">{subjects.length} Courses</div>
          </div>
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
            <div className="text-xs font-mono text-slate-500 uppercase">Enrolled Units</div>
            <div className="text-2xl font-black text-blue-600 mt-1">{totalUnits} Credit Units</div>
          </div>
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
            <div className="text-xs font-mono text-slate-500 uppercase">Term Weighted GPA</div>
            <div className="text-2xl font-black text-emerald-600 mt-1">1.22 (Excellent)</div>
          </div>
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
            <div className="text-xs font-mono text-slate-500 uppercase">Academic Standing</div>
            <div className="text-2xl font-black text-slate-900 mt-1">President's List</div>
          </div>
        </div>

        {/* Table Container */}
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
          <div className="px-6 py-4 bg-slate-50/80 border-b border-slate-200 flex items-center justify-between">
            <span className="font-mono text-xs font-bold text-slate-800 uppercase tracking-wider">
              First Year // First Semester Academic Load
            </span>
            <span className="font-mono text-xs text-blue-600 font-semibold">
              Academic Year 2025 - 2026
            </span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs font-sans">
              <thead className="bg-slate-100/70 border-b border-slate-200 font-mono uppercase text-[11px] text-slate-600 tracking-wider">
                <tr>
                  <th className="py-3.5 px-4 font-bold">Course Code</th>
                  <th className="py-3.5 px-4 font-bold">Descriptive Title</th>
                  <th className="py-3.5 px-3 font-bold text-center">Lec</th>
                  <th className="py-3.5 px-3 font-bold text-center">Lab</th>
                  <th className="py-3.5 px-3 font-bold text-center">Units</th>
                  <th className="py-3.5 px-4 font-bold">Schedule</th>
                  <th className="py-3.5 px-3 font-bold text-center">Room</th>
                  <th className="py-3.5 px-4 font-bold text-center">Grade</th>
                  <th className="py-3.5 px-4 font-bold text-center">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {subjects.map((s) => (
                  <tr key={s.code} className="hover:bg-blue-50/40 transition-colors">
                    <td className="py-3.5 px-4 font-mono font-bold text-blue-600">{s.code}</td>
                    <td className="py-3.5 px-4 font-semibold text-slate-900">{s.title}</td>
                    <td className="py-3.5 px-3 text-center text-slate-600 font-mono">{s.lec}</td>
                    <td className="py-3.5 px-3 text-center text-slate-600 font-mono">{s.lab}</td>
                    <td className="py-3.5 px-3 text-center font-bold text-slate-900 font-mono">{s.units}</td>
                    <td className="py-3.5 px-4 text-slate-600 font-mono text-[11px]">{s.schedule}</td>
                    <td className="py-3.5 px-3 text-center font-mono text-slate-500">{s.room}</td>
                    <td className="py-3.5 px-4 text-center font-mono font-bold text-slate-900 bg-slate-50/50">
                      {s.grade}
                    </td>
                    <td className="py-3.5 px-4 text-center">
                      <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-mono font-bold bg-emerald-50 text-emerald-700 border border-emerald-200">
                        <CheckCircle2 size={12} />
                        <span>{s.status}</span>
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
              <tfoot className="bg-slate-50 border-t border-slate-200 font-mono font-bold text-xs text-slate-900">
                <tr>
                  <td colSpan={4} className="py-4 px-4 text-right uppercase tracking-wider">
                    Total Academic Credit Units:
                  </td>
                  <td className="py-4 px-3 text-center text-blue-600 font-black text-sm">
                    {totalUnits}
                  </td>
                  <td colSpan={4} className="py-4 px-4 text-right text-slate-500 text-[11px]">
                    Evaluation Status: Verified by College Registrar
                  </td>
                </tr>
              </tfoot>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
