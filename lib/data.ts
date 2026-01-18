export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  technologies: string[];
  imageUrl?: string;
  githubUrl?: string;
  liveUrl?: string;
  featured?: boolean;
}

export interface Experience {
  id: string;
  title: string;
  company: string;
  location: string;
  period: string;
  description: string[];
  technologies?: string[];
  logoUrl?: string;
}

export const projects: Project[] = [
  {
    id: "project-1",
    title: "Bluevale Buzz",
    description: "shortDescription",
    longDescription: "longDescription",
    technologies: ["React Native", "JavaScript", "Node.js"],
    imageUrl: "/projects/project1.png",
    githubUrl: "https://github.com/yourusername/project1",
    liveUrl: "https://project-demo.com",
    featured: true,
  },
  {
    id: "project-2",
    title: "CabbageMeet",
    description: "shortDescription",
    longDescription: "longDescription",
    technologies: ["Python", "SQL", "Flask"],
    imageUrl: "/projects/project2.png",
    githubUrl: "https://github.com/yourusername/project2",
    liveUrl: "https://task-app-demo.com",
    featured: true,
  },
  {
    id: "project-3",
    title: "Stellify",
    description: "shortDescription",
    longDescription: "longDescription",
    technologies: ["Swift", "JavaScript"],
    imageUrl: "/projects/project3.png",
    githubUrl: "https://github.com/yourusername/project3",
    liveUrl: "https://weather-dashboard-demo.com",
    featured: true,
  },
  {
    id: "project-4",
    title: "CabbageMeet",
    description: "shortDescription",
    longDescription: "longDescription",
    technologies: ["JavaScript"],
    imageUrl: "/projects/project3.png",
    githubUrl: "https://github.com/yourusername/project3",
    liveUrl: "https://weather-dashboard-demo.com",
    featured: true,
  },
  {
    id: "project-5",
    title: "CropConnect",
    description: "shortDescription",
    longDescription: "longDescription",
    technologies: ["JavaScript"],
    imageUrl: "/projects/project3.png",
    githubUrl: "https://github.com/yourusername/project3",
    liveUrl: "https://weather-dashboard-demo.com",
    featured: true,
  },
  {
    id: "project-6",
    title: "BerryBlitz",
    description: "shortDescription",
    longDescription: "longDescription",
    technologies: ["Python"],
    imageUrl: "/projects/project3.png",
    githubUrl: "https://github.com/yourusername/project3",
    liveUrl: "https://weather-dashboard-demo.com",
    featured: true,
  },
];

export const experiences: Experience[] = [
  {
    id: "exp-1",
    title: "Quality Analyst Intern",
    company: "Mappedin",
    location: "Waterloo, Ontario, Canada",
    period: "Oct 2024 - Dec 2024",
    description: [
      "text",
    ],
    technologies: ["React", "TypeScript", "Node.js", "Redux", "Git"],
  },
  {
    id: "exp-2",
    title: "Coding Instructor",
    company: "Code Ninjas",
    location: "Waterloo, Ontario, Canada",
    period: "Jul 2024 - Aug 2024",
    description: [
      "text",
    ],
    technologies: ["Next.js", "Tailwind CSS", "JavaScript", "Firebase"],
  },
];

export const skills = {
  languages: ["JavaScript", "TypeScript", "Python", "Java", "C++", "C"],
  frontend: ["React", "HTML", "CSS", "Tailwind CSS"],
  backend: ["Node.js", "Flask"],
  tools: ["Git", "GitHub", "VS Code", "Figma"],
};

export const socialLinks = {
  github: "https://github.com/yourusername",
  linkedin: "https://linkedin.com/in/meryamakhundova",
  email: "makhundo@uwaterloo.ca",
};
