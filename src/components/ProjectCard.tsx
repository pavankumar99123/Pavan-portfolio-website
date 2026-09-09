import { ExternalLink, FileText, Check } from "lucide-react";
import type { Project } from "../data/projects";
import WorkflowDiagram from "./WorkflowDiagram";

import { FaGithub } from "react-icons/fa";
interface ProjectCardProps {
  project: Project;
  onOpenCaseStudy: (slug: string) => void;
}

export default function ProjectCard({ project, onOpenCaseStudy }: ProjectCardProps) {
  return (
    <article className="glass group grid gap-8 rounded-3xl p-6 transition-colors hover:border-accent/40 sm:p-8 lg:grid-cols-[1.3fr_1fr]">
      <div className="flex flex-col">
        <h3 className="font-display text-2xl font-semibold text-ink">
          {project.title}
        </h3>
        <p className="mt-3 text-balance leading-relaxed text-ink-dim">
          {project.description}
        </p>

        <div className="mt-5 flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-accent/25 bg-accent/[0.06] px-3 py-1 text-xs text-accent-soft"
            >
              {tech}
            </span>
          ))}
        </div>

        <ul className="mt-6 grid gap-2 sm:grid-cols-2">
          {project.features.map((feature) => (
            <li key={feature} className="flex items-start gap-2 text-sm text-ink-dim">
              <Check size={14} className="mt-0.5 shrink-0 text-accent" />
              {feature}
            </li>
          ))}
        </ul>

        <div className="mt-7 flex flex-wrap gap-3">
          {project.github ? (
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 rounded-lg border border-line px-4 py-2 text-sm text-ink transition-colors hover:border-accent/50 hover:text-accent"
            >
              <FaGithub size={16} />
              GitHub
            </a>
          ) : (
            <span className="flex cursor-not-allowed items-center gap-2 rounded-lg border border-line/60 px-4 py-2 text-sm text-ink-faint">
              <FaGithub size={16} />
              GitHub — Coming Soon
            </span>
          )}

          {project.liveDemo ? (
            <a
              href={project.liveDemo}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 rounded-lg border border-line px-4 py-2 text-sm text-ink transition-colors hover:border-accent/50 hover:text-accent"
            >
              <ExternalLink size={16} />
              Live Demo
            </a>
          ) : (
            <span className="flex cursor-not-allowed items-center gap-2 rounded-lg border border-line/60 px-4 py-2 text-sm text-ink-faint">
              <ExternalLink size={16} />
              Live Demo — Coming Soon
            </span>
          )}

          <button
            onClick={() => onOpenCaseStudy(project.slug)}
            className="ml-auto flex items-center gap-2 rounded-lg bg-accent px-4 py-2 text-sm font-medium text-[#150d04] transition-transform hover:-translate-y-0.5"
          >
            <FileText size={16} />
            View Case Study
          </button>
        </div>
      </div>

      <div className="rounded-2xl border border-line-soft bg-black/20 p-5">
        <p className="eyebrow mb-4 text-center">workflow</p>
        <WorkflowDiagram compact steps={project.workflow} />
      </div>
    </article>
  );
}
