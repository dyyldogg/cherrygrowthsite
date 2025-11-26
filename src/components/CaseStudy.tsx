export default function CaseStudy() {
  return (
    <section className="mx-auto mt-32 w-full max-w-6xl px-4">
      {/* Title */}
      <div className="mb-12 text-center">
        <h2
          className="text-4xl font-normal leading-tight tracking-tight text-black sm:text-5xl"
          style={{ fontFamily: "var(--font-playfair)" }}
        >
          Real results. Real freedom.
        </h2>
      </div>

      <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
        {/* Left Narrative */}
        <div className="space-y-10">
          {/* Before */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-red-100 text-red-600">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
              </div>
              <h3 className="text-2xl font-normal text-black" style={{ fontFamily: "var(--font-playfair)" }}>
                Before CherryGrowth
              </h3>
            </div>
            <p className="ml-11 text-lg text-black/70 leading-relaxed">
              Sarah, a marketing agency founder, was drowning in email and admin. She spent <span className="font-medium text-black">15 hours a week</span> on scheduling and invoicing, preventing her from closing new deals.
            </p>
          </div>

          {/* After */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-green-100 text-green-600">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
              </div>
              <h3 className="text-2xl font-normal text-black" style={{ fontFamily: "var(--font-playfair)" }}>
                After CherryGrowth
              </h3>
            </div>
            <p className="ml-11 text-lg text-black/70 leading-relaxed">
              We matched Sarah with Maria, an experienced Executive Assistant. Maria took over inbox management and billing immediately. Sarah reclaimed her time and <span className="font-medium text-black">doubled her revenue</span> in 6 months.
            </p>
          </div>
          
          <blockquote className="border-l-4 border-black pl-6 py-2 italic text-black/80 text-lg">
            "Hiring a VA through CherryGrowth was the single best ROI decision I made this year. I finally have my weekends back."
          </blockquote>
        </div>

        {/* Right Stats Card */}
        <div className="relative overflow-hidden rounded-3xl bg-white border border-black/10 p-8 sm:p-12 shadow-xl">
          {/* Background decoration */}
          <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-blue-50 blur-3xl" />
          
          <div className="relative z-10">
             <div className="flex items-center gap-4 mb-8">
                <div className="h-12 w-12 rounded-full bg-gray-200 bg-[url('/demo-poster.jpg')] bg-cover bg-center"></div>
                <div>
                  <div className="font-medium text-black">Sarah Jenkins</div>
                  <div className="text-sm text-black/50">Founder, GrowthMedia</div>
                </div>
             </div>
          
            <div className="grid grid-cols-2 gap-8">
              <div>
                <div className="text-5xl font-medium text-black">15h</div>
                <div className="mt-2 text-sm font-medium text-black/50 uppercase tracking-wide">Saved Weekly</div>
              </div>
              <div>
                <div className="text-5xl font-medium text-black">200%</div>
                <div className="mt-2 text-sm font-medium text-black/50 uppercase tracking-wide">Revenue Growth</div>
              </div>
            </div>
            
            <div className="mt-8 pt-8 border-t border-black/5">
              <div className="flex items-center justify-between">
                <span className="text-sm text-black/60">Hiring time</span>
                <span className="font-medium text-black">3 Days</span>
              </div>
               <div className="mt-3 flex items-center justify-between">
                <span className="text-sm text-black/60">Cost reduction</span>
                <span className="font-medium text-green-600">-75% vs US Hire</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
