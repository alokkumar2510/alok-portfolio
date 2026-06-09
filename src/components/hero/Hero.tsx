"use client";
import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { gsap } from "gsap";
import { profile } from "@/data/portfolio";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { FiArrowRight, FiDownload, FiMail } from "react-icons/fi";
import { HiVolumeUp, HiVolumeOff } from "react-icons/hi";




export function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const lineRefs = useRef<(HTMLSpanElement | null)[]>([]);
  const [isMuted, setIsMuted] = useState(true);

  useEffect(() => {
    const v = videoRef.current;
    if (v) { v.play().catch(() => { }); }

    // GSAP staggered character reveal
    const tl = gsap.timeline({
      delay: 4.4,
      onComplete: () => {
        // Clear GSAP inline styles from gradient text chars.
        // GSAP leaves transform styles (e.g. translate3d, rotateX) that create
        // stacking contexts, breaking parent's background-clip:text gradient.
        lineRefs.current.forEach((line) => {
          if (!line || !line.classList.contains("text-gradient")) return;
          const chars = line.querySelectorAll(".char");
          gsap.set(chars, { clearProps: "all" });
        });
      },
    });
    lineRefs.current.forEach((line, i) => {
      if (!line) return;
      const chars = line.querySelectorAll(".char");
      tl.fromTo(
        chars,
        { y: 110, opacity: 0, rotateX: -90, filter: "blur(12px)" },
        { y: 0, opacity: 1, rotateX: 0, filter: "blur(0px)", duration: 0.9, ease: "expo.out", stagger: 0.025 },
        i === 0 ? 0 : "-=0.7"
      );
    });
  }, []);

  const toggleMute = () => {
    const v = videoRef.current;
    if (v) {
      v.muted = !v.muted;
      setIsMuted(v.muted);
    }
  };




  return (
    <section id="hero" className="relative min-h-screen w-full overflow-hidden">
      {/* Video */}
      <video
        ref={videoRef}
        className="absolute inset-0 h-full w-full object-cover"
        style={{ willChange: "transform" }}
        src="/videos/hero.mp4"
        autoPlay muted loop playsInline preload="metadata"
        aria-hidden
      />
      {/* Overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-bg/40 via-bg/55 to-bg" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_30%,_rgba(2,3,8,0.85)_75%)]" />
      <div className="absolute inset-0 bg-grid opacity-30" />

      {/* Spotlight beams */}
      <div
        className="absolute -top-1/4 left-1/4 h-[60vh] w-[60vh] rounded-full bg-primary/20 blur-[80px]"
        style={{ willChange: "transform" }}
      />
      <div
        className="absolute bottom-0 right-0 h-[55vh] w-[55vh] rounded-full bg-secondary/25 blur-[80px]"
        style={{ willChange: "transform" }}
      />




      {/* Particles (reduced for performance) */}
      <div className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 12 }).map((_, i) => (
          <span key={i}
            className="absolute h-1 w-1 rounded-full bg-primary/70"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animation: `float ${5 + Math.random() * 5}s ease-in-out ${Math.random() * 3}s infinite`,
              opacity: 0.2 + Math.random() * 0.5,
            }}
          />
        ))}
      </div>

      {/* Sound Toggle Button */}
      <motion.button
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 5.0, duration: 0.5 }}
        onClick={toggleMute}
        className="absolute top-24 right-6 z-20 flex items-center justify-center h-11 w-11 rounded-full border border-white/15 bg-white/5 backdrop-blur-md text-white/70 hover:text-white hover:bg-white/10 hover:border-primary/40 transition-all duration-300 cursor-pointer"
        aria-label={isMuted ? "Unmute video" : "Mute video"}
        title={isMuted ? "Unmute video" : "Mute video"}
      >
        <AnimatePresence mode="wait">
          {isMuted ? (
            <motion.span key="off" initial={{ scale: 0.5, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.5, opacity: 0 }} transition={{ duration: 0.15 }}>
              <HiVolumeOff size={20} />
            </motion.span>
          ) : (
            <motion.span key="on" initial={{ scale: 0.5, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.5, opacity: 0 }} transition={{ duration: 0.15 }}>
              <HiVolumeUp size={20} />
            </motion.span>
          )}
        </AnimatePresence>
      </motion.button>

      {/* Content — absolutely pinned to bottom, face stays fully visible */}
      <div className="absolute bottom-0 left-0 right-0 z-10 px-6 lg:px-10 pb-6">
        <div className="mx-auto max-w-7xl">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 4.2, duration: 0.6 }}
            className="font-mono text-[10px] md:text-xs tracking-[0.4em] text-primary/80 uppercase mb-3"
          >
            ◆ Portfolio · v1.0 — Cinematic Edition
          </motion.p>

          {/* Name branding with sparkle effect */}
          <div className="reveal-mask sparkle-text mb-1">
            <span
              ref={(el) => { lineRefs.current[0] = el; }}
              className="block font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-[1] tracking-[0.12em] text-gradient"
              style={{ perspective: "1000px" }}
            >
              {profile.name.toUpperCase().split("").map((c, i) => (
                <span key={i} className="char inline-block" style={{ whiteSpace: c === " " ? "pre" : "normal" }}>
                  {c === " " ? "\u00A0" : c}
                </span>
              ))}
            </span>
          </div>

          {/* Decorative separator */}
          <motion.div
            initial={{ scaleX: 0, opacity: 0 }}
            animate={{ scaleX: 1, opacity: 1 }}
            transition={{ delay: 5.2, duration: 0.8, ease: "easeOut" }}
            className="h-px w-24 bg-gradient-to-r from-primary via-secondary to-transparent origin-left mb-2"
          />

          {/* Role titles — compact */}
          <div className="space-y-0.5 mb-3">
            {profile.roles.map((role, idx) => (
              <div key={idx} className="reveal-mask">
                <span
                  ref={(el) => { lineRefs.current[idx + 1] = el; }}
                  className="block font-display text-sm sm:text-base md:text-lg lg:text-xl font-semibold leading-snug tracking-[0.1em] text-white/75"
                  style={{ perspective: "1000px" }}
                >
                  {role.toUpperCase().split("").map((c, i) => (
                    <span key={i} className="char inline-block" style={{ whiteSpace: c === " " ? "pre" : "normal" }}>
                      {c === " " ? "\u00A0" : c}
                    </span>
                  ))}
                </span>
              </div>
            ))}
          </div>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 5.4, duration: 0.6 }}
            className="max-w-lg text-white/55 text-sm md:text-base leading-relaxed mb-4"
          >
            {profile.tagline}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 5.7, duration: 0.6 }}
            className="flex flex-wrap items-center gap-2"
          >
            <MagneticButton primary href="#projects">
              View Projects <FiArrowRight />
            </MagneticButton>
            <MagneticButton href={profile.resume} target="_blank" rel="noreferrer">
              Download Resume <FiDownload />
            </MagneticButton>
            <MagneticButton href="#contact">
              Contact Me <FiMail />
            </MagneticButton>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 6.2, duration: 0.8 }}
        className="absolute bottom-2 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1 text-[9px] font-mono tracking-[0.4em] text-white/30"
      >
        <span>SCROLL</span>
        <div className="h-6 w-px bg-gradient-to-b from-primary to-transparent">
          <motion.div
            className="h-2 w-px bg-primary block"
            animate={{ y: [0, 16, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
      </motion.a>
    </section>
  );
}
