import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getProfile } from "@/lib/content";
import "./globals.css";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

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
    <html
      lang="en"
      className={`${fraunces.variable} ${inter.variable} h-full`}
    >
      <body className="min-h-full flex flex-col bg-ink text-paper antialiased">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer location={profile.location} />
      </body>
    </html>
  );
}
