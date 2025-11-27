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
        <div className="flex items-center gap-6">
          <Link 
            href="/about" 
            className="text-sm font-medium text-black/80 hover:text-black transition-colors"
            style={{ fontFamily: "var(--font-inter), system-ui, sans-serif" }}
          >
            About
          </Link>
          <Link
            href="/contact"
            className="rounded-full border border-black bg-transparent px-5 py-2 text-xs font-medium uppercase tracking-wide text-black transition-all hover:bg-black hover:text-white"
            style={{ fontFamily: "var(--font-inter), system-ui, sans-serif" }}
          >
            Get Started
          </Link>
        </div>
      </div>
    </header>
  );
}


