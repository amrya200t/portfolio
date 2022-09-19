// import modules
import React, { useEffect, useState } from "react";
import { FaAngleUp } from "react-icons/fa";

export default function ScrollUpButton() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.scrollY > 200) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  const scrollUpHandler = () => {
    window.scrollTo({
      left: 0,
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      id="scroll-top"
      aria-label="Scroll to top button"
      onClick={scrollUpHandler}
      className={
        isVisible
          ? "ease transition-all duration-300 fixed z-100 bottom-8 right-8 hover:bottom-10 hover:text-darkGold border-none shadow-[0_4px_6px_-1px_rgba(251,157,38,0.2)] rounded-lg text-2xl text-gold bg-headerDark px-4 py-3"
          : "hidden"
      }
    >
      <FaAngleUp />
    </button>
  );
}
