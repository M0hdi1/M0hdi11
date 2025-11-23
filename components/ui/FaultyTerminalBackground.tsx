import React from "react";

type FaultyTerminalBackgroundProps = {
  className?: string;
  children?: React.ReactNode;
};

export function FaultyTerminalBackground({ className, children }: FaultyTerminalBackgroundProps) {
  return (
    <div className={`relative ${className ?? ""}`}>
      <div className="rb-terminal-bg pointer-events-none absolute inset-0" aria-hidden="true" />
      <div className="rb-terminal-noise pointer-events-none absolute inset-0" aria-hidden="true" />
      {children}
    </div>
  );
}

