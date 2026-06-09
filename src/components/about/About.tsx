"use client";
import { useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Section } from "@/components/ui/Section";
import { Counter } from "@/components/ui/Counter";
import { metrics, narrative, profile } from "@/data/portfolio";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function About() {
  const wrap = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    if (!wrap.current || !lineRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        lineRef.current,
        { scaleY: 0 },
        {
          scaleY: 1,
          transformOrigin: "top",
          ease: "none",
          scrollTrigger: {
            trigger: wrap.current,
            start: "top 70%",
            end: "bottom 30%",
            scrub: true,
          },
        }
      );
    }, wrap);
    return () => ctx.revert();
  }, []);

  const { scrollYProgress } = useScroll({ target: wrap, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "-15%"]);

  return (
    <Section
      id="about"
      eyebrow="01 · About"
      title="A Journey From Curiosity to Craft"
      subtitle={profile.bio}
    >
      {/* Stats */}
      <motion.div
        style={{ y }}
        className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-20"
      >
        {metrics.map((m, i) => (
          <motion.div
            key={m.label}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6, delay: i * 0.08 }}
            className="glass spotlight rounded-2xl p-6"
          >
            <p className="font-display text-4xl md:text-5xl font-bold text-gradient">
              <Counter to={m.value} suffix={m.suffix} />
            </p>
            <p className="mt-2 text-xs tracking-[0.2em] text-white/50 uppercase">{m.label}</p>
          </motion.div>
        ))}
      </motion.div>

      {/* Timeline narrative */}
      <div ref={wrap} className="relative grid lg:grid-cols-[120px_1fr] gap-6 lg:gap-10">
        <div className="hidden lg:block relative">
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-white/10" />
          <div
            ref={lineRef}
            className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-secondary to-accent shadow-glow"
            style={{ transformOrigin: "top", transform: "scaleY(0)" }}
          />
        </div>
        <div className="space-y-10 lg:space-y-16">
          {narrative.map((n, i) => (
            <motion.div
              key={n.title}
              initial={{ opacity: 0, x: -30, filter: "blur(8px)" }}
              whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.8, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="glass-strong rounded-2xl p-6 md:p-8 spotlight relative"
            >
              <div className="absolute -left-3 top-8 hidden lg:block">
                <div className="h-3 w-3 rounded-full bg-primary shadow-glow-sm ring-4 ring-primary/20" />
              </div>
              <p className="font-mono text-[10px] tracking-[0.4em] text-primary/70 uppercase mb-3">
                Chapter 0{i + 1}
              </p>
              <h3 className="font-display text-2xl md:text-3xl font-bold mb-3 text-white">{n.title}</h3>
              <p className="text-white/65 leading-relaxed">{n.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
