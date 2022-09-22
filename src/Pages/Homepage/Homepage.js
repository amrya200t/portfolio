import React from "react";
import HeroSection from "./Hero/HeroSection";
import AboutSection from "./About/AboutSection";
import ProjectsSection from "./Projects/ProjectsSection";
import HireMeSection from "./HireMe/HireMeSection";

export default function Homepage() {
  return (
    // <main className="bg-heroOriginal w-full h-screen bg-cover bg-center">
    <main className="bg-noisyBG">
      {/* HERO SECTION */}
      <HeroSection />
      {/* <div className="border-b border-gold"></div> */}

      {/* ABOUT SECTION */}
      <AboutSection />

      {/* <div className="border-b border-gold"></div> */}

      {/* PROJECTS SECTION */}
      <ProjectsSection />

      {/* Hire ME SECTION */}
      <HireMeSection />
    </main>
  );
}
