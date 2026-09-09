import { Sparkles, Bot, Layers } from "lucide-react";
import Reveal from "./Reveal";

const highlights = [
  {
    number: "01",
    title: "Generative AI",
    icon: Sparkles,
    description: "Working with LLMs and prompt engineering to build AI-powered features.",
  },
  {
    number: "02",
    title: "Agentic AI",
    icon: Bot,
    description: "Designing agent and workflow logic with LangChain and LangGraph.",
  },
  {
    number: "03",
    title: "Full-Stack Development",
    icon: Layers,
    description: "Connecting React.js frontends to Python and Node.js backends.",
  },
];

export default function About() {
  return (
    <section id="about" className="section">
      <div className="section-shell">
        <Reveal>
          <p className="eyebrow">About</p>
          <h2 className="mt-3 max-w-2xl font-display text-3xl font-semibold text-ink text-balance sm:text-4xl">
            About Me
          </h2>
        </Reveal>

        <Reveal delay={100} className="mt-8 max-w-3xl">
          <p className="text-balance text-lg leading-relaxed text-ink-dim">
            MCA graduate with a strong foundation in Python, JavaScript, React.js,
            Node.js, and REST APIs, focused on Generative AI and Agentic AI
            development. Familiar with LangChain, LangGraph, LLMs, AI agents, and
            prompt engineering, with experience building AI-powered applications
            and backend services. Knowledge of Firebase, SQL, Git/GitHub, Docker,
            and GCP. Strong problem-solving skills with a collaborative,
            startup-oriented mindset.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-5 sm:grid-cols-3">
          {highlights.map((item, i) => (
            <Reveal key={item.title} delay={150 + i * 100}>
              <div className="glass group h-full rounded-2xl p-6 transition-colors hover:border-accent/40">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-sm text-ink-faint">{item.number}</span>
                  <item.icon size={20} className="text-accent-soft" />
                </div>
                <h3 className="mt-4 font-display text-lg font-medium text-ink">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-dim">
                  {item.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
