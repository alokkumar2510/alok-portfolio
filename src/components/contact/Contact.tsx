"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Section } from "@/components/ui/Section";
import { profile, socials } from "@/data/portfolio";
import { FaGithub, FaLinkedin, FaXTwitter, FaInstagram } from "react-icons/fa6";
import { FiMail, FiMapPin, FiSend, FiCheck } from "react-icons/fi";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  FaGithub, FaLinkedin, FaXTwitter, FaInstagram, FiMail,
};

export function Contact() {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    // Demo: open mail client with the message body
    const form = new FormData(e.currentTarget);
    const subject = encodeURIComponent(`[Portfolio] ${form.get("name") || "Hello"}`);
    const body = encodeURIComponent(`${form.get("message") || ""}\n\n— ${form.get("name") || ""} (${form.get("email") || ""})`);
    setTimeout(() => {
      window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
      setLoading(false);
      setSent(true);
    }, 800);
  };

  return (
    <Section
      id="contact"
      eyebrow="06 · Get in touch"
      title="Let's Build Something Unforgettable"
      subtitle="Open to software engineering internships, AI builder roles, and collaboration on high-performance products."
    >
      <div className="grid lg:grid-cols-5 gap-8">
        <div className="lg:col-span-3 glass-strong rounded-3xl p-6 md:p-10 spotlight relative overflow-hidden">
          <div className="absolute -top-20 -right-20 h-64 w-64 rounded-full bg-primary/15 blur-3xl" />
          <div className="absolute -bottom-24 -left-20 h-64 w-64 rounded-full bg-secondary/15 blur-3xl" />

          <AnimatePresence mode="wait">
            {!sent ? (
              <motion.form
                key="form"
                onSubmit={onSubmit}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="relative z-10 grid gap-5"
              >
                <Field label="Your Name" name="name" required />
                <Field label="Email Address" name="email" type="email" required />
                <Field label="Message" name="message" textarea required />
                <button
                  type="submit"
                  disabled={loading}
                  className="btn-magnetic btn-magnetic--primary justify-center w-full md:w-auto md:self-start mt-2"
                >
                  {loading ? "Sending…" : "Send Message"} <FiSend />
                </button>
              </motion.form>
            ) : (
              <motion.div
                key="ok"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="relative z-10 grid place-items-center text-center py-16"
              >
                <div className="h-20 w-20 rounded-full grid place-items-center bg-primary/20 border border-primary/40 shadow-glow mb-5">
                  <FiCheck className="text-3xl text-primary" />
                </div>
                <h3 className="font-display text-2xl text-white">Message ready to ship 🚀</h3>
                <p className="mt-2 text-white/60 max-w-md">Your mail client opened with the message. Reach me directly at <a href={`mailto:${profile.email}`} className="text-primary underline">{profile.email}</a>.</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <div className="lg:col-span-2 grid gap-4 content-start">
          <div className="glass rounded-2xl p-6 spotlight">
            <p className="font-mono text-[10px] tracking-[0.4em] text-primary/70 uppercase mb-2">Direct</p>
            <a href={`mailto:${profile.email}`} className="text-lg text-white hover:text-primary transition-colors flex items-center gap-2">
              <FiMail className="text-primary" /> {profile.email}
            </a>
            <p className="mt-4 text-white/60 text-sm flex items-center gap-2">
              <FiMapPin className="text-primary" /> {profile.location}
            </p>
          </div>

          <div className="glass rounded-2xl p-6">
            <p className="font-mono text-[10px] tracking-[0.4em] text-primary/70 uppercase mb-4">Social</p>
            <div className="grid grid-cols-5 gap-2">
              {socials.map((s) => {
                const Icon = iconMap[s.icon];
                return (
                  <a key={s.name} href={s.href} target="_blank" rel="noreferrer"
                     aria-label={s.name}
                     className="grid place-items-center aspect-square rounded-xl glass hover:border-primary/40 hover:shadow-glow-sm transition-all">
                    {Icon ? <Icon className="text-white/80" /> : null}
                  </a>
                );
              })}
            </div>
          </div>

          <div className="glass rounded-2xl p-6">
            <p className="font-mono text-[10px] tracking-[0.4em] text-primary/70 uppercase mb-2">Status</p>
            <p className="text-white text-sm flex items-center gap-2">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 animate-ping" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400" />
              </span>
              Available for internships &amp; collaborations
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
}

function Field({ label, name, type = "text", textarea, required }: { label: string; name: string; type?: string; textarea?: boolean; required?: boolean }) {
  const [val, setVal] = useState("");
  const Component = (textarea ? "textarea" : "input") as React.ElementType;
  return (
    <div className="relative">
      <Component
        name={name}
        type={type}
        required={required}
        value={val}
        onChange={(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => setVal(e.target.value)}
        rows={textarea ? 5 : undefined}
        className="peer w-full bg-white/[0.03] border border-white/10 rounded-xl px-4 pt-6 pb-2 text-white placeholder-transparent focus:outline-none focus:border-primary/60 focus:shadow-glow-sm transition-all resize-none"
        placeholder={label}
      />
      <label className={`pointer-events-none absolute left-4 transition-all font-mono tracking-[0.2em] uppercase text-[10px] ${val ? "top-2 text-primary" : "top-4 text-white/40 peer-focus:top-2 peer-focus:text-primary"}`}>
        {label}
      </label>
    </div>
  );
}
