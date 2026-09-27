import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { catalog, getCatalogProgram } from "@/content/catalog";

type ProgramPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return catalog.map((program) => ({ slug: program.slug }));
}

export async function generateMetadata({
  params,
}: ProgramPageProps): Promise<Metadata> {
  const { slug } = await params;
  const program = getCatalogProgram(slug);
  if (!program) return { title: "Program" };
  return {
    title: program.title,
    description: program.summary,
  };
}

export default async function CatalogProgramPage({ params }: ProgramPageProps) {
  const { slug } = await params;
  const program = getCatalogProgram(slug);
  if (!program) notFound();

  const specs = [
    { label: "Duration", value: program.duration },
    { label: "Frequency", value: program.daysPerWeek },
    { label: "Equipment", value: program.equipment },
    { label: "Level", value: program.level },
  ];

  return (
    <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
      <Link
        href="/programs"
        className="text-[0.72rem] uppercase tracking-[0.18em] text-muted hover:text-copper"
      >
        ← Catalog
      </Link>
      <div className="mt-8 flex flex-wrap items-center gap-3">
        {program.badge && (
          <p className="text-[0.68rem] uppercase tracking-[0.2em] text-copper">
            {program.badge}
          </p>
        )}
        <p className="text-[0.68rem] uppercase tracking-[0.18em] text-muted">
          {program.category}
        </p>
      </div>
      <h1 className="mt-3 max-w-3xl font-display text-5xl font-semibold uppercase leading-[0.95] tracking-[0.04em] sm:text-6xl">
        {program.title}
      </h1>
      <p className="mt-6 max-w-2xl text-lg leading-8 text-sand/85">
        {program.summary}
      </p>
      <p className="mt-4 font-display text-3xl uppercase tracking-[0.08em] text-copper">
        {program.price}
      </p>

      <dl className="mt-12 grid gap-px bg-line sm:grid-cols-2 lg:grid-cols-4">
        {specs.map((spec) => (
          <div key={spec.label} className="bg-bg px-5 py-5">
            <dt className="text-[0.65rem] uppercase tracking-[0.18em] text-muted">
              {spec.label}
            </dt>
            <dd className="mt-2 text-sm text-sand">{spec.value}</dd>
          </div>
        ))}
      </dl>

      <div className="mt-16 grid gap-12 lg:grid-cols-[1.2fr_0.8fr]">
        <div>
          <h2 className="font-display text-2xl uppercase tracking-[0.08em]">
            Overview
          </h2>
          <p className="mt-4 text-sm leading-7 text-muted">{program.overview}</p>
          <h2 className="mt-10 font-display text-2xl uppercase tracking-[0.08em]">
            Best for
          </h2>
          <p className="mt-4 text-sm leading-7 text-muted">{program.bestFor}</p>
        </div>
        <div className="border border-line bg-raised p-7">
          <p className="text-[0.68rem] uppercase tracking-[0.2em] text-copper">
            Includes
          </p>
          <ul className="mt-5 space-y-3">
            {program.includes.map((item) => (
              <li key={item} className="text-sm leading-6 text-sand/85">
                {item}
              </li>
            ))}
          </ul>
          <Link
            href="/contact"
            className="mt-8 inline-flex bg-copper px-5 py-3 font-display text-sm font-semibold uppercase tracking-[0.16em] text-bg hover:bg-copper-dim"
          >
            {program.featured ? "Join this block" : "Ask about this program"}
          </Link>
        </div>
      </div>
    </div>
  );
}
