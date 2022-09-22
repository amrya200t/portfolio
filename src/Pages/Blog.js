import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function Blog() {
  const location = useLocation();
  useEffect(() => {
    if (location.pathname === "/blog") {
      const footerEl = document.querySelector("footer");
      document.querySelector(".blog-page").style.height = `${
        window.innerHeight - footerEl.offsetHeight
      }px`;
    }
  }, [location.pathname]);

  return (
    // <div className="text-center font-bold text-3xl text-light fixed top-1/2 -translate-y-1/2 left-0 right-0 ">
    <div className="blog-page text-center font-bold text-3xl text-light flex items-center justify-center">
      <h3>Coming Soon...</h3>
    </div>
  );
}
