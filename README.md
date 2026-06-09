# Alok Kumar Sahu — Cinematic Developer Portfolio

A production-ready, cinematic Next.js 15 portfolio featuring a fullscreen video hero, Three.js scenes, GSAP timelines, Framer Motion choreography, Lenis smooth scroll, and a luxurious dark UI.

## Tech Stack
- **Next.js 15** (App Router) + **TypeScript**
- **Tailwind CSS** + custom design tokens
- **Framer Motion** + **GSAP** (ScrollTrigger)
- **Three.js** + **@react-three/fiber** + **@react-three/drei**
- **Lenis** smooth scroll
- **React Icons**

## Getting Started

```bash
# 1. Install dependencies
npm install

# 2. Run dev server
npm run dev

# 3. Open http://localhost:3000
```

## Project Structure
```
public/
  videos/hero.mp4          # Cinematic hero background video
  resume.pdf               # (drop your CV here)
src/
  app/                     # App Router (layout, page, globals, metadata)
  components/
    loader/                # OS-style boot loader
    hero/                  # Fullscreen video hero
    about/                 # Scroll-triggered story
    skills/                # Skill Galaxy (Three.js)
    projects/              # Cinematic project showcase
    achievements/          # Holographic wall
    timeline/              # Animated journey
    contact/               # Glassmorphism form
    three/                 # Three.js scenes (Neural Network, Tech Sphere, etc.)
    ui/                    # Magnetic buttons, Cursor, Section wrapper
    layout/                # Navbar, Footer
  data/                    # Portfolio content (single source of truth)
  hooks/                   # useLenis, useMagnetic, useMounted
  lib/                     # utils
```

## Build & Deploy

```bash
npm run build
npm start
```
Deploy on Vercel (recommended) — `vercel --prod`.

## Customization
- Edit `src/data/portfolio.ts` to update text, links, projects.
- Replace `public/videos/hero.mp4` with any 1080p MP4.
- Drop a `resume.pdf` inside `public/`.

— Built with ⚡ by Alok Kumar Sahu
