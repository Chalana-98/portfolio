"use client";

import React from "react";
import { motion } from "framer-motion";
import { Experiences } from "../constants";
import { FiBriefcase, FiCheckCircle } from "react-icons/fi";

export default function Experience() {
  return (
    <section id="experience" className="relative py-28 md:py-36 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-3 mb-6"
          >
            <span className="h-[1px] w-8 bg-violet-500/60" />
            <span className="font-mono text-xs sm:text-sm tracking-widest text-violet-400 uppercase font-semibold">
              CAREER TRAJECTORY
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight leading-tight"
          >
            Where I&apos;ve delivered in <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-indigo-300">production</span>.
          </motion.h2>
        </div>

        {/* Experience Cards */}
        <div className="space-y-8">
          {Experiences.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="glass-panel p-8 sm:p-10 rounded-2xl border border-violet-500/20 bg-[#090b1a]/90 hover:border-violet-500/40 hover:shadow-glow-md transition-all duration-300"
            >
              {/* Header */}
              <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-violet-950/50 border border-violet-500/30 text-violet-400 flex items-center justify-center text-xl shadow-glow-sm">
                    <FiBriefcase />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white tracking-tight">
                      {item.role}
                    </h3>
                    <p className="text-base font-semibold text-violet-400">
                      {item.company} <span className="text-slate-500 font-normal">({item.location})</span>
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-2">
                  <span className="font-mono text-xs px-3.5 py-1.5 rounded-full bg-violet-950/60 text-violet-300 border border-violet-500/30 font-semibold">
                    {item.period}
                  </span>
                  <span className="font-mono text-xs px-3.5 py-1.5 rounded-full bg-white/5 text-slate-300 border border-white/10">
                    {item.type}
                  </span>
                </div>
              </div>

              {/* Highlights */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                {item.highlights.map((bullet, bIdx) => (
                  <div
                    key={bIdx}
                    className="flex items-start gap-3 p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.04]"
                  >
                    <FiCheckCircle className="w-4 h-4 text-violet-400 mt-1 flex-shrink-0" />
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                      {bullet}
                    </p>
                  </div>
                ))}
              </div>

              {/* Tech Stack Pills */}
              <div className="pt-6 border-t border-slate-800/80">
                <div className="font-mono text-[11px] text-slate-400 uppercase tracking-widest mb-3">
                  TECHNOLOGIES OPERATED IN PRODUCTION:
                </div>
                <div className="flex flex-wrap gap-2">
                  {item.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="font-mono text-xs px-3 py-1 rounded-md bg-[#101328] border border-violet-500/20 text-slate-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
