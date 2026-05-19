import { RecruiterLayout } from "@/components/layout/RecruiterLayout";
import {
  Search,
  ChevronRight,
  Upload,
  Link as LinkIcon,
  Pause,
  ArrowUpDown,
  LayoutGrid,
  List,
  AlertCircle,
  ArrowLeft,
} from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { Checkbox } from "@/components/ui/checkbox";

const StatItem = ({ label, value, active = false }) => (
  <div
    className={`px-6 py-1 flex flex-col items-center border-r border-charcoal/5 last:border-0 ${active ? "opacity-100" : "opacity-60"}`}
  >
    <span className="text-xl font-display font-bold text-charcoal">
      {value}
    </span>
    <span className="text-[10px] font-bold text-charcoal-muted uppercase tracking-wider">
      {label}
    </span>
  </div>
);

const PipelineView = () => {
  const navigate = useNavigate();
  const [selectedCandidates, setSelectedCandidates] = useState([]);

  const candidates = [
    {
      id: 1,
      name: "Jordan Mehta",
      initial: "JS",
      color: "bg-coral/10 text-coral",
      score: 84,
      resume: 81,
      video: 88,
      stage: "Shortlisted",
      verdict: "SHORTLIST",
      verdictColor: "bg-coral/10 text-coral",
      flags: 0,
      applied: "2d",
    },
    {
      id: 2,
      name: "Rahul Sharma",
      initial: "RS",
      color: "bg-amber-soft text-amber-warm",
      score: 77,
      resume: 74,
      video: 81,
      stage: "Shortlisted",
      verdict: "SHORTLIST",
      verdictColor: "bg-coral/10 text-coral",
      flags: 0,
      applied: "3d",
    },
    {
      id: 3,
      name: "Sara Khan",
      initial: "SK",
      color: "bg-[#FFF4E5] text-[#FF9933]",
      score: 68,
      resume: 65,
      video: 72,
      stage: "HOLD",
      verdict: "HOLD",
      verdictColor: "bg-[#FFF4E5] text-[#FF9933]",
      flags: 1,
      applied: "1d",
    },
    {
      id: 4,
      name: "James Osei",
      initial: "JO",
      color: "bg-charcoal/5 text-charcoal-muted",
      score: 62,
      resume: 60,
      video: null,
      stage: "Video invited",
      verdict: "HOLD",
      verdictColor: "bg-[#FFF4E5] text-[#FF9933]",
      flags: 0,
      applied: "4d",
    },
    {
      id: 5,
      name: "Aman Tiwari",
      initial: "AT",
      color: "bg-[#FFF4E5] text-[#FF9933]",
      score: 55,
      resume: 55,
      video: null,
      stage: "Video invited",
      verdict: "HOLD",
      verdictColor: "bg-[#FFF4E5] text-[#FF9933]",
      flags: 2,
      applied: "1d",
    },
    {
      id: 6,
      name: "Li Wei",
      initial: "LW",
      color: "bg-charcoal/5 text-charcoal-muted",
      score: 38,
      resume: 38,
      video: null,
      stage: "Rejected",
      verdict: "REJECT",
      verdictColor: "bg-[#FFE5E5] text-[#FF4D4D]",
      flags: 0,
      applied: "3d",
    },
    {
      id: 7,
      name: "Omar Aziz",
      initial: "OA",
      color: "bg-charcoal/5 text-charcoal-muted",
      score: 31,
      resume: 31,
      video: null,
      stage: "Rejected",
      verdict: "REJECT",
      verdictColor: "bg-[#FFE5E5] text-[#FF4D4D]",
      flags: 1,
      applied: "5d",
    },
  ];

  const toggleSelect = (id) => {
    setSelectedCandidates((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id],
    );
  };

  return (
    <RecruiterLayout title="Pipeline">
      <div className="p-6 space-y-5">
        {/* Breadcrumb & Header */}
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <button
                onClick={() => navigate("/jobs")}
                className="h-8 w-8 rounded-lg border border-charcoal/10 flex items-center justify-center text-charcoal-muted hover:text-charcoal hover:bg-white transition shadow-sm"
              >
                <ArrowLeft className="h-4 w-4" />
              </button>
              <div className="flex items-center gap-2 text-xs font-bold text-charcoal-muted uppercase tracking-wider">
                <Link to="/jobs" className="hover:text-coral transition">
                  Jobs
                </Link>
                <ChevronRight className="h-3 w-3" />
                <span className="text-charcoal">Senior Backend Engineer</span>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <h1 className="font-display font-bold text-xl text-charcoal">
                Senior Backend Engineer
              </h1>
              <div className="flex gap-2">
                <span className="px-2 py-0.5 rounded-md bg-white border border-charcoal/10 text-charcoal-muted text-[10px] font-bold uppercase tracking-wider">
                  Engineering
                </span>
                <span className="px-2 py-0.5 rounded-md bg-coral/10 text-coral text-[10px] font-bold uppercase tracking-wider">
                  Senior
                </span>
                <span className="px-2 py-0.5 rounded-md bg-white border border-charcoal/10 text-charcoal-muted text-[10px] font-bold uppercase tracking-wider">
                  Remote
                </span>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <button className="h-10 px-4 rounded-xl border border-charcoal/10 bg-white text-sm font-bold text-charcoal hover:bg-cream/40 transition flex items-center gap-2">
                <Upload className="h-4 w-4" /> Upload resumes
              </button>
              <button className="h-10 px-4 rounded-xl border border-charcoal/10 bg-white text-sm font-bold text-charcoal hover:bg-cream/40 transition flex items-center gap-2">
                <LinkIcon className="h-4 w-4" /> Copy link
              </button>
              <button className="text-sm font-bold text-charcoal-muted hover:text-charcoal transition flex items-center gap-1.5 ml-2">
                <Pause className="h-4 w-4" /> Pause job
              </button>
            </div>
          </div>
        </div>

        {/* Pipeline Summary Bar */}
        <div className="bg-white border border-charcoal/10 rounded-2xl p-3 flex items-center justify-center shadow-sm">
          <StatItem label="Applied" value="48" active />
          <StatItem label="Screened" value="38" />
          <StatItem label="Video done" value="24" />
          <StatItem label="Shortlisted" value="9" />
          <StatItem label="Rejected" value="27" />
        </div>

        {/* Filter Bar */}
        <div className="flex items-center justify-between gap-3">
          <div className="flex items-center gap-3 flex-1 min-w-0">
            <div className="relative w-full max-w-[240px] shrink-0">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-charcoal-muted" />
              <input
                type="text"
                placeholder="Search candidates…"
                className="w-full h-9 pl-9 pr-4 rounded-lg border border-charcoal/10 bg-white text-xs focus:outline-none transition shadow-sm"
              />
            </div>
            <div className="flex gap-1 shrink-0">
              {[
                "All",
                "Applied",
                "Video invited",
                "Video done",
                "Shortlisted",
                "Rejected",
                "HOLD (3)",
              ].map((stage, i) => (
                <button
                  key={stage}
                  className={`px-2.5 py-1.5 rounded-lg text-[10px] font-bold whitespace-nowrap transition shadow-sm border ${
                    i === 0
                      ? "bg-coral text-white border-coral"
                      : stage.includes("HOLD")
                        ? "bg-[#FFF4E5] text-[#FF9933] border-[#FF9933]/10"
                        : "bg-white border-charcoal/10 text-charcoal-muted hover:text-charcoal"
                  }`}
                >
                  {stage}
                </button>
              ))}
            </div>
          </div>
          <div className="flex items-center gap-2 shrink-0">
            <button className="h-9 px-3 rounded-lg border border-charcoal/10 bg-white text-[11px] font-bold text-charcoal flex items-center gap-2 hover:bg-cream/40 transition shadow-sm">
              Score{" "}
              <ChevronRight className="h-3.5 w-3.5 rotate-90 opacity-40" />
            </button>
            <button className="h-9 px-3 rounded-lg border border-charcoal/10 bg-white text-[11px] font-bold text-charcoal flex items-center gap-2 hover:bg-cream/40 transition shadow-sm">
              Sort <ArrowUpDown className="h-3.5 w-3.5 opacity-40" />
            </button>
            <div className="flex border border-charcoal/10 rounded-lg overflow-hidden shadow-sm">
              <button className="p-2 bg-white border-r border-charcoal/10 text-charcoal-muted hover:text-charcoal transition">
                <LayoutGrid className="h-3.5 w-3.5" />
              </button>
              <button className="p-2 bg-white text-coral transition">
                <List className="h-3.5 w-3.5" />
              </button>
            </div>
          </div>
        </div>

        {/* Candidates Table */}
        <div className="bg-white border border-charcoal/10 rounded-2xl overflow-hidden shadow-sm relative">
          {selectedCandidates.length > 0 && (
            <div className="absolute top-0 inset-x-0 h-12 bg-coral text-cream px-6 flex items-center justify-between z-10 animate-in slide-in-from-top duration-300">
              <div className="flex items-center gap-6">
                <span className="text-sm font-bold">
                  {selectedCandidates.length} selected
                </span>
                <div className="h-4 w-px bg-white/20" />
                <div className="flex gap-4">
                  <button className="text-xs font-bold hover:text-amber transition">
                    Advance
                  </button>
                  <button className="text-xs font-bold hover:text-amber transition">
                    Reject
                  </button>
                  <button className="text-xs font-bold hover:text-amber transition">
                    Export
                  </button>
                </div>
              </div>
              <button
                onClick={() => setSelectedCandidates([])}
                className="text-xs font-bold opacity-60 hover:opacity-100 transition"
              >
                Clear
              </button>
            </div>
          )}

          <table className="w-full text-sm">
            <thead>
              <tr className="text-left text-[11px] uppercase tracking-wider text-charcoal-muted bg-cream/30">
                <th className="pl-6 py-3 font-medium w-12">
                  <Checkbox
                    checked={selectedCandidates.length === candidates.length}
                    onCheckedChange={(checked) => {
                      if (checked)
                        setSelectedCandidates(candidates.map((c) => c.id));
                      else setSelectedCandidates([]);
                    }}
                  />
                </th>
                <th className="px-3 py-3 font-medium">Candidate</th>
                <th className="px-3 py-3 font-medium text-center">Total Score</th>
                <th className="px-3 py-3 font-medium text-center">Resume score  </th>
                <th className="px-3 py-3 font-medium text-center">Interview Score</th>
                <th className="px-3 py-3 font-medium">Stage</th>
                <th className="px-3 py-3 font-medium">AI verdict</th>
                <th className="px-3 py-3 font-medium">Flags</th>
                <th className="pr-6 py-3 font-medium text-right">Applied</th>
              </tr>
            </thead>
            <tbody>
              {candidates.map((c) => (
                <tr
                  key={c.id}
                  className={`group border-t border-charcoal/5 hover:bg-cream/40 cursor-pointer transition ${selectedCandidates.includes(c.id) ? "bg-cream/60" : ""}`}
                  onClick={() => navigate(`/candidates/${c.id}`)}
                >
                  <td
                    className="pl-6 py-4"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <Checkbox
                      checked={selectedCandidates.includes(c.id)}
                      onCheckedChange={() => toggleSelect(c.id)}
                    />
                  </td>
                  <td className="px-3 py-4">
                    <div className="flex items-center gap-3">
                      <div
                        className={`h-8 w-8 rounded-full ${c.color} flex items-center justify-center text-[11px] font-bold shrink-0`}
                      >
                        {c.initial}
                      </div>
                      <span className="font-bold text-charcoal whitespace-nowrap">
                        {c.name}
                      </span>
                    </div>
                  </td>
                  <td className="px-3 py-4 text-center">
                    <span
                      className={`inline-flex items-center justify-center h-7 min-w-[40px] px-2 rounded-full font-bold text-[13px] ${
                        c.score >= 75
                        ? "bg-coral/10 text-coral"
                          : c.score >= 40
                            ? "bg-[#FFF4E5] text-[#FF9933]"
                            : "bg-[#FFE5E5] text-[#FF4D4D]"
                      }`}
                    >
                      {c.score}
                    </span>
                  </td>
                  <td className="px-3 py-4 text-center text-charcoal-muted">
                    {c.resume}
                  </td>
                  <td className="px-3 py-4 text-center text-charcoal-muted">
                    {c.video || "—"}
                  </td>
                  <td className="px-3 py-4">
                    <span
                      className={`text-[12px] font-medium ${c.stage === "Shortlisted" ? "text-coral" : c.stage === "Rejected" ? "text-[#FF4D4D]" : "text-charcoal"}`}
                    >
                      {c.stage}
                    </span>
                  </td>
                  <td className="px-3 py-4">
                    <span
                      className={`px-2 py-0.5 rounded text-[9px] font-black tracking-wider ${c.verdictColor}`}
                    >
                      {c.verdict}
                    </span>
                  </td>
                  <td className="px-3 py-4">
                    {c.flags > 0 && (
                      <span className="text-[#FF4D4D] flex items-center gap-1">
                        <AlertCircle className="h-3.5 w-3.5" />
                        <span className="text-[11px] font-bold">{c.flags}</span>
                      </span>
                    )}
                  </td>
                  <td className="pr-6 py-4 text-right text-charcoal-muted text-xs font-medium">
                    {c.applied}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="pt-2 flex flex-col items-center gap-3">
          <p className="text-xs text-charcoal-muted">
            Showing 7 of 48 candidates
          </p>
          <button className="px-6 py-2 rounded-xl border border-charcoal/10 bg-white text-xs font-bold text-charcoal hover:bg-cream/40 transition">
            Load more
          </button>
        </div>
      </div>
    </RecruiterLayout>
  );
};

export default PipelineView;
