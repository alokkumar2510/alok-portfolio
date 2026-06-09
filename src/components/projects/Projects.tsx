"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Section } from "@/components/ui/Section";
import { projects, type Project } from "@/data/portfolio";
import { FiArrowUpRight, FiGithub, FiExternalLink } from "react-icons/fi";

function ProjectCard({ p, i }: { p: Project; i: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["8%", "-8%"]);
  const reverse = i % 2 === 1;

  const onMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const r = e.currentTarget.getBoundingClientRect();
    const rx = ((e.clientY - r.top) / r.height - 0.5) * -6;
    const ry = ((e.clientX - r.left) / r.width - 0.5) * 6;
    e.currentTarget.style.transform = `perspective(1200px) rotateX(${rx}deg) rotateY(${ry}deg)`;
  };
  const onMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    e.currentTarget.style.transform = "perspective(1200px) rotateX(0) rotateY(0)";
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
      className={`grid lg:grid-cols-12 gap-6 lg:gap-10 items-center ${reverse ? "lg:[direction:rtl]" : ""}`}
    >
      <div className={`lg:col-span-7 [direction:ltr]`}>
        <motion.div
          style={{ y }}
          onMouseMove={onMouseMove}
          onMouseLeave={onMouseLeave}
          className="relative aspect-[16/10] rounded-3xl overflow-hidden glass-strong spotlight transition-transform duration-300 will-change-transform"
        >
          {/* Faux preview */}
          <div className="absolute inset-0"
            style={{
              background: `radial-gradient(900px 500px at 20% 20%, ${p.accent}33, transparent 60%), radial-gradient(700px 600px at 80% 80%, #7C3AED33, transparent 60%), #05060d`,
            }}
          />
          <div className="absolute inset-0 bg-grid opacity-30" />
          {/* Mock UI */}
          <div className="absolute inset-6 rounded-2xl glass p-5 flex flex-col">
            <div className="flex items-center gap-2">
              <span className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
              <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/70" />
              <span className="h-2.5 w-2.5 rounded-full bg-green-400/70" />
              <span className="ml-3 font-mono text-[10px] tracking-widest text-white/40">{p.id}.alokkumarsahu.in</span>
            </div>
            <div className="mt-5 flex-1 grid grid-cols-3 gap-3">
              <div className="col-span-2 rounded-lg glass p-4">
                <p className="font-display text-xl text-white">{p.title}</p>
                <p className="mt-2 text-[11px] text-white/50 line-clamp-3">{p.description}</p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {p.stack.slice(0, 4).map((s) => (
                    <span key={s} className="px-2 py-0.5 text-[10px] font-mono rounded-full border border-white/10 text-white/60">{s}</span>
                  ))}
                </div>
              </div>
              <div className="rounded-lg glass p-3 flex flex-col justify-between">
                {p.metrics.map((m) => (
                  <div key={m.label}>
                    <p className="font-display text-lg text-white" style={{ color: p.accent }}>{m.value}</p>
                    <p className="text-[9px] text-white/40 uppercase tracking-widest">{m.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          {/* Glowing border */}
          <div className="absolute inset-0 rounded-3xl pointer-events-none"
            style={{ boxShadow: `inset 0 0 60px ${p.accent}22, 0 0 60px ${p.accent}11` }} />
        </motion.div>
      </div>

      <div className="lg:col-span-5 [direction:ltr]">
        <p className="font-mono text-[10px] tracking-[0.4em] text-white/40 uppercase mb-3">
          Project {String(i + 1).padStart(2, "0")} · {p.subtitle}
        </p>
        <h3 className="font-display text-3xl md:text-4xl font-bold text-white">
          <span className="bg-clip-text text-transparent" style={{ backgroundImage: `linear-gradient(90deg, ${p.accent}, #ffffff)` }}>
            {p.title}
          </span>
        </h3>
        <p className="mt-4 text-white/65 leading-relaxed">{p.description}</p>

        <ul className="mt-5 grid sm:grid-cols-2 gap-2">
          {p.features.map((f) => (
            <li key={f} className="flex items-start gap-2 text-sm text-white/70">
              <span className="mt-2 h-1 w-1 rounded-full" style={{ background: p.accent }} />
              {f}
            </li>
          ))}
        </ul>

        <div className="mt-5 flex flex-wrap gap-1.5">
          {p.stack.map((s) => (
            <span key={s} className="px-2.5 py-1 text-[11px] font-mono rounded-full border border-white/10 text-white/60 bg-white/[0.02]">
              {s}
            </span>
          ))}
        </div>

        <div className="mt-7 flex flex-wrap gap-3">
          <a href={p.demo} target="_blank" rel="noreferrer" className="btn-magnetic btn-magnetic--primary">
            Live Demo <FiExternalLink />
          </a>
          <a href={p.github} target="_blank" rel="noreferrer" className="btn-magnetic">
            Source <FiGithub />
          </a>
        </div>
      </div>
    </motion.div>
  );
}

export function Projects() {
  return (
    <Section
      id="projects"
      eyebrow="03 · Selected Work"
      title="Cinematic Projects"
      subtitle="A curated set of production-grade builds — from systems-level OS assistants to AI-powered healthcare platforms."
    >
      <div className="space-y-24 lg:space-y-40">
        {projects.map((p, i) => <ProjectCard key={p.id} p={p} i={i} />)}
      </div>

      <div className="mt-24 text-center">
        <a href="https://github.com/alokkumar2510" target="_blank" rel="noreferrer" className="btn-magnetic btn-magnetic--primary">
          Explore More on GitHub <FiArrowUpRight />
        </a>
      </div>
    </Section>
  );
}
