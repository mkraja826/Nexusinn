import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Careers at Nexusinn",
  description:
    "Explore career opportunities with Nexusinn across Global Capability Centers, AI and machine learning, insurance technology and enterprise transformation.",
  alternates: { canonical: "/careers" },
};

export default function CareersLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
