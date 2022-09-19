import SOCIAL_LINKS from "./SOCIAL_LINKS";

import React from "react";
import { HashLink } from "react-router-hash-link";
import SocialLink from "./SocialLink";

import { FaAngleDown } from "react-icons/fa";

export default function HeroSection() {
  return (
    <>
      {/* Hero Section */}
      <section
        className="z-0 bg-heroOriginal w-full h-screen bg-cover bg-center brightness-50"
        id="hero"
      ></section>
      <section>
        <article className="absolute top-1/2 left-1/2 text-light translate-x-[-50%] translate-y-[-50%] w-full text-center">
          <h1 className="font-poppins font-bold text-2xl md:text-4xl">
            Hello I'm Amr Ezzat Ahmed
          </h1>
          <h2 className="font-poppins font-bold text-lg md:text-xl pt-4">
            I'm a passionate Web Developer
          </h2>

          {/* Social Links */}
          <aside className="mt-8 text-gold">
            <h2>Find me on social media</h2>
            <ul className="flex gap-4 text-light justify-center mt-4">
              {SOCIAL_LINKS.map((link) => (
                <SocialLink
                  key={link.name}
                  title={link.name}
                  url={link.url}
                  icon={link.icon}
                />
              ))}
            </ul>
          </aside>
        </article>
        <HashLink
          smooth
          to="/#about"
          className="absolute bottom-8 left-1/2 translate-x-[-50%]"
        >
          <FaAngleDown
            size="3rem"
            className="ease-in transition-all duration-300  text-gold hover:text-darkGold"
            aria-label="Go to First Section"
          />
        </HashLink>
      </section>
    </>
  );
}
