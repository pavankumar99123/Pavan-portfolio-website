import { Mail, Phone, ArrowRight, Download } from "lucide-react";
import { profile } from "../data/profile";
import LivePortrait from "./LivePortrait";

import { FaGithub, FaLinkedin } from "react-icons/fa";
export default function Hero() {
  return (
    <section id="home" className="section relative isolate overflow-hidden pt-32 lg:pt-40">
      <div
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[42rem] opacity-80"
        style={{
          background:
            "radial-gradient(circle at 78% 28%, rgba(227,150,62,0.16), transparent 28%), radial-gradient(circle at 12% 12%, rgba(255,255,255,0.05), transparent 24%)",
        }}
      />
      <div className="pointer-events-none absolute right-[7%] top-36 -z-10 hidden font-mono text-[0.65rem] uppercase tracking-[0.28em] text-ink-faint/60 lg:block">
        <span className="text-accent">01</span> / profile
      </div>
      <div className="section-shell grid items-center gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:gap-10">
        <div className="reveal">
          <span className="eyebrow inline-flex items-center gap-2 rounded-full border border-line px-3 py-1">
            <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse-dot" />
            {profile.availability}
          </span>

          <p className="mt-6 font-display text-lg text-ink-dim">Hi, I'm</p>
          <h1 className="mt-1 font-display text-4xl font-semibold leading-[1.08] tracking-tight text-ink text-balance sm:text-5xl lg:text-6xl">
            {profile.name}
          </h1>
          <p className="mt-3 font-display text-xl text-accent-soft sm:text-2xl">
            {profile.title}
          </p>

          <p className="mt-6 max-w-xl text-balance text-lg leading-relaxed text-ink-dim">
            Building intelligent applications with Generative AI, Agentic AI and
            modern full-stack technologies.
          </p>

          <p className="mt-4 max-w-xl text-balance leading-relaxed text-ink-faint">
            MCA graduate with a strong foundation in Python, JavaScript, React.js,
            Node.js and REST APIs, focused on Generative AI and Agentic AI
            development.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              className="group flex items-center gap-2 rounded-lg bg-accent px-6 py-3 font-medium text-[#150d04] transition-transform hover:-translate-y-0.5"
            >
              View Projects
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href={profile.resumePath}
              download
              className="flex items-center gap-2 rounded-lg border border-line px-6 py-3 font-medium text-ink transition-colors hover:border-accent/50 hover:text-accent"
            >
              <Download size={16} />
              Download Resume
            </a>
          </div>

          <div className="mt-9 flex flex-wrap items-center gap-3">
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub profile"
              className="rounded-lg border border-line p-2.5 text-ink-dim transition-colors hover:border-accent/50 hover:text-accent"
            >
              <FaGithub size={18} />
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn profile"
              className="rounded-lg border border-line p-2.5 text-ink-dim transition-colors hover:border-accent/50 hover:text-accent"
            >
              <FaLinkedin size={18} />
            </a>
            <a
              href={`mailto:${profile.email}`}
              aria-label="Send email"
              className="rounded-lg border border-line p-2.5 text-ink-dim transition-colors hover:border-accent/50 hover:text-accent"
            >
              <Mail size={18} />
            </a>

            <span className="mx-1 hidden h-6 w-px bg-line sm:block" />

            <a
              href={`tel:${profile.phone}`}
              className="flex items-center gap-2 text-sm text-ink-dim transition-colors hover:text-ink"
            >
              <Phone size={14} />
              {profile.phone}
            </a>
            <a
              href={`mailto:${profile.email}`}
              className="flex items-center gap-2 text-sm text-ink-dim transition-colors hover:text-ink"
            >
              <Mail size={14} />
              {profile.email}
            </a>
          </div>
        </div>

        <div className="reveal relative flex flex-col items-center gap-8" style={{ animationDelay: "150ms" }}>
          <div className="pointer-events-none absolute -right-4 top-8 hidden rounded-lg border border-line-soft bg-black/20 px-3 py-2 font-mono text-[0.65rem] leading-relaxed text-ink-faint backdrop-blur-sm sm:block lg:-right-8">
            <span className="text-accent">focus:</span> intelligent systems
            <br />
            <span className="text-accent">mode:</span> building in public
          </div>
          <LivePortrait />
        </div>
      </div>
    </section>
  );
}
