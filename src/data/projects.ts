export interface Project {
  slug: string;
  title: string;
  description: string;
  technologies: string[];
  features: string[];
  technicalDetails: string[];
  workflow: string[];
  github?: string;
  liveDemo?: string;
}

export const projects: Project[] = [
  {
    slug: "ai-agentic-resume-analyzer",
    title: "AI Agentic Resume Analyzer",
    description:
      "An AI-powered workflow that compares candidate resumes with job requirements and highlights experience, skill gaps, and tailored next steps.",
    technologies: ["Python", "LangChain", "LangGraph", "FastAPI", "React.js"],
    features: [
      "Resume parsing",
      "Job description analysis",
      "Skill matching",
      "Gap identification",
      "Personalized recommendations",
      "AI workflow orchestration",
      "Interactive reporting",
    ],
    technicalDetails: [
      "Designed an agentic LangChain and LangGraph pipeline to parse resumes, analyze job requirements, compare strengths, and produce actionable recommendations.",
      "Built a full-stack experience with FastAPI endpoints and a React.js dashboard for uploading resumes and reviewing AI-generated insights.",
    ],
    workflow: [
      "Resume + JD Input",
      "Parsing",
      "Skill Evaluation",
      "Contextual Analysis",
      "Gap Summary",
      "Recommendation",
    ],
  },
  {
    slug: "ai-customer-support-agent",
    title: "AI Customer Support Agent",
    description:
      "A conversational support system that interprets user intent, retrieves relevant context, and delivers tailored responses grounded in business information.",
    technologies: ["LangChain", "LangGraph", "Python", "React.js", "Node.js", "Firebase"],
    features: [
      "Intent understanding",
      "Context retrieval",
      "Dynamic response generation",
      "Conversation tracking",
      "Knowledge-aware support",
      "Agent-driven workflow",
    ],
    technicalDetails: [
      "Implemented a LangGraph-driven pipeline for query classification, retrieval, response generation, and validation so support responses stay accurate and relevant.",
      "Connected a React.js interface with Node.js services and Firebase storage to manage conversations and test end-to-end user flows.",
    ],
    workflow: [
      "Customer Query",
      "Intent Understanding",
      "Context Retrieval",
      "AI Response",
      "Validation",
      "Support Output",
    ],
  },
  {
    slug: "ai-ecommerce-recommendation-agent",
    title: "AI E-Commerce Recommendation Agent",
    description:
      "A recommendation engine for personalized shopping experiences, surfacing products based on user preferences and intent signals.",
    technologies: ["Python", "LangChain", "LangGraph", "React.js", "Node.js", "GCP"],
    features: [
      "Preference analysis",
      "Intent detection",
      "Product retrieval",
      "Personalized recommendations",
      "Response validation",
      "Cloud-ready deployment",
    ],
    technicalDetails: [
      "Created LangGraph workflows for preference analysis, product matching, recommendation generation, and result validation in a more user-personalized shopping flow.",
      "Built a frontend and API layer that can support real-world product discovery experiences and deployment in a cloud environment.",
    ],
    workflow: [
      "User Preferences",
      "Intent Detection",
      "Product Retrieval",
      "Recommendation Logic",
      "Validation",
      "Personalized Results",
    ],
  },
];
