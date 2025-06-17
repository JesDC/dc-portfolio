// src/components/Preloader.jsx
import React, { useEffect, useState } from "react";

const Preloader = ({ onSkip }) => {
  const [fadeOut, setFadeOut] = useState(false);

  // Auto-hide after 2 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setFadeOut(true);
      if (onSkip) onSkip();
    }, 2000);
    return () => clearTimeout(timer);
  }, [onSkip]);

  return (
    <div
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center transition-opacity duration-700 ${
        fadeOut ? "opacity-0 pointer-events-none" : "opacity-100"
      } bg-white dark:bg-gray-900`}
      role="status"
      aria-busy="true"
    >
      {/* Logo and animation */}
      <div className="flex flex-col items-center gap-4 animate-fade-in-down">
        <img
          src="/logo.png"
          alt="Logo"
          className="w-32 h-32 sm:w-48 sm:h-48 animate-glow drop-shadow-xl"
        />

        {/* Loading Text */}
        <p className="text-blue-800 dark:text-blue-200 text-sm tracking-wider animate-pulse">
          Loading...
        </p>

        {/* Animated Dots */}
        <div className="mt-2 flex gap-1">
          <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce-slow delay-100" />
          <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce-slow delay-200" />
          <div className="w-2 h-2 bg-blue-300 rounded-full animate-bounce-slow delay-300" />
        </div>

        {/* Skip Button */}
        <button
          onClick={() => {
            setFadeOut(true);
            if (onSkip) onSkip();
          }}
          className="mt-6 text-xs text-blue-600 underline hover:text-blue-800 focus:outline-none"
        >
          Skip
        </button>
      </div>

      {/* Screen reader text */}
      <span className="sr-only">Loading site content, please wait...</span>
    </div>
  );
};

export default Preloader;
