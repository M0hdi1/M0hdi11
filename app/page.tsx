import { FaultyTerminalBackground } from "@/components/ui/FaultyTerminalBackground";

export default function Home() {
  return (
    <div className="min-h-dvh">
      <main className="mx-auto flex h-[100dvh] w-full max-w-6xl items-center justify-center overflow-hidden px-6 sm:px-10">
        <section className="relative w-full text-center">
          <FaultyTerminalBackground>
            <div className="relative z-10 mx-auto max-w-3xl">
              <h1 className="text-4xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-6xl">
                M0hdi1
              </h1>
              <p className="max-w-2xl text-pretty text-base leading-7 text-zinc-600 dark:text-zinc-400 sm:text-lg">
                توسعه‌دهنده فرانت‌اند. عاشق Next.js، طراحی مینیمال و تجربه‌های سریع.
                نمونه‌کارها و پروژه‌های شخصی‌ام را اینجا ببین.
              </p>
            </div>
          </FaultyTerminalBackground>
        </section>
      </main>
    </div>
  );
}
