import { skillCategories } from "../data/skills";
import Reveal from "./Reveal";

export default function Skills() {
  return (
    <section id="skills" className="section">
      <div className="section-shell">
        <Reveal>
          <p className="eyebrow">Skills</p>
          <h2 className="mt-3 max-w-2xl font-display text-3xl font-semibold text-ink text-balance sm:text-4xl">
            What I Work With
          </h2>
          <p className="mt-4 max-w-xl text-ink-dim">
            Organized by area rather than a proficiency score — the technologies
            below are the ones I actively build with.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category, i) => (
            <Reveal key={category.title} delay={(i % 3) * 100}>
              <div className="glass group h-full rounded-2xl p-6 transition-all hover:border-accent/40 hover:shadow-[0_20px_50px_-25px_rgba(227,150,62,0.35)]">
                <h3 className="font-display text-base font-medium text-ink">
                  {category.title}
                </h3>
                <p className="mt-1 text-xs text-ink-faint">{category.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-line bg-white/[0.02] px-3 py-1 text-xs text-ink-dim transition-colors hover:border-accent/50 hover:text-accent-soft"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
