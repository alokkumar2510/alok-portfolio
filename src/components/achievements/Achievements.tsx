"use client";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { Section } from "@/components/ui/Section";
import { achievements } from "@/data/portfolio";
import { FiAward } from "react-icons/fi";

const NeuralNetwork = dynamic(() => import("@/components/three/NeuralNetwork").then((m) => m.NeuralNetwork), { ssr: false });

export function Achievements() {
  return (
    <Section
      id="achievements"
      eyebrow="04 · Recognition"
      title="Achievement Wall"
      subtitle="Milestones from cloud arcades, open source contributions, and a continuous learning streak."
    >
      <div className="grid lg:grid-cols-12 gap-8 items-center">
        <div className="lg:col-span-5 aspect-square max-w-[500px]">
          <NeuralNetwork />
        </div>

        <div className="lg:col-span-7 grid sm:grid-cols-2 gap-4">
          {achievements.map((a, i) => (
            <motion.div
              key={a.title}
              initial={{ opacity: 0, y: 60, rotateX: 20 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] }}
              className="glass-strong rounded-2xl p-6 spotlight relative overflow-hidden group"
            >
              <div className="absolute -top-10 -right-10 h-32 w-32 rounded-full bg-primary/10 blur-3xl group-hover:bg-primary/20 transition-colors" />
              <div className="flex items-center gap-3 mb-4">
                <div className="grid place-items-center h-12 w-12 rounded-xl glass border-primary/30 text-primary">
                  <FiAward className="text-xl" />
                </div>
                <span className="font-mono text-[10px] tracking-[0.3em] text-white/40 uppercase">{a.year}</span>
              </div>
              <h3 className="font-display text-xl md:text-2xl text-white mb-2">{a.title}</h3>
              <p className="text-sm text-white/60 leading-relaxed">{a.body}</p>
              <div className="mt-5 h-px w-full bg-gradient-to-r from-primary/40 via-secondary/40 to-transparent" />
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
