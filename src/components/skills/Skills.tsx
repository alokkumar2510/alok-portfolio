"use client";
import { useState } from "react";
import dynamic from "next/dynamic";
import { motion, AnimatePresence } from "framer-motion";
import { Section } from "@/components/ui/Section";
import { skillCategories } from "@/data/portfolio";
import { cn } from "@/lib/utils";

const SkillGalaxy = dynamic(() => import("@/components/three/SkillGalaxy").then((m) => m.SkillGalaxy), { ssr: false });

export function Skills() {
  const [active, setActive] = useState(skillCategories[0].id);
  const cat = skillCategories.find((c) => c.id === active)!;

  return (
    <Section
      id="skills"
      eyebrow="02 · Skills"
      title="Interactive Skill Galaxy"
      subtitle="Stacks I orbit around — engineered from product systems to AI agents. Hover any node to expand it."
    >
      <div className="grid lg:grid-cols-2 gap-10 items-center">
        {/* 3D Galaxy */}
        <div className="relative aspect-square w-full max-w-[560px] mx-auto">
          <div className="absolute inset-0 rounded-full bg-radial-fade" />
          <SkillGalaxy />
          <div className="absolute inset-0 grid place-items-center pointer-events-none">
            <div className="text-center">
              <p className="font-mono text-[10px] tracking-[0.4em] text-primary/80">CORE</p>
              <p className="font-display text-2xl text-white mt-1">{cat.label}</p>
            </div>
          </div>
        </div>

        {/* Category tabs + skill nodes */}
        <div>
          <div className="flex flex-wrap gap-2 mb-8">
            {skillCategories.map((c) => (
              <button
                key={c.id}
                onClick={() => setActive(c.id)}
                className={cn(
                  "px-4 py-2 rounded-full text-xs font-mono tracking-[0.2em] uppercase border transition-all",
                  active === c.id
                    ? "bg-white/10 border-primary/40 text-white shadow-glow-sm"
                    : "border-white/10 text-white/60 hover:text-white hover:border-white/30"
                )}
              >
                {c.label}
              </button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={cat.id}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.4 }}
              className="grid sm:grid-cols-2 gap-3"
            >
              {cat.skills.map((s, i) => {
                const Icon = s.icon;
                return (
                  <motion.div
                    key={s.name}
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: i * 0.04 }}
                    className="glass rounded-xl p-4 spotlight group hover:border-primary/40 transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className="grid place-items-center h-10 w-10 rounded-lg border border-white/10 bg-white/5 text-xl"
                        style={{ color: cat.color, boxShadow: `0 0 24px ${cat.color}33` }}
                      >
                        <Icon />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-white font-medium text-sm">{s.name}</p>
                        <p className="text-[11px] text-white/40 truncate">{s.note}</p>
                      </div>
                      <span className="font-mono text-xs text-white/60 tabular-nums">{s.level}%</span>
                    </div>
                    <div className="mt-3 h-1 rounded-full bg-white/5 overflow-hidden">
                      <motion.span
                        initial={{ width: 0 }}
                        whileInView={{ width: `${s.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.1, delay: 0.1 + i * 0.05, ease: [0.16, 1, 0.3, 1] }}
                        className="block h-full"
                        style={{ background: `linear-gradient(90deg, ${cat.color}, #ffffff66)` }}
                      />
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </Section>
  );
}
