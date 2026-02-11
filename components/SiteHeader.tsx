import Link from "next/link";
import Image from "next/image";

export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-30 border-b border-line/70 bg-sage">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-3">
          <Image src="/images/sageIcon-NoBg.png" alt="Study Sage" width={40} height={40} />
          <div>
            <div className="text-base font-extrabold text-white">
              Study Sage
            </div>
            <div className="text-xs text-white">
              Bright, focused learning
            </div>
          </div>
        </Link>
        <nav className="flex items-center gap-2 text-sm font-semibold text-white">
          <Link
            href="/syllabi"
            className="rounded-full px-3 py-2 transition hover:bg-white hover:text-ink"
          >
            Syllabi
          </Link>
        </nav>
      </div>
    </header>
  );
}
