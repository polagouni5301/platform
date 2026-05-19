import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  LayoutGrid,
  Briefcase,
  ClipboardList,
  Settings,
  ChevronDown,
  LogOut,
  PanelLeftClose,
  PanelLeftOpen,
} from "lucide-react";
import { useEffect, useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const SidebarItem = ({ Icon, label, path, badge, collapsed = false }) => {
  const location = useLocation();
  const active =
    location.pathname === path ||
    (path !== "/dashboard" && location.pathname.startsWith(path));

  return (
    <Link
      to={path}
      title={collapsed ? label : undefined}
      className={`relative flex h-10 w-full items-center rounded-xl text-sm font-medium transition ${
        collapsed ? "justify-center px-2" : "gap-3 px-3"
      } ${
        active
          ? "bg-gradient-to-r from-coral to-[#ff8a47] text-white shadow-[0_18px_35px_-18px_hsl(var(--coral)/0.95)]"
          : "text-[#d4dbea] hover:bg-white/12 hover:text-white"
      }`}
    >
      <Icon className="h-[18px] w-[18px] flex-none" />
      {!collapsed && <span className="flex-1 text-left">{label}</span>}
      {badge ? (
        <span
          className={`flex items-center justify-center rounded-full bg-white/15 text-[10px] font-bold text-white ${
            collapsed
              ? "absolute right-1.5 top-1.5 h-4 min-w-4 px-1"
              : "h-5 min-w-5 px-1.5"
          }`}
        >
          {badge}
        </span>
      ) : null}
    </Link>
  );
};

const SIDEBAR_COLLAPSED_STORAGE_KEY = "recruiter-sidebar-collapsed";

export const RecruiterLayout = ({
  children,
  title,
  showNewJobButton = false,
}) => {
  const navigate = useNavigate();
  const [sidebarCollapsed, setSidebarCollapsed] = useState(() => {
    if (typeof window === "undefined") return false;
    return (
      window.localStorage.getItem(SIDEBAR_COLLAPSED_STORAGE_KEY) === "true"
    );
  });

  useEffect(() => {
    window.localStorage.setItem(
      SIDEBAR_COLLAPSED_STORAGE_KEY,
      String(sidebarCollapsed),
    );
  }, [sidebarCollapsed]);

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-[linear-gradient(180deg,#fffaf3_0%,#f8efe2_44%,#f6ecdf_100%)]">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 grid-bg opacity-30" />
        <div className="absolute left-[14%] top-[-12%] h-[460px] w-[460px] rounded-full bg-[hsl(var(--coral)/0.12)] blur-[120px]" />
        <div className="absolute bottom-[-16%] right-[-5%] h-[520px] w-[520px] rounded-full bg-[hsl(var(--amber)/0.12)] blur-[140px]" />
      </div>

      <aside
        className={`fixed inset-y-0 left-0 z-50 flex flex-col gap-0.5 border-r border-white/10 bg-[linear-gradient(180deg,#151820_0%,#0b0f1a_100%)] px-3 py-4 shadow-[24px_0_60px_-35px_rgba(11,15,26,0.7)] transition-all duration-300 ${
          sidebarCollapsed ? "w-[84px]" : "w-[228px]"
        }`}
      >
        <div className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-[radial-gradient(circle_at_top,hsl(var(--coral)/0.28),transparent_65%)]" />
        <div className="pointer-events-none absolute -bottom-16 left-1/2 h-40 w-40 -translate-x-1/2 rounded-full bg-[hsl(var(--amber)/0.18)] blur-3xl" />

        <div
          className={`relative mb-4 flex items-center ${
            sidebarCollapsed ? "justify-center" : "justify-between px-2"
          }`}
        >
          <Link
            to="/dashboard"
            className={`flex items-center gap-2 ${
              sidebarCollapsed ? "justify-center" : ""
            }`}
          >
            <div className="relative flex h-8 w-8 items-center justify-center overflow-hidden rounded-lg bg-coral shadow-[0_15px_30px_-16px_hsl(var(--coral)/0.9)]">
              <div className="absolute inset-0 rounded-full bg-amber/30 blur-md" />
              <span className="relative font-display text-lg font-bold leading-none text-amber">
                H
              </span>
            </div>
            {!sidebarCollapsed && (
              <span className="font-display text-[18px] font-bold tracking-tight text-cream">
                HireIQ
              </span>
            )}
          </Link>

          {!sidebarCollapsed && (
            <button
              type="button"
              onClick={() => setSidebarCollapsed(true)}
              className="flex h-8 w-8 items-center justify-center rounded-lg text-white/72 transition hover:bg-white/10 hover:text-white"
              aria-label="Collapse sidebar"
            >
              <PanelLeftClose className="h-4 w-4" />
            </button>
          )}
        </div>

        {!sidebarCollapsed && (
          <div className="mb-1 px-3 text-[9px] font-semibold uppercase tracking-wider text-white/72">
            Workspace
          </div>
        )}

        <SidebarItem
          Icon={LayoutGrid}
          label="Dashboard"
          path="/dashboard"
          collapsed={sidebarCollapsed}
        />
        <SidebarItem
          Icon={Briefcase}
          label="Jobs"
          path="/jobs"
          collapsed={sidebarCollapsed}
        />
        <SidebarItem
          Icon={ClipboardList}
          label="Review Queue"
          path="/review"
          badge="3"
          collapsed={sidebarCollapsed}
        />
        <SidebarItem
          Icon={Settings}
          label="Settings"
          path="/settings"
          collapsed={sidebarCollapsed}
        />

        <div className="flex-1" />

        <div
          className={`relative flex items-center border-t border-white/10 pt-2 ${
            sidebarCollapsed ? "justify-center px-0" : "gap-2 px-2"
          }`}
        >
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-amber text-xs font-bold text-coral shadow-sm">
            AZ
          </div>
          {!sidebarCollapsed && (
            <>
              <div className="min-w-0 flex-1">
                <div className="truncate text-xs font-semibold text-white">
                  Alex
                </div>
                <div className="truncate text-[10px] text-[#c0c9db]">
                  Acme Corp - Admin
                </div>
              </div>
              <ChevronDown className="h-3.5 w-3.5 text-[#d4dbea]" />
            </>
          )}
        </div>
      </aside>

      <div
        className={`relative flex min-h-screen flex-1 flex-col transition-all duration-300 ${
          sidebarCollapsed ? "ml-[84px]" : "ml-[228px]"
        }`}
      >
        <header
          className={`fixed top-0 z-40 flex h-14 items-center justify-between border-b border-charcoal/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.95),rgba(255,247,239,0.9))] px-4 shadow-[0_18px_45px_-36px_rgba(11,15,26,0.45)] backdrop-blur-xl transition-all duration-300 ${
            sidebarCollapsed
              ? "left-[84px] w-[calc(100%-84px)]"
              : "left-[228px] w-[calc(100%-228px)]"
          }`}
        >
          <div className="flex items-center gap-3 text-sm text-charcoal-muted">
            <button
              type="button"
              onClick={() => setSidebarCollapsed((value) => !value)}
              className="flex h-9 w-9 items-center justify-center rounded-xl border border-charcoal/10 bg-white/65 text-charcoal-muted transition hover:bg-white hover:text-charcoal"
              aria-label={
                sidebarCollapsed ? "Expand sidebar" : "Collapse sidebar"
              }
            >
              {sidebarCollapsed ? (
                <PanelLeftOpen className="h-4 w-4" />
              ) : (
                <PanelLeftClose className="h-4 w-4" />
              )}
            </button>
            <div>
              <div className="text-[10px] font-bold uppercase tracking-[0.24em] text-coral">
                Recruiter workspace
              </div>
              <span className="font-semibold text-charcoal">{title}</span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="inline-flex h-10 items-center gap-2 rounded-xl border border-charcoal/10 bg-white/70 px-2.5 transition hover:bg-white focus:outline-none">
                  <span className="text-xs font-bold text-charcoal">Alex</span>
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-coral text-[10px] font-bold text-white shadow-sm">
                    AZ
                  </div>
                  <ChevronDown className="h-3.5 w-3.5 text-charcoal-muted" />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                align="end"
                className="w-48 rounded-xl border-charcoal/10 shadow-xl"
              >
                <DropdownMenuLabel className="text-[10px] font-bold uppercase tracking-widest text-charcoal-muted">
                  Alex Account
                </DropdownMenuLabel>
                <DropdownMenuSeparator className="bg-charcoal/5" />
                <DropdownMenuItem className="cursor-pointer rounded-lg py-2.5 text-xs font-medium">
                  Profile Settings
                </DropdownMenuItem>
                <DropdownMenuItem className="cursor-pointer rounded-lg py-2.5 text-xs font-medium">
                  Billing & Usage
                </DropdownMenuItem>
                <DropdownMenuSeparator className="bg-charcoal/5" />
                <DropdownMenuItem
                  onClick={() => navigate("/")}
                  className="cursor-pointer rounded-lg py-2.5 text-xs font-bold text-destructive hover:bg-destructive/5"
                >
                  <LogOut className="mr-2 h-3.5 w-3.5" /> Logout
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </header>

        <main className="relative flex-1 overflow-x-hidden pt-14">
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-coral/25 to-transparent" />
            <div className="absolute left-8 top-8 h-44 w-44 rounded-full bg-[hsl(var(--coral)/0.08)] blur-3xl" />
            <div className="absolute bottom-8 right-12 h-52 w-52 rounded-full bg-[hsl(var(--amber)/0.08)] blur-3xl" />
          </div>
          <div className="relative">{children}</div>
        </main>
      </div>
    </div>
  );
};
