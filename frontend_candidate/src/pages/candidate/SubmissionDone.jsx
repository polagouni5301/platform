import { CandidateLayout } from "@/components/layout/CandidateLayout";
import { useNavigate, useParams } from "react-router-dom";
import { CheckCircle2, Clock, Check, Sparkles } from "lucide-react";
import {
  getJourneyCompletionStage,
  getJobById,
  setStoredCandidateStage,
} from "@/lib/candidateFlow";

const SubmissionDone = () => {
  const { step } = useParams();
  const navigate = useNavigate();
  const currentStep =
    step === "assessment" ||
    step === "video" ||
    step === "coding" ||
    step === "application"
      ? step
      : "application";
  const job = getJobById();

  const content = {
    application: {
      heading: "Application submitted",
      body: `Your application for ${job.title} has been submitted successfully.`,
      completedLabel: "Application form completed",
      nextLine: "Your next step is ready in the candidate mailbox preview.",
      doneHref: "/candidate/mailbox-preview",
    },
    assessment: {
      heading: "Assessment submitted",
      body: `Your assessment responses for ${job.title} have been submitted successfully.`,
      completedLabel: "Skills assessment completed",
      nextLine: "You will now continue directly into the video interview flow.",
      doneHref: "/device-check/video",
    },
    video: {
      heading: "Interview submitted",
      body: `Your video interview responses for ${job.title} have been submitted successfully.`,
      completedLabel: "Video interview completed",
      nextLine: "You will now continue directly into the machine coding round.",
      doneHref: "/device-check/coding",
    },
    coding: {
      heading: "Coding round submitted",
      body: `Your machine coding submission for ${job.title} has been sent successfully.`,
      completedLabel: "Machine coding round completed",
      nextLine: "Your application now moves into final review.",
      doneHref: "/candidate/landing",
    },
  }[currentStep];

  const handleDone = () => {
    setStoredCandidateStage(getJourneyCompletionStage(currentStep));
    navigate(content.doneHref);
  };

  return (
    <CandidateLayout className="bg-cream" hideHeader>
      <div className="flex-1 flex flex-col items-center justify-center p-4">
        <div className="max-w-[440px] w-full animate-in zoom-in duration-700">
          <div className="bg-white border border-charcoal/10 rounded-[24px] overflow-hidden shadow-sm relative">
            <div className="absolute top-0 inset-x-0 h-1 bg-coral" />

            <div className="p-6 text-center space-y-6">
              <div className="space-y-4">
                <div className="h-16 w-16 rounded-full bg-coral/10 flex items-center justify-center text-coral mx-auto shadow-sm relative">
                  <div
                    className="absolute inset-0 rounded-full bg-coral/10 animate-ping"
                    style={{ animationDuration: "3s" }}
                  />
                  <CheckCircle2 className="h-8 w-8 relative z-10" />
                </div>
                <div className="space-y-1">
                  <h1 className="text-2xl font-display font-bold text-charcoal tracking-tight">
                    {content.heading}
                  </h1>
                  <p className="text-[13px] text-charcoal-muted leading-relaxed max-w-[340px] mx-auto">
                    {content.body}
                  </p>
                </div>
              </div>

              <div className="bg-cream/30 rounded-xl p-4 text-left space-y-3 border border-charcoal/5">
                <h4 className="text-[9px] font-bold text-charcoal-muted uppercase tracking-widest">
                  What you completed
                </h4>
                <div className="flex items-center gap-3">
                  <div className="h-4 w-4 rounded-full bg-coral/10 text-coral flex items-center justify-center shrink-0">
                    <Check className="h-2.5 w-2.5" />
                  </div>
                  <span className="text-[12px] font-semibold text-charcoal">
                    {content.completedLabel}
                  </span>
                </div>
              </div>

              <div className="text-left space-y-4 pt-1">
                <h4 className="text-[9px] font-bold text-charcoal-muted uppercase tracking-widest">
                  What happens next
                </h4>
                <div className="space-y-3">
                  <div className="flex gap-3">
                    <div className="h-8 w-8 rounded-lg bg-coral/5 flex items-center justify-center text-coral shrink-0">
                      <Clock className="h-4 w-4" />
                    </div>
                    <div className="space-y-0.5">
                      <p className="text-[12px] font-bold text-charcoal">
                        {content.nextLine}
                      </p>
                      <p className="text-[10px] text-charcoal-muted leading-tight">
                        You can return to the candidate portal at any time.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <button
                onClick={handleDone}
                className="w-full h-11 mb-4 rounded-xl bg-charcoal text-white font-bold text-sm hover:bg-charcoal/90 transition shadow-sm"
              >
                Done
              </button>
            </div>
          </div>

          <div className="mt-8 flex flex-col items-center gap-2 animate-pulse">
            <div className="flex items-center gap-2 text-[11px] font-bold text-charcoal-muted/40 uppercase tracking-widest">
              Powered by HireIQ <Sparkles className="h-3 w-3" />
            </div>
            <p className="text-[10px] text-charcoal-muted/30">
              AI-powered autonomous hiring
            </p>
          </div>
        </div>
      </div>
    </CandidateLayout>
  );
};

export default SubmissionDone;
