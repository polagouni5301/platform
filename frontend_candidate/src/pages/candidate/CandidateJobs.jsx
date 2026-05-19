import { CandidateDashboardLayout } from "@/components/layout/CandidateDashboardLayout";
import { CandidateJobsBoard } from "@/components/candidate/CandidateJobsBoard";

export default function CandidateJobs() {
  return (
    <CandidateDashboardLayout title="Job Postings">
      <CandidateJobsBoard />
    </CandidateDashboardLayout>
  );
}
