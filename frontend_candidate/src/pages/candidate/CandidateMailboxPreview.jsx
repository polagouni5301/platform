import { Link } from "react-router-dom";
import { ArrowRight, Link2, Mail, Paperclip } from "lucide-react";
import { getJobById, getVisibleMailboxMessages } from "@/lib/candidateFlow";

export default function CandidateMailboxPreview() {
  const job = getJobById();
  const message = getVisibleMailboxMessages("applied", job.title)[0];

  if (!message) {
    return null;
  }

  return (
    <div className="landing-scroll h-screen overflow-y-auto overflow-x-hidden bg-cream px-6 py-10">
      <div className="mx-auto max-w-4xl">
        <div className="overflow-hidden rounded-[30px] border border-charcoal/10 bg-white shadow-[0_24px_70px_-40px_rgba(15,23,42,0.3)]">
          <div className="border-b border-charcoal/10 bg-[linear-gradient(135deg,hsl(var(--cream)),white)] p-6">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-coral/10 text-coral">
                <Mail className="h-5 w-5" />
              </div>
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-coral">
                  Mailbox update
                </p>
                <h1 className="mt-1 font-display text-3xl font-bold text-charcoal">
                  {message.subject}
                </h1>
              </div>
            </div>
            <div className="mt-5 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-coral/10 text-sm font-bold text-coral">
                HR
              </div>
              <div>
                <p className="text-sm font-bold text-charcoal">{message.sender}</p>
                <p className="text-[11px] text-charcoal-muted">to you - {message.date}</p>
              </div>
            </div>
          </div>

          <div className="bg-[#fcfaf7] p-8">
            <div className="rounded-[28px] border border-charcoal/10 bg-white p-8 shadow-sm">
              <div className="space-y-4 text-sm leading-7 text-charcoal">
                {message.body.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>

              <div className="mt-8 rounded-2xl border border-charcoal/10 bg-cream p-5">
                <div className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-widest text-charcoal-muted">
                  <Paperclip className="h-3.5 w-3.5" />
                  Assessment access
                </div>
                <div className="mt-4 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                  <div>
                    <p className="text-sm font-bold text-charcoal">{job.title}</p>
                    <p className="text-sm text-charcoal-muted">
                      Continue from login to open your assessment setup.
                    </p>
                  </div>
                  <Link
                    to="/candidate/login"
                    className="inline-flex h-11 items-center justify-center gap-2 rounded-xl bg-coral px-6 text-sm font-bold text-white transition hover:bg-coral-dark shadow-sm"
                  >
                    Login to continue
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>

                <div className="mt-4 flex items-center gap-2 rounded-xl border border-charcoal/10 bg-white px-4 py-3">
                  <Link2 className="h-4 w-4 text-charcoal-muted" />
                  <span className="break-all text-sm font-medium text-coral">
                    /candidate/login
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
