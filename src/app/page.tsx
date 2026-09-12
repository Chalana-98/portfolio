"use client";

import React from "react";
import ParticleCanvas from "./components/ParticleCanvas";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import WhatIDo from "./components/WhatIDo";
import ServicesGrid from "./components/ServicesGrid";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import EducationCertifications from "./components/EducationCertifications";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-[#06070d] text-slate-100 selection:bg-purple-600 selection:text-white overflow-x-hidden">
      {/* 3D Interactive Cosmic Particle Warp Field */}
      <ParticleCanvas />

      {/* Navigation Header */}
      <Navbar />

      {/* Main Content Sections */}
      <div className="relative z-10">
        <Hero />
        <WhatIDo />
        <ServicesGrid />
        <Projects />
        <Experience />
        <EducationCertifications />
        <Contact />
      </div>
    </main>
  );
}
