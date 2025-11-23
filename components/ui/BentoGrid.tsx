import React from "react";

type BentoGridProps = {
  children: React.ReactNode;
  className?: string;
};

type BentoCardProps = {
  title: string;
  description?: string;
  href?: string;
  className?: string;
  children?: React.ReactNode;
};

export function BentoGrid({ children, className }: BentoGridProps) {
  return (
    <div
      className={`grid grid-cols-1 gap-5 sm:grid-cols-6 ${className ?? ""}`}
      role="list"
    >
      {children}
    </div>
  );
}

export function BentoCard({
  title,
  description,
  href,
  className,
  children,
}: BentoCardProps) {
  const Wrapper = href ? "a" : "div";
  return (
    <Wrapper
      {...(href ? { href, target: "_blank", rel: "noreferrer noopener" } : {})}
      className={`bento-card group relative overflow-hidden rounded-2xl border border-zinc-200/70 bg-white p-5 transition-all hover:shadow-lg dark:border-white/10 dark:bg-zinc-900 ${className ?? ""}`}
    >
      <div className="relative z-10">
        <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-50">
          {title}
        </h3>
        {description ? (
          <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
            {description}
          </p>
        ) : null}
        {children ? <div className="mt-4">{children}</div> : null}
      </div>
      {/* subtle gradient shine */}
      <div className="pointer-events-none absolute inset-x-0 -top-20 h-40 translate-y-0 bg-gradient-to-b from-zinc-900/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 dark:from-white/10" />
    </Wrapper>
  );
}

