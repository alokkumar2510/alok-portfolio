"use client";
import { useEffect, useRef, useCallback } from "react";
import { gsap } from "gsap";

export function Cursor() {
  const dot = useRef<HTMLDivElement>(null);
  const ring = useRef<HTMLDivElement>(null);
  const isDesktop = useRef(false);

  // Use a ref to track if we should show — avoids the null-ref race condition
  // by always rendering the elements but hiding via CSS on touch devices
  const setupCursor = useCallback(() => {
    if (!dot.current || !ring.current) return;

    const xTo = gsap.quickTo(dot.current, "x", { duration: 0.15, ease: "power3.out" });
    const yTo = gsap.quickTo(dot.current, "y", { duration: 0.15, ease: "power3.out" });
    const rxTo = gsap.quickTo(ring.current, "x", { duration: 0.5, ease: "power3.out" });
    const ryTo = gsap.quickTo(ring.current, "y", { duration: 0.5, ease: "power3.out" });

    const onMove = (e: MouseEvent) => {
      xTo(e.clientX); yTo(e.clientY);
      rxTo(e.clientX); ryTo(e.clientY);
    };

    const grow = () => gsap.to(ring.current, { scale: 1.8, duration: 0.3, ease: "power3.out", borderColor: "rgba(0,229,255,0.9)" });
    const shrink = () => gsap.to(ring.current, { scale: 1, duration: 0.3, ease: "power3.out", borderColor: "rgba(255,255,255,0.4)" });

    window.addEventListener("mousemove", onMove);

    // Use MutationObserver to handle dynamically added elements
    const attachHoverListeners = () => {
      const targets = document.querySelectorAll("a, button, [data-magnetic], [role='button']");
      targets.forEach((t) => {
        t.addEventListener("mouseenter", grow);
        t.addEventListener("mouseleave", shrink);
      });
      return targets;
    };

    let targets = attachHoverListeners();

    // Spotlight on cards
    const cards = document.querySelectorAll(".spotlight");
    const spot = (e: MouseEvent) => {
      const card = (e.currentTarget as HTMLElement);
      const r = card.getBoundingClientRect();
      card.style.setProperty("--mx", `${e.clientX - r.left}px`);
      card.style.setProperty("--my", `${e.clientY - r.top}px`);
    };
    cards.forEach((c) => c.addEventListener("mousemove", spot as EventListener));

    // Re-attach hover listeners when DOM changes (e.g., after route transitions)
    const observer = new MutationObserver(() => {
      targets.forEach((t) => {
        t.removeEventListener("mouseenter", grow);
        t.removeEventListener("mouseleave", shrink);
      });
      targets = attachHoverListeners();
    });
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener("mousemove", onMove);
      observer.disconnect();
      targets.forEach((t) => {
        t.removeEventListener("mouseenter", grow);
        t.removeEventListener("mouseleave", shrink);
      });
      cards.forEach((c) => c.removeEventListener("mousemove", spot as EventListener));
    };
  }, []);

  useEffect(() => {
    const hasHover = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    if (!hasHover) return;
    isDesktop.current = true;

    // Small delay to ensure refs are attached after render
    const frame = requestAnimationFrame(() => {
      const cleanup = setupCursor();
      // Store cleanup for the effect teardown
      cleanupRef.current = cleanup || null;
    });

    return () => {
      cancelAnimationFrame(frame);
      cleanupRef.current?.();
    };
  }, [setupCursor]);

  const cleanupRef = useRef<(() => void) | null>(null);

  return (
    <>
      <div ref={ring}
        className="pointer-events-none fixed top-0 left-0 z-[100] h-9 w-9 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/40 mix-blend-difference hidden md:block" />
      <div ref={dot}
        className="pointer-events-none fixed top-0 left-0 z-[100] h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary shadow-glow-sm hidden md:block" />
    </>
  );
}
