import type { Metadata } from "next";
import "./globals.css";
import "./corporate.css";

export const metadata: Metadata = {
  title: "Nexusinn | GCC, AI & Insurance Technology Consulting",
  description:
    "Nexusinn helps enterprises build global capability centers, deploy AI and machine learning solutions, and modernize insurance technology.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
