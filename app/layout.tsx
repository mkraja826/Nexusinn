import type { Metadata } from "next";
import "./globals.css";
import "./corporate.css";
import "./navigation.css";
import SiteHeader from "../components/SiteHeader";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;

export const metadata: Metadata = {
  metadataBase: siteUrl ? new URL(siteUrl) : undefined,
  title: {
    default: "Nexusinn | GCC, AI & Insurance Technology Consulting",
    template: "%s | Nexusinn",
  },
  description:
    "Nexusinn helps enterprises build Global Capability Centers, deploy production-grade AI and machine learning, and modernize insurance technology with governance and compliance in mind.",
  keywords: [
    "Global Capability Center consulting",
    "GCC setup",
    "Build Operate Transfer GCC",
    "AI consulting",
    "machine learning engineering",
    "generative AI integration",
    "insurance technology consulting",
    "claims automation",
    "underwriting AI",
    "InsurTech modernization",
  ],
  applicationName: "Nexusinn",
  authors: [{ name: "Nexusinn" }],
  creator: "Nexusinn",
  publisher: "Nexusinn",
  category: "technology consulting",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    siteName: "Nexusinn",
    title: "Nexusinn | GCC, AI & Insurance Technology Consulting",
    description:
      "Enterprise consulting across Global Capability Centers, AI & ML, and insurance technology transformation.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nexusinn | GCC, AI & Insurance Technology Consulting",
    description:
      "Enterprise consulting across Global Capability Centers, AI & ML, and insurance technology transformation.",
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Nexusinn",
  ...(siteUrl ? { url: siteUrl } : {}),
  description:
    "Technology consulting company focused on Global Capability Centers, AI and machine learning, and insurance technology transformation.",
  knowsAbout: [
    "Global Capability Centers",
    "Artificial Intelligence",
    "Machine Learning",
    "Generative AI",
    "Insurance Technology",
    "Claims Automation",
    "Underwriting Technology",
  ],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <SiteHeader />
        {children}
      </body>
    </html>
  );
}
