import type { Metadata } from "next";
import Link from "next/link";
import { catalogFeatured, catalogRest } from "@/content/catalog";

export const metadata: Metadata = {
  title: "Programs",
};

export default function ProgramsPage() {
  return (
    <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
      <p className="text-[0.72rem] uppercase tracking-[0.22em] text-copper">
        Programs
      </p>
      <h1 className="mt-3 max-w-3xl font-display text-5xl font-semibold uppercase leading-[0.95] tracking-[0.04em] sm:text-7xl">
        Program catalog
      </h1>
      <p className="mt-8 max-w-2xl text-lg leading-8 text-sand/85">
        Written blocks you can buy and run, plus the live follow-along — the
        same program I am training. Listings are mock for now and can be
        swapped for the real ones.
      </p>

      {catalogFeatured && (
        <article className="mt-14 border border-copper/60 bg-raised p-7 sm:p-10">
          <div className="flex flex-wrap items-center gap-3">
            <p className="text-[0.68rem] uppercase tracking-[0.2em] text-copper">
              {catalogFeatured.badge}
            </p>
            <p className="text-[0.68rem] uppercase tracking-[0.18em] text-muted">
              {catalogFeatured.category}
            </p>
          </div>
          <div className="mt-4 grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
            <div>
              <h2 className="font-display text-4xl uppercase tracking-[0.06em] sm:text-5xl">
                {catalogFeatured.title}
              </h2>
              <p className="mt-4 max-w-xl text-sm leading-7 text-muted">
                {catalogFeatured.summary}
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between lg:flex-col lg:items-start">
              <p className="font-display text-3xl uppercase tracking-[0.08em] text-sand">
                {catalogFeatured.price}
              </p>
              <p className="text-sm text-muted">
                {catalogFeatured.duration} · {catalogFeatured.daysPerWeek}
              </p>
              <Link
                href={`/programs/${catalogFeatured.slug}`}
                className="inline-flex bg-copper px-5 py-3 font-display text-sm font-semibold uppercase tracking-[0.16em] text-bg hover:bg-copper-dim"
              >
                View follow-along
              </Link>
            </div>
          </div>
        </article>
      )}

      <div className="mt-16 flex items-end justify-between gap-4">
        <h2 className="font-display text-3xl uppercase tracking-[0.08em]">
          Buy a program
        </h2>
        <p className="text-[0.68rem] uppercase tracking-[0.16em] text-muted">
          {catalogRest.length} listings
        </p>
      </div>

      <div className="mt-8 grid gap-px bg-line sm:grid-cols-2">
        {catalogRest.map((program) => (
          <article key={program.slug} className="flex flex-col bg-bg p-7">
            <div className="flex items-start justify-between gap-3">
              <p className="text-[0.68rem] uppercase tracking-[0.18em] text-copper">
                {program.category}
              </p>
              <p className="text-[0.68rem] uppercase tracking-[0.16em] text-muted">
                {program.price}
              </p>
            </div>
            <h3 className="mt-4 font-display text-2xl uppercase tracking-[0.08em]">
              {program.title}
            </h3>
            <p className="mt-3 flex-1 text-sm leading-7 text-muted">
              {program.summary}
            </p>
            <p className="mt-5 text-xs uppercase tracking-[0.14em] text-sand/70">
              {program.duration} · {program.daysPerWeek} · {program.level}
            </p>
            <Link
              href={`/programs/${program.slug}`}
              className="mt-6 text-[0.72rem] uppercase tracking-[0.16em] text-copper hover:text-sand"
            >
              View program →
            </Link>
          </article>
        ))}
      </div>
    </div>
  );
}
