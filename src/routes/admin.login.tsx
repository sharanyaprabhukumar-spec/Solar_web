import { FormEvent, useState } from "react";
import { createFileRoute, redirect, useNavigate } from "@tanstack/react-router";
import { ArrowRight, LockKeyhole, ShieldCheck } from "lucide-react";

const ADMIN_USERNAME = "adminaaryon";
const ADMIN_PASSWORD = "aaryon2026";

export const Route = createFileRoute("/admin/login")({
  beforeLoad: () => {
    if (typeof window !== "undefined" && window.sessionStorage.getItem("aaryon-admin-auth") === "true") {
      throw redirect({ to: "/admin/solar-leads" });
    }
  },
  head: () => ({
    meta: [
      { title: "Admin Login | TrueBright Energy" },
      { name: "robots", content: "noindex, nofollow" },
    ],
  }),
  component: AdminLogin,
});

function AdminLogin() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (username === ADMIN_USERNAME && password === ADMIN_PASSWORD) {
      window.sessionStorage.setItem("aaryon-admin-auth", "true");
      void navigate({ to: "/admin/solar-leads" });
      return;
    }
    setError("The username or password is incorrect.");
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-gradient-deep px-4 py-8 sm:px-5 sm:py-12">
      <div className="w-full max-w-md rounded-2xl border border-white/15 bg-card p-6 shadow-lift sm:p-8 md:p-10">
        <div className="flex items-center gap-2 text-accent"><ShieldCheck size={18} /><p className="eyebrow">TrueBright internal access</p></div>
        <div className="mt-8 flex size-14 items-center justify-center rounded-xl bg-primary text-primary-foreground"><LockKeyhole size={25} /></div>
        <h1 className="mt-6 text-3xl font-bold text-primary">Admin login</h1>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">Sign in to review saved solar capacity estimates and lead details.</p>

        <form onSubmit={handleSubmit} className="mt-8 space-y-5">
          <div>
            <label htmlFor="admin-username" className="mb-2 block text-sm font-semibold text-primary">Username</label>
            <input id="admin-username" name="username" type="text" autoComplete="username" required value={username} onChange={(event) => setUsername(event.target.value)} className="h-12 w-full rounded-md border border-input bg-background px-3 text-sm outline-none transition focus:border-accent focus:ring-2 focus:ring-accent/20" />
          </div>
          <div>
            <label htmlFor="admin-password" className="mb-2 block text-sm font-semibold text-primary">Password</label>
            <input id="admin-password" name="password" type="password" autoComplete="current-password" required value={password} onChange={(event) => setPassword(event.target.value)} className="h-12 w-full rounded-md border border-input bg-background px-3 text-sm outline-none transition focus:border-accent focus:ring-2 focus:ring-accent/20" />
          </div>
          {error ? <p role="alert" className="text-sm font-medium text-destructive">{error}</p> : null}
          <button type="submit" className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-md bg-primary px-4 text-sm font-semibold text-primary-foreground transition hover:opacity-90">Continue to solar leads <ArrowRight size={17} /></button>
        </form>
      </div>
    </main>
  );
}