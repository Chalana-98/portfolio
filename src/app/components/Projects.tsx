"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ProjectsData } from "../constants";
import { FiGithub, FiExternalLink, FiArrowUpRight, FiLayers } from "react-icons/fi";
import { TbBrain } from "react-icons/tb";

const categories = ["All", "AI & ML", "Full Stack", "Mobile & Web"];

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered =
    activeCategory === "All"
      ? ProjectsData
      : ProjectsData.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className="relative py-28 md:py-36 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 relative z-10">
        {/* Step Callout (Screenshot 4: "3 It ships. We stay.") */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mb-20 pb-12 border-b border-slate-800/80 max-w-4xl"
        >
          <div className="flex items-baseline gap-6 mb-4">
            <span className="font-extrabold text-5xl sm:text-7xl text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-indigo-400 select-none">
              3
            </span>
            <div>
              <h3 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
                It ships. I stay.
              </h3>
              <p className="text-base sm:text-lg text-slate-400 mt-1">
                It goes live and I keep it running. Six months later, I still pick up the phone.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="h-[1px] w-8 bg-violet-500/60" />
              <span className="font-mono text-xs sm:text-sm tracking-widest text-violet-400 uppercase font-semibold">
                SELECTED WORK
              </span>
            </div>
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight leading-tight">
              Proof, <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-indigo-300">not promises</span>.
            </h2>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full font-mono text-xs tracking-wider transition-all duration-200 ${
                  activeCategory === cat
                    ? "bg-violet-600 text-white shadow-glow-sm border border-violet-400"
                    : "bg-[#0c0e1e] text-slate-400 hover:text-white border border-slate-800 hover:border-violet-500/40"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Project Cards (Viosu Layout) */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <AnimatePresence>
            {filtered.map((project, idx) => (
              <motion.div
                layout
                key={project.title}
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.35, delay: idx * 0.05 }}
                whileHover={{ y: -6 }}
                className="glass-panel rounded-2xl overflow-hidden border border-violet-500/20 bg-[#090b1a]/90 hover:border-violet-500/50 hover:shadow-glow-md transition-all duration-300 flex flex-col group"
              >
                {/* Visual Preview / Thumbnail Banner */}
                {project.image ? (
                  <div className="relative h-56 sm:h-64 w-full bg-[#05060d] overflow-hidden flex items-center justify-center p-6 border-b border-slate-800/80">
                    <div className="relative w-full h-full group-hover:scale-105 transition-transform duration-500 ease-out">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-contain"
                      />
                    </div>
                  </div>
                ) : (
                  <div className="relative h-56 sm:h-64 w-full bg-gradient-to-br from-violet-950/40 via-[#070914] to-indigo-950/40 overflow-hidden flex flex-col justify-between p-8 border-b border-slate-800/80">
                    <div className="w-12 h-12 rounded-xl bg-violet-900/40 border border-violet-500/40 flex items-center justify-center text-2xl text-violet-300 shadow-glow-sm">
                      <TbBrain />
                    </div>
                    <div>
                      <span className="font-mono text-xs text-violet-400 tracking-wider">
                        RESEARCH & MACHINE LEARNING
                      </span>
                      <p className="text-xs text-slate-400 mt-1">Sabaragamuwa University of Sri Lanka</p>
                    </div>
                  </div>
                )}

                {/* Project Details */}
                <div className="p-7 flex-1 flex flex-col justify-between">
                  <div>
                    {/* Index & Category Header (Screenshot 4) */}
                    <div className="flex items-center justify-between font-mono text-xs mb-3">
                      <span className="text-violet-400 font-bold tracking-wider">
                        0{idx + 1}
                      </span>
                      <span className="text-slate-400 tracking-widest uppercase text-[11px]">
                        {project.category}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-2xl font-extrabold text-white mb-2 group-hover:text-violet-300 transition-colors">
                      {project.title}
                    </h3>

                    {/* Subtitle */}
                    <p className="font-mono text-xs text-violet-400/80 mb-3">
                      {project.subtitle}
                    </p>

                    {/* Description */}
                    <p className="text-sm text-slate-400 leading-relaxed mb-6 font-normal">
                      {project.content}
                    </p>
                  </div>

                  <div>
                    {/* Tech Stack Chips */}
                    <div className="flex flex-wrap gap-1.5 mb-6 pt-4 border-t border-slate-800/80">
                      {project.tech.map((t) => (
                        <span
                          key={t}
                          className="font-mono text-[11px] px-2.5 py-1 rounded bg-[#101328] border border-violet-500/15 text-slate-300"
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    {/* CTAs */}
                    <div className="flex items-center gap-4">
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-xs font-mono font-semibold text-slate-300 hover:text-violet-400 transition-colors"
                        >
                          <FiGithub className="w-4 h-4" />
                          <span>VIEW CODE</span>
                          <FiArrowUpRight className="w-3.5 h-3.5" />
                        </a>
                      )}
                      {project.demo && (
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-xs font-mono font-semibold text-violet-400 hover:text-violet-300 transition-colors"
                        >
                          <FiExternalLink className="w-4 h-4" />
                          <span>LIVE DEMO</span>
                          <FiArrowUpRight className="w-3.5 h-3.5" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
