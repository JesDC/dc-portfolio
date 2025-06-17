// src/components/LogoTransition.jsx
import React, { useEffect, useState } from "react";
import clsx from "clsx";

const LogoTransition = ({ onComplete }) => {
  const [start, setStart] = useState(false);
  const [done, setDone] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setStart(true);
    }, 100); // short delay before moving

    const end = setTimeout(() => {
      setDone(true);
      onComplete();
    }, 2800); // match timing with CSS animation

    return () => {
      clearTimeout(timer);
      clearTimeout(end);
    };
  }, [onComplete]);

  return (
    <div
      className={clsx(
        "fixed z-[999] flex items-center justify-center w-full h-full bg-white dark:bg-gray-900 transition-opacity duration-1000 ease-in-out",
        done && "opacity-0 pointer-events-none"
      )}
    >
      <img
        src="/logo.png"
        alt="Logo"
        className={clsx(
          "w-40 h-40 transition-transform duration-[2000ms] ease-in-out",
          start && "transform translate-x-[-41vw] translate-y-[-40vh] scale-50"
        )}
      />
    </div>
  );
};

export default LogoTransition;
