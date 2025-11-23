import React from "react";

type BackgroundBeamsProps = {
  children?: React.ReactNode;
  className?: string;
};

/**
 * BackgroundBeams - a lightweight, hydration-safe background effect
 * inspired by React Bits patterns. Uses deterministic CSS animations.
 */
export function BackgroundBeams({ children, className }: BackgroundBeamsProps) {
  const lines = [
    { y: "10%", d: "12s", opacity: 0.4 },
    { y: "22%", d: "14s", opacity: 0.35 },
    { y: "36%", d: "11s", opacity: 0.45 },
    { y: "50%", d: "15s", opacity: 0.35 },
    { y: "66%", d: "13s", opacity: 0.4 },
    { y: "78%", d: "16s", opacity: 0.3 },
  ] as const;

  return (
    <div className={`relative w-full overflow-hidden ${className ?? ""}`}>
      <div className="pointer-events-none absolute inset-0">
        {/* vignette */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.06),transparent_60%)] dark:bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.06),transparent_60%)]" />
        {/* moving beams */}
        {lines.map((l, i) => (
          <span
            key={i}
            className="beam-line"
            style={
              {
                "--y": l.y,
                "--dur": l.d,
                "--op": l.opacity,
              } as React.CSSProperties
            }
          />
        ))}
      </div>
      {children}
    </div>
  );
}

