import React from "react";

export default function Lanyard({
  position,
  gravity,
  className,
}: {
  position?: [number, number, number];
  gravity?: [number, number, number];
  className?: string;
}) {
  return (
    <div
      className={`pointer-events-none absolute inset-0 ${className ?? ""}`}
      aria-hidden="true"
    >
      <div className="rb-lanyard absolute inset-0" />
    </div>
  );
}

