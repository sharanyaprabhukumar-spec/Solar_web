import { i as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { s as Menu, t as X } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/solar-calculations-C6qVRab0.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var TrueBright_Energy_Solutions_Logo_default = "/assets/TrueBright%20Energy%20Solutions%20Logo-BbbfaLEJ.png";
var links = [
	{
		label: "Home",
		href: "/#top"
	},
	{
		label: "Why TrueBright",
		href: "/#trust"
	},
	{
		label: "Our services",
		href: "/#services"
	},
	{
		label: "Contact",
		href: "/#contact"
	}
];
function Nav() {
	const [menuOpen, setMenuOpen] = (0, import_react.useState)(false);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
		className: "sticky top-0 z-50 border-b border-border/60 bg-background/90 backdrop-blur",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
			className: "mx-auto flex min-h-20 max-w-6xl items-center justify-between gap-3 px-4 py-2 sm:px-5 md:min-h-24 md:py-3",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: "/#top",
					className: "flex min-w-0 items-center",
					onClick: () => setMenuOpen(false),
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: TrueBright_Energy_Solutions_Logo_default,
						alt: "TrueBright Energy Solutions",
						width: 220,
						height: 148,
						className: "h-14 w-auto object-contain sm:h-16 md:h-20"
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					"aria-expanded": menuOpen,
					"aria-controls": "primary-navigation",
					"aria-label": menuOpen ? "Close navigation menu" : "Open navigation menu",
					onClick: () => setMenuOpen((open) => !open),
					className: "inline-flex size-10 shrink-0 items-center justify-center rounded-md border border-border text-primary md:hidden",
					children: menuOpen ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { size: 20 }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { size: 20 })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					id: "primary-navigation",
					className: `${menuOpen ? "flex" : "hidden"} absolute inset-x-0 top-full flex-col gap-1 border-b border-border bg-background px-4 py-3 shadow-soft md:static md:flex md:flex-row md:items-center md:justify-center md:gap-8 md:border-0 md:bg-transparent md:p-0 md:shadow-none`,
					children: links.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: l.href,
						onClick: () => setMenuOpen(false),
						className: "rounded-md px-3 py-3 text-sm text-muted-foreground transition-colors hover:bg-surface hover:text-accent md:px-0 md:py-2 md:hover:bg-transparent",
						children: l.label
					}, l.href))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: "tel:+919150864777",
					className: "hidden shrink-0 rounded-md bg-primary px-3 py-2 text-xs font-medium text-primary-foreground transition-opacity hover:opacity-90 sm:inline-flex sm:px-4 sm:text-sm",
					children: "+91 91508 64777"
				})
			]
		})
	});
}
var STORAGE_KEY = "aaryon-solar-calculations";
var pricingTable = [
	{
		capacityBand: 1,
		total: 102e3,
		subsidy: 3e4,
		afterSubsidy: 72e3
	},
	{
		capacityBand: 2,
		total: 18e4,
		subsidy: 6e4,
		afterSubsidy: 12e4
	},
	{
		capacityBand: 3,
		total: 228e3,
		subsidy: 78e3,
		afterSubsidy: 15e4
	},
	{
		capacityBand: 4,
		total: 275e3,
		subsidy: 78e3,
		afterSubsidy: 197e3
	},
	{
		capacityBand: 5,
		total: 334500,
		subsidy: 78e3,
		afterSubsidy: 256500
	},
	{
		capacityBand: 6,
		total: 395500,
		subsidy: 78e3,
		afterSubsidy: 317500
	},
	{
		capacityBand: 7,
		total: 454e3,
		subsidy: 78e3,
		afterSubsidy: 376e3
	},
	{
		capacityBand: 8,
		total: 514200,
		subsidy: 78e3,
		afterSubsidy: 436200
	},
	{
		capacityBand: 9,
		total: 562900,
		subsidy: 78e3,
		afterSubsidy: 484900
	},
	{
		capacityBand: 10,
		total: 62e4,
		subsidy: 78e3,
		afterSubsidy: 542e3
	}
];
function getPricing(capacity) {
	const capacityBand = Math.max(1, Math.ceil(capacity));
	const listedPrice = pricingTable.find((item) => item.capacityBand === capacityBand);
	if (listedPrice) return listedPrice;
	const tenKw = pricingTable[pricingTable.length - 1];
	const extraCapacity = capacityBand - tenKw.capacityBand;
	const extraKwPrice = tenKw.total - pricingTable[pricingTable.length - 2].total;
	const total = tenKw.total + extraCapacity * extraKwPrice;
	const subsidy = tenKw.subsidy;
	return {
		capacityBand,
		total,
		subsidy,
		afterSubsidy: total - subsidy
	};
}
function formatCurrency(value) {
	return `₹${Math.round(value).toLocaleString("en-IN")}`;
}
function getSolarProjection(capacity) {
	const pricing = getPricing(capacity);
	const annualGeneration = capacity * 120 * 12;
	const annualSavings = annualGeneration * 8;
	return {
		...pricing,
		annualSavings,
		annualGeneration,
		twentyFiveYearSavings: annualSavings * 25
	};
}
function createCsv(calculations) {
	return ["Name,Phone,Monthly units,Required capacity (kW),Submitted at,Approx. total,Government subsidy,Approx. cost after subsidy", ...calculations.map((item) => {
		const pricing = getPricing(item.capacity);
		return [
			item.name,
			item.phone,
			item.units,
			item.capacity,
			item.createdAt,
			pricing.total,
			pricing.subsidy,
			pricing.afterSubsidy
		].map((value) => `"${String(value).replaceAll("\"", "\"\"")}"`).join(",");
	})].join("\n");
}
function downloadCsv(calculations) {
	const blob = new Blob([createCsv(calculations)], { type: "text/csv;charset=utf-8" });
	const url = URL.createObjectURL(blob);
	const link = document.createElement("a");
	link.href = url;
	link.download = "aaryon-solar-leads.csv";
	link.click();
	URL.revokeObjectURL(url);
}
//#endregion
export { getPricing as a, formatCurrency as i, STORAGE_KEY as n, getSolarProjection as o, downloadCsv as r, Nav as t };
