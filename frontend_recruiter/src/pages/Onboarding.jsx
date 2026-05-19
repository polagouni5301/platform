import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { Check, Upload, X, ArrowRight, Plus } from "lucide-react";
import { HireIqLogo } from "@/components/HireIqLogo";

const Stepper = ({ active }) => {
  const steps = [
    { n: 1, label: "Organisation" },
    { n: 2, label: "Branding" },
    { n: 3, label: "Team" },
  ];
  return (
    <div className="flex items-center justify-between gap-2">
      {steps.map((s, i) => {
        const done = active > s.n;
        const current = active === s.n;
        return (
          <div key={s.n} className="flex items-center gap-2 flex-1">
            <div
              className={`h-7 w-7 rounded-full flex items-center justify-center text-xs font-bold ${current ? "bg-coral text-cream" : done ? "bg-amber text-coral" : "bg-cream border border-charcoal/15 text-charcoal-muted"}`}
            >
              {done ? <Check className="h-3.5 w-3.5" strokeWidth={3} /> : s.n}
            </div>
            <span
              className={`text-xs font-medium ${current ? "text-charcoal" : "text-charcoal-muted"} hidden sm:inline`}
            >
              {s.label}
            </span>
            {i < steps.length - 1 && (
              <div
                className={`flex-1 h-px ${done ? "bg-amber" : "bg-charcoal/15"}`}
              />
            )}
          </div>
        );
      })}
    </div>
  );
};

const Card = ({ children }) => (
  <div className="w-full max-w-[560px] bg-white rounded-2xl border border-charcoal/10 p-10 shadow-[0_8px_40px_-12px_rgba(0,0,0,0.08)]">
    {children}
  </div>
);

const Step1 = ({ onNext }) => (
  <Card>
    <Stepper active={1} />
    <h2 className="mt-8 font-display font-bold text-[18px] text-charcoal">
      Tell us about your organisation
    </h2>
    <p className="text-[13px] text-charcoal-muted mt-1">
      A few details to personalise your workspace.
    </p>
    <div className="mt-6 space-y-4">
      <Field label="Organisation name">
        <input defaultValue="ABC PVT LTD" className="input" />
      </Field>
      <Field label="Industry">
        <select className="input" defaultValue="Technology">
          <option>Technology</option>
          <option>Finance</option>
          <option>Healthcare</option>
          <option>Retail</option>
        </select>
      </Field>
      <Field label="Team size">
        <select className="input" defaultValue="11–50">
          <option>1–10</option>
          <option>11–50</option>
          <option>51–200</option>
          <option>200+</option>
        </select>
      </Field>
    </div>
    <button
      onClick={onNext}
      className="mt-7 w-full h-11 rounded-xl bg-coral text-cream font-semibold text-sm hover:bg-charcoal transition flex items-center justify-center gap-2 shadow-sm"
    >
      Next: Set up branding <ArrowRight className="h-4 w-4" />
    </button>
  </Card>
);

const Step2 = ({ onNext }) => (
  <Card>
    <Stepper active={2} />
    <h2 className="mt-8 font-display font-bold text-[18px] text-charcoal">
      Make it yours
    </h2>
    <p className="text-[13px] text-charcoal-muted mt-1">
      Branding shown to candidates during the interview.
    </p>
    <div className="mt-6 grid grid-cols-2 gap-5">
      <div className="space-y-4">
        <Field label="Company logo">
          <div className="h-[100px] w-[100px] rounded-xl border-2 border-dashed border-charcoal/20 flex flex-col items-center justify-center text-charcoal-muted hover:border-coral cursor-pointer">
            <Upload className="h-4 w-4 mb-1" />
            <span className="text-[10px]">Upload</span>
          </div>
        </Field>
        <Field label="Brand colour">
          <div className="flex items-center gap-2">
            <div
              className="h-9 w-9 rounded-lg border border-charcoal/15"
              style={{ backgroundColor: "#0D1829" }}
            />
            <input
              defaultValue="#0D1829"
              className="input flex-1 font-mono text-xs"
            />
          </div>
        </Field>
        <Field label="Tagline">
          <input defaultValue="Scale your team" className="input" />
        </Field>
      </div>

      <div>
        <div className="text-xs font-medium text-charcoal mb-1.5">
          Live preview
        </div>
        <div className="rounded-xl border border-charcoal/10 bg-cream p-4 h-full">
          <div
            className="h-2 w-2 rounded-full mb-3"
            style={{ backgroundColor: "#0D1829" }}
          />
          <div className="text-[11px] font-bold text-charcoal">ABC PVT LTD</div>
          <div className="text-[9px] text-charcoal-muted">Scale your team</div>
          <div className="mt-3 h-12 rounded bg-white border border-charcoal/10" />
          <div
            className="mt-2 h-6 rounded text-[9px] font-bold text-white flex items-center justify-center"
            style={{ backgroundColor: "#0D1829" }}
          >
            Apply now
          </div>
        </div>
      </div>
    </div>
    <button
      onClick={onNext}
      className="mt-7 w-full h-11 rounded-xl bg-coral text-cream font-semibold text-sm hover:bg-charcoal transition flex items-center justify-center gap-2 shadow-sm"
    >
      Next: Invite your team <ArrowRight className="h-4 w-4" />
    </button>
  </Card>
);

