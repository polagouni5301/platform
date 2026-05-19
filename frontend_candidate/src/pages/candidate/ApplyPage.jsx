import { CandidatePublicLayout } from "@/components/layout/CandidatePublicLayout";
import {
  MapPin,
  Check,
  X,
  ArrowRight,
  Camera,
  CheckCircle2,
  Lock,
  ChevronLeft,
  Briefcase,
  Clock,
  Sparkles,
  DollarSign,
} from "lucide-react";
import { useNavigate, useParams } from "react-router-dom";
import { getJobById } from "@/lib/candidateFlow";

const ApplyPage = () => {
  const navigate = useNavigate();
  const { jobId } = useParams();
  const job = getJobById(jobId);

  return (
    <CandidatePublicLayout className="bg-cream">
      <div className="flex-1 overflow-auto bg-cream relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 h-[400px] w-[800px] coral-glow opacity-20 pointer-events-none" />
        <div className="max-w-[1080px] mx-auto py-10 px-6 space-y-8 relative">
          <button
            onClick={() => navigate("/candidate/careers")}
            className="inline-flex items-center gap-2 text-xs font-bold text-charcoal-muted hover:text-charcoal transition"
          >
            <ChevronLeft className="h-4 w-4" />
            Return to careers
          </button>

          {/* Hero card */}
          <div className="relative overflow-hidden rounded-[32px] border border-charcoal/10 bg-white p-8 md:p-10 shadow-[0_8px_40px_-20px_rgba(0,0,0,0.1)]">
            <div className="absolute -top-20 -right-20 h-60 w-60 amber-glow opacity-30 pointer-events-none" />
            <div className="relative space-y-5">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-coral/10 text-coral text-[10px] font-bold uppercase tracking-widest">
                <Sparkles className="h-3 w-3" /> Now hiring
              </span>
              <h1 className="text-4xl md:text-5xl font-display font-bold text-charcoal tracking-tight leading-[1.05]">
                {job.title}
              </h1>
              <div className="flex flex-wrap gap-2 pt-1">
                <span className="px-3 py-1.5 rounded-full bg-cream border border-charcoal/10 text-xs font-bold text-charcoal flex items-center gap-1.5">
                  <Briefcase className="h-3 w-3 text-coral" /> {job.team}
                </span>
                <span className="px-3 py-1.5 rounded-full bg-charcoal text-white text-xs font-bold uppercase tracking-wider">
                  {job.level}
                </span>
                <span className="px-3 py-1.5 rounded-full bg-cream border border-charcoal/10 text-xs font-bold text-charcoal">
                  {job.workMode}
                </span>
                <span className="px-3 py-1.5 rounded-full bg-cream border border-charcoal/10 text-xs font-bold text-charcoal">
                  {job.employmentType}
                </span>
              </div>
              <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm font-medium text-charcoal-muted pt-2">
                <span className="flex items-center gap-1.5">
                  <MapPin className="h-4 w-4 text-coral" /> {job.location}
                </span>
                <span className="flex items-center gap-1.5">
                  <DollarSign className="h-4 w-4 text-coral" /> {job.salary}
                </span>
                <span className="flex items-center gap-1.5">
                  <Clock className="h-4 w-4 text-coral" /> ~10 min application
                </span>
              </div>
            </div>
          </div>

          <div className="grid gap-6 lg:grid-cols-[1fr_1.4fr]">
            {/* Left — process overview */}
            <div className="space-y-5">
              <div className="bg-white border border-charcoal/10 rounded-[28px] p-6 space-y-5 shadow-sm">
                <h3 className="text-[10px] font-bold text-charcoal uppercase tracking-widest">
                  How this works
                </h3>
                <div className="space-y-3">
                  {[
                    {
                      step: 1,
                      label: "Apply",
                      desc: "Submit your details",
                      active: true,
                    },
                    { step: 2, label: "Assessment", desc: "MCQ skills test" },
                    {
                      step: 3,
                      label: "Video interview",
                      desc: "AI-led short round",
                    },
                    { step: 4, label: "Coding", desc: "Live coding challenge" },
                  ].map((s) => (
                    <div
                      key={s.step}
                      className={`flex items-center gap-3 rounded-2xl p-3 transition ${s.active ? "bg-coral/5 border border-coral/20" : "border border-transparent"}`}
                    >
                      <div
                        className={`h-9 w-9 rounded-full flex items-center justify-center text-xs font-bold shrink-0 ${
                          s.active
                            ? "bg-coral text-white shadow-sm"
                            : "bg-cream border border-charcoal/10 text-charcoal-muted"
                        }`}
                      >
                        {s.step}
                      </div>
                      <div className="min-w-0">
                        <p
                          className={`text-sm font-bold ${s.active ? "text-charcoal" : "text-charcoal-muted"}`}
                        >
                          {s.label}
                        </p>
                        <p className="text-[11px] text-charcoal-muted">
                          {s.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-2xl bg-amber-soft border border-amber/20 p-4 flex items-start gap-3">
                <div className="h-9 w-9 rounded-xl bg-white flex items-center justify-center text-amber shrink-0 shadow-sm">
                  <Camera className="h-4 w-4" />
                </div>
                <div>
                  <p className="text-xs font-bold text-charcoal">
                    Camera & mic required
                  </p>
                  <p className="text-[11px] text-charcoal-muted leading-snug mt-0.5">
                    For device verification and the video interview round.
                  </p>
                </div>
              </div>

              <div className="rounded-2xl bg-cream border border-charcoal/10 p-4 flex items-start gap-3">
                <div className="h-9 w-9 rounded-xl bg-white flex items-center justify-center text-coral shrink-0 shadow-sm">
                  <Sparkles className="h-4 w-4" />
                </div>
                <div>
                  <p className="text-xs font-bold text-charcoal">
                    AI-powered screening
                  </p>
                  <p className="text-[11px] text-charcoal-muted leading-snug mt-0.5">
                    Get a decision in days, not weeks. Mailbox updates after
                    each round.
                  </p>
                </div>
              </div>
            </div>

            {/* Right — form */}
            <div className="bg-white border border-charcoal/10 rounded-[28px] p-8 md:p-10 shadow-sm space-y-7">
              <div>
                <h2 className="text-2xl font-display font-bold text-charcoal">
                  Apply now
                </h2>
                <p className="text-xs text-charcoal-muted mt-1">
                  Fields marked * are required.
                </p>
              </div>

              <div className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-bold text-charcoal uppercase tracking-widest">
                      Full name *
                    </label>
                    <input
                      type="text"
                      defaultValue="Jordan Mehta"
                      className="w-full h-11 px-4 rounded-xl border border-charcoal/10 bg-cream/30 text-sm focus:outline-none focus:ring-2 focus:ring-coral/20 focus:border-coral/40 focus:bg-white transition"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-bold text-charcoal uppercase tracking-widest">
                      Email address *
                    </label>
                    <input
                      type="email"
                      defaultValue="priya@email.com"
                      className="w-full h-11 px-4 rounded-xl border border-charcoal/10 bg-cream/30 text-sm focus:outline-none focus:ring-2 focus:ring-coral/20 focus:border-coral/40 focus:bg-white transition"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-bold text-charcoal uppercase tracking-widest flex justify-between">
                      Phone{" "}
                      <span className="text-charcoal-muted lowercase italic font-medium tracking-normal">
                        Optional
                      </span>
                    </label>
                    <input
                      type="tel"
                      placeholder="+91 98765 43210"
                      className="w-full h-11 px-4 rounded-xl border border-charcoal/10 bg-cream/30 text-sm focus:outline-none focus:ring-2 focus:ring-coral/20 focus:border-coral/40 focus:bg-white transition"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-bold text-charcoal uppercase tracking-widest flex justify-between">
                      LinkedIn{" "}
                      <span className="text-charcoal-muted lowercase italic font-medium tracking-normal">
                        Optional
                      </span>
                    </label>
                    <input
                      type="text"
                      placeholder="linkedin.com/in/yourname"
                      className="w-full h-11 px-4 rounded-xl border border-charcoal/10 bg-cream/30 text-sm focus:outline-none focus:ring-2 focus:ring-coral/20 focus:border-coral/40 focus:bg-white transition"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-[10px] font-bold text-charcoal uppercase tracking-widest">
                    Resume *
                  </label>
                  <div className="border-2 border-dashed border-coral/30 rounded-2xl p-5 bg-coral/5 flex items-center justify-between group hover:border-coral hover:bg-coral/10 transition cursor-pointer">
                    <div className="flex items-center gap-3">
                      <div className="h-11 w-11 rounded-xl bg-white flex items-center justify-center text-coral shadow-sm">
                        <CheckCircle2 className="h-5 w-5" />
                      </div>
                      <div className="space-y-0.5">
                        <span className="text-sm font-bold text-charcoal block">
                          resume_priya_mehta.pdf
                        </span>
                        <p className="text-[10px] text-charcoal-muted">
                          248KB · Ready to upload
                        </p>
                      </div>
                    </div>
                    <button className="h-8 w-8 rounded-full bg-white flex items-center justify-center text-charcoal-muted hover:text-coral transition">
                      <X className="h-4 w-4" />
                    </button>
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-[10px] font-bold text-charcoal uppercase tracking-widest flex justify-between">
                    Cover note{" "}
                    <span className="text-charcoal-muted lowercase italic font-medium tracking-normal">
                      Optional
                    </span>
                  </label>
                  <textarea
                    placeholder="Tell us why you're a great fit…"
                    className="w-full h-28 p-4 rounded-xl border border-charcoal/10 bg-cream/30 text-sm focus:outline-none focus:ring-2 focus:ring-coral/20 focus:border-coral/40 focus:bg-white transition resize-none"
                  />
                </div>

                <div className="flex items-start gap-3 pt-1">
                  <div className="h-5 w-5 rounded-md border border-charcoal/20 bg-coral flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="h-3.5 w-3.5 text-white" />
                  </div>
                  <p className="text-[12px] text-charcoal-muted leading-snug">
                    I agree to my data being processed for this application.{" "}
                    <button className="text-coral font-bold hover:underline">
                      Privacy policy
                    </button>
                  </p>
                </div>

                <button
                  onClick={() => navigate("/submission-done/application")}
                  className="w-full h-13 py-3.5 bg-coral text-white font-bold rounded-xl flex items-center justify-center gap-2 hover:bg-coral-dark transition shadow-lg shadow-coral/20"
                >
                  Submit application <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center gap-3 text-[11px] text-charcoal-muted/70 pb-8 pt-4">
            <div className="flex items-center gap-1.5">
              <Lock className="h-3 w-3" />
              <span>Your data is encrypted and stored securely</span>
            </div>
            <p>© 2024 HireIQ Partner Solutions · Powered by HireIQ</p>
          </div>
        </div>
      </div>
    </CandidatePublicLayout>
  );
};

export default ApplyPage;
