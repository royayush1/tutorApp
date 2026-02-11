import Link from "next/link";
import { notFound } from "next/navigation";

import { getSubject, getSyllabus } from "@/lib/syllabi";

const toneStyles = {
  sky: {
    badge: "bg-sky/15 text-sky-deep",
    dot: "bg-sky"
  },
  berry: {
    badge: "bg-berry/15 text-ink",
    dot: "bg-berry"
  },
  lavender: {
    badge: "bg-lavender/20 text-ink",
    dot: "bg-lavender"
  }
};

export default function ChapterIndexPage({
  params
}: {
  params: { syllabus: string; subject: string };
}) {
  const syllabus = getSyllabus(params.syllabus);

  if (!syllabus) {
    notFound();
  }

  const subject = getSubject(syllabus, params.subject);

  if (!subject) {
    notFound();
  }

  return (
    <div className="space-y-10">
      <div className="space-y-3">
        <Link
          href={`/syllabi/${syllabus.key}`}
          className="text-sm font-semibold text-ink-muted transition hover:text-ink"
        >
          <- Back to subjects
        </Link>
        <div className="flex flex-wrap items-center gap-3">
          <span
            className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold ${toneStyles[syllabus.tone].badge}`}
          >
            {syllabus.label}
          </span>
          <span className="text-xs font-semibold uppercase tracking-wide text-ink-muted">
            Chapter index
          </span>
        </div>
        <h1 className="text-3xl font-extrabold text-ink md:text-4xl">
          {subject.label}
        </h1>
        <p className="max-w-2xl text-base text-ink-muted">
          A clean, organized list of chapters for this syllabus.
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        {subject.sections.map((section) => (
          <div
            key={section.title}
            className="rounded-3xl border border-line bg-white/90 p-6 shadow-card"
          >
            <h2 className="text-lg font-bold text-ink">{section.title}</h2>
            <ul className="mt-4 space-y-3 text-sm text-ink-muted">
              {section.items.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span
                    className={`mt-2 h-2 w-2 rounded-full ${toneStyles[syllabus.tone].dot}`}
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
