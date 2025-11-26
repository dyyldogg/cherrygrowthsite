import Link from "next/link";

export default function FooterCta() {
  return (
    <section className="mx-auto mt-24 w-full max-w-6xl px-4">
      <div className="relative overflow-hidden rounded-2xl bg-[#f5f5f5] p-10 text-center sm:p-16">
        <h2
          className="mx-auto max-w-2xl text-3xl font-normal leading-tight tracking-tight text-black sm:text-4xl"
          style={{ fontFamily: "var(--font-playfair)" }}
        >
          Stop letting busywork hold you back.
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-lg text-black/70">
          Join hundreds of entrepreneurs who have reclaimed their time with CherryGrowth.
        </p>
        <Link
          href="/contact"
          className="mt-8 inline-block rounded-full bg-black px-8 py-4 text-sm font-medium text-white shadow-lg transition-all hover:-translate-y-1 hover:shadow-xl hover:opacity-90"
          style={{ fontFamily: "var(--font-inter), system-ui, sans-serif" }}
        >
          Find your perfect assistant
        </Link>
      </div>
    </section>
  );
}
