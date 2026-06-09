"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { navLinks, profile } from "@/data/portfolio";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 4.2, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        scrolled ? "py-3" : "py-5"
      )}
    >
      <div className={cn(
        "mx-auto flex max-w-7xl items-center justify-between px-5 lg:px-8 transition-all duration-500",
        scrolled && "glass-strong rounded-full mx-4 lg:mx-auto !max-w-5xl shadow-glow-sm"
      )}>
        <a href="#hero" className="group flex items-center gap-2">
          <span className="relative grid place-items-center h-9 w-9 rounded-full overflow-hidden border border-primary/40 shadow-glow-sm">
            <img
              src="/images/avatar.png"
              alt="Alok Kumar Sahu"
              className="h-full w-full object-cover"
            />
          </span>
          <span className="font-display text-sm tracking-[0.25em] text-white/80 group-hover:text-white transition-colors">
            {profile.shortName.toUpperCase()}
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="relative px-3 py-2 text-sm text-white/70 hover:text-white transition-colors group"
            >
              {l.label}
              <span className="absolute left-3 right-3 -bottom-0.5 h-px bg-gradient-to-r from-primary to-secondary scale-x-0 group-hover:scale-x-100 origin-left transition-transform" />
            </a>
          ))}
        </nav>

        <a
          href={profile.resume}
          target="_blank" rel="noreferrer"
          className="hidden md:inline-flex btn-magnetic btn-magnetic--primary !py-2 !px-4 text-sm"
        >
          Resume ↗
        </a>

        <button
          aria-label="Toggle menu"
          onClick={() => setOpen((o) => !o)}
          className="md:hidden grid place-items-center h-10 w-10 rounded-lg glass"
        >
          <div className="flex flex-col gap-1.5">
            <span className={cn("h-px w-5 bg-white transition-transform", open && "translate-y-[6px] rotate-45")} />
            <span className={cn("h-px w-5 bg-white transition-opacity", open && "opacity-0")} />
            <span className={cn("h-px w-5 bg-white transition-transform", open && "-translate-y-[6px] -rotate-45")} />
          </div>
        </button>
      </div>

      {/* Mobile menu */}
      <motion.div
        initial={false}
        animate={open ? { opacity: 1, y: 0, pointerEvents: "auto" } : { opacity: 0, y: -10, pointerEvents: "none" }}
        transition={{ duration: 0.3 }}
        className="md:hidden absolute top-full inset-x-4 mt-2 glass-strong rounded-2xl p-4"
      >
        <div className="grid gap-1">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="px-3 py-2.5 rounded-lg text-sm text-white/80 hover:text-white hover:bg-white/5 transition-colors"
            >
              {l.label}
            </a>
          ))}
          <a
            href={profile.resume}
            target="_blank" rel="noreferrer"
            className="mt-2 btn-magnetic btn-magnetic--primary justify-center"
          >
            Resume ↗
          </a>
        </div>
      </motion.div>
    </motion.header>
  );
}