const Step3 = () => {
  const navigate = useNavigate();
  const [rows, setRows] = useState([
    { email: "alex@datapanther.com", role: "Admin" },
    { email: "sam@datapanther.com", role: "Recruiter" },
    { email: "", role: "Hiring Manager" },
  ]);
  return (
    <Card>
      <Stepper active={3} />
      <h2 className="mt-8 font-display font-bold text-[18px] text-charcoal">
        Invite your team
      </h2>
      <p className="text-[13px] text-charcoal-muted mt-1">
        They'll get an email to join your workspace.
      </p>
      <div className="mt-6 space-y-2.5">
        {rows.map((r, i) => (
          <div key={i} className="flex items-center gap-2">
            <input
              value={r.email}
              onChange={(e) => {
                const c = [...rows];
                c[i].email = e.target.value;
                setRows(c);
              }}
              placeholder="name@company.com"
              className="input flex-1"
            />
            <select
              value={r.role}
              onChange={(e) => {
                const c = [...rows];
                c[i].role = e.target.value;
                setRows(c);
              }}
              className="input w-[160px]"
            >
              <option>Admin</option>
              <option>Recruiter</option>
              <option>Hiring Manager</option>
            </select>
            <button
              onClick={() => setRows(rows.filter((_, x) => x !== i))}
              className="h-9 w-9 rounded-lg flex items-center justify-center text-charcoal-muted hover:bg-cream"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        ))}
      </div>
      <button
        onClick={() => setRows([...rows, { email: "", role: "Recruiter" }])}
        className="mt-3 inline-flex items-center gap-1.5 text-xs font-semibold text-coral hover:underline"
      >
        <Plus className="h-3.5 w-3.5" /> Add another member
      </button>
      <div className="mt-7 space-y-2">
        <button
          onClick={() => navigate("/dashboard")}
          className="w-full h-11 rounded-xl bg-coral text-cream font-semibold text-sm hover:bg-charcoal transition shadow-sm"
        >
          Finish setup — go to dashboard
        </button>
        <button
          onClick={() => navigate("/dashboard")}
          className="w-full h-9 text-xs text-charcoal-muted hover:text-charcoal"
        >
          Skip for now
        </button>
      </div>
    </Card>
  );
};

const Field = ({ label, children }) => (
  <div>
    <label className="text-xs font-medium text-charcoal mb-1.5 block">
      {label}
    </label>
    {children}
  </div>
);

const Onboarding = () => {
  const [step, setStep] = useState(1);
  return (
    <div className="min-h-screen bg-cream grid-bg flex flex-col items-center justify-center p-6">
      <style>{`.input{height:2.5rem;width:100%;padding:0 0.875rem;border-radius:0.75rem;background:hsl(var(--cream)/0.6);border:1px solid hsl(var(--charcoal)/0.15);font-size:0.875rem;color:hsl(var(--charcoal));outline:none;transition:all .15s}.input:focus{box-shadow:0 0 0 3px hsl(var(--coral)/0.15)}`}</style>
      <Link to="/" className="mb-8">
        <HireIqLogo />
      </Link>
      <div className="w-full flex justify-center animate-in fade-in slide-in-from-bottom-4 duration-500">
        {step === 1 && <Step1 onNext={() => setStep(2)} />}
        {step === 2 && <Step2 onNext={() => setStep(3)} />}
        {step === 3 && <Step3 />}
      </div>
    </div>
  );
};

export default Onboarding;
