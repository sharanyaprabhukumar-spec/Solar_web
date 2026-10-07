import { i as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react, t as QueryClientProvider } from "../_libs/react+tanstack__react-query.mjs";
import { _ as useRouter, c as HeadContent, d as Outlet, g as useNavigate, h as Link, k as redirect, m as createRootRouteWithContext, p as createFileRoute, s as Scripts, u as createRouter } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as RotateCcw, c as LockKeyhole, d as ExternalLink, f as Download, h as ArrowRight, i as ShieldCheck, l as Leaf, m as Check, n as Wrench, o as RefreshCw, p as ChevronDown, r as Sun, s as Menu, t as X, u as IndianRupee } from "../_libs/lucide-react.mjs";
import { t as QueryClient } from "../_libs/tanstack__query-core.mjs";
//#region src/styles.css?transform-only
var import_react = /* @__PURE__ */ __toESM(require_react(), 1);
//#endregion
//#region src/styles.css?url
var styles_default = "/assets/styles-LTMFz0Ws.css";
//#endregion
//#region src/lib/lovable-error-reporting.ts
function reportLovableError(error, context = {}) {
	if (typeof window === "undefined") return;
	window.__lovableEvents?.captureException?.(error, {
		source: "react_error_boundary",
		route: window.location.pathname,
		...context
	}, {
		mechanism: "react_error_boundary",
		handled: false,
		severity: "error"
	});
	const message = error instanceof Response ? `Response ${error.status}${error.url ? ` at ${error.url}` : ""}` : error instanceof Error ? error.message : String(error);
	const stack = error instanceof Error ? error.stack : void 0;
	window.__lovableReportRuntimeError?.({
		message,
		...stack !== void 0 && { stack },
		filename: window.location.pathname
	});
}
//#endregion
//#region src/routes/__root.tsx
var import_jsx_runtime = require_jsx_runtime();
function NotFoundComponent() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-7xl font-bold text-foreground",
					children: "404"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-4 text-xl font-semibold text-foreground",
					children: "Page not found"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "The page you're looking for doesn't exist or has been moved."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Go home"
					})
				})
			]
		})
	});
}
function ErrorComponent({ error, reset }) {
	console.error(error);
	const router = useRouter();
	(0, import_react.useEffect)(() => {
		reportLovableError(error, { boundary: "tanstack_root_error_component" });
	}, [error]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-xl font-semibold tracking-tight text-foreground",
					children: "This page didn't load"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "Something went wrong on our end. You can try refreshing or head back home."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 flex flex-wrap justify-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => {
							router.invalidate();
							reset();
						},
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Try again"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "/",
						className: "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent",
						children: "Go home"
					})]
				})
			]
		})
	});
}
var Route$4 = createRootRouteWithContext()({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: "Lovable App" },
			{
				name: "description",
				content: "Lovable Generated Project"
			},
			{
				name: "author",
				content: "Lovable"
			},
			{
				property: "og:title",
				content: "Lovable App"
			},
			{
				property: "og:description",
				content: "Lovable Generated Project"
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			},
			{
				name: "twitter:site",
				content: "@Lovable"
			}
		],
		links: [
			{
				rel: "preconnect",
				href: "https://fonts.googleapis.com"
			},
			{
				rel: "preconnect",
				href: "https://fonts.gstatic.com",
				crossOrigin: "anonymous"
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;600;700&family=DM+Sans:wght@400;500;600&display=swap"
			},
			{
				rel: "stylesheet",
				href: styles_default
			},
			{
				rel: "icon",
				href: "/favicon.png",
				type: "image/png"
			}
		]
	}),
	shellComponent: RootShell,
	component: RootComponent,
	notFoundComponent: NotFoundComponent,
	errorComponent: ErrorComponent
});
function RootShell({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "en",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("head", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", { children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})] })]
	});
}
function RootComponent() {
	const { queryClient } = Route$4.useRouteContext();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(QueryClientProvider, {
		client: queryClient,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {})
	});
}
//#endregion
//#region src/assets/TrueBright Energy Solutions Logo.png
var TrueBright_Energy_Solutions_Logo_default = "/assets/TrueBright%20Energy%20Solutions%20Logo-BbbfaLEJ.png";
//#endregion
//#region src/components/site/Nav.tsx
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
//#endregion
//#region src/assets/hero-rooftop-solar.jpg
var hero_rooftop_solar_default = "/assets/hero-rooftop-solar-CIqKA7qp.jpg";
//#endregion
//#region src/assets/svc-rooftop.jpg
var svc_rooftop_default = "/assets/svc-rooftop-CPdp4z4v.jpg";
//#endregion
//#region src/assets/svc-groundmount.jpg
var svc_groundmount_default = "/assets/svc-groundmount-C3FV8lBu.jpg";
//#endregion
//#region src/assets/svc-pump.jpg
var svc_pump_default = "/assets/svc-pump-JhNHVJxO.jpg";
//#endregion
//#region src/assets/svc-om.jpg
var svc_om_default = "/assets/svc-om-CbfkFWdh.jpg";
//#endregion
//#region src/assets/svc-consult.jpg
var svc_consult_default = "/assets/svc-consult-bqh-mHF7.jpg";
//#endregion
//#region src/assets/sys-ongrid.jpg
var sys_ongrid_default = "/assets/sys-ongrid-Cd_xkBQf.jpg";
//#endregion
//#region src/assets/sys-offgrid.jpg
var sys_offgrid_default = "/assets/sys-offgrid-WUphgwLD.jpg";
//#endregion
//#region src/assets/sys-hybrid.jpg
var sys_hybrid_default = "/assets/sys-hybrid-7y_SH-4T.jpg";
//#endregion
//#region src/lib/solar-calculations.ts
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
//#region src/components/site/Sections.tsx
var comparisonCapacities = [
	3,
	4,
	5,
	10
];
var services = [
	[
		"Rooftop Solar Solutions",
		"On-grid, off-grid and hybrid rooftop systems for homes, businesses and factories, engineered around your roof and load profile.",
		svc_rooftop_default
	],
	[
		"Ground Mount Solar Solutions",
		"Utility-style ground-mounted plants with structural design, civil works and full grid integration.",
		svc_groundmount_default
	],
	[
		"Solar Water Pump Solutions",
		"Solar-powered pumping for agriculture and remote sites, delivering reliable irrigation without diesel dependence.",
		svc_pump_default
	],
	[
		"Operations & Maintenance",
		"Scheduled cleaning, performance monitoring and preventive maintenance so your plant keeps generating at design yield.",
		svc_om_default
	],
	[
		"Energy Consulting & Audit",
		"Energy audits, load studies and savings modelling to right-size your system and shorten payback.",
		svc_consult_default
	]
];
var systemTypes = [
	[
		"On-Grid Solar",
		"Reduce electricity bills, benefit from net metering and export excess power to the grid.",
		sys_ongrid_default
	],
	[
		"Off-Grid Solar",
		"Stay independent with battery-backed power for remote locations and uninterrupted essential loads.",
		sys_offgrid_default
	],
	[
		"Hybrid Solar",
		"Combine solar, battery and grid power for maximum savings, backup and energy independence.",
		sys_hybrid_default
	]
];
var trustPoints = [
	[
		"Promised solar savings",
		"TrueBright helps you choose the right system and backs your solar savings with a clear, transparent promise.",
		IndianRupee
	],
	[
		"Professional Solar installation",
		"Installation, subsidy support and service are handled directly by our team.",
		Wrench
	],
	[
		"After-sales Maintenance Support",
		"Regular proactive maintenance keeps your system healthy and your generation steady for years.",
		ShieldCheck
	]
];
var faqs = [
	["What is a rooftop solar system?", "Solar panels installed on your roof convert sunlight into electricity for your home or business. A grid-connected system can export excess power and reduce the electricity you buy from the grid."],
	["How much can I save with solar?", "Your savings depend on your bill, roof, system size and local tariff. We use your actual usage to prepare a transparent estimate before recommending a system."],
	["Do I need to pay everything upfront?", "We can help you compare an upfront purchase with available financing options. The right choice depends on your monthly bill and savings goal."],
	["How long does installation take?", "Most rooftop systems are installed in a few days once the design and approvals are complete. We manage the process and keep you updated at every step."],
	["Will my solar system work during a power cut?", "A standard on-grid system switches off during a grid outage for safety. Add battery backup with a hybrid system if uninterrupted power is important for you."]
];
function Hero() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "top",
		className: "overflow-hidden bg-surface",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto grid max-w-7xl gap-10 px-4 pb-6 pt-10 sm:px-6 sm:pb-8 sm:pt-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-16 lg:pb-10 lg:pt-16",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative z-10",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "eyebrow text-accent",
						children: "Switch to solar at Zero Investment"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
						className: "mt-5 max-w-2xl text-5xl leading-[0.98] font-bold text-primary sm:text-6xl lg:text-7xl",
						children: ["Power your home. ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-accent",
							children: "Own your savings."
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground",
						children: "Install your solar system today with convenient EMI options. Government subsidy can help lower your solar investment, while your system helps to reduce the electricity bill. Choose TrueBright Energy and save up to ₹78,000."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-8 flex flex-wrap items-center gap-4",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: "tel:+919150864777",
							className: "inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-lift transition hover:bg-primary/90",
							children: ["Call +91 91508 64777 ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { size: 17 })]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-10 flex flex-wrap gap-3 border-t border-primary/10 pt-6 text-sm",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "rounded-full border border-primary/10 bg-white px-4 py-2 font-semibold text-primary shadow-sm",
								children: "Save up to ₹78,000"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "rounded-full border border-primary/10 bg-white px-4 py-2 font-semibold text-primary shadow-sm",
								children: "10000+ happy customers"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "rounded-full border border-primary/10 bg-white px-4 py-2 font-semibold text-primary shadow-sm",
								children: "Serving Tamil Nadu"
							})
						]
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -left-5 -top-5 hidden size-24 rounded-full border-[14px] border-solar/40 lg:block" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: hero_rooftop_solar_default,
						alt: "Solar panels on a home rooftop",
						width: 1600,
						height: 1008,
						className: "relative h-[390px] w-full rounded-[2rem] object-cover shadow-lift sm:h-[500px]"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "absolute inset-x-4 bottom-4 rounded-2xl border border-white/60 bg-white/90 p-4 shadow-lift backdrop-blur-sm sm:inset-x-6 sm:bottom-6 sm:p-5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mb-3 flex items-center gap-2 text-accent",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sun, {
								size: 17,
								fill: "currentColor"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-xs font-bold uppercase tracking-wide",
								children: "TrueBright in numbers"
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid grid-cols-2 gap-x-4 gap-y-3 sm:grid-cols-5",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Metric$1, {
									value: "12+ MW",
									label: "power installed"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Metric$1, {
									value: "1,200+",
									label: "homes powered"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Metric$1, {
									value: "300+",
									label: "commercials powered"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Metric$1, {
									value: "16 yrs",
									label: "solar experience"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Metric$1, {
									value: "100%",
									label: "end-to-end care"
								})
							]
						})]
					})
				]
			})]
		})
	});
}
function Services() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "trust",
		className: "bg-primary text-white",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:py-24",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "max-w-2xl",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "eyebrow text-solar",
					children: "Why you can trust TrueBright Energy"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-4 text-4xl leading-tight font-bold md:text-5xl",
					children: "Solar savings you can trust, with support that stays."
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-12 grid gap-x-8 gap-y-10 sm:grid-cols-3",
				children: trustPoints.map(([title, copy, Icon]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
					className: "border-t border-white/20 pt-5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
							className: "text-solar",
							size: 24
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "mt-5 text-lg font-semibold",
							children: title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 text-sm leading-relaxed text-white/65",
							children: copy
						})
					]
				}, title))
			})]
		})
	});
}
function OurServices() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "services",
		className: "border-y border-border bg-surface",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:py-24",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "eyebrow text-accent",
				children: "Our services"
			}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-6",
				children: services.map(([title, copy, image], index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
					className: `overflow-hidden rounded-2xl border border-border bg-card shadow-soft lg:col-span-2 ${index === 3 ? "lg:col-start-2" : index === 4 ? "lg:col-start-4" : ""}`,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: image,
						alt: "",
						className: "h-44 w-full object-cover"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "p-5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "text-xl font-bold text-primary",
							children: title
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 text-sm leading-relaxed text-muted-foreground",
							children: copy
						})]
					})]
				}, title))
			})]
		})
	});
}
function SystemTypes() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "system-types",
		className: "border-b border-border bg-background",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:py-24",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "max-w-2xl",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "eyebrow text-accent",
					children: "System types"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-4 text-4xl leading-tight font-bold text-primary md:text-5xl",
					children: "On-grid, off-grid or hybrid."
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-10 grid gap-5 md:grid-cols-3",
				children: systemTypes.map(([title, copy, image]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
					className: "overflow-hidden rounded-2xl bg-primary text-white shadow-lift",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: image,
						alt: "",
						className: "h-48 w-full object-cover"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "p-6",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "text-2xl font-bold",
							children: title
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 text-sm leading-relaxed text-white/70",
							children: copy
						})]
					})]
				}, title))
			})]
		})
	});
}
function Systems() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "goodzero",
		className: "bg-surface",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:py-24",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "eyebrow text-accent",
						children: "Introducing TrueBright Care"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-4 text-4xl leading-tight font-bold text-primary md:text-5xl",
						children: "Your solar system, cared for."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-5 max-w-md leading-relaxed text-muted-foreground",
						children: "Solar is a long-term investment. Our care promise keeps your system generating reliably, without the stress of chasing service."
					})
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid gap-3 sm:grid-cols-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CareItem, {
							title: "Performance monitoring",
							copy: "Know how your plant is performing with regular checks."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CareItem, {
							title: "Repair support",
							copy: "Clear help when you need it, from a team that knows your system."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CareItem, {
							title: "Proactive maintenance",
							copy: "Planned cleaning and inspections for steady generation."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CareItem, {
							title: "Transparent advice",
							copy: "No confusing jargon. Just practical answers and honest guidance."
						})
					]
				})]
			})
		})
	});
}
function CareItem({ title, copy }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-xl border border-border bg-card p-5 shadow-soft",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, {
				size: 18,
				className: "text-accent"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
				className: "mt-6 font-semibold text-primary",
				children: title
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 text-sm leading-relaxed text-muted-foreground",
				children: copy
			})
		]
	});
}
function Metric$1({ value, label }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
		className: "font-display text-2xl font-bold text-primary",
		children: value
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
		className: "mt-1 text-xs text-muted-foreground",
		children: label
	})] });
}
function YearlySavingsOptions() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "border-y border-border bg-surface px-4 py-14 sm:px-5 sm:py-16 md:py-20",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-6xl",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "max-w-2xl",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "eyebrow text-accent",
							children: "Plan your solar investment"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-3 text-3xl font-bold text-primary md:text-4xl",
							children: "Yearly savings and 25-year savings"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 text-sm leading-relaxed text-muted-foreground",
							children: "Compare popular system sizes using the current TrueBright price list after subsidy and see the estimated savings over one year and 25 years."
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4",
					children: comparisonCapacities.map((capacity) => {
						const projection = getSolarProjection(capacity);
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
							className: "rounded-xl border border-border bg-card p-5 shadow-soft",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-baseline justify-between gap-3 border-b border-border pb-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
									className: "text-2xl font-bold text-primary",
									children: [capacity, " kW"]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-xs font-semibold uppercase tracking-wide text-accent",
									children: "Solar plan"
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
								className: "mt-5 space-y-4 text-sm",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center justify-between gap-3",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
											className: "text-muted-foreground",
											children: "After subsidy"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
											className: "font-semibold text-primary",
											children: formatCurrency(projection.afterSubsidy)
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center justify-between gap-3",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
											className: "text-muted-foreground",
											children: "Yearly savings"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dd", {
											className: "font-semibold text-primary",
											children: [formatCurrency(projection.annualSavings), " / yr"]
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center justify-between gap-3",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
											className: "text-muted-foreground",
											children: "25-year savings"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
											className: "font-semibold text-accent",
											children: formatCurrency(projection.twentyFiveYearSavings)
										})]
									})
								]
							})]
						}, capacity);
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-5 text-xs leading-relaxed text-muted-foreground",
					children: "Savings estimate assumes 120 units generated per kW each month and ₹8 per unit electricity value. Actual generation, tariff and savings vary by site."
				})
			]
		})
	});
}
function Contact() {
	const [open, setOpen] = (0, import_react.useState)(0);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "faqs",
		className: "mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20 lg:py-24",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "eyebrow text-accent",
				children: "Frequently asked questions"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mt-4 text-4xl font-bold text-primary md:text-5xl",
				children: "All your solar questions, answered."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-9 divide-y divide-border border-y border-border",
				children: faqs.map(([question, answer], index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					onClick: () => setOpen(open === index ? -1 : index),
					className: "flex w-full items-center justify-between gap-4 py-5 text-left font-semibold text-primary",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: question }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, {
						className: `shrink-0 transition-transform ${open === index ? "rotate-180" : ""}`,
						size: 19
					})]
				}), open === index && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "max-w-3xl pb-5 pr-8 text-sm leading-relaxed text-muted-foreground",
					children: answer
				})] }, question))
			})
		]
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "contact",
		className: "bg-solar",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto grid max-w-7xl gap-8 px-4 py-14 sm:px-6 lg:grid-cols-[1fr_auto] lg:items-center lg:py-20",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "eyebrow text-primary/70",
					children: "Start your solar journey"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-3 max-w-2xl text-4xl font-bold text-primary md:text-5xl",
					children: "Ready to make your electricity bill smaller?"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 max-w-xl text-primary/70",
					children: "Tell us a little about your roof and your monthly bill. We will take it from there."
				})
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-wrap gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
					href: "/solar-calculator",
					className: "inline-flex items-center gap-2 rounded-md bg-primary px-5 py-3.5 text-sm font-semibold text-white",
					children: ["Calculate savings ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { size: 16 })]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: "tel:+919150864777",
					className: "inline-flex items-center gap-2 rounded-md border border-primary/25 px-5 py-3.5 text-sm font-semibold text-primary",
					children: "Call us"
				})]
			})]
		})
	})] });
}
function Footer() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
		className: "bg-primary text-white",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-[1.4fr_1fr_1fr] lg:py-16",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "max-w-xs text-sm leading-relaxed text-white/60",
					children: "Clean energy solutions for homes, businesses and a more resilient Tamil Nadu."
				}) }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FooterColumn, {
					title: "Explore",
					links: [
						"Why TrueBright",
						"FAQs",
						"Solar calculator"
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm font-semibold text-solar",
						children: "Contact us"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "tel:+919150864777",
						className: "mt-4 block text-sm text-white/70 hover:text-white",
						children: "+91 91508 64777"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "mailto:info.aaryonenergies@gmail.com",
						className: "mt-2 block break-all text-sm text-white/70 hover:text-white",
						children: "info.aaryonenergies@gmail.com"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-sm leading-relaxed text-white/60",
						children: "Trichy, Tamil Nadu, India"
					})
				] })
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "border-t border-white/10",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto flex max-w-7xl flex-col gap-2 px-4 py-5 text-xs text-white/45 sm:flex-row sm:items-center sm:justify-between sm:px-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
					"© ",
					(/* @__PURE__ */ new Date()).getFullYear(),
					" TrueBright Energy Solutions."
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Rooftop solar · O&M" })]
			})
		})]
	});
}
function FooterColumn({ title, links }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
		className: "text-sm font-semibold text-solar",
		children: title
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "mt-4 space-y-3",
		children: links.map((link) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
			href: link === "Why TrueBright" ? "#trust" : link === "FAQs" ? "#faqs" : "/solar-calculator",
			className: "block text-sm text-white/60 hover:text-white",
			children: link
		}, link))
	})] });
}
//#endregion
//#region src/routes/index.tsx
var title = "TrueBright Energy | Rooftop Solar";
var description = "TrueBright Energy designs and installs residential, commercial and industrial rooftop solar systems across Tamil Nadu.";
var Route$3 = createFileRoute("/")({
	head: () => ({ meta: [
		{ title },
		{
			name: "description",
			content: description
		},
		{
			property: "og:title",
			content: title
		},
		{
			property: "og:description",
			content: description
		},
		{
			property: "og:type",
			content: "website"
		},
		{
			name: "twitter:card",
			content: "summary_large_image"
		}
	] }),
	component: Index
});
function Index() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "home-page min-h-screen",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Nav, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hero, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Services, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(OurServices, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SystemTypes, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Systems, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(YearlySavingsOptions, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Contact, {})
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {})
		]
	});
}
//#endregion
//#region src/routes/solar-calculator.tsx
var Route$2 = createFileRoute("/solar-calculator")({
	head: () => ({ meta: [{ title: "Solar Capacity Calculator | TrueBright Energy" }, {
		name: "description",
		content: "Estimate the solar capacity your home or business needs from your monthly electricity usage."
	}] }),
	component: SolarCalculator
});
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
//#region src/routes/admin.login.tsx
var ADMIN_USERNAME = "adminaaryon";
var ADMIN_PASSWORD = "aaryon2026";
var Route$1 = createFileRoute("/admin/login")({
	beforeLoad: () => {
		if (typeof window !== "undefined" && window.sessionStorage.getItem("aaryon-admin-auth") === "true") throw redirect({ to: "/admin/solar-leads" });
	},
	head: () => ({ meta: [{ title: "Admin Login | TrueBright Energy" }, {
		name: "robots",
		content: "noindex, nofollow"
	}] }),
	component: AdminLogin
});
function AdminLogin() {
	const navigate = useNavigate();
	const [username, setUsername] = (0, import_react.useState)("");
	const [password, setPassword] = (0, import_react.useState)("");
	const [error, setError] = (0, import_react.useState)("");
	function handleSubmit(event) {
		event.preventDefault();
		if (username === ADMIN_USERNAME && password === ADMIN_PASSWORD) {
			window.sessionStorage.setItem("aaryon-admin-auth", "true");
			navigate({ to: "/admin/solar-leads" });
			return;
		}
		setError("The username or password is incorrect.");
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
		className: "flex min-h-screen items-center justify-center bg-gradient-deep px-4 py-8 sm:px-5 sm:py-12",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "w-full max-w-md rounded-2xl border border-white/15 bg-card p-6 shadow-lift sm:p-8 md:p-10",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2 text-accent",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, { size: 18 }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "eyebrow",
						children: "TrueBright internal access"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-8 flex size-14 items-center justify-center rounded-xl bg-primary text-primary-foreground",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LockKeyhole, { size: 25 })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "mt-6 text-3xl font-bold text-primary",
					children: "Admin login"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 text-sm leading-relaxed text-muted-foreground",
					children: "Sign in to review saved solar capacity estimates and lead details."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
					onSubmit: handleSubmit,
					className: "mt-8 space-y-5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
							htmlFor: "admin-username",
							className: "mb-2 block text-sm font-semibold text-primary",
							children: "Username"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							id: "admin-username",
							name: "username",
							type: "text",
							autoComplete: "username",
							required: true,
							value: username,
							onChange: (event) => setUsername(event.target.value),
							className: "h-12 w-full rounded-md border border-input bg-background px-3 text-sm outline-none transition focus:border-accent focus:ring-2 focus:ring-accent/20"
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
							htmlFor: "admin-password",
							className: "mb-2 block text-sm font-semibold text-primary",
							children: "Password"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							id: "admin-password",
							name: "password",
							type: "password",
							autoComplete: "current-password",
							required: true,
							value: password,
							onChange: (event) => setPassword(event.target.value),
							className: "h-12 w-full rounded-md border border-input bg-background px-3 text-sm outline-none transition focus:border-accent focus:ring-2 focus:ring-accent/20"
						})] }),
						error ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							role: "alert",
							className: "text-sm font-medium text-destructive",
							children: error
						}) : null,
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "submit",
							className: "inline-flex h-12 w-full items-center justify-center gap-2 rounded-md bg-primary px-4 text-sm font-semibold text-primary-foreground transition hover:opacity-90",
							children: ["Continue to solar leads ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { size: 17 })]
						})
					]
				})
			]
		})
	});
}
//#endregion
//#region src/routes/admin.solar-leads.tsx
var Route = createFileRoute("/admin/solar-leads")({
	beforeLoad: () => {
		if (typeof window !== "undefined" && window.sessionStorage.getItem("aaryon-admin-auth") !== "true") throw redirect({ to: "/admin/login" });
	},
	head: () => ({ meta: [{ title: "Saved Calculations Admin | TrueBright Energy" }, {
		name: "robots",
		content: "noindex, nofollow"
	}] }),
	component: SolarLeadsAdmin
});
function readCalculations() {
	const stored = window.localStorage.getItem(STORAGE_KEY);
	return stored ? JSON.parse(stored) : [];
}
function SolarLeadsAdmin() {
	const [calculations, setCalculations] = (0, import_react.useState)([]);
	const navigate = useNavigate();
	function refresh() {
		setCalculations(readCalculations());
	}
	(0, import_react.useEffect)(() => {
		refresh();
		window.addEventListener("storage", refresh);
		return () => window.removeEventListener("storage", refresh);
	}, []);
	const totalCapacity = calculations.reduce((sum, item) => sum + item.capacity, 0);
	const estimatedRevenue = calculations.reduce((sum, item) => sum + getPricing(item.capacity).afterSubsidy, 0);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-surface",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Nav, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
			className: "mx-auto max-w-6xl px-4 py-10 sm:px-5 sm:py-12 md:py-16",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col justify-between gap-6 border-b border-border pb-8 md:flex-row md:items-end",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-2 text-accent",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, { size: 18 }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "eyebrow",
								children: "Internal workspace"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
							className: "mt-3 text-3xl font-bold md:text-5xl",
							children: "Saved calculations"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground",
							children: "Review submitted capacity estimates and download the saved calculations as a CSV for Google Sheets."
						})
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-wrap gap-2 sm:gap-3",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								onClick: () => {
									window.sessionStorage.removeItem("aaryon-admin-auth");
									navigate({ to: "/admin/login" });
								},
								className: "inline-flex h-11 flex-1 items-center justify-center rounded-md border border-border bg-card px-3 text-sm font-semibold text-primary transition hover:border-accent hover:text-accent sm:flex-none sm:px-4",
								children: "Log out"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "button",
								onClick: refresh,
								className: "inline-flex h-11 flex-1 items-center justify-center gap-2 rounded-md border border-border bg-card px-3 text-sm font-semibold text-primary transition hover:border-accent hover:text-accent sm:flex-none sm:px-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RefreshCw, { size: 16 }), " Refresh"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "button",
								onClick: () => downloadCsv(calculations),
								disabled: calculations.length === 0,
								className: "inline-flex h-11 w-full items-center justify-center gap-2 rounded-md bg-primary px-4 text-sm font-semibold text-primary-foreground transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-40 sm:w-auto",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, { size: 16 }), " Export CSV"]
							})
						]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-8 grid gap-4 sm:grid-cols-3",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Metric, {
							label: "Leads captured",
							value: calculations.length.toLocaleString()
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Metric, {
							label: "Total estimated capacity",
							value: `${Math.round(totalCapacity)} kW`
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Metric, {
							label: "Approx. post-subsidy value",
							value: formatCurrency(estimatedRevenue)
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-10 overflow-hidden rounded-xl border border-border bg-card shadow-soft",
					children: calculations.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "px-6 py-16 text-center",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-lg font-semibold",
								children: "No leads captured yet"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-sm text-muted-foreground",
								children: "Completed calculator submissions will appear here automatically."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: "/solar-calculator",
								className: "mt-6 inline-flex items-center gap-2 text-sm font-semibold text-accent hover:underline",
								children: ["Open calculator ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExternalLink, { size: 15 })]
							})
						]
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "overflow-x-auto",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
							className: "w-full min-w-[900px] text-left text-sm",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", {
								className: "bg-surface text-xs uppercase tracking-wide text-muted-foreground",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
										className: "px-5 py-4 font-semibold",
										children: "Name"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
										className: "px-5 py-4 font-semibold",
										children: "Phone"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
										className: "px-5 py-4 font-semibold",
										children: "Monthly units"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
										className: "px-5 py-4 font-semibold",
										children: "Capacity"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
										className: "px-5 py-4 font-semibold",
										children: "Total"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
										className: "px-5 py-4 font-semibold",
										children: "Subsidy"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
										className: "px-5 py-4 font-semibold",
										children: "Approx. payable"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
										className: "px-5 py-4 font-semibold",
										children: "Submitted"
									})
								] })
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", {
								className: "divide-y divide-border",
								children: calculations.map((item) => {
									const pricing = getPricing(item.capacity);
									return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
										className: "transition hover:bg-surface/70",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
												className: "whitespace-nowrap px-5 py-4 font-semibold",
												children: item.name
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
												className: "whitespace-nowrap px-5 py-4 text-muted-foreground",
												children: item.phone
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
												className: "whitespace-nowrap px-5 py-4",
												children: item.units.toLocaleString()
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("td", {
												className: "whitespace-nowrap px-5 py-4 font-semibold text-accent",
												children: [item.capacity, " kW"]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
												className: "whitespace-nowrap px-5 py-4",
												children: formatCurrency(pricing.total)
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
												className: "whitespace-nowrap px-5 py-4",
												children: formatCurrency(pricing.subsidy)
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
												className: "whitespace-nowrap px-5 py-4 font-semibold text-primary",
												children: formatCurrency(pricing.afterSubsidy)
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
												className: "whitespace-nowrap px-5 py-4 text-xs text-muted-foreground",
												children: new Date(item.createdAt).toLocaleString("en-IN")
											})
										]
									}, item.id);
								})
							})]
						})
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-5 text-xs leading-relaxed text-muted-foreground",
					children: "This browser-only admin view is not an authentication boundary. Connect the shared storage helper to a protected backend before using it for production customer data."
				})
			]
		})]
	});
}
function Metric({ label, value }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-lg border border-border bg-card p-4 sm:p-5",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-xs uppercase tracking-wide text-muted-foreground",
			children: label
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-2 break-words font-display text-xl font-bold text-primary sm:text-2xl",
			children: value
		})]
	});
}
//#endregion
//#region src/routeTree.gen.ts
var rootRouteChildren = {
	IndexRoute: Route$3.update({
		id: "/",
		path: "/",
		getParentRoute: () => Route$4
	}),
	SolarCalculatorRoute: Route$2.update({
		id: "/solar-calculator",
		path: "/solar-calculator",
		getParentRoute: () => Route$4
	}),
	AdminLoginRoute: Route$1.update({
		id: "/admin/login",
		path: "/admin/login",
		getParentRoute: () => Route$4
	}),
	AdminSolarLeadsRoute: Route.update({
		id: "/admin/solar-leads",
		path: "/admin/solar-leads",
		getParentRoute: () => Route$4
	})
};
var routeTree = Route$4._addFileChildren(rootRouteChildren)._addFileTypes();
//#endregion
//#region src/router.tsx
var getRouter = () => {
	const queryClient = new QueryClient();
	return createRouter({
		routeTree,
		context: { queryClient },
		scrollRestoration: true,
		defaultPreloadStaleTime: 0
	});
};
//#endregion
export { getRouter };
