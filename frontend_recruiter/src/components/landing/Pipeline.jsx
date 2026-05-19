import { ArrowRight, FileText, Sparkles, Video, Brain, ListChecks, Zap } from "lucide-react";

const stages = [
  { icon: FileText, title: "Resume in", note: "Auto-parsed", color: "from-coral/20 to-coral/5", iconBg: "bg-coral" },
  { icon: Sparkles, title: "AI match score", note: "<60 seconds", color: "from-amber/25 to-amber/5", iconBg: "bg-amber" },
  { icon: Video, title: "Video invite", note: "Sent automatically", color: "from-coral/15 to-amber/10", iconBg: "bg-charcoal" },
  { icon: Brain, title: "AI scores answers", note: "Bias-free rubric", color: "from-amber/20 to-coral/10", iconBg: "bg-coral" },
  { icon: ListChecks, title: "Shortlist ready", note: "Zero human touch", color: "from-coral/25 to-amber/10", iconBg: "bg-amber" },
];

export const Pipeline = () => {
  return (
    <section id="product" className="py-24 bg-cream relative overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-30" />
      <div className="container relative">
        <div className="text-center mb-12 max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-coral/10 text-coral text-[11px] font-bold uppercase tracking-[0.2em]">
            <Zap className="h-3 w-3" /> The autonomous pipeline
          </div>
          <h2 className="mt-4 font-display font-bold text-4xl md:text-5xl text-charcoal tracking-tight">
            From application to shortlist,
            <span className="block italic bg-gradient-to-r from-coral to-amber bg-clip-text text-transparent"> untouched by humans.</span>
          </h2>
          <p className="mt-4 text-charcoal-muted">Five autonomous steps. Average time: 23 minutes per candidate.</p>
        </div>

        <div className="relative max-w-[1100px] mx-auto">
          {/* connector line */}
          <div className="hidden md:block absolute top-[58px] left-[8%] right-[8%] h-px bg-gradient-to-r from-transparent via-coral/40 to-transparent" />

          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 relative">
            {stages.map((s, i) => (
              <div key={s.title} className="relative group animate-fade-in-up" style={{ animationDelay: `${i * 100}ms` }}>
                <div className={`relative bg-gradient-to-b ${s.color} bg-white border border-charcoal/8 rounded-3xl p-5 flex flex-col items-center text-center hover:-translate-y-1 hover:shadow-xl transition-all duration-300`}>
                  <div className={`relative h-14 w-14 rounded-2xl ${s.iconBg} text-white flex items-center justify-center mb-3 shadow-lg`}>
                    <s.icon className="h-6 w-6" />
                    <span className="absolute -top-1.5 -right-1.5 h-5 w-5 rounded-full bg-white border-2 border-charcoal text-charcoal text-[10px] font-bold flex items-center justify-center">{i + 1}</span>
                  </div>
                  <div className="text-sm font-bold text-charcoal leading-tight">{s.title}</div>
                  <div className="text-[11px] text-charcoal-muted mt-1">{s.note}</div>
                </div>
                {i < stages.length - 1 && (
                  <div className="hidden md:flex absolute -right-3 top-[50px] z-10 h-6 w-6 rounded-full bg-white border border-coral/30 items-center justify-center shadow-sm">
                    <ArrowRight className="h-3 w-3 text-coral" />
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* live ticker */}
          <div className="mt-10 bg-charcoal rounded-full p-1.5 shadow-2xl shadow-charcoal/20 max-w-3xl mx-auto">
            <div className="bg-charcoal rounded-full px-6 py-3 flex flex-wrap items-center justify-center gap-x-8 gap-y-2 text-sm">
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-amber animate-pulse-dot" />
                <span className="text-white/60 text-[11px] uppercase tracking-wider font-bold">Live</span>
              </div>
              <span className="text-white/80"><b className="text-white tabular-nums">48</b> applied</span>
              <span className="text-white/80"><b className="text-white tabular-nums">27</b> auto-screened</span>
              <span className="text-white/80"><b className="text-amber tabular-nums">9</b> shortlisted</span>
              <span className="text-white/80"><b className="text-coral tabular-nums">3</b> in final review</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
