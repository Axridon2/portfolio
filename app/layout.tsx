import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getProfile } from "@/lib/content";
import "./globals.css";

const SITE_URL = "http://localhost:3100";
const SITE_TITLE = "Adnane Serroukh — IT & Cyber Security";
const SITE_DESCRIPTION = "IT & cyber security — systems that stay quiet.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE_TITLE,
    template: "%s",
  },
  description: SITE_DESCRIPTION,
  openGraph: {
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    url: SITE_URL,
    siteName: "Adnane Serroukh",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const profile = getProfile();

  return (
    <html lang="en" className="h-full">
      <body className="min-h-full flex flex-col bg-bg text-fg antialiased font-body">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer location={profile.location} />
      </body>
    </html>
  );
}
