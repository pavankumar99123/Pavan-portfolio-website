interface WorkflowDiagramProps {
  steps: string[];
  compact?: boolean;
}

/**
 * A vertical node-and-connector diagram used to represent conceptual
 * AI / agentic workflows. Purely illustrative — not a claim about any
 * specific runtime architecture.
 */
export default function WorkflowDiagram({ steps, compact = false }: WorkflowDiagramProps) {
  return (
    <div className="flex flex-col items-stretch">
      {steps.map((step, i) => (
        <div key={step} className="flex flex-col items-center">
          <div
            className={`w-full rounded-xl border border-line glass px-4 text-center font-mono text-ink transition-colors hover:border-accent/50 ${
              compact ? "py-2 text-xs" : "py-3 text-sm"
            }`}
          >
            {step}
          </div>
          {i < steps.length - 1 && (
            <svg
              width="2"
              height={compact ? 20 : 28}
              viewBox={`0 0 2 ${compact ? 20 : 28}`}
              className="my-0.5 shrink-0"
              aria-hidden="true"
            >
              <line
                x1="1"
                y1="0"
                x2="1"
                y2={compact ? 20 : 28}
                stroke="var(--color-accent)"
                strokeWidth="1.5"
                className="animate-dash-flow"
                opacity="0.7"
              />
            </svg>
          )}
        </div>
      ))}
    </div>
  );
}
