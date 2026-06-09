"use client";
import { FaGithub, FaLinkedin, FaXTwitter, FaInstagram } from "react-icons/fa6";
import { FiMail } from "react-icons/fi";
import { profile, socials } from "@/data/portfolio";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  FaGithub, FaLinkedin, FaXTwitter, FaInstagram, FiMail,
};

export function Footer() {
  return (
    <footer className="relative z-10 mt-24 border-t border-white/5 px-6 py-12">
      <div className="mx-auto max-w-7xl flex flex-col md:flex-row items-center justify-between gap-8">
        <div>
          <p className="font-display text-sm tracking-[0.3em] text-white/60">{profile.name.toUpperCase()}</p>
          <p className="mt-1 text-xs text-white/40">{profile.location} · © {new Date().getFullYear()}</p>
        </div>
        <div className="flex items-center gap-3">
          {socials.map((s) => {
            const Icon = iconMap[s.icon];
            return (
              <a key={s.name} href={s.href} target="_blank" rel="noreferrer"
                aria-label={s.name}
                className="grid place-items-center h-10 w-10 rounded-full glass hover:shadow-glow-sm hover:border-primary/40 transition-all">
                {Icon ? <Icon className="text-white/80" /> : null}
              </a>
            );
          })}
        </div>
      </div>
      <p className="mt-8 text-center text-[10px] tracking-[0.3em] text-white/30">
        DESIGNED &amp; ENGINEERED WITH ❤️ BY ALOK KUMAR SAHU
      </p>
    </footer>
  );
}
