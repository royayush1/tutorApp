import Link from "next/link";
import { notFound } from "next/navigation";

import { getSyllabus } from "@/lib/syllabi";

export default function SubjectsPage({
  params
}: {
  params: { syllabus: string };
}) {
  const syllabus = getSyllabus(params.syllabus);

  if (!syllabus) {
    notFound();
  }

  return (
    <div className="space-y-10">
      <div className="space-y-3">
        <Link
          href="/syllabi"
          className="text-sm font-semibold text-ink-muted transition hover:text-ink"
        >
          Back to syllabi
        </Link>
        <h1 className="text-3xl font-extrabold text-ink md:text-4xl">
          {syllabus.label} subjects
        </h1>
        <p className="max-w-2xl text-base text-ink-muted">
          {syllabus.description} Pick a subject to see the chapter index.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {syllabus.subjects.map((subject) => (
          <Link
            key={subject.key}
            href={`/syllabi/${syllabus.key}/subjects/${subject.key}`}
            className="group flex h-full flex-col rounded-3xl border border-line bg-white/90 p-6 shadow-card transition hover:-translate-y-1"
          >
            <div className="text-xs font-semibold uppercase tracking-wide text-ink-muted">
              Subject
            </div>
            <h2 className="mt-4 text-2xl font-bold text-ink">
              {subject.label}
            </h2>
            <p className="mt-2 text-sm text-ink-muted">
              {subject.description}
            </p>
            <div className="mt-6 text-sm font-semibold text-ink">
              View chapters
            </div>
          </Link>
        ))}
      </div>

      <div className="rounded-3xl border border-line bg-white/70 p-5 text-sm text-ink-muted">
        More subjects will be added soon to keep learning fresh and exciting.
      </div>
    </div>
  );
}
