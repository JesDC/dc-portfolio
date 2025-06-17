// src/components/Preloader.jsx
import React from "react";

const Preloader = () => {
  return (
    <div
      className="fixed inset-0 z-50 bg-white dark:bg-gray-900 flex items-center justify-center transition-opacity duration-700"
      role="status"
      aria-busy="true"
    >
      <div className="flex items-center gap-6 animate-fade-in-down">
        {/* Logo on the left */}
        <img
          src="/logo.png"
          alt="Logo"
          className="w-40 h-40 sm:w-48 sm:h-48 animate-glow drop-shadow-xl"
        />
      </div>
    </div>
  );
};

export default Preloader;
