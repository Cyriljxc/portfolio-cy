import React from "react";
import HeroSection from "@/components/HeroSection";
import MarqueeBanner from "@/components/MarqueeBanner";
import PhotoVideoShowcase from "@/components/PhotoVideoShowcase";
import InteractiveCalendar from "@/components/InteractiveCalendar";
import ResumeSection from "@/components/ResumeSection";
import ActivitiesHub from "@/components/ActivitiesHub";
import ContactSection from "@/components/ContactSection";

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <HeroSection />
      <MarqueeBanner />
      <PhotoVideoShowcase />
      <InteractiveCalendar />
      <ResumeSection />
      <ActivitiesHub />
      <ContactSection />
    </div>
  );
}
