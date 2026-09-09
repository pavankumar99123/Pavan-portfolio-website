import { GraduationCap, MapPin } from "lucide-react";
import { education } from "../data/education";
import Reveal from "./Reveal";

export default function Education() {
  return (
    <section id="education" className="section">
      <div className="section-shell">
        <Reveal>
          <p className="eyebrow">Education</p>
          <h2 className="mt-3 max-w-2xl font-display text-3xl font-semibold text-ink text-balance sm:text-4xl">
            Education
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-5 sm:grid-cols-2">
          {education.map((item, i) => (
            <Reveal key={item.degree} delay={i * 100}>
              <div className="glass h-full rounded-2xl p-6 transition-colors hover:border-accent/40">
                <div className="flex items-center justify-between">
                  <GraduationCap size={22} className="text-accent-soft" />
                  <span className="font-mono text-xs text-ink-faint">{item.year}</span>
                </div>
                <h3 className="mt-4 font-display text-lg font-medium leading-snug text-ink">
                  {item.degree}
                </h3>
                <p className="mt-2 text-sm text-ink-dim">{item.institution}</p>
                <span className="mt-1 flex items-center gap-1.5 text-xs text-ink-faint">
                  <MapPin size={12} />
                  {item.location}
                </span>
                <p className="mt-4 inline-block rounded-full border border-line px-3 py-1 font-mono text-xs text-accent-soft">
                  {item.score}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
