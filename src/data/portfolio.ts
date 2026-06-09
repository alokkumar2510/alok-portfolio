import {
  SiReact, SiNextdotjs, SiTailwindcss, SiTypescript, SiFramer,
  SiNodedotjs, SiExpress, SiRust, SiPython, SiMongodb, SiPostgresql,
  SiTensorflow, SiLangchain, SiGit, SiDocker, SiLinux, SiFigma,
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import { TbBrain } from "react-icons/tb";
import type { IconType } from "react-icons";

export const profile = {
  name: "Alok Kumar Sahu",
  shortName: "Alok kumar ",
  tagline: "Building Scalable Web Experiences & Exploring the Power of AI",
  bio: "I am a B.Tech Computer Science student at Veer Surendra Sai University of Technology. I approach software engineering not just as code execution, but as product building — ensuring high-end responsiveness, scalable databases, and contextual AI capabilities.",
  dob: "16th May 2005",
  location: "Berhampur, Odisha, India",
  email: "alok.vssut28@gmail.com",
  resume: "/resume.pdf",
  roles: ["Software Engineer", "AI Builder", "Full Stack Developer"],
};

export const socials = [
  { name: "GitHub", href: "https://github.com/alokkumar2510", icon: "FaGithub" },
  { name: "LinkedIn", href: "https://www.linkedin.com/in/alok-kumar-sahu-7a7059370/", icon: "FaLinkedin" },
  { name: "X", href: "https://x.com/alok_chintu", icon: "FaXTwitter" },
  { name: "Instagram", href: "https://instagram.com/alokkumar.in", icon: "FaInstagram" },
  { name: "Email", href: "mailto:alok.vssut28@gmail.com", icon: "FiMail" },
];

export const metrics = [
  { label: "Shipped Projects", value: 5, suffix: "+" },
  { label: "Years Building", value: 2, suffix: "+" },
  { label: "Tech Stack Keys", value: 8, suffix: "+" },
  { label: "Continuous Focus", value: 2, suffix: "" },
];

export const narrative = [
  {
    title: "Origins",
    body: "It began with automating shell scripts and building custom web tools. Simple curiosity transformed into a deep passion for network infrastructure, system latency, and software architecture.",
  },
  {
    title: "Academia",
    body: "Pursuing B.Tech in Computer Science at Veer Surendra Sai University of Technology (Class of 2028). Living in algorithms, databases, networks, and advanced ML modeling — and applying fundamentals to production engineering.",
  },
  {
    title: "Ambitions",
    body: "Engineering world-class cloud infrastructure and AI agents that bridge complex datasets with hyper-intuitive interfaces. Actively seeking software engineering internships and high-performance product teams.",
  },
];

export type Skill = { name: string; level: number; icon: IconType; note: string };
export type SkillCategory = { id: string; label: string; color: string; skills: Skill[] };

export const skillCategories: SkillCategory[] = [
  {
    id: "frontend", label: "Frontend", color: "#00E5FF",
    skills: [
      { name: "React", level: 90, icon: SiReact, note: "Context trees, hooks lifecycle, state management" },
      { name: "Next.js", level: 80, icon: SiNextdotjs, note: "SSR, routing, static generation" },
      { name: "Tailwind CSS", level: 85, icon: SiTailwindcss, note: "Responsive design, custom themes" },
      { name: "TypeScript", level: 75, icon: SiTypescript, note: "Type safety, interfaces" },
      { name: "Framer Motion", level: 78, icon: SiFramer, note: "High-fidelity UI animations" },
    ],
  },
  {
    id: "backend", label: "Backend", color: "#7C3AED",
    skills: [
      { name: "Node.js", level: 88, icon: SiNodedotjs, note: "Async runtimes, APIs, scalability" },
      { name: "Express", level: 85, icon: SiExpress, note: "REST APIs, middleware" },
      { name: "Rust", level: 80, icon: SiRust, note: "Systems programming, memory safety" },
      { name: "Python", level: 82, icon: SiPython, note: "Scripting, backend, ML pipelines" },
      { name: "MongoDB", level: 80, icon: SiMongodb, note: "NoSQL document databases" },
      { name: "PostgreSQL", level: 72, icon: SiPostgresql, note: "SQL schemas, optimization" },
    ],
  },
  {
    id: "ai", label: "AI / ML", color: "#22D3EE",
    skills: [
      { name: "TensorFlow", level: 70, icon: SiTensorflow, note: "Neural networks, classifiers" },
      { name: "Groq API", level: 78, icon: TbBrain, note: "LLM interface, fast inference" },
      { name: "Langchain", level: 65, icon: SiLangchain, note: "Agent chaining, RAG" },
    ],
  },
  {
    id: "tools", label: "Tools", color: "#F472B6",
    skills: [
      { name: "Git", level: 90, icon: SiGit, note: "Branching, collaboration" },
      { name: "Docker", level: 72, icon: SiDocker, note: "Containerization" },
      { name: "VSCode", level: 92, icon: VscVscode, note: "Primary IDE, extensions" },
      { name: "Linux", level: 78, icon: SiLinux, note: "Shell scripting, server admin" },
      { name: "Figma", level: 70, icon: SiFigma, note: "UI wireframing, mockups" },
    ],
  },
];

export type Project = {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  stack: string[];
  github: string;
  demo: string;
  features: string[];
  metrics: { label: string; value: string }[];
  accent: string;
};

export const projects: Project[] = [
  {
    id: "jarvis",
    title: "Alok Jarvis OS",
    subtitle: "Windows Virtual Assistant OS",
    description:
      "A custom-engineered Windows desktop operating assistant built with Rust. Voice activation, automated shell executions, live system telemetry monitoring, and context-optimized AI chat using the Groq API.",
    stack: ["Rust", "Windows API", "Python", "Speech Recognition", "Groq API"],
    github: "https://github.com/alokkumar2510/alok_jarvis_os",
    demo: "https://jarvis.alokkumarsahu.in",
    features: [
      "Native Rust core for sub-ms response",
      "Real-time voice activation pipeline",
      "Groq-powered contextual chat",
      "Live telemetry dashboard",
    ],
    metrics: [
      { label: "Avg latency", value: "<120ms" },
      { label: "Daily intents", value: "1k+" },
    ],
    accent: "#00E5FF",
  },
  {
    id: "tradesense",
    title: "TradeSense",
    subtitle: "Trading Analytics Platform",
    description:
      "A high-performance trading analytics platform featuring cinematic glassmorphism, real-time market data via Cloudflare Workers, and interactive financial charts.",
    stack: ["Next.js", "Firebase", "Tailwind CSS", "Framer Motion", "Cloudflare Workers", "Lightweight Charts"],
    github: "https://github.com/alokkumar2510/TradeSense",
    demo: "https://tradesense.alokkumarsahu.in",
    features: [
      "Live streaming candles",
      "Cloudflare Workers edge compute",
      "Cinematic glassmorphism UI",
      "Watchlist + alerts",
    ],
    metrics: [
      { label: "Edge p95", value: "<60ms" },
      { label: "Symbols tracked", value: "200+" },
    ],
    accent: "#7C3AED",
  },
  {
    id: "mediverse",
    title: "MediVerse AI",
    subtitle: "Healthcare AI Platform",
    description:
      "A production-grade AI healthcare platform with multi-modal diagnostics — ECG rhythm analysis, X-ray pathology detection, brain tumor MRI classification, and a clinical AI assistant. Deployed at scale on Cloudflare Pages.",
    stack: ["Next.js", "FastAPI", "Supabase", "Python", "TensorFlow", "Cloudflare"],
    github: "https://github.com/alokkumar2510/mediverse",
    demo: "https://mediverse.alokkumarsahu.in",
    features: [
      "ECG rhythm analysis",
      "X-ray pathology detection",
      "Brain MRI classifier",
      "Clinical AI assistant",
    ],
    metrics: [
      { label: "Model F1", value: "0.93" },
      { label: "Modalities", value: "3" },
    ],
    accent: "#22D3EE",
  },
  {
    id: "smartx",
    title: "SmartX",
    subtitle: "Smart Productivity Platform",
    description:
      "A full-stack productivity platform with real-time chat, WebRTC video calls, task management, and AI-powered assistance. Deployed on Cloudflare.",
    stack: ["React", "Node.js", "Socket.io", "WebRTC", "MongoDB", "Tailwind CSS"],
    github: "https://github.com/alokkumar2510/SmartX",
    demo: "https://smartx.alokkumarsahu.in",
    features: [
      "Real-time chat over Socket.io",
      "WebRTC video calls",
      "Tasks & projects board",
      "AI assistant integration",
    ],
    metrics: [
      { label: "WebRTC RTT", value: "<80ms" },
      { label: "Concurrent rooms", value: "Multi" },
    ],
    accent: "#F472B6",
  },
  {
    id: "portfolio",
    title: "Portfolio Website",
    subtitle: "3D Interactive Portfolio",
    description:
      "A futuristic, 3D interactive portfolio website built with React Three Fiber, Framer Motion, and a Graphify-optimized AI assistant chatbot.",
    stack: ["React", "Three.js", "Framer Motion", "Node.js", "Graphify"],
    github: "https://github.com/alokkumar2510/alok-portfolio",
    demo: "https://alokkumarsahu.in",
    features: [
      "React Three Fiber 3D scenes",
      "Framer Motion choreography",
      "AI assistant chatbot",
      "60fps interactive UI",
    ],
    metrics: [
      { label: "Lighthouse", value: "95+" },
      { label: "FPS", value: "60" },
    ],
    accent: "#A78BFA",
  },
];

export const achievements = [
  {
    title: "Google Cloud Arcade Champion",
    year: "2024",
    body: "Recognized as a champion in the Google Cloud Arcade program for completing advanced cloud, networking, and security configuration challenges.",
  },
  {
    title: "Open Source Contributor",
    year: "2024",
    body: "Active contributor to multiple open-source repositories on GitHub with meaningful pull requests and issue resolutions.",
  },
];

export const timeline = [
  {
    period: "2008 – 2021",
    title: "Schooling",
    body: "Saraswati Sishu Vidya Mandir, Neelakantha Nagar, Berhampur, Odisha.",
  },
  {
    period: "2021 – 2023",
    title: "Intermediate Education (+2 Science)",
    body: "Saraswati Vidya Mandir, Neelakantha Nagar, Berhampur, Odisha.",
  },
  {
    period: "2024 – Present",
    title: "B.Tech in CSE at VSSUT",
    body: "Began the Computer Science Engineering journey at Veer Surendra Sai University of Technology, Burla.",
  },
  {
    period: "2024",
    title: "AI/ML Exploration & Cloud Computing",
    body: "Earned Google Cloud Arcade Champion recognition and dove deep into AI & machine learning.",
  },
  {
    period: "2025",
    title: "Advancing Full-Stack & AI",
    body: "Building production-grade applications and exploring cutting-edge AI agent architectures.",
  },
];

export const navLinks = [
  { href: "#hero", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#achievements", label: "Achievements" },
  { href: "#timeline", label: "Journey" },
  { href: "#contact", label: "Contact" },
];
