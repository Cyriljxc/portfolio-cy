"use client";

import React, { useState } from "react";
import { ChevronLeft, ChevronRight, Calendar as CalendarIcon, Clock } from "lucide-react";

interface MonthData {
  name: string;
  monthIndex: number;
  year: number;
  firstDayOfWeek: number; // 0 = Sun, 1 = Mon, ..., 6 = Sat
  totalDays: number;
}

const months: MonthData[] = [
  { name: "JANUARY", monthIndex: 0, year: 2026, firstDayOfWeek: 4, totalDays: 31 },
  { name: "FEBRUARY", monthIndex: 1, year: 2026, firstDayOfWeek: 0, totalDays: 28 },
  { name: "MARCH", monthIndex: 2, year: 2026, firstDayOfWeek: 0, totalDays: 31 },
  { name: "APRIL", monthIndex: 3, year: 2026, firstDayOfWeek: 3, totalDays: 30 },
  { name: "MAY", monthIndex: 4, year: 2026, firstDayOfWeek: 5, totalDays: 31 },
  { name: "JUNE", monthIndex: 5, year: 2026, firstDayOfWeek: 1, totalDays: 30 },
  { name: "JULY", monthIndex: 6, year: 2026, firstDayOfWeek: 3, totalDays: 31 },
  { name: "AUGUST", monthIndex: 7, year: 2026, firstDayOfWeek: 6, totalDays: 31 },
  { name: "SEPTEMBER", monthIndex: 8, year: 2026, firstDayOfWeek: 2, totalDays: 30 },
  { name: "OCTOBER", monthIndex: 9, year: 2026, firstDayOfWeek: 4, totalDays: 31 },
  { name: "NOVEMBER", monthIndex: 10, year: 2026, firstDayOfWeek: 0, totalDays: 30 },
  { name: "DECEMBER", monthIndex: 11, year: 2026, firstDayOfWeek: 2, totalDays: 31 },
];

const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

