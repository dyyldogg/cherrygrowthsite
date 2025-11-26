import { Users, ShieldCheck, GraduationCap } from "lucide-react";

export default function Values() {
  return (
    <section className="mx-auto mt-32 w-full max-w-6xl px-4">
      <div className="rounded-3xl bg-[#f5f5f0] p-8 sm:p-16">
        <div className="mb-12 max-w-3xl">
          <h2
            className="text-3xl font-normal leading-tight tracking-tight text-black sm:text-4xl"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Why clients trust CherryGrowth
          </h2>
          <p className="mt-4 text-lg text-black/70">
            We don't just find you a freelancer. We partner with you to build a remote team that drives your business forward.
          </p>
        </div>

        <div className="grid gap-10 md:grid-cols-3">
          {/* Value 1 */}
          <div className="flex flex-col items-start">
            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-black text-white">
              <GraduationCap className="h-6 w-6" strokeWidth={1.5} />
            </div>
            <h3 className="text-xl font-medium text-black" style={{ fontFamily: "var(--font-playfair)" }}>
              College Educated
            </h3>
            <p className="mt-3 text-black/70 leading-relaxed">
              Every assistant holds a university degree and undergoes rigorous testing for English proficiency and critical thinking.
            </p>
          </div>

          {/* Value 2 */}
          <div className="flex flex-col items-start">
            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-black text-white">
              <Users className="h-6 w-6" strokeWidth={1.5} />
            </div>
            <h3 className="text-xl font-medium text-black" style={{ fontFamily: "var(--font-playfair)" }}>
              Dedicated to You
            </h3>
            <p className="mt-3 text-black/70 leading-relaxed">
              Your assistant works exclusively for you. They learn your preferences, tools, and style, becoming a true team member.
            </p>
          </div>

          {/* Value 3 */}
          <div className="flex flex-col items-start">
            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-black text-white">
              <ShieldCheck className="h-6 w-6" strokeWidth={1.5} />
            </div>
            <h3 className="text-xl font-medium text-black" style={{ fontFamily: "var(--font-playfair)" }}>
              Secure & Managed
            </h3>
            <p className="mt-3 text-black/70 leading-relaxed">
              We handle payroll, compliance, and security. All VAs sign NDAs and work within our secure infrastructure.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
