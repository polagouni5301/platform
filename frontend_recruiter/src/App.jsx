import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import ScrollToTop from "@/components/ScrollToTop";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Login from "./pages/Login";
import Onboarding from "./pages/Onboarding";
import Dashboard from "./pages/Dashboard";

// Recruiter Pages
import JobsList from "./pages/recruiter/JobsList";
import CreateJobWizard from "./pages/recruiter/CreateJobWizard";
import JobDetails from "./pages/recruiter/JobDetails";
import PipelineView from "./pages/recruiter/PipelineView";
import CandidateProfile from "./pages/recruiter/CandidateProfile";
import ReviewQueue from "./pages/recruiter/ReviewQueue";
import Settings from "./pages/recruiter/Settings";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/login" element={<Login />} />
          <Route path="/onboarding" element={<Onboarding />} />
          <Route path="/dashboard" element={<Dashboard />} />

          {/* Recruiter Routes */}
          <Route path="/jobs" element={<JobsList />} />
          <Route path="/jobs/new" element={<CreateJobWizard />} />
          <Route path="/jobs/edit/:id" element={<CreateJobWizard />} />
          <Route path="/jobs/:id" element={<JobDetails />} />
          <Route path="/jobs/:id/pipeline" element={<PipelineView />} />
          <Route path="/candidates/:id" element={<CandidateProfile />} />
          <Route path="/review" element={<ReviewQueue />} />
          <Route path="/settings" element={<Settings />} />

          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
