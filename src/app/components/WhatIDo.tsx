"use client";

import React from "react";
import { motion } from "framer-motion";
import { FiCpu, FiLayout, FiServer } from "react-icons/fi";

const manifestoItems = [
  {
    number: "01",
    icon: <FiCpu className="w-5 h-5 text-violet-400" />,
    title: "I automate the boring parts",
    description:
      "Data synchronizations, follow-ups, ETL batch pipelines, document processing: the hundred little tasks nobody wants. Handed to software and LangChain AI agents that don't get bored.",
    tags: ["Agentic AI", "Azure Synapse", "Python", "ETL Pipelines"],
  },
  {
    number: "02",
    icon: <FiLayout className="w-5 h-5 text-indigo-400" />,
    title: "I build the parts people see",
    description:
      "Websites, full-stack portals, chatbots, reactive dashboards. The surfaces your users and enterprise stakeholders actually touch, made to work as good as they look.",
    tags: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    number: "03",
    icon: <FiServer className="w-5 h-5 text-purple-400" />,
    title: "I architect the core that never sleeps",
    description:
      "Enterprise ASP.NET Core backends, Dapr microservices, SQL Server & PostgreSQL with Dapper ORM. Systems engineered with Clean Architecture and CQRS for bulletproof uptime.",
    tags: [".NET Core", "Clean Architecture", "Dapper", "MSSQL", "Docker"],
  },
];

export default function WhatIDo() {
  return (
    <section id="what-i-do" className="relative py-28 md:py-36 overflow-hidden">
      {/* Giant Stroke Watermark in Background (Screenshot 2) */}
      <div
        aria-hidden="true"
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[12vw] font-black tracking-widest text-stroke-watermark opacity-40 select-none pointer-events-none"
      >
        SYSTEMS
      </div>

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
              WHAT I DO
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight leading-tight mb-6"
          >
            Most businesses don&apos;t need more software.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base sm:text-xl text-slate-400 leading-relaxed font-normal"
          >
            They need the <span className="text-slate-200 font-semibold">right software</span>, wired together properly, by someone who still monitors and improves it six months later. That&apos;s the whole pitch.
          </motion.p>
        </div>

        {/* Numbered Manifesto Cards (Screenshot 2) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {manifestoItems.map((item, idx) => (
            <motion.div
              key={item.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              whileHover={{ y: -6 }}
              className="glass-panel p-8 rounded-2xl flex flex-col justify-between border border-violet-500/20 bg-[#090b1a]/85 group hover:border-violet-500/50 hover:shadow-glow-md transition-all duration-300"
            >
              <div>
                {/* Header with Number & Icon */}
                <div className="flex items-center justify-between mb-8">
                  <span className="font-mono text-2xl font-bold text-violet-400/80 group-hover:text-violet-300 transition-colors">
                    {item.number}
                  </span>
                  <div className="w-10 h-10 rounded-xl bg-violet-950/40 border border-violet-500/30 flex items-center justify-center group-hover:scale-110 transition-transform">
                    {item.icon}
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 group-hover:text-violet-200 transition-colors leading-snug">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-sm sm:text-base text-slate-400 leading-relaxed mb-6 font-normal">
                  {item.description}
                </p>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5 pt-4 border-t border-slate-800/80">
                {item.tags.map((tag) => (
                  <span
                    key={tag}
                    className="font-mono text-[11px] px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-slate-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
