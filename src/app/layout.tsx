import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Cyril Jhune C. Canabal — Web Portfolio & Computing Showcase",
  description: "Official portfolio of Cyril Jhune C. Canabal, First-Year BSIT Student at the University of Makati (UMak). Built with Next.js, TypeScript, and Tailwind CSS.",
  authors: [{ name: "Cyril Jhune C. Canabal" }],
  keywords: ["Cyril Jhune Canabal", "UMak BSIT", "Web Development", "Next.js", "Portfolio", "Computing"],
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-sans bg-white text-slate-900 antialiased min-h-screen flex flex-col`}
      >
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
