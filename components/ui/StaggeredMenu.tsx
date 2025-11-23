"use client";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/projects", label: "Projects" },
  { href: "/blogs", label: "Blogs" },
  { href: "/contact", label: "Contact" },
] as const;

export default function StaggeredMenu() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <button
        aria-label="Open menu"
        onClick={() => setOpen((s) => !s)}
        className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-transparent text-zinc-900 transition dark:text-white md:hidden"
      >
        {open ? <X className="h-6 w-6 transition-transform duration-200" /> : <Menu className="h-6 w-6 transition-transform duration-200" />}
        <span className="sr-only">Menu</span>
      </button>
      {open ? (
        <div className="fixed inset-0 z-50 md:hidden">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={() => setOpen(false)}
          />
          {/* Side drawer */}
          <aside
            className="menu-font absolute left-0 top-0 h-full w-72 translate-x-0 overflow-auto border-r border-zinc-200/70 bg-white p-6 shadow-2xl transition-transform duration-300 dark:border-white/10 dark:bg-zinc-900"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative mb-4 flex items-center justify-center pr-12">
              <div className="flex items-center gap-3">
                <Image src="/favicon.png" alt="M0hdi1 logo" width={36} height={36} className="rounded" />
                <span className="text-2xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100">M0hdi1</span>
              </div>
              <button
                aria-label="Close menu"
                onClick={() => setOpen(false)}
                className="absolute right-0 top-1 inline-flex h-9 w-9 items-center justify-center rounded-lg bg-transparent text-zinc-700 dark:text-zinc-200"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <div className="mb-4 border-b border-zinc-200/70 dark:border-white/10" />
            <nav>
              <ul className="flex flex-col gap-2">
                {links.map((l, idx) => (
                  <li
                    key={l.href}
                    className="stagger-item"
                    style={{ ["--i" as any]: idx } as React.CSSProperties}
                  >
                    <Link
                      href={l.href}
                      onClick={() => setOpen(false)}
                      className="block rounded-xl px-4 py-3 text-zinc-800 transition hover:bg-zinc-100 dark:text-zinc-100 dark:hover:bg-white/10"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </aside>
        </div>
      ) : null}
    </>
  );
}


