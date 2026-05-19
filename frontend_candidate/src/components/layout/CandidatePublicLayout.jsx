import { CandidatePublicHeader } from "@/components/layout/CandidatePublicHeader";

export function CandidatePublicLayout({ children, className = "bg-cream" }) {
  return (
    <div className={`min-h-screen overflow-x-hidden ${className}`}>
      <CandidatePublicHeader />
      <main>{children}</main>
    </div>
  );
}
