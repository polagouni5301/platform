import { CandidateLayout } from "@/components/layout/CandidateLayout";
import { Clock, ArrowRight, AlertTriangle } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { setStoredCandidateStage } from "@/lib/candidateFlow";

const AssessmentMCQ = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selected, setSelected] = useState("");
  const navigate = useNavigate();

  const questions = [
    {
      q: "Which of the following indexing strategies would best optimise a PostgreSQL query performing a range scan on a timestamp column with high cardinality?",
      opts: [
        { id: "A", text: "B-Tree index on the timestamp column" },
        { id: "B", text: "Hash index on the timestamp column" },
        { id: "C", text: "GIN index with trigram extension" },
        { id: "D", text: "Partial index with a WHERE clause filter" },
      ],
    },
    {
      q: "In a microservices architecture, which pattern is primarily used to maintain data consistency across services without using distributed transactions?",
      opts: [
        { id: "A", text: "Saga Pattern" },
        { id: "B", text: "CQRS" },
        { id: "C", text: "Event Sourcing" },
        { id: "D", text: "API Gateway" },
      ],
    },
    {
      q: "What is the primary benefit of using a Gunicorn/Uvicorn worker model for Python web applications?",
      opts: [
        {
          id: "A",
          text: "Handling multiple concurrent requests across CPU cores",
        },
        { id: "B", text: "Automatic database connection pooling" },
        { id: "C", text: "In-memory caching of static assets" },
        { id: "D", text: "Built-in rate limiting for APIs" },
      ],
    },
    {
      q: "Which HTTP status code is most appropriate for a request that failed because the client has sent too many requests in a given amount of time?",
      opts: [
        { id: "A", text: "429 Too Many Requests" },
        { id: "B", text: "403 Forbidden" },
        { id: "C", text: "503 Service Unavailable" },
        { id: "D", text: "400 Bad Request" },
      ],
    },
    {
      q: "When designing a REST API, what is the 'Idempotency' property primarily concerned with?",
      opts: [
        {
          id: "A",
          text: "Ensuring multiple identical requests have the same effect as a single request",
        },
        { id: "B", text: "Encrypting sensitive data in transit" },
        { id: "C", text: "Reducing latency through edge caching" },
        { id: "D", text: "Authenticating users via JWT tokens" },
      ],
    },
  ];

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelected("");
    } else {
      setStoredCandidateStage("mcq_done");
      navigate("/practice");
    }
  };

  return (
    <CandidateLayout
      className="bg-cream"
      showLogo={true}
      viewportLock
    >
      <div className="flex min-h-0 flex-1 flex-col items-center justify-start overflow-hidden px-4 py-3 md:px-5 md:py-4">
        <div className="w-full max-w-[560px] animate-in slide-in-from-bottom-4 duration-500 space-y-4 rounded-[24px] border border-charcoal/10 bg-white p-4 shadow-sm md:p-5">
          <div className="flex items-center gap-2 rounded-full border border-amber-warm/15 bg-amber-soft/60 px-3 py-1.5 text-[10px] font-bold uppercase tracking-widest text-charcoal-muted">
            <AlertTriangle className="h-3.5 w-3.5 text-amber-warm" />
            Tab switching is monitored during this assessment
          </div>

          <div className="space-y-2">
            <div className="mb-3 flex items-center justify-between gap-3">
              <span className="text-[10px] font-bold uppercase tracking-widest text-charcoal-muted">
                Question {currentQuestion + 1} of {questions.length}
              </span>
              <div className="flex items-center gap-2">
                <div className="h-1.5 w-24 overflow-hidden rounded-full bg-cream md:w-28">
                  <div
                    className="h-full bg-coral transition-all duration-500"
                    style={{
                      width: `${((currentQuestion + 1) / questions.length) * 100}%`,
                    }}
                  />
                </div>
                <div className="flex shrink-0 items-center gap-2 text-xs font-bold text-charcoal-muted">
                  <Clock className="h-3.5 w-3.5 text-amber-warm" />
                  18:42
                </div>
              </div>
            </div>
            <h2 className="text-[15px] font-medium leading-6 text-charcoal md:text-[18px]">
              {questions[currentQuestion].q}
            </h2>
          </div>

          <RadioGroup
            value={selected}
            onValueChange={setSelected}
            className="space-y-2"
          >
            {questions[currentQuestion].opts.map((opt) => (
              <label
                key={opt.id}
                className={`group flex cursor-pointer items-center gap-3 rounded-2xl border p-3.5 transition-all ${
                  selected === opt.id
                    ? "border-coral bg-coral/[0.03] shadow-sm"
                    : "border-charcoal/10 bg-white hover:border-charcoal/20"
                }`}
              >
                <RadioGroupItem value={opt.id} className="sr-only" />
                <div
                  className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full border-2 transition-colors ${
                    selected === opt.id
                      ? "border-coral bg-coral"
                      : "border-charcoal/20 group-hover:border-charcoal/30"
                  }`}
                >
                  {selected === opt.id ? (
                    <div className="h-2 w-2 rounded-full bg-white" />
                  ) : null}
                </div>
                <span
                  className={`text-[13px] font-medium leading-6 ${
                    selected === opt.id ? "text-coral" : "text-charcoal"
                  }`}
                >
                  {opt.id}. {opt.text}
                </span>
              </label>
            ))}
          </RadioGroup>

          <div className="space-y-3 pt-1">
            <button
              onClick={handleNext}
              disabled={!selected}
              className={`flex h-11 w-full items-center justify-center gap-2 rounded-xl font-bold text-white transition shadow-lg ${
                selected
                  ? "bg-[hsl(var(--charcoal))] shadow-[hsl(var(--charcoal))]/10 hover:bg-charcoal"
                  : "cursor-not-allowed bg-charcoal/10 shadow-none"
              }`}
            >
              {currentQuestion === questions.length - 1
                ? "Complete assessment and start video interview"
                : "Next question"}{" "}
              <ArrowRight className="h-4 w-4" />
            </button>
            <p className="text-center text-[10px] font-medium italic text-charcoal-muted">
              You cannot return to previous questions.
            </p>
          </div>
        </div>
      </div>
    </CandidateLayout>
  );
};

export default AssessmentMCQ;
