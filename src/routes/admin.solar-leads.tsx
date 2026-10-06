import { useEffect, useState } from "react";
import { createFileRoute, redirect, useNavigate } from "@tanstack/react-router";
import { Download, ExternalLink, RefreshCw, ShieldCheck } from "lucide-react";
import { Nav } from "@/components/site/Nav";
import {
  type Calculation,
  STORAGE_KEY,
  downloadCsv,
  formatCurrency,
  getPricing,
} from "@/lib/solar-calculations";

export const Route = createFileRoute("/admin/solar-leads")({
  beforeLoad: () => {
    if (typeof window !== "undefined" && window.sessionStorage.getItem("aaryon-admin-auth") !== "true") {
      throw redirect({ to: "/admin/login" });
    }
  },
  head: () => ({
    meta: [
      { title: "Saved Calculations Admin | TrueBright Energy" },
      { name: "robots", content: "noindex, nofollow" },
    ],
  }),
  component: SolarLeadsAdmin,
});

function readCalculations() {
  const stored = window.localStorage.getItem(STORAGE_KEY);
  return stored ? (JSON.parse(stored) as Calculation[]) : [];
}

function SolarLeadsAdmin() {
  const [calculations, setCalculations] = useState<Calculation[]>([]);
  const navigate = useNavigate();

  function refresh() {
    setCalculations(readCalculations());
  }

  useEffect(() => {
    refresh();
    window.addEventListener("storage", refresh);
    return () => window.removeEventListener("storage", refresh);
  }, []);

  const totalCapacity = calculations.reduce((sum, item) => sum + item.capacity, 0);
  const estimatedRevenue = calculations.reduce((sum, item) => sum + getPricing(item.capacity).afterSubsidy, 0);

  return (
    <div className="min-h-screen bg-surface">
      <Nav />
      <main className="mx-auto max-w-6xl px-4 py-10 sm:px-5 sm:py-12 md:py-16">
        <div className="flex flex-col justify-between gap-6 border-b border-border pb-8 md:flex-row md:items-end">
          <div>
            <div className="flex items-center gap-2 text-accent"><ShieldCheck size={18} /><p className="eyebrow">Internal workspace</p></div>
            <h1 className="mt-3 text-3xl font-bold md:text-5xl">Saved calculations</h1>
            <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground">Review submitted capacity estimates and download the saved calculations as a CSV for Google Sheets.</p>
          </div>
          <div className="flex flex-wrap gap-2 sm:gap-3">
            <button type="button" onClick={() => { window.sessionStorage.removeItem("aaryon-admin-auth"); void navigate({ to: "/admin/login" }); }} className="inline-flex h-11 flex-1 items-center justify-center rounded-md border border-border bg-card px-3 text-sm font-semibold text-primary transition hover:border-accent hover:text-accent sm:flex-none sm:px-4">Log out</button>
            <button type="button" onClick={refresh} className="inline-flex h-11 flex-1 items-center justify-center gap-2 rounded-md border border-border bg-card px-3 text-sm font-semibold text-primary transition hover:border-accent hover:text-accent sm:flex-none sm:px-4"><RefreshCw size={16} /> Refresh</button>
            <button type="button" onClick={() => downloadCsv(calculations)} disabled={calculations.length === 0} className="inline-flex h-11 w-full items-center justify-center gap-2 rounded-md bg-primary px-4 text-sm font-semibold text-primary-foreground transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-40 sm:w-auto"><Download size={16} /> Export CSV</button>
          </div>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          <Metric label="Leads captured" value={calculations.length.toLocaleString()} />
          <Metric label="Total estimated capacity" value={`${Math.round(totalCapacity)} kW`} />
          <Metric label="Approx. post-subsidy value" value={formatCurrency(estimatedRevenue)} />
        </div>

        <div className="mt-10 overflow-hidden rounded-xl border border-border bg-card shadow-soft">
          {calculations.length === 0 ? (
            <div className="px-6 py-16 text-center"><p className="text-lg font-semibold">No leads captured yet</p><p className="mt-2 text-sm text-muted-foreground">Completed calculator submissions will appear here automatically.</p><a href="/solar-calculator" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-accent hover:underline">Open calculator <ExternalLink size={15} /></a></div>
          ) : (
            <div className="overflow-x-auto"><table className="w-full min-w-[900px] text-left text-sm"><thead className="bg-surface text-xs uppercase tracking-wide text-muted-foreground"><tr><th className="px-5 py-4 font-semibold">Name</th><th className="px-5 py-4 font-semibold">Phone</th><th className="px-5 py-4 font-semibold">Monthly units</th><th className="px-5 py-4 font-semibold">Capacity</th><th className="px-5 py-4 font-semibold">Total</th><th className="px-5 py-4 font-semibold">Subsidy</th><th className="px-5 py-4 font-semibold">Approx. payable</th><th className="px-5 py-4 font-semibold">Submitted</th></tr></thead><tbody className="divide-y divide-border">{calculations.map((item) => { const pricing = getPricing(item.capacity); return <tr key={item.id} className="transition hover:bg-surface/70"><td className="whitespace-nowrap px-5 py-4 font-semibold">{item.name}</td><td className="whitespace-nowrap px-5 py-4 text-muted-foreground">{item.phone}</td><td className="whitespace-nowrap px-5 py-4">{item.units.toLocaleString()}</td><td className="whitespace-nowrap px-5 py-4 font-semibold text-accent">{item.capacity} kW</td><td className="whitespace-nowrap px-5 py-4">{formatCurrency(pricing.total)}</td><td className="whitespace-nowrap px-5 py-4">{formatCurrency(pricing.subsidy)}</td><td className="whitespace-nowrap px-5 py-4 font-semibold text-primary">{formatCurrency(pricing.afterSubsidy)}</td><td className="whitespace-nowrap px-5 py-4 text-xs text-muted-foreground">{new Date(item.createdAt).toLocaleString("en-IN")}</td></tr>; })}</tbody></table></div>
          )}
        </div>
        <p className="mt-5 text-xs leading-relaxed text-muted-foreground">This browser-only admin view is not an authentication boundary. Connect the shared storage helper to a protected backend before using it for production customer data.</p>
      </main>
    </div>
  );
}

function Metric({ label, value }: { label: string; value: string }) {
  return <div className="rounded-lg border border-border bg-card p-4 sm:p-5"><p className="text-xs uppercase tracking-wide text-muted-foreground">{label}</p><p className="mt-2 break-words font-display text-xl font-bold text-primary sm:text-2xl">{value}</p></div>;
}
