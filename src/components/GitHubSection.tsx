import { ExternalLink } from "lucide-react";
import { profile } from "../data/profile";
import Reveal from "./Reveal";

import { FaGithub } from "react-icons/fa";

export default function GitHubSection() {
  return (
    <section id="github" className="section">
      <div className="section-shell">
        <Reveal>
          <div className="text-center">
            <p className="eyebrow">Open source presence</p>
            <h2 className="mt-3 font-display text-3xl font-semibold text-ink text-balance sm:text-5xl">
              GitHub Activity &amp; Code
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-ink-dim sm:text-lg">
              Explore code repositories, architectural implementations, and
              development consistency on GitHub.
            </p>
          </div>

          <div className="glass mt-12 rounded-3xl p-5 sm:p-8">
            <div className="flex flex-col gap-6 border-b border-line pb-7 lg:flex-row lg:items-center lg:justify-between">
              <div className="flex items-center gap-4 text-left">
                <div className="rounded-2xl border border-line bg-white/[0.06] p-4">
                  <FaGithub size={28} className="text-ink" />
                </div>
                <div className="min-w-0">
                  <div className="flex flex-wrap items-center gap-3">
                    <h3 className="font-display text-xl font-semibold text-ink">
                      @{profile.githubUsername}
                    </h3>
                    <span className="rounded-md border border-accent/30 bg-accent/10 px-2.5 py-1 font-mono text-[0.65rem] uppercase tracking-[0.12em] text-accent-soft">
                      Active contributor
                    </span>
                  </div>
                  <p className="mt-2 text-sm text-ink-dim">
                    Generative AI <span className="text-accent">•</span>{" "}
                    Agentic Workflows <span className="text-accent">•</span>{" "}
                    Python <span className="text-accent">•</span> Full-Stack
                  </p>
                </div>
              </div>

              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer"
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-accent px-5 py-3 font-medium text-[#150d04] transition-transform hover:-translate-y-0.5 lg:w-auto"
              >
                <FaGithub size={17} />
                Visit GitHub Profile
                <ExternalLink size={15} />
              </a>
            </div>

            <div className="pt-7 text-left">
              <div className="grid gap-4 md:grid-cols-3">
                <div className="rounded-2xl border border-line bg-black/15 p-4">
                  <p className="text-xs uppercase tracking-[0.18em] text-ink-faint">Focus</p>
                  <p className="mt-3 text-lg font-medium text-ink">Generative AI</p>
                </div>
                <div className="rounded-2xl border border-line bg-black/15 p-4">
                  <p className="text-xs uppercase tracking-[0.18em] text-ink-faint">Stack</p>
                  <p className="mt-3 text-lg font-medium text-ink">Python • React • Node</p>
                </div>
                <div className="rounded-2xl border border-line bg-black/15 p-4">
                  <p className="text-xs uppercase tracking-[0.18em] text-ink-faint">Profile</p>
                  <p className="mt-3 text-lg font-medium text-ink">@{profile.githubUsername}</p>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
