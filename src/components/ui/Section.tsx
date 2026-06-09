"use client";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export function Section({
  id,
  eyebrow,
  title,
  subtitle,
  children,
  className,
}: {
  id: string;
  eyebrow?: string;
  title?: string;
  subtitle?: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={cn("section-pad relative", className)}>
      <div className="mx-auto max-w-7xl">
        {(eyebrow || title) && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="mb-12 lg:mb-20 max-w-3xl"
          >
            {eyebrow && (
              <p className="font-mono text-xs tracking-[0.4em] text-primary/80 uppercase mb-4">{eyebrow}</p>
            )}
            {title && (
              <h2 className="font-display text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight">
                <span className="text-gradient">{title}</span>
              </h2>
            )}
            {subtitle && (
              <p className="mt-5 text-white/60 text-base md:text-lg leading-relaxed">{subtitle}</p>
            )}
          </motion.div>
        )}
        {children}
      </div>
    </section>
  );
}
