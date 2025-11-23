import ItemsGridWithModal, { type Item } from "@/components/ui/ItemsGridWithModal";

export default function BlogsPage() {
  const posts: Item[] = [
    { title: "Designing with Motion", desc: "Thoughts on meaningful animation.", content: "Motion should support content and hierarchy, not distract." },
    { title: "Next.js Performance Tips", desc: "Pragmatic wins for Core Web Vitals.", content: "Image optimization, streaming, and avoiding layout shifts." },
    { title: "Accessible UI Patterns", desc: "Small changes, big impact.", content: "Focus traps, keyboard support, and ARIA for complex widgets." },
    { title: "Styling Strategies", desc: "Scalable CSS with Tailwind and tokens.", content: "Use tokens, logical props, and composition over overrides." },
    { title: "SSR vs ISR", desc: "Picking the right rendering mode.", content: "Choose based on freshness, cost, and user expectations." },
    { title: "State Management Notes", desc: "Keep it simple until it hurts.", content: "Start with React state; add tools only when needed." },
  ];

  return (
    <div className="min-h-[calc(100vh-57px)] bg-gradient-to-b from-white to-zinc-50 dark:from-black dark:to-zinc-950">
      <section className="mx-auto w-full max-w-6xl px-6 py-16 sm:px-10 sm:py-24">
        <h1 className="text-center text-3xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-5xl">
          Blogs
        </h1>
        <p className="mx-auto mt-3 max-w-2xl text-center text-sm text-zinc-600 dark:text-zinc-400 sm:text-base">
          Writing about front‑end craft, performance, and design systems.
        </p>
        <div className="mt-10">
          <ItemsGridWithModal items={posts} />
        </div>
      </section>
    </div>
  );
}

