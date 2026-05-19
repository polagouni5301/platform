import { Link } from "react-router-dom";
import { ArrowRight, Sparkles } from "lucide-react";

export const FinalCta = () => (
  <section id="companies" className="py-28 bg-cream relative overflow-hidden">
    <div className="container max-w-5xl">
      <div className="relative rounded-[36px] bg-charcoal text-white p-12 lg:p-20 overflow-hidden">
        {/* layered glows */}
        <div className="absolute inset-0 grid-bg opacity-10" />
        <div className="absolute -top-32 -left-20 w-[500px] h-[500px] rounded-full bg-coral/40 blur-3xl animate-blob" />
        <div className="absolute -bottom-32 -right-20 w-[500px] h-[500px] rounded-full bg-amber/30 blur-3xl animate-blob" style={{ animationDelay: "4s" }} />

        <div className="relative text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur border border-white/20 text-[11px] font-bold uppercase tracking-[0.2em] text-amber">
            <Sparkles className="h-3 w-3" /> Limited early access
          </div>
          <h2 className="mt-6 font-display font-bold text-5xl sm:text-6xl lg:text-7xl leading-[0.95] tracking-tight">
            Ready to let AI
            <br />
            <span className="italic bg-gradient-to-r from-coral via-amber to-coral bg-clip-text text-transparent" style={{ backgroundSize: "200% 200%", animation: "gradient-shift 6s ease infinite" }}>
              do the hiring?
            </span>
          </h2>
          <p className="mt-6 text-lg text-white/70 max-w-xl mx-auto">
            Join 120+ teams who closed Q1 hires before their old ATS even finished screening.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link to="/login" className="group inline-flex items-center gap-2 h-14 px-8 rounded-full bg-coral text-white font-bold hover:bg-coral-hover transition-all shadow-[0_15px_40px_-10px_hsl(var(--coral)/0.6)] hover:-translate-y-0.5">
              Start hiring smarter
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link to="/login" className="inline-flex items-center gap-2 h-14 px-8 rounded-full border border-white/20 bg-white/5 backdrop-blur text-white font-semibold hover:bg-white/10 transition">
              Book a 20-min demo
            </Link>
          </div>
          <p className="mt-6 text-sm text-white/40">
            No credit card · Cancel anytime · 10-minute setup
          </p>
        </div>
      </div>
    </div>
  </section>
);
