import { CandidateLayout } from "@/components/layout/CandidateLayout";
import {
  Volume2,
  Lightbulb,
  Play,
  ArrowRight,
  RefreshCw,
  StopCircle,
} from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

const PracticeQuestion = () => {
  const [state, setState] = useState("prep");
  const [countdown, setCountdown] = useState(30);
  const videoRef = useRef(null);

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

  return (
    <CandidateLayout className="bg-cream" viewportLock>
      <div className="flex min-h-0 flex-1 flex-col overflow-hidden">
        <div className="flex h-12 flex-none items-center justify-between border-b border-charcoal/5 bg-white px-4 md:px-6">
          <div className="flex items-center gap-3 text-xs font-bold text-charcoal-muted">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-coral/10 text-coral">
              <span className="h-1.5 w-1.5 rounded-full bg-coral" /> Device
              check
            </span>
            <div className="h-4 w-px bg-charcoal/10" />
            <span className="px-2.5 py-1 rounded-full bg-charcoal text-white text-[10px]">
              Practice
            </span>
            <div className="h-4 w-px bg-charcoal/10" />
            <span className="hidden md:inline">Interview · 3 questions</span>
          </div>
          <div className="hidden text-xs font-bold text-charcoal-muted lg:block">
            Senior Backend Engineer — HireIQ
          </div>
        </div>

        <div className="relative flex flex-1 items-center justify-center overflow-hidden bg-cream p-3">
          <div className="absolute top-10 left-10 h-64 w-64 coral-glow opacity-20 pointer-events-none" />
          <div className="absolute bottom-10 right-10 h-64 w-64 amber-glow opacity-20 pointer-events-none" />
          <div className="relative flex h-full max-h-[calc(100vh-6.25rem)] w-full max-w-[700px] flex-col overflow-hidden rounded-[28px] border border-charcoal/10 bg-white shadow-[0_20px_60px_-20px_rgba(0,0,0,0.15)]">
            <div className="absolute inset-x-0 top-0 z-10 flex h-9 items-center justify-center gap-2 border-b border-amber/20 bg-amber-soft px-4 text-center">
              <span className="h-2 w-2 animate-pulse rounded-full bg-amber" />
              <p className="text-[10px] font-bold uppercase tracking-wider text-charcoal">
                Practice round · Not scored or submitted
              </p>
            </div>

            <div className="flex min-h-0 flex-1 flex-col px-4 pb-4 pt-12 text-center md:px-7 md:pb-5 md:pt-14">
              <div className="space-y-2.5">
                <span className="inline-block px-3 py-1 rounded-full bg-coral/10 text-coral text-[10px] font-bold uppercase tracking-widest">
                  Practice question
                </span>
                <h4 className="mx-auto max-w-[34rem] text-lg font-display font-bold leading-tight text-charcoal ">
                  Tell us something you enjoy doing outside of work.
                </h4>
                <button className="inline-flex items-center gap-2 rounded-full border border-charcoal/10 bg-cream px-3.5 py-1.5 text-[11px] font-bold text-charcoal-muted transition hover:bg-white hover:text-charcoal">
                  <Volume2 className="h-3.5 w-3.5" /> Replay question audio
                </button>
              </div>

              <div className="mt-3 flex min-h-0 flex-1 flex-col items-center justify-center">
                {state === "prep" && (
                  <div className="animate-in fade-in flex flex-col items-center gap-4 duration-500">
                    <div className="relative mx-auto flex h-28 w-28 items-center justify-center md:h-32 md:w-32">
                      <svg
                        className="absolute inset-0 h-full w-full -rotate-90"
                        viewBox="0 0 144 144"
                      >
                        <circle
                          cx="72"
                          cy="72"
                          r="64"
                          fill="transparent"
                          stroke="currentColor"
                          strokeWidth="8"
                          className="text-charcoal/5"
                        />

                        <circle
                          cx="72"
                          cy="72"
                          r="64"
                          fill="transparent"
                          stroke="currentColor"
                          strokeWidth="8"
                          className="text-coral transition-all duration-1000"
                          strokeDasharray={402}
                          strokeDashoffset={402 - (402 * countdown) / 30}
                          strokeLinecap="round"
                        />
                      </svg>
                      <div className="text-center">
                        <span className="block text-3xl font-display font-bold text-charcoal">
                          {countdown}
                        </span>
                        <span className="text-[9px] font-bold uppercase tracking-widest text-charcoal-muted">
                          seconds
                        </span>
                      </div>
                    </div>

                    <div className="space-y-2.5">
                      <div className="inline-flex items-center gap-2.5 rounded-full border border-amber/20 bg-amber-soft px-4 py-2 text-charcoal">
                        <Lightbulb className="h-3.5 w-3.5 text-amber" />
                        <p className="text-[11px] font-bold">
                          Speak naturally. Nothing here is recorded or scored.
                        </p>
                      </div>
                      <button
                        onClick={() => setState("recording")}
                        className="block mx-auto rounded-full bg-coral px-5 py-2 text-[11px] font-bold text-white transition hover:bg-coral-dark shadow-sm"
                      >
                        Start recording now →
                      </button>
                    </div>
                  </div>
                )}

                {state === "recording" && (
                  <div className="animate-in zoom-in-95 flex w-full max-w-[500px] flex-col gap-3.5 duration-300">
                    <div className="relative aspect-[16/8.6] w-full overflow-hidden rounded-[24px] border-2 border-coral/30 bg-charcoal shadow-2xl">
                      <video
                        ref={videoRef}
                        autoPlay
                        muted
                        className="mirror absolute inset-0 h-full w-full object-cover"
                      />

                      <style>{`.mirror { transform: scaleX(-1); }`}</style>
                      <div className="absolute left-3 top-3 z-10 flex items-center gap-2 rounded-full bg-coral/90 px-2 py-1 backdrop-blur-md shadow-lg">
                        <div className="h-2 w-2 animate-pulse rounded-full bg-white" />
                        <span className="text-[10px] font-bold uppercase tracking-wider text-white">
                          REC
                        </span>
                      </div>
                      <div className="absolute right-3 top-3 z-10 rounded-full bg-black/40 px-2 py-1 text-[10px] font-mono font-bold text-white backdrop-blur-md">
                        0:23 / 1:30
                      </div>
                    </div>
                    <button
                      onClick={() => {
                        if (videoRef.current && videoRef.current.srcObject) {
                          videoRef.current.srcObject
                            .getTracks()
                            .forEach((track) => track.stop());
                        }
                        setState("playback");
                      }}
                      className="mx-auto flex h-9 items-center justify-center gap-2 rounded-full bg-coral px-6 text-[13px] font-bold text-white transition hover:bg-coral-dark shadow-lg shadow-coral/30"
                    >
                      <StopCircle className="h-4 w-4" /> Stop recording
                    </button>
                  </div>
                )}

                {state === "playback" && (
                  <div className="animate-in slide-in-from-bottom-4 flex w-full max-w-[560px] flex-1 flex-col justify-center gap-3.5 duration-500">
                    <div className="relative flex aspect-[16/8.8] w-full cursor-pointer items-center justify-center overflow-hidden rounded-[24px] border border-charcoal/10 bg-gradient-to-br from-cream to-amber-soft shadow-sm">
                      <div className="flex h-14 w-14 items-center justify-center rounded-full bg-coral text-white shadow-xl shadow-coral/30 transition hover:scale-110">
                        <Play className="ml-0.5 h-5 w-5 fill-current" />
                      </div>
                      <div className="absolute bottom-3 left-5 text-[10px] font-bold uppercase tracking-widest text-charcoal-muted">
                        Review your practice attempt
                      </div>
                    </div>

                    <div className="space-y-3">
                      {/* <div className="rounded-2xl border border-charcoal/10 bg-cream px-4 py-3">
                       <p className="text-[13px] leading-5 text-charcoal-muted">
                         <span className="font-bold text-charcoal">Nice.</span> You tested your camera framing, voice level, and the same one-question flow used in the scored interview next.
                       </p>
                      </div> */}
                      <div className="flex flex-col items-center justify-center gap-3 md:flex-row">
                        <button
                          onClick={() => {
                            setState("prep");
                            setCountdown(30);
                          }}
                          className="flex h-10 w-full items-center justify-center gap-2 rounded-full border border-charcoal/10 bg-white px-6 text-[13px] font-bold text-charcoal transition hover:bg-cream md:w-auto"
                        >
                          <RefreshCw className="h-4 w-4" /> Re-record
                        </button>
                        <Link
                          to="/interview"
                          className="flex h-10 w-full items-center justify-center gap-2 rounded-full bg-coral px-6 text-[13px] font-bold text-white shadow-xl shadow-coral/30 transition hover:bg-coral-dark md:w-auto"
                        >
                          I&apos;m ready — start interview{" "}
                          <ArrowRight className="h-4 w-4" />
                        </Link>
                      </div>
                      <p className="text-[11px] italic text-charcoal-muted">
                        Once you start, you cannot return to previous questions.
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </CandidateLayout>
  );
};

export default PracticeQuestion;
