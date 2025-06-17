import React, { useEffect, useState } from "react";
import { HiArrowUp } from "react-icons/hi";

const BackToTopButton = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    visible && (
      <button
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 z-50 p-3 rounded-full bg-blue-700 text-white shadow-lg hover:bg-blue-800 transition-all duration-300"
        aria-label="Back to top"
      >
        <HiArrowUp className="w-5 h-5" />
      </button>
    )
  );
};

export default BackToTopButton;
