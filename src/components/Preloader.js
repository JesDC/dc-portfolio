import React, { useEffect, useState } from "react";

const Preloader = ({ onSkip }) => {
  const [progress, setProgress] = useState(0);
  const [fadeOut, setFadeOut] = useState(false);
  const [activeMessage, setActiveMessage] = useState(0);
  const [isExiting, setIsExiting] = useState(false);

  const messages = [
    "Initializing digital workspace...",
    "Preparing administrative resources...",
    "Organizing information and systems...",
    "Connecting ideas with technology...",
    "Welcome to my portfolio.",
  ];

  const finishLoading = () => {
    if (isExiting) return;

    setIsExiting(true);
    setProgress(100);

    setTimeout(() => {
      setFadeOut(true);
      if (onSkip) onSkip();
    }, 500);
  };

  useEffect(() => {
    const progressTimer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressTimer);
          return 100;
        }

        return Math.min(prev + Math.floor(Math.random() * 9 + 3), 100);
      });
    }, 120);

    const messageTimer = setInterval(() => {
      setActiveMessage((prev) => Math.min(prev + 1, messages.length - 1));
    }, 650);

    const exitTimer = setTimeout(() => {
      finishLoading();
    }, 4500);

    return () => {
      clearInterval(progressTimer);
      clearInterval(messageTimer);
      clearTimeout(exitTimer);
    };
  }, []);

  const floatingIcons = [
    { icon: "▤", label: "Records", position: "top-0 left-0", delay: "0s" },
    { icon: "▦", label: "Systems", position: "top-0 right-0", delay: "0.5s" },
    { icon: "▥", label: "Analytics", position: "bottom-0 left-0", delay: "1s" },
    {
      icon: "⌘",
      label: "Technology",
      position: "bottom-0 right-0",
      delay: "1.5s",
    },
  ];

  return (
    <div
      className={`fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden bg-slate-950 transition-all duration-700 ${
        fadeOut
          ? "opacity-0 invisible pointer-events-none"
          : "opacity-100 visible"
      }`}
      role="status"
      aria-busy={!fadeOut}
    >
      {/* Background effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(37,99,235,0.20),transparent_55%)]" />

      <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-blue-600/20 blur-[100px] animate-pulse" />

      <div className="absolute -bottom-32 -right-32 w-96 h-96 rounded-full bg-indigo-500/20 blur-[100px] animate-pulse" />

      {/* Background grid */}
      <div
        className="absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.2) 1px, transparent 1px)",
          backgroundSize: "45px 45px",
        }}
      />

      {/* Main content */}
      <div
        className={`relative z-10 flex flex-col items-center px-6 text-center transition-all duration-500 ${
          isExiting ? "scale-110 opacity-0" : "scale-100 opacity-100"
        }`}
      >
        {/* Logo area */}
        <div className="relative w-56 h-56 sm:w-64 sm:h-64 flex items-center justify-center mb-8">
          {/* Orbit rings */}
          <div className="absolute inset-2 rounded-full border border-blue-400/20 animate-[spin_12s_linear_infinite]" />

          <div className="absolute inset-7 rounded-full border border-dashed border-blue-300/30 animate-[spin_18s_linear_infinite_reverse]" />

          <div className="absolute inset-12 rounded-full border border-blue-400/20" />

          {/* Orbiting dot */}
          <div className="absolute inset-2 animate-[spin_4s_linear_infinite]">
            <div className="w-3 h-3 rounded-full bg-blue-300 shadow-[0_0_15px_#60a5fa]" />
          </div>

          {/* Logo glow */}
          <div className="absolute w-36 h-36 sm:w-44 sm:h-44 rounded-full bg-blue-500/20 blur-3xl animate-pulse" />

          {/* Main logo */}
          <div className="relative z-10 w-32 h-32 sm:w-40 sm:h-40 rounded-full bg-white/5 border border-white/10 backdrop-blur-md flex items-center justify-center shadow-[0_0_50px_rgba(59,130,246,0.2)]">
            <img
              src="/logo.png"
              alt="Portfolio logo"
              className="w-24 h-24 sm:w-32 sm:h-32 object-contain drop-shadow-[0_0_15px_rgba(96,165,250,0.5)] animate-pulse"
            />
          </div>

          {/* Floating system icons */}
          {floatingIcons.map((item) => (
            <div
              key={item.label}
              className={`absolute ${item.position} w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-white/10 border border-white/10 backdrop-blur-md flex flex-col items-center justify-center shadow-lg animate-bounce`}
              style={{
                animationDuration: "10s",
                animationDelay: item.delay,
              }}
            >
              <span className="text-blue-300 text-xl">{item.icon}</span>
              <span className="text-[8px] text-blue-100 mt-0.5">
                {item.label}
              </span>
            </div>
          ))}
        </div>

        {/* Identity */}
        <div className="mb-7">
          <p className="text-blue-300 text-[10px] sm:text-xs tracking-[0.4em] uppercase mb-3">
            Personal Portfolio
          </p>

          <h1 className="text-white text-2xl sm:text-3xl font-extrabold tracking-wide">
            JESTRO MAVERICK
            <span className="block text-blue-400 mt-1">DE CASTRO</span>
          </h1>

          <p className="text-slate-400 text-xs sm:text-sm mt-3 tracking-wider">
            Administration <span className="text-blue-400">•</span> Information
            Technology
          </p>
        </div>

        {/* Loading status */}
        <div className="w-64 sm:w-80">
          <div className="flex justify-between items-center mb-3">
            <p className="text-blue-200 text-xs tracking-wide">
              {messages[activeMessage]}
            </p>

            <span className="text-white text-xs font-bold tabular-nums">
              {progress}%
            </span>
          </div>

          {/* Progress bar */}
          <div className="w-full h-1.5 rounded-full bg-white/10 overflow-hidden">
            <div
              className="h-full rounded-full bg-gradient-to-r from-blue-500 via-cyan-300 to-blue-400 shadow-[0_0_15px_rgba(96,165,250,0.8)] transition-all duration-300 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>

          {/* Loading dots */}
          <div className="flex justify-center gap-2 mt-5">
            {[0, 1, 2].map((dot) => (
              <span
                key={dot}
                className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-bounce"
                style={{
                  animationDelay: `${dot * 0.2}s`,
                }}
              />
            ))}
          </div>
        </div>

        {/* Skip */}
        <button
          onClick={finishLoading}
          disabled={isExiting}
          className="mt-8 px-5 py-2 rounded-full border border-white/20 text-slate-400 text-xs tracking-wider hover:text-white hover:border-blue-400 hover:bg-blue-500/10 transition-all duration-300 disabled:opacity-50"
        >
          Skip Introduction ↗
        </button>
      </div>

      <span className="sr-only">Loading portfolio content, please wait.</span>
    </div>
  );
};

export default Preloader;
