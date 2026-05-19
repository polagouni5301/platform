import { CandidateLayout } from "@/components/layout/CandidateLayout";
import {
  CheckCircle2,
  Video,
  ArrowRight,
  Info,
  AlertCircle,
} from "lucide-react";
import { useNavigate, useParams } from "react-router-dom";

const stepConfig = {
  assessment: {
    title: "Check your setup before the skills assessment",
    description:
      "Confirm that your browser, microphone, and camera are ready before you begin the assessment round.",
    buttonLabel: "Continue to assessment",
    nextHref: "/assessment-mcq",
    tips: [
      "Find a quiet place with a stable connection",
      "Keep this browser tab open during the assessment",
      "Allow microphone and camera access when prompted",
      "Have 20 minutes available before you begin",
    ],
    progressLabels: [
      "Device check",
      "Assessment",
      "Video Interview",
      "Machine Coding",
      "Done",
    ],
  },
  video: {
    title: "Check your setup before the video interview",
    description:
      "Your next screen lets you test a short practice recording before moving into the live interview questions.",
    buttonLabel: "Continue to practice recording",
    nextHref: "/practice",
    tips: [
      "Use a well-lit space with your face centered in frame",
      "Speak naturally and keep your answers concise",
      "Allow both camera and microphone access",
      "Stay on this device for the full interview session",
    ],
    progressLabels: ["Device check", "Practice", "Interview", "Done"],
  },
  coding: {
    title: "Check your setup before the machine coding round",
    description:
      "Make sure your device, browser permissions, and environment are ready before the timed coding exercise starts.",
    buttonLabel: "Continue to coding round",
    nextHref: "/assessment-coding",
    tips: [
      "Close unrelated tabs before you start",
      "Keep your microphone and camera enabled for verification",
      "Set aside uninterrupted time for the full round",
      "Use a stable internet connection during submission",
    ],
    progressLabels: ["Device check", "Coding", "Done"],
  },
};

const CheckRow = ({ status, label, sublabel }) => (
  <div className="group flex items-center gap-4">
    <div
      className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full transition-colors ${
        status === "success"
          ? "bg-coral/10 text-coral"
          : "bg-coral/10 text-[hsl(var(--coral))]"
      }`}
    >
      {status === "success" ? (
        <CheckCircle2 className="h-5 w-5" />
      ) : (
        <AlertCircle className="h-5 w-5" />
      )}
    </div>
    <div className="space-y-0.5">
      <p className="text-[13px] font-bold text-charcoal">{label}</p>
      <p className="text-[11px] font-medium text-charcoal-muted">{sublabel}</p>
    </div>
  </div>
);

const DeviceCheck = () => {
  const navigate = useNavigate();
  const { step } = useParams();
  const currentStep =
    step === "video" || step === "coding" ? step : "assessment";
  const config = stepConfig[currentStep];

  const handleContinue = () => {
    navigate(config.nextHref);
  };

  return (
    <CandidateLayout className="bg-cream" viewportLock>
      <div className="flex min-h-0 flex-1 items-start justify-center overflow-hidden px-4 py-2 md:px-5 md:py-3">
        <div className="w-full max-w-[720px] animate-in slide-in-from-bottom-4 duration-500 space-y-2.5 rounded-[24px] border border-charcoal/10 bg-white p-3.5 shadow-sm md:p-4">
          <div className="space-y-3">
            <div className="flex flex-wrap items-center gap-1.5">
              {config.progressLabels.map((label, index) => {
                const active = index === 0;

                return (
                  <div key={label} className="flex items-center gap-2">
                    <div
                      className={`flex min-h-7 items-center justify-center rounded-full px-2.5 py-1 text-center text-[9px] font-bold uppercase tracking-wider ${
                        active
                          ? "bg-[hsl(var(--charcoal))] text-white"
                          : "bg-charcoal/5 text-charcoal-muted"
                      }`}
                    >
                      {label}
                    </div>
                    {index < config.progressLabels.length - 1 ? (
                      <div className="hidden h-px w-2.5 bg-charcoal/10 md:block" />
                    ) : null}
                  </div>
                );
              })}
            </div>

            <div className="space-y-1.5">
              <h1 className="text-[18px] font-display font-bold leading-tight text-charcoal md:text-[20px]">
                {config.title}
              </h1>
              <p className="text-[12px] leading-5 text-charcoal-muted">
                {config.description}
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-3 md:grid-cols-[0.88fr_1.12fr] md:items-start">
            <div className="space-y-3.5">
              <CheckRow
                status="success"
                label="Camera detected"
                sublabel="Logitech HD Webcam - Working"
              />
              <CheckRow
                status="success"
                label="Microphone detected"
                sublabel="Built-in Microphone - Capturing audio"
              />
              <CheckRow
                status="success"
                label="Browser supported"
                sublabel="Chrome 120 - Fully supported"
              />
              <CheckRow
                status="success"
                label="Internet speed"
                sublabel="12.4 Mbps upload - Good connection"
              />
            </div>

            <div className="space-y-2">
              <div className="group relative aspect-[16/9] overflow-hidden rounded-2xl bg-charcoal shadow-inner">
                <div className="absolute inset-0 flex items-center justify-center">
                  <Video className="h-10 w-10 text-white/20 transition duration-500 group-hover:scale-110" />
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <p className="text-[10px] font-bold uppercase tracking-widest text-white/40">
                    Your camera preview
                  </p>
                </div>
                <div className="absolute bottom-4 left-4 flex h-4 items-end gap-1">
                  {[30, 60, 45, 80, 55].map((height, index) => (
                    <div
                      key={index}
                      className="w-1 rounded-full bg-coral animate-pulse"
                      style={{
                        height: `${height}%`,
                        animationDelay: `${index * 0.1}s`,
                      }}
                    />
                  ))}
                </div>
              </div>
              <button className="flex items-center gap-1.5 text-[11px] font-bold text-charcoal-muted transition hover:text-charcoal">
                Adjust camera settings
              </button>
            </div>
          </div>

          <div className="space-y-2 rounded-2xl border border-charcoal/5 bg-cream/30 p-3">
            <h4 className="text-[10px] font-bold uppercase tracking-widest text-charcoal-muted">
              Before you continue
            </h4>
            <div className="grid grid-cols-1 gap-x-4 gap-y-1.5 md:grid-cols-2">
              {config.tips.map((tip) => (
                <div
                  key={tip}
                  className="flex items-center gap-2.5 text-[11px] font-medium leading-5 text-charcoal"
                >
                  <div className="h-1.5 w-1.5 shrink-0 rounded-full bg-coral" />
                  {tip}
                </div>
              ))}
            </div>
            <div className="flex items-center gap-2 border-t border-charcoal/5 pt-2">
              <Info className="h-3.5 w-3.5 text-charcoal-muted/60" />
              <p className="text-[10px] italic leading-normal text-charcoal-muted">
                This screen only checks readiness. No responses are recorded
                here.
              </p>
            </div>
          </div>

          <div className="space-y-3">
            <button
              onClick={handleContinue}
              className="flex h-11 w-full items-center justify-center gap-2 rounded-xl bg-[hsl(var(--charcoal))] font-bold text-white shadow-lg shadow-[hsl(var(--charcoal))]/10 transition hover:bg-charcoal"
            >
              {config.buttonLabel} <ArrowRight className="h-4 w-4" />
            </button>
            <button className="w-full text-xs font-bold text-charcoal-muted transition hover:text-charcoal">
              Having trouble? Contact support
            </button>
          </div>
        </div>
      </div>
    </CandidateLayout>
  );
};

export default DeviceCheck;
