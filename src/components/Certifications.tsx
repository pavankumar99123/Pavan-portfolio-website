import { BadgeCheck, Link2Off } from "lucide-react";
import { certifications } from "../data/certifications";
import Reveal from "./Reveal";

export default function Certifications() {
  return (
    <section id="certifications" className="section">
      <div className="section-shell">
        <Reveal>
          <p className="eyebrow">Certifications</p>
          <h2 className="mt-3 max-w-2xl font-display text-3xl font-semibold text-ink text-balance sm:text-4xl">
            Certifications
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-5 sm:grid-cols-2">
          {certifications.map((cert, i) => (
            <Reveal key={cert.title} delay={i * 100}>
              <div className="glass flex h-full flex-col rounded-2xl p-6 transition-colors hover:border-accent/40">
                <BadgeCheck size={22} className="text-accent-soft" />
                <h3 className="mt-4 font-display text-lg font-medium leading-snug text-ink">
                  {cert.title}
                </h3>
                <span className="mt-2 font-mono text-xs text-ink-faint">{cert.year}</span>

                <div className="mt-auto pt-5">
                  {cert.verificationUrl ? (
                    <a
                      href={cert.verificationUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="text-sm text-accent-soft link-underline"
                    >
                      Verification Link
                    </a>
                  ) : (
                    <span className="flex items-center gap-2 text-sm text-ink-faint">
                      <Link2Off size={14} />
                      Verification Link — Coming Soon
                    </span>
                  )}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
