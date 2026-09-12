"use client";

import React, { useState, useRef, useCallback, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FiAlertTriangle,
  FiCheckCircle,
  FiActivity,
  FiArrowRight,
  FiZap,
} from "react-icons/fi";

export default function ChaosSystemSlider() {
  const [value, setValue] = useState<number>(75);
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const trackRef = useRef<HTMLDivElement>(null);

  const updateFromPointer = useCallback((clientX: number) => {
    if (!trackRef.current) return;
    const rect = trackRef.current.getBoundingClientRect();
    const rawPercent = ((clientX - rect.left) / rect.width) * 100;
    const clamped = Math.max(0, Math.min(100, Math.round(rawPercent)));
    setValue(clamped);
  }, []);

  const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(true);
    updateFromPointer(e.clientX);
    (e.target as HTMLElement).setPointerCapture(e.pointerId);
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!isDragging) return;
    updateFromPointer(e.clientX);
  };

  const handlePointerUp = (e: React.PointerEvent<HTMLDivElement>) => {
    setIsDragging(false);
    try {
      (e.target as HTMLElement).releasePointerCapture(e.pointerId);
    } catch {
      // ignore
    }
  };

  // Keyboard accessibility
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft" || e.key === "ArrowDown") {
      setValue((v) => Math.max(0, v - 5));
    } else if (e.key === "ArrowRight" || e.key === "ArrowUp") {
      setValue((v) => Math.min(100, v + 5));
    } else if (e.key === "Home") {
      setValue(0);
    } else if (e.key === "End") {
      setValue(100);
    }
  };

  const isSystem = value >= 50;

  return (
    <div className="glass-panel p-6 sm:p-7 rounded-2xl mb-10 max-w-2xl border border-violet-500/30 bg-[#090b17]/95 shadow-2xl select-none">
      {/* Top Header & Interactive Clickable Preset Buttons */}
      <div className="flex items-center justify-between font-mono text-xs sm:text-sm tracking-wider uppercase font-semibold mb-4">
        <button
          type="button"
          onClick={() => setValue(0)}
          className={`flex items-center gap-2 px-3 py-1.5 rounded-lg border transition-all duration-200 ${
            value < 40
              ? "text-rose-300 bg-rose-950/60 border-rose-500/50 shadow-sm shadow-rose-950/40"
              : "text-slate-500 border-transparent hover:text-slate-300 hover:bg-white/5"
          }`}
        >
          <span className={`w-2 h-2 rounded-full ${value < 40 ? "bg-rose-500 animate-pulse" : "bg-slate-600"}`} />
          <span>BEFORE: CHAOS</span>
        </button>

        <span className="text-[11px] font-mono text-slate-500 hidden sm:inline-block">
          {value}% TRANSFORMATION
        </span>

        <button
          type="button"
          onClick={() => setValue(100)}
          className={`flex items-center gap-2 px-3 py-1.5 rounded-lg border transition-all duration-200 ${
            value >= 60
              ? "text-violet-300 bg-violet-950/60 border-violet-500/50 shadow-glow-sm"
              : "text-slate-500 border-transparent hover:text-slate-300 hover:bg-white/5"
          }`}
        >
          <span>AFTER: SYSTEM</span>
          <span className={`w-2 h-2 rounded-full ${value >= 60 ? "bg-violet-400 animate-pulse" : "bg-slate-600"}`} />
        </button>
      </div>

      {/* Interactive Custom Drag Track */}
      <div
        ref={trackRef}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerCancel={handlePointerUp}
        onKeyDown={handleKeyDown}
        tabIndex={0}
        role="slider"
        aria-valuenow={value}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label="Chaos to System transformation slider"
        className="relative py-4 cursor-pointer touch-none focus:outline-none group"
      >
        {/* Track Background Rail */}
        <div className="relative h-3 w-full rounded-full bg-[#141830] border border-violet-500/20 overflow-hidden shadow-inner">
          {/* Glowing Fill Bar */}
          <div
            className="h-full rounded-full transition-all duration-75"
            style={{
              width: `${value}%`,
              background:
                value < 50
                  ? `linear-gradient(to right, #f43f5e 0%, #fb7185 100%)`
                  : `linear-gradient(to right, #f43f5e 0%, #7c3aed 50%, #a855f7 100%)`,
              boxShadow:
                value >= 50
                  ? "0 0 16px 2px rgba(124, 58, 237, 0.4)"
                  : "0 0 16px 2px rgba(244, 63, 94, 0.3)",
            }}
          />
        </div>

        {/* Draggable Circular Knob (Matching Viosu Screenshot 1 exactly) */}
        <div
          className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 transition-transform ease-out pointer-events-none"
          style={{ left: `${value}%` }}
        >
          <div
            className={`w-9 h-9 rounded-full bg-[#090b17] border-2 flex items-center justify-center shadow-xl transition-all ${
              isDragging
                ? "scale-125 border-white shadow-glow-lg ring-4 ring-violet-500/30"
                : "border-violet-400 group-hover:scale-110 shadow-glow-md"
            }`}
          >
            {/* Center target circle indicator */}
            <div
              className={`w-3.5 h-3.5 rounded-full transition-colors ${
                value < 50 ? "bg-rose-400" : "bg-violet-400 animate-pulse"
              }`}
            />
          </div>
        </div>
      </div>

      {/* Caption & Instruction */}
      <div className="flex items-center justify-between font-mono text-xs text-slate-400 mb-5">
        <span className="flex items-center gap-1.5">
          <FiActivity className="w-3.5 h-3.5 text-violet-400" />
          Drag the knob or click anywhere on the rail.
        </span>
        <span
          className={`font-semibold px-2 py-0.5 rounded text-[11px] ${
            isSystem ? "bg-violet-950/60 text-violet-300 border border-violet-500/30" : "bg-rose-950/60 text-rose-300 border border-rose-500/30"
          }`}
        >
          {value}% {isSystem ? "System" : "Chaos"}
        </span>
      </div>

      {/* Dynamic Before / After Cards */}
      <div className="pt-4 border-t border-slate-800/80 grid grid-cols-1 sm:grid-cols-2 gap-3.5">
        {/* Chaos Card */}
        <div
          onClick={() => setValue(15)}
          className={`p-4 rounded-xl border transition-all duration-300 cursor-pointer ${
            value < 50
              ? "bg-rose-950/40 border-rose-500/50 text-rose-100 shadow-sm shadow-rose-900/30"
              : "bg-[#0b0e20]/40 border-slate-800/60 text-slate-500 opacity-50 hover:opacity-75"
          }`}
        >
          <div className="flex items-center justify-between mb-2">
            <span className="font-mono text-xs font-bold flex items-center gap-1.5 text-rose-400">
              <FiAlertTriangle className="w-4 h-4" />
              BEFORE: CHAOS
            </span>
            {value < 50 && (
              <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-rose-900/50 text-rose-300">
                ACTIVE VIEW
              </span>
            )}
          </div>
          <p className="text-xs leading-relaxed text-slate-300 font-sans">
            Manual data reconciliations, unmonitored scripts, data silos, and midnight production panics.
          </p>
          <div className="mt-2.5 flex flex-wrap gap-1">
            <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-rose-900/40 text-rose-300">
              Fragile Scripts
            </span>
            <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-rose-900/40 text-rose-300">
              Manual Sync
            </span>
          </div>
        </div>

        {/* System Card */}
        <div
          onClick={() => setValue(85)}
          className={`p-4 rounded-xl border transition-all duration-300 cursor-pointer ${
            value >= 50
              ? "bg-violet-950/40 border-violet-500/60 text-violet-100 shadow-glow-sm"
              : "bg-[#0b0e20]/40 border-slate-800/60 text-slate-500 opacity-50 hover:opacity-75"
          }`}
        >
          <div className="flex items-center justify-between mb-2">
            <span className="font-mono text-xs font-bold flex items-center gap-1.5 text-violet-300">
              <FiZap className="w-4 h-4 text-violet-400" />
              AFTER: SYSTEM
            </span>
            {value >= 50 && (
              <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-violet-900/50 text-violet-300">
                ACTIVE VIEW
              </span>
            )}
          </div>
          <p className="text-xs leading-relaxed text-slate-300 font-sans">
            Clean Architecture .NET APIs, Azure Synapse data synchronization, autonomous AI agents & verified CI/CD.
          </p>
          <div className="mt-2.5 flex flex-wrap gap-1">
            <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-violet-900/40 text-violet-300">
              Clean .NET APIs
            </span>
            <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-violet-900/40 text-violet-300">
              Synapse ETL
            </span>
            <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-violet-900/40 text-violet-300">
              LangChain AI
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
