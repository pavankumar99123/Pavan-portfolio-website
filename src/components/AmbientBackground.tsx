const symbols = ["</>", "{ }", "λ", "AI()", "=>", "[ ]", "01", "if()"];

const particles = Array.from({ length: 16 }, (_, i) => ({
  id: i,
  left: `${(i * 6.3) % 100}%`,
  delay: `${(i * 0.9) % 9}s`,
  duration: `${9 + (i % 5) * 1.6}s`,
  size: i % 3 === 0 ? 3 : 2,
}));

const floaters = Array.from({ length: 8 }, (_, i) => ({
  id: i,
  left: `${8 + i * 11}%`,
  top: `${(i * 37) % 90}%`,
  delay: `${i * 0.6}s`,
  symbol: symbols[i % symbols.length],
}));

/**
 * A fixed, subtle, decorative backdrop shared by the whole page:
 * neural grid + drifting particles + faint floating code glyphs.
 * Purely ambient — kept lightweight (CSS/SVG only, no canvas/WebGL).
 */
export default function AmbientBackground() {
  return (
    <div
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-bg"
      aria-hidden="true"
    >
      <div className="neural-grid absolute inset-0" />

      <div
        className="glow-orb absolute -top-40 left-1/4 h-[26rem] w-[26rem] opacity-25"
        style={{ background: "radial-gradient(circle, var(--color-accent), transparent 70%)" }}
      />
      <div
        className="glow-orb absolute top-[40%] -right-32 h-[22rem] w-[22rem] opacity-15"
        style={{ background: "radial-gradient(circle, var(--color-accent), transparent 70%)" }}
      />

      {/* neural connector lines */}
      <svg className="absolute inset-0 h-full w-full opacity-[0.12]" xmlns="http://www.w3.org/2000/svg">
        <line x1="10%" y1="15%" x2="35%" y2="40%" stroke="var(--color-accent)" strokeWidth="1" />
        <line x1="35%" y1="40%" x2="65%" y2="20%" stroke="var(--color-accent)" strokeWidth="1" />
        <line x1="65%" y1="20%" x2="90%" y2="45%" stroke="var(--color-accent)" strokeWidth="1" />
        <line x1="20%" y1="70%" x2="50%" y2="55%" stroke="var(--color-accent)" strokeWidth="1" />
        <line x1="50%" y1="55%" x2="80%" y2="80%" stroke="var(--color-accent)" strokeWidth="1" />
        <circle cx="10%" cy="15%" r="2.5" fill="var(--color-accent)" />
        <circle cx="35%" cy="40%" r="2.5" fill="var(--color-accent)" />
        <circle cx="65%" cy="20%" r="2.5" fill="var(--color-accent)" />
        <circle cx="90%" cy="45%" r="2.5" fill="var(--color-accent)" />
        <circle cx="20%" cy="70%" r="2.5" fill="var(--color-accent)" />
        <circle cx="50%" cy="55%" r="2.5" fill="var(--color-accent)" />
        <circle cx="80%" cy="80%" r="2.5" fill="var(--color-accent)" />
      </svg>

      {/* drifting particles */}
      {particles.map((p) => (
        <span
          key={p.id}
          className="absolute rounded-full bg-accent"
          style={{
            left: p.left,
            bottom: "-10px",
            width: p.size,
            height: p.size,
            opacity: 0.35,
            animation: `drift ${p.duration} linear infinite`,
            animationDelay: p.delay,
          }}
        />
      ))}

      {/* faint floating code glyphs */}
      {floaters.map((f) => (
        <span
          key={f.id}
          className="absolute font-mono text-xs text-ink-faint animate-float-slow"
          style={{ left: f.left, top: f.top, animationDelay: f.delay, opacity: 0.18 }}
        >
          {f.symbol}
        </span>
      ))}

      <div className="grain absolute inset-0" />
    </div>
  );
}
