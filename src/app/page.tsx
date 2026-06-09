import { Shell } from "@/components/layout/Shell";
import { Hero } from "@/components/hero/Hero";
import { About } from "@/components/about/About";
import { Skills } from "@/components/skills/Skills";
import { Projects } from "@/components/projects/Projects";
import { Achievements } from "@/components/achievements/Achievements";
import { Timeline } from "@/components/timeline/Timeline";
import { Contact } from "@/components/contact/Contact";

export default function Home() {
  return (
    <Shell>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Achievements />
      <Timeline />
      <Contact />
    </Shell>
  );
}
