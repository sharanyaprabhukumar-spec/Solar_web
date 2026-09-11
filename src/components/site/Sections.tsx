import { useState } from "react";
import {
  ArrowRight,
  Check,
  ChevronDown,
  Home,
  IndianRupee,
  Leaf,
  MapPin,
  ShieldCheck,
  Sun,
  Wrench,
} from "lucide-react";
import heroImg from "@/assets/hero-rooftop-solar.jpg";
import industrialImg from "@/assets/industrial-solar.jpg";
import svcRooftop from "@/assets/svc-rooftop.jpg";
import svcGroundmount from "@/assets/svc-groundmount.jpg";
import svcPump from "@/assets/svc-pump.jpg";
import svcOm from "@/assets/svc-om.jpg";
import svcConsult from "@/assets/svc-consult.jpg";
import sysOngrid from "@/assets/sys-ongrid.jpg";
import sysOffgrid from "@/assets/sys-offgrid.jpg";
import sysHybrid from "@/assets/sys-hybrid.jpg";
import { formatCurrency, getSolarProjection } from "@/lib/solar-calculations";

const comparisonCapacities = [3, 4, 5, 10];

const audiences = [
  { title: "Homes", copy: "Save up to 90% on your home electricity bills.", image: heroImg, icon: Home },
  { title: "Businesses", copy: "Power your business with clean energy and lower operating costs.", image: industrialImg, icon: IndianRupee },
  { title: "Agriculture & institutions", copy: "Reliable solar power for farms, schools and essential facilities.", image: svcRooftop, icon: Leaf },
];

const services = [
  ["Rooftop Solar Solutions", "On-grid, off-grid and hybrid rooftop systems for homes, businesses and factories, engineered around your roof and load profile.", svcRooftop],
  ["Ground Mount Solar Solutions", "Utility-style ground-mounted plants with structural design, civil works and full grid integration.", svcGroundmount],
  ["Solar Water Pump Solutions", "Solar-powered pumping for agriculture and remote sites, delivering reliable irrigation without diesel dependence.", svcPump],
  ["Operations & Maintenance", "Scheduled cleaning, performance monitoring and preventive maintenance so your plant keeps generating at design yield.", svcOm],
  ["Energy Consulting & Audit", "Energy audits, load studies and savings modelling to right-size your system and shorten payback.", svcConsult],
] as const;

const systemTypes = [
  ["On-Grid Solar", "Reduce electricity bills, benefit from net metering and export excess power to the grid.", sysOngrid],
  ["Off-Grid Solar", "Stay independent with battery-backed power for remote locations and uninterrupted essential loads.", sysOffgrid],
  ["Hybrid Solar", "Combine solar, battery and grid power for maximum savings, backup and energy independence.", sysHybrid],
] as const;

const trustPoints = [
  ["Promised solar savings", "Aaryon helps you choose the right system and backs your solar savings with a clear, transparent promise.", IndianRupee],
  ["Professional Solar installation", "Installation, subsidy support and service are handled directly by our team.", Wrench],
  ["After-sales Maintenance Support", "Regular proactive maintenance keeps your system healthy and your generation steady for years.", ShieldCheck],
] as const;

const steps = [
  ["01", "Free site visit", "We understand your roof, electricity use and goals."],
  ["02", "Personalised solar design", "You get a clear system design, generation estimate and savings plan."],
  ["03", "Installation and subsidy support", "Our team installs your system and manages the paperwork."],
  ["04", "Solar on. You save.", "We stay with you through monitoring and proactive maintenance."],
];

const faqs = [
  ["What is a rooftop solar system?", "Solar panels installed on your roof convert sunlight into electricity for your home or business. A grid-connected system can export excess power and reduce the electricity you buy from the grid."],
  ["How much can I save with solar?", "Your savings depend on your bill, roof, system size and local tariff. We use your actual usage to prepare a transparent estimate before recommending a system."],
  ["Do I need to pay everything upfront?", "We can help you compare an upfront purchase with available financing options. The right choice depends on your monthly bill and savings goal."],
  ["How long does installation take?", "Most rooftop systems are installed in a few days once the design and approvals are complete. We manage the process and keep you updated at every step."],
  ["Will my solar system work during a power cut?", "A standard on-grid system switches off during a grid outage for safety. Add battery backup with a hybrid system if uninterrupted power is important for you."],
];

