export default function ContactPage() {
  return (
    <div className="min-h-[calc(100vh-57px)] bg-gradient-to-b from-white to-zinc-50 dark:from-black dark:to-zinc-950">
      <section className="mx-auto w-full max-w-3xl px-6 py-16 sm:px-10 sm:py-24">
        <h1 className="text-center text-3xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-5xl">
          Contact
        </h1>
        <p className="mx-auto mt-3 max-w-xl text-center text-sm text-zinc-600 dark:text-zinc-400 sm:text-base">
          Want to collaborate or just say hi? I&apos;d love to hear from you.
        </p>
        <form className="mt-10 rounded-2xl border border-zinc-200/70 bg-white p-6 dark:border-white/10 dark:bg-zinc-900">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div className="sm:col-span-1">
              <label className="mb-1 block text-sm text-zinc-700 dark:text-zinc-300">Name</label>
              <input
                type="text"
                placeholder="Your name"
                className="w-full rounded-xl border border-zinc-200 bg-white px-3 py-2 text-sm outline-none ring-emerald-500/0 transition focus:ring-2 dark:border-white/15 dark:bg-zinc-950"
              />
            </div>
            <div className="sm:col-span-1">
              <label className="mb-1 block text-sm text-zinc-700 dark:text-zinc-300">Email</label>
              <input
                type="email"
                placeholder="you@example.com"
                className="w-full rounded-xl border border-zinc-200 bg-white px-3 py-2 text-sm outline-none ring-emerald-500/0 transition focus:ring-2 dark:border-white/15 dark:bg-zinc-950"
              />
            </div>
            <div className="sm:col-span-2">
              <label className="mb-1 block text-sm text-zinc-700 dark:text-zinc-300">Message</label>
              <textarea
                rows={5}
                placeholder="Tell me about your project..."
                className="w-full resize-none rounded-xl border border-zinc-200 bg-white px-3 py-2 text-sm outline-none ring-emerald-500/0 transition focus:ring-2 dark:border-white/15 dark:bg-zinc-950"
              />
            </div>
            <div className="sm:col-span-2">
              <button
                type="submit"
                className="inline-flex h-11 w-full items-center justify-center rounded-xl bg-zinc-900 px-5 text-sm font-medium text-white transition hover:bg-zinc-800 dark:bg-zinc-100 dark:text-black dark:hover:bg-zinc-200"
              >
                Send Message
              </button>
            </div>
          </div>
          <div className="mt-6 text-center text-sm text-zinc-600 dark:text-zinc-400">
            or email me at{" "}
            <a href="mailto:hello@m0hdi1.dev" className="font-medium underline underline-offset-4">
              hello@m0hdi1.dev
            </a>
          </div>
        </form>
      </section>
    </div>
  );
}

