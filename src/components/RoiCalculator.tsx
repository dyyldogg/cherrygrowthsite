"use client";

import { useMemo, useState } from "react";

function formatCurrency(value: number): string {
  if (!isFinite(value)) return "$0";
  return value.toLocaleString(undefined, { style: "currency", currency: "USD", maximumFractionDigits: 0 });
}

export default function RoiCalculator() {
  // Inputs
  const [rolesToHire, setRolesToHire] = useState<number>(1);
  const [avgUsSalary, setAvgUsSalary] = useState<number>(60000);
  
  // Constants
  const US_OVERHEAD_MULTIPLIER = 1.25; // Taxes, benefits, equipment, office
  const CHERRYGROWTH_ANNUAL_COST = 19200; // $1600/mo * 12

  const results = useMemo(() => {
    const usTotalCost = rolesToHire * avgUsSalary * US_OVERHEAD_MULTIPLIER;
    const cherryGrowthTotalCost = rolesToHire * CHERRYGROWTH_ANNUAL_COST;
    const annualSavings = usTotalCost - cherryGrowthTotalCost;
    const savingsPercent = (annualSavings / usTotalCost) * 100;

    return {
      usTotalCost,
      cherryGrowthTotalCost,
      annualSavings,
      savingsPercent
    };
  }, [rolesToHire, avgUsSalary]);

  return (
    <section className="mx-auto mt-24 w-full max-w-6xl px-4" style={{ fontFamily: "var(--font-inter), system-ui, sans-serif" }}>
      <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">

        {/* Left Column: Inputs */}
        <div className="flex flex-col justify-center">
          <h4 className="mb-4 text-3xl font-normal text-black sm:text-4xl" style={{ fontFamily: "var(--font-playfair)" }}>
            Calculate your savings
          </h4>
          <p className="mb-10 text-lg text-black/60">
            See how much you can save by switching to a dedicated virtual assistant compared to a full-time US employee.
          </p>

          <div className="space-y-10">
            {/* Input 1: Roles */}
            <div className="border-b border-black/10 pb-8">
              <div className="mb-4 flex items-end justify-between">
                <label className="text-sm font-medium uppercase tracking-wide text-black/60">
                  Roles to hire
                </label>
                <span className="text-3xl font-normal text-black" style={{ fontFamily: "var(--font-playfair)" }}>
                  {rolesToHire}
                </span>
              </div>
              <input
                type="range"
                min={1}
                max={20}
                step={1}
                value={rolesToHire}
                onChange={(e) => setRolesToHire(Number(e.target.value))}
                className="calc-range w-full accent-black"
              />
            </div>

            {/* Input 2: Avg Salary */}
            <div className="border-b border-black/10 pb-8">
              <div className="mb-4 flex items-end justify-between">
                <label className="text-sm font-medium uppercase tracking-wide text-black/60">
                  Avg. US Salary (Annual)
                </label>
                <span className="text-3xl font-normal text-black" style={{ fontFamily: "var(--font-playfair)" }}>
                  {formatCurrency(avgUsSalary)}
                </span>
              </div>
              <input
                type="range"
                min={30000}
                max={150000}
                step={5000}
                value={avgUsSalary}
                onChange={(e) => setAvgUsSalary(Number(e.target.value))}
                className="calc-range w-full accent-black"
              />
            </div>
          </div>
          
          <p className="mt-6 text-xs text-black/50">
            *Comparison includes estimated 25% overhead for US employees (taxes, benefits, equipment). CherryGrowth costs are flat monthly rates.
          </p>
        </div>

        {/* Right Column: Results */}
        <div className="flex items-center">
          <div className="relative w-full overflow-hidden rounded-2xl bg-[#111] p-8 text-white shadow-2xl sm:p-12">
            <div className="mb-8 flex items-center gap-3 opacity-60">
              <div className="h-px flex-1 bg-white/20"></div>
              <span className="text-xs font-medium uppercase tracking-wider">Annual Savings</span>
            </div>

            <div className="space-y-2 text-center">
              <p className="text-6xl font-normal text-white sm:text-7xl" style={{ fontFamily: "var(--font-playfair)" }}>
                {formatCurrency(results.annualSavings)}
              </p>
              <p className="text-lg text-white/70">saved per year</p>
            </div>

            <div className="mt-10 grid grid-cols-2 gap-6 border-t border-white/10 pt-8">
              <div>
                <div className="text-white/50 text-sm uppercase tracking-wide mb-1">US Cost</div>
                <div className="text-xl font-medium">{formatCurrency(results.usTotalCost)}</div>
              </div>
              <div>
                <div className="text-white/50 text-sm uppercase tracking-wide mb-1">CherryGrowth Cost</div>
                <div className="text-xl font-medium text-green-400">{formatCurrency(results.cherryGrowthTotalCost)}</div>
              </div>
            </div>

            <button
              type="button"
              className="mt-10 w-full rounded-full bg-white py-4 text-sm font-medium text-black transition-transform hover:scale-[1.02] active:scale-[0.98]"
            >
              Start saving today
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
