import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, Check, Leaf, RotateCcw, Sun } from "lucide-react";
import { Nav } from "@/components/site/Nav";
import {
  type Calculation,
  STORAGE_KEY,
  formatCurrency,
  getPricing,
} from "@/lib/solar-calculations";

export const Route = createFileRoute("/solar-calculator")({
  head: () => ({
    meta: [
      { title: "Solar Capacity Calculator | TrueBright Energy" },
      {
        name: "description",
        content:
          "Estimate the solar capacity your home or business needs from your monthly electricity usage.",
      },
    ],
  }),
  component: SolarCalculator,
});

function SolarCalculator() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [units, setUnits] = useState("");
  const [calculation, setCalculation] = useState<Calculation | null>(null);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const monthlyUnits = Number(units);
    const capacity = Math.round(monthlyUnits / 120);
    const result: Calculation = {
      id: Date.now(),
      name: name.trim(),
      phone: phone.trim(),
      units: monthlyUnits,
      capacity,
      createdAt: new Date().toISOString(),
    };
    const stored = window.localStorage.getItem(STORAGE_KEY);
    const savedCalculations = stored ? (JSON.parse(stored) as Calculation[]) : [];
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify([result, ...savedCalculations].slice(0, 20)));
    setCalculation(result);
  }

  function resetForm() {
    setCalculation(null);
    setName("");
    setPhone("");
    setUnits("");
  }

  return (
    <div className="min-h-screen bg-surface">
      <Nav />
      <main>
        <section className="overflow-hidden bg-gradient-deep text-deep-foreground">
          <div className="mx-auto grid max-w-6xl gap-8 px-4 py-14 sm:px-5 sm:py-16 md:gap-12 md:py-24 lg:grid-cols-[1fr_0.82fr] lg:items-end">
            <div>
              <p className="eyebrow text-solar">Solar sizing tool · 60 seconds</p>
              <h1 className="mt-5 max-w-3xl text-4xl leading-[1.05] font-bold sm:text-5xl md:text-6xl">
                Find the right solar capacity for your monthly usage.
              </h1>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-deep-foreground/75">
                Share two details and your average monthly units. We&apos;ll turn your bill into a practical starting point for a solar consultation.
              </p>
            </div>
            <div className="flex items-center gap-4 border-t border-deep-foreground/15 pt-6 lg:border-t-0 lg:border-l lg:pl-8">
              <div className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-solar text-deep"><Sun size={22} /></div>
              <p className="text-sm leading-relaxed text-deep-foreground/75">A quick estimate based on the TrueBright rule of thumb: monthly units divided by 120.</p>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-3xl px-4 py-10 sm:px-5 sm:py-12 md:py-16">
          <div className="rounded-xl border border-border bg-card p-4 shadow-lift sm:p-6 md:p-9">
            {calculation ? <ThankYou calculation={calculation} onReset={resetForm} /> : (
              <>
                <div className="flex items-start justify-between gap-4 sm:gap-6">
                  <div>
                    <p className="eyebrow text-accent">Step 1 of 1</p>
                    <h2 className="mt-3 text-2xl font-bold md:text-3xl">Tell us about your energy use</h2>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">Your details stay on this device and are ready to export for your team.</p>
                  </div>
                  <Leaf className="hidden shrink-0 text-accent sm:block" size={30} />
                </div>
                <form onSubmit={handleSubmit} className="mt-8 space-y-5">
                  <label className="block text-sm font-medium">Name
                    <input required value={name} onChange={(event) => setName(event.target.value)} placeholder="Your full name" className="mt-2 h-12 w-full rounded-md border border-input bg-background px-4 outline-none transition focus:border-accent focus:ring-2 focus:ring-accent/20" />
                  </label>
                  <label className="block text-sm font-medium">Phone number
                    <input required type="tel" pattern="[0-9+() -]{8,}" value={phone} onChange={(event) => setPhone(event.target.value)} placeholder="+91 98765 43210" className="mt-2 h-12 w-full rounded-md border border-input bg-background px-4 outline-none transition focus:border-accent focus:ring-2 focus:ring-accent/20" />
                  </label>
                  <label className="block text-sm font-medium">Average monthly electricity units
                    <input required min="1" step="1" type="number" value={units} onChange={(event) => setUnits(event.target.value)} placeholder="Example: 600" className="mt-2 h-12 w-full rounded-md border border-input bg-background px-4 outline-none transition focus:border-accent focus:ring-2 focus:ring-accent/20" />
                  </label>
                  <button type="submit" className="bg-gradient-solar inline-flex h-12 w-full items-center justify-center gap-2 rounded-md px-5 text-sm font-semibold text-deep shadow-soft transition hover:opacity-90">Calculate my solar capacity <ArrowRight size={17} /></button>
                </form>
              </>
            )}
          </div>

        </section>
      </main>
    </div>
  );
}

function ThankYou({ calculation, onReset }: { calculation: Calculation; onReset: () => void }) {
  const pricing = getPricing(calculation.capacity);

  return (
    <div className="py-6 md:py-10">
      <div className="grid h-12 w-12 place-items-center rounded-full bg-accent text-accent-foreground"><Check size={24} /></div>
      <p className="eyebrow mt-8 text-accent">Estimate ready</p>
      <h2 className="mt-3 break-words text-3xl font-bold">Thanks, {calculation.name}.</h2>
      <p className="mt-3 max-w-lg text-sm leading-relaxed text-muted-foreground">Your estimate has been saved. TrueBright Energy can refine this number after a quick site assessment.</p>
      <div className="mt-8 border-y border-border py-6"><p className="text-sm text-muted-foreground">Recommended starting capacity</p><p className="mt-2 font-display text-5xl font-bold text-accent">{calculation.capacity} <span className="text-2xl">kW</span></p><p className="mt-3 text-xs text-muted-foreground">{calculation.units.toLocaleString()} monthly units ÷ 120 · priced at the {pricing.capacityBand} kW band</p></div>
      <div className="mt-6 grid gap-3 sm:grid-cols-3"><div className="rounded-md bg-surface p-4"><p className="text-xs text-muted-foreground">Panel system</p><p className="mt-1 break-words font-display text-lg font-bold">{formatCurrency(pricing.total)}</p></div><div className="rounded-md bg-surface p-4"><p className="text-xs text-muted-foreground">Govt. subsidy</p><p className="mt-1 break-words font-display text-lg font-bold text-accent">-{formatCurrency(pricing.subsidy)}</p></div><div className="rounded-md bg-primary p-4 text-primary-foreground"><p className="text-xs text-primary-foreground/70">Approx. you pay</p><p className="mt-1 break-words font-display text-lg font-bold">{formatCurrency(pricing.afterSubsidy)}</p></div></div>
      <p className="mt-4 text-xs leading-relaxed text-muted-foreground">Estimate based on the supplied mono PERC price list. Final pricing can vary with roof structure, electrical work, installation and approvals.</p>
      <button type="button" onClick={onReset} className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-accent"><RotateCcw size={16} /> Run another estimate</button>
    </div>
  );
}
