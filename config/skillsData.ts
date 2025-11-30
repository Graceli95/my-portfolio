export interface Skill {
  category: string;
  items: string[];
}

export interface Education {
  institution: string;
  degree: string;
  field: string;
  location: string;
  date: string;
  highlights?: string[];
}

export interface Experience {
  company: string;
  title: string;
  location: string;
  date: string;
  responsibilities: string[];
}

export interface Certification {
  name: string;
  issuer: string;
  date: string;
  credentialUrl?: string;
  credentialLabel?: string;
}

export const technicalSkills: Skill[] = [
  {
    category: "Languages & Frameworks",
    items: ["Java", "Spring Boot", "Spring MVC", "JavaScript", "React", "Python", "FastAPI", "Next.js"],
  },
  {
    category: "Databases & APIs",
    items: ["SQL", "MySQL", "MongoDB", "RESTful APIs"],
  },
  {
    category: "AI & Automation",
    items: ["LLM Integration", "Agentic AI", "LangChain", "LangGraph", "RAG", "n8n", "OpenAI", "AWS Bedrock"],
  },
  {
    category: "Tools & Platforms",
    items: ["Git", "GitHub", "IntelliJ IDE", "VS Code", "Cursor IDE", "Microsoft Office 365", "Excel", "Notion"],
  },
];

export const professionalSkills: Skill[] = [
  {
    category: "Professional Skills",
    items: [
      "Customer-Focused Solutions",
      "Team Collaboration",
      "Adaptability",
      "Cross-Cultural Communication",
      "Problem Solving",
    ],
  },
];

export const areasOfExpertise = {
  technical: [
    "Java Full Stack Development",
    "RESTful API Design",
    "SQL Database Management",
    "AI-Powered Application Development",
    "Context Engineering",
    "Workflow Automation",
    "Multi-Agent Architecture",
    "React Development",
    "Spring Framework",
  ],
  professional: [
    "Customer-Focused Solutions",
    "Team Collaboration",
    "Adaptability",
    "Cross-Cultural Communication",
    "Problem Solving",
  ],
};

export const education: Education[] = [
  {
    institution: "Arizona State University",
    degree: "",
    field: "ASU Vibe Coding AI Builder Architect Training Program",
    location: "Online",
    date: "Sep 2025 - Dec 2025",
    highlights: [
      "Advanced AI application development",
      "LLM integration and multi-agent systems",
      "Technologies: Python, FastAPI, Next.js, MongoDB, LangChain, LangGraph, OpenAI, AWS Bedrock, n8n, MCP, Cursor IDE",
      "Context-driven orchestration and workflow automation",
    ],
  },
  {
    institution: "Year Up United",
    degree: "",
    field: "IT Support Training",
    location: "Online",
    date: "Sep 2025 - July 2026",
    highlights: [
      "Intensive career development program",
      "Technical training: Computer Architecture, Device Management, Network Configuration, Desktop Management, Troubleshooting, Technical Documentation",
      "Professional skill development",
      "Corporate internship experience",
    ],
  },
  {
    institution: "Per Scholas",
    degree: "",
    field: "Java Full Stack Development Bootcamp",
    location: "Online",
    date: "Nov 2024 - Mar 2025",
    highlights: [
      "Java, Spring Boot, React, JavaScript",
      "Git, GitHub, JUnit, ORM, SQL, MySQL, RESTful APIs",
      "Real-world projects and team collaboration",
    ],
  },
  {
    institution: "Solely Coding Bootcamp",
    degree: "",
    field: "Web Development",
    location: "Online",
    date: "March 2024",
    highlights: ["JavaScript, HTML, CSS, jQuery, React, Redux, Git"],
  },
  {
    institution: "Henan Normal University",
    degree: "Bachelor's Degree",
    field: "Business Management",
    location: "Xinxiang, China",
    date: "2017",
  },
  {
    institution: "Henan Normal University",
    degree: "Associate's Degree",
    field: "International Economics and Trade",
    location: "Xinxiang, China",
    date: "2016",
  },
];

export const experience: Experience[] = [
  {
    company: "Au Pair in America",
    title: "Au Pair/Chinese Tutor",
    location: "Washington DC",
    date: "Dec 2019 - Dec 2020",
    responsibilities: [
      "Managed complex daily schedules and solved unexpected challenges with efficiency and adaptability",
      "Designed personalized educational plans to support children's growth, development, and Mandarin study",
      "Strengthened communication skills by collaborating with diverse stakeholders across cultural boundaries, ensuring clarity, satisfaction and positive outcomes",
    ],
  },
  {
    company: "Winsun Inflatables",
    title: "Operations Assistant",
    location: "Zhengzhou, China",
    date: "Feb 2019 - Sept 2019",
    responsibilities: [
      "Coordinated scheduling and operational tasks",
      "Negotiated market quotations, increasing sales to Romania",
    ],
  },
  {
    company: "Emilio's Cafe",
    title: "Barista/Cashier/Sushi Maker",
    location: "Darwin, Australia",
    date: "Mar 2018 - Oct 2018",
    responsibilities: [
      "Delivered excellent customer service",
      "Managed inventory and streamlined ordering",
      "Collaborated with team during peak hours",
    ],
  },
];

export const certifications: Certification[] = [
  {
    name: "Certificate in ASU AZNext Vibe Coding AI Builder Architect",
    issuer: "Arizona State University",
    date: "Dec 2025",
    credentialUrl: "#",
    credentialLabel: "Coming Soon",
  },
  {
    name: "Certificate in Agentic AI for Developers",
    issuer: "Pluralsight",
    date: "Nov 2025",
    credentialUrl: "/certifications/Agentic AI for Developers_Certificate.pdf",
  },
  {
    name: "Certificate in Java Full Stack Development",
    issuer: "Per Scholas",
    date: "Mar 2025",
    credentialUrl: "/certifications/per-scholas-java.jpg",
  },
  {
    name: "Certificate in Programming for Everybody",
    issuer: "University of Michigan",
    date: "July 2024",
    credentialUrl: "/certifications/umich-programming.pdf",
  },
  {
    name: "Certificate in AI for Everyone",
    issuer: "DeepLearning.AI",
    date: "June 2024",
    credentialUrl: "/certifications/deeplearning-ai.pdf",
  },
];

export const volunteerExperience = [
  {
    organization: "Year Up United Student Ambassador",
    location: "Phoenix, AZ",
    responsibilities: [
      "Strengthened leadership, communication, and public speaking skills",
      "Fostered collaboration between students, staff, and corporate partners",
      "Supported professional events and guest speaker sessions",
    ],
  },
];

