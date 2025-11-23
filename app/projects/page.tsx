import ItemsGridWithModal, { type Item } from "@/components/ui/ItemsGridWithModal";

export default function ProjectsPage() {
  const projects: Item[] = [
    { title: "Analytics Dashboard", desc: "Next.js app with real-time charts", icon: "globe.svg", content: "Built with SSR, streaming, and WebSocket feeds." },
    { title: "Docs Site", desc: "MDX-based documentation platform", icon: "file.svg", content: "MDX routes, search, and versioned docs." },
    { title: "E‑commerce UI", desc: "Checkout flows and product pages", icon: "window.svg", content: "Cart/checkout UX, accessibility, and metrics." },
    { title: "Blog Engine", desc: "Content, SEO, and publishing tools", icon: "file.svg", content: "Markdown pipeline, image optimization, and RSS." },
    { title: "UI Animations", desc: "Micro-interactions and page transitions", icon: "vercel.svg", content: "Framer Motion transitions and gesture-based effects." },
    { title: "Portfolio V2", desc: "Refined layout and performance", icon: "next.svg", content: "Polished typography and CLS-free layout." },
  ];

  return (
    <div className="min-h-[calc(100vh-57px)] bg-gradient-to-b from-white to-zinc-50 dark:from-black dark:to-zinc-950">
      <section className="mx-auto w-full max-w-6xl px-6 py-16 sm:px-10 sm:py-24">
        <h1 className="text-center text-3xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-5xl">
          Projects
        </h1>
        <p className="mx-auto mt-3 max-w-2xl text-center text-sm text-zinc-600 dark:text-zinc-400 sm:text-base">
          A curated selection of builds and experiments.
        </p>
        <div className="mt-10">
          <ItemsGridWithModal items={projects} />
        </div>
      </section>
    </div>
  );
}

