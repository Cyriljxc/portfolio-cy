"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Maximize2, X, Film, Camera } from "lucide-react";

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
    title: "Student Portrait",
    category: "Campus ID",
    description: "Official student ID photo taken for university enrollment at University of Makati."
  },
  {
    id: 2,
    src: "/images/profile.jpg",
    title: "Campus Profile",
    category: "Student Life",
    description: "Photo during campus enrollment and student orientation week."
  },
  {
    id: 3,
    src: "/images/art-session.jpg",
    title: "Creative Arts Session",
    category: "Workshop",
    description: "Hands-on creative and art session with fellow students."
  },
  {
    id: 4,
    src: "/images/mip-internship.jpg",
    title: "IT Workshop & Immersion",
    category: "Technical Lab",
    description: "Hands-on immersion session working on software workstations and computer projects."
  }
];

export default function PhotoVideoShowcase() {
  const [selectedPhoto, setSelectedPhoto] = useState<GalleryItem | null>(null);

  return (
    <section id="showcase" className="w-full bg-slate-50 dark:bg-slate-900/40 py-16 md:py-24 border-b border-slate-200 dark:border-slate-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Section Header */}
        <div className="space-y-3">
          <div className="inline-flex items-center gap-2 font-mono text-xs font-bold text-blue-600 dark:text-blue-400 uppercase tracking-widest">
            <Camera size={14} />
            <span>PHOTOS &amp; VIDEOS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 dark:text-white tracking-tight">
            CAMPUS &amp; OUTREACH MEDIA
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 font-sans max-w-2xl">
            A collection of photos from campus activities, workshops, and video reels from our community outreach program.
          </p>
        </div>

        {/* Part A: Photo Gallery */}
        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200 dark:border-slate-800 pb-3">
            <div className="font-mono text-xs sm:text-sm font-bold text-slate-800 dark:text-slate-200 uppercase tracking-wider flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-blue-600 dark:bg-blue-400" />
              <span>Campus Photos (Click to Enlarge)</span>
            </div>
            <span className="font-mono text-xs text-slate-500 dark:text-slate-400">4 Photos</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {galleryItems.map((item) => (
              <div
                key={item.id}
                onClick={() => setSelectedPhoto(item)}
                className="group cursor-pointer bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 overflow-hidden shadow-sm hover:shadow-md hover:border-blue-400 dark:hover:border-blue-500 transition-all duration-300 flex flex-col"
              >
                <div className="relative aspect-[4/5] w-full overflow-hidden bg-slate-100 dark:bg-slate-800">
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
                    <div className="font-mono text-[10px] uppercase tracking-wider text-blue-600 dark:text-blue-400 font-bold">
                      {item.category}
                    </div>
                    <div className="font-bold text-sm text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {item.title}
                    </div>
                  </div>
                  <p className="text-xs text-slate-500 dark:text-slate-400 line-clamp-2 pt-1 font-sans">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Part B: Outreach Program Reels */}
        <div className="space-y-6 pt-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200 dark:border-slate-800 pb-3">
            <div className="font-mono text-xs sm:text-sm font-bold text-slate-800 dark:text-slate-200 uppercase tracking-wider flex items-center gap-2">
              <Film size={16} className="text-blue-600 dark:text-blue-400" />
              <span>Community Outreach Video Reels</span>
            </div>
            <span className="font-mono text-xs text-slate-500 dark:text-slate-400">2 Video Highlights</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Video Reel 1 */}
            <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="relative aspect-video w-full bg-slate-950">
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
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-blue-50 dark:bg-blue-950/60 border border-blue-200 dark:border-blue-900 text-blue-700 dark:text-blue-300 font-mono text-[11px] font-bold">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-600 dark:bg-blue-400 animate-pulse" />
                    REEL 01 • 42 SECONDS
                  </span>
                  <span className="font-mono text-xs text-slate-400">MP4</span>
                </div>

                <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                  Community Outreach Program — Reel 1
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-sans">
                  Highlights from our student outreach program, showing the preparation, activities, and interaction with the children and local community.
                </p>

                <div className="pt-2 border-t border-slate-100 dark:border-slate-800 flex flex-wrap gap-2 text-[11px] font-mono text-slate-500 dark:text-slate-400">
                  <span className="bg-slate-100 dark:bg-slate-800 px-2.5 py-1 rounded-md">Community Outreach</span>
                  <span className="bg-slate-100 dark:bg-slate-800 px-2.5 py-1 rounded-md">Student Volunteers</span>
                  <span className="bg-slate-100 dark:bg-slate-800 px-2.5 py-1 rounded-md">UMak</span>
                </div>
              </div>
            </div>

            {/* Video Reel 2 */}
            <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="relative aspect-video w-full bg-slate-950">
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
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-indigo-50 dark:bg-indigo-950/60 border border-indigo-200 dark:border-indigo-900 text-indigo-700 dark:text-indigo-300 font-mono text-[11px] font-bold">
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-600 dark:bg-indigo-400" />
                    REEL 02 • 7 SECONDS
                  </span>
                  <span className="font-mono text-xs text-slate-400">MP4</span>
                </div>

                <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                  Community Outreach Program — Reel 2
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-sans">
                  Quick recap clip of our volunteer team handing out supplies and spending quality time with the community.
                </p>

                <div className="pt-2 border-t border-slate-100 dark:border-slate-800 flex flex-wrap gap-2 text-[11px] font-mono text-slate-500 dark:text-slate-400">
                  <span className="bg-slate-100 dark:bg-slate-800 px-2.5 py-1 rounded-md">Short Clip</span>
                  <span className="bg-slate-100 dark:bg-slate-800 px-2.5 py-1 rounded-md">Volunteers</span>
                  <span className="bg-slate-100 dark:bg-slate-800 px-2.5 py-1 rounded-md">Makati Outreach</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedPhoto && (
        <div
          className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-200"
          onClick={() => setSelectedPhoto(null)}
        >
          <div
            className="relative max-w-2xl w-full bg-white dark:bg-slate-900 rounded-2xl overflow-hidden shadow-2xl border border-slate-200 dark:border-slate-800"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedPhoto(null)}
              className="absolute top-3 right-3 z-10 p-2 rounded-full bg-white/90 dark:bg-slate-800/90 text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-700 shadow-sm focus:outline-none"
              aria-label="Close photo preview"
            >
              <X size={20} />
            </button>

            <div className="relative aspect-[4/5] sm:aspect-square w-full bg-slate-100 dark:bg-slate-950">
              <Image
                src={selectedPhoto.src}
                alt={selectedPhoto.title}
                fill
                sizes="(max-width: 768px) 100vw, 800px"
                className="object-contain"
              />
            </div>

            <div className="p-6 space-y-2 bg-white dark:bg-slate-900">
              <div className="font-mono text-xs uppercase tracking-wider text-blue-600 dark:text-blue-400 font-bold">
                {selectedPhoto.category}
              </div>
              <h4 className="text-xl font-bold text-slate-900 dark:text-white">{selectedPhoto.title}</h4>
              <p className="text-sm text-slate-600 dark:text-slate-300 font-sans leading-relaxed">
                {selectedPhoto.description}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
