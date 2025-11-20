import Link from "next/link";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-30 w-full border-b border-black/10 bg-[var(--background)]/90 backdrop-blur">
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-4">
        <Link href="/" className="flex items-center" aria-label="Vindium home">
          <img
            src="/vinidum-written-logo.svg"
            alt="Vindium"
            className="h-9 w-auto sm:h-10 md:h-12"
          />
        </Link>
        <nav className="flex items-center gap-6">
          <Link
            href="#"
            className="text-xs uppercase tracking-[0.12em] text-black/70 hover:text-black"
          >
            Home
          </Link>
          <Link
            href="#"
            className="text-xs uppercase tracking-[0.12em] text-black/70 hover:text-black"
          >
            About
          </Link>
          <Link
            href="#"
            className="text-xs uppercase tracking-[0.12em] text-black/70 hover:text-black"
          >
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}


