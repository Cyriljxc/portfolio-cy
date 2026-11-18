import React from "react";

interface CjcLogoProps {
  size?: number;
  className?: string;
  variant?: "standard" | "blueprint";
}

export default function CjcLogo({ size = 36, className = "", variant = "standard" }: CjcLogoProps) {
  if (variant === "blueprint") {
    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        aria-hidden="true"
      >
        <rect width="100" height="100" className="fill-blue-50 dark:fill-slate-900" rx="12" />
        <path d="M 10 50 H 90 M 50 10 V 90" className="stroke-blue-200 dark:stroke-slate-700" strokeWidth="1" strokeDasharray="3 3" />
        <circle cx="50" cy="50" r="38" className="stroke-blue-200 dark:stroke-slate-700" strokeWidth="1" strokeDasharray="2 2" fill="none" />
        <rect x="5" y="5" width="90" height="90" rx="22" className="stroke-blue-600 dark:stroke-blue-400" strokeWidth="2.5" fill="none" />
        <path d="M 65 30 C 40 24 25 36 25 50 C 25 64 40 76 65 70" className="stroke-blue-600 dark:stroke-blue-400" strokeWidth="8" strokeLinecap="round" />
        <path d="M 52 28 V 61 C 52 68 45 73 35 73" className="stroke-slate-900 dark:stroke-white" strokeWidth="8" strokeLinecap="round" />
        <circle cx="68" cy="50" r="5" className="fill-blue-600 dark:fill-blue-400" />
      </svg>
    );
  }

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* Outer Squircle Container */}
      <rect
        width="40"
        height="40"
        rx="9"
        className="fill-slate-100 dark:fill-slate-900 stroke-blue-600 dark:stroke-blue-500"
        strokeWidth="1.75"
      />
      
      {/* C Arc in electric blue */}
      <path
        d="M 26 12 C 17 10 10 14 10 20 C 10 26 17 30 26 28"
        className="stroke-blue-600 dark:stroke-blue-400"
        strokeWidth="3.2"
        strokeLinecap="round"
      />
      
      {/* J in dark slate / white */}
      <path
        d="M 21 11 V 24 C 21 27 18 29 14 29"
        className="stroke-slate-900 dark:stroke-white"
        strokeWidth="3.2"
        strokeLinecap="round"
      />
      
      {/* Accent dot */}
      <circle cx="27" cy="20" r="2.2" className="fill-blue-600 dark:fill-blue-400" />
    </svg>
  );
}