export function Hero() {
  return (
    <section id="top" className="overflow-hidden bg-surface">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 pb-6 pt-10 sm:px-6 sm:pb-8 sm:pt-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-16 lg:pb-10 lg:pt-16">
        <div className="relative z-10">
          <p className="eyebrow text-accent">Switch to Solar with Zero Investment</p>
          <h1 className="mt-5 max-w-2xl text-5xl leading-[0.98] font-bold text-primary sm:text-6xl lg:text-7xl">Power your home. <span className="text-accent">Own your savings.</span></h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">Install your solar system today with convenient EMI options. Government subsidy can help lower your solar investment, while your system helps to reduce the electricity bill. Choose Aaryon Energy and save up to ₹78,000.</p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a href="tel:+919150864777" className="inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-lift transition hover:bg-primary/90">Call +91 91508 64777 <ArrowRight size={17} /></a>
          </div>
          <div className="mt-10 flex flex-wrap gap-3 border-t border-primary/10 pt-6 text-sm"><span className="rounded-full border border-primary/10 bg-white px-4 py-2 font-semibold text-primary shadow-sm">Save up to ₹78,000</span><span className="rounded-full border border-primary/10 bg-white px-4 py-2 font-semibold text-primary shadow-sm">10000+ happy customers</span><span className="rounded-full border border-primary/10 bg-white px-4 py-2 font-semibold text-primary shadow-sm">Serving Tamil Nadu</span></div>
        </div>
        <div className="relative">
          <div className="absolute -left-5 -top-5 hidden size-24 rounded-full border-[14px] border-solar/40 lg:block" />
          <img src={heroImg} alt="Solar panels on a home rooftop" width={1600} height={1008} className="relative h-[390px] w-full rounded-[2rem] object-cover shadow-lift sm:h-[500px]" />
          <div className="absolute inset-x-4 bottom-4 rounded-2xl border border-white/60 bg-white/90 p-4 shadow-lift backdrop-blur-sm sm:inset-x-6 sm:bottom-6 sm:p-5"><div className="mb-3 flex items-center gap-2 text-accent"><Sun size={17} fill="currentColor" /><span className="text-xs font-bold uppercase tracking-wide">Aaryon in numbers</span></div><div className="grid grid-cols-2 gap-x-4 gap-y-3 sm:grid-cols-5"><Metric value="12+ MW" label="power installed" /><Metric value="1,200+" label="homes powered" /><Metric value="300+" label="commercials powered" /><Metric value="16 yrs" label="solar experience" /><Metric value="100%" label="end-to-end care" /></div></div>
        </div>
      </div>
    </section>
  );
}

export function Services() {
  return <section id="trust" className="bg-primary text-white"><div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:py-24"><div className="max-w-2xl"><p className="eyebrow text-solar">Why you can trust Aaryon Energy</p><h2 className="mt-4 text-4xl leading-tight font-bold md:text-5xl">Solar savings you can trust, with support that stays.</h2></div><div className="mt-12 grid gap-x-8 gap-y-10 sm:grid-cols-3">{trustPoints.map(([title, copy, Icon]) => <article key={title} className="border-t border-white/20 pt-5"><Icon className="text-solar" size={24} /><h3 className="mt-5 text-lg font-semibold">{title}</h3><p className="mt-3 text-sm leading-relaxed text-white/65">{copy}</p></article>)}</div></div></section>;
}

export function OurServices() {
  return <section id="services" className="border-y border-border bg-surface"><div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:py-24"><div><p className="eyebrow text-accent">Our services</p></div><div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-6">{services.map(([title, copy, image], index) => <article key={title} className={`overflow-hidden rounded-2xl border border-border bg-card shadow-soft lg:col-span-2 ${index === 3 ? "lg:col-start-2" : index === 4 ? "lg:col-start-4" : ""}`}><img src={image} alt="" className="h-44 w-full object-cover" /><div className="p-5"><h3 className="text-xl font-bold text-primary">{title}</h3><p className="mt-3 text-sm leading-relaxed text-muted-foreground">{copy}</p></div></article>)}</div></div></section>;
}

