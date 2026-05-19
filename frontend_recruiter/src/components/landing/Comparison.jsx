import { Check, X, Minus } from "lucide-react";

const rows = [
  ["AI scores resume vs JD", "partial", true, true],
  ["Questions generated from resume", false, false, true],
  ["Sends invites autonomously", false, "manual", true],
  ["AI voice video interview", false, true, true],
  ["Auto-rejects with personalised email", false, false, true],
  ["Plain-English AI recommendation", false, "score-only", true],
  ["Human required per candidate", "always", "often", false],
];

const cell = (v) => {
  if (v === true)
    return (
      <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-coral text-white shadow-[0_4px_14px_-4px_hsl(var(--coral)/0.6)]">
        <Check className="h-3.5 w-3.5" strokeWidth={3} />
      </span>
    );
  if (v === false)
    return (
      <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-charcoal/5 text-charcoal/30">
        <X className="h-3.5 w-3.5" />
      </span>
    );
  return (
    <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-amber-soft text-charcoal text-[10px] font-bold uppercase tracking-wider">
      <Minus className="h-3 w-3" />
      {v}
    </span>
  );
};

export const Comparison = () => {
  return (
    <section className="py-28 bg-cream-warm relative overflow-hidden">
      <div className="container max-w-5xl relative">
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 text-[11px] font-bold text-coral uppercase tracking-[0.25em]">
            <span className="h-1.5 w-1.5 rounded-full bg-coral animate-pulse" />
            Side by side
          </div>
          <h2 className="mt-3 font-display font-bold text-5xl sm:text-6xl text-charcoal tracking-tight leading-[0.95]">
            How HireIQ <span className="italic text-coral">stacks up.</span>
          </h2>
          <p className="mt-5 text-base text-charcoal-muted max-w-lg mx-auto">
            Apples-to-apples against the tools you&apos;re probably renewing this quarter.
          </p>
        </div>

        <div className="rounded-[28px] border border-charcoal/10 bg-white overflow-hidden shadow-[0_30px_80px_-40px_hsl(var(--charcoal)/0.2)]">
          <div className="overflow-x-auto">
            <table className="w-full text-sm min-w-[640px]">
              <thead>
                <tr className="border-b border-charcoal/10 bg-cream/60">
                  <th className="text-left p-5 font-bold text-charcoal-muted text-[11px] uppercase tracking-[0.2em]">
                    Feature
                  </th>
                  <th className="p-5 font-bold text-charcoal-muted text-[11px] uppercase tracking-[0.2em] text-center">
                    Traditional ATS
                  </th>
                  <th className="p-5 font-bold text-charcoal-muted text-[11px] uppercase tracking-[0.2em] text-center">
                    HireVue / Jobma
                  </th>
                  <th className="relative p-5 text-center border-l border-charcoal/10 bg-gradient-to-b from-coral/10 to-coral/5">
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-coral text-white text-[9px] font-bold uppercase tracking-[0.2em] shadow-md whitespace-nowrap">
                      Recommended
                    </div>
                    <div className="font-display font-bold text-coral text-base mt-1">
                      HireIQ
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody>
                {rows.map((r, i) => (
                  <tr
                    key={i}
                    className="border-b border-charcoal/5 last:border-0 hover:bg-cream/30 transition-colors animate-fade-in-up"
                    style={{ animationDelay: `${i * 50}ms`, animationFillMode: "both" }}
                  >
                    <td className="p-5 text-charcoal font-medium">{r[0]}</td>
                    <td className="p-5 text-center">{cell(r[1])}</td>
                    <td className="p-5 text-center">{cell(r[2])}</td>
                    <td className="p-5 text-center border-l border-charcoal/10 bg-coral/5">
                      {cell(r[3])}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <p className="mt-6 text-center text-xs text-charcoal-muted">
          Last verified · May 2026 · sources: vendor public docs
        </p>
      </div>
    </section>
  );
};
