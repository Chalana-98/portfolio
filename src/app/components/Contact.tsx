"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { PersonalData } from "../constants";
import { FiMail, FiPhone, FiCopy, FiCheck, FiArrowRight, FiSend } from "react-icons/fi";
import {
  AiOutlineGithub,
  AiFillLinkedin,
  AiOutlineWhatsApp,
} from "react-icons/ai";

export default function Contact() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const copy = (text: string, type: "email" | "phone") => {
    navigator.clipboard.writeText(text);
    if (type === "email") {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2200);
    } else {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2200);
    }
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    // Open mail client with pre-filled content
    const subject = encodeURIComponent(`Portfolio Inquiry from ${formData.name}`);
    const body = encodeURIComponent(
      `Hi Chalana,\n\n${formData.message}\n\nFrom: ${formData.name} (${formData.email})`
    );
    window.location.href = `mailto:${PersonalData.email}?subject=${subject}&body=${body}`;
    setFormSubmitted(true);
  };

  return (
    <section id="contact" className="relative py-28 md:py-36 overflow-hidden">
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
              SCHEDULE A CALL / CONTACT
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight leading-tight mb-6"
          >
            Ready to turn chaos into a <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-indigo-300">working system</span>?
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base sm:text-lg text-slate-400 leading-relaxed font-normal"
          >
            Whether you have a specific backend bottleneck, need automated AI workflows, or want a high-performance system engineered to last.
          </motion.p>
        </div>

        {/* Contact Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-24">
          {/* Left: Direct Access Cards */}
          <div className="lg:col-span-5 space-y-4">
            {/* Direct Email Card */}
            <div className="glass-panel p-6 rounded-2xl border border-violet-500/20 bg-[#090b1a]/90 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-violet-950/50 border border-violet-500/30 text-violet-400 flex items-center justify-center text-lg">
                    <FiMail />
                  </div>
                  <span className="font-mono text-[11px] text-emerald-400 flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    REPLIES &lt; 24H
                  </span>
                </div>
                <h3 className="text-sm font-mono text-slate-400 uppercase tracking-wider mb-1">
                  DIRECT EMAIL
                </h3>
                <p className="text-base sm:text-lg font-bold text-white break-all">
                  {PersonalData.email}
                </p>
              </div>

              <div className="mt-5 pt-4 border-t border-slate-800/80 flex items-center gap-3">
                <button
                  onClick={() => copy(PersonalData.email, "email")}
                  className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl font-mono text-xs font-semibold bg-white/5 border border-white/10 text-slate-300 hover:text-white hover:border-violet-500/40 transition-colors"
                >
                  {copiedEmail ? (
                    <>
                      <FiCheck className="text-emerald-400 w-3.5 h-3.5" />
                      COPIED TO CLIPBOARD
                    </>
                  ) : (
                    <>
                      <FiCopy className="w-3.5 h-3.5" />
                      COPY EMAIL
                    </>
                  )}
                </button>
                <a
                  href={`mailto:${PersonalData.email}`}
                  className="px-4 py-2.5 rounded-xl font-mono text-xs font-semibold bg-violet-600 text-white hover:bg-violet-500 transition-colors"
                >
                  SEND
                </a>
              </div>
            </div>

            {/* Direct WhatsApp / Phone Card */}
            <div className="glass-panel p-6 rounded-2xl border border-violet-500/20 bg-[#090b1a]/90 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-emerald-950/50 border border-emerald-500/30 text-emerald-400 flex items-center justify-center text-lg">
                    <FiPhone />
                  </div>
                  <span className="font-mono text-[11px] text-slate-400">
                    KANDY, SRI LANKA (UTC+5:30)
                  </span>
                </div>
                <h3 className="text-sm font-mono text-slate-400 uppercase tracking-wider mb-1">
                  DIRECT CALL & WHATSAPP
                </h3>
                <p className="text-base sm:text-lg font-bold text-white">
                  {PersonalData.phone}
                </p>
              </div>

              <div className="mt-5 pt-4 border-t border-slate-800/80 flex items-center gap-3">
                <button
                  onClick={() => copy(PersonalData.phone, "phone")}
                  className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl font-mono text-xs font-semibold bg-white/5 border border-white/10 text-slate-300 hover:text-white hover:border-emerald-500/40 transition-colors"
                >
                  {copiedPhone ? (
                    <>
                      <FiCheck className="text-emerald-400 w-3.5 h-3.5" />
                      COPIED!
                    </>
                  ) : (
                    <>
                      <FiCopy className="w-3.5 h-3.5" />
                      COPY NUMBER
                    </>
                  )}
                </button>
                <a
                  href={PersonalData.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl font-mono text-xs font-semibold bg-emerald-600 text-white hover:bg-emerald-500 transition-colors"
                >
                  <AiOutlineWhatsApp className="w-4 h-4" />
                  CHAT
                </a>
              </div>
            </div>

            {/* Social Links Bar */}
            <div className="glass-panel p-5 rounded-2xl border border-violet-500/20 bg-[#090b1a]/90 flex items-center justify-between">
              <span className="font-mono text-xs text-slate-400 uppercase tracking-wider">
                NETWORK PROFILES:
              </span>
              <div className="flex items-center gap-4 text-xl text-slate-400">
                <a
                  href={PersonalData.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-violet-400 transition-colors p-1"
                  aria-label="GitHub"
                >
                  <AiOutlineGithub />
                </a>
                <a
                  href={PersonalData.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-violet-400 transition-colors p-1"
                  aria-label="LinkedIn"
                >
                  <AiFillLinkedin />
                </a>
                <a
                  href={PersonalData.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-emerald-400 transition-colors p-1"
                  aria-label="WhatsApp"
                >
                  <AiOutlineWhatsApp />
                </a>
              </div>
            </div>
          </div>

          {/* Right: Interactive Message Box */}
          <div className="lg:col-span-7 glass-panel p-8 sm:p-10 rounded-2xl border border-violet-500/25 bg-[#090b1a]/95 shadow-glow-sm">
            <h3 className="text-2xl font-bold text-white mb-2">Send a direct message</h3>
            <p className="text-sm text-slate-400 mb-8">
              Tell me about the problem you are solving or what you want to build.
            </p>

            {formSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="p-8 rounded-2xl bg-violet-950/40 border border-violet-500/40 text-center space-y-3"
              >
                <div className="w-12 h-12 rounded-full bg-violet-500/20 text-violet-400 flex items-center justify-center mx-auto text-xl">
                  <FiCheck />
                </div>
                <h4 className="text-xl font-bold text-white">Opening your mail client...</h4>
                <p className="text-sm text-slate-400">
                  Your message has been formatted. If your email application did not launch automatically, feel free to write to{" "}
                  <span className="text-violet-300 font-mono">{PersonalData.email}</span>.
                </p>
                <button
                  onClick={() => setFormSubmitted(false)}
                  className="mt-4 font-mono text-xs text-violet-400 hover:underline"
                >
                  Send another message
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleFormSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block font-mono text-xs text-slate-400 uppercase tracking-wider mb-2">
                      YOUR NAME
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Alex Morgan"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#0e122b] border border-violet-500/20 text-white placeholder-slate-600 focus:outline-none focus:border-violet-500 focus:ring-1 focus:ring-violet-500 transition-colors text-sm"
                    />
                  </div>
                  <div>
                    <label className="block font-mono text-xs text-slate-400 uppercase tracking-wider mb-2">
                      YOUR EMAIL
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="alex@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#0e122b] border border-violet-500/20 text-white placeholder-slate-600 focus:outline-none focus:border-violet-500 focus:ring-1 focus:ring-violet-500 transition-colors text-sm"
                    />
                  </div>
                </div>

                <div>
                  <label className="block font-mono text-xs text-slate-400 uppercase tracking-wider mb-2">
                    PROJECT OR INQUIRY DETAILS
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="We need to automate our data ingestion with Azure Synapse and LangChain agents..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#0e122b] border border-violet-500/20 text-white placeholder-slate-600 focus:outline-none focus:border-violet-500 focus:ring-1 focus:ring-violet-500 transition-colors text-sm resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full btn-viosu-primary py-3.5 rounded-xl font-semibold text-sm tracking-wide inline-flex items-center justify-center gap-2"
                >
                  <span>Dispatch Message</span>
                  <FiSend className="w-4 h-4" />
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Agency Footer */}
        <footer className="pt-10 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs text-slate-500">
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-emerald-400" />
            <span>AVAILABLE FOR ENTERPRISE & FULL-STACK ENGAGEMENTS</span>
          </div>

          <p>© {new Date().getFullYear()} Chalana Shehara. Engineered for production.</p>
        </footer>
      </div>
    </section>
  );
}
