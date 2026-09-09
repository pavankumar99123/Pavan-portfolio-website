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
      "Developed an AI-powered resume analyzer that compares resumes with job descriptions and generates personalized skill-gap recommendations.",
    technologies: ["Python", "LangChain", "LangGraph", "FastAPI", "React.js"],
    features: [
      "Resume parsing",
      "Job description analysis",
      "Skill matching",
      "Skill-gap identification",
      "Personalized recommendations",
      "AI-powered analysis",
      "Agentic workflow",
    ],
    technicalDetails: [
      "Designed LangChain and LangGraph agentic workflows for resume parsing, job analysis, skill matching, and recommendation generation.",
      "Built FastAPI REST endpoints and a React.js interface for resume upload and interactive analysis results.",
    ],
    workflow: [
      "Resume + Job Description",
      "Resume Parsing",
      "Job Analysis",
      "Skill Matching",
      "Gap Analysis",
      "Recommendation",
    ],
  },
  {
    slug: "ai-customer-support-agent",
    title: "AI Customer Support Agent",
    description:
      "Built an AI customer-support application using LLMs to understand queries, retrieve relevant information, and generate contextual responses.",
    technologies: ["LangChain", "LangGraph", "Python", "React.js", "Node.js", "Firebase"],
    features: [
      "Query understanding",
      "Information retrieval",
      "Contextual responses",
      "AI-powered customer support",
      "Conversation storage",
      "Agentic workflow",
    ],
    technicalDetails: [
      "Implemented LangGraph workflows for query processing, information retrieval, response generation, and validation.",
      "Developed a React.js interface with Node.js REST APIs and Firebase Firestore for conversation storage.",
    ],
    workflow: [
      "Customer Query",
      "Query Understanding",
      "Information Retrieval",
      "LLM Response",
      "Validation",
      "Customer Response",
    ],
  },
  {
    slug: "ai-ecommerce-recommendation-agent",
    title: "AI E-Commerce Recommendation Agent",
    description:
      "Developed an AI recommendation system that generates personalized product recommendations from user preferences and product data.",
    technologies: ["Python", "LangChain", "LangGraph", "React.js", "Node.js", "GCP"],
    features: [
      "User preference analysis",
      "Intent detection",
      "Product retrieval",
      "Personalized recommendations",
      "Response validation",
      "GCP deployment support",
    ],
    technicalDetails: [
      "Created LangGraph workflows for intent detection, product retrieval, recommendation generation, and response validation.",
      "Built a React.js frontend and Node.js REST API layer with GCP deployment support.",
    ],
    workflow: [
      "User Preferences",
      "Intent Detection",
      "Product Retrieval",
      "AI Recommendation",
      "Response Validation",
      "Personalized Results",
    ],
  },
];
