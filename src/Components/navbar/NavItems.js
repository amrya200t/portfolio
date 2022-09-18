import React from "react";
import { NavLink } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

export default function NavItems() {
  return (
    <ul className="flex gap-7 xl:gap-12 items-center font-bebas text-2xl ">
      {/* Sections */}
      <li>
        <HashLink
          smooth
          to="/#about"
          className="ease-in transition-all duration-300 px-4 py-2 h-full border-b border-transparent hover:border-gold"
        >
          About Me
        </HashLink>
      </li>
      <li>
        <HashLink
          smooth
          to="/#projects"
          className="ease-in transition-all duration-300 px-4 py-2 h-full border-b border-transparent hover:border-gold"
        >
          Projects
        </HashLink>
      </li>
      <li>
        <HashLink
          smooth
          to="/#social"
          className="ease-in transition-all duration-300 px-4 py-2 h-full border-b border-transparent hover:border-gold"
        >
          Social
        </HashLink>
      </li>
      {/* BLOG PAGE */}
      <li>
        <NavLink
          to="/blog"
          className="ease-in transition-all duration-300 px-4 py-2 h-full border-b border-transparent hover:border-gold"
        >
          Blog
        </NavLink>
      </li>
      {/* CONTACT FORM */}
      <li className="px-4">
        <HashLink
          smooth
          to="/#contact"
          className="ease-in transition-all duration-300 px-4 py-2 h-full border rounded-md border-gold text-gold hover:text-darkGold"
        >
          Hire me
        </HashLink>
      </li>
    </ul>
  );
}
