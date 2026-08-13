import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Insurance Technology Solutions",
  description:
    "Nexusinn modernizes insurance operations through claims automation, underwriting AI, InsurTech platforms and compliance-focused regulatory technology.",
  alternates: { canonical: "/insurance-solutions" },
  openGraph: {
    title: "Insurance Technology Solutions | Nexusinn",
    description:
      "Claims, underwriting, platform modernization and compliance technology for regulated insurance operations.",
    url: "/insurance-solutions",
  },
};

export default function InsuranceLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