export default function InteractiveCalendar() {
  // Default to November (index 10)
  const [activeMonthIdx, setActiveMonthIdx] = useState(10);
  const currentMonth = months[activeMonthIdx];

  const handlePrev = () => {
    setActiveMonthIdx((prev) => (prev > 0 ? prev - 1 : 11));
  };

  const handleNext = () => {
    setActiveMonthIdx((prev) => (prev < 11 ? prev + 1 : 0));
  };

  // Build grid days
  const gridCells = [];
  for (let i = 0; i < currentMonth.firstDayOfWeek; i++) {
    gridCells.push({ day: null, isCurrentMonth: false });
  }
  for (let d = 1; d <= currentMonth.totalDays; d++) {
    gridCells.push({ day: d, isCurrentMonth: true });
  }
  while (gridCells.length % 7 !== 0) {
    gridCells.push({ day: null, isCurrentMonth: false });
  }

  return (
    <section id="calendar" className="w-full bg-white dark:bg-slate-950 py-16 md:py-24 border-b border-slate-200 dark:border-slate-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-slate-200 dark:border-slate-800 pb-6">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 font-mono text-xs font-bold text-blue-600 dark:text-blue-400 uppercase tracking-widest">
              <CalendarIcon size={14} />
              <span>ACADEMIC SCHEDULE</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 dark:text-white tracking-tight">
              2026 CALENDAR
            </h2>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 font-sans max-w-2xl">
              12-month academic calendar highlighting key milestones, including our Introduction to Computing presentation on Tuesday, November 11.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <span className="px-3 py-1.5 rounded-xl bg-blue-50 dark:bg-blue-950/60 border border-blue-200 dark:border-blue-900 text-blue-700 dark:text-blue-300 font-mono text-xs font-bold">
              NOV 11, 2026: INTCOMP PRESENTATION
            </span>
          </div>
        </div>

        {/* Month Selector Pills */}
        <div className="space-y-2">
          <div className="text-[11px] font-mono uppercase tracking-wider text-slate-400 dark:text-slate-500 font-bold">
            Select Month:
          </div>
          <div className="flex flex-wrap gap-1.5 sm:gap-2">
            {months.map((m, idx) => {
              const isActive = idx === activeMonthIdx;
              const isNovember = idx === 10;
              return (
                <button
                  key={m.name}
                  onClick={() => setActiveMonthIdx(idx)}
                  className={`px-3 py-2 text-xs font-mono font-bold rounded-xl border transition-all ${
                    isActive
                      ? "bg-blue-600 text-white border-blue-600 shadow-sm"
                      : "bg-slate-50 dark:bg-slate-900 text-slate-600 dark:text-slate-300 border-slate-200 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-white"
                  }`}
                >
                  <span>{m.name.slice(0, 3)}</span>
                  {isNovember && (
                    <span className={`ml-1.5 text-[10px] px-1 py-0.2 rounded ${isActive ? "bg-white text-blue-600" : "bg-blue-100 dark:bg-blue-950 text-blue-700 dark:text-blue-300"}`}>
                      ★
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Main Calendar Card */}
        <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-4 sm:p-8 shadow-sm">
          {/* Calendar Header with Arrows */}
          <div className="flex items-center justify-between pb-6 border-b border-slate-100 dark:border-slate-800">
            <div>
              <div className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white tracking-tight">
                {currentMonth.name} {currentMonth.year}
              </div>
              <div className="text-xs font-mono text-slate-500 dark:text-slate-400 pt-0.5">
                First Semester Academic Year 2025–2026
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={handlePrev}
                className="p-2 sm:p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 transition-colors"
                aria-label="Previous month"
              >
                <ChevronLeft size={18} />
              </button>
              <button
                onClick={handleNext}
                className="p-2 sm:p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 transition-colors"
                aria-label="Next month"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>

          {/* Days of Week Header */}
          <div className="grid grid-cols-7 gap-1 sm:gap-2 pt-6 text-center">
            {daysOfWeek.map((d, index) => (
              <div
                key={d}
                className={`py-2 text-[11px] sm:text-xs font-mono font-bold uppercase tracking-wider ${
                  index === 0 || index === 6 ? "text-amber-600 dark:text-amber-400" : "text-slate-500 dark:text-slate-400"
                }`}
              >
                {d}
              </div>
            ))}
          </div>

          {/* Days Grid */}
          <div className="grid grid-cols-7 gap-1 sm:gap-2 pt-2">
            {gridCells.map((cell, index) => {
              if (!cell.day) {
                return (
                  <div
                    key={`empty-${index}`}
                    className="aspect-square sm:aspect-auto sm:min-h-24 p-1.5 sm:p-2 rounded-xl bg-slate-50/50 dark:bg-slate-900/40 border border-transparent"
                  />
                );
              }

              const isNov = activeMonthIdx === 10;
              const isNov11 = isNov && cell.day === 11;
              const isToday = isNov && cell.day === 9;
              const dayCol = index % 7;
              const isWeekend = dayCol === 0 || dayCol === 6;

              return (
                <div
                  key={`day-${cell.day}`}
                  className={`aspect-square sm:aspect-auto sm:min-h-24 p-1.5 sm:p-2.5 rounded-xl border transition-all flex flex-col justify-between ${
                    isNov11
                      ? "bg-blue-600 text-white border-blue-600 shadow-md ring-2 ring-blue-400/40"
                      : isToday
                      ? "bg-blue-50 dark:bg-blue-950/70 border-blue-300 dark:border-blue-800 text-blue-900 dark:text-blue-100"
                      : isWeekend
                      ? "bg-amber-50/50 dark:bg-amber-950/20 border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300"
                      : "bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 text-slate-800 dark:text-slate-200 hover:border-blue-300 dark:hover:border-blue-700"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span
                      className={`text-xs sm:text-sm font-mono font-bold ${
                        isNov11 ? "text-white" : isToday ? "text-blue-600 dark:text-blue-400" : isWeekend ? "text-amber-600 dark:text-amber-400" : "text-slate-900 dark:text-white"
                      }`}
                    >
                      {cell.day}
                    </span>
                    {isNov11 && (
                      <span className="hidden sm:inline-block text-[9px] font-mono bg-white text-blue-600 font-extrabold px-1.5 py-0.5 rounded">
                        TUE
                      </span>
                    )}
                  </div>

                  {isNov11 && (
                    <div className="mt-1 hidden sm:block">
                      <div className="text-[10px] font-mono font-extrabold text-blue-100 leading-tight">
                        INTCOMP Presentation
                      </div>
                    </div>
                  )}

                  {isToday && !isNov11 && (
                    <div className="mt-1 hidden sm:block">
                      <div className="text-[10px] font-mono font-bold text-blue-600 dark:text-blue-400 leading-tight">
                        Today
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Calendar Footnote */}
          <div className="mt-8 pt-6 border-t border-slate-100 dark:border-slate-800 flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-slate-500 dark:text-slate-400">
            <div className="flex items-center gap-4">
              <span className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded bg-blue-600" />
                <span>November 11: Presentation Milestone</span>
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded bg-amber-200 dark:bg-amber-900/60 border border-amber-300 dark:border-amber-800" />
                <span>Weekends</span>
              </span>
            </div>
            <div className="flex items-center gap-1.5">
              <Clock size={14} className="text-blue-600 dark:text-blue-400" />
              <span>University of Makati Academic Calendar 2026</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
