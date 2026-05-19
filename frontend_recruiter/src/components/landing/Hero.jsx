import { Link } from "react-router-dom";
import {
  ArrowRight,
  Play,
  Sparkles,
  CheckCircle2,
  Video,
  FileText,
  Star,
} from "lucide-react";
import { TypeRevealText } from "@/components/TypeRevealText";

const tickerWords = [
  "screens resumes",
  "runs interviews",
  "scores answers",
  "shortlists talent",
  "screens resumes",
];
const logos = ["Stripe", "Notion", "Linear", "Figma", "Vercel", "Loom", "Ramp", "Arc"];

const StatBlock = ({ value, label }) => (
  <div className="flex flex-col">
    <div className="font-display text-3xl font-bold text-charcoal tabular-nums">
      {value}
    </div>
    <div className="mt-0.5 text-xs text-charcoal-muted">{label}</div>
  </div>
);

export const Hero = () => {
  return (
    <section className="relative overflow-x-hidden overflow-y-hidden pb-24 pt-20">
      <div className="absolute inset-0 grid-bg opacity-60" />
      <div className="absolute -top-32 right-[-10%] h-[600px] w-[600px] rounded-full bg-[hsl(var(--coral)/0.18)] blur-3xl animate-blob pointer-events-none" />
      <div
        className="absolute left-[-15%] top-40 h-[500px] w-[500px] rounded-full bg-[hsl(var(--amber)/0.22)] blur-3xl animate-blob pointer-events-none"
        style={{ animationDelay: "3s" }}
      />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-coral/40 to-transparent" />

      <div className="container relative overflow-x-hidden">
        <div className="grid items-center gap-12 lg:grid-cols-12">
          <div className="animate-fade-in-up lg:col-span-7">
           

            <h1 className=" font-display text-[56px] font-bold leading-[0.92] tracking-tight text-charcoal sm:text-7xl lg:text-[88px]">
              <span className="block">Hiring,</span>
              <span className="relative mt-2 inline-block">
                <TypeRevealText
                  className="type-reveal--gradient block italic"
                  lines={["on autopilot."]}
                  reserveLines={["on autopilot."]}
                  baseDelay={160}
                  stepDelay={42}
                  showCursor
                  loop
                  loopPause={2600}
                />
                <svg
                  className="absolute -bottom-2 left-0 w-full"
                  height="14"
                  viewBox="0 0 300 14"
                  fill="none"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M2 8 Q 75 2, 150 7 T 298 6"
                    stroke="hsl(var(--amber))"
                    strokeWidth="3"
                    strokeLinecap="round"
                    fill="none"
                    strokeDasharray="400"
                    className="animate-draw-line"
                  />
                </svg>
              </span>
              <span className="mt-2 block">No more endless resumes.</span>
            </h1>

            <p className="mt-7 max-w-xl text-lg leading-relaxed text-charcoal-muted">
              HireIQ screens every CV, runs the live video interview, scores
              each answer with bias-free rubrics, and hands you a ranked
              shortlist by morning. You just pick who to hire.
            </p>

            <div className="mt-8 flex items-start gap-4 sm:flex-row sm:items-center">
              <Link
                to="/login"
                className="group relative inline-flex h-14 items-center gap-2 rounded-full bg-coral px-7 font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-coral-hover shadow-[0_10px_30px_-10px_hsl(var(--coral)/0.6)] hover:shadow-[0_15px_40px_-10px_hsl(var(--coral)/0.7)]"
              >
                Start hiring smarter
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <button className="group inline-flex h-14 items-center gap-3 rounded-full border border-charcoal/15 bg-white/70 px-5 font-semibold text-charcoal backdrop-blur transition hover:border-charcoal/30 hover:bg-white">
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-charcoal text-white transition group-hover:bg-coral">
                  <Play className="ml-0.5 h-3 w-3 fill-current" />
                </span>
                Watch 2-min demo
              </button>
            </div>

            <div className="mt-10 flex items-center gap-8 border-t border-charcoal/10 pt-6">
              <StatBlock value="120+" label="Companies hiring" />
              <div className="h-10 w-px bg-charcoal/10" />
              <StatBlock value="48k" label="Interviews run" />
              <div className="h-10 w-px bg-charcoal/10" />
              <StatBlock value="92%" label="Time saved" />
            </div>
          </div>

          <div
            className="relative animate-scale-in lg:-mt-16 lg:col-span-5"
            style={{ animationDelay: "0.2s" }}
          >
            <div className="relative">
              <div className="absolute -inset-8 bg-gradient-to-br from-coral/30 via-amber/20 to-transparent blur-3xl" />

              <div className="relative rounded-[28px] border border-charcoal/8 bg-white p-5 shadow-[0_30px_80px_-20px_rgba(11,15,26,0.25)] transition-transform duration-500">
                <div className="mb-4 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="flex items-center gap-1">
                      <div className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
                      <div className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
                      <div className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
                    </div>
                    <span className="ml-2 text-[11px] font-medium text-charcoal-muted">
                      hireiq.ai/interview - Live
                    </span>
                  </div>
                  <div className="inline-flex items-center gap-1.5 rounded-full bg-coral/10 px-2 py-1 text-[10px] font-bold uppercase tracking-wide text-coral">
                    <span className="h-1.5 w-1.5 rounded-full bg-coral animate-pulse-dot" />
                    REC
                  </div>
                </div>

                <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-gradient-to-br from-charcoal via-charcoal to-[#1a2238]">
                  <div
                    className="absolute inset-0 opacity-30"
                    style={{
                      backgroundImage:
                        "radial-gradient(circle at 30% 40%, hsl(var(--coral)/0.4), transparent 50%), radial-gradient(circle at 70% 60%, hsl(var(--amber)/0.4), transparent 50%)",
                    }}
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="flex h-24 w-24 items-center justify-center rounded-full border border-white/20 bg-white/10 backdrop-blur-xl">
                      <span className="font-display text-3xl font-bold text-white">
                        SM
                      </span>
                    </div>
                  </div>
                  <div className="absolute bottom-3 left-3 right-3 flex items-end justify-between">
                    <div>
                      <div className="text-sm font-semibold text-white">
                        Sarah Mitchell
                      </div>
                      <div className="text-[11px] text-white/60">
                        Senior Frontend Engineer
                      </div>
                    </div>
                    <div className="flex items-center gap-1.5 rounded-full border border-white/20 bg-white/10 px-2 py-1 backdrop-blur">
                      <Video className="h-3 w-3 text-white" />
                      <span className="text-[10px] font-semibold text-white">
                        12:34
                      </span>
                    </div>
                  </div>
                  <div className="absolute right-3 top-3 flex h-6 items-end gap-0.5">
                    {[0.4, 0.8, 0.5, 1, 0.6, 0.9, 0.3, 0.7].map((height, index) => (
                      <div
                        key={index}
                        className="w-0.5 rounded-full bg-coral"
                        style={{
                          height: `${height * 100}%`,
                          animation: `pulse-dot 1.2s ease-in-out ${index * 0.1}s infinite`,
                        }}
                      />
                    ))}
                  </div>
                </div>

                <div className="mt-4 rounded-2xl border border-amber/20 bg-gradient-to-br from-amber-soft to-white p-3.5">
                  <div className="mb-2 flex items-center justify-between">
                    <div className="flex items-center gap-1.5">
                      <Sparkles className="h-3.5 w-3.5 text-coral" />
                      <span className="text-[11px] font-bold uppercase tracking-wider text-charcoal">
                        AI Score
                      </span>
                    </div>
                    <div className="font-display text-2xl font-bold tabular-nums text-charcoal">
                      94
                      <span className="text-sm text-charcoal-muted">/100</span>
                    </div>
                  </div>
                  <div className="space-y-1.5">
                    {[
                      { label: "Technical depth", value: 96 },
                      { label: "Communication", value: 92 },
                      { label: "Culture fit", value: 89 },
                    ].map((row) => (
                      <div key={row.label} className="flex items-center gap-2">
                        <span className="w-24 truncate text-[10px] text-charcoal-muted">
                          {row.label}
                        </span>
                        <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-charcoal/5">
                          <div
                            className="h-full rounded-full bg-gradient-to-r from-coral to-amber"
                            style={{ width: `${row.value}%` }}
                          />
                        </div>
                        <span className="w-6 text-[10px] font-bold tabular-nums text-charcoal">
                          {row.value}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="absolute -left-6 top-32 flex items-center gap-2.5 rounded-2xl border border-charcoal/8 bg-white px-3 py-2.5 shadow-xl animate-float-slow">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-amber/20 text-coral">
                  <CheckCircle2 className="h-4 w-4" />
                </div>
                <div>
                  <div className="text-[11px] font-bold text-charcoal">
                    Shortlisted
                  </div>
                  <div className="text-[10px] text-charcoal-muted">
                    3 candidates - today
                  </div>
                </div>
              </div>

              <div
                className="absolute -right-4 bottom-24 flex items-center gap-2.5 rounded-2xl border border-charcoal/8 bg-white px-3 py-2.5 shadow-xl animate-float-slower"
                style={{ animationDelay: "1s" }}
              >
                <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-coral/10 text-coral">
                  <FileText className="h-4 w-4" />
                </div>
                <div>
                  <div className="text-[11px] font-bold text-charcoal">
                    1,248 resumes
                  </div>
                  <div className="text-[10px] text-charcoal-muted">
                    parsed in 4 minutes
                  </div>
                </div>
              </div>

              <div
                className="absolute -top-3 right-6 flex items-center gap-2 rounded-full bg-charcoal py-1 pl-1 pr-3 text-white shadow-xl animate-float-slow"
                style={{ animationDelay: "2s" }}
              >
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-amber">
                  <Star className="h-3 w-3 fill-charcoal text-charcoal" />
                </span>
                <span className="text-[11px] font-semibold">4.9 G2 rating</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-20 border-t border-charcoal/10 pt-8">
          <div className="mb-6 text-center text-[11px] font-bold uppercase tracking-[0.2em] text-charcoal-muted/70">
            Trusted by teams building the future
          </div>
          <div className="relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
            <div className="flex animate-marquee gap-16 whitespace-nowrap">
              {[...logos, ...logos].map((logo, index) => (
                <span
                  key={index}
                  className="font-display text-2xl font-bold text-charcoal/40 transition hover:text-charcoal"
                >
                  {logo}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
