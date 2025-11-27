export interface Event {
  id: string;
  title: string;
  category: "conference" | "hackathon" | "community" | "professional";
  date: string;
  location: string;
  description: string;
  link?: string;
  images?: string[]; // Array of image paths (3-4 images recommended)
}

export const events: Event[] = [
  // Placeholder events - add your actual events here
  {
    id: "placeholder-1",
    title: "Year Up Student Ambassador",
    category: "community",
    date: "Sep 2025 - present",
    location: "Phoenix, AZ",
    description:
      "Representing the Phoenix market as a Student Ambassador, supporting professional events and guest speaker sessions. Developing leadership, communication, and public speaking skills while fostering collaboration between students, staff, and corporate partners.",
    link: "https://www.linkedin.com/posts/grace-li-com_yearup-professionalgrowth-leadership-activity-7384241761512116225-u3AN",
    images: [
      "/images/events/year-up-ambassador-1.jpg",
      "/images/events/year-up-ambassador-2.jpg",
      "/images/events/year-up-ambassador-3.jpg",
      "/images/events/year-up-ambassador-4.jpg",
      "/images/events/year-up-ambassador-5.jpg",
    ],
  },
  {
    id: "commit-your-code-2025",
    title: "Commit Your Code Conference 2025",
    category: "conference",
    date: "Sep 25-26, 2025",
    location: "Dallas, TX",
    description:
      "Attended my first tech conference at commityourcode.com featuring diverse sessions on AI, cloud engineering, Java, JavaScript, .NET, and leadership. Met inspiring speakers including Quincy Larson (freeCodeCamp founder), learned from experts about LLM-powered apps, Spring Boot microservices, and inclusive web experiences. It was inspiring to see experts from so many areas share their knowledge and passion for technology 🌐.",
    link: "https://www.linkedin.com/posts/grace-li-com_commityourcode-softwaredevelopment-networking-activity-7386843231986073600-8pKf",
    images: [
      "/images/events/commit-your-code-1.jpg",
      "/images/events/commit-your-code-2.jpg",
      "/images/events/commit-your-code-3.jpg",
      "/images/events/commit-your-code-4.jpg",
    ],
  },

  {
    id: "opportunity-hack-2025",
    title: "Opportunity Hack 2025 Fall",
    category: "hackathon",
    date: "Oct 11-12, 2025",
    location: "Tempe, AZ",
    description:
      "My first hackathon experience! Built a modern, accessible website for Neurologic Music Therapy Services of Arizona (NMTSA), helping non-technical staff easily manage their digital presence. Contributed to front-end development and documentation while collaborating with an amazing team. Learned valuable lessons in teamwork, user-centered design, and problem-solving under pressure.",
    link: "https://www.linkedin.com/posts/grace-li-com_kickoff-of-opportunity-hack-2025-fall-tempe-activity-7383718819246166016-UTeX",
    images: [
      "/images/events/opportunity-hack-1.jpg",
      "/images/events/opportunity-hack-2.jpg",
      "/images/events/opportunity-hack-3.jpg",
      "/images/events/opportunity-hack-4.jpg",
      "/images/events/opportunity-hack-5.jpg",
    ],
  },
];

export const eventCategories = {
  conference: {
    label: "Conferences & Workshops",
    description: "Tech conferences, specialized training sessions, and industry events",
  },
  hackathon: {
    label: "Hackathons",
    description: "Coding competitions, team projects, and innovation challenges",
  },
  community: {
    label: "Community Involvement",
    description: "Tech meetups, networking events, and community engagement",
  },
  professional: {
    label: "Professional Development",
    description: "Training programs, certification courses, and skill-building workshops",
  },
};

