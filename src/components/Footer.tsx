import Link from "next/link";
import { nav, site } from "@/content/site";

export default function Footer() {
  return (
    <footer className="border-t border-line bg-surface">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 sm:px-8 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <p className="font-display text-3xl font-semibold uppercase tracking-[0.12em] text-ink">
            {site.name}
          </p>
          <p className="mt-3 max-w-sm text-sm leading-6 text-muted">
            {site.description}
          </p>
        </div>
        <div>
          <p className="text-[0.68rem] uppercase tracking-[0.2em] text-copper">
            Pages
          </p>
          <ul className="mt-4 space-y-2">
            {nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-sm text-sand/80 transition-colors hover:text-ink"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-[0.68rem] uppercase tracking-[0.2em] text-copper">
            Contact
          </p>
          <p className="mt-4 text-sm text-sand/80">{site.location}</p>
          <a
            href={`mailto:${site.email}`}
            className="mt-2 block text-sm text-sand/80 hover:text-ink"
          >
            {site.email}
          </a>
          <a
            href={site.instagram}
            className="mt-2 block text-sm text-sand/80 hover:text-ink"
          >
            Instagram
          </a>
        </div>
      </div>
      <div className="border-t border-line">
        <p className="mx-auto max-w-6xl px-5 py-5 text-[0.7rem] uppercase tracking-[0.16em] text-muted sm:px-8">
          © {new Date().getFullYear()} {site.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
