import React from "react";
import HeroSection from "./Hero/HeroSection";
import AboutSection from "./About/AboutSection";
import ProjectsSection from "./Projects/ProjectsSection";
import HireMeSection from "./HireMe/HireMeSection";

export default function Homepage() {
  return (
    <main className="bg-noisyBG">
      {/* HERO SECTION */}
      <HeroSection />

      {/* ABOUT SECTION */}
      <AboutSection />

      {/* PROJECTS SECTION */}
      <ProjectsSection />

      {/* Hire ME SECTION */}
      <HireMeSection />
    </main>
  );
}
