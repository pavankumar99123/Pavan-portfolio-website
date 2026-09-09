import { Mail } from "lucide-react";
import { profile } from "../data/profile";

import { FaGithub, FaLinkedin } from "react-icons/fa";
export default function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="section-shell flex flex-col items-center gap-6 py-10 text-center sm:flex-row sm:justify-between sm:text-left">
        <div>
          <p className="font-display text-lg font-semibold text-ink">
            {profile.name}
          </p>
          <p className="mt-1 text-sm text-ink-dim">{profile.title}</p>
          <p className="mt-1 font-mono text-xs text-ink-faint">
            Generative AI • Agentic AI • Full-Stack Development
          </p>
        </div>

        <div className="flex items-center gap-3">
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub profile"
            className="rounded-lg border border-line p-2 text-ink-dim transition-colors hover:border-accent/50 hover:text-accent"
          >
            <FaGithub size={17} />
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn profile"
            className="rounded-lg border border-line p-2 text-ink-dim transition-colors hover:border-accent/50 hover:text-accent"
          >
            <FaLinkedin size={17} />
          </a>
          <a
            href={`mailto:${profile.email}`}
            aria-label="Send email"
            className="rounded-lg border border-line p-2 text-ink-dim transition-colors hover:border-accent/50 hover:text-accent"
          >
            <Mail size={17} />
          </a>
        </div>
      </div>
      <div className="section-shell border-t border-line-soft py-5 text-center text-xs text-ink-faint">
        © 2026 {profile.name}. All Rights Reserved.
      </div>
    </footer>
  );
}
