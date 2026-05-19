import { CandidateDashboardLayout } from "@/components/layout/CandidateDashboardLayout";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { Mail, ArrowRight, Paperclip, Link2, Inbox } from "lucide-react";
import {
  getJobById,
  getStoredCandidateStage,
  getVisibleMailboxMessages,
} from "@/lib/candidateFlow";

export default function CandidateMailbox() {
  const job = getJobById();
  const [selectedMail, setSelectedMail] = useState(null);
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const visibleMessages = getVisibleMailboxMessages(
      getStoredCandidateStage(),
      job.title,
    ).reverse();
    setMessages(visibleMessages);
    setSelectedMail(visibleMessages[0] ?? null);
  }, []);

  return (
    <CandidateDashboardLayout title="Mailbox">
      <div className="flex min-h-[calc(100dvh-10rem)] overflow-hidden rounded-[30px] border border-charcoal/10 bg-white shadow-sm">
        <div className="w-[320px] border-r border-charcoal/10 flex flex-col bg-[#f7f3ef]">
          <div className="p-4 border-b border-charcoal/10 bg-white/90">
            <div className="h-12 rounded-2xl bg-cream border border-charcoal/10 px-4 flex items-center gap-3">
              <Mail className="h-4 w-4 text-charcoal-muted" />
              <span className="text-sm text-charcoal-muted">
                Search in mail
              </span>
            </div>
          </div>
          <div className="px-3 py-3 text-[11px] font-bold uppercase tracking-widest text-charcoal-muted">
            Inbox
          </div>
          <div className="flex-1 overflow-y-auto">
            {messages.map((email) => (
              <button
                key={email.id}
                onClick={() => setSelectedMail(email)}
                className={`w-full text-left px-4 py-3 border-b border-charcoal/5 transition flex flex-col gap-1.5 relative ${
                  selectedMail?.id === email.id
                    ? "bg-coral/8 border-l-4 border-l-coral"
                    : "hover:bg-white/70 border-l-4 border-l-transparent"
                }`}
              >
                <div className="flex justify-between items-baseline w-full">
                  <span
                    className={`text-sm font-bold truncate ${selectedMail?.id === email.id ? "text-charcoal" : "text-charcoal"}`}
                  >
                    {email.sender}
                  </span>
                  <span className="text-[10px] font-medium text-charcoal-muted whitespace-nowrap ml-2">
                    {email.date}
                  </span>
                </div>
                <span className="text-xs font-bold text-charcoal truncate">
                  {email.subject}
                </span>
                <span className="text-xs text-charcoal-muted line-clamp-1">
                  {email.preview}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Email Content */}
        <div className="flex-1 flex flex-col bg-white">
          {selectedMail ? (
            <>
              <div className="p-6 border-b border-charcoal/10 flex items-start justify-between bg-white">
                <div>
                  <h2 className="text-[28px] font-display font-bold text-charcoal mb-4">
                    {selectedMail.subject}
                  </h2>
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-coral/10 text-coral flex items-center justify-center font-bold">
                      HR
                    </div>
                    <div>
                      <p className="text-sm font-bold text-charcoal">
                        {selectedMail.sender}
                      </p>
                      <p className="text-[11px] text-charcoal-muted">
                        to me • {selectedMail.date}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-8 flex-1 overflow-y-auto bg-[#fcfaf7]">
                <div className="max-w-3xl rounded-[28px] border border-charcoal/10 bg-white p-8 shadow-sm">
                  <div className="space-y-4 text-sm text-charcoal leading-7">
                    {selectedMail.body.map((paragraph) => (
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
                        <p className="text-sm font-bold text-charcoal">
                          {job.title}
                        </p>
                        <p className="text-sm text-charcoal-muted">
                          HireIQ Partner Solutions candidate portal
                        </p>
                      </div>
                      <Link
                        to={selectedMail.ctaHref}
                        className="h-11 px-6 rounded-xl bg-coral text-white font-bold text-sm flex items-center justify-center gap-2 hover:bg-coral-dark transition shadow-sm"
                      >
                        {selectedMail.ctaLabel}{" "}
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                    </div>

                    <div className="mt-4 flex items-center gap-2 rounded-xl bg-white px-4 py-3 border border-charcoal/10">
                      <Link2 className="h-4 w-4 text-charcoal-muted" />
                      <Link
                        to={selectedMail.ctaHref}
                        className="text-sm text-coral font-medium break-all hover:underline"
                      >
                        {selectedMail.ctaHref}
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </>
          ) : (
            <div className="flex-1 flex flex-col items-center justify-center text-charcoal-muted">
              <div className="h-16 w-16 rounded-3xl bg-cream flex items-center justify-center mb-4">
                <Inbox className="h-8 w-8 text-charcoal/30" />
              </div>
              <p className="text-lg font-medium">
                Your mailbox is waiting for the next step
              </p>
              <p className="text-sm max-w-sm text-center">
                Apply to a role first. Once your application is submitted, your
                assessment invitation will appear here.
              </p>
            </div>
          )}
        </div>
      </div>
    </CandidateDashboardLayout>
  );
}
