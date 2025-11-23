import { BackgroundBeams } from "@/components/ui/BackgroundBeams";
import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="min-h-[calc(100vh-57px)] bg-gradient-to-b from-white to-zinc-50 dark:from-black dark:to-zinc-950">
      <section className="relative w-full py-16 sm:py-24">
        <BackgroundBeams>
          <div className="relative z-10 mx-auto max-w-4xl px-6 sm:px-10">
            <h1 className="text-3xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-5xl">
              About Me
            </h1>
            <p className="mt-4 max-w-3xl text-base leading-7 text-zinc-600 dark:text-zinc-400 sm:text-lg">
              I&apos;m a front‑end developer focused on Next.js, performance, and delightful UI.
              I enjoy building minimal, accessible interfaces with thoughtful motion.
            </p>
            <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
              {["next.svg", "vercel.svg", "globe.svg", "window.svg"].map((src) => (
                <div key={src} className="flex items-center justify-center rounded-xl border border-zinc-200/70 bg-white p-4 dark:border-white/10 dark:bg-zinc-900">
                  <Image src={`/${src}`} alt="" width={28} height={28} className="dark:invert" />
                </div>
              ))}
            </div>
          </div>
        </BackgroundBeams>
      </section>
    </div>
  );
}

