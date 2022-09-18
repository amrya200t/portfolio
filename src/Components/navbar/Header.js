import React, { useCallback, useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";

import { FaLaptopCode } from "react-icons/fa";
import MenuItems from "./MenuItems";
import NavItems from "./NavItems";

export default function Header(props) {
  const location = useLocation();
  const [mobileVersion, setMobileVersion] = useState(false);
  const [initial, setInitial] = useState(false);
  const [navOpen, setNavOpen] = useState(false);
  const [darkNav, setDarkNav] = useState(false);

  const init = useCallback(() => {
    if (initial) return;
    if (!mobileVersion && window.innerWidth <= 1024) setMobileVersion(true);
    setInitial(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [mobileVersion, initial, location]);

  useEffect(() => {
    init();
  }, [init]);

  useEffect(() => {
    const headerHeight = document
      .querySelector("header")
      .getBoundingClientRect().height;
    const navLinks = [...document.querySelectorAll("header nav ul li a")].slice(
      0,
      3
    );
    const sections = [
      document.getElementById("about"),
      document.getElementById("projects"),
      document.getElementById("social"),
    ];

    const scrollHandler = () => {
      if (location.pathname === "/") {
        navLinks.forEach((link, i) => {
          if (
            window.scrollY >= sections[i].offsetTop - headerHeight &&
            window.scrollY <
              sections[i].offsetTop + sections[i].offsetHeight - headerHeight
          ) {
            if (link.classList.contains("border-gold")) return;
            link.classList.add("border-gold");
            link.classList.remove("border-transparent");
            console.log(link);
          } else {
            link.classList.remove("border-gold");
            link.classList.add("border-transparent");
          }
        });
      }
    };

    window.addEventListener("scroll", scrollHandler);
    return () => {
      window.removeEventListener("scroll", scrollHandler);
    };
  });

  const ScrollToTopHandler = () => {
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    if (navOpen) return;

    const onScroll = () => {
      if (window.scrollY > 64) {
        document
          .querySelector("header")
          .classList.add("bg-headerDark", "text-dark", "shadow-md");
        setDarkNav(true);
      } else {
        document
          .querySelector("header")
          .classList.remove("bg-headerDark", "text-dark", "shadow-md");
        document.querySelector("header").classList.add("text-light");
        setDarkNav(false);
      }
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [mobileVersion, navOpen]);

  useEffect(() => {
    const onResize = () => {
      if (!mobileVersion && window.innerWidth <= 1024) setMobileVersion(true);
      if (mobileVersion && window.innerWidth > 1024) setMobileVersion(false);
    };

    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [mobileVersion]);

  return (
    <header className="z-10 w-full h-16 fixed left-2/4 translate-x-[-50%] ease-in transition-all duration-300 text-light">
      <nav className="container mx-auto flex justify-between items-center h-full">
        {/* LOGO */}
        <NavLink
          to="/"
          className="flex gap-2 px-4 h-full items-center text-gold z-10"
          aria-label="Logo"
          onClick={ScrollToTopHandler}
        >
          <FaLaptopCode size="3rem" />
          {/* <FaCode size="2rem" /> */}
          {/* <span className="font-medium pt-1">Home</span> */}
        </NavLink>

        {/* Navigation bar */}
        {mobileVersion ? (
          <MenuItems isOpen={setNavOpen} isDark={darkNav} />
        ) : (
          <NavItems />
        )}
      </nav>
    </header>
  );
}
