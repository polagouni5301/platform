import { useEffect } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  BrowserRouter,
  Navigate,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import ScrollToTop from "@/components/ScrollToTop";
import NotFound from "./pages/NotFound";
import CandidateLogin from "./pages/candidate/CandidateLogin";
import DeviceCheck from "./pages/candidate/DeviceCheck";
import PracticeQuestion from "./pages/candidate/PracticeQuestion";
import VideoInterview from "./pages/candidate/VideoInterview";
import AssessmentMCQ from "./pages/candidate/AssessmentMCQ";
import AssessmentCoding from "./pages/candidate/AssessmentCoding";
import SubmissionDone from "./pages/candidate/SubmissionDone";
import { getCandidateAppUrl } from "@/lib/appUrls";

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

const redirectToCandidate = (location) =>
  getCandidateAppUrl(`${location.pathname}${location.search}${location.hash}`);

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Navigate to="/candidate/login" replace />} />
          <Route
            path="/candidate"
            element={<Navigate to="/candidate/login" replace />}
          />
          <Route
            path="/candidate/dashboard"
            element={<CrossAppRedirect to={redirectToCandidate} />}
          />
          <Route path="/candidate/login" element={<CandidateLogin />} />
          <Route path="/device-check" element={<DeviceCheck />} />
          <Route path="/device-check/:step" element={<DeviceCheck />} />
          <Route path="/practice" element={<PracticeQuestion />} />
          <Route path="/interview" element={<VideoInterview />} />
          <Route path="/assessment-mcq" element={<AssessmentMCQ />} />
          <Route path="/assessment-coding" element={<AssessmentCoding />} />
          <Route path="/submission-done" element={<SubmissionDone />} />
          <Route path="/submission-done/:step" element={<SubmissionDone />} />

          <Route
            path="/candidate/landing"
            element={<CrossAppRedirect to={redirectToCandidate} />}
          />
          <Route
            path="/candidate/careers"
            element={<CrossAppRedirect to={redirectToCandidate} />}
          />
          <Route
            path="/candidate/mailbox"
            element={<CrossAppRedirect to={redirectToCandidate} />}
          />
          <Route
            path="/candidate/mailbox-preview"
            element={<CrossAppRedirect to={redirectToCandidate} />}
          />
          <Route
            path="/candidate/jobs"
            element={<CrossAppRedirect to={redirectToCandidate} />}
          />
          <Route
            path="/candidate/tracking"
            element={<CrossAppRedirect to={redirectToCandidate} />}
          />
          <Route
            path="/apply/:jobId"
            element={<CrossAppRedirect to={redirectToCandidate} />}
          />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
