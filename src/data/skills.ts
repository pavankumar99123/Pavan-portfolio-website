export interface SkillCategory {
  title: string;
  description: string;
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    title: "AI & Agentic Development",
    description: "Designing reasoning workflows and agents on top of LLMs.",
    skills: [
      "LangChain",
      "LangGraph",
      "AI Agents",
      "Agentic Workflows",
      "Large Language Models (LLMs)",
      "Generative AI",
      "Prompt Engineering",
    ],
  },
  {
    title: "Full-Stack Development",
    description: "Building interfaces and services end to end.",
    skills: [
      "React.js",
      "Node.js",
      "Express.js",
      "Python",
      "JavaScript",
      "TypeScript",
      "HTML5",
      "CSS3",
    ],
  },
  {
    title: "Backend & APIs",
    description: "Designing and integrating reliable service layers.",
    skills: [
      "REST APIs",
      "API Integration",
      "Backend Development",
      "CRUD Operations",
      "JSON",
      "Authentication",
    ],
  },
  {
    title: "Databases",
    description: "Structuring and managing application data.",
    skills: [
      "Firebase",
      "Firestore",
      "SQL",
      "NoSQL",
      "Database Design",
      "Database Management",
    ],
  },
  {
    title: "Cloud",
    description: "Deploying and running applications in the cloud.",
    skills: [
      "Google Cloud Platform (GCP)",
      "Firebase",
      "Cloud Services",
      "Cloud Deployment",
    ],
  },
  {
    title: "Developer Tools",
    description: "The everyday toolkit for building and shipping code.",
    skills: ["Git", "GitHub", "Docker", "VS Code", "Testing", "Debugging", "Code Review"],
  },
  {
    title: "Engineering Practices",
    description: "How the work gets planned and delivered.",
    skills: [
      "Full-Stack Application Development",
      "Agile Development",
      "Sprint Planning",
      "Software Development Lifecycle",
      "Problem Solving",
    ],
  },
];
