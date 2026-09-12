"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  FiGlobe,
  FiCpu,
  FiDatabase,
  FiServer,
  FiLayers,
  FiShield,
  FiSmartphone,
  FiTerminal,
  FiSliders,
} from "react-icons/fi";

const services = [
  {
    icon: <FiGlobe className="w-5 h-5 text-violet-400" />,
    title: "Websites & Web Apps",
    description:
      "Sites that load fast, read clean, and don't fight your customer. Engineered with Next.js, React, and TypeScript.",
  },
  {
    icon: <FiCpu className="w-5 h-5 text-indigo-400" />,
    title: "Agentic AI & Automation",
    description:
      "Processes that think faster than you can say 'automation.' (Not everything needs AI, and I'll say so.) LangChain & Agent workflows.",
  },
  {
    icon: <FiDatabase className="w-5 h-5 text-purple-400" />,
    title: "Azure Synapse & Data Pipelines",
    description:
      "Production ETL pipelines and enterprise data lake synchronization that keep company data consistent and fast.",
  },
  {
    icon: <FiServer className="w-5 h-5 text-violet-400" />,
    title: "Enterprise .NET Backends",
    description:
      "ASP.NET Core APIs built with Clean Architecture & CQRS. The rock-solid engine powering mission-critical business workflows.",
  },
  {
    icon: <FiLayers className="w-5 h-5 text-indigo-400" />,
    title: "Microservices & Dapr",
    description:
      "Decoupled event-driven microservices, asynchronous pub/sub messaging, and high-concurrency distributed systems.",
  },
  {
    icon: <FiShield className="w-5 h-5 text-purple-400" />,
    title: "DevSecOps & CI/CD",
    description:
      "Automated GitHub Actions and Azure DevOps pipelines, Docker containers, Kubernetes, and SonarQube quality gates.",
  },
  {
    icon: <FiTerminal className="w-5 h-5 text-violet-400" />,
    title: "High-Throughput Databases",
    description:
      "SQL Server and PostgreSQL schema design, Dapper ORM query optimization, and resilient indexing strategies.",
  },
  {
    icon: <FiSmartphone className="w-5 h-5 text-indigo-400" />,
    title: "Mobile Applications",
    description:
      "Cross-platform Flutter & Dart mobile applications. Smooth native gestures, clean state management, and intuitive UX.",
  },
  {
    icon: <FiSliders className="w-5 h-5 text-purple-400" />,
    title: "Modern UI/UX & Motion",
    description:
      "Curated dark modes, high-contrast typography, glassmorphism, and silky micro-interactions that elevate brand trust.",
  },
];

export default function ServicesGrid() {
  return (
    <section id="services" className="relative py-28 md:py-36 overflow-hidden">
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
              SERVICES & EXPERTISE
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight leading-tight"
          >
            Nine things I&apos;m <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-indigo-300">actually good at</span>.
          </motion.h2>
        </div>

        {/* 3x3 Card Grid (Screenshot 3) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((svc, idx) => (
            <motion.div
              key={svc.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.45, delay: idx * 0.06 }}
              whileHover={{ y: -5 }}
              className="glass-panel p-7 rounded-2xl flex flex-col justify-between border border-violet-500/15 bg-[#090b1a]/80 hover:border-violet-500/40 hover:bg-[#0e122b]/85 hover:shadow-glow-sm transition-all duration-300 group"
            >
              <div>
                {/* Icon Container */}
                <div className="w-11 h-11 rounded-xl bg-violet-950/40 border border-violet-500/30 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-violet-900/50 transition-all">
                  {svc.icon}
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-violet-200 transition-colors">
                  {svc.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-slate-400 leading-relaxed font-normal">
                  {svc.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-800/60 flex items-center justify-between">
                <span className="font-mono text-[10px] uppercase tracking-widest text-slate-500 group-hover:text-violet-400 transition-colors">
                  CAPABILITY // 0{idx + 1}
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-violet-500/50 group-hover:bg-violet-400 transition-colors" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
