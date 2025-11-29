import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FAQ - Frequently Asked Questions",
  description: "Learn more about Grace Li's journey into software engineering, technical expertise, career transition, and what drives me as a full-stack developer and AI builder.",
  openGraph: {
    title: "FAQ - Get to Know Grace Li",
    description: "Frequently asked questions about my journey, skills, and career in software engineering.",
    url: '/faq',
  },
};

export default function FAQLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

