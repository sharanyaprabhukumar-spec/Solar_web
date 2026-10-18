import { useEffect, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, Check, ClipboardCopy, Leaf, Printer, RotateCcw, Sun } from "lucide-react";
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
  const [activeTool, setActiveTool] = useState<"solar" | "load">("solar");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [units, setUnits] = useState("");
  const [calculation, setCalculation] = useState<Calculation | null>(null);

  useEffect(() => {
    if (window.location.hash === "#load-assessment") setActiveTool("load");
  }, []);

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
              <p className="eyebrow text-solar">TrueBright energy tools</p>
              <h1 className="mt-5 max-w-3xl text-4xl leading-[1.05] font-bold sm:text-5xl md:text-6xl">
                {activeTool === "solar" ? "Find the right solar capacity for your monthly usage." : "Understand your hall's load and solar potential."}
              </h1>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-deep-foreground/75">
                {activeTool === "solar" ? "Share your average monthly units for a practical starting point for a solar consultation." : "Estimate equipment demand, monthly energy use and indicative solar capacity from your function schedule."}
              </p>
              <div id="load-assessment" role="tablist" aria-label="Energy tools" className="mt-8 inline-flex flex-wrap gap-1 rounded-lg border border-white/15 bg-white/5 p-1">
                <button type="button" role="tab" aria-selected={activeTool === "solar"} onClick={() => setActiveTool("solar")} className={`rounded-md px-4 py-2.5 text-sm font-semibold transition ${activeTool === "solar" ? "bg-solar text-deep" : "text-deep-foreground/75 hover:text-white"}`}>Solar calculator</button>
                <button type="button" role="tab" aria-selected={activeTool === "load"} onClick={() => setActiveTool("load")} className={`rounded-md px-4 py-2.5 text-sm font-semibold transition ${activeTool === "load" ? "bg-solar text-deep" : "text-deep-foreground/75 hover:text-white"}`}>Load assessment</button>
              </div>
            </div>
            <div className="flex items-center gap-4 border-t border-deep-foreground/15 pt-6 lg:border-t-0 lg:border-l lg:pl-8">
              <div className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-solar text-deep"><Sun size={22} /></div>
              <p className="text-sm leading-relaxed text-deep-foreground/75">A quick estimate based on the TrueBright rule of thumb: monthly units divided by 120.</p>
            </div>
          </div>
        </section>

        <section hidden={activeTool !== "solar"} className="mx-auto max-w-3xl px-4 py-10 sm:px-5 sm:py-12 md:py-16">
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
        <section hidden={activeTool !== "load"}>
          <HallLoadAssessment />
        </section>
      </main>
    </div>
  );
}

type HallInputs = {
  days: number;
  rate: number;
  kwPerTon: number;
  acHours: number;
  acEquipment: { tonnage: number; quantity: number }[];
  fans: number;
  fanWatts: number;
  fanHours: number;
  lights: number;
  lightWatts: number;
  lightHours: number;
  otherLoad: number;
  otherHours: number;
  solarOffset: number;
  solarYield: number;
};

const initialHallInputs: HallInputs = {
  days: 8,
  rate: 8,
  kwPerTon: 1.4,
  acHours: 8,
  acEquipment: [
    { tonnage: 4.5, quantity: 2 },
    { tonnage: 5.5, quantity: 4 },
    { tonnage: 17, quantity: 1 },
  ],
  fans: 30,
  fanWatts: 75,
  fanHours: 10,
  lights: 100,
  lightWatts: 20,
  lightHours: 10,
  otherLoad: 10,
  otherHours: 8,
  solarOffset: 60,
  solarYield: 4,
};

