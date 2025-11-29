import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects - Full-Stack & AI Applications",
  description: "Explore Grace Li's portfolio of full-stack web applications and AI-powered solutions built with Java, Spring Boot, React, Python, and LangChain.",
  openGraph: {
    title: "Grace Li's Projects - Full-Stack & AI Development",
    description: "Portfolio showcasing scalable web applications and AI-powered tools.",
    url: '/projects',
  },
};

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

