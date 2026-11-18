import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#ffffff",
        foreground: "#0f172a",
        muted: "#64748b",
        border: "#e2e8f0",
        accent: {
          DEFAULT: "#2563eb",
          hover: "#1d4ed8",
          light: "#eff6ff",
          subtle: "#dbeafe"
        },
        surface: {
          DEFAULT: "#ffffff",
          muted: "#f8fafc",
          subtle: "#f1f5f9"
        }
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "system-ui", "-apple-system", "sans-serif"],
        mono: ["var(--font-geist-mono)", "ui-monospace", "monospace"]
      }
    },
  },
  plugins: [],
};

export default config;
