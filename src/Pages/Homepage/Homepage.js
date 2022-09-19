import React from "react";
import HeroSection from "./Hero/HeroSection";
import AboutSection from "./About/AboutSection";

export default function Homepage() {
  return (
    // <main className="bg-heroOriginal w-full h-screen bg-cover bg-center">
    <>
      {/* HERO SECTION */}
      <HeroSection />

      {/* ABOUT SECTION */}
      <AboutSection />

      {/* 
      <section className="container mx-auto">
        <div className="pt-28 text-center">
          <h1>Homepage</h1>
        </div> */}
      {/* <div className="min-h-screen">
          <h1 id="about" className="px-10 py-20 border scroll-mt-16">
            About
          </h1>
          <h2 id="projects" className="px-10 py-20 border scroll-mt-16">
            Projects
          </h2>
          <h2 id="social" className="px-10 py-20 border scroll-mt-16">
            Social
          </h2>
          <h2 id="contact" className="px-10 py-20 border scroll-mt-16">
            Contact
          </h2>
        </div>
        <div className="min-h-screen"></div> 
      </section>
        */}
    </>
  );
}
