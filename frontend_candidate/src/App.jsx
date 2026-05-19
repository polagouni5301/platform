import { useEffect } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  BrowserRouter,
  Route,
  Routes,
  Navigate,
  useLocation,
  useParams,
} from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import ScrollToTop from "@/components/ScrollToTop";
import NotFound from "./pages/NotFound";
import { getInterviewAppUrl } from "@/lib/appUrls";

// Candidate Pages
import CandidateLanding from "./pages/candidate/CandidateLanding";
import CandidateJobs from "./pages/candidate/CandidateJobs";
import CandidateCareers from "./pages/candidate/CandidateCareers";
import CandidateMailbox from "./pages/candidate/CandidateMailbox";
import CandidateMailboxPreview from "./pages/candidate/CandidateMailboxPreview";
import ApplicationTracking from "./pages/candidate/ApplicationTracking";
import ApplyPage from "./pages/candidate/ApplyPage";
import SubmissionDone from "./pages/candidate/SubmissionDone";

const queryClient = new QueryClient();

const CrossAppRedirect = ({ to }) => {
  const location = useLocation();

  useEffect(() => {
    const target = to(location);
    if (window.location.href !== target) {
      window.location.replace(target);
    }
  }, [location, to]);

  return null;
};

const redirectToInterview = (location) =>
  getInterviewAppUrl(`${location.pathname}${location.search}${location.hash}`);

const SubmissionStepRoute = () => {
  const { step } = useParams();

  if (!step || step === "application") {
    return <SubmissionDone />;
  }

  return <CrossAppRedirect to={redirectToInterview} />;
};

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
          <Route
            path="/candidate/login"
            element={<CrossAppRedirect to={redirectToInterview} />}
          />
          <Route
            path="/device-check"
            element={<CrossAppRedirect to={redirectToInterview} />}
          />
          <Route
            path="/device-check/:step"
            element={<CrossAppRedirect to={redirectToInterview} />}
          />
          <Route
            path="/practice"
            element={<CrossAppRedirect to={redirectToInterview} />}
          />
          <Route
            path="/interview"
            element={<CrossAppRedirect to={redirectToInterview} />}
          />
          <Route
            path="/assessment-mcq"
            element={<CrossAppRedirect to={redirectToInterview} />}
          />
          <Route
            path="/assessment-coding"
            element={<CrossAppRedirect to={redirectToInterview} />}
          />
          <Route path="/submission-done" element={<SubmissionDone />} />
          <Route
            path="/submission-done/:step"
            element={<SubmissionStepRoute />}
          />

          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
