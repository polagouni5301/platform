import { Link, useLocation, useNavigate } from "react-router-dom";
import { Briefcase, Mail, Activity, LogOut, ChevronDown } from "lucide-react";
import { useEffect, useState } from "react";
import { HireIqLogo } from "@/components/HireIqLogo";
import {
  getStoredCandidateStage,
  getVisibleMailboxMessages,
  getJobById,
} from "@/lib/candidateFlow";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const SidebarItem = ({ Icon, label, path, badge }) => {
  const location = useLocation();
  const active = location.pathname.startsWith(path);

  return (
    <Link
      to={path}
      className={`relative flex h-11 w-full items-center gap-3 rounded-xl px-3 text-sm font-medium transition ${
        active
          ? "bg-gradient-to-r from-coral to-[#ff8a47] text-white shadow-[0_18px_35px_-18px_hsl(var(--coral)/0.95)]"
          : "text-[#d4dbea] hover:bg-white/12 hover:text-white"
      }`}
    >
      <Icon className="h-5 w-5 flex-none" />
      <span className="flex-1 text-left">{label}</span>
      {badge ? (
        <span className="flex h-5 min-w-5 items-center justify-center rounded-full bg-white/15 px-1.5 text-[10px] font-bold text-white">
          {badge}
        </span>
      ) : null}
    </Link>
  );
};

export const CandidateDashboardLayout = ({ children, title }) => {
  const navigate = useNavigate();
  const [mailCount, setMailCount] = useState(0);

  useEffect(() => {
    const stage = getStoredCandidateStage();
    const messages = getVisibleMailboxMessages(stage, getJobById().title);
    setMailCount(messages.length);
  }, [title]);

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-[linear-gradient(180deg,#fffaf4_0%,#f7efe6_42%,#f4eadf_100%)] font-sans">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 grid-bg opacity-25" />
        <div className="absolute left-[12%] top-[-14%] h-[460px] w-[460px] rounded-full bg-[hsl(var(--coral)/0.12)] blur-[120px]" />
        <div className="absolute bottom-[-14%] right-[-3%] h-[500px] w-[500px] rounded-full bg-[hsl(var(--amber)/0.12)] blur-[140px]" />
      </div>

      <aside className="fixed inset-y-0 left-0 z-50 flex w-64 flex-col gap-2 border-r border-white/10 bg-[linear-gradient(180deg,#171922_0%,#0c0f1b_100%)] px-4 py-6 shadow-[24px_0_60px_-35px_rgba(11,15,26,0.7)]">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-[radial-gradient(circle_at_top,hsl(var(--coral)/0.24),transparent_65%)]" />
        <Link to="/candidate/dashboard" className="relative mb-6 px-2">
          <HireIqLogo variant="light" />
        </Link>

        <div className="px-3 text-[10px] font-bold uppercase tracking-wider text-white/72">
          Candidate Portal
        </div>

        <SidebarItem
          Icon={Briefcase}
          label="Job Postings"
          path="/candidate/jobs"
        />
        <SidebarItem
          Icon={Mail}
          label="Mailbox"
          path="/candidate/mailbox"
          badge={mailCount > 0 ? String(mailCount) : undefined}
        />
        <SidebarItem
          Icon={Activity}
          label="Application Tracking"
          path="/candidate/tracking"
        />

        <div className="flex-1" />

        <div className="relative flex flex-col gap-3 rounded-[24px] border border-white/10 bg-white/6 p-4 backdrop-blur-sm">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-amber text-sm font-bold text-coral shadow-sm">
              JD
            </div>
            <div className="min-w-0 flex-1">
              <div className="truncate text-sm font-bold text-white">
                John Doe
              </div>
              <div className="truncate text-xs text-[#c0c9db]">
                candidate@hireiq.com
              </div>
            </div>
          </div>
          <button
            onClick={() => navigate("/candidate/login")}
            className="flex h-9 w-full items-center justify-center gap-2 rounded-xl border border-white/10 text-xs font-bold text-white transition hover:bg-white/10"
          >
            <LogOut className="h-3.5 w-3.5" /> Sign Out
          </button>
        </div>
      </aside>

      <div className="relative ml-64 flex min-h-screen flex-1 flex-col">
        <header className="sticky top-0 z-40 flex h-16 items-center justify-between border-b border-charcoal/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.95),rgba(255,247,239,0.9))] px-8 shadow-[0_18px_45px_-36px_rgba(11,15,26,0.45)] backdrop-blur-xl">
          <div>
            <div className="text-[10px] font-bold uppercase tracking-[0.24em] text-coral">
              Candidate workspace
            </div>
            <div className="font-display text-lg font-bold text-charcoal">
              {title}
            </div>
          </div>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className="inline-flex h-10 items-center gap-2 rounded-xl border border-charcoal/10 bg-white/70 px-3 transition hover:bg-white focus:outline-none">
                <span className="text-sm font-bold text-charcoal">John</span>
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-coral text-xs font-bold text-white shadow-sm">
                  JD
                </div>
                <ChevronDown className="h-4 w-4 text-charcoal-muted" />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              align="end"
              className="w-48 rounded-xl border-charcoal/10 shadow-xl"
            >
              <DropdownMenuLabel className="text-[10px] font-bold uppercase tracking-widest text-charcoal-muted">
                My Account
              </DropdownMenuLabel>
              <DropdownMenuSeparator className="bg-charcoal/5" />
              <DropdownMenuItem className="cursor-pointer rounded-lg py-2.5 text-sm font-medium">
                Profile Settings
              </DropdownMenuItem>
              <DropdownMenuSeparator className="bg-charcoal/5" />
              <DropdownMenuItem
                onClick={() => navigate("/candidate/login")}
                className="cursor-pointer rounded-lg py-2.5 text-sm font-bold text-coral hover:bg-coral/5"
              >
                <LogOut className="mr-2 h-4 w-4" /> Logout
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </header>

        <main className="relative flex-1 overflow-x-hidden px-8 pb-4 pt-8">
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-coral/25 to-transparent" />
            <div className="absolute left-8 top-8 h-44 w-44 rounded-full bg-[hsl(var(--coral)/0.07)] blur-3xl" />
            <div className="absolute bottom-10 right-10 h-48 w-48 rounded-full bg-[hsl(var(--amber)/0.08)] blur-3xl" />
          </div>
          <div className="relative">{children}</div>
        </main>
      </div>
    </div>
  );
};
