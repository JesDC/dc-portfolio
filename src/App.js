import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import About from "./components/About";
import Contacts from "./components/Contacts";
import Footer from "./components/Footer";
import Achievements from "./components/Achievements";

function App() {
  return (
    <div className="App scroll-smooth">
      {/* Navigation Bar */}
      <Navbar />

      {/* Hero Section */}
      <section id="home" className="pt-20">
        <Hero />
      </section>

      {/* Projects Section */}
      <Projects />

      <About />

      <Achievements />

      <Contacts />

      <Footer />
    </div>
  );
}

export default App;
