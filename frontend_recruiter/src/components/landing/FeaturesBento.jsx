import { Video, FileSearch, Workflow, Code2, ShieldCheck, Mail, Zap } from "lucide-react";

export const FeaturesBento = () => {
  return (
    <section id="product" className="py-28 bg-cream relative overflow-hidden">
      <div className="absolute top-20 -right-40 w-[500px] h-[500px] rounded-full bg-amber/20 blur-3xl animate-blob" />
      <div className="absolute bottom-0 -left-40 w-[400px] h-[400px] rounded-full bg-coral/15 blur-3xl animate-blob" style={{ animationDelay: "3s" }} />

      <div className="container max-w-6xl relative">
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 text-[11px] font-bold text-coral uppercase tracking-[0.25em]">
            <Zap className="h-3 w-3" />
            Features
          </div>
          <h2 className="mt-3 font-display font-bold text-5xl sm:text-6xl text-charcoal tracking-tight leading-[0.95]">
            Every part of screening,<br />
            <span className="italic text-coral">automated.</span>
          </h2>
          <p className="mt-5 text-base text-charcoal-muted max-w-xl mx-auto">
            One platform replaces your ATS screener, video tool, coding test and rejection emails.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-4">
          {/* Hero card */}
          <div className="md:col-span-2 md:row-span-2 rounded-[28px] bg-charcoal text-white p-8 lg:p-10 relative overflow-hidden border border-charcoal group hover:shadow-[0_30px_80px_-30px_hsl(var(--coral)/0.5)] transition-all duration-500 animate-fade-in-up">
            <div className="absolute -bottom-40 -right-32 w-[400px] h-[400px] rounded-full bg-coral/40 blur-3xl animate-blob" />
            <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "linear-gradient(hsl(var(--cream)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--cream)) 1px, transparent 1px)", backgroundSize: "40px 40px" }} />

            <div className="relative grid sm:grid-cols-2 gap-8 items-center h-full">
              <div>
                <div className="h-12 w-12 rounded-2xl bg-coral text-white flex items-center justify-center mb-5 shadow-lg group-hover:scale-110 transition-transform">
                  <Video className="h-5 w-5" />
                </div>
                <div className="text-[11px] font-bold uppercase tracking-[0.25em] text-coral mb-2">Signature</div>
                <h3 className="font-display font-bold text-3xl lg:text-4xl leading-[1.05] tracking-tight">
                  Personalised video interview for every candidate.
                </h3>
                <p className="mt-4 text-base text-white/70 leading-relaxed">
                  Questions generated from each resume vs your JD. No two interviews are identical, no two candidates get a generic experience.
                </p>
                <div className="mt-6 flex items-center gap-4 text-[11px] text-white/50 uppercase tracking-wider font-semibold">
                  <span className="flex items-center gap-1.5"><span className="h-1.5 w-1.5 rounded-full bg-coral animate-pulse"/>Live now</span>
                  <span>·</span>
                  <span>6 questions avg</span>
                  <span>·</span>
                  <span>8 minutes</span>
                </div>
              </div>

              <div className="bg-white/[0.04] backdrop-blur border border-white/10 rounded-2xl p-5 relative overflow-hidden">
                <div className="flex items-center justify-between mb-3">
                  <div className="text-[10px] font-bold uppercase tracking-[0.25em] text-coral">
                    Question 3 of 6
                  </div>
                  <div className="flex gap-1">
                    {[0,1,2,3,4,5].map(i => (
                      <span key={i} className={`h-1 w-3 rounded-full ${i<3?'bg-coral':'bg-white/15'}`}/>
                    ))}
                  </div>
                </div>
                <p className="text-sm text-white/90 leading-relaxed">
                  &ldquo;You mentioned scaling Postgres at TruePay. Walk me through how you handled the read-replica lag during the Q3 launch.&rdquo;
                </p>
                <div className="mt-5 pt-4 border-t border-white/10">
                  <div className="flex items-end gap-0.5 h-10 mb-2">
                    {Array.from({length: 32}).map((_,i)=>(
                      <span key={i} className="flex-1 bg-coral rounded-sm animate-pulse" style={{height: `${20 + Math.sin(i*0.6)*30 + Math.random()*30}%`, animationDelay: `${i*40}ms`}}/>
                    ))}
                  </div>
                  <div className="flex items-center gap-2 text-[10px] text-white/50 font-mono">
                    <span className="h-2 w-2 rounded-full bg-coral animate-pulse"/>
                    REC · 02:14 · transcribing
                  </div>
                </div>
              </div>
            </div>
          </div>

          <FeatureCard
            icon={FileSearch}
            tag="Scoring"
            title="Resume × JD match"
            body="Semantic vector match, not keyword counting. Explains why."
            delay={120}
          />
          <FeatureCard
            icon={Workflow}
            tag="Actions"
            title="Autonomous outcomes"
            body="Auto-reject, auto-invite, auto-shortlist on your rules."
            delay={180}
          />
          <FeatureCard
            icon={Code2}
            tag="Skills"
            title="Coding & MCQ tests"
            body="Live sandbox with anti-cheat. Scored against rubric, not vibes."
            delay={240}
            highlight
          />
          <FeatureCard
            icon={Mail}
            tag="Comms"
            title="Personalised rejections"
            body="Every no-thanks email written for the candidate, sent by us."
            delay={300}
          />
          <FeatureCard
            icon={ShieldCheck}
            tag="Compliance"
            title="Audit trail"
            body="Every AI decision logged. EEOC-ready export with one click."
            delay={360}
          />
        </div>
      </div>
    </section>
  );
};

const FeatureCard = ({ icon: Icon, tag, title, body, delay = 0, highlight = false }) => (
  <div
    className={`group rounded-[28px] border p-6 flex flex-col hover:-translate-y-1 transition-all duration-300 animate-fade-in-up ${
      highlight
        ? "bg-gradient-to-br from-amber-soft via-cream to-white border-amber/40 hover:shadow-[0_25px_60px_-25px_hsl(var(--amber)/0.5)]"
        : "border-charcoal/10 bg-white hover:border-coral/30 hover:shadow-[0_25px_60px_-25px_hsl(var(--charcoal)/0.2)]"
    }`}
    style={{ animationDelay: `${delay}ms`, animationFillMode: "both" }}
  >
    <div className="flex items-center justify-between mb-4">
      <div className={`h-11 w-11 rounded-2xl flex items-center justify-center transition-transform group-hover:scale-110 group-hover:rotate-3 ${
        highlight ? "bg-charcoal text-amber" : "bg-coral/10 text-coral"
      }`}>
        <Icon className="h-5 w-5" />
      </div>
      <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-charcoal/40">{tag}</span>
    </div>
    <h3 className="font-display font-bold text-xl text-charcoal leading-tight">
      {title}
    </h3>
    <p className="mt-2 text-sm text-charcoal-muted leading-relaxed">{body}</p>
  </div>
);
