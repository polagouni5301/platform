import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Briefcase,
  Building2,
  Clock3,
  MapPin,
  Sparkles,
  Wallet,
  Zap,
} from "lucide-react";
import { candidateJobs } from "@/lib/candidateFlow";

const quickFilters = [
  "All roles",
  "Remote friendly",
  "Full-time",
  "Senior level",
];

const filterJobs = (jobs, activeFilter) => {
  if (activeFilter === "Remote friendly") {
    return jobs.filter(
      (job) => job.workMode === "Remote" || job.location === "Remote",
    );
  }

  if (activeFilter === "Full-time") {
    return jobs.filter((job) => job.employmentType === "Full-time");
  }

  if (activeFilter === "Senior level") {
    return jobs.filter((job) => job.level.toLowerCase().includes("senior"));
  }

  return jobs;
};

export function CandidateJobsBoard({ publicView = false, showHero = true }) {
  const [activeFilter, setActiveFilter] = useState("All roles");

  const filteredJobs = useMemo(
    () => filterJobs(candidateJobs, activeFilter),
    [activeFilter],
  );
  const featuredJob = filteredJobs[0] ?? candidateJobs[0];
  const spotlightMetrics = useMemo(
    () => [
      { label: "Active openings", value: String(filteredJobs.length) },
      {
        label: "Hiring teams",
        value: String(new Set(filteredJobs.map((job) => job.team)).size),
      },
      {
        label: "Remote roles",
        value: String(
          filteredJobs.filter(
            (job) => job.workMode === "Remote" || job.location === "Remote",
          ).length,
        ),
      },
    ],
    [filteredJobs],
  );

  return (
    <div className="mx-auto flex w-full max-w-[1320px] flex-col gap-6">
      {showHero ? (
        <section className="relative overflow-hidden rounded-[32px] border border-charcoal/10 bg-charcoal p-8 text-white shadow-[0_24px_80px_-40px_rgba(0,0,0,0.45)] md:p-10">
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "linear-gradient(135deg, hsl(var(--charcoal)) 0%, #211722 55%, hsl(var(--charcoal)) 100%)",
          }}
        />

        <div className="pointer-events-none absolute -left-20 top-10 h-48 w-48 rounded-full coral-glow opacity-40" />
        <div className="pointer-events-none absolute right-0 top-0 h-56 w-56 rounded-full amber-glow opacity-30" />

        <div className="relative grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-[11px] font-bold uppercase tracking-[0.28em] text-coral">
              <Sparkles className="h-3.5 w-3.5" />
              {publicView ? "Careers" : "Candidate portal"}
            </div>

            <div className="space-y-4">
              <h2 className="max-w-3xl text-4xl font-display font-bold leading-tight md:text-5xl">
                Find roles that match how you want to work, grow, and build.
              </h2>
              <p className="max-w-2xl text-sm leading-7 text-white/70 md:text-base">
                Browse curated openings from HireIQ Partner Solutions, compare
                team fit at a glance, and move straight into the application
                flow when something clicks.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              {quickFilters.map((filter) => (
                <button
                  key={filter}
                  type="button"
                  onClick={() => setActiveFilter(filter)}
                  aria-pressed={activeFilter === filter}
                  className={`rounded-full border px-4 py-2 text-xs font-bold transition ${
                    activeFilter === filter
                      ? "border-coral bg-coral text-white shadow-lg shadow-coral/20"
                      : "border-white/10 bg-white/5 text-white/75 hover:border-white/25 hover:bg-white/10"
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
            {spotlightMetrics.map((metric) => (
              <div
                key={metric.label}
                className="rounded-[24px] border border-white/10 bg-white/5 p-5 backdrop-blur-sm"
              >
                <p className="text-[10px] font-bold uppercase tracking-widest text-white/45">
                  {metric.label}
                </p>
                <p className="mt-3 text-3xl font-display font-bold text-white">
                  {metric.value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      ) : null}

      <section className="space-y-6">
        <div className="flex flex-col gap-3 rounded-[28px] border border-charcoal/10 bg-white p-6 shadow-sm md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-[11px] font-bold uppercase tracking-widest text-charcoal-muted">
              Open opportunities
            </p>
            <h3 className="mt-2 text-2xl font-display font-bold text-charcoal">
              Choose your next move
            </h3>
            <p className="mt-2 max-w-2xl text-sm leading-6 text-charcoal-muted">
              Each role includes its team, level, work mode, and a snapshot of
              what you would own.
            </p>
          </div>
          {/* <div className="rounded-2xl bg-cream px-4 py-3 text-right">
            <p className="text-[10px] font-bold uppercase tracking-widest text-charcoal-muted">
              Currently live
            </p>
            <p className="mt-1 text-2xl font-display font-bold text-charcoal">
              {filteredJobs.length} roles
            </p>
          </div> */}
        </div>

        <div className="grid gap-5">
          {filteredJobs.map((job, index) => (
            <div
              key={job.id}
              className="group relative overflow-hidden rounded-[30px] border border-charcoal/10 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_18px_45px_-30px_rgba(0,0,0,0.45)] md:p-7"
            >
              <div className="absolute inset-x-0 top-0 h-1 bg-[linear-gradient(90deg,hsl(var(--coral)),hsl(var(--amber)))] opacity-0 transition group-hover:opacity-100" />

              <div className="flex flex-col gap-6">
                <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                  <div className="space-y-4">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="rounded-full bg-coral/10 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-coral">
                        {index === 0 ? "Featured role" : "Now reviewing"}
                      </span>
                      <span className="rounded-full border border-charcoal/10 bg-cream px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-charcoal-muted">
                        {job.team}
                      </span>
                    </div>

                    <div>
                      <h3 className="text-2xl font-display font-bold text-charcoal">
                        {job.title}
                      </h3>
                      <p className="mt-2 max-w-3xl text-sm leading-7 text-charcoal-muted">
                        {job.summary}
                      </p>
                    </div>
                  </div>

                  <Link
                    to={`/apply/${job.id}`}
                    className="inline-flex h-11 items-center justify-center gap-2 rounded-xl bg-coral px-5 text-sm font-bold text-white shadow-lg shadow-coral/20 transition hover:bg-coral-dark"
                  >
                    Apply now
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>

                <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
                  <div className="rounded-2xl border border-charcoal/10 bg-cream/60 p-4">
                    <p className="text-[10px] font-bold uppercase tracking-widest text-charcoal-muted">
                      Location
                    </p>
                    <div className="mt-2 flex items-center gap-2 text-sm font-bold text-charcoal">
                      <MapPin className="h-4 w-4 text-coral" />
                      {job.location}
                    </div>
                  </div>

                  <div className="rounded-2xl border border-charcoal/10 bg-cream/60 p-4">
                    <p className="text-[10px] font-bold uppercase tracking-widest text-charcoal-muted">
                      Work mode
                    </p>
                    <div className="mt-2 flex items-center gap-2 text-sm font-bold text-charcoal">
                      <Building2 className="h-4 w-4 text-coral" />
                      {job.workMode}
                    </div>
                  </div>

                  <div className="rounded-2xl border border-charcoal/10 bg-cream/60 p-4">
                    <p className="text-[10px] font-bold uppercase tracking-widest text-charcoal-muted">
                      Role type
                    </p>
                    <div className="mt-2 flex items-center gap-2 text-sm font-bold text-charcoal">
                      <Clock3 className="h-4 w-4 text-coral" />
                      {job.employmentType}
                    </div>
                  </div>

                  <div className="rounded-2xl border border-charcoal/10 bg-cream/60 p-4">
                    <p className="text-[10px] font-bold uppercase tracking-widest text-charcoal-muted">
                      Compensation
                    </p>
                    <div className="mt-2 flex items-center gap-2 text-sm font-bold text-charcoal">
                      <Wallet className="h-4 w-4 text-coral" />
                      {job.salary}
                    </div>
                  </div>
                </div>

                <div className="grid gap-5 lg:grid-cols-[0.8fr_1.2fr]">
                  <div className="rounded-[24px] border border-charcoal/10 bg-charcoal/[0.03] p-5">
                    <p className="text-[10px] font-bold uppercase tracking-widest text-charcoal-muted">
                      Career level
                    </p>
                    <div className="mt-3 flex items-center gap-3">
                      <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-charcoal text-white shadow-sm">
                        <Briefcase className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="text-base font-bold text-charcoal">
                          {job.level}
                        </p>
                        <p className="text-xs text-charcoal-muted">
                          Hiring for immediate pipeline needs
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="rounded-[24px] border border-charcoal/10 bg-white p-5">
                    <p className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-charcoal-muted">
                      <Zap className="h-3.5 w-3.5 text-amber" />
                      What you'll drive
                    </p>
                    <div className="mt-4 grid gap-3 md:grid-cols-3">
                      {job.highlights.map((highlight) => (
                        <div
                          key={highlight}
                          className="rounded-2xl bg-cream/70 p-4 text-sm leading-6 text-charcoal"
                        >
                          {highlight}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="grid gap-6">
          <div className="overflow-hidden rounded-[30px] border border-charcoal/10 bg-white shadow-sm">
            <div className="bg-[linear-gradient(135deg,hsl(var(--cream)),white)] p-6">
              <p className="text-[11px] font-bold uppercase tracking-widest text-coral">
                Role spotlight
              </p>
              <h3 className="mt-2 text-2xl font-display font-bold text-charcoal">
                {featuredJob.title}
              </h3>
              <p className="mt-2 text-sm leading-6 text-charcoal-muted">
                A strong fit if you want meaningful ownership, fast iteration,
                and close collaboration with AI and product teams.
              </p>
            </div>

            <div className="grid gap-4 p-6 md:grid-cols-2 xl:grid-cols-4">
              {[
                ["Team", featuredJob.team],
                ["Level", featuredJob.level],
                ["Work setup", `${featuredJob.workMode} - ${featuredJob.location}`],
                ["Package", featuredJob.salary],
              ].map(([label, value]) => (
                <div
                  key={label}
                  className="rounded-2xl border border-charcoal/10 bg-cream/40 p-4"
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
            <div className="px-6 pb-6">
              <Link
                to={`/apply/${featuredJob.id}`}
                className="inline-flex h-11 w-full items-center justify-center gap-2 rounded-xl bg-charcoal px-5 text-sm font-bold text-white transition hover:bg-charcoal/90"
              >
                View featured role
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>

          <div className="rounded-[30px] border border-amber/20 bg-amber-soft/70 p-6 shadow-sm">
            <p className="text-[11px] font-bold uppercase tracking-widest text-amber">
              Application flow
            </p>
            <div className="mt-4 space-y-3">
              {[
                "Apply with your resume and optional cover note",
                "Receive your next step directly in the candidate mailbox",
                "Move through assessments and interviews from one portal",
              ].map((item, index) => (
                <div
                  key={item}
                  className="flex items-start gap-3 rounded-2xl bg-white/70 p-3"
                >
                  <div className="flex h-7 w-7 items-center justify-center rounded-full bg-amber text-xs font-bold text-white">
                    {index + 1}
                  </div>
                  <p className="text-sm leading-6 text-charcoal">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
