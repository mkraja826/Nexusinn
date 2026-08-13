import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Nexusinn",
  description:
    "Learn how Nexusinn connects Global Capability Center strategy, AI and machine learning engineering, and insurance technology transformation.",
  alternates: { canonical: "/about" },
};

export default function AboutLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
