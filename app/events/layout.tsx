import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Events & Community Engagement",
  description: "Explore conferences, hackathons, and community events Grace Li has participated in. Continuous learning through professional development and tech community involvement.",
  openGraph: {
    title: "Grace Li's Events & Community Engagement",
    description: "Conferences, hackathons, and community involvement in the tech industry.",
    url: '/events',
  },
};

export default function EventsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

