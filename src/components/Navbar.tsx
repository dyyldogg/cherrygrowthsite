import Link from "next/link";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-30 w-full border-b border-black/10 bg-[var(--background)]/90 backdrop-blur">
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-4">
        <Link href="/" className="flex items-center" aria-label="CherryGrowth home">
          <img
            src="/cherrygrowth-logo.svg"
            alt="CherryGrowth"
            className="h-8 w-auto sm:h-9 md:h-10"
          />
        </Link>
        <Link
          href="/contact"
          className="rounded-full bg-black px-5 py-2 text-xs font-medium uppercase tracking-wide text-white transition-transform hover:scale-105 active:scale-95"
          style={{ fontFamily: "var(--font-inter), system-ui, sans-serif" }}
        >
          Hire a VA
        </Link>
      </div>
    </header>
  );
}


