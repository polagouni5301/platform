import { CandidateLayout } from "@/components/layout/CandidateLayout";
import {
  AlertTriangle,
  CheckCircle2,
  XCircle,
  RefreshCw,
  Database,
  PlayCircle,
  TerminalSquare,
  Check,
} from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { setStoredCandidateStage } from "@/lib/candidateFlow";
import { getInterviewAppUrl } from "@/lib/appUrls";

const AssessmentCoding = () => {
  const navigate = useNavigate();
  const starterCode = [
    "SELECT id, email, created_at",
    "FROM users",
    "WHERE created_at >= NOW() - INTERVAL '30 days'",
    "ORDER BY created_at DESC",
    "LIMIT 100;",
  ].join("\n");
  const notesCode = [
    "# Notes",
    "- Consider an index on created_at",
    "- Avoid a full table scan on 10M rows",
    "- Think about pagination strategy",
  ].join("\n");

  const [activeTab, setActiveTab] = useState("solution.sql");
  const [language, setLanguage] = useState("SQL");
  const [editorValue, setEditorValue] = useState(starterCode);
  const [runState, setRunState] = useState("idle");

  const resetEditor = () => {
    setEditorValue(activeTab === "solution.sql" ? starterCode : notesCode);
    setRunState("idle");
  };

  const openTab = (tab) => {
    setActiveTab(tab);
    setEditorValue(tab === "solution.sql" ? starterCode : notesCode);
    setRunState("idle");
  };

  const handleRun = () => {
    setRunState("running");

    window.setTimeout(() => {
      if (
        editorValue.toLowerCase().includes("limit 100") &&
        editorValue.toLowerCase().includes("order by")
      ) {
        setRunState("passing");
      } else {
        setRunState("partial");
      }
    }, 900);
  };

  return (
    <CandidateLayout
      className="bg-cream"
      showLogo={true}
      viewportLock
    >
      <div className="flex flex-none items-center justify-center gap-2 border-b border-amber-warm/10 bg-amber-soft/90 px-6 py-1.5">
        <AlertTriangle className="h-3 w-3 text-amber-warm" />
        <p className="text-[9px] font-bold uppercase tracking-widest text-charcoal/70">
          Tab switching and copy-paste are monitored during this assessment
        </p>
      </div>

      <div className="flex min-h-0 flex-1 overflow-hidden bg-cream px-4 pb-2 pt-2">
        <div className="flex h-full min-h-0 flex-1 overflow-hidden rounded-[24px] border border-charcoal/10 bg-white shadow-sm">
          <div className="w-[38%] overflow-y-auto border-r border-charcoal/10 bg-white p-5">
            <div className="space-y-6">
              <div className="space-y-3">
                <span className="block text-[10px] font-bold uppercase tracking-widest text-charcoal-muted">
                  Problem 1
                </span>
                <h2 className="flex items-center gap-3 text-[22px] font-display font-bold text-charcoal">
                  <Database className="h-6 w-6 text-coral" />
                  Optimise database query
                </h2>
                <div className="flex flex-wrap gap-2">
                  <span className="rounded-full bg-coral/10 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-coral">
                    45 min round
                  </span>
                  <span className="rounded-full bg-amber-soft px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-amber">
                    Database systems
                  </span>
                </div>
              </div>

              <div className="space-y-5 text-[13px] leading-relaxed text-charcoal">
                <p>
                  Given a{" "}
                  <code className="rounded bg-cream px-1.5 py-0.5 font-mono">
                    users
                  </code>{" "}
                  table with 10 million rows, write a SQL query that
                  efficiently retrieves all users who registered in the last 30
                  days, ordered by registration date descending.
                </p>

                <div className="space-y-3">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-charcoal">
                    Example
                  </h4>
                  <div className="rounded-xl border border-charcoal/5 bg-cream/30 p-4 font-mono text-[12px] text-charcoal-muted">
                    <p className="mb-2 font-bold text-charcoal">Input:</p>
                    <p>users table with columns: id, email, created_at, status...</p>
                  </div>
                  <div className="rounded-xl border border-charcoal/5 bg-cream/30 p-4 font-mono text-[12px] text-charcoal-muted">
                    <p className="mb-2 font-bold text-charcoal">
                      Expected Output:
                    </p>
                    <p>Paginated list of users ordered DESC by created_at...</p>
                  </div>
                </div>

                <div className="space-y-3">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-charcoal">
                    Constraints
                  </h4>
                  <ul className="space-y-2 text-xs font-medium text-charcoal-muted">
                    <li className="flex items-center gap-2">
                      <div className="h-1 w-1 rounded-full bg-coral" />
                      Use PostgreSQL syntax
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="h-1 w-1 rounded-full bg-coral" />
                      Query must use index if available
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="h-1 w-1 rounded-full bg-coral" />
                      Handle 10M rows efficiently
                    </li>
                  </ul>
                </div>

                <div className="space-y-3">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-charcoal">
                    Evaluation focus
                  </h4>
                  <div className="grid gap-3">
                    {[
                      "Correctness and valid query structure",
                      "Efficiency and index-aware filtering",
                      "Readable reasoning and practical tradeoffs",
                    ].map((item) => (
                      <div
                        key={item}
                        className="flex gap-3 rounded-xl border border-charcoal/10 bg-cream/40 p-3"
                      >
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-coral" />
                        <p className="text-xs leading-relaxed text-charcoal">
                          {item}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-1 flex-col overflow-hidden">
            <div className="flex h-11 items-center justify-between border-b border-white/5 bg-charcoal px-4">
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-2">
                  {["SQL", "Python"].map((item) => (
                    <button
                      key={item}
                      onClick={() => setLanguage(item)}
                      className={`rounded-md px-3 py-1 text-[11px] font-bold transition ${
                        language === item
                          ? "bg-white text-charcoal"
                          : "bg-white/5 text-white/70 hover:bg-white/10"
                      }`}
                    >
                      {item}
                    </button>
                  ))}
                </div>
                <div className="h-5 w-px bg-white/10" />
                <div className="flex items-center gap-2">
                  {["solution.sql", "notes.md"].map((tab) => (
                    <button
                      key={tab}
                      onClick={() => openTab(tab)}
                      className={`rounded-md px-3 py-1 text-[11px] font-bold transition ${
                        activeTab === tab
                          ? "bg-coral text-white"
                          : "bg-white/5 text-white/70 hover:bg-white/10"
                      }`}
                    >
                      {tab}
                    </button>
                  ))}
                </div>
              </div>
              <button
                onClick={resetEditor}
                className="flex items-center gap-1.5 text-[10px] font-bold text-white/40 transition hover:text-white"
              >
                <RefreshCw className="h-3 w-3" /> Reset to starter
              </button>
            </div>

            <div className="custom-scrollbar flex-1 overflow-y-auto bg-charcoal p-5 font-mono text-[12px] leading-relaxed">
              <div className="grid h-full grid-cols-[32px_1fr] gap-4">
                <div className="select-none text-right text-white/20">
                  {Array.from({
                    length: Math.max(editorValue.split("\n").length, 15),
                  }).map((_, index) => (
                    <div key={index} className="h-6">
                      {index + 1}
                    </div>
                  ))}
                </div>
                <textarea
                  value={editorValue}
                  onChange={(event) => setEditorValue(event.target.value)}
                  spellCheck={false}
                  className="h-full w-full resize-none bg-transparent text-white/90 outline-none"
                />
              </div>
            </div>

            <div className="flex h-[30%] min-h-[190px] flex-col border-t border-white/5 bg-[#141722]">
              <div className="flex items-center justify-between border-b border-white/5 p-4">
                <div className="flex items-center gap-3">
                  <button
                    onClick={handleRun}
                    className="flex h-9 items-center gap-2 rounded-lg bg-amber px-4 text-xs font-bold text-charcoal transition hover:bg-[#f2a632]"
                  >
                    <PlayCircle className="h-3.5 w-3.5" />
                    {runState === "running" ? "Running..." : "Run code"}
                  </button>
                  <button
                    onClick={() => {
                      setStoredCandidateStage("coding_done");
                      window.location.assign(
                        getInterviewAppUrl("/submission-done/coding"),
                      );
                    }}
                    className="h-9 rounded-lg bg-coral px-4 text-xs font-bold text-white transition hover:bg-coral-dark"
                  >
                    Submit solution
                  </button>
                </div>
                <div className="flex items-center gap-4">
                  <div className="text-[11px] font-mono font-bold text-white/40">
                    42:18
                  </div>
                  <div className="text-[10px] font-bold uppercase tracking-widest text-white/30">
                    {language} mode
                  </div>
                </div>
              </div>

              <div className="flex-1 overflow-y-auto p-5 font-mono text-[12px] space-y-2.5">
                <div className="flex items-center justify-between">
                  <p className="text-[10px] font-bold uppercase tracking-widest text-white/40">
                    Test results
                  </p>
                  <div className="flex items-center gap-2 text-[10px] uppercase tracking-widest text-white/30">
                    <TerminalSquare className="h-3 w-3" />
                    Runtime feedback
                  </div>
                </div>

                {runState === "idle" ? (
                  <div className="rounded-xl border border-white/10 bg-white/[0.03] p-4 leading-relaxed text-white/50">
                    Press <span className="text-white/80">Run code</span> to
                    simulate validation against performance and correctness
                    checks.
                  </div>
                ) : null}

                {runState === "running" ? (
                  <div className="animate-pulse rounded-xl border border-white/10 bg-white/[0.03] p-4 leading-relaxed text-white/70">
                    Executing test suite, checking query structure, and
                    evaluating index-friendly filters...
                  </div>
                ) : null}

                {runState === "passing" ? (
                  <div className="space-y-2.5">
                    <div className="flex items-center gap-2 text-coral">
                      <CheckCircle2 className="h-3.5 w-3.5" /> Test 1 passed
                    </div>
                    <div className="flex items-center gap-2 text-coral">
                      <CheckCircle2 className="h-3.5 w-3.5" /> Test 2 passed
                    </div>
                    <div className="flex items-center gap-2 text-coral">
                      <CheckCircle2 className="h-3.5 w-3.5" /> Test 3 passed
                    </div>
                    <div className="rounded-xl border border-coral/20 bg-coral/10 p-4 text-white/80">
                      Strong result. Your query preserves ordering, includes a
                      row cap, and reads as index-aware.
                    </div>
                  </div>
                ) : null}

                {runState === "partial" ? (
                  <div className="space-y-2.5">
                    <div className="flex items-center gap-2 text-coral">
                      <CheckCircle2 className="h-3.5 w-3.5" /> Test 1 passed
                    </div>
                    <div className="flex items-center gap-2 text-coral">
                      <CheckCircle2 className="h-3.5 w-3.5" /> Test 2 passed
                    </div>
                    <div className="flex items-center gap-2 text-[hsl(var(--coral))]">
                      <XCircle className="h-3.5 w-3.5" /> Test 3 failed -
                      Expected 100 rows ordered DESC by `created_at`
                    </div>
                    <div className="rounded-xl border border-[hsl(var(--coral))]/20 bg-[hsl(var(--coral))]/10 p-4 text-white/80">
                      Hint: make sure the final query preserves descending sort
                      order and an explicit result limit.
                    </div>
                  </div>
                ) : null}
              </div>
            </div>
          </div>
        </div>
      </div>
    </CandidateLayout>
  );
};

export default AssessmentCoding;
