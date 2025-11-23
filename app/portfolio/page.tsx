import ItemsGridWithModal, { type Item } from "@/components/ui/ItemsGridWithModal";

export default function PortfolioPage() {
  const items: Item[] = [
    { title: "Design System", desc: "Reusable UI kit built with Tailwind", icon: "file.svg", content: "A token-driven UI system with components and docs." },
    { title: "Landing Templates", desc: "Marketing pages with modern interactions", icon: "window.svg", content: "Responsive landing pages with SEO and a11y." },
    { title: "Performance Pass", desc: "Core Web Vitals improvements", icon: "globe.svg", content: "Optimizations for LCP/CLS/INP across pages." },
    { title: "Next.js Starter", desc: "Production-ready app template", icon: "next.svg", content: "App Router, auth-ready, linted and tested base." },
    { title: "Open Source", desc: "Small utilities and hooks", icon: "vercel.svg", content: "Handy hooks and utils for daily workflows." },
    { title: "Animations Pack", desc: "CSS & Framer Motion snippets", icon: "file.svg", content: "Reusable motion snippets for micro-interactions." },
  ];

  return (
    <div className="min-h-[calc(100vh-57px)] bg-gradient-to-b from-white to-zinc-50 dark:from-black dark:to-zinc-950">
      <section className="mx-auto w-full max-w-6xl px-6 py-16 sm:px-10 sm:py-24">
        <h1 className="text-center text-3xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-5xl">
          Portfolio
        </h1>
        <p className="mx-auto mt-3 max-w-2xl text-center text-sm text-zinc-600 dark:text-zinc-400 sm:text-base">
          Selected work and experiments that showcase my approach to building fast, elegant interfaces.
        </p>
        <div className="mt-10">
          <ItemsGridWithModal items={items} />
        </div>
      </section>
    </div>
  );
}

