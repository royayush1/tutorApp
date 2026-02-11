import Link from "next/link";
import Image from "next/image";

const highlights = [
  {
    title: "Calm focus",
    text: "Gentle pacing with no clutter or overload.",
    tone: "bg-sky/15 text-sky-deep"
  },
  {
    title: "Bright guidance",
    text: "Happy colors that keep energy light and steady.",
    tone: "bg-berry/15 text-ink"
  },
  {
    title: "Clear steps",
    text: "Pick a syllabus, a subject, then a chapter.",
    tone: "bg-mint/15 text-ink"
  }
];

const steps = [
  {
    title: "Choose a syllabus",
    text: "GCSE, A Level, or AS Level."
  },
  {
    title: "Pick a subject",
    text: "Start with any subject and we will help you get started."
  },
  {
    title: "Open a chapter",
    text: "A clean index keeps learners organized."
  }
];

export default function Home() {
  return (
    <div className="space-y-16">
      <section className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
        <Image
          src="/images/bg1.png"
          alt=""
          fill
          className="-z-10 object-cover"
        />
        <div className="space-y-6">
          <div className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-semibold uppercase tracking-wide text-ink-muted shadow-card">
            Joyful learning, organized steps
          </div>
          <h1 className="text-4xl font-extrabold leading-tight text-ink md:text-5xl">
            A bright, focused tutor space for every learner.
          </h1>
          <p className="max-w-xl text-lg text-ink-muted">
            Built for kids who learn differently and for anyone who wants clear,
            clean guidance. Bright colors, smooth transitions, and calm structure
            keep motivation high and attention steady.
          </p>
        </div>
        <div className="relative">
          <div className="rounded-3xl border border-line bg-white/90 p-8 shadow-card">
            <div className="space-y-6">
              <div className="rounded-2xl bg-hero-glow p-6">
                <div className="text-sm font-semibold text-ink-muted">
                  Today&apos;s focus
                </div>
                <div className="mt-3 text-2xl font-bold text-ink">
                  Choose a chapter and learn in calm, colorful steps.
                </div>
              </div>
              <div className="grid gap-4">
                {highlights.map((item) => (
                  <div
                    key={item.title}
                    className="flex items-start gap-4 rounded-2xl border border-line bg-white p-4"
                  >
                    <div
                      className={`flex h-10 w-10 items-center justify-center rounded-2xl ${item.tone}`}
                    >
                      <span className="h-2.5 w-2.5 rounded-full bg-current" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-ink">
                        {item.title}
                      </div>
                      <div className="text-sm text-ink-muted">
                        {item.text}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className=" flex justify-center">
            <Link
            href="/syllabi"
            className="inline-flex items-center justify-center rounded-full bg-berry mt-5 px-5 py-3 text-sm font-semibold text-white shadow-card transition hover:-translate-y-0.5 hover:brightness-105"
          >
            Start now
          </Link>
          </div>

          </div> 
        </div>
      </section>

      <section className="grid gap-6 md:grid-cols-3">
        {steps.map((step, index) => (
          <div
            key={step.title}
            className="rounded-3xl border border-line bg-white/80 p-6 shadow-card"
          >
            <div className="text-xs font-semibold uppercase tracking-wide text-ink-muted">
              Step {index + 1}
            </div>
            <div className="mt-3 text-xl font-bold text-ink">
              {step.title}
            </div>
            <p className="mt-2 text-sm text-ink-muted">{step.text}</p>
          </div>
        ))}
      </section> 
    </div>
  );
}
