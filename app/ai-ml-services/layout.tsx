import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI & Machine Learning Services",
  description:
    "Nexusinn helps enterprises move AI from experimentation to production through AI strategy, readiness assessment, ML engineering, intelligent automation, generative AI integration and responsible AI governance.",
  alternates: { canonical: "/ai-ml-services" },
  openGraph: {
    title: "AI & Machine Learning Services | Nexusinn",
    description:
      "Enterprise AI strategy, engineering, automation, GenAI integration and governance designed for production scale.",
    url: "/ai-ml-services",
  },
};

export default function AIMLLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
