export interface Event {
  id: string;
  title: string;
  category: "conference" | "hackathon" | "community" | "professional";
  date: string;
  location: string;
  description: string;
  link?: string;
}

export const events: Event[] = [
  // Placeholder events - add your actual events here
  {
    id: "placeholder-1",
    title: "Year Up Student Ambassador Activities",
    category: "community",
    date: "Ongoing",
    location: "Phoenix, AZ",
    description:
      "Active participation in student ambassador program, fostering collaboration between students, staff, and corporate partners. Supporting professional events and guest speaker sessions.",
  },
  // Add more events as you attend conferences, hackathons, etc.
  // Example format:
  // {
  //   id: "tech-conf-2025",
  //   title: "Tech Conference 2025",
  //   category: "conference",
  //   date: "March 2025",
  //   location: "Phoenix, AZ",
  //   description: "Attended sessions on AI and full-stack development",
  //   link: "https://example.com"
  // },
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

