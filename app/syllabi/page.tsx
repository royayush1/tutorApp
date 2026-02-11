import Link from "next/link";
import Image from "next/image";

import { syllabi } from "@/lib/syllabi";

const toneStyles = {
  sky: {
    badge: "bg-sky/15 text-sky-deep",
    border: "border-sky/30"
  },
  berry: {
    badge: "bg-berry/15 text-ink",
    border: "border-berry/30"
  },
  lavender: {
    badge: "bg-lavender/20 text-ink",
    border: "border-lavender/30"
  }
};

export default function SyllabiPage() {
  return (
    <div className="">
      <Image
        src="/images/anime1.png"
        alt=""
        width={625}
        height={1000}
        className="-z-10 absolute bottom-0 left-0"
      />
      <div className="space-y-3">
        <Link
          href="/"
          className="text-sm font-semibold text-ink-muted transition hover:text-ink"
        >
          Back to home
        </Link>
        <h1 className="text-3xl font-extrabold text-ink md:text-4xl mt-2">
          Choose your syllabus
        </h1>
        <p className="max-w-2xl text-base text-ink-muted mb-5">
          Start with the curriculum that fits the learner best. Everything is
          clean, organized, and easy to follow.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {syllabi.map((syllabus) => (
          <Link
            key={syllabus.key}
            href={`/syllabi/${syllabus.key}`}
            className={`group flex h-full flex-col rounded-3xl border bg-white/90 p-6 shadow-card transition hover:-translate-y-1 ${toneStyles[syllabus.tone].border}`}
          >
            <span
              className={`inline-flex w-fit items-center rounded-full px-3 py-1 text-xs font-semibold ${toneStyles[syllabus.tone].badge}`}
            >
              {syllabus.label}
            </span>
            <h2 className="mt-4 text-xl font-bold text-ink">
              {syllabus.label} Track
            </h2>
            <p className="mt-2 text-sm text-ink-muted">
              {syllabus.description}
            </p>
            <div className="mt-6 text-sm font-semibold text-ink">
              Explore subjects
            </div>
          </Link>
        ))}
      </div>
    </div>

  );
}
