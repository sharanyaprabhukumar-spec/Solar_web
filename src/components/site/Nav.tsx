import { Menu, X } from "lucide-react";
import { useState } from "react";
import logo from "@/assets/TrueBright Energy Solutions Logo.png";

const links = [
  { label: "Home", href: "/#top" },
  { label: "Why TrueBright", href: "/#trust" },
  { label: "Our services", href: "/#services" },
  { label: "Contact", href: "/#contact" },
];

export function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/90 backdrop-blur">
      <nav className="mx-auto flex min-h-20 max-w-6xl items-center justify-between gap-3 px-4 py-2 sm:px-5 md:min-h-24 md:py-3">
        <a href="/#top" className="flex min-w-0 items-center" onClick={() => setMenuOpen(false)}>
          <img
            src={logo}
            alt="TrueBright Energy Solutions"
            width={220}
            height={148}
            className="h-14 w-auto object-contain sm:h-16 md:h-20"
          />
        </a>
        <button
          type="button"
          aria-expanded={menuOpen}
          aria-controls="primary-navigation"
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          onClick={() => setMenuOpen((open) => !open)}
          className="inline-flex size-10 shrink-0 items-center justify-center rounded-md border border-border text-primary md:hidden"
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
        <div
          id="primary-navigation"
          className={`${menuOpen ? "flex" : "hidden"} absolute inset-x-0 top-full flex-col gap-1 border-b border-border bg-background px-4 py-3 shadow-soft md:static md:flex md:flex-row md:items-center md:justify-center md:gap-8 md:border-0 md:bg-transparent md:p-0 md:shadow-none`}
        >
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setMenuOpen(false)}
              className="rounded-md px-3 py-3 text-sm text-muted-foreground transition-colors hover:bg-surface hover:text-accent md:px-0 md:py-2 md:hover:bg-transparent"
            >
              {l.label}
            </a>
          ))}
        </div>
        <a
          href="tel:+919150864777"
          className="hidden shrink-0 rounded-md bg-primary px-3 py-2 text-xs font-medium text-primary-foreground transition-opacity hover:opacity-90 sm:inline-flex sm:px-4 sm:text-sm"
        >
          +91 91508 64777
        </a>
      </nav>
    </header>
  );
}
