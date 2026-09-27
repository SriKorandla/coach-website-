import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { about, philosophy } from "@/content/site";

export const metadata: Metadata = {
  title: "About",
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
      <p className="text-[0.72rem] uppercase tracking-[0.22em] text-copper">
        About
      </p>
      <h1 className="mt-3 max-w-3xl font-display text-5xl font-semibold uppercase leading-[0.95] tracking-[0.04em] sm:text-7xl">
        {about.headline}
      </h1>
      <p className="mt-8 max-w-2xl text-lg leading-8 text-sand/85">
        {about.intro}
      </p>

      <div className="mt-16 grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
        <div className="space-y-6 text-sm leading-7 text-muted">
          {about.story.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
          <p>
            Swap this copy with your real bio: where you coached, certifications,
            sports you have worked with, and why someone should trust you with
            their next season.
          </p>
        </div>
        <div className="relative min-h-[380px] overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&w=1400&q=80"
            alt="Coach working with an athlete"
            fill
            sizes="(min-width: 1024px) 45vw, 100vw"
            className="object-cover"
          />
        </div>
      </div>

      <section className="mt-24 grid gap-8 border-t border-line pt-14 md:grid-cols-3">
        {philosophy.points.map((point) => (
          <article key={point.title}>
            <h2 className="font-display text-2xl uppercase tracking-[0.08em]">
              {point.title}
            </h2>
            <p className="mt-4 text-sm leading-7 text-muted">{point.body}</p>
          </article>
        ))}
      </section>

      <section className="mt-20 border border-line bg-raised p-8 sm:p-10">
        <h2 className="font-display text-3xl uppercase tracking-[0.08em]">
          How I coach
        </h2>
        <ul className="mt-6 grid gap-3 sm:grid-cols-2">
          {about.principles.map((item) => (
            <li
              key={item}
              className="border-l-2 border-copper pl-4 text-sm leading-6 text-sand/85"
            >
              {item}
            </li>
          ))}
        </ul>
        <Link
          href="/contact"
          className="mt-10 inline-flex bg-copper px-6 py-3 font-display text-sm font-semibold uppercase tracking-[0.16em] text-bg hover:bg-copper-dim"
        >
          Work together
        </Link>
      </section>
    </div>
  );
}
