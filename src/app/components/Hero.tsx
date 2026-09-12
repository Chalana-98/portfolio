"use client";

import React from "react";
import { motion } from "framer-motion";
import { FiArrowRight, FiDownload } from "react-icons/fi";
import { PersonalData } from "../constants";
import ChaosSystemSlider from "./ChaosSystemSlider";

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen pt-32 pb-20 md:pt-40 md:pb-28 flex flex-col justify-between overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 w-full z-10">
        <div className="max-w-4xl">
          {/* Monospaced Technical Tag */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-3 mb-6"
          >
            <span className="h-[1px] w-8 bg-violet-500/60" />
            <span className="font-mono text-xs sm:text-sm tracking-widest text-violet-400 uppercase font-semibold">
              ASSOCIATE SOFTWARE ENGINEER • ENTERPRISE & AI
            </span>
          </motion.div>

          {/* Punchy Hero Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white leading-[1.08] mb-6"
          >
            I build the <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-purple-300 to-indigo-300">systems</span> your business{" "}
            <span className="underline decoration-violet-500/50 decoration-wavy decoration-2 underline-offset-8">should already have</span>.
          </motion.h1>

          {/* Subhead */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl sm:text-2xl text-slate-200 font-medium leading-snug mb-4 max-w-3xl"
          >
            One engineer for enterprise .NET backends, Azure Synapse pipelines, agentic AI workflows, and modern web apps.
          </motion.p>

          {/* Concise Value Pitch */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="text-base sm:text-lg text-slate-400 leading-relaxed mb-10 max-w-2xl"
          >
            No jargon, no brittle architectures, no surprise downtime. You define the operational bottleneck. I engineer the fix.
          </motion.p>

          {/* Signature Interactive Slider Widget (Screenshot 1) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.35 }}
          >
            <ChaosSystemSlider />
          </motion.div>


          {/* Action Buttons & Micro-Copy */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="space-y-4"
          >
            <div className="flex flex-wrap items-center gap-4">
              <a
                href="#contact"
                className="btn-viosu-primary inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full font-semibold text-sm sm:text-base tracking-wide"
              >
                Schedule a call
                <FiArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#projects"
                className="btn-viosu-ghost inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full font-semibold text-sm sm:text-base text-slate-200"
              >
                See what I&apos;ve built
                <FiArrowRight className="w-4 h-4 text-violet-400" />
              </a>

              <a
                href={PersonalData.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-full text-xs font-mono text-slate-400 hover:text-white border border-slate-800 hover:border-violet-500/40 transition-colors"
              >
                <FiDownload className="w-3.5 h-3.5 text-violet-400" />
                Resume PDF
              </a>
            </div>

            <p className="text-xs font-mono text-slate-500 pl-1">
              (Yes, an actual engineer answers.)
            </p>
          </motion.div>
        </div>
      </div>

      {/* Bottom Technical Status Ticker (Screenshot 1) */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="mt-16 border-t border-slate-800/80 bg-[#06070d]/90 backdrop-blur-md py-4 px-6 sm:px-8 w-full z-10"
      >
        <div className="max-w-6xl mx-auto flex flex-wrap items-center justify-between gap-4 font-mono text-[11px] sm:text-xs text-slate-400">
          <div className="flex flex-wrap items-center gap-6 sm:gap-8">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="tracking-wider uppercase">ONE ENGINEER, WHOLE STACK</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-violet-400" />
              <span className="tracking-wider uppercase">REAL PROBLEM, FIRST CALL</span>
            </div>
            <div className="flex items-center gap-2 hidden sm:flex">
              <span className="w-2 h-2 rounded-full bg-indigo-400" />
              <span className="tracking-wider uppercase">PRODUCTION RESILIENCY</span>
            </div>
          </div>

          <a
            href="#what-i-do"
            className="flex items-center gap-2 text-violet-400 hover:text-violet-300 transition-colors ml-auto sm:ml-0 font-semibold"
          >
            <span>SCROLL</span>
            <span className="animate-bounce">↓</span>
          </a>
        </div>
      </motion.div>
    </section>
  );
}