import Image from "next/image";
import Link from "next/link";
import {
  audiences,
  faqs,
  hero,
  method,
  philosophy,
  programs,
  site,
  stats,
} from "@/content/site";

export default function HomePage() {
  return (
    <>
      <section className="relative isolate min-h-[88vh] overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=2400&q=80"
          alt="Athlete training with a barbell in a weight room"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-bg via-bg/85 to-bg/35" />
        <div className="absolute inset-0 bg-gradient-to-t from-bg via-transparent to-bg/40" />
        <div className="relative mx-auto flex min-h-[88vh] max-w-6xl flex-col justify-end px-5 pb-16 pt-28 sm:px-8 sm:pb-20">
          <p className="text-[0.72rem] uppercase tracking-[0.28em] text-copper">
            {hero.eyebrow}
          </p>
          <h1 className="mt-4 max-w-3xl font-display text-5xl font-semibold uppercase leading-[0.92] tracking-[0.04em] text-ink sm:text-7xl lg:text-8xl">
            {hero.title}
          </h1>
          <p className="mt-6 max-w-xl text-base leading-7 text-sand/85 sm:text-lg">
            {hero.lede}
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <Link
              href={hero.primaryCta.href}
              className="bg-copper px-6 py-3 font-display text-sm font-semibold uppercase tracking-[0.16em] text-bg transition hover:bg-copper-dim"
            >
              {hero.primaryCta.label}
            </Link>
            <Link
              href={hero.secondaryCta.href}
              className="border border-line px-6 py-3 font-display text-sm font-semibold uppercase tracking-[0.16em] text-ink transition hover:border-sand/50"
            >
              {hero.secondaryCta.label}
            </Link>
          </div>
        </div>
      </section>

      <section className="border-y border-line bg-surface">
        <div className="mx-auto grid max-w-6xl divide-y divide-line sm:grid-cols-3 sm:divide-x sm:divide-y-0">
          {stats.map((item) => (
            <div key={item.label} className="px-5 py-8 sm:px-8">
              <p className="font-display text-4xl font-semibold uppercase tracking-[0.08em] text-copper">
                {item.value}
              </p>
              <p className="mt-2 text-sm text-muted">{item.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
        <div className="max-w-2xl">
          <p className="text-[0.72rem] uppercase tracking-[0.22em] text-copper">
            Who it is for
          </p>
          <h2 className="mt-3 font-display text-4xl font-semibold uppercase tracking-[0.06em] sm:text-5xl">
            Built for people who compete — including with themselves.
          </h2>
        </div>
        <div className="mt-12 grid gap-px bg-line md:grid-cols-3">
          {audiences.map((item) => (
            <article key={item.title} className="bg-bg p-7 sm:p-8">
              <h3 className="font-display text-2xl uppercase tracking-[0.08em] text-ink">
                {item.title}
              </h3>
              <p className="mt-4 text-sm leading-7 text-muted">{item.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="border-y border-line bg-surface">
        <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
          <p className="text-[0.72rem] uppercase tracking-[0.22em] text-copper">
            How it works
          </p>
          <h2 className="mt-3 max-w-xl font-display text-4xl font-semibold uppercase tracking-[0.06em] sm:text-5xl">
            Assess. Program. Adjust.
          </h2>
          <ol className="mt-14 grid gap-10 md:grid-cols-3">
            {method.map((item) => (
              <li key={item.step}>
                <p className="font-display text-sm tracking-[0.2em] text-copper">
                  {item.step}
                </p>
                <h3 className="mt-3 font-display text-3xl uppercase tracking-[0.08em]">
                  {item.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-muted">{item.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-[0.72rem] uppercase tracking-[0.22em] text-copper">
              Programs
            </p>
            <h2 className="mt-3 font-display text-4xl font-semibold uppercase tracking-[0.06em] sm:text-5xl">
              Ways to train
            </h2>
          </div>
          <Link
            href="/programs"
            className="text-[0.72rem] uppercase tracking-[0.18em] text-sand hover:text-copper"
          >
            Browse the catalog →
          </Link>
        </div>
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {programs.map((program) => (
            <article
              key={program.slug}
              className="flex flex-col border border-line bg-raised p-7"
            >
              <p className="text-[0.68rem] uppercase tracking-[0.18em] text-muted">
                {program.format}
              </p>
              <h3 className="mt-3 font-display text-2xl uppercase tracking-[0.08em]">
                {program.title}
              </h3>
              <p className="mt-4 flex-1 text-sm leading-7 text-muted">
                {program.summary}
              </p>
              <Link
                href={program.href}
                className="mt-8 text-[0.72rem] uppercase tracking-[0.16em] text-copper hover:text-sand"
              >
                {program.cta}
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className="border-y border-line">
        <div className="mx-auto grid max-w-6xl md:grid-cols-2">
          <div className="relative min-h-[320px]">
            <Image
              src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=1600&q=80"
              alt="Loaded barbell on a gym floor"
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
          <div className="flex flex-col justify-center bg-surface px-5 py-16 sm:px-12">
            <p className="font-serif text-2xl leading-9 text-sand italic sm:text-3xl sm:leading-10">
              “{philosophy.quote}”
            </p>
            <p className="mt-8 text-[0.7rem] uppercase tracking-[0.2em] text-muted">
              {site.name} coaching standard
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
        <h2 className="font-display text-4xl font-semibold uppercase tracking-[0.06em] sm:text-5xl">
          Common questions
        </h2>
        <div className="mt-10 divide-y divide-line border-y border-line">
          {faqs.map((item) => (
            <div key={item.q} className="grid gap-3 py-7 md:grid-cols-[0.9fr_1.4fr]">
              <h3 className="font-display text-xl uppercase tracking-[0.08em]">
                {item.q}
              </h3>
              <p className="text-sm leading-7 text-muted">{item.a}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-t border-line bg-surface">
        <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
          <h2 className="max-w-2xl font-display text-4xl font-semibold uppercase tracking-[0.06em] sm:text-6xl">
            Ready to stop guessing in the weight room?
          </h2>
          <p className="mt-5 max-w-lg text-sm leading-7 text-muted">
            Tell me who you are, what you train for, and what the next 12 weeks
            should change. If it is a fit, we start with a plan — not a sales
            script.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-flex bg-copper px-6 py-3 font-display text-sm font-semibold uppercase tracking-[0.16em] text-bg hover:bg-copper-dim"
          >
            Apply for coaching
          </Link>
        </div>
      </section>
    </>
  );
}
