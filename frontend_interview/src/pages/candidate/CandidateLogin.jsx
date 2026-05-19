import { Link, useNavigate } from "react-router-dom";
import { HireIqLogo } from "@/components/HireIqLogo";
import { useState } from "react";
import {
  Chrome,
  Eye,
  EyeOff,
  ArrowRight,
  ShieldCheck,
  Mail,
  Layers3,
} from "lucide-react";
import {
  getStoredCandidateStage,
  setStoredCandidateStage,
} from "@/lib/candidateFlow";

export default function CandidateLogin() {
  const [showPwd, setShowPwd] = useState(false);
  const navigate = useNavigate();

  const handleLogin = (event) => {
    event.preventDefault();
    const stage = getStoredCandidateStage();
    if (stage === "browsing") {
      setStoredCandidateStage("browsing");
    }
    if (stage === "applied") {
      navigate("/device-check/assessment");
      return;
    }
    navigate("/candidate/dashboard");
  };

  return (
    <div className="min-h-screen overflow-hidden bg-[#f7f2e9] p-2 md:p-2.5">
      <div className="mx-auto flex min-h-[calc(100vh-1rem)] max-w-[1120px] overflow-hidden rounded-[30px] border border-white/80 bg-white shadow-[0_32px_100px_-60px_rgba(15,23,42,0.45)]">
        <div className="relative hidden w-[40%] overflow-hidden bg-charcoal px-6 py-6 text-white lg:flex lg:flex-col">
          <div className="absolute -left-24 top-12 h-72 w-72 coral-glow opacity-35" />
          <div className="absolute -right-16 bottom-0 h-72 w-72 amber-glow opacity-25" />

          <Link
            to="/candidate/landing"
            className="relative z-10 inline-flex items-center"
          >
            <HireIqLogo variant="light" />
          </Link>

          <div className="relative z-10 mt-8 space-y-3.5">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.28em] text-coral">
              <ShieldCheck className="h-3.5 w-3.5" />
              Candidate access
            </span>
            <h1 className="max-w-md font-display text-[32px] font-bold leading-[1.02]">
              Keep every hiring step in one focused workspace.
            </h1>
            <p className="max-w-md text-[13px] leading-5 text-white/68">
              Move from live roles to assessments, interview rounds, and
              application updates without losing context.
            </p>
          </div>

          <div className="relative z-10 mt-auto space-y-2">
            {[
              {
                icon: Layers3,
                label: "Structured journey",
                text: "Jobs, mail, tracking, and assessments stay connected.",
              },
              {
                icon: Mail,
                label: "Mailbox updates",
                text: "Each stage unlocks the next action automatically.",
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
            Candidate portal
          </div>
          <div className="absolute bottom-2 right-2 h-56 w-56 rounded-full bg-coral/10 blur-[110px]" />
          <div className="absolute top-16 right-12 h-40 w-40 rounded-full bg-amber/10 blur-[90px]" />

          <div className="w-full max-w-[385px] rounded-[26px] border border-white/80 bg-white/94 p-[18px] shadow-[0_24px_70px_-48px_rgba(15,23,42,0.35)] backdrop-blur md:p-5">
            <div className="mb-4">
              <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-coral">
                Welcome back
              </p>
              <h2 className="mt-2 font-display text-[24px] font-bold leading-tight text-charcoal md:text-[28px]">
                Sign in to continue your journey
              </h2>
              <p className="mt-1.5 text-[13px] leading-5 text-charcoal-muted">
                Pick up where you left off across roles, assessments, and
                interview steps.
              </p>
            </div>

            <button className="flex h-11 w-full items-center justify-center gap-3 rounded-2xl border border-charcoal/10 bg-cream/70 text-sm font-bold text-charcoal transition hover:bg-white">
              <Chrome className="h-4 w-4 text-coral" />
              Continue with Google
            </button>

            <div className="my-4 flex items-center gap-3">
              <div className="h-px flex-1 bg-charcoal/10" />
              <span className="text-[11px] font-bold uppercase tracking-widest text-charcoal-muted">
                or continue with email
              </span>
              <div className="h-px flex-1 bg-charcoal/10" />
            </div>

            <form className="space-y-4" onSubmit={handleLogin}>
              <div className="space-y-1.5">
                <label className="text-[11px] font-bold uppercase tracking-wider text-charcoal">
                  Email address
                </label>
                <input
                  type="email"
                  defaultValue="candidate@hireiq.com"
                  className="h-11 w-full rounded-2xl border border-charcoal/10 bg-cream/55 px-4 text-sm text-charcoal placeholder:text-charcoal-muted/60 transition focus:outline-none focus:ring-2 focus:ring-coral/30"
                  required
                />
              </div>

              <div className="space-y-1.5">
                <div className="flex items-center justify-between">
                  <label className="text-[11px] font-bold uppercase tracking-wider text-charcoal">
                    Password
                  </label>
                  <button
                    type="button"
                    className="text-[10px] font-bold text-amber hover:underline"
                  >
                    Forgot?
                  </button>
                </div>
                <div className="relative">
                  <input
                    type={showPwd ? "text" : "password"}
                    defaultValue="hireiq123"
                    className="h-11 w-full rounded-2xl border border-charcoal/10 bg-cream/55 pl-4 pr-10 text-sm text-charcoal placeholder:text-charcoal-muted/60 transition focus:outline-none focus:ring-2 focus:ring-coral/30"
                    required
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

              <button
                type="submit"
                className="mt-1 h-11 w-full rounded-2xl bg-charcoal text-sm font-bold text-white transition-all hover:bg-charcoal/92 shadow-lg shadow-charcoal/10 active:scale-[0.99]"
              >
                Sign in
              </button>
            </form>

            {/* <div className="mt-3.5 rounded-[20px] border border-amber/20 bg-amber-soft/70 p-3">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-charcoal-muted">
                    Demo account
                  </p>
                  <p className="mt-1.5 text-sm font-bold text-charcoal">
                    candidate@hireiq.com
                  </p>
                </div>
                <button
                  type="button"
                  onClick={(event) => handleLogin(event)}
                  className="inline-flex h-10 items-center gap-2 rounded-2xl bg-coral px-4 text-sm font-bold text-white transition hover:bg-coral-dark"
                >
                  Enter demo
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </div> */}

            <p className="mt-3 text-center text-xs text-charcoal-muted">
              Returning to explore roles?{" "}
              <Link
                to="/candidate/landing"
                className="font-bold text-coral hover:underline"
              >
                Back to careers home
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
