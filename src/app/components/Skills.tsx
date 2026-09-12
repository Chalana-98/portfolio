"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { SkillCategories } from "../constants";
import {
  SiDotnet, SiTypescript, SiPython, SiReact, SiNextdotjs, SiDocker,
  SiKubernetes, SiGithubactions, SiPostgresql,
  SiAngular, SiTailwindcss, SiJavascript, SiNodedotjs,
  SiPandas, SiNumpy, SiScikitlearn,
} from "react-icons/si";
import { TbBrain, TbDatabase, TbArrowsRightLeft, TbLayersLinked, TbCloud, TbShieldCheck } from "react-icons/tb";
import { HiOutlineCode, HiSparkles } from "react-icons/hi";

const iconMap: Record<string, React.ReactNode> = {
  ".NET / .NET Core": <SiDotnet className="text-purple-500" />,
  "ASP.NET Core": <SiDotnet className="text-indigo-500" />,
  "Microsoft Azure": <TbCloud className="text-blue-500" />,
  "Azure Synapse Analytics": <TbCloud className="text-cyan-600" />,
  "Dapr": <TbArrowsRightLeft className="text-sky-500" />,
  "Clean Architecture & CQRS": <TbLayersLinked className="text-emerald-500" />,
  "Node.js": <SiNodedotjs className="text-emerald-600" />,
  "Microservices": <TbLayersLinked className="text-indigo-500" />,
  "Agentic AI": <TbBrain className="text-pink-500" />,
  "LangChain": <TbBrain className="text-amber-500" />,
  "Microsoft Agent Framework": <SiDotnet className="text-blue-500" />,
  "Python": <SiPython className="text-yellow-500" />,
  "scikit-learn": <SiScikitlearn className="text-orange-500" />,
  "Data Pipelines (Synapse)": <TbDatabase className="text-cyan-600" />,
  "Pandas & NumPy": <SiPandas className="text-blue-500" />,
  "Matplotlib & Seaborn": <SiNumpy className="text-teal-500" />,
  "React.js": <SiReact className="text-cyan-500" />,
  "Next.js": <SiNextdotjs className="text-slate-800 dark:text-slate-200" />,
  "TypeScript": <SiTypescript className="text-blue-600" />,
  "JavaScript": <SiJavascript className="text-yellow-500" />,
  "Angular": <SiAngular className="text-red-600" />,
  "Tailwind CSS": <SiTailwindcss className="text-teal-500" />,
  "KnockoutJS": <HiOutlineCode className="text-red-500" />,
  "Framer Motion": <HiSparkles className="text-purple-500" />,
  "Docker": <SiDocker className="text-blue-500" />,
  "Kubernetes": <SiKubernetes className="text-indigo-500" />,
  "CI/CD Pipelines": <SiGithubactions className="text-slate-700 dark:text-slate-300" />,
  "GitHub Actions": <SiGithubactions className="text-slate-700 dark:text-slate-300" />,
  "Azure DevOps": <TbCloud className="text-blue-600" />,
  "SonarQube & DevSecOps": <TbShieldCheck className="text-sky-500" />,
  "Microsoft SQL Server": <TbDatabase className="text-red-500" />,
  "PostgreSQL": <SiPostgresql className="text-blue-600" />,
  "Dapper ORM": <TbDatabase className="text-emerald-500" />,
  "SignalR": <TbArrowsRightLeft className="text-purple-500" />,
};

export default function Skills() {
  const [activeTab, setActiveTab] = useState<number>(0);

  return (
    <section id="skills" className="py-20 bg-white/50 dark:bg-slate-900/20">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Skills
          </h2>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {SkillCategories.map((cat, idx) => (
            <button
              key={idx}
              onClick={() => setActiveTab(idx)}
              className={`px-4 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 ${
                activeTab === idx
                  ? "bg-brand-blue text-white shadow-soft"
                  : "bg-slate-100 dark:bg-slate-800/90 text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200 dark:hover:bg-slate-700"
              }`}
            >
              {cat.title}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.25 }}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4"
        >
          {SkillCategories[activeTab].skills.map((skill, sIdx) => (
            <motion.div
              key={sIdx}
              whileHover={{ y: -3 }}
              className="glass-panel p-4 rounded-xl flex items-center gap-3 hover:shadow-card transition-all group"
            >
              <div className="w-10 h-10 rounded-lg bg-slate-50 dark:bg-slate-800/90 border border-slate-100 dark:border-slate-700/60 flex items-center justify-center text-xl group-hover:scale-110 transition-transform">
                {iconMap[skill.name] || <HiOutlineCode className="text-brand-blue" />}
              </div>
              <span className="text-sm font-semibold text-slate-700 dark:text-slate-200 group-hover:text-brand-blue dark:group-hover:text-blue-400 transition-colors">
                {skill.name}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
