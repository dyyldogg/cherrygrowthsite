import Image from "next/image";
import HeroGraphic from "@/components/HeroGraphic";
import RoiCalculator from "@/components/RoiCalculator";
import CaseStudy from "@/components/CaseStudy";
import Values from "@/components/Values";
import FooterCta from "@/components/FooterCta";

export default function Home() {
  return (
    <main className="mx-auto min-h-[calc(100dvh-64px)] w-full max-w-6xl px-4 py-20">
      <section className="grid min-h-[calc(100dvh-64px)] items-start gap-10 pb-0 lg:grid-cols-2">
        <div className="max-w-xl">
          <h1
            className="text-left text-[clamp(2rem,4.5vw,3.75rem)] font-normal leading-tight tracking-tight text-black opacity-0 animate-[drop-in_900ms_cubic-bezier(0.2,0.8,0.2,1)_0.9s_both]"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Dear private real estate lenders,
          </h1>
          <h2
            className="mt-[6vh] ml-8 text-right text-[clamp(1.75rem,4.2vw,3.5rem)] font-normal leading-tight tracking-tight text-black opacity-0 sm:ml-12 animate-[drop-in_1000ms_cubic-bezier(0.2,0.8,0.2,1)_2s_both]"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            stop letting
            <br />
            busywork kill
            <br />
            your dealflow.
          </h2>
          <p className="mt-6 text-base leading-7 text-black/80 subhead-copy sm:text-lg">
            We build AI agents and outsource contractors to{" "}
            <span className="emphasis-highlight">automate the repetitive tasks slowing your team down</span>
            , so you can originate deals lightning fast
          </p>
          <div className="mt-8 flex w-full flex-wrap items-center justify-center gap-5">
            <button
              className="cta-button-secondary group relative overflow-hidden rounded-full border border-black/10 bg-transparent px-8 py-3.5 text-sm font-medium tracking-wide text-black/80 transition-all duration-300 hover:border-black/25 hover:bg-black/5 hover:text-black hover:shadow-[0_2px_6px_rgba(0,0,0,0.1)] hover:scale-105"
              style={{ fontFamily: "var(--font-inter), system-ui, sans-serif" }}
            >
              <span className="relative z-10 inline-block transition-transform duration-300 group-hover:translate-x-1">
                Past results
              </span>
            </button>
            <button
              className="group relative overflow-hidden rounded-full border border-black/15 bg-transparent px-8 py-3.5 text-sm font-medium tracking-wide text-black transition-all duration-300 hover:border-black/30 hover:bg-black/5 hover:scale-105 hover:-translate-y-0.5"
              style={{ fontFamily: "var(--font-inter), system-ui, sans-serif" }}
            >
              <span className="relative z-10 flex items-center gap-2">
                Have us fly out to you
                <svg
                  className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </span>
            </button>
          </div>
        </div>
        <div className="relative hidden lg:block clip-half-right">
          <HeroGraphic />
        </div>
      </section>

      {/* Quote section under CTA */}
      <section className="mx-auto mt-16 w-full max-w-5xl px-2">
        <div className="mx-auto max-w-3xl sm:max-w-4xl">
          <blockquote
            className="text-center text-4xl font-normal italic leading-[1.12] tracking-tight text-black/85 sm:text-5xl"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            “Vindium literally eliminated 40% of the B.S. I deal with at work.”
          </blockquote>
        </div>
      </section>

      <section id="demo" className="mx-auto mt-16 w-full max-w-5xl">
        <div className="relative aspect-[16/9] w-full overflow-hidden rounded-xl border border-black/10 bg-white shadow-sm">
          <video
            className="h-full w-full object-cover will-change-transform"
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            poster="/demo-poster.jpg"
            aria-label="Vindium product demo video"
          >
            {/* Prefer refined crop (v2) centered to keep input bar and remove pillar */}
            <source src="/demo-framed2.mp4" type="video/mp4" />
            <source src="/demo-framed.webm" type="video/webm" />
            {/* Fallbacks */}
            <source src="/demo-letterbox.mp4" type="video/mp4" />
            {/* Fallback to raw OBS capture (filename contains spaces → URL-encoded) */}
            <source src="/2025-11-04%2016-29-09.mov" type="video/quicktime" />
          </video>
        </div>
      </section>

      {/* Headline + supporting h2 */}
      <section className="mx-auto mt-40 w-full max-w-5xl px-2">
        <h2
          className="text-3xl font-normal leading-[1.15] tracking-tight text-black sm:text-4xl"
          style={{ fontFamily: "var(--font-playfair)" }}
        >
          We’ve found most private lenders leave 30–40% of deal flow on the table every month.
        </h2>
        <h2 className="mt-4 text-base leading-7 text-black/80 subhead-copy sm:text-lg">
          Manual intake and underwriting bottlenecks limit how many loans your team can process.
          {" "}
          <span className="emphasis-highlight">Hiring and training analysts is expensive and slow</span>.
          {" "}
          Vindium automates those repetitive workflows so your team can handle every deal that comes in.
        </h2>
      </section>

      {/* Calculator last */}
      <RoiCalculator />

      {/* Case study */}
      <CaseStudy />

      {/* Values */}
      <Values />

      {/* Bottom CTA + minimal footer */}
      <FooterCta />

      

    </main>
  );
}
