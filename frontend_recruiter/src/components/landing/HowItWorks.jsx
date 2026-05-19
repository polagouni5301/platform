import { Settings, Sparkles, ClipboardCheck, ArrowRight } from "lucide-react";

const cards = [
  {
    n: "01",
    icon: Settings,
    title: "You configure the role",
    body: "Upload the JD, set thresholds, pick modules — coding, video, MCQ. Done in under 10 minutes.",
    tag: "One-time setup",
    accent: "coral",
    bullets: ["JD parser", "Threshold sliders", "Module library"],
  },
  {
    n: "02",
    icon: Sparkles,
    title: "AI handles every candidate",
    body: "Resume matched against JD, interview generated from the resume, answers scored — 24/7, in parallel.",
    tag: "Fully autonomous",
    accent: "charcoal",
    bullets: ["Semantic match", "Generated questions", "Live scoring"],
  },
  {
    n: "03",
    icon: ClipboardCheck,
    title: "You review the results",
    body: "Ranked shortlist with AI reasoning, transcripts, suggested panel questions and a one-click hire decision.",
    tag: "Human for exceptions only",
    accent: "amber",
    bullets: ["Ranked shortlist", "AI reasoning", "Panel prep"],
  },
];

const accentMap = {
  coral: { dot: "bg-coral", chip: "bg-coral/10 text-coral", iconBg: "bg-coral text-white" },
  charcoal: { dot: "bg-charcoal", chip: "bg-charcoal text-cream", iconBg: "bg-charcoal text-amber" },
  amber: { dot: "bg-amber", chip: "bg-amber-soft text-charcoal", iconBg: "bg-amber-soft text-charcoal" },
};

export const HowItWorks = () => {
  return (
    <section id="how" className="py-28 bg-white relative overflow-hidden">
      {/* soft backdrop */}
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "radial-gradient(hsl(var(--charcoal)) 1px, transparent 1px)", backgroundSize: "28px 28px" }} />

      <div className="container max-w-6xl relative">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <div>
            <div className="inline-flex items-center gap-2 text-[11px] font-bold text-coral uppercase tracking-[0.25em]">
              <span className="h-1.5 w-1.5 rounded-full bg-coral animate-pulse" />
              How it works
            </div>
            <h2 className="mt-3 font-display font-bold text-5xl sm:text-6xl text-charcoal tracking-tight leading-[0.95]">
              Three steps.<br />
              Then it just <span className="italic text-coral">runs.</span>
            </h2>
          </div>
          <p className="text-base text-charcoal-muted max-w-sm leading-relaxed">
            No new dashboards to babysit. Set it once, watch the shortlist roll in while you sleep.
          </p>
        </div>

        <div className="relative grid md:grid-cols-3 gap-5">
          {/* connecting line */}
          <div className="hidden md:block absolute top-14 left-[12%] right-[12%] h-px bg-gradient-to-r from-coral/0 via-coral/40 to-coral/0" />

          {cards.map((c, i) => {
            const a = accentMap[c.accent];
            return (
              <div
                key={c.n}
                className="group relative rounded-3xl border border-charcoal/10 bg-cream/50 p-7 flex flex-col hover:bg-white hover:shadow-[0_25px_60px_-25px_hsl(var(--charcoal)/0.25)] hover:-translate-y-1 transition-all duration-300 animate-fade-in-up"
                style={{ animationDelay: `${i * 120}ms`, animationFillMode: "both" }}
              >
                <div className="flex items-center justify-between mb-6 relative">
                  <div className={`h-12 w-12 rounded-2xl flex items-center justify-center ${a.iconBg} shadow-md group-hover:scale-110 transition-transform`}>
                    <c.icon className="h-5 w-5" />
                  </div>
                  <span className="font-display text-3xl font-bold text-charcoal/15 group-hover:text-coral/30 transition-colors">
                    {c.n}
                  </span>
                </div>

                <h3 className="font-display font-bold text-2xl text-charcoal leading-tight">
                  {c.title}
                </h3>
                <p className="mt-2.5 text-sm text-charcoal-muted leading-relaxed">
                  {c.body}
                </p>

                <ul className="mt-5 space-y-1.5">
                  {c.bullets.map((b) => (
                    <li key={b} className="flex items-center gap-2 text-[13px] text-charcoal/70">
                      <span className={`h-1.5 w-1.5 rounded-full ${a.dot}`} />
                      {b}
                    </li>
                  ))}
                </ul>

                <div className="mt-6 pt-5 border-t border-charcoal/10 flex items-center justify-between">
                  <span className={`inline-flex text-[10px] font-bold uppercase tracking-wider rounded-full px-2.5 py-1 ${a.chip}`}>
                    {c.tag}
                  </span>
                  <ArrowRight className="h-4 w-4 text-charcoal/30 group-hover:text-coral group-hover:translate-x-1 transition-all" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
