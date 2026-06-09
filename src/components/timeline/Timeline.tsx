"use client";
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Section } from "@/components/ui/Section";
import { timeline } from "@/data/portfolio";

export function Timeline() {
  const wrap = useRef<HTMLDivElement>(null);
  const line = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    if (!wrap.current || !line.current) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(line.current,
        { scaleY: 0 },
        {
          scaleY: 1,
          transformOrigin: "top",
          ease: "none",
          scrollTrigger: {
            trigger: wrap.current,
            start: "top 75%",
            end: "bottom 25%",
            scrub: true,
          }
        });
    }, wrap);
    return () => ctx.revert();
  }, []);

  return (
    <Section
      id="timeline"
      eyebrow="05 · Journey"
      title="The Path So Far"
      subtitle="From the first shell script to production-scale AI platforms."
    >
      <div ref={wrap} className="relative">
        {/* Spine */}
        <div className="absolute left-4 lg:left-1/2 top-0 bottom-0 -translate-x-1/2 w-px bg-white/8" />
        <div
          ref={line}
          className="absolute left-4 lg:left-1/2 top-0 bottom-0 -translate-x-1/2 w-px bg-gradient-to-b from-primary via-secondary to-accent shadow-glow"
          style={{ transformOrigin: "top", transform: "scaleY(0)" }}
        />

        <div className="space-y-12 lg:space-y-20">
          {timeline.map((t, i) => {
            const left = i % 2 === 0;
            return (
              <motion.div
                key={t.period + t.title}
                initial={{ opacity: 0, x: left ? -40 : 40, filter: "blur(8px)" }}
                whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className={`relative grid lg:grid-cols-2 gap-6 items-center ${left ? "" : ""}`}
              >
                {/* Node */}
                <div className="absolute left-4 lg:left-1/2 top-6 -translate-x-1/2 z-10">
                  <div className="h-4 w-4 rounded-full bg-primary shadow-glow-sm ring-4 ring-primary/20" />
                </div>

                <div className={`pl-12 lg:pl-0 ${left ? "lg:pr-16 lg:text-right" : "lg:order-2 lg:pl-16"}`}>
                  <p className="font-mono text-[10px] tracking-[0.4em] text-primary/70 uppercase">{t.period}</p>
                  <h3 className="mt-2 font-display text-xl md:text-2xl font-bold text-white">{t.title}</h3>
                </div>

                <div className={`pl-12 lg:pl-0 ${left ? "lg:pl-16" : "lg:order-1 lg:pr-16 lg:text-right"}`}>
                  <div className="glass rounded-xl p-5 spotlight">
                    <p className="text-sm text-white/65 leading-relaxed">{t.body}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </Section>
  );
}
