import { MapPin, Calendar } from "lucide-react";
import { experience } from "../data/experience";
import Reveal from "./Reveal";

export default function Experience() {
  return (
    <section id="experience" className="section">
      <div className="section-shell">
        <Reveal>
          <p className="eyebrow">Experience</p>
          <h2 className="mt-3 max-w-2xl font-display text-3xl font-semibold text-ink text-balance sm:text-4xl">
            Experience
          </h2>
        </Reveal>

        <div className="relative mt-12 max-w-3xl">
          <div className="absolute bottom-0 left-[9px] top-2 hidden w-px bg-line sm:block" />
          {experience.map((item, i) => (
            <Reveal key={item.role} delay={i * 100} className="relative pl-0 sm:pl-10">
              <span className="absolute left-0 top-2 hidden h-[19px] w-[19px] items-center justify-center rounded-full border border-accent/50 bg-bg sm:flex">
                <span className="h-2 w-2 rounded-full bg-accent" />
              </span>

              <div className="glass rounded-2xl p-6">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="font-display text-lg font-medium text-ink">
                    {item.role}
                  </h3>
                  <span className="flex items-center gap-1.5 font-mono text-xs text-accent-soft">
                    <Calendar size={13} />
                    {item.duration}
                  </span>
                </div>
                <span className="mt-1 flex items-center gap-1.5 text-sm text-ink-faint">
                  <MapPin size={13} />
                  {item.location}
                </span>

                <ul className="mt-4 space-y-2.5">
                  {item.responsibilities.map((r) => (
                    <li key={r} className="flex gap-3 text-sm leading-relaxed text-ink-dim">
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                      {r}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
