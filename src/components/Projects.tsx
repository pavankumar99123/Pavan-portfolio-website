import { useState } from "react";
import { projects } from "../data/projects";
import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";
import Reveal from "./Reveal";

export default function Projects() {
  const [activeSlug, setActiveSlug] = useState<string | null>(null);
  const activeProject = projects.find((p) => p.slug === activeSlug) ?? null;

  return (
    <section id="projects" className="section">
      <div className="section-shell">
        <Reveal>
          <p className="eyebrow">Featured Projects</p>
          <h2 className="mt-3 max-w-2xl font-display text-3xl font-semibold text-ink text-balance sm:text-4xl">
            Featured Projects
          </h2>
          <p className="mt-4 max-w-xl text-ink-dim">
            AI-powered applications and full-stack projects built with modern
            development technologies.
          </p>
        </Reveal>

        <div className="mt-12 space-y-8">
          {projects.map((project, i) => (
            <Reveal key={project.slug} delay={i * 100}>
              <ProjectCard project={project} onOpenCaseStudy={setActiveSlug} />
            </Reveal>
          ))}
        </div>
      </div>

      {activeProject && (
        <ProjectModal project={activeProject} onClose={() => setActiveSlug(null)} />
      )}
    </section>
  );
}