export function SystemTypes() {
  return <section id="system-types" className="border-b border-border bg-background"><div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:py-24"><div className="max-w-2xl"><p className="eyebrow text-accent">System types</p><h2 className="mt-4 text-4xl leading-tight font-bold text-primary md:text-5xl">On-grid, off-grid or hybrid.</h2></div><div className="mt-10 grid gap-5 md:grid-cols-3">{systemTypes.map(([title, copy, image]) => <article key={title} className="overflow-hidden rounded-2xl bg-primary text-white shadow-lift"><img src={image} alt="" className="h-48 w-full object-cover" /><div className="p-6"><h3 className="text-2xl font-bold">{title}</h3><p className="mt-3 text-sm leading-relaxed text-white/70">{copy}</p></div></article>)}</div></div></section>;
}

export function Systems() {
  return <section id="goodzero" className="bg-surface"><div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:py-24"><div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center"><div><p className="eyebrow text-accent">Introducing Aaryon Care</p><h2 className="mt-4 text-4xl leading-tight font-bold text-primary md:text-5xl">Your solar system, cared for.</h2><p className="mt-5 max-w-md leading-relaxed text-muted-foreground">Solar is a long-term investment. Our care promise keeps your system generating reliably, without the stress of chasing service.</p></div><div className="grid gap-3 sm:grid-cols-2"><CareItem title="Performance monitoring" copy="Know how your plant is performing with regular checks." /><CareItem title="Repair support" copy="Clear help when you need it, from a team that knows your system." /><CareItem title="Proactive maintenance" copy="Planned cleaning and inspections for steady generation." /><CareItem title="Transparent advice" copy="No confusing jargon. Just practical answers and honest guidance." /></div></div></div></section>;
}

function CareItem({ title, copy }: { title: string; copy: string }) { return <div className="rounded-xl border border-border bg-card p-5 shadow-soft"><Check size={18} className="text-accent" /><h3 className="mt-6 font-semibold text-primary">{title}</h3><p className="mt-2 text-sm leading-relaxed text-muted-foreground">{copy}</p></div>; }

export function Process() {
  return <section id="process" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:py-24"><div className="flex flex-col justify-between gap-4 md:flex-row md:items-end"><div><p className="eyebrow text-accent">How it works</p><h2 className="mt-4 text-4xl font-bold text-primary md:text-5xl">We handle everything. You just save.</h2></div><MapPin className="hidden text-solar md:block" size={48} /></div><ol className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">{steps.map(([number, title, copy]) => <li key={number} className="border-t-2 border-primary/10 pt-5"><span className="font-display text-sm font-bold text-accent">{number}</span><h3 className="mt-5 text-lg font-semibold text-primary">{title}</h3><p className="mt-3 text-sm leading-relaxed text-muted-foreground">{copy}</p></li>)}</ol></section>;
}

function Metric({ value, label }: { value: string; label: string }) { return <div><p className="font-display text-2xl font-bold text-primary">{value}</p><p className="mt-1 text-xs text-muted-foreground">{label}</p></div>; }

export function YearlySavingsOptions() {
  return <section className="border-y border-border bg-surface px-4 py-14 sm:px-5 sm:py-16 md:py-20"><div className="mx-auto max-w-6xl"><div className="max-w-2xl"><p className="eyebrow text-accent">Plan your solar investment</p><h2 className="mt-3 text-3xl font-bold text-primary md:text-4xl">Yearly savings and 25-year savings</h2><p className="mt-4 text-sm leading-relaxed text-muted-foreground">Compare popular system sizes using the current Aaryon price list after subsidy and see the estimated savings over one year and 25 years.</p></div><div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{comparisonCapacities.map((capacity) => { const projection = getSolarProjection(capacity); return <article key={capacity} className="rounded-xl border border-border bg-card p-5 shadow-soft"><div className="flex items-baseline justify-between gap-3 border-b border-border pb-4"><h3 className="text-2xl font-bold text-primary">{capacity} kW</h3><span className="text-xs font-semibold uppercase tracking-wide text-accent">Solar plan</span></div><dl className="mt-5 space-y-4 text-sm"><div className="flex items-center justify-between gap-3"><dt className="text-muted-foreground">After subsidy</dt><dd className="font-semibold text-primary">{formatCurrency(projection.afterSubsidy)}</dd></div><div className="flex items-center justify-between gap-3"><dt className="text-muted-foreground">Yearly savings</dt><dd className="font-semibold text-primary">{formatCurrency(projection.annualSavings)} / yr</dd></div><div className="flex items-center justify-between gap-3"><dt className="text-muted-foreground">25-year savings</dt><dd className="font-semibold text-accent">{formatCurrency(projection.twentyFiveYearSavings)}</dd></div></dl></article>; })}</div><p className="mt-5 text-xs leading-relaxed text-muted-foreground">Savings estimate assumes 120 units generated per kW each month and ₹8 per unit electricity value. Actual generation, tariff and savings vary by site.</p></div></section>;
}

