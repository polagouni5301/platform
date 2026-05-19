import { useState, useEffect, useRef } from "react";
import { CandidateLayout } from "@/components/layout/CandidateLayout";
import { Volume2, ArrowRight, CheckCircle2, Loader2 } from "lucide-react";
import { useNavigate } from "react-router-dom";

const interviewQuestions = [
  "Describe a time you had to debug a critical production issue under pressure. What was your approach?",
  "Tell us about a backend performance improvement you led and how you measured the impact.",
  "Share an example of a disagreement with a teammate or stakeholder and how you worked through it.",
];

const VideoInterview = () => {
  const [state, setState] = useState("prep");
  const [currentQuestion, setCurrentQuestion] = useState(1);
  const [countdown, setCountdown] = useState(24);
  const videoRef = useRef(null);
  const navigate = useNavigate();
  const activeQuestion = interviewQuestions[currentQuestion - 1];

  useEffect(() => {
    if (state === "recording" && videoRef.current) {
      navigator.mediaDevices
        .getUserMedia({ video: true, audio: true })
        .then((stream) => {
          if (videoRef.current) {
            videoRef.current.srcObject = stream;
          }
        })
        .catch((err) => console.error("Camera error:", err));
    }
  }, [state]);

  useEffect(() => {
    let timer;
    if (state === "prep" && countdown > 0) {
      timer = setInterval(() => setCountdown((c) => c - 1), 1000);
    } else if (state === "prep" && countdown === 0) {
      setState("recording");
    }
    return () => clearInterval(timer);
  }, [state, countdown]);

  const handleNext = () => {
    if (state === "recording") {
      if (videoRef.current && videoRef.current.srcObject) {
        videoRef.current.srcObject.getTracks().forEach((track) => track.stop());
      }
      setState("uploading");
      setTimeout(() => {
        if (currentQuestion < interviewQuestions.length) {
          setCurrentQuestion(currentQuestion + 1);
          setCountdown(24);
          setState("prep");
        } else {
          setState("complete");
        }
      }, 2000);
    }
  };

  return (
    <CandidateLayout className="bg-[#0f1117]" showLogo={true} viewportLock>
      <div className="relative flex min-h-0 flex-1 flex-col items-center justify-center overflow-hidden px-4 py-4 md:px-6 md:py-5">
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-coral/10 blur-[120px]" />

        {state === "prep" ? (
          <div className="relative z-10 w-full max-w-[560px] animate-in space-y-8 text-center fade-in zoom-in-95 duration-700">
            <div className="space-y-4">
              <h2 className="text-[25px] font-display font-bold leading-tight text-white md:text-[30px]">
                {activeQuestion}
              </h2>
              <button className="inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 text-xs font-bold text-white/60 transition hover:bg-white/5 hover:text-white">
                <Volume2 className="h-4 w-4" /> Replay question
              </button>
            </div>

            <div className="space-y-6">
              <div className="mb-3 flex items-center justify-center gap-4">
                <span className="text-xs font-bold uppercase tracking-widest text-white/40">
                  Question {currentQuestion} of {interviewQuestions.length}
                </span>
                <div className="flex gap-1">
                  {interviewQuestions.map((_, index) => (
                    <div
                      key={index}
                      className={`h-1 w-4 rounded-full ${
                        index + 1 <= currentQuestion ? "bg-coral" : "bg-white/10"
                      }`}
                    />
                  ))}
                </div>
              </div>

              <div className="relative mx-auto flex h-32 w-32 items-center justify-center md:h-36 md:w-36">
                <svg
                  className="absolute inset-0 h-full w-full -rotate-90"
                  viewBox="0 0 160 160"
                >
                  <circle
                    cx="80"
                    cy="80"
                    r="72"
                    fill="transparent"
                    stroke="currentColor"
                    strokeWidth="6"
                    className="text-white/5"
                  />
                  <circle
                    cx="80"
                    cy="80"
                    r="72"
                    fill="transparent"
                    stroke="currentColor"
                    strokeWidth="6"
                    className="text-white transition-all duration-1000"
                    strokeDasharray={452}
                    strokeDashoffset={452 - (452 * countdown) / 24}
                    strokeLinecap="round"
                  />
                </svg>
                <div className="text-center">
                  <span className="block font-display text-4xl font-bold text-white md:text-5xl">
                    {countdown}
                  </span>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-white/40">
                    seconds
                  </span>
                </div>
              </div>

              <p className="text-xs font-bold uppercase tracking-widest text-white/40">
                to prepare
              </p>
            </div>

            <button
              onClick={() => setState("recording")}
              className="text-sm font-bold text-white/60 underline underline-offset-4 transition hover:text-white"
            >
              Start recording now
            </button>
          </div>
        ) : null}

        {state === "recording" ? (
          <div className="w-full max-w-[860px] animate-in space-y-5 fade-in duration-500">
            <div className="space-y-2 text-center">
              <p className="mx-auto max-w-xl line-clamp-1 text-sm font-medium text-white/60">
                {activeQuestion}
              </p>
            </div>

            <div className="group relative aspect-[16/7.3] w-full overflow-hidden rounded-[26px] border border-white/10 bg-black shadow-2xl">
              <video
                ref={videoRef}
                autoPlay
                muted
                className="mirror absolute inset-0 h-full w-full object-cover"
              />

              <style>{`.mirror { transform: scaleX(-1); }`}</style>

              <div className="absolute left-4 top-4 flex items-center gap-2.5 rounded-full border border-white/10 bg-black/40 px-3 py-1.5 backdrop-blur-md">
                <div className="h-2 w-2 rounded-full bg-[hsl(var(--coral))] animate-pulse" />
                <span className="text-[11px] font-bold uppercase tracking-wider text-white">
                  Recording
                </span>
              </div>

              <div className="absolute right-4 top-4 flex items-center gap-4">
                <div className="rounded-full border border-white/10 bg-black/40 px-3 py-1.5 text-[11px] font-mono font-bold text-white backdrop-blur-md">
                  1:24 / 1:30
                </div>
              </div>

              <div className="absolute inset-x-0 bottom-0 h-1.5 bg-white/10">
                <div className="h-full w-[90%] bg-[hsl(var(--coral))] transition-all duration-1000" />
              </div>
            </div>

            <div className="flex flex-col items-center gap-3">
              <button
                onClick={handleNext}
                className="flex h-11 items-center justify-center gap-2 rounded-2xl bg-white px-8 font-bold text-charcoal shadow-xl transition hover:bg-cream"
              >
                Done answering
              </button>
            </div>
          </div>
        ) : null}

        {state === "uploading" ? (
          <div className="w-full max-w-[460px] animate-in space-y-6 text-center fade-in zoom-in-95 duration-500">
            <div className="mx-auto flex h-[72px] w-[72px] items-center justify-center rounded-full bg-coral/20 text-coral">
              <CheckCircle2 className="h-10 w-10" />
            </div>
            <div className="space-y-2">
              <h2 className="text-2xl font-display font-bold text-white">
                Answer saved
              </h2>
              <p className="text-sm text-white/40">
                Preparing your next question...
              </p>
            </div>
            <div className="space-y-3">
              <div className="h-1.5 w-full overflow-hidden rounded-full bg-white/5">
                <div className="h-full w-[90%] animate-pulse rounded-full bg-coral" />
              </div>
              <p className="text-[10px] font-mono uppercase tracking-widest text-white/20">
                Uploading to secure storage - 248KB of 276KB
              </p>
            </div>
          </div>
        ) : null}

        {state === "complete" ? (
          <div className="w-full max-w-[500px] animate-in space-y-6 text-center fade-in zoom-in-95 duration-700">
            <div className="relative mx-auto flex h-20 w-20 items-center justify-center rounded-full border border-coral/20 bg-coral/10 text-coral">
              <div className="absolute inset-0 rounded-full bg-coral/20 blur-2xl animate-pulse" />
              <CheckCircle2 className="relative z-10 h-12 w-12" />
            </div>
            <div className="space-y-3">
              <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-amber">
                Interview complete
              </p>
              <h2 className="text-4xl font-display font-bold tracking-tight text-white">
                Interview complete
              </h2>
              <p className="text-base text-white/70">
                Thanks, Jordan. The AI is now analysing your answers.
              </p>
            </div>

            <div className="space-y-5 pt-2">
              <div className="flex items-center justify-center gap-3 text-sm font-bold text-amber">
                <Loader2 className="h-4 w-4 animate-spin" /> Processing...
              </div>

              <div className="space-y-5 rounded-[24px] border border-coral/20 bg-gradient-to-br from-coral/10 via-white/5 to-amber/10 p-5 backdrop-blur-sm">
                <div className="space-y-1.5">
                  <p className="text-xs font-bold uppercase tracking-widest text-amber">
                    Submission complete
                  </p>
                  <p className="text-base font-semibold text-white">
                    Your interview answers are submitted.
                  </p>
                </div>
                <button
                  onClick={() => navigate("/assessment-coding")}
                  className="flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-coral font-bold text-white shadow-xl shadow-coral/20 transition hover:bg-coral-dark"
                >
                  Continue with Machine coding round{" "}
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        ) : null}
      </div>
    </CandidateLayout>
  );
};

export default VideoInterview;
