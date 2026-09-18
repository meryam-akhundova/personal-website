export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  technologies: string[];
  imageUrl?: string;
  githubUrl?: string;
  liveUrl?: string;
  liveLabel?: string;
  period?: string;
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
}

export interface Education {
  school: string;
  degree: string;
  location: string;
  period: string;
  awards?: string[];
}

export const projects: Project[] = [
  {
    id: "parla",
    title: "Parla",
    description:
      "A cross-platform language-learning app supporting 5+ languages and regional dialects, with slang, quiz, and translation exercises plus AI-powered persona conversations.",
    longDescription:
      "Building a React Native and TypeScript app with custom prompt engineering via the Anthropic API. Designed Supabase data models and authentication for personalized learning paths, progress tracking, and spaced review of weak or overdue words.",
    technologies: ["TypeScript", "React Native", "Expo", "Supabase", "Anthropic API"],
    githubUrl: "https://github.com/meryam-akhundova/parla",
    liveUrl: "https://joinparla.app/",
    period: "Jun. 2026 – Present",
    featured: true,
  },
  {
    id: "plork",
    title: "Plork",
    description:
      "A full-stack teammate-matching platform for UW engineering students, pairing collaborators by skills, interests, and co-op schedules during a 12-hour hackathon.",
    longDescription:
      "Built in React, Node.js, and Express with a team of 4. REST APIs and a MySQL schema support dynamic matching and real-time listing updates, with compatibility scoring via Jaccard similarity and the Gale-Shapley algorithm.",
    technologies: ["JavaScript", "React", "Node.js", "Express", "MySQL"],
    liveUrl: "https://devpost.com/software/plork",
    liveLabel: "Devpost",
    period: "Mar. 2026",
    featured: true,
  },
  {
    id: "cabbage-meet",
    title: "CabbageMeet",
    description:
      "A full-stack scheduling app that compares calendars and finds overlapping availability across multiple users.",
    longDescription:
      "Built with a 5-person team using Agile and GitLab. Designed the database schema and a schedule comparison algorithm in React, Flask, and SQLite.",
    technologies: ["React", "Python", "Flask", "SQLite"],
    githubUrl: "https://github.com/meryam-akhundova/cabbage-meet",
    liveUrl: "https://cabbage-meet.vercel.app",
    period: "Oct. 2025 – Dec. 2025",
    featured: true,
  },
];

export const experiences: Experience[] = [
  {
    id: "mappedin-tools",
    title: "Tools Developer",
    company: "Mappedin",
    location: "Waterloo, ON",
    period: "May 2026 – Aug. 2026",
    description: [
      "Owned the full development lifecycle of a location update feature using TypeScript across 3 repositories: a content management system plugin, backend sync connector, and supporting API changes, enabling a team of 20+ mappers to update location fields via CSV upload without relying on developer-run scripts",
      "Extended an existing asynchronous data synchronization pipeline built on Azure Blob Storage and Service Bus to support partial updates, matching records by unique identifiers and verifying correctness through 20+ test cases while guarding against data loss with pre-sync snapshots",
      "Collaborated with mappers and team leads to identify recurring inefficiencies in manual workflows, including a data-reconciliation process across over 6,290 folders, and built automation using the Google Sheets and Microsoft Graph APIs to replace it with a dry-run-first tool supporting fuzzy address matching",
    ],
    technologies: ["TypeScript", "Azure", "Service Bus", "Google Sheets API", "Microsoft Graph API"],
  },
  {
    id: "mappedin-qa",
    title: "Quality Analyst Intern",
    company: "Mappedin",
    location: "Waterloo, ON",
    period: "Oct. 2024 – Dec. 2024",
    description: [
      "Performed functional, regression, and black-box testing across web, kiosk, and mobile platforms, documenting defects with detailed reproduction steps and severity ratings to support prioritization",
      "Investigated defects across frontend workflows and platform-specific behavior, collaborating with developers to isolate root causes, validate fixes, and catch regressions before release",
    ],
  },
  {
    id: "code-ninjas",
    title: "Coding Instructor",
    company: "Code Ninjas",
    location: "Waterloo, ON",
    period: "Jun. 2024 – Aug. 2024",
    description: [
      "Taught programming fundamentals and game development in JavaScript and Python to 25+ students during an 8-week program, providing individualized debugging support across loops, conditionals, and functions",
    ],
    technologies: ["JavaScript", "Python"],
  },
];

export const education: Education = {
  school: "University of Waterloo",
  degree: "Bachelor of Software Engineering",
  location: "Waterloo, ON",
  period: "Sep. 2025 – Apr. 2030",
  awards: ["Alumni @ IBM Entrance Scholarship", "President's Scholarship of Distinction"],
};

export const skills = {
  languages: [
    "Python",
    "JavaScript",
    "TypeScript",
    "C++",
    "C",
    "Java",
    "SQL",
    "Swift",
    "HTML/CSS",
    "Verilog",
  ],
  frameworks: ["React", "React Native", "Node.js", "Express", "Flask"],
  cloudAndDatabases: ["AWS", "Microsoft Azure", "Supabase", "MySQL", "SQLite"],
  tools: ["Git", "GitHub", "Linux", "REST APIs", "Jira", "Cursor", "Figma"],
};

export const skillLabels: Record<keyof typeof skills, string> = {
  languages: "languages",
  frameworks: "frameworks",
  cloudAndDatabases: "cloud & databases",
  tools: "developer tools",
};

export const socialLinks = {
  github: "https://github.com/meryam-akhundova",
  linkedin: "https://linkedin.com/in/meryam-akhundova",
  email: "mailto:makhundo@uwaterloo.ca",
};