function HallLoadAssessment() {
  const [inputs, setInputs] = useState(initialHallInputs);

  useEffect(() => {
    try {
      const saved = JSON.parse(window.localStorage.getItem("tb-hall") || "null");
      if (!saved) return;
      setInputs({
        ...initialHallInputs,
        days: Number(saved.days ?? initialHallInputs.days),
        rate: Number(saved.rate ?? initialHallInputs.rate),
        kwPerTon: Number(saved.kwtr ?? initialHallInputs.kwPerTon),
        acHours: Number(saved.ach ?? initialHallInputs.acHours),
        acEquipment: initialHallInputs.acEquipment.map((equipment, index) => ({
          tonnage: Number(saved[`ton${index}`] ?? equipment.tonnage),
          quantity: Number(saved[`qty${index}`] ?? equipment.quantity),
        })),
        fans: Number(saved.fans ?? initialHallInputs.fans),
        fanWatts: Number(saved.fanw ?? initialHallInputs.fanWatts),
        fanHours: Number(saved.fanh ?? initialHallInputs.fanHours),
        lights: Number(saved.lights ?? initialHallInputs.lights),
        lightWatts: Number(saved.lightw ?? initialHallInputs.lightWatts),
        lightHours: Number(saved.lighth ?? initialHallInputs.lightHours),
        otherLoad: Number(saved.other ?? initialHallInputs.otherLoad),
        otherHours: Number(saved.otherh ?? initialHallInputs.otherHours),
        solarOffset: Number(saved.share ?? initialHallInputs.solarOffset),
        solarYield: Number(saved.yield ?? initialHallInputs.solarYield),
      });
    } catch {
      // Ignore invalid locally stored assessment data.
    }
  }, []);

  const coolingTR = inputs.acEquipment.reduce(
    (total, equipment) => total + equipment.tonnage * equipment.quantity,
    0,
  );
  const acLoad = coolingTR * inputs.kwPerTon;
  const fanLoad = (inputs.fans * inputs.fanWatts) / 1000;
  const lightLoad = (inputs.lights * inputs.lightWatts) / 1000;
  const dailyUnits =
    acLoad * inputs.acHours +
    fanLoad * inputs.fanHours +
    lightLoad * inputs.lightHours +
    inputs.otherLoad * inputs.otherHours;
  const monthlyUnits = dailyUnits * inputs.days;
  const monthlyCost = monthlyUnits * inputs.rate;
  const solarSize =
    (monthlyUnits * Math.min(100, inputs.solarOffset)) /
    100 /
    (30 * Math.max(0.1, inputs.solarYield));
  const breakdown = [
    ["AC", acLoad, inputs.acHours],
    ["Fans", fanLoad, inputs.fanHours],
    ["Lights", lightLoad, inputs.lightHours],
    ["Other", inputs.otherLoad, inputs.otherHours],
  ] as const;
  const formatNumber = (value: number, digits = 0) =>
    value.toLocaleString("en-IN", { maximumFractionDigits: digits });

  function saveInputs(next: HallInputs) {
    setInputs(next);
    try {
      window.localStorage.setItem(
        "tb-hall",
        JSON.stringify({
          days: next.days,
          rate: next.rate,
          kwtr: next.kwPerTon,
          ach: next.acHours,
          ...Object.fromEntries(
            next.acEquipment.flatMap((equipment, index) => [
              [`ton${index}`, equipment.tonnage],
              [`qty${index}`, equipment.quantity],
            ]),
          ),
          fans: next.fans,
          fanw: next.fanWatts,
          fanh: next.fanHours,
          lights: next.lights,
          lightw: next.lightWatts,
          lighth: next.lightHours,
          other: next.otherLoad,
          otherh: next.otherHours,
          share: next.solarOffset,
          yield: next.solarYield,
        }),
      );
    } catch {
      // Continue if browser storage is unavailable.
    }
  }

  function updateField(field: keyof Omit<HallInputs, "acEquipment">, value: number) {
    saveInputs({ ...inputs, [field]: Math.max(0, value) });
  }

  function updateEquipment(index: number, field: "tonnage" | "quantity", value: number) {
    const acEquipment = inputs.acEquipment.map((equipment, equipmentIndex) =>
      equipmentIndex === index ? { ...equipment, [field]: Math.max(0, value) } : equipment,
    );
    saveInputs({ ...inputs, acEquipment });
  }

  function resetAssessment() {
    window.localStorage.removeItem("tb-hall");
    setInputs(initialHallInputs);
  }

  function copyReport() {
    const report =
      "TrueBright Electricityl Load Assessment\n" +
      breakdown
        .map(([name, load, hours]) => `${name}: ${formatNumber(load, 2)} kW x ${hours} hours = ${formatNumber(load * hours, 1)} units/function`)
        .join("\n") +
      `\nCooling capacity: ${formatNumber(coolingTR, 1)} TR\nRunning load: ${formatNumber(acLoad + fanLoad + lightLoad + inputs.otherLoad, 1)} kW\nUnits/function: ${formatNumber(dailyUnits)} kWh\nMonthly units: ${formatNumber(monthlyUnits)} kWh\nMonthly energy cost: ₹${formatNumber(monthlyCost)}\nIndicative solar size: ${formatNumber(solarSize, 1)} kWp`;
    if (navigator.clipboard && window.isSecureContext) {
      navigator.clipboard.writeText(report).then(() => window.alert("Report copied")).catch(() => window.prompt("Copy report:", report));
    } else {
      window.prompt("Copy report:", report);
    }
  }

  return (
    <section className="mx-auto max-w-6xl px-4 py-10 sm:px-5 sm:py-12 md:py-16">
      <div className="rounded-xl border border-border bg-card p-4 shadow-lift sm:p-6 md:p-9">
        <div>
          <p className="eyebrow text-accent">Electricityl load assessment</p>
          <h2 className="mt-3 text-2xl font-bold md:text-3xl">Build an energy profile for your venue</h2>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">Adjust your equipment quantities and operating hours to estimate demand, monthly energy use and a preliminary solar size.</p>
        </div>

        <div className="mt-8 grid gap-8 lg:grid-cols-2">
          <div className="space-y-8">
            <fieldset className="border-t border-border pt-5">
              <legend className="text-base font-semibold text-primary">Function schedule</legend>
              <div className="mt-2 grid grid-cols-2 gap-4">
                <AssessmentField label="Usage days / month" value={inputs.days} onChange={(value) => updateField("days", value)} />
                <AssessmentField label="Electricity tariff ₹/unit" value={inputs.rate} step={0.1} onChange={(value) => updateField("rate", value)} />
              </div>
            </fieldset>

            <fieldset className="border-t border-border pt-5">
              <legend className="text-base font-semibold text-primary">AC equipment</legend>
              {inputs.acEquipment.map((equipment, index) => (
                <div key={index} className="mt-2 grid grid-cols-2 gap-4">
                  <AssessmentField label={`AC tonnage ${index + 1}`} value={equipment.tonnage} step={0.1} onChange={(value) => updateEquipment(index, "tonnage", value)} />
                  <AssessmentField label="Quantity" value={equipment.quantity} onChange={(value) => updateEquipment(index, "quantity", value)} />
                </div>
              ))}
              <div className="mt-2 grid grid-cols-2 gap-4">
                <AssessmentField label="Electrical input kW/TR" value={inputs.kwPerTon} step={0.1} onChange={(value) => updateField("kwPerTon", value)} />
                <AssessmentField label="AC hours / function" value={inputs.acHours} max={24} onChange={(value) => updateField("acHours", Math.min(24, value))} />
              </div>
            </fieldset>

            <fieldset className="border-t border-border pt-5">
              <legend className="text-base font-semibold text-primary">Fans and lighting</legend>
              <div className="mt-2 grid grid-cols-2 gap-4">
                <AssessmentField label="Fan quantity" value={inputs.fans} onChange={(value) => updateField("fans", value)} />
                <AssessmentField label="Fan watts each" value={inputs.fanWatts} onChange={(value) => updateField("fanWatts", value)} />
                <AssessmentField label="Fan hours / function" value={inputs.fanHours} onChange={(value) => updateField("fanHours", value)} />
                <AssessmentField label="Light quantity" value={inputs.lights} onChange={(value) => updateField("lights", value)} />
                <AssessmentField label="Light watts each" value={inputs.lightWatts} onChange={(value) => updateField("lightWatts", value)} />
                <AssessmentField label="Light hours / function" value={inputs.lightHours} onChange={(value) => updateField("lightHours", value)} />
              </div>
            </fieldset>

            <fieldset className="border-t border-border pt-5">
              <legend className="text-base font-semibold text-primary">Other loads and solar assumptions</legend>
              <div className="mt-2 grid grid-cols-2 gap-4">
                <AssessmentField label="Other loads (kW)" value={inputs.otherLoad} step={0.1} onChange={(value) => updateField("otherLoad", value)} />
                <AssessmentField label="Other hours / function" value={inputs.otherHours} onChange={(value) => updateField("otherHours", value)} />
                <AssessmentField label="Target energy offset (%)" value={inputs.solarOffset} max={100} onChange={(value) => updateField("solarOffset", Math.min(100, value))} />
                <AssessmentField label="Solar yield (kWh/kWp/day)" value={inputs.solarYield} min={0.1} step={0.1} onChange={(value) => updateField("solarYield", Math.max(0.1, value))} />
              </div>
              <p className="mt-3 text-xs leading-relaxed text-muted-foreground">Solar sizing is an energy-based screening estimate. Confirm daytime load, roof space, export policy and meter arrangement before proposing capacity.</p>
            </fieldset>
          </div>

          <div className="border-t border-border pt-5 lg:border-l lg:border-t-0 lg:pl-8">
            <h3 className="text-base font-semibold text-primary">Load breakdown</h3>
            <div className="mt-4 overflow-x-auto">
              <table className="w-full min-w-[420px] text-sm">
                <thead><tr className="border-b border-border text-left text-primary"><th className="py-3 pr-3">Equipment</th><th className="py-3 pr-3">Load (kW)</th><th className="py-3 pr-3">Hours</th><th className="py-3 text-right">Units/day</th></tr></thead>
                <tbody>
                  {breakdown.map(([name, load, hours]) => <tr key={name} className="border-b border-border"><td className="py-3 pr-3">{name}</td><td className="py-3 pr-3">{formatNumber(load, 2)}</td><td className="py-3 pr-3">{formatNumber(hours, 1)}</td><td className="py-3 text-right">{formatNumber(load * hours, 1)}</td></tr>)}
                  <tr className="font-semibold text-primary"><th className="py-3 pr-3 text-left">Total</th><td className="py-3 pr-3">{formatNumber(acLoad + fanLoad + lightLoad + inputs.otherLoad, 2)}</td><td className="py-3 pr-3">-</td><td className="py-3 text-right">{formatNumber(dailyUnits, 1)}</td></tr>
                </tbody>
              </table>
            </div>

            <h3 className="mt-8 text-base font-semibold text-primary">Calculation results</h3>
            <dl className="mt-4 grid grid-cols-2 divide-x divide-y divide-border border-y border-border">
              {[
                ["Cooling capacity", `${formatNumber(coolingTR, 1)} TR`],
                ["Running load", `${formatNumber(acLoad + fanLoad + lightLoad + inputs.otherLoad, 1)} kW`],
                ["Units / function", `${formatNumber(dailyUnits)} kWh`],
                ["Monthly units", `${formatNumber(monthlyUnits)} kWh`],
                ["Monthly energy cost", `₹${formatNumber(monthlyCost)}`],
                ["Indicative solar size", `${formatNumber(solarSize, 1)} kWp`],
              ].map(([label, value]) => <div key={label} className="min-w-0 px-3 py-4 first:pl-0 even:pr-0"><dt className="text-xs leading-relaxed text-muted-foreground">{label}</dt><dd className="mt-1 break-words font-display text-xl font-bold text-accent">{value}</dd></div>)}
            </dl>
            <p className="mt-4 text-xs leading-relaxed text-muted-foreground">Solar size assumes 30 days of potential production and that generation can be used or credited. Demand charges require a separate kVA / maximum-demand assessment.</p>
            <div className="mt-5 flex flex-wrap gap-2">
              <button type="button" onClick={copyReport} className="inline-flex items-center gap-2 rounded-md bg-primary px-4 py-3 text-sm font-semibold text-primary-foreground"><ClipboardCopy size={16} /> Copy report</button>
              <button type="button" onClick={() => window.print()} className="inline-flex items-center gap-2 rounded-md border border-border px-4 py-3 text-sm font-semibold text-primary"><Printer size={16} /> Print / Save PDF</button>
              <button type="button" onClick={resetAssessment} aria-label="Reset assessment" title="Reset assessment" className="inline-flex size-11 items-center justify-center rounded-md border border-border text-primary"><RotateCcw size={16} /></button>
            </div>
          </div>
        </div>
        <p className="mt-8 border-t border-border pt-4 text-xs leading-relaxed text-muted-foreground">Your assessment is saved only in this browser. No customer information is transmitted.</p>
      </div>
    </section>
  );
}

function AssessmentField({
  label,
  value,
  onChange,
  min = 0,
  max,
  step = 1,
}: {
  label: string;
  value: number;
  onChange: (value: number) => void;
  min?: number;
  max?: number;
  step?: number;
}) {
  return (
    <label className="block min-w-0 text-sm font-medium text-primary">
      {label}
      <input
        type="number"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(event) => onChange(Number(event.target.value) || 0)}
        className="mt-2 h-12 w-full rounded-md border border-input bg-background px-4 outline-none transition focus:border-accent focus:ring-2 focus:ring-accent/20"
      />
    </label>
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
