"use client";

import React, { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { FiArrowRight } from "react-icons/fi";

const navLinks = [
  { name: "Work", href: "#projects" },
  { name: "Services", href: "#services" },
  { name: "What I Do", href: "#what-i-do" },
  { name: "Experience", href: "#experience" },
  { name: "Education", href: "#education" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Simple active link detection
      const sections = ["projects", "services", "what-i-do", "experience", "education", "contact"];
      const scrollPos = window.scrollY + 200;
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#06070d]/85 backdrop-blur-xl border-b border-violet-500/15 py-3.5 shadow-2xl"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 sm:px-8 flex items-center justify-between">
        {/* Brand / Geometric Modern Logo (Matching Viosu icon + name) */}
        <a
          href="#hero"
          className="flex items-center gap-2.5 group"
          aria-label="Chalana Shehara Portfolio Home"
        >
          {/* Geometric Icon */}
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-violet-600 to-indigo-600 p-[1px] shadow-glow-sm">
            <div className="w-full h-full bg-[#090b17] rounded-[7px] flex items-center justify-center text-violet-400 font-mono font-bold text-sm tracking-tighter">
              &gt;&lt;
            </div>
          </div>
          <span className="text-base font-extrabold tracking-tight text-white group-hover:text-violet-300 transition-colors">
            Chalana<span className="text-violet-400">.</span>
          </span>
        </a>

        {/* Desktop Nav - Centered with Viosu-style pill badge */}
        <nav className="hidden md:flex items-center gap-1 bg-[#0d1022]/80 backdrop-blur-md px-4 py-1.5 rounded-full border border-violet-500/20">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.replace("#", "");
            return (
              <a
                key={link.name}
                href={link.href}
                className={`relative px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide transition-all duration-200 flex items-center gap-1.5 ${
                  isActive
                    ? "text-white bg-violet-600/30 border border-violet-500/40 shadow-glow-sm"
                    : "text-slate-300 hover:text-white hover:bg-white/5"
                }`}
              >
                {isActive && (
                  <span className="w-1.5 h-1.5 rounded-full bg-violet-400 animate-pulse" />
                )}
                {link.name}
              </a>
            );
          })}
        </nav>

        {/* Right CTA Button: Radiant Violet Pill (Matching Viosu "Schedule a call ->") */}
        <div className="flex items-center gap-4">
          <a
            href="#contact"
            className="hidden sm:inline-flex items-center gap-2 px-5 py-2 rounded-full font-semibold text-xs tracking-wide btn-viosu-primary"
          >
            Schedule a call
            <FiArrowRight className="w-3.5 h-3.5" />
          </a>

          {/* Mobile Toggle Button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 rounded-lg text-slate-300 hover:text-white bg-white/5 border border-white/10 transition-colors focus:outline-none"
            aria-label="Toggle Navigation"
          >
            {mobileOpen ? <HiX className="w-6 h-6" /> : <HiMenuAlt3 className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#070914]/98 backdrop-blur-2xl border-b border-violet-500/20 px-6 py-6"
          >
            <div className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-sm font-semibold text-slate-200 hover:text-violet-400 transition-colors py-2 border-b border-white/5 flex items-center justify-between"
                >
                  <span>{link.name}</span>
                  <FiArrowRight className="w-3.5 h-3.5 text-slate-500" />
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setMobileOpen(false)}
                className="mt-4 w-full py-3 rounded-full text-center font-semibold text-sm btn-viosu-primary"
              >
                Schedule a call →
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
