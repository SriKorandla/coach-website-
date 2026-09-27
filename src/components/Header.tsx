"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { nav, site } from "@/content/site";

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [navReady, setNavReady] = useState(false);

  useEffect(() => {
    setNavReady(true);
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-line/80 bg-bg/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:h-[4.25rem] sm:px-8">
        <Link
          href="/"
          className="flex items-baseline gap-2 tracking-tight"
          onClick={() => setOpen(false)}
        >
          <span className="font-display text-[1.35rem] font-semibold uppercase leading-none tracking-[0.14em] text-ink">
            {site.shortName}
          </span>
          <span className="hidden text-[0.7rem] uppercase tracking-[0.22em] text-muted sm:inline">
            {site.tagline}
          </span>
        </Link>

        <nav className="hidden items-center gap-5 lg:gap-8 md:flex">
          {nav.map((item) => {
            const active =
              navReady &&
              (item.href === "/"
                ? pathname === "/"
                : Boolean(pathname?.startsWith(item.href)));
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`text-[0.72rem] uppercase tracking-[0.18em] transition-colors ${
                  active ? "text-copper" : "text-sand/80 hover:text-ink"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center text-ink md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">Menu</span>
          <span className="flex w-5 flex-col gap-1.5">
            <span
              className={`block h-px bg-ink transition ${open ? "translate-y-[3.5px] rotate-45" : ""}`}
            />
            <span
              className={`block h-px bg-ink transition ${open ? "-translate-y-[3.5px] -rotate-45" : ""}`}
            />
          </span>
        </button>
      </div>

      {open && (
        <nav className="border-t border-line bg-bg px-5 py-4 md:hidden">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="block py-3 font-display text-xl uppercase tracking-[0.12em] text-ink"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
