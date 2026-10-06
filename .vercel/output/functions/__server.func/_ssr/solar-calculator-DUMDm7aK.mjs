import { i as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { a as RotateCcw, h as ArrowRight, l as Leaf, m as Check, r as Sun } from "../_libs/lucide-react.mjs";
import { a as getPricing, i as formatCurrency, n as STORAGE_KEY, t as Nav } from "./solar-calculations-C6qVRab0.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/solar-calculator-DUMDm7aK.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function SolarCalculator() {
	const [name, setName] = (0, import_react.useState)("");
	const [phone, setPhone] = (0, import_react.useState)("");
	const [units, setUnits] = (0, import_react.useState)("");
	const [calculation, setCalculation] = (0, import_react.useState)(null);
	function handleSubmit(event) {
		event.preventDefault();
		const monthlyUnits = Number(units);
		const capacity = Math.round(monthlyUnits / 120);
		const result = {
			id: Date.now(),
			name: name.trim(),
			phone: phone.trim(),
			units: monthlyUnits,
			capacity,
			createdAt: (/* @__PURE__ */ new Date()).toISOString()
		};
		const stored = window.localStorage.getItem(STORAGE_KEY);
		const savedCalculations = stored ? JSON.parse(stored) : [];
		window.localStorage.setItem(STORAGE_KEY, JSON.stringify([result, ...savedCalculations].slice(0, 20)));
		setCalculation(result);
	}
	function resetForm() {
		setCalculation(null);
		setName("");
		setPhone("");
		setUnits("");
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-surface",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Nav, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "overflow-hidden bg-gradient-deep text-deep-foreground",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto grid max-w-6xl gap-8 px-4 py-14 sm:px-5 sm:py-16 md:gap-12 md:py-24 lg:grid-cols-[1fr_0.82fr] lg:items-end",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "eyebrow text-solar",
						children: "Solar sizing tool · 60 seconds"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "mt-5 max-w-3xl text-4xl leading-[1.05] font-bold sm:text-5xl md:text-6xl",
						children: "Find the right solar capacity for your monthly usage."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-6 max-w-xl text-base leading-relaxed text-deep-foreground/75",
						children: "Share two details and your average monthly units. We'll turn your bill into a practical starting point for a solar consultation."
					})
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-4 border-t border-deep-foreground/15 pt-6 lg:border-t-0 lg:border-l lg:pl-8",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid h-12 w-12 shrink-0 place-items-center rounded-full bg-solar text-deep",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sun, { size: 22 })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm leading-relaxed text-deep-foreground/75",
						children: "A quick estimate based on the TrueBright rule of thumb: monthly units divided by 120."
					})]
				})]
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "mx-auto max-w-3xl px-4 py-10 sm:px-5 sm:py-12 md:py-16",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "rounded-xl border border-border bg-card p-4 shadow-lift sm:p-6 md:p-9",
				children: calculation ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ThankYou, {
					calculation,
					onReset: resetForm
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-start justify-between gap-4 sm:gap-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "eyebrow text-accent",
							children: "Step 1 of 1"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-3 text-2xl font-bold md:text-3xl",
							children: "Tell us about your energy use"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 text-sm leading-relaxed text-muted-foreground",
							children: "Your details stay on this device and are ready to export for your team."
						})
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Leaf, {
						className: "hidden shrink-0 text-accent sm:block",
						size: 30
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
					onSubmit: handleSubmit,
					className: "mt-8 space-y-5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
							className: "block text-sm font-medium",
							children: ["Name", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								required: true,
								value: name,
								onChange: (event) => setName(event.target.value),
								placeholder: "Your full name",
								className: "mt-2 h-12 w-full rounded-md border border-input bg-background px-4 outline-none transition focus:border-accent focus:ring-2 focus:ring-accent/20"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
							className: "block text-sm font-medium",
							children: ["Phone number", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								required: true,
								type: "tel",
								pattern: "[0-9+() -]{8,}",
								value: phone,
								onChange: (event) => setPhone(event.target.value),
								placeholder: "+91 98765 43210",
								className: "mt-2 h-12 w-full rounded-md border border-input bg-background px-4 outline-none transition focus:border-accent focus:ring-2 focus:ring-accent/20"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
							className: "block text-sm font-medium",
							children: ["Average monthly electricity units", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								required: true,
								min: "1",
								step: "1",
								type: "number",
								value: units,
								onChange: (event) => setUnits(event.target.value),
								placeholder: "Example: 600",
								className: "mt-2 h-12 w-full rounded-md border border-input bg-background px-4 outline-none transition focus:border-accent focus:ring-2 focus:ring-accent/20"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "submit",
							className: "bg-gradient-solar inline-flex h-12 w-full items-center justify-center gap-2 rounded-md px-5 text-sm font-semibold text-deep shadow-soft transition hover:opacity-90",
							children: ["Calculate my solar capacity ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { size: 17 })]
						})
					]
				})] })
			})
		})] })]
	});
}
function ThankYou({ calculation, onReset }) {
	const pricing = getPricing(calculation.capacity);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "py-6 md:py-10",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid h-12 w-12 place-items-center rounded-full bg-accent text-accent-foreground",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { size: 24 })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "eyebrow mt-8 text-accent",
				children: "Estimate ready"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
				className: "mt-3 break-words text-3xl font-bold",
				children: [
					"Thanks, ",
					calculation.name,
					"."
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 max-w-lg text-sm leading-relaxed text-muted-foreground",
				children: "Your estimate has been saved. TrueBright Energy can refine this number after a quick site assessment."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-8 border-y border-border py-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm text-muted-foreground",
						children: "Recommended starting capacity"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-2 font-display text-5xl font-bold text-accent",
						children: [
							calculation.capacity,
							" ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-2xl",
								children: "kW"
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-3 text-xs text-muted-foreground",
						children: [
							calculation.units.toLocaleString(),
							" monthly units ÷ 120 · priced at the ",
							pricing.capacityBand,
							" kW band"
						]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-6 grid gap-3 sm:grid-cols-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-md bg-surface p-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs text-muted-foreground",
							children: "Panel system"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 break-words font-display text-lg font-bold",
							children: formatCurrency(pricing.total)
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-md bg-surface p-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs text-muted-foreground",
							children: "Govt. subsidy"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-1 break-words font-display text-lg font-bold text-accent",
							children: ["-", formatCurrency(pricing.subsidy)]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-md bg-primary p-4 text-primary-foreground",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs text-primary-foreground/70",
							children: "Approx. you pay"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 break-words font-display text-lg font-bold",
							children: formatCurrency(pricing.afterSubsidy)
						})]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-4 text-xs leading-relaxed text-muted-foreground",
				children: "Estimate based on the supplied mono PERC price list. Final pricing can vary with roof structure, electrical work, installation and approvals."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
				type: "button",
				onClick: onReset,
				className: "mt-7 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-accent",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RotateCcw, { size: 16 }), " Run another estimate"]
			})
		]
	});
}
//#endregion
export { SolarCalculator as component };
