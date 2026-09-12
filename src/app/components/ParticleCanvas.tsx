"use client";

import React, { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  z: number;
  ox: number;
  oy: number;
  size: number;
  color: string;
  speed: number;
  alpha: number;
  orbitAngle: number;
  orbitRadius: number;
  orbitSpeed: number;
}

export default function ParticleCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Mouse coordinates with smoothing
    const mouse = {
      x: width * 0.65,
      y: height * 0.45,
      targetX: width * 0.65,
      targetY: height * 0.45,
      isHovering: false,
    };

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouse.targetX = e.clientX;
      mouse.targetY = e.clientY;
      mouse.isHovering = true;
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("mousemove", handleMouseMove);

    // Colors matching Viosu: neon violet, indigo, electric purple, soft lavender
    const colors = [
      "rgba(139, 92, 246, ", // #8b5cf6
      "rgba(99, 102, 241, ", // #6366f1
      "rgba(168, 85, 247, ", // #a855f7
      "rgba(192, 132, 252, ", // #c084fc
      "rgba(124, 58, 237, ", // #7c3aed
    ];

    // Create particles with depth and radial distribution
    const PARTICLE_COUNT = 450;
    const particles: Particle[] = [];

    for (let i = 0; i < PARTICLE_COUNT; i++) {
      const angle = Math.random() * Math.PI * 2;
      const radius = 40 + Math.pow(Math.random(), 1.5) * Math.max(width, height) * 0.75;
      particles.push({
        x: 0,
        y: 0,
        z: Math.random() * 1000 + 200,
        ox: Math.cos(angle) * radius,
        oy: Math.sin(angle) * radius,
        size: Math.random() * 2.2 + 0.8,
        color: colors[Math.floor(Math.random() * colors.length)],
        speed: Math.random() * 0.4 + 0.2,
        alpha: Math.random() * 0.6 + 0.3,
        orbitAngle: angle,
        orbitRadius: radius,
        orbitSpeed: (Math.random() - 0.5) * 0.0015,
      });
    }

    // Reticle animation state
    let reticleAngle = 0;

    const render = () => {
      // Lerp mouse towards target
      mouse.x += (mouse.targetX - mouse.x) * 0.04;
      mouse.y += (mouse.targetY - mouse.y) * 0.04;

      ctx.clearRect(0, 0, width, height);

      // Deep space gradient backdrop
      const bgGrad = ctx.createRadialGradient(
        mouse.x,
        mouse.y,
        50,
        mouse.x,
        mouse.y,
        Math.max(width, height) * 0.85
      );
      bgGrad.addColorStop(0, "rgba(22, 16, 48, 0.4)");
      bgGrad.addColorStop(0.5, "rgba(10, 11, 24, 0.2)");
      bgGrad.addColorStop(1, "rgba(6, 7, 13, 0)");
      ctx.fillStyle = bgGrad;
      ctx.fillRect(0, 0, width, height);

      const focalX = mouse.x;
      const focalY = mouse.y;

      // Draw faint radial perspective rays
      const RAY_COUNT = 24;
      ctx.save();
      for (let r = 0; r < RAY_COUNT; r++) {
        const rayAngle = (r / RAY_COUNT) * Math.PI * 2 + reticleAngle * 0.05;
        const len = Math.max(width, height) * 0.9;
        const endX = focalX + Math.cos(rayAngle) * len;
        const endY = focalY + Math.sin(rayAngle) * len;

        const rayGrad = ctx.createLinearGradient(focalX, focalY, endX, endY);
        rayGrad.addColorStop(0, "rgba(139, 92, 246, 0.08)");
        rayGrad.addColorStop(0.3, "rgba(99, 102, 241, 0.03)");
        rayGrad.addColorStop(1, "rgba(99, 102, 241, 0)");

        ctx.beginPath();
        ctx.moveTo(focalX, focalY);
        ctx.lineTo(endX, endY);
        ctx.strokeStyle = rayGrad;
        ctx.lineWidth = 0.75;
        ctx.stroke();
      }
      ctx.restore();

      // Render 3D Particles
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        // Orbit slowly
        p.orbitAngle += p.orbitSpeed;
        p.ox = Math.cos(p.orbitAngle) * p.orbitRadius;
        p.oy = Math.sin(p.orbitAngle) * p.orbitRadius;

        // Perspective projection
        const fov = 400;
        const scale = fov / (fov + p.z);
        const px = focalX + p.ox * scale;
        const py = focalY + p.oy * scale;

        // Update z (slow drift forward)
        p.z -= p.speed;
        if (p.z < 50) {
          p.z = 1200;
        }

        // Only draw if within bounds
        if (px >= -50 && px <= width + 50 && py >= -50 && py <= height + 50) {
          const currentSize = Math.max(0.6, p.size * scale * 1.8);
          const currentAlpha = Math.min(1, Math.max(0.1, p.alpha * scale * 2.2));

          ctx.beginPath();
          ctx.arc(px, py, currentSize, 0, Math.PI * 2);
          ctx.fillStyle = `${p.color}${currentAlpha})`;
          ctx.fill();

          // Subtle glow for larger particles
          if (currentSize > 1.8) {
            ctx.beginPath();
            ctx.arc(px, py, currentSize * 2.5, 0, Math.PI * 2);
            ctx.fillStyle = `${p.color}${currentAlpha * 0.18})`;
            ctx.fill();
          }

          // Connecting lines to nearby particles for constellation effect
          for (let j = i + 1; j < Math.min(i + 6, particles.length); j++) {
            const p2 = particles[j];
            const p2Scale = fov / (fov + p2.z);
            const p2x = focalX + p2.ox * p2Scale;
            const p2y = focalY + p2.oy * p2Scale;
            const dist = Math.hypot(px - p2x, py - p2y);

            if (dist < 85) {
              const lineAlpha = (1 - dist / 85) * 0.15 * scale;
              ctx.beginPath();
              ctx.moveTo(px, py);
              ctx.lineTo(p2x, p2y);
              ctx.strokeStyle = `rgba(168, 85, 247, ${lineAlpha})`;
              ctx.lineWidth = 0.5;
              ctx.stroke();
            }
          }
        }
      }

      // Draw Viosu-style Targeting Reticle / Crosshair Ring (Screenshot 1, 2, 4)
      reticleAngle += 0.008;
      const rx = mouse.x;
      const ry = mouse.y;

      ctx.save();
      ctx.translate(rx, ry);

      // Outer dashed circle
      ctx.beginPath();
      ctx.arc(0, 0, 32, 0, Math.PI * 2);
      ctx.strokeStyle = "rgba(168, 85, 247, 0.35)";
      ctx.lineWidth = 1;
      ctx.setLineDash([4, 6]);
      ctx.stroke();

      // Inner faint circle
      ctx.beginPath();
      ctx.arc(0, 0, 18, 0, Math.PI * 2);
      ctx.strokeStyle = "rgba(139, 92, 246, 0.25)";
      ctx.lineWidth = 1;
      ctx.setLineDash([]);
      ctx.stroke();

      // Crosshair notches
      const notchLen = 6;
      ctx.strokeStyle = "rgba(192, 132, 252, 0.5)";
      ctx.lineWidth = 1;

      // Top
      ctx.beginPath();
      ctx.moveTo(0, -32);
      ctx.lineTo(0, -32 - notchLen);
      ctx.stroke();
      // Bottom
      ctx.beginPath();
      ctx.moveTo(0, 32);
      ctx.lineTo(0, 32 + notchLen);
      ctx.stroke();
      // Left
      ctx.beginPath();
      ctx.moveTo(-32, 0);
      ctx.lineTo(-32 - notchLen, 0);
      ctx.stroke();
      // Right
      ctx.beginPath();
      ctx.moveTo(32, 0);
      ctx.lineTo(32 + notchLen, 0);
      ctx.stroke();

      // Center glowing dot
      ctx.beginPath();
      ctx.arc(0, 0, 2, 0, Math.PI * 2);
      ctx.fillStyle = "rgba(192, 132, 252, 0.8)";
      ctx.fill();

      ctx.restore();

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none z-0 opacity-85 transition-opacity duration-700"
    />
  );
}