export function Contact() {
  const [open, setOpen] = useState(0);
  return <><section id="faqs" className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20 lg:py-24"><p className="eyebrow text-accent">Frequently asked questions</p><h2 className="mt-4 text-4xl font-bold text-primary md:text-5xl">All your solar questions, answered.</h2><div className="mt-9 divide-y divide-border border-y border-border">{faqs.map(([question, answer], index) => <div key={question}><button type="button" onClick={() => setOpen(open === index ? -1 : index)} className="flex w-full items-center justify-between gap-4 py-5 text-left font-semibold text-primary"><span>{question}</span><ChevronDown className={`shrink-0 transition-transform ${open === index ? "rotate-180" : ""}`} size={19} /></button>{open === index && <p className="max-w-3xl pb-5 pr-8 text-sm leading-relaxed text-muted-foreground">{answer}</p>}</div>)}</div></section><section id="contact" className="bg-solar"><div className="mx-auto grid max-w-7xl gap-8 px-4 py-14 sm:px-6 lg:grid-cols-[1fr_auto] lg:items-center lg:py-20"><div><p className="eyebrow text-primary/70">Start your solar journey</p><h2 className="mt-3 max-w-2xl text-4xl font-bold text-primary md:text-5xl">Ready to make your electricity bill smaller?</h2><p className="mt-4 max-w-xl text-primary/70">Tell us a little about your roof and your monthly bill. We will take it from there.</p></div><div className="flex flex-wrap gap-3"><a href="/solar-calculator" className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-3.5 text-sm font-semibold text-white">Calculate savings <ArrowRight size={16} /></a><a href="tel:+919150864777" className="inline-flex items-center gap-2 rounded-md border border-primary/25 px-5 py-3.5 text-sm font-semibold text-primary">Call us</a></div></div></section></>;
}

export function Footer() {
  return <footer className="bg-primary text-white"><div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-[1.4fr_1fr_1fr] lg:py-16"><div><p className="max-w-xs text-sm leading-relaxed text-white/60">Clean energy solutions for homes, businesses and a more resilient Tamil Nadu.</p></div><FooterColumn title="Explore" links={["Why Aaryon", "FAQs", "Solar calculator"]} /><div><p className="text-sm font-semibold text-solar">Contact us</p><a href="tel:+919150864777" className="mt-4 block text-sm text-white/70 hover:text-white">+91 91508 64777</a><a href="mailto:info.aaryonenergies@gmail.com" className="mt-2 block break-all text-sm text-white/70 hover:text-white">info.aaryonenergies@gmail.com</a><p className="mt-3 text-sm leading-relaxed text-white/60">Trichy, Tamil Nadu, India</p></div></div><div className="border-t border-white/10"><div className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-5 text-xs text-white/45 sm:flex-row sm:items-center sm:justify-between sm:px-6"><span>© {new Date().getFullYear()} Aaryon Energy Solutions.</span><span>Rooftop solar · O&amp;M</span></div></div></footer>;
}

function FooterColumn({ title, links }: { title: string; links: string[] }) { return <div><p className="text-sm font-semibold text-solar">{title}</p><div className="mt-4 space-y-3">{links.map((link) => <a key={link} href={link === "Why Aaryon" ? "#trust" : link === "FAQs" ? "#faqs" : "/solar-calculator"} className="block text-sm text-white/60 hover:text-white">{link}</a>)}</div></div>; }
