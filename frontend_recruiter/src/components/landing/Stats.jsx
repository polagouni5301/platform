import { TrendingDown, Users, Clock, MessageCircle } from "lucide-react";

const stats = [
  { v: "87%", l: "reduction in time-to-shortlist", icon: TrendingDown, sub: "vs previous quarter" },
  { v: "100%", l: "candidates scored consistently", icon: Users, sub: "same rubric, every time" },
  { v: "<4h", l: "average time to first shortlist", icon: Clock, sub: "from JD upload" },
  { v: "0", l: "candidates without an update", icon: MessageCircle, sub: "auto comms enabled" },
];

export const Stats = () => (
  <section className="py-24 bg-cream">
    <div className="container max-w-6xl">
      <div className="relative rounded-[36px] bg-charcoal text-white p-10 lg:p-14 overflow-hidden border border-charcoal">
        {/* layered backdrop */}
        <div className="absolute inset-0 opacity-[0.06]" style={{ backgroundImage: "linear-gradient(hsl(var(--cream)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--cream)) 1px, transparent 1px)", backgroundSize: "44px 44px" }} />
        <div className="absolute -top-32 -right-20 h-80 w-80 rounded-full bg-coral/35 blur-3xl animate-blob" />
        <div className="absolute -bottom-20 -left-10 h-72 w-72 rounded-full bg-amber/25 blur-3xl animate-blob" style={{ animationDelay: "3s" }} />

        <div className="relative grid lg:grid-cols-[1fr_2fr] gap-10 lg:gap-16 items-end">
          <div>
            <div className="inline-flex items-center gap-2 text-[11px] font-bold text-amber uppercase tracking-[0.25em]">
              <span className="h-1.5 w-1.5 rounded-full bg-amber animate-pulse" />
              Numbers that matter
            </div>
            <h2 className="mt-3 font-display font-bold text-4xl lg:text-5xl leading-[0.95] tracking-tight">
              Measured across<br/>
              <span className="italic text-coral">120+ hiring teams.</span>
            </h2>
            <p className="mt-4 text-sm text-white/60 max-w-xs leading-relaxed">
              Anonymised aggregate from Q1–Q2 2026 customer cohort.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
            {stats.map((s, i) => (
              <div
                key={s.l}
                className="group relative rounded-2xl bg-white/[0.04] backdrop-blur border border-white/10 p-5 hover:bg-white/[0.08] hover:border-coral/30 transition-all animate-fade-in-up"
                style={{ animationDelay: `${i * 100}ms`, animationFillMode: "both" }}
              >
                <s.icon className="h-4 w-4 text-coral mb-3" />
                <div className="font-display font-bold text-4xl lg:text-5xl bg-gradient-to-br from-coral to-amber bg-clip-text text-transparent leading-none">
                  {s.v}
                </div>
                <div className="mt-2.5 text-[13px] text-white/85 leading-snug font-medium">
                  {s.l}
                </div>
                <div className="mt-1 text-[10px] text-white/40 uppercase tracking-wider">
                  {s.sub}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);
