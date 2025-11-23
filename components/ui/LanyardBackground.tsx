import React from "react";

type LanyardBackgroundProps = {
  className?: string;
  children?: React.ReactNode;
};

export function LanyardBackground({ className, children }: LanyardBackgroundProps) {
  return (
    <div className={`relative ${className ?? ""}`}>
      <div className="rb-lanyard pointer-events-none absolute inset-0" aria-hidden="true" />
      {children}
    </div>
  );
}

