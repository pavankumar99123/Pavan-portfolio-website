import WorkflowDiagram from "./WorkflowDiagram";
import Reveal from "./Reveal";

const steps = [
  "User Input",
  "Intent Detection",
  "Agent / Workflow",
  "Information Retrieval",
  "LLM",
  "Validation",
  "Final Response",
];

const stack = ["LangChain", "LangGraph", "LLMs", "Python", "FastAPI", "React.js", "Node.js"];

export default function AIWorkflow() {
  return (
    <section className="section">
      <div className="section-shell">
        <div className="glass overflow-hidden rounded-3xl p-6 sm:p-10 lg:p-14">
          <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:items-center">
            <Reveal>
              <p className="eyebrow">Process</p>
              <h2 className="mt-3 font-display text-3xl font-semibold text-ink text-balance sm:text-4xl">
                How I Build AI Applications
              </h2>
              <p className="mt-4 max-w-md text-balance leading-relaxed text-ink-dim">
                A conceptual view of how a user request moves through intent
                detection, an agent or workflow layer, retrieval, and the LLM
                itself before a validated response is returned.
              </p>

              <div className="mt-7 flex flex-wrap gap-2">
                {stack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-accent/25 bg-accent/[0.06] px-3 py-1 text-xs text-accent-soft"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </Reveal>

            <Reveal delay={150} className="mx-auto w-full max-w-xs">
              <WorkflowDiagram steps={steps} />
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
