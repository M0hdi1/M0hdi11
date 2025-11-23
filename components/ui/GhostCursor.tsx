"use client";
import { useEffect, useRef } from "react";

export default function GhostCursor() {
  const dotRef = useRef<HTMLDivElement | null>(null);
  const trailRef = useRef<HTMLDivElement | null>(null);
  const target = useRef({ x: 0, y: 0 });
  const pos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    function onMove(e: MouseEvent) {
      target.current.x = e.clientX;
      target.current.y = e.clientY;
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
      }
    }
    window.addEventListener("mousemove", onMove, { passive: true });
    let raf = 0;
    const animate = () => {
      pos.current.x += (target.current.x - pos.current.x) * 0.12;
      pos.current.y += (target.current.y - pos.current.y) * 0.12;
      if (trailRef.current) {
        trailRef.current.style.transform = `translate3d(${pos.current.x}px, ${pos.current.y}px, 0)`;
      }
      raf = requestAnimationFrame(animate);
    };
    raf = requestAnimationFrame(animate);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", onMove);
    };
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-[70]">
      <div
        ref={trailRef}
        className="absolute left-0 top-0 -translate-x-1/2 -translate-y-1/2 rounded-full"
        style={{
          width: 28,
          height: 28,
          background:
            "radial-gradient(circle at center, rgba(16,185,129,0.25), transparent 60%)",
          filter: "blur(2px)",
        }}
      />
      <div
        ref={dotRef}
        className="absolute left-0 top-0 -translate-x-1/2 -translate-y-1/2 rounded-full"
        style={{
          width: 6,
          height: 6,
          background: "rgba(16,185,129,0.9)",
          boxShadow: "0 0 12px rgba(16,185,129,0.75)",
        }}
      />
    </div>
  );
}

