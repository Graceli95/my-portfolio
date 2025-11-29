import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact - Let's Connect",
  description: "Get in touch with Grace Li. Whether you're looking for a full-stack developer, AI solutions builder, or just want to connect, feel free to reach out!",
  openGraph: {
    title: "Contact Grace Li - Software Engineer",
    description: "Let's collaborate on your next project. Open to new opportunities and creative ideas.",
    url: '/contact',
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

