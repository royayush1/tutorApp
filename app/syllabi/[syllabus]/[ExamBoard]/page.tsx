import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";

import { getExamBoard, getSyllabus } from "@/lib/syllabi";

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

export default async function SubjectsPage({params}: {params: Promise<{ syllabus: string, ExamBoard: string }>}) {
  const data = await params;
  console.log(data);

  const syllabus = getSyllabus(data.syllabus)
  const currentBoard = getExamBoard(data.ExamBoard);

  console.log(currentBoard);

 

  if ((!syllabus) || (!currentBoard)) {
    notFound();
  }

  return (
    <div className="space-y-10">
      <Image
            src="/images/edexcel.png"
            alt=""
            width={600}
            height={600}
            className="absolute inset-y-0 right-0"
        />
      <div className="space-y-3">
        <Link
          href={`/syllabi/${syllabus.key}`}
          className="text-sm font-semibold text-ink-muted transition hover:text-ink"
        >
          Back to syllabi
        </Link>
        <h1 className="text-3xl font-extrabold text-ink md:text-4xl">
          {currentBoard.label} subjects
        </h1>
        <p className="max-w-2xl font-semibold text-ink-muted">
          {currentBoard.description} Pick a subject to see the chapter index.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {currentBoard.subjects.map((subject) => (
          <Link
            key={subject.key}
            href={`/syllabi/${syllabus.key}/${currentBoard.key}/subjects/${subject.key}`}
            className={`group flex h-full flex-col rounded-3xl border bg-white/90 p-6 shadow-card transition hover:-translate-y-1 ${toneStyles[subject.tone].border}`}
          >
            <div className={`text-xs w-fit font-semibold uppercase tracking-wide text-ink-muted ${toneStyles[subject.tone].badge}`}>
              {currentBoard.key}
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
