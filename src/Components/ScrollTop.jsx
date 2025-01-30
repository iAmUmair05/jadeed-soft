"use client";

import React, { useState, useEffect } from "react";
import { IoIosArrowUp } from "react-icons/io";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 1200) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  // Scroll to top when button is clicked
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed group sm:bottom-6 bottom-4 z-20 sm:left-5 left-3 px-2.5 py-2.5 rounded-md bg-heading text-white duration-300 hover:scale-110 shadow-lg"
        >
          <IoIosArrowUp className="text-dark group-hover:text-white" />
        </button>
      )}
    </div>
  );
};

export default ScrollToTop;
