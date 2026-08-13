import type { Metadata } from "next";
import "./gcc.css";

export const metadata: Metadata = {
  title: "Global Capability Center (GCC) Solutions",
  description:
    "Nexusinn helps enterprises design, launch and scale Global Capability Centers using Build-Operate-Transfer, Hybrid Captive and Joint Venture operating models.",
  alternates: { canonical: "/gcc-solutions" },
  openGraph: {
    title: "Global Capability Center Solutions | Nexusinn",
    description:
      "Design, build, operate and scale GCCs with operating-model, governance, talent and transformation support.",
    url: "/gcc-solutions",
  },
};

export default function GCCLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
