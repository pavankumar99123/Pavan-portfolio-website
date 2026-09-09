import { Download } from "lucide-react";
import { profile } from "../data/profile";
import Reveal from "./Reveal";

export default function Resume() {
  return (
    <section className="section pb-0">
      <div className="section-shell">
        <Reveal>
          <div className="glow-orb relative overflow-hidden rounded-3xl border border-line px-8 py-14 text-center sm:px-14">
            <div
              className="glow-orb absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 -translate-y-1/2 opacity-30"
              style={{
                background:
                  "radial-gradient(circle, var(--color-accent), transparent 70%)",
              }}
            />
            <div className="relative">
              <h2 className="font-display text-3xl font-semibold text-ink sm:text-4xl">
                Explore My Resume
              </h2>
              <p className="mx-auto mt-4 max-w-md text-balance text-ink-dim">
                Download my resume to learn more about my technical skills,
                projects, education and experience.
              </p>
              <a
                href={profile.resumePath}
                download
                className="mt-8 inline-flex items-center gap-2 rounded-lg bg-accent px-7 py-3.5 font-medium text-[#150d04] transition-transform hover:-translate-y-0.5"
              >
                <Download size={18} />
                Download Resume
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
