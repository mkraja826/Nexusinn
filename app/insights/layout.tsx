import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Insights | GCC, AI & Insurance Technology",
  description:
    "Nexusinn insights on Global Capability Centers, enterprise AI, machine learning, insurance technology, governance and transformation.",
  alternates: { canonical: "/insights" },
};

export default function InsightsLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
