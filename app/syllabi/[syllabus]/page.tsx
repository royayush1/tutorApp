import Link from 'next/link';
import Image from 'next/image';
import { notFound } from "next/navigation";
import { getSyllabus } from "@/lib/syllabi";

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

export default async function ExamBoardsPage({params} : {params: Promise<{syllabus: string}>}) {
    const {syllabus} = await params;
    const data =  getSyllabus(syllabus);
    if (!syllabus) notFound();

    return(
        <div>
        <Image
            src="/images/anime2.png"
            alt=""
            width={575}
            height={1000}
            className="-z-10 absolute bottom-0 left-0"
        />
        <Image
            src="/images/anime4.png"
            alt=""
            width={575}
            height={1000}
            className="-z-10 absolute bottom-0 right-0"
        />

      <div className="space-y-3">
        <Link
          href="/"
          className="text-sm font-semibold text-ink-muted transition hover:text-ink"
        >
          Back to home
        </Link>
        <h1 className="text-3xl font-extrabold text-ink md:text-4xl mt-2">
          Choose your {data?.label} Exam Board
        </h1>
        <p className="max-w-2xl text-base text-ink-muted mb-5">
          Start with the exam board that fits the learner best
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {data?.examBoards.map((board) => (
          <Link
            key={board.key}
            href={`/syllabi/${data?.key}/${board.key}`}
            className={`group flex h-full flex-col rounded-3xl border bg-white/90 p-6 shadow-card transition hover:-translate-y-1 ${toneStyles[board.tone].border}`}
          >
            <span
              className={`inline-flex w-fit items-center rounded-full px-3 py-1 text-xs font-semibold ${toneStyles[board.tone].badge}`}
            >
              {board.label}
            </span>
            <h2 className="mt-4 text-xl font-bold text-ink">
              {board.label} Track
            </h2>
            <p className="mt-2 text-sm text-ink-muted">
              {board.description}
            </p>
            <div className="mt-6 text-sm font-semibold text-ink">
              Explore subjects
            </div>
          </Link>
        ))}
      </div>
    </div>

    )
}