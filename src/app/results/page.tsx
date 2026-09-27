import type { Metadata } from "next";
import Link from "next/link";
import { results } from "@/content/site";

export const metadata: Metadata = {
  title: "Results",
};

export default function ResultsPage() {
  return (
    <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
      <p className="text-[0.72rem] uppercase tracking-[0.22em] text-copper">
        Results
      </p>
      <h1 className="mt-3 max-w-3xl font-display text-5xl font-semibold uppercase leading-[0.95] tracking-[0.04em] sm:text-7xl">
        {results.headline}
      </h1>
      <p className="mt-8 max-w-2xl text-lg leading-8 text-sand/85">
        {results.lede}
      </p>

      <div className="mt-16 grid gap-6 lg:grid-cols-3">
        {results.cases.map((item) => (
          <article key={item.name} className="border border-line bg-raised p-7">
            <p className="text-[0.68rem] uppercase tracking-[0.18em] text-copper">
              {item.timeframe}
            </p>
            <h2 className="mt-3 font-display text-2xl uppercase tracking-[0.08em]">
              {item.name}
            </h2>
            <p className="mt-4 text-sm font-medium leading-6 text-ink">
              {item.outcome}
            </p>
            <p className="mt-4 text-sm leading-7 text-muted">{item.note}</p>
          </article>
        ))}
      </div>

      <section className="mt-24">
        <h2 className="font-display text-4xl uppercase tracking-[0.06em]">
          From athletes
        </h2>
        <div className="mt-10 grid gap-px bg-line md:grid-cols-3">
          {results.testimonials.map((item) => (
            <blockquote key={item.person} className="bg-bg p-8">
              <p className="font-serif text-xl leading-8 text-sand italic">
                “{item.quote}”
              </p>
              <footer className="mt-6 text-[0.7rem] uppercase tracking-[0.16em] text-muted">
                {item.person}
              </footer>
            </blockquote>
          ))}
        </div>
      </section>

      <div className="mt-20">
        <Link
          href="/contact"
          className="inline-flex bg-copper px-6 py-3 font-display text-sm font-semibold uppercase tracking-[0.16em] text-bg hover:bg-copper-dim"
        >
          Start your next block
        </Link>
      </div>
    </div>
  );
}
