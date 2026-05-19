import { Link } from "react-router-dom";
import { Check, Sparkles, Crown, Rocket } from "lucide-react";

const plans = [
  {
    name: "Starter",
    icon: Rocket,
    price: "Free",
    sub: "forever",
    tagline: "For small teams testing the waters.",
    features: ["2 active jobs", "50 applications / month", "AI resume scoring", "Email support"],
    highlight: false,
  },
  {
    name: "Growth",
    icon: Sparkles,
    price: "₹12,000",
    sub: "/ month",
    tagline: "Most teams pick this — and never look back.",
    features: ["Unlimited active jobs", "500 applications", "Full AI modules (video + coding)", "Coding sandbox", "Priority Slack support"],
    highlight: true,
  },
  {
    name: "Enterprise",
    icon: Crown,
    price: "Custom",
    sub: "talk to us",
    tagline: "For high-volume teams and global rollouts.",
    features: ["Unlimited everything", "ATS integrations (Greenhouse, Lever, Workday)", "SSO & SAML, audit logs", "99.9% SLA & dedicated CSM"],
    highlight: false,
  },
];

export const Pricing = () => {
  return (
    <section id="pricing" className="py-28 bg-cream-warm relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-[hsl(var(--coral)/0.12)] blur-3xl rounded-full" />
      <div className="container max-w-6xl relative">
        <div className="text-center mb-14 max-w-2xl mx-auto">
          <div className="inline-block text-[11px] font-bold text-coral uppercase tracking-[0.2em] px-3 py-1 rounded-full bg-coral/10">Pricing</div>
          <h2 className="mt-4 font-display font-bold text-5xl sm:text-6xl text-charcoal tracking-tight">
            Plans that scale with{" "}
            <span className="italic bg-gradient-to-r from-coral to-amber bg-clip-text text-transparent">your hiring.</span>
          </h2>
          <p className="mt-4 text-charcoal-muted">No seat fees. No setup fees. Cancel anytime.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {plans.map((p, i) => {
            const Icon = p.icon;
            const isHighlight = p.highlight;
            return (
              <div
                key={p.name}
                className={`relative animate-fade-in-up ${isHighlight ? "lg:-mt-4 lg:mb-4" : ""}`}
                style={{ animationDelay: `${i * 120}ms` }}
              >
                {isHighlight && (
                  <div className="absolute -inset-1 rounded-[28px] bg-gradient-to-br from-coral via-amber to-coral opacity-70 blur-md animate-pulse" />
                )}
                <div
                  className={
                    isHighlight
                      ? "relative rounded-[26px] bg-charcoal text-white p-8 shadow-2xl shadow-coral/30 overflow-hidden"
                      : "relative rounded-[26px] bg-white border border-charcoal/10 p-8 hover:border-coral/30 hover:-translate-y-1 transition-all duration-300"
                  }
                >
                  {isHighlight && (
                    <>
                      <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "radial-gradient(circle at 80% 0%, hsl(var(--coral)/0.6), transparent 50%)" }} />
                      <span className="absolute top-5 right-5 bg-coral text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full">Most popular</span>
                    </>
                  )}

                  <div className="relative">
                    <div className="flex items-center gap-3">
                      <div className={`h-11 w-11 rounded-2xl flex items-center justify-center ${isHighlight ? "bg-coral text-white" : "bg-coral/10 text-coral"}`}>
                        <Icon className="h-5 w-5" />
                      </div>
                      <div className={`font-display font-bold text-xl ${isHighlight ? "text-white" : "text-charcoal"}`}>{p.name}</div>
                    </div>
                    <p className={`mt-4 text-sm ${isHighlight ? "text-white/70" : "text-charcoal-muted"}`}>{p.tagline}</p>

                    <div className="mt-6 flex items-end gap-1.5">
                      <span className={`font-display font-bold text-5xl ${isHighlight ? "text-white" : "text-charcoal"}`}>{p.price}</span>
                      <span className={`pb-2 text-sm ${isHighlight ? "text-white/60" : "text-charcoal-muted"}`}>{p.sub}</span>
                    </div>

                    <Link
                      to="/login"
                      className={
                        isHighlight
                          ? "mt-7 inline-flex w-full items-center justify-center h-12 rounded-full bg-coral text-white text-sm font-bold hover:bg-coral-hover transition shadow-lg shadow-coral/40"
                          : "mt-7 inline-flex w-full items-center justify-center h-12 rounded-full bg-charcoal text-white text-sm font-bold hover:bg-coral transition"
                      }
                    >
                      {p.name === "Enterprise" ? "Contact sales" : "Start free"}
                    </Link>

                    <div className={`mt-7 pt-6 border-t ${isHighlight ? "border-white/10" : "border-charcoal/8"}`}>
                      <ul className="space-y-3.5">
                        {p.features.map((f) => (
                          <li key={f} className={`flex items-start gap-3 text-sm ${isHighlight ? "text-white/90" : "text-charcoal"}`}>
                            <span className={`h-5 w-5 rounded-full flex items-center justify-center flex-none mt-0.5 ${isHighlight ? "bg-coral/20" : "bg-coral/10"}`}>
                              <Check className="h-3 w-3 text-coral" strokeWidth={3} />
                            </span>
                            <span>{f}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <p className="mt-10 text-center text-sm text-charcoal-muted">
          All plans include · SOC 2 Type II · GDPR & DPDP compliant · 99.9% uptime SLA
        </p>
      </div>
    </section>
  );
};
