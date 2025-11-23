import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Grace Li | Software Engineer & AI Builder",
  description: "Software Engineer building scalable web applications with Java, Spring Boot, React, and AI-powered tools.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}

