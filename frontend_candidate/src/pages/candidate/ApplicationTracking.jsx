import { CandidateDashboardLayout } from "@/components/layout/CandidateDashboardLayout";
import {
  CheckCircle2,
  Clock,
  Briefcase,
  ChevronRight,
  Trophy,
  Sparkles,
  Activity,
  ArrowRight,
  CalendarClock,
  Radar,
} from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import {
  getCandidateApplications,
  getJobById,
  getStoredCandidateStage,
  hasReachedStage,
} from "@/lib/candidateFlow";

export default function ApplicationTracking() {
  const [stage, setStage] = useState("browsing");
  const [selectedApplicationId, setSelectedApplicationId] = useState("");

  useEffect(() => {
    setStage(getStoredCandidateStage());
  }, []);

  const applications = useMemo(() => getCandidateApplications(stage), [stage]);

  useEffect(() => {
    if (!selectedApplicationId && applications.length > 0) {
      setSelectedApplicationId(applications[0].id);
    }
  }, [applications, selectedApplicationId]);

  const selectedApplication =
    applications.find(
      (application) => application.id === selectedApplicationId,
    ) ?? applications[0];

  if (!selectedApplication) {
    return (
      <CandidateDashboardLayout title="Application Tracking">
        <div className="mx-auto max-w-4xl rounded-[28px] border border-charcoal/10 bg-white p-8 shadow-sm">
          <h2 className="text-2xl font-display font-bold text-charcoal">
            No applications yet
          </h2>
          <p className="mt-2 text-sm text-charcoal-muted">
            Once you apply to a role, you will see its tracking timeline here.
          </p>
        </div>
      </CandidateDashboardLayout>
    );
  }

  const selectedJob = getJobById(selectedApplication.jobId);
  const timelineStage = selectedApplication.stage ?? "applied";

  const stages = [
    {
      key: "applied",
      label: "Application received",
      date: hasReachedStage(timelineStage, "applied")
        ? selectedApplication.appliedDate
        : "Pending",
    },
    {
      key: "mcq_done",
      label: "Skills assessment",
      date: hasReachedStage(timelineStage, "mcq_done")
        ? "Apr 27, 2026"
        : "Pending",
    },
    {
      key: "video_done",
      label: "Video interview",
      date: hasReachedStage(timelineStage, "video_done")
        ? "Apr 27, 2026"
        : "Pending",
    },
    {
      key: "coding_done",
      label: "Machine coding",
      date: hasReachedStage(timelineStage, "coding_done")
        ? "Apr 27, 2026"
        : "Pending",
    },
    { key: "offer", label: "Final review", date: "Pending" },
  ];

  const getStatus = (_, index) => {
    const stageOrder = [
      "applied",
      "mcq_done",
      "video_done",
      "coding_done",
      "offer",
    ];
    const currentIndex = stageOrder.indexOf(timelineStage);

    if (index < currentIndex) return "completed";
    if (index === currentIndex) return "current";
    return "upcoming";
  };

  const currentStage =
    stages.find((_, index) => getStatus("", index) === "current") ?? stages[0];
  const previousStage = [...stages].reverse().find((_, indexFromEnd) => {
    const index = stages.length - 1 - indexFromEnd;
    return getStatus("", index) === "completed";
  });
  const completedCount = stages.filter(
    (_, index) => getStatus("", index) === "completed",
  ).length;
  const currentStageIndex = stages.findIndex(
    (_, index) => getStatus("", index) === "current",
  );
  const progressPercent = Math.max(
    18,
    Math.round(((currentStageIndex + 1) / stages.length) * 100),
  );
  const nextStage = stages[currentStageIndex + 1];
  const statusCopy =
    timelineStage === "coding_done"
      ? "Your application is now queued for recruiter review."
      : `You're currently in ${currentStage.label.toLowerCase()} and still on track.`;
  const nextActionCopy = nextStage
    ? `Next up: ${nextStage.label.toLowerCase()}.`
    : "You have completed every scheduled stage so far.";

  return (
    <CandidateDashboardLayout title="Application Tracking">
      <div className="mx-auto flex min-h-[calc(100dvh-10rem)] max-w-6xl flex-col gap-6">
        <div className="rounded-[32px] border border-charcoal/10 bg-[linear-gradient(135deg,hsl(var(--charcoal)),#211722)] p-8 text-white shadow-sm">
          <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <p className="text-[11px] font-bold uppercase tracking-widest text-coral">
                Application command center
              </p>
              <h2 className="mt-3 font-display text-4xl font-bold">
                {selectedJob.title}
              </h2>
              <p className="mt-3 max-w-2xl text-sm leading-7 text-white/65">
                Track every completed stage, see what is currently active, and
                review all submitted applications from one place.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-3">
              {[
                { icon: Activity, label: "Current", value: currentStage.label },
                {
                  icon: Trophy,
                  label: "Previous",
                  value: previousStage ? previousStage.label : "None yet",
                },
                {
                  icon: Sparkles,
                  label: "Status",
                  value:
                    timelineStage === "coding_done"
                      ? "Under review"
                      : "In progress",
                },
              ].map(({ icon: Icon, label, value }) => (
                <div
                  key={label}
                  className="rounded-[24px] border border-white/10 bg-white/5 p-4"
                >
                  <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-2xl bg-coral/10 text-coral">
                    <Icon className="h-4 w-4" />
                  </div>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-white/40">
                    {label}
                  </p>
                  <p className="mt-2 text-sm font-bold text-white">{value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-[320px_1fr]">
          <div className="overflow-hidden rounded-[28px] border border-charcoal/10 bg-white shadow-sm">
            <div className="border-b border-charcoal/10 bg-cream/30 p-6">
              <h2 className="text-xl font-display font-bold text-charcoal">
                Applied jobs
              </h2>
              <p className="mt-1 text-sm text-charcoal-muted">
                Select any application to review its full progress.
              </p>
            </div>
            <div className="space-y-3 p-3">
              {applications.map((application) => {
                const job = getJobById(application.jobId);
                const active = application.id === selectedApplicationId;

                return (
                  <button
                    key={application.id}
                    onClick={() => setSelectedApplicationId(application.id)}
                    className={`w-full rounded-2xl border p-4 text-left transition ${
                      active
                        ? "border-coral bg-coral/5 shadow-sm"
                        : "border-charcoal/10 hover:bg-cream"
                    }`}
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <p className="text-sm font-bold text-charcoal">
                          {job.title}
                        </p>
                        <p className="mt-1 text-xs text-charcoal-muted">
                          {application.company}
                        </p>
                      </div>
                      <ChevronRight
                        className={`h-4 w-4 ${
                          active ? "text-coral" : "text-charcoal-muted"
                        }`}
                      />
                    </div>
                    <div className="mt-3 flex items-center gap-2 text-[11px] text-charcoal-muted">
                      <Briefcase className="h-3.5 w-3.5" />
                      Applied on {application.appliedDate}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          <div className="overflow-hidden rounded-3xl border border-charcoal/10 bg-white shadow-sm">
            <div className="border-b border-charcoal/5 bg-[linear-gradient(135deg,hsl(var(--cream)),white)] p-8">
              <h2 className="text-2xl font-display font-bold text-charcoal">
                {selectedJob.title}
              </h2>
              <p className="mt-1 text-charcoal-muted">
                {selectedApplication.company} - Candidate journey timeline
              </p>
              <div className="mt-5 grid gap-4 md:grid-cols-3">
                {[
                  ["Applied on", selectedApplication.appliedDate],
                  ["Current stage", currentStage.label],
                  [
                    "Final state",
                    timelineStage === "coding_done"
                      ? "Submitted for review"
                      : "Still active",
                  ],
                ].map(([label, value]) => (
                  <div
                    key={label}
                    className="rounded-2xl border border-charcoal/10 bg-white p-4"
                  >
                    <p className="text-[10px] font-bold uppercase tracking-widest text-charcoal-muted">
                      {label}
                    </p>
                    <p className="mt-2 text-sm font-bold text-charcoal">
                      {value}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-8">
              <div className="grid gap-6 xl:grid-cols-[1.15fr_0.85fr]">
                <div>
                  <h3 className="mb-8 text-sm font-bold uppercase tracking-wider text-charcoal">
                    Journey map
                  </h3>

                  <div className="space-y-4">
                    {stages.map((item, index) => {
                      const status = getStatus(item.key, index);
                      const isLast = index === stages.length - 1;

                      return (
                        <div key={item.key} className="relative pl-16">
                          {!isLast ? (
                            <div
                              className={`absolute left-[1.15rem] top-10 h-[calc(100%+1rem)] w-px ${
                                status === "completed"
                                  ? "bg-coral/35"
                                  : "bg-charcoal/10"
                              }`}
                            />
                          ) : null}

                          <div
                            className={`absolute left-0 top-1 flex h-9 w-9 items-center justify-center rounded-full border-4 border-white shadow ${
                              status === "completed"
                                ? "bg-coral text-white"
                                : status === "current"
                                  ? "border-amber/25 bg-amber-soft text-amber"
                                  : "bg-white text-charcoal/20"
                            }`}
                          >
                            {status === "completed" ? (
                              <CheckCircle2 className="h-[18px] w-[18px]" />
                            ) : status === "current" ? (
                              <Clock className="h-[18px] w-[18px]" />
                            ) : (
                              <div className="h-2.5 w-2.5 rounded-full bg-charcoal/20" />
                            )}
                          </div>

                          <div
                            className={`rounded-[24px] border p-5 shadow-sm ${
                              status === "completed"
                                ? "border-coral bg-coral/[0.03]"
                                : status === "current"
                                  ? "border-amber bg-amber-soft/40"
                                  : "border-charcoal/10 bg-white"
                            }`}
                          >
                            <div className="flex items-start justify-between gap-4">
                              <div>
                                <h4
                                  className={`text-base font-bold ${
                                    status === "upcoming"
                                      ? "text-charcoal/45"
                                      : "text-charcoal"
                                  }`}
                                >
                                  {item.label}
                                </h4>
                                <time
                                  className={`mt-2 block text-xs font-medium ${
                                    status === "upcoming"
                                      ? "text-charcoal/35"
                                      : "text-charcoal-muted"
                                  }`}
                                >
                                  {item.date}
                                </time>
                              </div>

                              {status === "completed" ? (
                                <span className="rounded-full bg-coral/10 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-coral">
                                  Done
                                </span>
                              ) : null}

                              {status === "current" ? (
                                <span className="rounded-full bg-white px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-amber shadow-sm">
                                  In progress
                                </span>
                              ) : null}
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                <div className="space-y-5">
                  <div className="overflow-hidden rounded-[28px] border border-charcoal/10 bg-[linear-gradient(145deg,#141822_0%,#231a22_55%,#35241f_100%)] p-6 text-white shadow-[0_28px_80px_-36px_rgba(11,15,26,0.7)]">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-coral">
                          Momentum
                        </p>
                        <h3 className="mt-2 font-display text-2xl font-bold">
                          You are {progressPercent}% through this journey
                        </h3>
                      </div>
                      <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white/10 text-coral">
                        <Radar className="h-5 w-5" />
                      </div>
                    </div>

                    <div className="mt-5 h-2 overflow-hidden rounded-full bg-white/10">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-coral to-amber"
                        style={{ width: `${progressPercent}%` }}
                      />
                    </div>

                    <div className="mt-5 grid gap-3 sm:grid-cols-3">
                      {[
                        ["Completed", String(completedCount)],
                        ["Current", currentStage.label],
                        [
                          "Next",
                          nextStage ? nextStage.label : "Awaiting review",
                        ],
                      ].map(([label, value]) => (
                        <div
                          key={label}
                          className="rounded-2xl border border-white/10 bg-white/5 p-3.5"
                        >
                          <p className="text-[9px] font-bold uppercase tracking-widest text-white/45">
                            {label}
                          </p>
                          <p className="mt-2 text-sm font-bold text-white">
                            {value}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="rounded-[26px] border border-charcoal/10 bg-white p-5 shadow-sm">
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-coral">
                          What happens now
                        </p>
                        <h3 className="mt-2 text-lg font-display font-bold text-charcoal">
                          Clear next-step guidance
                        </h3>
                      </div>
                      <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-coral/10 text-coral">
                        <ArrowRight className="h-[18px] w-[18px]" />
                      </div>
                    </div>

                    <div className="mt-4 space-y-3">
                      {[
                        statusCopy,
                        nextActionCopy,
                        "You can switch between applications anytime from the left panel without losing context.",
                      ].map((item) => (
                        <div
                          key={item}
                          className="flex items-start gap-3 rounded-2xl bg-cream/70 px-3.5 py-3"
                        >
                          <div className="mt-1 h-2 w-2 shrink-0 rounded-full bg-coral" />
                          <p className="text-sm leading-6 text-charcoal-muted">
                            {item}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="rounded-[26px] border border-charcoal/10 bg-[linear-gradient(135deg,hsl(var(--cream)),white)] p-5 shadow-sm">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-amber-soft text-amber">
                        <CalendarClock className="h-[18px] w-[18px]" />
                      </div>
                      <div>
                        <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-charcoal-muted">
                          Response window
                        </p>
                        <p className="mt-1 text-sm font-bold text-charcoal">
                          Recruiter updates typically land within 2-3 business days.
                        </p>
                      </div>
                    </div>
                    <p className="mt-4 text-sm leading-6 text-charcoal-muted">
                      Keep an eye on your mailbox for the next unlock, review
                      request, or scheduling step.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </CandidateDashboardLayout>
  );
}
