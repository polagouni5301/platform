export const CANDIDATE_STAGE_KEY = "candidate_stage";

export const candidateStageOrder = [
  "browsing",
  "applied",
  "mcq_done",
  "video_done",
  "coding_done",
];

export const candidateJobs = [
  {
    id: "senior-backend-engineer",
    title: "Senior Backend Engineer",
    team: "Engineering",
    location: "Hyderabad, India",
    workMode: "Remote",
    employmentType: "Full-time",
    level: "Senior",
    salary: "INR 18-24 LPA",
    summary:
      "Design resilient APIs, shape platform architecture, and work closely with product and AI teams building the next generation of hiring workflows.",
    highlights: [
      "Own high-scale services used across the hiring funnel",
      "Partner with product, data, and AI engineering on new capabilities",
      "Mentor engineers while staying hands-on with architecture and delivery",
    ],
  },
  {
    id: "product-manager-platform",
    title: "Product Manager, Platform",
    team: "Product",
    location: "Bengaluru, India",
    workMode: "Hybrid",
    employmentType: "Full-time",
    level: "Mid-Senior",
    salary: "INR 20-28 LPA",
    summary:
      "Lead roadmap decisions for recruiter workflows, candidate experiences, and the core systems that power structured hiring at scale.",
    highlights: [
      "Drive end-to-end product discovery with design and engineering",
      "Translate customer pain points into crisp execution plans",
      "Measure impact across activation, funnel conversion, and hiring velocity",
    ],
  },
  {
    id: "data-analyst-hiring-ops",
    title: "Data Analyst, Hiring Operations",
    team: "Data",
    location: "Remote",
    workMode: "Remote",
    employmentType: "Contract",
    level: "Mid-level",
    salary: "INR 10-14 LPA",
    summary:
      "Turn hiring data into practical insight by building dashboards, surfacing bottlenecks, and helping teams improve decision quality.",
    highlights: [
      "Build reporting for recruiter and candidate funnel health",
      "Work with operations and finance on hiring efficiency metrics",
      "Create clean datasets and recurring performance reviews",
    ],
  },
];

export const candidateApplications = [
  {
    id: "app-senior-backend",
    jobId: "senior-backend-engineer",
    company: "HireIQ Partner Solutions",
    appliedDate: "Apr 27, 2026",
    stage: "coding_done",
  },
  {
    id: "app-product-platform",
    jobId: "product-manager-platform",
    company: "HireIQ Partner Solutions",
    appliedDate: "Apr 21, 2026",
    stage: "video_done",
  },
  {
    id: "app-data-analyst",
    jobId: "data-analyst-hiring-ops",
    company: "HireIQ Partner Solutions",
    appliedDate: "Apr 18, 2026",
    stage: "applied",
  },
];

export const getStoredCandidateStage = () => {
  if (typeof window === "undefined") return "browsing";
  const saved = window.localStorage.getItem(CANDIDATE_STAGE_KEY);
  return candidateStageOrder.includes(saved) ? saved : "browsing";
};

export const setStoredCandidateStage = (stage) => {
  if (typeof window === "undefined") return;
  window.localStorage.setItem(CANDIDATE_STAGE_KEY, stage);
};

export const getJobById = (jobId) =>
  candidateJobs.find((job) => job.id === jobId) ?? candidateJobs[0];

export const getCandidateApplications = (currentStage) =>
  candidateApplications.map((application) =>
    application.jobId === "senior-backend-engineer"
      ? {
          ...application,
          stage: currentStage === "browsing" ? "applied" : currentStage,
        }
      : application,
  );

export const hasReachedStage = (currentStage, targetStage) =>
  candidateStageOrder.indexOf(currentStage) >=
  candidateStageOrder.indexOf(targetStage);

export const getMailboxMessages = (jobTitle) => [
  {
    id: "assessment",
    sender: "HireIQ Recruiting",
    subject: `Action required: Skills assessment for ${jobTitle}`,
    preview:
      "Your application has been received. Complete the first assessment to continue in the process.",
    date: "Today, 9:00 AM",
    body: [
      "Hi Jordan,",
      `Thank you for applying for the ${jobTitle} role.`,
      "Your first step is a short skills assessment. It focuses on core technical judgment and should take around 20 minutes to complete.",
      "Please review the setup instructions before starting. You will need a stable connection and access to your microphone and camera for the verification screen.",
      "Best regards,",
      "HireIQ Recruiting Team",
    ],
    ctaLabel: "Open setup for assessment",
    ctaHref: "/device-check/assessment",
  },
];

export const getVisibleMailboxMessages = (stage, jobTitle) =>
  getMailboxMessages(jobTitle).filter((message) => {
    if (message.id === "assessment") return hasReachedStage(stage, "applied");
    return false;
  });

export const getJourneyCompletionStage = (step) => {
  if (step === "application") return "applied";
  if (step === "assessment") return "mcq_done";
  if (step === "video") return "video_done";
  return "coding_done";
};
