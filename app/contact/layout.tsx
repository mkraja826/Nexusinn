import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Nexusinn",
  description:
    "Talk to Nexusinn about Global Capability Center setup, enterprise AI and machine learning, or insurance technology transformation.",
  alternates: { canonical: "/contact" },
};

export default function ContactLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
