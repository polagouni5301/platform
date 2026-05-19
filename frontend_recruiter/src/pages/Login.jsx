import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import {
  Eye,
  EyeOff,
  AlertCircle,
  ArrowRight,
  Sparkles,
  ShieldCheck,
  LayoutGrid,
} from "lucide-react";
import { HireIqLogo } from "@/components/HireIqLogo";

const LoginCard = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPwd, setShowPwd] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = (event) => {
    event.preventDefault();

    if (email === "recruiter@hireiq.com" && password === "hireiq123") {
      navigate("/dashboard");
      return;
    }

    setError("Use recruiter@hireiq.com with password hireiq123.");
  };

  return (
    <div className="w-full rounded-[26px] border border-white/80 bg-white/94 p-[18px] shadow-[0_24px_80px_-56px_rgba(15,23,42,0.45)] backdrop-blur md:p-5">
      <div className="mb-4">
        <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-coral">
          Recruiter sign in
        </p>
        <h1 className="mt-2 font-display text-[24px] font-bold leading-tight text-charcoal md:text-[28px]">
          Welcome back to your hiring command center
        </h1>
        <p className="mt-1.5 text-[13px] leading-5 text-charcoal-muted">
          Review active roles, triage the queue, and keep every candidate
          decision moving.
        </p>
      </div>

      <form className="space-y-3.5" onSubmit={handleLogin}>
        <div className="space-y-1.5">
          <label className="text-[11px] font-bold uppercase tracking-wider text-charcoal">
            Work email
          </label>
          <input
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            placeholder="recruiter@hireiq.com"
            className={`h-11 w-full rounded-2xl border bg-cream/55 px-4 text-sm text-charcoal placeholder:text-charcoal-muted/50 transition focus:outline-none focus:ring-2 focus:ring-coral/20 ${
              error ? "border-destructive/40" : "border-charcoal/10"
            }`}
          />
        </div>

        <div className="space-y-1.5">
          <div className="flex items-center justify-between">
            <label className="text-[11px] font-bold uppercase tracking-wider text-charcoal">
              Password
            </label>
            <button
              type="button"
              className="text-[10px] font-bold text-coral hover:underline"
            >
              Forgot?
            </button>
          </div>

          <div className="relative">
            <input
              type={showPwd ? "text" : "password"}
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              placeholder="hireiq123"
              className="h-11 w-full rounded-2xl border border-charcoal/10 bg-cream/55 pl-4 pr-10 text-sm text-charcoal placeholder:text-charcoal-muted/50 transition focus:outline-none focus:ring-2 focus:ring-coral/20"
            />
            <button
              type="button"
              onClick={() => setShowPwd(!showPwd)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-charcoal-muted transition hover:text-charcoal"
            >
              {showPwd ? (
                <EyeOff className="h-4 w-4" />
              ) : (
                <Eye className="h-4 w-4" />
              )}
            </button>
          </div>
        </div>

        {error ? (
          <div className="flex items-center gap-2 rounded-2xl border border-destructive/15 bg-destructive/5 p-3 text-[12px] font-medium text-destructive">
            <AlertCircle className="h-4 w-4" />
            {error}
          </div>
        ) : null}

        <button
          type="submit"
          className="flex h-11 w-full items-center justify-center gap-2 rounded-2xl bg-charcoal text-sm font-bold text-white transition hover:bg-charcoal/92"
        >
          Enter workspace
          <ArrowRight className="h-4 w-4" />
        </button>
      </form>

      <div className="mt-3.5 rounded-[20px] border border-amber/20 bg-amber-soft/70 p-3">
        <div className="flex items-center justify-between gap-4">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-charcoal-muted">
              Demo access
            </p>
            <p className="mt-1.5 text-sm font-bold text-charcoal">
              recruiter@hireiq.com
            </p>
          </div>
          <button
            type="button"
            onClick={() => {
              setEmail("recruiter@hireiq.com");
              setPassword("hireiq123");
              setError("");
            }}
            className="inline-flex h-10 items-center gap-2 rounded-2xl bg-coral px-4 text-sm font-bold text-white transition hover:bg-coral-dark"
          >
            Fill demo
            <Sparkles className="h-4 w-4" />
          </button>
        </div>
      </div>

      <p className="mt-3 text-center text-xs text-charcoal-muted">
        Need a new workspace?{" "}
        <Link to="/onboarding" className="font-bold text-coral hover:underline">
          Start onboarding
        </Link>
      </p>
    </div>
  );
};

const Login = () => {
  return (
    <div className="min-h-screen overflow-hidden bg-[#f5efe5] p-2 md:p-2.5">
      <div className="mx-auto flex min-h-[calc(100vh-1rem)] max-w-[1120px] overflow-hidden rounded-[30px] border border-white/80 bg-white shadow-[0_32px_100px_-60px_rgba(15,23,42,0.45)]">
        <div className="relative hidden w-[40%] overflow-hidden bg-charcoal px-6 py-6 text-white lg:flex lg:flex-col">
          <div className="absolute -left-24 top-10 h-72 w-72 coral-glow opacity-35" />
          <div className="absolute -right-16 bottom-0 h-72 w-72 amber-glow opacity-25" />

          <Link to="/" className="relative z-10 inline-flex items-center">
            <HireIqLogo variant="light" />
          </Link>

          <div className="relative z-10 mt-8 space-y-3.5">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.28em] text-coral">
              <ShieldCheck className="h-3.5 w-3.5" />
              Autonomous hiring ops
            </span>
            <h2 className="max-w-md font-display text-[32px] font-bold leading-[1.02]">
              See the whole funnel. Act only where judgment matters.
            </h2>
            <p className="max-w-md text-[13px] leading-5 text-white/68">
              HireIQ keeps jobs, pipeline, and review aligned so your team can
              move faster with context instead of clutter.
            </p>
          </div>

          <div className="relative z-10 mt-auto grid gap-2">
            {[
              {
                icon: LayoutGrid,
                label: "Unified workspace",
                text: "Jobs, pipeline, review, and settings stay coordinated.",
              },
              {
                icon: Sparkles,
                label: "Human-in-the-loop AI",
                text: "Edge cases surface quickly with confidence and rationale.",
              },
            ].map(({ icon: Icon, label, text }) => (
              <div
                key={label}
                className="rounded-[20px] border border-white/10 bg-white/5 p-3 backdrop-blur-sm"
              >
                <div className="flex items-start gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-white/10 text-coral">
                    <Icon className="h-[17px] w-[17px]" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-white">{label}</p>
                    <p className="mt-1 text-[13px] leading-5 text-white/60">
                      {text}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative flex flex-1 items-center justify-center overflow-hidden bg-[linear-gradient(180deg,#fffdf9_0%,#f8f1e6_100%)] px-4 py-5 md:px-6">
          <div className="absolute left-6 top-6 rounded-full border border-charcoal/10 bg-white/80 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.24em] text-charcoal-muted shadow-sm backdrop-blur-md">
            Recruiter workspace
          </div>
          <div className="absolute bottom-2 right-2 h-56 w-56 rounded-full bg-coral/10 blur-[110px]" />
          <div className="absolute top-16 right-12 h-40 w-40 rounded-full bg-amber/10 blur-[90px]" />

          <div className="w-full max-w-[390px]">
            <LoginCard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
