export type Calculation = {
  id: number;
  name: string;
  phone: string;
  units: number;
  capacity: number;
  createdAt: string;
};

export type Pricing = {
  capacityBand: number;
  total: number;
  subsidy: number;
  afterSubsidy: number;
};

export type SolarProjection = Pricing & {
  annualSavings: number;
  annualGeneration: number;
  twentyFiveYearSavings: number;
};

export const STORAGE_KEY = "aaryon-solar-calculations";

const pricingTable: Pricing[] = [
  { capacityBand: 1, total: 102000, subsidy: 30000, afterSubsidy: 72000 },
  { capacityBand: 2, total: 180000, subsidy: 60000, afterSubsidy: 120000 },
  { capacityBand: 3, total: 228000, subsidy: 78000, afterSubsidy: 150000 },
  { capacityBand: 4, total: 275000, subsidy: 78000, afterSubsidy: 197000 },
  { capacityBand: 5, total: 334500, subsidy: 78000, afterSubsidy: 256500 },
  { capacityBand: 6, total: 395500, subsidy: 78000, afterSubsidy: 317500 },
  { capacityBand: 7, total: 454000, subsidy: 78000, afterSubsidy: 376000 },
  { capacityBand: 8, total: 514200, subsidy: 78000, afterSubsidy: 436200 },
  { capacityBand: 9, total: 562900, subsidy: 78000, afterSubsidy: 484900 },
  { capacityBand: 10, total: 620000, subsidy: 78000, afterSubsidy: 542000 },
];

export function getPricing(capacity: number): Pricing {
  const capacityBand = Math.max(1, Math.ceil(capacity));
  const listedPrice = pricingTable.find((item) => item.capacityBand === capacityBand);
  if (listedPrice) return listedPrice;

  const tenKw = pricingTable[pricingTable.length - 1];
  const extraCapacity = capacityBand - tenKw.capacityBand;
  const extraKwPrice = tenKw.total - pricingTable[pricingTable.length - 2].total;
  const total = tenKw.total + extraCapacity * extraKwPrice;
  const subsidy = tenKw.subsidy;
  return { capacityBand, total, subsidy, afterSubsidy: total - subsidy };
}

export function formatCurrency(value: number) {
  return `₹${Math.round(value).toLocaleString("en-IN")}`;
}

export function getSolarProjection(capacity: number): SolarProjection {
  const pricing = getPricing(capacity);
  const annualGeneration = capacity * 120 * 12;
  const annualSavings = annualGeneration * 8;

  return {
    ...pricing,
    annualSavings,
    annualGeneration,
    twentyFiveYearSavings: annualSavings * 25,
  };
}

export function createCsv(calculations: Calculation[]) {
  const headings = "Name,Phone,Monthly units,Required capacity (kW),Submitted at,Approx. total,Government subsidy,Approx. cost after subsidy";
  const rows = calculations.map((item) => {
    const pricing = getPricing(item.capacity);
    return [
      item.name,
      item.phone,
      item.units,
      item.capacity,
      item.createdAt,
      pricing.total,
      pricing.subsidy,
      pricing.afterSubsidy,
    ].map((value) => `"${String(value).replaceAll('"', '""')}"`).join(",");
  });
  return [headings, ...rows].join("\n");
}

export function downloadCsv(calculations: Calculation[]) {
  const blob = new Blob([createCsv(calculations)], { type: "text/csv;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = "aaryon-solar-leads.csv";
  link.click();
  URL.revokeObjectURL(url);
}
