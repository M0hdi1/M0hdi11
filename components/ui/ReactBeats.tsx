export default function ReactBeats({
  bars = 12,
  height = 48,
  width = 3,
  gap = 6,
}: {
  bars?: number;
  height?: number;
  width?: number;
  gap?: number;
}) {
  const items = Array.from({ length: bars });
  return (
    <div
      className="flex items-end justify-center"
      style={{ height, gap }}
      aria-hidden="true"
    >
      {items.map((_, index) => {
        const delayMs = (index % 6) * 120;
        return (
          <div
            key={index}
            className="beat-bar bg-foreground/80 dark:bg-foreground rounded-full"
            style={{
              width,
              height: '100%',
              animationDelay: `${delayMs}ms`,
            }}
          />
        );
      })}
    </div>
  );
}

