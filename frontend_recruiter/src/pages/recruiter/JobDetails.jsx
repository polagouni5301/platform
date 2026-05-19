import { Link, useParams } from "react-router-dom";
import { RecruiterLayout } from "@/components/layout/RecruiterLayout";
import {
  ArrowRight,
  Briefcase,
  MapPin,
  Clock,
  BadgeCheck,
  Users,
  Ban,
} from "lucide-react";
import { getRecruiterJobById } from "@/lib/recruiterMock";

export default function JobDetails() {
  const { id } = useParams();
  const job = getRecruiterJobById(id);

  return (
    <RecruiterLayout title={job.title}>
      <div className="p-6 space-y-6">
        <div className="rounded-[28px] border border-charcoal/10 bg-white p-8 shadow-sm">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
            <div className="space-y-4">
              <div>
                <p className="text-[11px] font-bold uppercase tracking-widest text-coral">
                  {job.department}
                </p>
                <h1 className="mt-2 text-3xl font-display font-bold text-charcoal">
                  {job.title}
                </h1>
              </div>
              <div className="flex flex-wrap gap-4 text-sm text-charcoal-muted">
                <span className="flex items-center gap-1.5">
                  <MapPin className="h-4 w-4" /> {job.location}
                </span>
                <span className="flex items-center gap-1.5">
                  <Briefcase className="h-4 w-4" /> {job.workType} ·{" "}
                  {job.employmentType}
                </span>
                <span className="flex items-center gap-1.5">
                  <Clock className="h-4 w-4" /> Posted {job.postedAgo}
                </span>
              </div>
            </div>

            <div className="flex flex-wrap gap-3">
              <Link
                to={`/jobs/${job.id}/pipeline`}
                className="h-11 px-5 rounded-xl bg-coral text-white font-bold text-sm flex items-center gap-2 hover:bg-charcoal transition"
              >
                View pipeline <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to={`/jobs/edit/${job.id}`}
                className="h-11 px-5 rounded-xl border border-charcoal/10 bg-white text-charcoal font-bold text-sm hover:bg-cream transition"
              >
                Edit job
              </Link>
            </div>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-4">
          {[
            { icon: Users, label: "Candidates", value: String(job.candidates) },
            {
              icon: BadgeCheck,
              label: "Shortlisted",
              value: String(job.shortlisted),
            },
            { icon: Ban, label: "AI rejected", value: String(job.aiRejected) },
            {
              icon: Clock,
              label: "Pending review",
              value: String(job.pending),
            },
          ].map(({ icon: Icon, label, value }) => (
            <div
              key={label}
              className="rounded-[24px] border border-charcoal/10 bg-white p-5 shadow-sm"
            >
              <div className="h-11 w-11 rounded-2xl bg-coral/10 text-coral flex items-center justify-center mb-4">
                <Icon className="h-5 w-5" />
              </div>
              <p className="text-[11px] font-bold uppercase tracking-widest text-charcoal-muted">
                {label}
              </p>
              <p className="mt-3 text-3xl font-display font-bold text-charcoal">
                {value}
              </p>
            </div>
          ))}
        </div>

        <div className="grid gap-6 lg:grid-cols-[1fr_0.9fr]">
          <div className="rounded-[28px] border border-charcoal/10 bg-white p-8 shadow-sm">
            <h2 className="text-xl font-display font-bold text-charcoal">
              Role snapshot
            </h2>
            <div className="mt-5 grid gap-4 md:grid-cols-2">
              {[
                ["Level", job.level],
                ["Work type", job.workType],
                ["Employment", job.employmentType],
                ["Department", job.department],
              ].map(([label, value]) => (
                <div
                  key={label}
                  className="rounded-2xl bg-cream/50 border border-charcoal/10 p-4"
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

          <div className="rounded-[28px] border border-charcoal/10 bg-white p-8 shadow-sm">
            <h2 className="text-xl font-display font-bold text-charcoal">
              Screening flow
            </h2>
            <div className="mt-5 space-y-3">
              {[
                "Resume match and AI rejection thresholds are active.",
                "Skills assessment is sent first for qualified applicants.",
                "Video interview follows automatically after assessment completion.",
                "Machine coding is used as the final practical round for this role.",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-2xl bg-cream/50 border border-charcoal/10 p-4 text-sm text-charcoal leading-relaxed"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </RecruiterLayout>
  );
}
