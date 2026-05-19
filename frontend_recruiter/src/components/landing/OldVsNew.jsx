import { X, Check } from "lucide-react";

const oldWay = [
  "Manual resume reading — 3 days",
  "Phone screens one by one",
  "Inconsistent scoring",
  "Candidates drop off waiting",
  "Gut-feel decisions",
];

const newWay = [
  "80 resumes in 2 minutes",
  "Video interviews 24/7",
  "Every candidate same criteria",
  "Shortlist in hours",
  "Data-backed recommendation",
];

export const OldVsNew = () => {
  return (
    <section className="py-24 bg-cream-warm">
      <div className="container max-w-6xl">
        <div className="text-center mb-12">
          <div className="inline-block text-[11px] font-bold text-coral uppercase tracking-[0.2em]">
            The shift
          </div>
          <h2 className="mt-2 font-display font-bold text-4xl sm:text-5xl text-charcoal">
            The old way vs <span className="italic text-coral">HireIQ</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Old way */}
          <div className="rounded-3xl border border-charcoal/10 bg-white p-8">
            <div className="text-[11px] font-bold text-charcoal-muted uppercase tracking-[0.2em] mb-6">
              Old way
            </div>
            <ul className="space-y-4">
              {oldWay.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-charcoal-muted"
                >
                  <span className="mt-0.5 h-5 w-5 rounded-full bg-charcoal/10 flex items-center justify-center flex-none">
                    <X className="h-3 w-3" />
                  </span>
                  <span className="text-base">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* HireIQ */}
          <div className="rounded-3xl border border-charcoal/10 bg-charcoal text-white p-8 relative overflow-hidden">
            <div className="absolute -top-20 -right-20 w-60 h-60 coral-glow opacity-30" />
            <div className="relative">
              <div className="text-[11px] font-bold text-coral uppercase tracking-[0.2em] mb-6">
                HireIQ
              </div>
              <ul className="space-y-4">
                {newWay.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-0.5 h-5 w-5 rounded-full bg-coral flex items-center justify-center flex-none">
                      <Check className="h-3 w-3 text-white" strokeWidth={3} />
                    </span>
                    <span className="text-base text-white/90">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Stat bar */}
        <div className="mt-6 rounded-3xl border border-charcoal/10 bg-white p-8">
          <div className="grid sm:grid-cols-2 gap-8 items-center">
            <div>
              <div className="text-[11px] font-bold uppercase tracking-[0.2em] text-charcoal-muted mb-2">
                Traditional
              </div>
              <div className="font-display font-bold text-3xl text-charcoal mb-3">
                14 days
              </div>
              <div className="h-2.5 w-full bg-charcoal/10 rounded-full overflow-hidden">
                <div className="h-full w-full bg-charcoal/30 rounded-full" />
              </div>
            </div>
            <div>
              <div className="text-[11px] font-bold uppercase tracking-[0.2em] text-coral mb-2">
                HireIQ
              </div>
              <div className="font-display font-bold text-3xl text-coral mb-3">
                4 hours
              </div>
              <div className="h-2.5 w-full bg-coral/10 rounded-full overflow-hidden">
                <div className="h-full w-[12%] bg-coral rounded-full" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
