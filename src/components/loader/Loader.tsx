"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { profile } from "@/data/portfolio";

export function Loader({ onComplete }: { onComplete: () => void }) {
  const [pct, setPct] = useState(0);

  useEffect(() => {
    const start = performance.now();
    const dur = 3500;
    let raf = 0;
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / dur);
      setPct(Math.floor(p * 100));
      if (p < 1) raf = requestAnimationFrame(tick);
      else setTimeout(onComplete, 350);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.04, filter: "blur(20px)" }}
      transition={{ duration: 0.9, ease: [0.83, 0, 0.17, 1] }}
      className="fixed inset-0 z-[200] grid place-items-center bg-bg overflow-hidden"
    >
      {/* Particle field */}
      <div className="absolute inset-0 overflow-hidden">
        {Array.from({ length: 60 }).map((_, i) => (
          <span
            key={i}
            className="absolute h-1 w-1 rounded-full bg-primary/70"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animation: `float ${4 + Math.random() * 4}s ease-in-out ${Math.random() * 2}s infinite`,
              opacity: 0.2 + Math.random() * 0.6,
              transform: `scale(${0.5 + Math.random() * 1.5})`,
            }}
          />
        ))}
      </div>

      {/* Grid */}
      <div className="absolute inset-0 bg-grid opacity-30" />

      {/* Center content */}
      <div className="relative z-10 text-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="font-mono text-[10px] tracking-[0.4em] text-primary/70 mb-6">
            INITIALIZING PORTFOLIO_OS · v1.0
          </p>
          <h1 data-text={profile.name} className="glitch font-display text-4xl md:text-7xl font-bold tracking-[0.05em]">
            {profile.name}
          </h1>
          <p className="mt-4 text-white/50 text-sm md:text-base font-mono">{profile.tagline}</p>
        </motion.div>

        <div className="mt-12 w-[260px] md:w-[420px] mx-auto">
          <div className="flex items-end justify-between mb-3 font-mono text-xs">
            <span className="text-white/40">LOADING ASSETS</span>
            <span className="text-primary font-bold tabular-nums">{String(pct).padStart(3, "0")}%</span>
          </div>
          <div className="h-px w-full bg-white/10 relative overflow-hidden">
            <motion.span
              className="absolute inset-y-0 left-0 bg-gradient-to-r from-primary via-secondary to-accent"
              style={{ width: `${pct}%` }}
            />
          </div>
          <div className="mt-3 grid grid-cols-3 gap-2 text-[9px] font-mono text-white/30">
            <span>· three.js scenes</span>
            <span className="text-center">· gsap timelines</span>
            <span className="text-right">· lenis smooth</span>
          </div>
        </div>
      </div>

      {/* Corner brackets */}
      {[
        "top-6 left-6", "top-6 right-6 rotate-90",
        "bottom-6 left-6 -rotate-90", "bottom-6 right-6 rotate-180",
      ].map((cls, i) => (
        <svg key={i} className={`absolute h-8 w-8 ${cls} text-primary/70`} viewBox="0 0 32 32" fill="none">
          <path d="M2 12 V2 H12" stroke="currentColor" strokeWidth="2" />
        </svg>
      ))}
    </motion.div>
  );
}
