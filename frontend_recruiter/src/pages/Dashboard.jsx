import { useNavigate } from "react-router-dom";
import { AlertTriangle, ArrowRight } from "lucide-react";
import { RecruiterLayout } from "@/components/layout/RecruiterLayout";
import { recruiterJobs } from "@/lib/recruiterMock";

const Metric = ({ label, value, tone }) => (
  <div className="rounded-2xl border border-charcoal/10 bg-white p-5">
    <div className="text-xs text-charcoal-muted">{label}</div>
    <div
      className={`mt-2 font-display text-3xl font-bold ${tone === "good" ? "text-coral" : tone === "bad" ? "text-destructive" : "text-charcoal"}`}
    >
      {value}
    </div>
  </div>
);

const StatusPill = ({ s }) => (
  <span
    className={`inline-flex items-center gap-1 rounded-full px-2 py-1 text-[10px] font-semibold ${
      s === "Active"
        ? "bg-amber/20 text-coral"
        : s === "Hold"
          ? "bg-charcoal/10 text-charcoal-muted"
          : "bg-emerald-100 text-emerald-700"
    }`}
  >
    <span
      className={`h-1.5 w-1.5 rounded-full ${
        s === "Active"
          ? "bg-amber"
          : s === "Hold"
            ? "bg-charcoal-muted"
            : "bg-emerald-500"
      }`}
    />
    {s}
  </span>
);

const feed = [
  {
    dot: "bg-destructive",
    text: "Auto-rejected Ahmed S. - score 31 - Senior Backend Engineer",
    time: "2 min ago",
  },
  {
    dot: "bg-blue-500",
    text: "Sent interview invite to Jordan M. - score 74",
    time: "8 min ago",
  },
  {
    dot: "bg-amber",
    text: "Shortlisted Sara K. - Product Manager",
    time: "1 hr ago",
  },
  {
    dot: "bg-destructive",
    text: "Auto-rejected James T. - score 28",
    time: "2 hrs ago",
  },
  {
    dot: "bg-blue-500",
    text: "Sent interview invite to Mohan R. - score 81",
    time: "3 hrs ago",
  },
];

const Dashboard = () => {
  const navigate = useNavigate();

  return (
    <RecruiterLayout title="Dashboard">
      <div className="space-y-6 p-6">
        <div>
          <h1 className="font-display text-2xl font-bold text-charcoal">
            Good morning, Alex
          </h1>
          <p className="mt-1 text-sm text-charcoal-muted">
            Here's what the AI has been doing across your active jobs.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
          <Metric label="Active jobs" value="6" />
          <Metric label="Applications this week" value="48" />
          <Metric label="AI auto-rejected today" value="12" tone="bad" />
          <Metric label="Shortlisted" value="9" tone="good" />
        </div>

        <div className="grid gap-5 lg:grid-cols-5">
          <div className="overflow-hidden rounded-2xl border border-charcoal/10 bg-white lg:col-span-3">
            <div className="flex items-center justify-between border-b border-charcoal/10 px-5 py-4">
              <h3 className="font-display text-base font-bold text-charcoal">
                Active jobs
              </h3>
              <button
                onClick={() => navigate("/jobs")}
                className="text-xs font-semibold text-coral hover:underline"
              >
                View all
              </button>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full table-fixed text-[12px]">
                <thead>
                  <tr className="text-left text-[10px] uppercase tracking-wider text-charcoal-muted">
                    <th className="w-[29%] px-5 py-3 font-medium">Job title</th>
                    <th className="w-[10%] px-2 py-3 text-center font-medium">
                      Applied
                    </th>
                    <th className="w-[15%] px-2 py-3 text-center font-medium">
                      Interview attended
                    </th>
                    <th className="w-[13%] px-2 py-3 text-center font-medium">
                      AI Rejected
                    </th>
                    <th className="w-[12%] px-2 py-3 text-center font-medium">
                      Shortlisted
                    </th>
                    <th className="w-[10%] px-2 py-3 text-center font-medium">
                      Pending
                    </th>
                    <th className="w-[11%] px-3 py-3 font-medium">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {recruiterJobs.map((job) => (
                    <tr
                      key={job.id}
                      onClick={() => navigate(`/jobs/${job.id}/pipeline`)}
                      className="cursor-pointer border-t border-charcoal/5 transition hover:bg-cream/40"
                    >
                      <td className="px-5 py-5 font-medium text-charcoal">
                        <div className="leading-snug">{job.title}</div>
                      </td>
                      <td className="px-2 py-5 text-center text-charcoal">
                        {job.applied}
                      </td>
                      <td className="px-2 py-5 text-center text-charcoal">
                        {job.interviewAttended}
                      </td>
                      <td className="px-2 py-5 text-center font-semibold text-destructive">
                        {job.aiRejected}
                      </td>
                      <td className="px-2 py-5 text-center font-semibold text-charcoal">
                        {job.shortlisted}
                      </td>
                      <td className="px-2 py-5 text-center">
                        {job.pending > 0 ? (
                          <span className="inline-flex h-5 min-w-5 items-center justify-center rounded-full bg-amber-soft px-1.5 text-[10px] font-bold text-amber-warm">
                            {job.pending}
                          </span>
                        ) : (
                          <span className="text-[12px] text-charcoal-muted">0</span>
                        )}
                      </td>
                      <td className="px-3 py-5">
                        <StatusPill s={job.status} />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="flex flex-col rounded-2xl border border-charcoal/10 bg-white p-5 lg:col-span-2">
            <h3 className="font-display text-base font-bold text-charcoal">
              AI activity
            </h3>
            <div className="mt-3 flex flex-wrap gap-1.5">
              {["All", "Rejections", "Invites", "Shortlists"].map((pill, index) => (
                <button
                  key={pill}
                  className={`rounded-full px-3 py-1 text-[11px] font-medium ${
                    index === 0
                      ? "bg-coral text-cream"
                      : "bg-cream text-charcoal-muted hover:text-charcoal"
                  }`}
                >
                  {pill}
                </button>
              ))}
            </div>
            <ul className="mt-4 flex-1 space-y-3">
              {feed.map((item, index) => (
                <li key={index} className="flex items-start gap-2.5">
                  <span className={`mt-1.5 h-2 w-2 flex-none rounded-full ${item.dot}`} />
                  <div className="min-w-0 flex-1">
                    <p className="text-[13px] leading-snug text-charcoal">
                      {item.text}
                    </p>
                    <p className="mt-0.5 text-[11px] text-charcoal-muted">
                      {item.time}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
            <div className="mt-4 flex items-start gap-2.5 rounded-xl border border-amber-warm/30 bg-amber-soft p-3.5">
              <AlertTriangle className="mt-0.5 h-4 w-4 flex-none text-amber-warm" />
              <div className="flex-1">
                <p className="text-[12px] font-medium text-charcoal">
                  Review queue has 3 candidates waiting 18h+
                </p>
                <button className="mt-1 inline-flex items-center gap-1 text-[12px] font-semibold text-amber-warm hover:underline">
                  Review now <ArrowRight className="h-3 w-3" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </RecruiterLayout>
  );
};

export default Dashboard;
