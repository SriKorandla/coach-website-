import type { Metadata } from "next";
import ApplyForm from "@/components/ApplyForm";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Contact",
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
      <p className="text-[0.72rem] uppercase tracking-[0.22em] text-copper">
        Contact
      </p>
      <h1 className="mt-3 max-w-3xl font-display text-5xl font-semibold uppercase leading-[0.95] tracking-[0.04em] sm:text-7xl">
        Get in touch.
      </h1>
      <p className="mt-8 max-w-2xl text-lg leading-8 text-sand/85">
        Email is the fastest way to reach me. Tell me who you are, what you
        train for, and what you want the next block to change.
      </p>

      <a
        href={`mailto:${site.email}`}
        className="mt-12 block border border-line bg-raised px-6 py-10 transition hover:border-copper sm:px-10"
      >
        <p className="text-[0.68rem] uppercase tracking-[0.2em] text-copper">
          Email
        </p>
        <p className="mt-4 font-display text-3xl uppercase tracking-[0.04em] text-ink sm:text-5xl">
          {site.email}
        </p>
        <p className="mt-4 text-sm text-muted">Click to open a new message.</p>
      </a>

      <div className="mt-20 grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <div>
          <h2 className="font-display text-3xl uppercase tracking-[0.08em]">
            Or send a note here
          </h2>
          <p className="mt-4 text-sm leading-7 text-muted">
            Fill this out and it will draft an email to {site.email}. Send it
            from your mail app and I will follow up if it looks like a fit.
          </p>
        </div>
        <ApplyForm />
      </div>
    </div>
  );
}
