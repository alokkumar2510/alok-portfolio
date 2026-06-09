"use client";
import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import { useLenis } from "@/hooks/useLenis";
import { Loader } from "@/components/loader/Loader";
import { Cursor } from "@/components/ui/Cursor";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export function Shell({ children }: { children: React.ReactNode }) {
  useLenis();
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    // Failsafe: never leave the loader on forever
    const t = setTimeout(() => setLoaded(true), 4200);
    return () => clearTimeout(t);
  }, []);

  return (
    <>
      <Cursor />
      <AnimatePresence>{!loaded && <Loader key="loader" onComplete={() => setLoaded(true)} />}</AnimatePresence>
      <Navbar />
      <main className="relative z-10">{children}</main>
      <Footer />
    </>
  );
}
