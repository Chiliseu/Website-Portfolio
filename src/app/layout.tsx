import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Your Name | Portfolio",
  description: "Welcome to my portfolio website. I'm a developer passionate about creating amazing digital experiences.",
  keywords: ["portfolio", "developer", "web development", "react", "nextjs"],
  authors: [{ name: "Your Name" }],
  openGraph: {
    title: "Your Name | Portfolio",
    description: "Welcome to my portfolio website",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
