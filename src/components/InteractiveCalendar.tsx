"use client";

import React, { useState } from "react";
import { ChevronLeft, ChevronRight, Calendar as CalendarIcon, Clock, CheckCircle2, AlertCircle } from "lucide-react";

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
  // Leading empty/adjacent cells
  for (let i = 0; i < currentMonth.firstDayOfWeek; i++) {
    gridCells.push({ day: null, isCurrentMonth: false });
  }
  // Days of current month
  for (let d = 1; d <= currentMonth.totalDays; d++) {
    gridCells.push({ day: d, isCurrentMonth: true });
  }
  // Trailing empty cells to fill full 7-col rows
  while (gridCells.length % 7 !== 0) {
    gridCells.push({ day: null, isCurrentMonth: false });
  }

  return (
    <section id="calendar" className="w-full bg-white py-16 md:py-24 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-slate-200 pb-6">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 font-mono text-xs font-bold text-blue-600 uppercase tracking-widest">
              <CalendarIcon size={14} />
              <span>ACTIVITY 01 // 2026 ACADEMIC CALENDAR</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight">
              INTERACTIVE SCHEDULE
            </h2>
            <p className="text-sm sm:text-base text-slate-600 font-sans max-w-2xl">
              First-semester academic schedule at the University of Makati. Features single-month focused navigation across all 12 months, weekend indicators, and critical course presentation milestones.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <span className="px-3 py-1.5 rounded-lg bg-blue-50 border border-blue-200 text-blue-700 font-mono text-xs font-bold">
              NOV 11, 2026: INTCOMP PRESENTATION
            </span>
          </div>
        </div>

        {/* Month Selector Pills */}
        <div className="space-y-2">
          <div className="text-[11px] font-mono uppercase tracking-wider text-slate-400 font-bold">
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
                  className={`px-3 py-2 text-xs font-mono font-bold rounded-lg border transition-all ${
                    isActive
                      ? "bg-blue-600 text-white border-blue-600 shadow-sm"
                      : "bg-slate-50 text-slate-600 border-slate-200 hover:bg-slate-100 hover:text-slate-900"
                  }`}
                >
                  {m.name.slice(0, 3)} {isNovember ? "(TARGET)" : ""}
                </button>
              );
            })}
          </div>
        </div>

        {/* Main Calendar Card */}
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
          {/* Card Top Control Bar */}
          <div className="px-6 py-5 bg-slate-50/80 border-b border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <button
                onClick={handlePrev}
                className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg bg-white border border-slate-200 text-slate-700 hover:text-blue-600 hover:border-blue-300 font-mono text-xs font-bold shadow-2xs transition-all"
                aria-label="Previous month"
              >
                <ChevronLeft size={16} />
                <span>PREV</span>
              </button>

              <div className="text-center sm:text-left">
                <span className="block text-xl sm:text-2xl font-black text-slate-900 font-mono tracking-tight">
                  {currentMonth.name} {currentMonth.year}
                </span>
                <span className="text-[11px] font-mono text-slate-500 uppercase tracking-widest">
                  Month {activeMonthIdx + 1} of 12 // Semester 1
                </span>
              </div>

              <button
                onClick={handleNext}
                className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg bg-white border border-slate-200 text-slate-700 hover:text-blue-600 hover:border-blue-300 font-mono text-xs font-bold shadow-2xs transition-all"
                aria-label="Next month"
              >
                <span>NEXT</span>
                <ChevronRight size={16} />
              </button>
            </div>

            {/* Legend */}
            <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-slate-600">
              <div className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded bg-blue-600" />
                <span>Presentation Date</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded bg-blue-100 border border-blue-300" />
                <span>Current Week</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded bg-slate-100 border border-slate-300" />
                <span>Weekend</span>
              </div>
            </div>
          </div>

          {/* Calendar Grid Table */}
          <div className="overflow-x-auto p-4 sm:p-6">
            <div className="min-w-[600px]">
              {/* Day header */}
              <div className="grid grid-cols-7 gap-2 mb-2">
                {daysOfWeek.map((day, idx) => (
                  <div
                    key={day}
                    className={`py-2 text-center font-mono text-xs font-bold uppercase tracking-wider rounded-lg ${
                      idx === 0 || idx === 6
                        ? "text-slate-400 bg-slate-50"
                        : "text-slate-700 bg-slate-100/60"
                    }`}
                  >
                    {day}
                  </div>
                ))}
              </div>

              {/* Day cells */}
              <div className="grid grid-cols-7 gap-2">
                {gridCells.map((cell, idx) => {
                  if (!cell.isCurrentMonth || !cell.day) {
                    return (
                      <div
                        key={`empty-${idx}`}
                        className="h-20 sm:h-24 p-2 rounded-xl bg-slate-50/50 border border-dashed border-slate-200 opacity-40"
                      />
                    );
                  }

                  const dayNum = cell.day;
                  const dayOfWeek = idx % 7;
                  const isWeekend = dayOfWeek === 0 || dayOfWeek === 6;
                  const isPresentationDay = activeMonthIdx === 10 && dayNum === 11;
                  const isToday = activeMonthIdx === 10 && dayNum === 9;

                  return (
                    <div
                      key={`day-${dayNum}`}
                      className={`h-20 sm:h-24 p-2 sm:p-2.5 rounded-xl border flex flex-col justify-between transition-all ${
                        isPresentationDay
                          ? "bg-blue-600 text-white border-blue-700 shadow-md ring-2 ring-blue-300"
                          : isToday
                          ? "bg-blue-50 text-slate-900 border-blue-400 shadow-2xs"
                          : isWeekend
                          ? "bg-slate-50/80 text-slate-700 border-slate-200"
                          : "bg-white text-slate-900 border-slate-200 hover:border-blue-300 hover:shadow-2xs"
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span
                          className={`font-mono text-sm sm:text-base font-black ${
                            isPresentationDay ? "text-white" : "text-slate-900"
                          }`}
                        >
                          {dayNum}
                        </span>
                        {isPresentationDay && (
                          <span className="text-[10px] font-mono font-bold uppercase tracking-widest bg-white text-blue-700 px-1.5 py-0.5 rounded">
                            EVENT
                          </span>
                        )}
                        {isToday && (
                          <span className="text-[10px] font-mono font-bold uppercase tracking-widest bg-blue-600 text-white px-1.5 py-0.5 rounded">
                            TODAY
                          </span>
                        )}
                      </div>

                      {/* Event badge in cell */}
                      {isPresentationDay && (
                        <div className="text-[10px] sm:text-xs font-mono font-semibold leading-tight bg-blue-700/80 p-1 rounded text-white mt-1">
                          INTCOMP Presentation
                        </div>
                      )}

                      {isToday && (
                        <div className="text-[10px] font-mono text-blue-600 mt-1">
                          Current Date
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Key Milestone Callout Banner */}
          <div className="px-6 py-4 bg-blue-50 border-t border-blue-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs">
            <div className="flex items-center gap-2 text-blue-900 font-medium">
              <AlertCircle size={16} className="text-blue-600 flex-shrink-0" />
              <span>
                <strong>Tuesday, Nov 11, 2026:</strong> INTCOMP Web Portfolio Individual Defense &amp; Rubric Evaluation.
              </span>
            </div>
            <span className="font-mono text-blue-600 font-bold whitespace-nowrap">
              Graded: Design // Code // Functionality
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
