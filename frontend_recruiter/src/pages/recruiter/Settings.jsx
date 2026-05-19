import { RecruiterLayout } from "@/components/layout/RecruiterLayout";
import { Globe, Mail, Users, Sliders, Puzzle, CreditCard } from "lucide-react";
import { useState } from "react";

const Settings = () => {
  const [activeTab, setActiveTab] = useState("Email templates");

  const tabs = [
    { label: "Email templates", icon: Mail },
    { label: "Team members", icon: Users },
    { label: "Scoring presets", icon: Sliders },
    { label: "Integrations", icon: Puzzle },
    { label: "Account & billing", icon: CreditCard },
  ];

  return (
    <RecruiterLayout title="Settings" showNewJobButton={false}>
      <div className="p-8 space-y-6 max-w-6xl mx-auto">
        {/* Header */}
        <div>
          <h1 className="font-display font-bold text-2xl text-charcoal">
            Settings
          </h1>
          <p className="text-sm text-charcoal-muted mt-1">
            Manage your organisation, templates, team, and integrations.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex border-b border-charcoal/10 gap-8 overflow-x-auto no-scrollbar">
          {tabs.map((t) => (
            <button
              key={t.label}
              onClick={() => setActiveTab(t.label)}
              className={`pb-4 px-1 text-sm font-bold whitespace-nowrap transition-all relative ${
                activeTab === t.label
                  ? "text-coral"
                  : "text-charcoal-muted hover:text-charcoal"
              }`}
            >
              <span className="inline-flex items-center gap-2">{t.label}</span>
              {activeTab === t.label && (
                <div className="absolute bottom-0 inset-x-0 h-0.5 bg-coral rounded-full" />
              )}
            </button>
          ))}
        </div>

        {activeTab === "Email templates" && (
          <div className="space-y-6 animate-in fade-in duration-500">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                "Application Received",
                "Interview Invitation",
                "Rejection",
                "Shortlist Confirmation",
              ].map((template) => (
                <div
                  key={template}
                  className="p-4 bg-white border border-charcoal/10 rounded-xl hover:border-coral/40 transition cursor-pointer group"
                >
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="text-sm font-bold text-charcoal">
                      {template}
                    </h4>
                    <button className="text-[10px] font-bold text-coral opacity-0 group-hover:opacity-100 transition">
                      Edit
                    </button>
                  </div>
                  <p className="text-xs text-charcoal-muted line-clamp-2">
                    Hi {"{{candidate_name}}"},\n\nThank you for applying to the
                    Senior Backend Engineer position at ABC PVT LTD...
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === "Team members" && (
          <div className="space-y-4 animate-in fade-in duration-500">
            <div className="flex justify-between items-center">
              <h3 className="text-xs font-bold text-charcoal uppercase tracking-wider">
                Active Members (3)
              </h3>
              <button className="h-8 px-3 bg-coral text-cream text-[10px] font-bold rounded-lg hover:bg-charcoal transition">
                Add Member
              </button>
            </div>
            <div className="bg-white border border-charcoal/10 rounded-xl overflow-hidden shadow-sm">
              {[
                {
                  name: "Alex Johnson",
                  role: "Admin",
                  email: "alex@datapanther.com",
                },
                {
                  name: "Sam Wilson",
                  role: "Recruiter",
                  email: "sam@datapanther.com",
                },
                {
                  name: "Jordan Smith",
                  role: "Hiring Manager",
                  email: "jordan@datapanther.com",
                },
              ].map((member, i) => (
                <div
                  key={i}
                  className="px-5 py-4 border-b border-charcoal/5 last:border-0 flex items-center justify-between"
                >
                  <div className="flex items-center gap-3">
                    <div className="h-8 w-8 rounded-full bg-coral/10 text-coral flex items-center justify-center text-[10px] font-bold">
                      {member.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </div>
                    <div>
                      <p className="text-sm font-bold text-charcoal">
                        {member.name}
                      </p>
                      <p className="text-[10px] text-charcoal-muted">
                        {member.email}
                      </p>
                    </div>
                  </div>
                  <span className="px-2 py-0.5 rounded-full bg-cream border border-charcoal/10 text-[9px] font-bold text-charcoal-muted uppercase">
                    {member.role}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === "Scoring presets" && (
          <div className="space-y-4 animate-in fade-in duration-500">
            {["Engineering Roles", "Product & Design", "Sales & Marketing"].map(
              (preset) => (
                <div
                  key={preset}
                  className="p-5 bg-white border border-charcoal/10 rounded-2xl flex items-center justify-between hover:border-coral/40 transition cursor-pointer"
                >
                  <div>
                    <h4 className="text-sm font-bold text-charcoal">
                      {preset}
                    </h4>
                    <p className="text-[10px] text-charcoal-muted mt-0.5">
                      Skills (40%), Experience (30%), Education (20%), Certs
                      (10%)
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <button className="h-8 px-3 rounded-lg border border-charcoal/10 bg-white text-[10px] font-bold text-charcoal-muted hover:text-charcoal transition">
                      Duplicate
                    </button>
                    <button className="h-8 px-3 rounded-lg border border-charcoal/10 bg-white text-[10px] font-bold text-charcoal-muted hover:text-charcoal transition">
                      Edit
                    </button>
                  </div>
                </div>
              ),
            )}
          </div>
        )}

        {(activeTab === "Integrations" ||
          activeTab === "Account & billing") && (
          <div className="py-20 flex flex-col items-center justify-center text-center space-y-4 opacity-40">
            <div className="h-16 w-16 rounded-full bg-cream flex items-center justify-center text-charcoal-muted">
              {(() => {
                const Icon =
                  tabs.find((t) => t.label === activeTab)?.icon || Globe;
                return <Icon className="h-8 w-8" />;
              })()}
            </div>
            <div className="space-y-1">
              <h3 className="text-lg font-bold text-charcoal">{activeTab}</h3>
              <p className="text-sm text-charcoal-muted">
                This settings panel is coming soon.
              </p>
            </div>
          </div>
        )}
      </div>
    </RecruiterLayout>
  );
};

export default Settings;
