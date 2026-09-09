export interface ExperienceItem {
  role: string;
  location: string;
  duration: string;
  responsibilities: string[];
}

export const experience: ExperienceItem[] = [
  {
    role: "Python Developer Intern",
    location: "Tirupati, India",
    duration: "Jan 2025 – Mar 2025",
    responsibilities: [
      "Developed and refined Python scripts using functions, loops, conditionals, and data structures to automate tasks and solve programming problems.",
      "Debugged and optimized existing code, identifying logical errors and improving application reliability.",
      "Collaborated with senior developers during code reviews and followed clean, maintainable coding practices.",
      "Documented solutions and test cases to improve project traceability and maintainability.",
    ],
  },
];
