import { Link, useNavigate } from "react-router-dom";
import { ChevronLeft, LogOut, MapPin, Clock } from "lucide-react";
import { HireIqLogo } from "@/components/HireIqLogo";

export const CandidateLayout = ({
  children,
  showLogo = true,
  companyName = "HireIQ Partner Solutions",
  className = "bg-cream",
  hideHeader = false,
  viewportLock = false,
  backHref,
  backLabel = "Back",
}) => {
  const navigate = useNavigate();
  const mainHeightClass = viewportLock
    ? showLogo
      ? "h-[calc(100dvh-4rem)]"
      : "h-[100dvh]"
    : showLogo
      ? "min-h-[calc(100dvh-4rem)]"
      : "min-h-screen";
  const mainOverflowClass = viewportLock
    ? "overflow-hidden"
    : "overflow-x-hidden";
  const rootClass = viewportLock
    ? `relative h-screen overflow-hidden ${className}`
    : `relative min-h-screen overflow-x-hidden ${className}`;

  return (
    <div className={rootClass}>
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 grid-bg opacity-20" />
        <div className="absolute left-[12%] top-[-14%] h-[420px] w-[420px] rounded-full bg-[hsl(var(--coral)/0.1)] blur-[120px]" />
        <div className="absolute bottom-[-12%] right-[-4%] h-[480px] w-[480px] rounded-full bg-[hsl(var(--amber)/0.12)] blur-[140px]" />
      </div>

      {showLogo ? (
        <header className="sticky top-0 z-50 flex h-16 items-center justify-between border-b border-charcoal/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.96),rgba(255,247,239,0.92))] px-4 shadow-[0_18px_45px_-36px_rgba(11,15,26,0.45)] backdrop-blur-xl md:px-8">
          <div className="flex items-center gap-4">
            {backHref ? (
              <Link
                to={backHref}
                className="inline-flex h-10 items-center gap-2 rounded-xl border border-charcoal/10 bg-white/85 px-3 text-sm font-bold text-charcoal-muted shadow-sm transition hover:bg-white hover:text-charcoal"
              >
                <ChevronLeft className="h-4 w-4" />
                {backLabel}
              </Link>
            ) : null}

            <Link to="/candidate/landing" className="group flex items-center gap-3">
              <HireIqLogo />
              <div className="hidden flex-col sm:flex">
                <span className="font-display text-sm font-bold leading-tight text-charcoal">
                  {companyName}
                </span>
                <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-coral">
                  Hiring Portal
                </span>
              </div>
            </Link>
          </div>

          {!hideHeader ? (
            <div className="flex items-center gap-4">
              <div className="hidden items-center gap-3 text-[10px] font-bold uppercase tracking-widest text-charcoal-muted md:flex">
                <div className="flex items-center gap-1.5 rounded-full border border-charcoal/10 bg-white/70 px-3 py-2 shadow-sm">
                  <MapPin className="h-3 w-3" /> Hyderabad
                </div>
                <div className="flex items-center gap-1.5 rounded-full border border-charcoal/10 bg-white/70 px-3 py-2 shadow-sm">
                  <Clock className="h-3 w-3" /> 20-25 mins
                </div>
              </div>
              <button
                onClick={() => navigate("/candidate/login")}
                className="flex items-center gap-2 rounded-xl bg-charcoal px-3 py-2 text-xs font-bold text-white transition hover:bg-coral shadow-[0_18px_35px_-22px_rgba(11,15,26,0.8)]"
              >
                <LogOut className="h-3.5 w-3.5" /> Logout
              </button>
            </div>
          ) : (
            <button
              onClick={() => navigate("/candidate/login")}
              className="flex items-center gap-2 rounded-xl bg-charcoal px-3 py-2 text-xs font-bold text-white transition hover:bg-coral shadow-[0_18px_35px_-22px_rgba(11,15,26,0.8)]"
            >
              <LogOut className="h-3.5 w-3.5" /> Logout
            </button>
          )}
        </header>
      ) : null}

      <main
        className={`relative z-10 flex ${mainHeightClass} ${mainOverflowClass} flex-col`}
      >
        {children}
      </main>
    </div>
  );
};
