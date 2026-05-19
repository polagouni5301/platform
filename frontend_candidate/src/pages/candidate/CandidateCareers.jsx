import { CandidatePublicLayout } from "@/components/layout/CandidatePublicLayout";
import { CandidateJobsBoard } from "@/components/candidate/CandidateJobsBoard";

export default function CandidateCareers() {
  return (
    <CandidatePublicLayout>
      <section className="px-4 pb-14 pt-8 md:px-5">
        <CandidateJobsBoard publicView showHero={false} />
      </section>
    </CandidatePublicLayout>
  );
}
