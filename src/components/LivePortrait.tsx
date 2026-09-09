export default function LivePortrait() {
  return (
    <div className="relative mx-auto aspect-[9/16] w-full max-w-[310px]">
      {/* glow behind the portrait */}
      <div
        className="glow-orb absolute -inset-6 opacity-60"
        style={{
          background:
            "radial-gradient(circle, rgba(227,150,62,0.35), transparent 65%)",
        }}
      />
      <div className="glass-strong absolute inset-0 overflow-hidden rounded-[1.75rem] border-white/10 shadow-[0_30px_80px_-30px_rgba(0,0,0,0.8)]">
        <img
          src="/portrait.jpg"
          alt="Pavan Kumar Bathula"
          className="absolute inset-0 h-full w-full object-cover"
          loading="eager"
          draggable={false}
        />
        {/* subtle top-down gradient so the UI chip below reads cleanly */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/10" />

        <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between rounded-xl border border-white/10 bg-black/40 px-3 py-2 backdrop-blur-sm">
          <span className="flex items-center gap-2 font-mono text-[0.65rem] text-ink-dim">
            <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse-dot" />
            live
          </span>
          <span className="font-mono text-[0.65rem] text-ink-dim">
            Pavan Kumar
          </span>
        </div>
      </div>

      {/* corner frame accents */}
      <div className="pointer-events-none absolute -top-3 -left-3 h-8 w-8 border-t border-l border-accent/40" />
      <div className="pointer-events-none absolute -bottom-3 -right-3 h-8 w-8 border-b border-r border-accent/40" />
    </div>
  );
}
