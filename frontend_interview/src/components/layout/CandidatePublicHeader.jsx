import { Link, useLocation } from "react-router-dom";
import { HireIqLogo } from "@/components/HireIqLogo";

const navItems = [
  { label: "Culture", href: "/candidate/landing#culture", match: "/candidate/landing" },
  { label: "Recognition", href: "/candidate/landing#recognition", match: "/candidate/landing" },
  { label: "People", href: "/candidate/landing#people", match: "/candidate/landing" },
  { label: "Roles", href: "/candidate/landing#roles", match: "/candidate/landing" },
  { label: "Careers", href: "/candidate/careers", match: "/candidate/careers" },
];

export function CandidatePublicHeader() {
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50 border-b border-charcoal/10 bg-white/90 backdrop-blur">
      <div className="mx-auto flex h-16 w-full max-w-[1240px] items-center justify-between px-8 lg:px-12 xl:px-14">
        <Link to="/candidate/landing" className="flex items-center gap-8">
          <HireIqLogo />
        </Link>

        <nav className="flex items-center gap-6 text-[11px] font-bold uppercase tracking-widest text-charcoal-muted">
          {navItems.map((item) => {
            const active =
              item.match === "/candidate/careers" &&
              location.pathname.startsWith(item.match);

            return (
              <a
                key={item.label}
                href={item.href}
                className={`transition ${active ? "text-coral" : "hover:text-charcoal"}`}
              >
                {item.label}
              </a>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
