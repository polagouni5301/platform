import { Twitter, Linkedin, Github, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { HireIqLogo } from "@/components/HireIqLogo";

export const Footer = () => (
  <footer className="bg-charcoal text-white relative overflow-hidden">
    <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-coral/15 blur-3xl pointer-events-none" />

    <div className="container relative py-20">
      {/* Big wordmark */}
      <div className="border-b border-white/10 pb-12 mb-12">
        <div className="font-display font-bold text-7xl sm:text-8xl lg:text-[140px] leading-[0.85] tracking-tight">
          <span className="text-white">Hire</span>
          <span className="bg-gradient-to-r from-coral via-amber to-coral bg-clip-text text-transparent italic" style={{ backgroundSize: "200% 200%", animation: "gradient-shift 6s ease infinite" }}>
            IQ.
          </span>
        </div>
        <div className="mt-4 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
          <p className="text-base text-white/60 max-w-md leading-relaxed">
            Autonomous hiring for teams who&apos;d rather build than screen. Built in Hyderabad, shipping worldwide.
          </p>
          <Link to="/login" className="group inline-flex items-center gap-2 self-start px-5 h-11 rounded-full bg-coral text-white font-semibold text-sm hover:bg-coral-hover transition shadow-[0_15px_40px_-10px_hsl(var(--coral)/0.5)]">
            Start free trial
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:rotate-45" />
          </Link>
        </div>
      </div>

      <div className="grid md:grid-cols-4 gap-10">
        <div>
          <HireIqLogo variant="light" />
          <div className="mt-6 flex gap-2">
            {[Twitter, Linkedin, Github].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="h-10 w-10 rounded-full border border-white/15 flex items-center justify-center text-white/60 hover:bg-coral hover:text-white hover:border-coral hover:-translate-y-0.5 transition-all"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
          <div className="mt-6 inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-[11px] text-white/60">
            <span className="h-1.5 w-1.5 rounded-full bg-coral animate-pulse" />
            All systems operational
          </div>
        </div>

        <FooterCol
          title="Product"
          links={["Resume scoring", "Video interviews", "Coding tests", "Integrations", "Changelog"]}
        />
        <FooterCol
          title="Company"
          links={["About", "Customers", "Careers", "Blog", "Press kit"]}
        />
        <FooterCol
          title="Legal"
          links={["Privacy", "Terms", "DPA", "Security", "SOC 2 report"]}
        />
      </div>

      
    </div>
  </footer>
);

const FooterCol = ({ title, links }) => (
  <div>
    <div className="text-[11px] font-bold uppercase tracking-[0.25em] text-coral mb-5">
      {title}
    </div>
    <ul className="space-y-3">
      {links.map((l) => (
        <li key={l}>
          <a href="#" className="group inline-flex items-center gap-1 text-sm text-white/70 hover:text-white transition">
            {l}
            <ArrowUpRight className="h-3 w-3 opacity-0 group-hover:opacity-100 -translate-x-1 group-hover:translate-x-0 transition-all" />
          </a>
        </li>
      ))}
    </ul>
  </div>
);
