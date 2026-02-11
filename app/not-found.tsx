import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto max-w-2xl space-y-6 rounded-3xl border border-line bg-white/90 p-10 text-center shadow-card">
      <h1 className="text-3xl font-extrabold text-ink">
        We could not find that page
      </h1>
      <p className="text-base text-ink-muted">
        Try going back to the syllabus list and choose a different path.
      </p>
      <Link
        href="/syllabi"
        className="inline-flex items-center justify-center rounded-full bg-sky px-6 py-3 text-sm font-semibold text-white shadow-card transition hover:-translate-y-0.5 hover:bg-sky-deep"
      >
        Back to syllabi
      </Link>
    </div>
  );
}
