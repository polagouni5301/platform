import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import ScrollToTop from "@/components/ScrollToTop";
import NotFound from "./pages/NotFound";

// Candidate Pages
import CandidateLanding from "./pages/candidate/CandidateLanding";
import CandidateLogin from "./pages/candidate/CandidateLogin";
import CandidateJobs from "./pages/candidate/CandidateJobs";
import CandidateCareers from "./pages/candidate/CandidateCareers";
import CandidateMailbox from "./pages/candidate/CandidateMailbox";
import CandidateMailboxPreview from "./pages/candidate/CandidateMailboxPreview";
import ApplicationTracking from "./pages/candidate/ApplicationTracking";
import ApplyPage from "./pages/candidate/ApplyPage";
import DeviceCheck from "./pages/candidate/DeviceCheck";
import PracticeQuestion from "./pages/candidate/PracticeQuestion";
import VideoInterview from "./pages/candidate/VideoInterview";
import AssessmentMCQ from "./pages/candidate/AssessmentMCQ";
import AssessmentCoding from "./pages/candidate/AssessmentCoding";
import SubmissionDone from "./pages/candidate/SubmissionDone";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Navigate to="/candidate/landing" replace />} />

          {/* Candidate Routes */}
          <Route
            path="/candidate"
            element={<Navigate to="/candidate/landing" replace />}
          />
          <Route path="/candidate/landing" element={<CandidateLanding />} />
          <Route path="/candidate/careers" element={<CandidateCareers />} />
          <Route path="/candidate/login" element={<CandidateLogin />} />
          <Route
            path="/candidate/dashboard"
            element={<Navigate to="/candidate/jobs" replace />}
          />
          <Route path="/candidate/jobs" element={<CandidateJobs />} />
          <Route path="/candidate/mailbox" element={<CandidateMailbox />} />
          <Route
            path="/candidate/mailbox-preview"
            element={<CandidateMailboxPreview />}
          />
          <Route path="/candidate/tracking" element={<ApplicationTracking />} />

          <Route path="/apply/:jobId" element={<ApplyPage />} />
          <Route path="/device-check" element={<DeviceCheck />} />
          <Route path="/device-check/:step" element={<DeviceCheck />} />
          <Route path="/practice" element={<PracticeQuestion />} />
          <Route path="/interview" element={<VideoInterview />} />
          <Route path="/assessment-mcq" element={<AssessmentMCQ />} />
          <Route path="/assessment-coding" element={<AssessmentCoding />} />
          <Route path="/submission-done" element={<SubmissionDone />} />
          <Route path="/submission-done/:step" element={<SubmissionDone />} />

          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
