"use client";

import React from "react";
import { motion } from "framer-motion";
import { EducationList, CertificationsList, ExtracurricularList } from "../constants";
import { FiAward, FiBookOpen, FiTerminal } from "react-icons/fi";

export default function EducationCertifications() {
  const degree = EducationList[0];

  return (
    <section id="education" className="relative py-28 md:py-36 overflow-hidden">
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
              ACADEMIC & CERTIFICATIONS
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight leading-tight"
          >
            Built on strong <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-indigo-300">foundations</span>.
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Main Degree Card */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 glass-panel p-8 sm:p-10 rounded-2xl border border-violet-500/20 bg-[#090b1a]/90 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-violet-950/50 border border-violet-500/30 text-violet-400 flex items-center justify-center text-lg">
                  <FiBookOpen />
                </div>
                <div>
                  <span className="font-mono text-xs text-violet-400 font-semibold tracking-wider">
                    BACHELOR OF SCIENCE (HONS)
                  </span>
                  <div className="font-mono text-[11px] text-slate-500">{degree.period}</div>
                </div>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-3">
                {degree.degree}
              </h3>
              <p className="text-base font-semibold text-violet-300 mb-4">
                {degree.institution} • {degree.location}
              </p>
              <p className="text-sm text-slate-400 leading-relaxed">
                {degree.details}
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-800/80 flex flex-wrap gap-2">
              <span className="font-mono text-xs px-3 py-1 rounded bg-[#11142c] border border-violet-500/20 text-slate-300">
                Enterprise Software Engineering
              </span>
              <span className="font-mono text-xs px-3 py-1 rounded bg-[#11142c] border border-violet-500/20 text-slate-300">
                Distributed Cloud Architecture
              </span>
              <span className="font-mono text-xs px-3 py-1 rounded bg-[#11142c] border border-violet-500/20 text-slate-300">
                Machine Learning
              </span>
            </div>
          </motion.div>

          {/* Certifications & Leadership */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="lg:col-span-5 space-y-4 flex flex-col justify-between"
          >
            {/* Certifications */}
            {CertificationsList.map((cert, idx) => (
              <div
                key={idx}
                className="glass-panel p-6 rounded-2xl border border-violet-500/20 bg-[#090b1a]/90 hover:border-violet-500/40 transition-all"
              >
                <div className="flex items-center gap-3 mb-2">
                  <FiAward className="w-4 h-4 text-violet-400 flex-shrink-0" />
                  <span className="font-mono text-xs text-violet-400 font-semibold uppercase tracking-wider">
                    {cert.issuer}
                  </span>
                </div>
                <h4 className="text-base font-bold text-white mb-2">{cert.title}</h4>
                <p className="text-xs text-slate-400 leading-relaxed">{cert.highlight}</p>
              </div>
            ))}

            {/* Hackathon Award */}
            <div className="glass-panel p-6 rounded-2xl border border-violet-500/20 bg-[#090b1a]/90">
              <div className="flex items-center gap-3 mb-2">
                <FiTerminal className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span className="font-mono text-xs text-emerald-400 font-semibold uppercase tracking-wider">
                  NATIONAL HACKATHON
                </span>
              </div>
              <h4 className="text-base font-bold text-white mb-1">
                {ExtracurricularList[0].role}
              </h4>
              <p className="font-mono text-xs text-slate-400 mb-2">
                {ExtracurricularList[0].organization}
              </p>
              <p className="text-xs text-slate-400 leading-relaxed">
                {ExtracurricularList[0].desc}
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
