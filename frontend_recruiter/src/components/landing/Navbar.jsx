import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { HireIqLogo } from "@/components/HireIqLogo";

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "h-14 backdrop-blur-xl bg-cream/85 border-b border-charcoal/10 shadow-[0_4px_30px_-15px_hsl(var(--charcoal)/0.15)]"
          : "h-16 bg-cream/40 backdrop-blur-md border-b border-transparent"
      }`}
    >
      <div className="container h-full flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          <HireIqLogo />
        </Link>

        <nav className="hidden md:flex items-center gap-1 text-sm font-medium text-charcoal/70 bg-white/60 border border-charcoal/10 rounded-full px-2 py-1.5 backdrop-blur">
          {[
            { href: "#product", label: "Product" },
            { href: "#how", label: "How it works" },
            { href: "#pricing", label: "Pricing" },
            { href: "#companies", label: "For companies" },
          ].map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="px-3.5 py-1.5 rounded-full hover:text-charcoal hover:bg-coral/10 transition-colors"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href="http://localhost:8081"
            className="hidden sm:inline-flex items-center gap-1 px-4 h-9 rounded-full text-sm font-medium text-charcoal/80 hover:text-charcoal hover:bg-white/60 transition"
          >
            Candidate portal
            <ArrowUpRight className="h-3.5 w-3.5" />
          </a>
          <Link
            to="/login"
            className="hidden sm:inline-flex items-center px-4 h-9 rounded-full text-sm font-medium text-charcoal border border-charcoal/15 bg-white/70 hover:bg-white transition"
          >
            Log in
          </Link>
          <Link
            to="/login"
            className="group inline-flex items-center gap-1.5 px-4 h-9 rounded-full text-sm font-semibold bg-charcoal text-cream hover:bg-coral transition-all shadow-[0_8px_25px_-10px_hsl(var(--charcoal)/0.5)]"
          >
            Start free trial
            <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:rotate-45" />
          </Link>
        </div>
      </div>
    </header>
  );
};
