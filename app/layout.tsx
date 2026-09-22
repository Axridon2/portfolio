import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getProfile } from "@/lib/content";
import "./globals.css";

export const metadata: Metadata = {
  title: "Adnane Serroukh — IT & Cyber Security",
  description: "IT & cyber security — systems that stay quiet.",
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
