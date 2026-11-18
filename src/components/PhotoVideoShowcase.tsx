"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Play, Maximize2, X, Film, Camera, Sparkles } from "lucide-react";

interface GalleryItem {
  id: number;
  src: string;
  title: string;
  category: string;
  description: string;
}

const galleryItems: GalleryItem[] = [
  {
    id: 1,
    src: "/images/portrait.png",
    title: "Official Student Portrait",
    category: "Academic Identification",
    description: "Formal academic photography for university documentation and institutional identification records at UMak."
  },
  {
    id: 2,
    src: "/images/profile.jpg",
    title: "Campus Profile View",
    category: "Student Life",
    description: "Personal campus profile photo taken during university enrollment and orientation events."
  },
  {
    id: 3,
    src: "/images/art-session.jpg",
    title: "Creative Arts Session",
    category: "Extracurricular & Arts",
    description: "Creative exploration in visual design, color study, and hands-on artistic collaboration."
  },
  {
    id: 4,
    src: "/images/mip-internship.jpg",
    title: "IT Makerspace & Immersion",
    category: "Technical Workshop",
    description: "Hands-on technology immersion session engaging with software tooling, project workstations, and digital media."
  }
];

export default function PhotoVideoShowcase() {
  const [selectedPhoto, setSelectedPhoto] = useState<GalleryItem | null>(null);

  return (
    <section id="showcase" className="w-full bg-slate-50 py-16 md:py-24 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Section Header */}
        <div className="space-y-3">
          <div className="inline-flex items-center gap-2 font-mono text-xs font-bold text-blue-600 uppercase tracking-widest">
            <Camera size={14} />
            <span>01 // MULTIMEDIA ARTIFACTS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight">
            PHOTO &amp; VIDEO SHOWCASE
          </h2>
          <p className="text-sm sm:text-base text-slate-600 font-sans max-w-2xl">
            A curated collection of official student photography and community outreach documentary reels, demonstrating media production, HTML5 video delivery, and responsive layouts.
          </p>
        </div>

        {/* Part A: Photo Gallery */}
        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200 pb-3">
            <div className="font-mono text-xs sm:text-sm font-bold text-slate-800 uppercase tracking-wider flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-blue-600" />
              <span>Part A // Responsive Image Gallery (Click to Zoom)</span>
            </div>
            <span className="font-mono text-xs text-slate-500">4 Featured Photographs</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {galleryItems.map((item) => (
              <div
                key={item.id}
                onClick={() => setSelectedPhoto(item)}
                className="group cursor-pointer bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md hover:border-blue-300 transition-all duration-300 flex flex-col"
              >
                <div className="relative aspect-[4/5] w-full overflow-hidden bg-slate-100">
                  <Image
                    src={item.src}
                    alt={item.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/30 transition-colors duration-300 flex items-center justify-center">
                    <div className="w-10 h-10 rounded-full bg-white/90 text-slate-800 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-md">
                      <Maximize2 size={16} />
                    </div>
                  </div>
                </div>

                <div className="p-4 space-y-1 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="font-mono text-[10px] uppercase tracking-wider text-blue-600 font-bold">
                      {item.category}
                    </div>
                    <div className="font-bold text-sm text-slate-900 group-hover:text-blue-600 transition-colors">
                      {item.title}
                    </div>
                  </div>
                  <p className="text-xs text-slate-500 line-clamp-2 pt-1 font-sans">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Part B: Outreach Program Reels */}
        <div className="space-y-6 pt-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200 pb-3">
            <div className="font-mono text-xs sm:text-sm font-bold text-slate-800 uppercase tracking-wider flex items-center gap-2">
              <Film size={16} className="text-blue-600" />
              <span>Part B // Community Outreach Program Video Reels</span>
            </div>
            <span className="font-mono text-xs text-slate-500">HTML5 Native Video Delivery</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Video Reel 1 */}
            <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="relative aspect-video w-full bg-slate-900">
                <video
                  controls
                  preload="metadata"
                  poster="/images/poster-outreach1.jpg"
                  className="w-full h-full object-contain"
                >
                  <source src="/video1.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>

              <div className="p-5 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 font-mono text-[11px] font-bold">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-pulse" />
                    REEL 01 // 42 SECONDS
                  </span>
                  <span className="font-mono text-xs text-slate-400">1080x1920 MP4</span>
                </div>

                <h3 className="text-lg font-bold text-slate-900">
                  Community Outreach Program — Reel 1
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-sans">
                  Comprehensive documentary reel covering the preparation, student community assembly, outreach activities, and collaborative civic engagement conducted with local youth.
                </p>

                <div className="pt-2 border-t border-slate-100 flex flex-wrap gap-2 text-[11px] font-mono text-slate-500">
                  <span className="bg-slate-100 px-2.5 py-1 rounded-md">Civic Engagement</span>
                  <span className="bg-slate-100 px-2.5 py-1 rounded-md">Community Service</span>
                  <span className="bg-slate-100 px-2.5 py-1 rounded-md">UMak Outreach</span>
                </div>
              </div>
            </div>

            {/* Video Reel 2 */}
            <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="relative aspect-video w-full bg-slate-900">
                <video
                  controls
                  preload="metadata"
                  poster="/images/poster-outreach2.jpg"
                  className="w-full h-full object-contain"
                >
                  <source src="/video2.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>

              <div className="p-5 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-indigo-50 border border-indigo-200 text-indigo-700 font-mono text-[11px] font-bold">
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-600" />
                    REEL 02 // 7 SECONDS
                  </span>
                  <span className="font-mono text-xs text-slate-400">1080x1920 MP4</span>
                </div>

                <h3 className="text-lg font-bold text-slate-900">
                  Community Outreach Program — Reel 2
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-sans">
                  Cinematic highlight sequence capturing the cheerful interactions, youth gift-giving, and volunteer solidarity from the university outreach mission.
                </p>

                <div className="pt-2 border-t border-slate-100 flex flex-wrap gap-2 text-[11px] font-mono text-slate-500">
                  <span className="bg-slate-100 px-2.5 py-1 rounded-md">Highlight Clip</span>
                  <span className="bg-slate-100 px-2.5 py-1 rounded-md">Student Volunteers</span>
                  <span className="bg-slate-100 px-2.5 py-1 rounded-md">Social Responsibility</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedPhoto && (
        <div
          className="fixed inset-0 z-50 bg-slate-900/80 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-200"
          onClick={() => setSelectedPhoto(null)}
        >
          <div
            className="relative max-w-2xl w-full bg-white rounded-2xl overflow-hidden shadow-2xl border border-slate-200"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedPhoto(null)}
              className="absolute top-3 right-3 z-10 p-2 rounded-full bg-white/90 text-slate-700 hover:bg-slate-100 shadow-sm focus:outline-none"
              aria-label="Close photo preview"
            >
              <X size={20} />
            </button>

            <div className="relative aspect-[4/5] sm:aspect-square w-full bg-slate-100">
              <Image
                src={selectedPhoto.src}
                alt={selectedPhoto.title}
                fill
                sizes="(max-width: 768px) 100vw, 800px"
                className="object-contain"
              />
            </div>

            <div className="p-6 space-y-2 bg-white">
              <div className="font-mono text-xs uppercase tracking-wider text-blue-600 font-bold">
                {selectedPhoto.category}
              </div>
              <h4 className="text-xl font-bold text-slate-900">{selectedPhoto.title}</h4>
              <p className="text-sm text-slate-600 font-sans leading-relaxed">
                {selectedPhoto.description}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
