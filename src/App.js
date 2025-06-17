import React, { useEffect, useState } from "react";
import clsx from "clsx"; // Ensure installed: npm install clsx

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import About from "./components/About";
import Achievements from "./components/Achievements";
import Contacts from "./components/Contacts";
import Footer from "./components/Footer";
import Preloader from "./components/Preloader";
import LogoTransition from "./components/LogoTransition";
import BackToTopButton from "./components/BackToTopButton"; // ✅ Import new component

function App() {
  const [isLoading, setIsLoading] = useState(true); // Preloader control
  const [showSplash, setShowSplash] = useState(true); // Logo transition control
  const [fadeIn, setFadeIn] = useState(false); // Main content fade-in

  // 🔁 Show Preloader always
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  // 🧠 Logo splash only once per session
  useEffect(() => {
    const splashSeen = sessionStorage.getItem("splashDone");
    if (splashSeen) {
      setShowSplash(false);
      setFadeIn(true); // Still trigger fadeIn if splash was skipped
    }
  }, []);

  // ✅ Callback when LogoTransition ends
  const handleLogoTransitionComplete = () => {
    sessionStorage.setItem("splashDone", "true");
    setShowSplash(false);

    // Smooth fade-in of content
    setTimeout(() => {
      setFadeIn(true);
    }, 100);
  };

  // ⏳ Show Preloader first
  if (isLoading) return <Preloader />;

  // 🌀 Then show logo animation (if not seen this session)
  if (showSplash)
    return <LogoTransition onComplete={handleLogoTransitionComplete} />;

  // ✅ Final layout
  return (
    <div
      className={clsx(
        "App scroll-smooth transition-opacity duration-1000 ease-in-out",
        fadeIn ? "opacity-100" : "opacity-0"
      )}
    >
      <Navbar />
      <section id="home" className="pt-20">
        <Hero />
      </section>
      <Projects />
      <About />
      <Achievements />
      <Contacts />
      <Footer />
      <BackToTopButton /> {/* ✅ Back to Top Button at the end */}
    </div>
  );
}

export default App;
