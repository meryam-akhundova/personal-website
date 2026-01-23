export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  technologies: string[];
  images?: string[]; // Array of image paths, first one is used for preview
  imageUrl?: string; // Deprecated: kept for backward compatibility, use images[0] instead
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
    description: "Designed to centralize school news and resources for students at Bluevale CI",
    longDescription: `Bluevale Buzz is a mobile app designed to centralize school news, events, and resources for students at Bluevale Collegiate Institute. Following the schoolwide social media ban, the app aims to provide a familiar and distraction-free format, creating an efficient platform for accessing important school information.
    The homepage allows students to quickly view announcements and upcoming club or sports meetings at a glance, helping them stay connected and informed. Users can personalize their experience by entering their class schedules and extracurricular activities, which the app then uses to deliver tailored reminders.
    Bluevale Buzz also features an interactive map powered by Mappedin's indoor mapping software, enabling students to easily locate their classrooms and find the fastest route based on their current location.`,
    technologies: ["React Native", "JavaScript", "Expo"],
    images: [
      "/projects/project-1/image1.png",
      "/projects/project-1/image2.png",
      "/projects/project-1/image3.png",
      "/projects/project-1/image4.png",
      "/projects/project-1/image5.png",
      "/projects/project-1/image6.png",
    ],
    githubUrl: "https://github.com/yourusername/project1",
    liveUrl: "https://project-demo.com",
    featured: true,
  },
  {
    id: "project-2",
    title: "CabbageMeet",
    description: "Web app that quickly finds common free time between UWaterloo schedules",
    longDescription: "CabbageMeet is a web application that allows University of Waterloo students to upload multiple schedules and quickly find common free time between them. The application parses Quest data, instantly converting it to a visually appealing calendar that users can also add their non-academic events to. Once more than one calendar is imported, users can specify their preferred days and time of day to meet up, which the application then uses to generate common time.",
    technologies: ["Python", "SQL", "Flask"],
    images: [
    ],
    githubUrl: "https://github.com/yourusername/project2",
    liveUrl: "https://drive.google.com/file/d/10n9WgGjYo6LL6i7PoOPROSVUty92hm4U/view?usp=sharing",
    featured: true,
  },
  {
    id: "project-3",
    title: "Stellify",
    description: "iOS app that creates widgets that display NASA's Astronomy Picture of the Day",
    longDescription: "Stellify is the ultimate mobile app for space enthusiasts, bringing stunning astronomy images and insights right to your device. Powered by NASA’s Astronomy Picture of the Day API, Stellify offers a widget that showcases a new celestial image daily. Within the app, users can explore a timeline of APOD images from previous years, complete with detailed descriptions that explain the science and significance behind each photo.",
    technologies: ["Swift", "JavaScript"],
    images: [
      "/projects/project-3/image1.png",
      "/projects/project-3/image2.png",
      "/projects/project-3/image3.png",
      "/projects/project-3/image4.png",
    ],
    githubUrl: "https://github.com/yourusername/project3",
    liveUrl: "https://weather-dashboard-demo.com",
    featured: true,
  },
  {
    id: "project-4",
    title: "TeddyTrail",
    description: "Designed to help pedestrian users find the safest routes",
    longDescription: "TeddyTrail is an app designed at TechNova 2024 to help users find the safest routes based on real-time crime data, environmental conditions, and local news. It features a community discussion forum that allows users to share experiences, safety tips, and alerts. Additionally, it employs text analysis to extract relevant information from news articles, helping users stay updated on potential safety concerns. Another main goal of the app is to promote sustainability by encouraging eco-friendly safe routes for pedestrians, motivating users to consider walking or using public transportation rather than relying on cars.",
    technologies: ["JavaScript", "Expo"],
    images: [
      "/projects/project-4/image1.png",
      "/projects/project-4/image2.png",
      "/projects/project-4/image3.png",
      "/projects/project-4/image4.png",
      "/projects/project-4/image5.png",
      "/projects/project-4/image6.png",
      "/projects/project-4/image7.png",
    ],
    githubUrl: "https://github.com/yourusername/project3",
    liveUrl: "https://devpost.com/software/safe-haven-8nwue0?_gl=1*88bpi3*_gcl_au*NjEzOTA3MDQxLjE3NjQ0NjYzMTg.*_ga*NjM0NTI2NTkuMTc2NDQ2NjMxOA..*_ga_0YHJK3Y10M*czE3NjkxNzUzMDYkbzgkZzEkdDE3NjkxNzUzMDkkajU3JGwwJGgw",
    featured: true,
  },
  {
    id: "project-5",
    title: "Fitspo",
    description: "Digital wardrobe and outfit-planning application",
    longDescription: "Fitspo is a digital wardrobe and outfit-planning application designed to simplify everyday styling decisions. The platform allows users to upload and organize their clothing items such as tops, bottoms, and shoes along with key details including colour and season, all within a centralized virtual closet. Using an interactive interface, users can mix and match pieces to create and save outfits. Fitspo also features instant outfit generation, which uses current weather conditions and temperature to generate colour-coordinated, weather-appropriate outfit suggestions.",
    technologies: ["Java", "Swing"],
    images: [
      "/projects/project-5/image1.png",
      "/projects/project-5/image2.png",
      "/projects/project-5/image3.png",
      "/projects/project-5/image4.png",
      "/projects/project-5/image5.png",
      "/projects/project-5/image6.png",
    ],
    githubUrl: "https://github.com/meryam-akhundova/fitspo",
    liveUrl: "https://weather-dashboard-demo.com",
    featured: true,
  },
  {
    id: "project-6",
    title: "BerryBlitz",
    description: "Text-based board game based on Strawberry Shortcake",
    longDescription: "Berry Blitz is a text-based Python board game set in the vibrant world of Strawberry Land, built using object-oriented programming (OOP) principles. Players take turns rolling the die to move across a dynamic game board filled with unique rewards, surprises, and interactive story events. Each space presents a scenario where players can make choices that either earn or deduct Berry Bucks. The game offers both PvP (Player vs. Player) and PvC (Player vs. Computer) modes, with six distinct character options, each implemented as a class with unique attributes and behaviours.",
    technologies: ["Python", "OOP"],
    images: [
      "/projects/project-6/image1.png",
      "/projects/project-6/image2.png",
      "/projects/project-6/image3.png",
    ],
    githubUrl: "https://github.com/meryam-akhundova/berry-blitz",
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
      "",
    ],
  },
  {
    id: "exp-2",
    title: "Coding Instructor",
    company: "Code Ninjas",
    location: "Waterloo, Ontario, Canada",
    period: "Jul 2024 - Aug 2024",
    description: [
      "",
    ],
  },
];

export const skills = {
  languages: ["JavaScript", "TypeScript", "Python", "Java", "C++", "C", "SQL"],
  frontend: ["React", "HTML", "CSS", "Swing"],
  backend: ["Node.js", "Flask"],
  tools: ["Git", "GitHub", "Gitlab", "VS Code", "Figma", "Linux", "Expo", "Xcode", "pytest"],
};

export const socialLinks = {
  github: "https://github.com/yourusername",
  linkedin: "https://www.linkedin.com/in/meryam-akhundova/",
  email: "makhundo@uwaterloo.ca",
};
