import Image from "next/image";
import HeroGraphic from "@/components/HeroGraphic";
import RoiCalculator from "@/components/RoiCalculator";
import CaseStudy from "@/components/CaseStudy";
import Values from "@/components/Values";
import FooterCta from "@/components/FooterCta";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="mx-auto min-h-[calc(100dvh-64px)] w-full max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <section className="relative grid min-h-[85vh] grid-cols-1 gap-12 pt-10 lg:grid-cols-2 lg:pt-20">
        {/* Left Content */}
        <div className="flex flex-col justify-center lg:pr-8">
          <h1
            className="text-5xl font-medium leading-[1.1] tracking-tight text-black sm:text-6xl lg:text-7xl animate-[drop-in_900ms_cubic-bezier(0.2,0.8,0.2,1)_0.5s_both] opacity-0"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Hire the top 1% of Virtual Assistants.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-black/80 animate-[drop-in_1000ms_cubic-bezier(0.2,0.8,0.2,1)_1.0s_both] opacity-0">
            Stop wasting time on admin, scheduling, and busywork. CherryGrowth matches you with 
            <span className="font-semibold text-black"> college-educated, dedicated assistants </span> 
            who work in your time zone—for a fraction of the cost of a US hire.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row animate-[drop-in_1000ms_cubic-bezier(0.2,0.8,0.2,1)_1.2s_both] opacity-0">
            <button
              className="group relative inline-flex items-center justify-center overflow-hidden rounded-full bg-black px-8 py-4 text-sm font-medium text-white transition-all hover:bg-black/90 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2"
              style={{ fontFamily: "var(--font-inter), system-ui, sans-serif" }}
            >
              <span className="mr-2">Find your assistant</span>
              <svg className="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
            <button
              className="group inline-flex items-center justify-center rounded-full border border-black/10 bg-white px-8 py-4 text-sm font-medium text-black transition-all hover:bg-gray-50 hover:border-black/20"
              style={{ fontFamily: "var(--font-inter), system-ui, sans-serif" }}
            >
              View our candidates
            </button>
          </div>
          
          <div className="mt-12 flex items-center gap-4 text-sm text-black/60 animate-[drop-in_1000ms_cubic-bezier(0.2,0.8,0.2,1)_1.4s_both] opacity-0">
            <div className="flex -space-x-2">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="h-8 w-8 rounded-full border-2 border-white bg-gray-200 bg-[url('/demo-poster.jpg')] bg-cover bg-center" />
              ))}
            </div>
            <p>Trusted by 500+ founders</p>
          </div>
        </div>

        {/* Right Graphic */}
        <div className="relative flex items-center justify-center lg:justify-end">
          <div className="relative w-full max-w-lg scale-110 lg:scale-125">
            <HeroGraphic />
             {/* Floating Badge 1 */}
             <div className="absolute -left-4 top-1/4 animate-[drop-in_1000ms_cubic-bezier(0.2,0.8,0.2,1)_1.6s_both] opacity-0">
              <div className="flex items-center gap-3 rounded-xl border border-black/5 bg-white/90 p-4 shadow-xl backdrop-blur-sm">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-100 text-green-600">
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                </div>
                <div>
                  <p className="text-sm font-semibold text-black">Inbox Zero</p>
                  <p className="text-xs text-black/50">Achieved daily</p>
                </div>
              </div>
            </div>
            {/* Floating Badge 2 */}
            <div className="absolute bottom-1/4 -right-4 animate-[drop-in_1000ms_cubic-bezier(0.2,0.8,0.2,1)_1.8s_both] opacity-0">
              <div className="flex items-center gap-3 rounded-xl border border-black/5 bg-white/90 p-4 shadow-xl backdrop-blur-sm">
                 <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 text-blue-600">
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                </div>
                <div>
                  <p className="text-sm font-semibold text-black">20+ Hours Saved</p>
                  <p className="text-xs text-black/50">Per week, per client</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trusted By Section */}
      <section className="border-y border-black/5 py-12 mt-12">
        <div className="text-center">
          <p className="mb-8 text-sm font-medium uppercase tracking-widest text-black/40">Trusted by high-growth companies</p>
          <div className="flex flex-wrap justify-center gap-12 opacity-60 grayscale transition-all duration-500 hover:grayscale-0 hover:opacity-100">
            {/* Placeholders for logos - using text for now or generic SVGs if available, assuming text is safer unless I have logos */}
            {['TechStart', 'GrowthFund', 'ScaleUp Inc', 'VentureFlow', 'Apex Capital'].map((name) => (
              <span key={name} className="text-xl font-semibold text-black/40">{name}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Problem / Solution Grid */}
      <section className="mt-32">
        <div className="mb-16 text-center">
          <h2 className="text-4xl font-normal text-black sm:text-5xl" style={{ fontFamily: "var(--font-playfair)" }}>
            Delegation made simple.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-black/60">
            We handle the recruiting, vetting, and training. You just get to work.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {[
            {
              title: "Top 1% Talent",
              desc: "We accept fewer than 1% of applicants. Every assistant is college-educated, fluent in English, and rigorously tested.",
              icon: (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              )
            },
            {
              title: "Dedicated Support",
              desc: "Your assistant works only for you. No shared pools, no rotation. They become a true extension of your team.",
              icon: (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
              )
            },
            {
              title: "Zero Overhead",
              desc: "Forget payroll taxes, benefits, and equipment costs. Simple monthly billing that scales with your needs.",
              icon: (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              )
            },
          ].map((item, i) => (
            <div key={i} className="group rounded-2xl border border-black/5 bg-white p-8 transition-all hover:shadow-lg hover:-translate-y-1">
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-black/5 text-black transition-colors group-hover:bg-black group-hover:text-white">
                {item.icon}
              </div>
              <h3 className="mb-3 text-xl font-medium text-black">{item.title}</h3>
              <p className="text-black/60 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Tasks Section */}
      <section className="mt-32 rounded-3xl bg-[#f9f9f9] px-6 py-20 text-center sm:px-12">
         <h2 className="text-3xl font-normal text-black sm:text-4xl" style={{ fontFamily: "var(--font-playfair)" }}>
            What can your assistant do?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-black/60">
            From managing your inbox to running your social media, our VAs are skilled professionals.
          </p>
          
          <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
            {[
              "Inbox Management", "Calendar Scheduling", "Data Entry", "Social Media", 
              "Travel Booking", "Customer Support", "Lead Generation", "Market Research",
              "CRM Management", "Invoicing", "Project Management", "Content Creation"
            ].map((task) => (
              <div key={task} className="rounded-xl bg-white p-4 text-sm font-medium text-black shadow-sm ring-1 ring-black/5">
                {task}
              </div>
            ))}
          </div>
      </section>

      {/* ROI Calculator */}
      <RoiCalculator />

      {/* Case Study */}
      <CaseStudy />

      {/* Values */}
      <Values />

      {/* Footer CTA */}
      <FooterCta />
      
      {/* Footer */}
      <Footer />
    </main>
  );
}
