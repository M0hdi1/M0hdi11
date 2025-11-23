"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Info, FolderOpen, Boxes, FileText, Mail } from "lucide-react";

const navItems = [
  { href: "/", label: "Home", iconSrc: "/favicon.png" },
  { href: "/about", label: "About", Icon: Info },
  { href: "/portfolio", label: "Portfolio", Icon: FolderOpen },
  { href: "/projects", label: "Projects", Icon: Boxes },
  { href: "/blogs", label: "Blogs", Icon: FileText },
  { href: "/contact", label: "Contact", Icon: Mail },
] as const;

export default function DockNav() {
  const pathname = usePathname();
  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-4 z-50 hidden justify-center md:flex">
      <div className="pointer-events-auto inline-flex items-center gap-2 rounded-2xl border border-zinc-200/70 bg-white/80 px-3 py-2 shadow-lg backdrop-blur dark:border-white/10 dark:bg-zinc-900/70">
        {navItems.map((item) => {
          const active = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`group flex h-11 w-11 items-center justify-center rounded-xl transition-transform duration-200 ${
                active
                  ? "bg-zinc-100 dark:bg-white/10"
                  : "hover:bg-zinc-100 dark:hover:bg-white/10"
              }`}
              title={item.label}
            >
              {"Icon" in item && item.Icon ? (
                <item.Icon
                  className={`h-5 w-5 transition-transform duration-200 group-hover:scale-110 ${
                    active
                      ? "text-zinc-900 dark:text-white"
                      : "text-zinc-700 group-hover:text-zinc-900 dark:text-zinc-300 dark:group-hover:text-white"
                  }`}
                />
              ) : (
                <Image
                  src={item.iconSrc as string}
                  alt=""
                  width={18}
                  height={18}
                  className="rounded-sm transition-transform duration-200 group-hover:scale-110"
                />
              )}
            </Link>
          );
        })}
      </div>
    </div>
  );
}

