"use client";

import { useMemo, useState } from "react";

function formatCurrency(value: number): string {
  if (!isFinite(value)) return "$0";
  return value.toLocaleString(undefined, { style: "currency", currency: "USD", maximumFractionDigits: 0 });
}

export default function RoiCalculator() {
  const [inboundPerMonth, setInboundPerMonth] = useState<number>(40);
  const [avgDealSize, setAvgDealSize] = useState<number>(1_000_000);
  const [numAnalysts, setNumAnalysts] = useState<number>(5);

  const results = useMemo(() => {
    // Fixed assumptions (domain-specific but simple and explainable)
    const ORIGINATION_FEE = 0.015; // 1.5% of principal
    const ANALYST_SALARY_TOTAL_COMP = 170_000; // per year, fully loaded
    const VINDIUM_REGAIN_SHARE = 0.3; // ~30% analyst-equivalent throughput
    const ANALYST_DEALS_PER_WEEK = 0.3; // per analyst
    const WEEKS_PER_MONTH = 4.33;

    // Current capacity and missed demand
    const currentCapacityDeals = numAnalysts * ANALYST_DEALS_PER_WEEK * WEEKS_PER_MONTH;
    const currentMissedDeals = Math.max(inboundPerMonth - currentCapacityDeals, 0);
    const missedDealVolume = currentMissedDeals * avgDealSize;

    // Potential regained capacity via Vindium (30% analyst-equivalent capacity)
    const regainedCapacityDeals = numAnalysts * VINDIUM_REGAIN_SHARE * ANALYST_DEALS_PER_WEEK * WEEKS_PER_MONTH;
    const regainedDeals = Math.min(currentMissedDeals, regainedCapacityDeals);
    const regainedDealVolume = regainedDeals * avgDealSize;
    const regainedFeeRevenue = regainedDealVolume * ORIGINATION_FEE;

    // Cost context
    const monthlyAnalystCost = (ANALYST_SALARY_TOTAL_COMP * numAnalysts) / 12;
    const roiMultiple = monthlyAnalystCost > 0 ? regainedFeeRevenue / monthlyAnalystCost : 0;

    return {
      missedDealVolume,
      lostRevenue: regainedFeeRevenue,
      monthlyAnalystCost,
      roiMultiple,
    };
  }, [inboundPerMonth, avgDealSize, numAnalysts]);

  return (
    <section className="mx-auto mt-6 w-full max-w-6xl" style={{ fontFamily: "var(--font-inter), system-ui, sans-serif" }}>
      <div className="grid gap-0 overflow-hidden rounded-2xl border border-black/10 bg-white/70 shadow-sm lg:grid-cols-2">
        {/* Left: inputs (grey with white sliders/text) */}
        <div className="relative flex min-h-[360px] flex-col justify-start bg-[#2b2b2b] p-6 pt-4 text-white sm:p-8 sm:pt-6">
          <h4 className="mb-4 text-2xl font-medium sm:text-3xl">Predict your capacity lift</h4>

          <div className="space-y-6">
            <label className="block">
              <div className="mb-2 flex items-center justify-between text-sm text-white/80">
                <span>Inbound loan requests / month</span>
                <span className="tabular-nums text-white">{inboundPerMonth}</span>
              </div>
              <input
                type="range"
                min={7}
                max={100}
                step={1}
                value={inboundPerMonth}
                onChange={(e) => setInboundPerMonth(Number(e.target.value))}
                className="calc-range calc-range--dark"
              />
            </label>

            <label className="block">
              <div className="mb-2 flex items-center justify-between text-sm text-white/80">
                <span>Average deal size (USD)</span>
                <span className="tabular-nums text-white">{formatCurrency(avgDealSize)}</span>
              </div>
              <input
                type="range"
                min={500_000}
                max={250_000_000}
                step={50_000}
                value={avgDealSize}
                onChange={(e) => setAvgDealSize(Number(e.target.value))}
                className="calc-range calc-range--dark"
              />
            </label>

            <label className="block">
              <div className="mb-2 flex items-center justify-between text-sm text-white/80">
                <span>Number of analysts</span>
                <span className="tabular-nums text-white">{numAnalysts}</span>
              </div>
              <input
                type="range"
                min={1}
                max={50}
                step={1}
                value={numAnalysts}
                onChange={(e) => setNumAnalysts(Number(e.target.value))}
                className="calc-range calc-range--dark"
              />
            </label>
          </div>
        </div>

        {/* Right: results (white with black text) */}
        <div className="relative flex min-h-[360px] items-center bg-white text-black">
          <div className="relative z-10 w-full p-6 sm:p-10">
            <div className="mb-6 flex items-end gap-3 text-black/70">
              <img src="/vinidum-written-logo.svg" alt="Vindium" className="h-8 w-auto translate-y-[4px]" />
              <span className="text-sm">calculation</span>
            </div>
            <p className="text-2xl font-medium leading-snug">
              You could add
              <span className="mx-2 whitespace-nowrap underline decoration-black/20 underline-offset-4">
                {formatCurrency(results.lostRevenue)}
              </span>
              per month to your team's revenue with Vindium!
            </p>

            <div className="mt-6 grid gap-3 sm:grid-cols-3">
              <div className="rounded-lg border border-black/10 bg-white p-3">
                <div className="text-xs uppercase tracking-wide text-black/60">Missed volume</div>
                <div className="mt-1 text-base font-medium">{formatCurrency(results.missedDealVolume)}</div>
              </div>
              <div className="rounded-lg border border-black/10 bg-white p-3">
                <div className="text-xs uppercase tracking-wide text-black/60">Lost revenue</div>
                <div className="mt-1 text-base font-medium">{formatCurrency(results.lostRevenue)}</div>
              </div>
              <div className="rounded-lg border border-black/10 bg-white p-3">
                <div className="text-xs uppercase tracking-wide text-black/60">Analyst cost</div>
                <div className="mt-1 text-base font-medium">{formatCurrency(results.monthlyAnalystCost)}</div>
              </div>
            </div>

            <button
              type="button"
              className="mt-6 inline-flex items-center justify-center rounded-full border border-black/25 bg-transparent px-5 py-3 text-sm font-medium text-black transition-all hover:bg-black/5 hover:shadow-sm"
              aria-label="Get an exact calculation"
            >
              Get an exact calculation
              <span className="ml-2 transition-transform group-hover:translate-x-0.5">→</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}


