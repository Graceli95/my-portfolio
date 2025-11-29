import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Me - Education, Skills & Experience",
  description: "Learn about Grace Li's journey from business management to software engineering. Discover my technical skills, education, professional experience, and passion for AI-powered solutions.",
  openGraph: {
    title: "About Grace Li - Software Engineer & AI Builder",
    description: "Explore my journey, skills, and experience in full-stack development and AI solutions.",
    url: '/about',
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

