import type { Metadata } from "next";
import "./globals.css";
import "./corporate.css";
import "./navigation.css";
import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Nexusinn | GCC, AI & Insurance Technology Consulting",
    template: "%s | Nexusinn",
  },
  description:
    "Nexusinn helps enterprises build Global Capability Centers, deploy enterprise AI and machine learning solutions, and modernize insurance technology.",
  keywords: [
    "Global Capability Center consulting",
    "GCC setup",
    "Build Operate Transfer",
    "enterprise AI consulting",
    "machine learning engineering",
    "generative AI integration",
    "insurance technology consulting",
    "claims automation",
    "underwriting AI",
    "InsurTech",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: "Nexusinn",
    title: "Nexusinn | GCC, AI & Insurance Technology Consulting",
    description:
      "Global Capability Centers, enterprise AI and insurance technology transformation connected by one execution model.",
    url: "/",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nexusinn | GCC, AI & Insurance Technology Consulting",
    description:
      "Global Capability Centers, enterprise AI and insurance technology transformation.",
  },
  robots: { index: true, follow: true },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Nexusinn",
  url: siteUrl,
  description:
    "Technology consulting focused on Global Capability Centers, enterprise AI and machine learning, and insurance technology transformation.",
  knowsAbout: [
    "Global Capability Centers",
    "Build-Operate-Transfer",
    "Artificial Intelligence",
    "Machine Learning",
    "Generative AI",
    "Insurance Technology",
    "Claims Automation",
    "Underwriting AI",
  ],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <SiteHeader />
        <div id="main-content" tabIndex={-1}>{children}</div>
        <SiteFooter />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema).replace(/</g, "\\u003c") }}
        />
      </body>
    </html>
  );
}
