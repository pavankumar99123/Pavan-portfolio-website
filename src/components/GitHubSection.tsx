import { Activity, ExternalLink } from "lucide-react";
import { profile } from "../data/profile";
import Reveal from "./Reveal";

import { FaGithub } from "react-icons/fa";

const contributionLevels = Array.from({ length: 196 }, (_, index) => {
  const wave = (index * 17 + Math.floor(index / 14) * 11) % 19;

  if (wave < 4) return 0;
  if (wave < 8) return 1;
  if (wave < 14) return 2;
  if (wave < 17) return 3;
  return 4;
});

const levelClasses = [
  "bg-white/[0.04]",
  "bg-accent-dim/40",
  "bg-accent-dim/70",
  "bg-accent/75",
  "bg-accent-soft",
];

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
              <div className="flex flex-col gap-3 text-xs text-ink-faint sm:flex-row sm:items-center sm:justify-between">
                <div className="flex items-center gap-2 font-mono">
                  <Activity size={15} className="text-accent" />
                  Contribution consistency &amp; commit activity
                </div>
                <div className="flex items-center gap-2 font-mono">
                  <span>Less</span>
                  <span className="h-3 w-3 rounded-[3px] bg-white/[0.04]" aria-hidden="true" />
                  <span className="h-3 w-3 rounded-[3px] bg-accent-dim/50" aria-hidden="true" />
                  <span className="h-3 w-3 rounded-[3px] bg-accent/75" aria-hidden="true" />
                  <span className="h-3 w-3 rounded-[3px] bg-accent-soft" aria-hidden="true" />
                  <span>More</span>
                </div>
              </div>

              <div className="mt-4 overflow-x-auto rounded-2xl border border-line-soft bg-black/20 p-4">
                <div className="grid min-w-[42rem] grid-flow-col grid-rows-7 gap-1.5">
                  {contributionLevels.map((level, index) => (
                    <span
                      key={index}
                      className={`h-3.5 w-3.5 rounded-[3px] ${levelClasses[level]}`}
                      aria-hidden="true"
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
