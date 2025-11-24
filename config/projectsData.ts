export interface Project {
  id: string;
  title: string;
  description: string;
  fullDescription: string[];
  technologies: string[];
  image: string;
  github?: string;
  demo?: string;
  featured: boolean;
}

export const projects: Project[] = [
  {
    id: "jobportal",
    title: "AI-Powered JobPortal Platform",
    description: "ASU Vibe Coding Greenfield Team Project with AI-based candidate/job matching",
    fullDescription: [
      "ASU Vibe Coding Greenfield Team Project",
      "Full-stack job portal with job search, employer dashboards, and AI-based candidate/job matching",
      "Developed Employer Dashboard UI and features using Next.js, TypeScript, and Tailwind CSS",
      "Integrated LangChain and ChromaDB for AI-driven candidate recommendations",
      "Seamless backend communication with FastAPI",
    ],
    technologies: ["Python", "FastAPI", "Next.js", "TypeScript", "MongoDB", "LangChain", "ChromaDB", "Tailwind CSS"],
    image: "/images/projects/jobportal.png",
    github: "https://github.com/AZVibe-Team1/Greenfield-project",
    featured: true,
  },
  {
    id: "vitality-hub",
    title: "Vitality Hub - Fitness Tracking",
    description: "Full-stack fitness app with workout tracking and progress analytics",
    fullDescription: [
      "Built scalable full-stack fitness app with Spring Boot and MySQL",
      "Users can log, update, and track workouts",
      "Personalized fitness goal management and progress tracking",
      "Real-time workout data analytics with React Charts",
      "Responsive, intuitive UI for seamless fitness-tracking experience across devices",
    ],
    technologies: ["Java", "Spring Boot", "React", "Vite", "MySQL", "RESTful APIs", "React Router", "React Charts"],
    image: "/images/projects/vitality-hub.png",
    github: "https://github.com/Graceli95/ExerciseTrackerServer",
    demo: "https://drive.google.com/file/d/1ZBChajp7u8orKeLjo9P_Vpg5t6_BMF0x/view",
    featured: true,
  },
  {
    id: "ecommerce",
    title: "Eyeglass E-commerce Website",
    description: "E-commerce platform with shopping cart and Redux state management",
    fullDescription: [
      "E-commerce platform with product listings and shopping cart",
      "Add/remove cart functionality with automatic price calculation",
      "Redux state management for improved scalability",
      "Responsive UI with Material UI",
      "Smooth navigation and consistent styling",
    ],
    technologies: ["React", "Redux", "Material UI", "JavaScript"],
    image: "/images/projects/ecommerce.png",
    github: "https://github.com/Graceli95/E-commerce-website",
    demo: "https://graceli95.github.io/e-commerce/",
    featured: true,
  },
  {
    id: "covilla",
    title: "Covilla - Travel Agency Website",
    description: "Interactive travel platform for exploring destinations",
    fullDescription: [
      "Interactive travel platform for exploring destinations",
      "Compare options and plan itineraries",
      "Intuitive navigation with smooth CSS/JavaScript animations",
      "Polished, engaging user experience",
    ],
    technologies: ["JavaScript", "HTML", "CSS"],
    image: "/images/projects/covilla.png",
    github: "https://github.com/Graceli95/travel-agency",
    demo: "https://graceli95.github.io/travel-agency",
    featured: true,
  },
];

