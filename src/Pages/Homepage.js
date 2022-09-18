import React from "react";
import { HashLink } from "react-router-hash-link";
import { FaAngleDown } from "react-icons/fa";

export default function Homepage() {
  return (
    // <main className="bg-heroOriginal w-full h-screen bg-cover bg-center">
    <>
      {/* Hero Section */}
      <section className="z-0 bg-heroOriginal w-full h-screen bg-cover bg-center brightness-50">
        <HashLink smooth to="/#about">
          <FaAngleDown
            size="3rem"
            className="ease-in transition-all duration-300  text-lightGold absolute bottom-8 left-1/2 hover:text-gold"
            aria-label="Go to First Section"
          />
        </HashLink>
      </section>

      <section className="container mx-auto">
        {/* <div className="pt-28 text-center">
          <h1>Homepage</h1>
        </div> */}
        <div className="min-h-screen">
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
    </>
  );
}
