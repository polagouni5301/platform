import { RecruiterLayout } from "@/components/layout/RecruiterLayout";
import {
  AlertTriangle,
  X,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  Check,
} from "lucide-react";
import { Link } from "react-router-dom";

const ReviewCard = ({ candidate }) => (
  <div className="bg-white border border-charcoal/10 rounded-[24px] overflow-hidden shadow-sm hover:border-coral/20 transition duration-300">
    <div className="flex flex-col lg:flex-row">
      {/* Left: Basic Info */}
      <div className="p-6 lg:w-[30%] border-b lg:border-b-0 lg:border-r border-charcoal/5 space-y-4">
        <div className="flex items-center gap-4">
          <div
            className={`h-12 w-12 rounded-full ${candidate.color} flex items-center justify-center text-sm font-bold`}
          >
            {candidate.initial}
          </div>
          <div>
            <h3 className="text-base font-bold text-charcoal">
              {candidate.name}
            </h3>
            <p className="text-[11px] text-charcoal-muted font-medium">
              {candidate.role} · {candidate.applied}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-6">
          <div>
            <div className="text-2xl font-display font-bold text-amber-warm leading-none">
              {candidate.score}
            </div>
            <div className="mt-1.5 px-2 py-0.5 rounded bg-[#FFF4E5] text-[#FF9933] text-[9px] font-black tracking-widest uppercase">
              HOLD
            </div>
          </div>
          <div className="space-y-1">
            <span className="text-[10px] font-bold text-charcoal-muted uppercase tracking-wider block">
              Review band
            </span>
            <span className="text-[11px] font-semibold text-charcoal">
              40–75 range
            </span>
          </div>
        </div>

        {candidate.flags > 0 && (
          <div className="flex items-center gap-1.5 text-[#FF4D4D] text-[11px] font-bold">
            <AlertTriangle className="h-3.5 w-3.5" />
            <span>
              {candidate.flags} red flag{candidate.flags > 1 ? "s" : ""}
            </span>
          </div>
        )}
      </div>

      {/* Centre: AI Reasoning */}
      <div className="p-6 lg:w-[45%] border-b lg:border-b-0 lg:border-r border-charcoal/5 space-y-4">
        <div className="flex items-center gap-2">
          <span className="text-[10px] font-bold text-charcoal-muted uppercase tracking-widest">
            AI reasoning
          </span>
          <Sparkles className="h-3.5 w-3.5 text-coral" />
        </div>

        <p className="text-[12px] text-charcoal-muted leading-relaxed font-medium">
          {candidate.reasoning}
        </p>

        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            {candidate.strengths.map((s) => (
              <div
                key={s}
                className="flex items-center gap-2 text-[11px] font-medium text-charcoal"
              >
                <CheckCircle2 className="h-3 w-3 text-coral" /> {s}
              </div>
            ))}
          </div>
          <div className="space-y-2">
            {candidate.concerns.map((s) => (
              <div
                key={s}
                className="flex items-center gap-2 text-[11px] font-medium text-charcoal"
              >
                <div className="h-1.5 w-1.5 rounded-full bg-amber-warm shrink-0" />{" "}
                {s}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Right: Actions */}
      <div className="p-6 lg:w-[25%] bg-cream/20 flex flex-col justify-between gap-4">
        <div className="space-y-2">
          <button className="w-full h-10 rounded-xl border border-coral text-coral text-xs font-bold hover:bg-coral hover:text-white transition duration-200">
            Interview schedule
          </button>
          <div className="grid grid-cols-2 gap-2">
            <button className="h-10 rounded-xl border border-coral text-coral text-xs font-bold hover:bg-coral hover:text-white transition duration-200">
              Shortlist
            </button>
            <button className="h-10 rounded-xl border border-[#FF4D4D] text-[#FF4D4D] text-xs font-bold hover:bg-[#FF4D4D] hover:text-white transition duration-200">
              Reject
            </button>
          </div>
          <Link
            to={`/candidates/${candidate.id}`}
            className="text-[11px] font-bold text-charcoal-muted hover:text-coral flex items-center justify-center gap-1.5 pt-1 transition"
          >
            View full profile <ArrowRight className="h-3 w-3" />
          </Link>
        </div>

        <div className="space-y-1.5">
          <label className="text-[10px] font-bold text-charcoal-muted uppercase tracking-widest">
            Reason for decision *
          </label>
          <input
            type="text"
            placeholder="Add a quick note…"
            className="w-full h-9 px-3 rounded-lg border border-charcoal/10 bg-white text-xs focus:outline-none focus:ring-1 focus:ring-coral transition"
          />
        </div>
      </div>
    </div>
  </div>
);

const ReviewQueue = () => {
  const candidates = [
    {
      id: 3,
      name: "Sara Khan",
      initial: "SK",
      color: "bg-[#FFF4E5] text-[#FF9933]",
      role: "Senior Backend Engineer",
      applied: "Applied 1 day ago",
      score: 68,
      flags: 1,
      reasoning:
        "Sara shows solid Python with 3 years experience matching core requirements. Most recent tenure of 8 months raises a stability concern. Video answers showed good technical depth but slightly below average communication clarity.",
      strengths: ["Strong Python + PostgreSQL", "Clear technical answers"],
      concerns: ["8-month tenure — short"],
    },
    {
      id: 4,
      name: "James Osei",
      initial: "JO",
      color: "bg-coral/10 text-coral",
      role: "Senior Backend Engineer",
      applied: "Applied 4 days ago",
      score: 62,
      flags: 0,
      reasoning:
        "Strong academic background but limited industry experience in high-scale systems. Portfolio shows excellent SQL knowledge. Communication is a strong point.",
      strengths: ["High potential", "Strong SQL fundamentals"],
      concerns: ["Limited production exp"],
    },
    {
      id: 5,
      name: "Aman Tiwari",
      initial: "AT",
      color: "bg-[#FFF4E5] text-[#FF9933]",
      role: "Sales Executive",
      applied: "Applied 1 day ago",
      score: 55,
      flags: 2,
      reasoning:
        "Relevant industry experience but video responses were somewhat brief and lacked specific data-driven outcomes. Multiple red flags in resume gaps.",
      strengths: ["Domain knowledge", "Local market experience"],
      concerns: ["Brief video answers", "Employment gaps"],
    },
  ];

  return (
    <RecruiterLayout title="Review Queue">
      <div className="p-8 space-y-6 max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <h1 className="font-display font-bold text-2xl text-charcoal">
              Review queue
            </h1>
            <span className="text-sm text-charcoal-muted mt-1">
              (3 candidates waiting)
            </span>
          </div>
          <div className="flex items-center gap-3">
            <select className="h-10 px-3 pr-8 rounded-xl border border-charcoal/10 bg-white text-sm font-medium focus:outline-none appearance-none">
              <option>Filter by job: All jobs</option>
            </select>
            <select className="h-10 px-3 pr-8 rounded-xl border border-charcoal/10 bg-white text-sm font-medium focus:outline-none appearance-none">
              <option>Sort: Score high to low</option>
            </select>
          </div>
        </div>

        {/* Banner */}
        <div className="bg-amber-soft border border-amber-warm/20 rounded-2xl p-4 flex items-center justify-between animate-in fade-in slide-in-from-top-2 duration-500">
          <div className="flex items-center gap-3">
            <div className="h-8 w-8 rounded-full bg-amber-warm/10 flex items-center justify-center text-amber-warm">
              <AlertTriangle className="h-4 w-4" />
            </div>
            <p className="text-sm font-medium text-charcoal">
              These 3 candidates scored 40–75 and were flagged for human review.{" "}
              <span className="font-bold">Average wait: 18 hours.</span>
            </p>
          </div>
          <button className="text-charcoal-muted hover:text-charcoal transition">
            <X className="h-4 w-4" />
          </button>
        </div>

        {/* Review Stack */}
        <div className="space-y-4">
          {candidates.map((c) => (
            <ReviewCard key={c.id} candidate={c} />
          ))}

          {/* Empty state hint */}
          <div className="bg-white/40 border border-dashed border-charcoal/10 rounded-[24px] p-8 flex flex-col items-center justify-center text-center opacity-60">
            <div className="h-10 w-10 rounded-full bg-coral/5 flex items-center justify-center text-coral/40 mb-3">
              <Check className="h-5 w-5" />
            </div>
            <h4 className="text-sm font-bold text-charcoal-muted">
              Queue is clear
            </h4>
            <p className="text-xs text-charcoal-muted mt-1">
              Last cleared 2 hours ago.
            </p>
          </div>
        </div>
      </div>
    </RecruiterLayout>
  );
};

export default ReviewQueue;
