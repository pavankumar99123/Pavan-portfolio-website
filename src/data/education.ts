export interface EducationItem {
  degree: string;
  institution: string;
  location: string;
  year: string;
  score: string;
}

export const education: EducationItem[] = [
  {
    degree: "Master of Computer Applications",
    institution: "Mohan Babu University",
    location: "Tirupati",
    year: "2025",
    score: "CGPA 8.02",
  },
  {
    degree: "B.Sc. Mathematics, Physics, Computer Science",
    institution: "Sri Harshini Degree College",
    location: "Ongole",
    year: "2023",
    score: "CGPA 6.34",
  },
];
