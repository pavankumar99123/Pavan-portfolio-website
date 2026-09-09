import { useEffect, useRef } from "react";
import { X, ExternalLink } from "lucide-react";
import type { Project } from "../data/projects";
import WorkflowDiagram from "./WorkflowDiagram";

import { FaGithub } from "react-icons/fa";
interface ProjectModalProps {
  project: Project;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    closeRef.current?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-[100] flex items-start justify-center overflow-y-auto bg-black/70 p-4 backdrop-blur-sm sm:items-center sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-labelledby="project-modal-title"
      onMouseDown={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="glass-strong reveal w-full max-w-3xl rounded-3xl p-6 sm:p-9">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="eyebrow">Case Study</p>
            <h2
              id="project-modal-title"
              className="mt-2 font-display text-2xl font-semibold text-ink sm:text-3xl"
            >
              {project.title}
            </h2>
          </div>
          <button
            ref={closeRef}
            onClick={onClose}
            aria-label="Close case study"
            className="rounded-lg border border-line p-2 text-ink-dim transition-colors hover:border-accent/50 hover:text-accent"
          >
            <X size={18} />
          </button>
        </div>

        <div className="mt-7 grid gap-8 lg:grid-cols-[1.2fr_1fr]">
          <div className="space-y-7">
            <div>
              <h3 className="font-display text-sm font-medium uppercase tracking-wide text-accent-soft">
                Overview
              </h3>
              <p className="mt-2 leading-relaxed text-ink-dim">{project.description}</p>
            </div>

            <div>
              <h3 className="font-display text-sm font-medium uppercase tracking-wide text-accent-soft">
                Technology Stack
              </h3>
              <div className="mt-3 flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-accent/25 bg-accent/[0.06] px-3 py-1 text-xs text-accent-soft"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h3 className="font-display text-sm font-medium uppercase tracking-wide text-accent-soft">
                Key Features
              </h3>
              <ul className="mt-3 grid gap-2 sm:grid-cols-2">
                {project.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-ink-dim">
                    <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-accent" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-display text-sm font-medium uppercase tracking-wide text-accent-soft">
                Architecture &amp; AI Workflow
              </h3>
              <ul className="mt-3 space-y-2">
                {project.technicalDetails.map((detail) => (
                  <li key={detail} className="text-sm leading-relaxed text-ink-dim">
                    {detail}
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-wrap gap-3 pt-1">
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
                <span className="flex items-center gap-2 rounded-lg border border-line/60 px-4 py-2 text-sm text-ink-faint">
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
                <span className="flex items-center gap-2 rounded-lg border border-line/60 px-4 py-2 text-sm text-ink-faint">
                  <ExternalLink size={16} />
                  Live Demo — Coming Soon
                </span>
              )}
            </div>
          </div>

          <div className="rounded-2xl border border-line-soft bg-black/20 p-5">
            <p className="eyebrow mb-4 text-center">problem → solution flow</p>
            <WorkflowDiagram compact steps={project.workflow} />
          </div>
        </div>
      </div>
    </div>
  );
}
