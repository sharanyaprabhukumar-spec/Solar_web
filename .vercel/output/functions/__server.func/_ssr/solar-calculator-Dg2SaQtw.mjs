import { i as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { _ as ArrowRight, a as RotateCcw, g as Check, m as ClipboardCopy, r as Sun, s as Printer, u as Leaf } from "../_libs/lucide-react.mjs";
import { a as getPricing, i as formatCurrency, n as STORAGE_KEY, t as Nav } from "./solar-calculations-BbTuN_-2.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/solar-calculator-Dg2SaQtw.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function SolarCalculator() {
	const [activeTool, setActiveTool] = (0, import_react.useState)("solar");
	const [name, setName] = (0, import_react.useState)("");
	const [phone, setPhone] = (0, import_react.useState)("");
	const [units, setUnits] = (0, import_react.useState)("");
	const [calculation, setCalculation] = (0, import_react.useState)(null);
	(0, import_react.useEffect)(() => {
		if (window.location.hash === "#load-assessment") setActiveTool("load");
	}, []);
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
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Nav, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "overflow-hidden bg-gradient-deep text-deep-foreground",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto grid max-w-6xl gap-8 px-4 py-14 sm:px-5 sm:py-16 md:gap-12 md:py-24 lg:grid-cols-[1fr_0.82fr] lg:items-end",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "eyebrow text-solar",
							children: "TrueBright energy tools"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
							className: "mt-5 max-w-3xl text-4xl leading-[1.05] font-bold sm:text-5xl md:text-6xl",
							children: activeTool === "solar" ? "Find the right solar capacity for your monthly usage." : "Understand your hall's load and solar potential."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-6 max-w-xl text-base leading-relaxed text-deep-foreground/75",
							children: activeTool === "solar" ? "Share your average monthly units for a practical starting point for a solar consultation." : "Estimate equipment demand, monthly energy use and indicative solar capacity from your function schedule."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							id: "load-assessment",
							role: "tablist",
							"aria-label": "Energy tools",
							className: "mt-8 inline-flex flex-wrap gap-1 rounded-lg border border-white/15 bg-white/5 p-1",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								role: "tab",
								"aria-selected": activeTool === "solar",
								onClick: () => setActiveTool("solar"),
								className: `rounded-md px-4 py-2.5 text-sm font-semibold transition ${activeTool === "solar" ? "bg-solar text-deep" : "text-deep-foreground/75 hover:text-white"}`,
								children: "Solar calculator"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								role: "tab",
								"aria-selected": activeTool === "load",
								onClick: () => setActiveTool("load"),
								className: `rounded-md px-4 py-2.5 text-sm font-semibold transition ${activeTool === "load" ? "bg-solar text-deep" : "text-deep-foreground/75 hover:text-white"}`,
								children: "Load assessment"
							})]
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
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				hidden: activeTool !== "solar",
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
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				hidden: activeTool !== "load",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HallLoadAssessment, { active: activeTool === "load" })
			})
		] })]
	});
}
var initialHallInputs = {
	days: 8,
	rate: 8,
	kwPerTon: 1.4,
	acHours: 8,
	acEquipment: [
		{
			tonnage: 4.5,
			quantity: 2
		},
		{
			tonnage: 5.5,
			quantity: 4
		},
		{
			tonnage: 17,
			quantity: 1
		}
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
	solarYield: 4
};
function HallLoadAssessment({ active }) {
	const [inputs, setInputs] = (0, import_react.useState)(initialHallInputs);
	(0, import_react.useEffect)(() => {
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
					quantity: Number(saved[`qty${index}`] ?? equipment.quantity)
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
				solarYield: Number(saved.yield ?? initialHallInputs.solarYield)
			});
		} catch {}
	}, []);
	const coolingTR = inputs.acEquipment.reduce((total, equipment) => total + equipment.tonnage * equipment.quantity, 0);
	const acLoad = coolingTR * inputs.kwPerTon;
	const fanLoad = inputs.fans * inputs.fanWatts / 1e3;
	const lightLoad = inputs.lights * inputs.lightWatts / 1e3;
	const dailyUnits = acLoad * inputs.acHours + fanLoad * inputs.fanHours + lightLoad * inputs.lightHours + inputs.otherLoad * inputs.otherHours;
	const monthlyUnits = dailyUnits * inputs.days;
	const monthlyCost = monthlyUnits * inputs.rate;
	const solarSize = monthlyUnits * Math.min(100, inputs.solarOffset) / 100 / (30 * Math.max(.1, inputs.solarYield));
	const breakdown = [
		[
			"AC",
			acLoad,
			inputs.acHours
		],
		[
			"Fans",
			fanLoad,
			inputs.fanHours
		],
		[
			"Lights",
			lightLoad,
			inputs.lightHours
		],
		[
			"Other",
			inputs.otherLoad,
			inputs.otherHours
		]
	];
	const formatNumber = (value, digits = 0) => value.toLocaleString("en-IN", { maximumFractionDigits: digits });
	function saveInputs(next) {
		setInputs(next);
		try {
			window.localStorage.setItem("tb-hall", JSON.stringify({
				days: next.days,
				rate: next.rate,
				kwtr: next.kwPerTon,
				ach: next.acHours,
				...Object.fromEntries(next.acEquipment.flatMap((equipment, index) => [[`ton${index}`, equipment.tonnage], [`qty${index}`, equipment.quantity]])),
				fans: next.fans,
				fanw: next.fanWatts,
				fanh: next.fanHours,
				lights: next.lights,
				lightw: next.lightWatts,
				lighth: next.lightHours,
				other: next.otherLoad,
				otherh: next.otherHours,
				share: next.solarOffset,
				yield: next.solarYield
			}));
		} catch {}
	}
	function updateField(field, value) {
		saveInputs({
			...inputs,
			[field]: Math.max(0, value)
		});
	}
	function updateEquipment(index, field, value) {
		const acEquipment = inputs.acEquipment.map((equipment, equipmentIndex) => equipmentIndex === index ? {
			...equipment,
			[field]: Math.max(0, value)
		} : equipment);
		saveInputs({
			...inputs,
			acEquipment
		});
	}
	function resetAssessment() {
		window.localStorage.removeItem("tb-hall");
		setInputs(initialHallInputs);
	}
	function copyReport() {
		const report = "TrueBright Electricityl Load Assessment\n" + breakdown.map(([name, load, hours]) => `${name}: ${formatNumber(load, 2)} kW x ${hours} hours = ${formatNumber(load * hours, 1)} units/function`).join("\n") + `\nCooling capacity: ${formatNumber(coolingTR, 1)} TR\nRunning load: ${formatNumber(acLoad + fanLoad + lightLoad + inputs.otherLoad, 1)} kW\nUnits/function: ${formatNumber(dailyUnits)} kWh\nMonthly units: ${formatNumber(monthlyUnits)} kWh\nMonthly energy cost: ₹${formatNumber(monthlyCost)}\nIndicative solar size: ${formatNumber(solarSize, 1)} kWp`;
		if (navigator.clipboard && window.isSecureContext) navigator.clipboard.writeText(report).then(() => window.alert("Report copied")).catch(() => window.prompt("Copy report:", report));
		else window.prompt("Copy report:", report);
	}
	if (active) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("iframe", {
		title: "TrueBright commercial solar load assessment",
		src: "/load-assessment.html",
		className: "block w-full border-0",
		style: { minHeight: "100vh" },
		onLoad: (event) => {
			const frame = event.currentTarget;
			const frameDocument = frame.contentDocument;
			if (!frameDocument) return;
			document.querySelectorAll("link[rel=\"stylesheet\"]").forEach((stylesheet) => {
				const frameStylesheet = frameDocument.createElement("link");
				frameStylesheet.rel = "stylesheet";
				frameStylesheet.href = stylesheet.href;
				frameDocument.head.append(frameStylesheet);
			});
			const theme = frameDocument.createElement("style");
			theme.textContent = `
            html, body { background: var(--surface); color: var(--deep); font-family: var(--font-sans); }
            body { overflow-x: hidden; }
            header { display: none; }
            main { max-width: 1152px; padding: 24px 20px 56px; }
            h1, h2, h3, h4 { color: var(--primary); font-family: var(--font-display); letter-spacing: -0.02em; }
            .card { border-color: var(--border); border-radius: 12px; box-shadow: var(--shadow-lift); }
            label, input, select { color: var(--foreground); }
            input, select { border-color: var(--input); border-radius: 6px; }
            input:focus, select:focus { border-color: var(--accent); box-shadow: 0 0 0 3px color-mix(in oklab, var(--accent) 18%, transparent); }
            button { border-radius: 6px; background: var(--primary); }
            button:hover { background: var(--accent); }
            button.secondary { background: var(--secondary); color: var(--secondary-foreground); }
            .note, .hint, .budget-foot { color: var(--muted-foreground); }
            .metric { border: 1px solid var(--border); border-radius: 8px; background: var(--surface); color: var(--muted-foreground); }
            .metric strong, .recommend .type, .budget-option .option-big { color: var(--accent); }
            .recommend, .budget-head, .hybrid-plan { border-color: var(--border); border-radius: 8px; background: var(--secondary); }
            .budget-option, .ac-entry, .field-row { border-color: var(--border); border-radius: 8px; }
            .budget-option.best { border-color: var(--accent); background: var(--surface); }
            .tag, .pill { background: var(--secondary); color: var(--secondary-foreground); }
            .warning { border-radius: 6px; }
            a { color: var(--accent); }
            @media (max-width: 560px) { main { padding: 12px 8px 36px; } .card { padding: 16px 14px; } }
          `;
			frameDocument.head.append(theme);
			const resizeFrame = () => {
				frame.style.height = `${frameDocument.documentElement.scrollHeight}px`;
			};
			resizeFrame();
			new ResizeObserver(resizeFrame).observe(frameDocument.documentElement);
		}
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "mx-auto max-w-6xl px-4 py-10 sm:px-5 sm:py-12 md:py-16",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "rounded-xl border border-border bg-card p-4 shadow-lift sm:p-6 md:p-9",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "eyebrow text-accent",
						children: "Electricityl load assessment"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-3 text-2xl font-bold md:text-3xl",
						children: "Build an energy profile for your venue"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-sm leading-relaxed text-muted-foreground",
						children: "Adjust your equipment quantities and operating hours to estimate demand, monthly energy use and a preliminary solar size."
					})
				] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-8 grid gap-8 lg:grid-cols-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-8",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("fieldset", {
								className: "border-t border-border pt-5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("legend", {
									className: "text-base font-semibold text-primary",
									children: "Function schedule"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-2 grid grid-cols-2 gap-4",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AssessmentField, {
										label: "Usage days / month",
										value: inputs.days,
										onChange: (value) => updateField("days", value)
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AssessmentField, {
										label: "Electricity tariff ₹/unit",
										value: inputs.rate,
										step: .1,
										onChange: (value) => updateField("rate", value)
									})]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("fieldset", {
								className: "border-t border-border pt-5",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("legend", {
										className: "text-base font-semibold text-primary",
										children: "AC equipment"
									}),
									inputs.acEquipment.map((equipment, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "mt-2 grid grid-cols-2 gap-4",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AssessmentField, {
											label: `AC tonnage ${index + 1}`,
											value: equipment.tonnage,
											step: .1,
											onChange: (value) => updateEquipment(index, "tonnage", value)
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AssessmentField, {
											label: "Quantity",
											value: equipment.quantity,
											onChange: (value) => updateEquipment(index, "quantity", value)
										})]
									}, index)),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "mt-2 grid grid-cols-2 gap-4",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AssessmentField, {
											label: "Electrical input kW/TR",
											value: inputs.kwPerTon,
											step: .1,
											onChange: (value) => updateField("kwPerTon", value)
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AssessmentField, {
											label: "AC hours / function",
											value: inputs.acHours,
											max: 24,
											onChange: (value) => updateField("acHours", Math.min(24, value))
										})]
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("fieldset", {
								className: "border-t border-border pt-5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("legend", {
									className: "text-base font-semibold text-primary",
									children: "Fans and lighting"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-2 grid grid-cols-2 gap-4",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AssessmentField, {
											label: "Fan quantity",
											value: inputs.fans,
											onChange: (value) => updateField("fans", value)
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AssessmentField, {
											label: "Fan watts each",
											value: inputs.fanWatts,
											onChange: (value) => updateField("fanWatts", value)
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AssessmentField, {
											label: "Fan hours / function",
											value: inputs.fanHours,
											onChange: (value) => updateField("fanHours", value)
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AssessmentField, {
											label: "Light quantity",
											value: inputs.lights,
											onChange: (value) => updateField("lights", value)
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AssessmentField, {
											label: "Light watts each",
											value: inputs.lightWatts,
											onChange: (value) => updateField("lightWatts", value)
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AssessmentField, {
											label: "Light hours / function",
											value: inputs.lightHours,
											onChange: (value) => updateField("lightHours", value)
										})
									]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("fieldset", {
								className: "border-t border-border pt-5",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("legend", {
										className: "text-base font-semibold text-primary",
										children: "Other loads and solar assumptions"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "mt-2 grid grid-cols-2 gap-4",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AssessmentField, {
												label: "Other loads (kW)",
												value: inputs.otherLoad,
												step: .1,
												onChange: (value) => updateField("otherLoad", value)
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AssessmentField, {
												label: "Other hours / function",
												value: inputs.otherHours,
												onChange: (value) => updateField("otherHours", value)
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AssessmentField, {
												label: "Target energy offset (%)",
												value: inputs.solarOffset,
												max: 100,
												onChange: (value) => updateField("solarOffset", Math.min(100, value))
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AssessmentField, {
												label: "Solar yield (kWh/kWp/day)",
												value: inputs.solarYield,
												min: .1,
												step: .1,
												onChange: (value) => updateField("solarYield", Math.max(.1, value))
											})
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-3 text-xs leading-relaxed text-muted-foreground",
										children: "Solar sizing is an energy-based screening estimate. Confirm daytime load, roof space, export policy and meter arrangement before proposing capacity."
									})
								]
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "border-t border-border pt-5 lg:border-l lg:border-t-0 lg:pl-8",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "text-base font-semibold text-primary",
								children: "Load breakdown"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-4 overflow-x-auto",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
									className: "w-full min-w-[420px] text-sm",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
										className: "border-b border-border text-left text-primary",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
												className: "py-3 pr-3",
												children: "Equipment"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
												className: "py-3 pr-3",
												children: "Load (kW)"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
												className: "py-3 pr-3",
												children: "Hours"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
												className: "py-3 text-right",
												children: "Units/day"
											})
										]
									}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tbody", { children: [breakdown.map(([name, load, hours]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
										className: "border-b border-border",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
												className: "py-3 pr-3",
												children: name
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
												className: "py-3 pr-3",
												children: formatNumber(load, 2)
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
												className: "py-3 pr-3",
												children: formatNumber(hours, 1)
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
												className: "py-3 text-right",
												children: formatNumber(load * hours, 1)
											})
										]
									}, name)), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
										className: "font-semibold text-primary",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
												className: "py-3 pr-3 text-left",
												children: "Total"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
												className: "py-3 pr-3",
												children: formatNumber(acLoad + fanLoad + lightLoad + inputs.otherLoad, 2)
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
												className: "py-3 pr-3",
												children: "-"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
												className: "py-3 text-right",
												children: formatNumber(dailyUnits, 1)
											})
										]
									})] })]
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "mt-8 text-base font-semibold text-primary",
								children: "Calculation results"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dl", {
								className: "mt-4 grid grid-cols-2 divide-x divide-y divide-border border-y border-border",
								children: [
									["Cooling capacity", `${formatNumber(coolingTR, 1)} TR`],
									["Running load", `${formatNumber(acLoad + fanLoad + lightLoad + inputs.otherLoad, 1)} kW`],
									["Units / function", `${formatNumber(dailyUnits)} kWh`],
									["Monthly units", `${formatNumber(monthlyUnits)} kWh`],
									["Monthly energy cost", `₹${formatNumber(monthlyCost)}`],
									["Indicative solar size", `${formatNumber(solarSize, 1)} kWp`]
								].map(([label, value]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "min-w-0 px-3 py-4 first:pl-0 even:pr-0",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
										className: "text-xs leading-relaxed text-muted-foreground",
										children: label
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
										className: "mt-1 break-words font-display text-xl font-bold text-accent",
										children: value
									})]
								}, label))
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-4 text-xs leading-relaxed text-muted-foreground",
								children: "Solar size assumes 30 days of potential production and that generation can be used or credited. Demand charges require a separate kVA / maximum-demand assessment."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-5 flex flex-wrap gap-2",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
										type: "button",
										onClick: copyReport,
										className: "inline-flex items-center gap-2 rounded-md bg-primary px-4 py-3 text-sm font-semibold text-primary-foreground",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ClipboardCopy, { size: 16 }), " Copy report"]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
										type: "button",
										onClick: () => window.print(),
										className: "inline-flex items-center gap-2 rounded-md border border-border px-4 py-3 text-sm font-semibold text-primary",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Printer, { size: 16 }), " Print / Save PDF"]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										type: "button",
										onClick: resetAssessment,
										"aria-label": "Reset assessment",
										title: "Reset assessment",
										className: "inline-flex size-11 items-center justify-center rounded-md border border-border text-primary",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RotateCcw, { size: 16 })
									})
								]
							})
						]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-8 border-t border-border pt-4 text-xs leading-relaxed text-muted-foreground",
					children: "Your assessment is saved only in this browser. No customer information is transmitted."
				})
			]
		})
	});
}
function AssessmentField({ label, value, onChange, min = 0, max, step = 1 }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
		className: "block min-w-0 text-sm font-medium text-primary",
		children: [label, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
			type: "number",
			min,
			max,
			step,
			value,
			onChange: (event) => onChange(Number(event.target.value) || 0),
			className: "mt-2 h-12 w-full rounded-md border border-input bg-background px-4 outline-none transition focus:border-accent focus:ring-2 focus:ring-accent/20"
		})]
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
