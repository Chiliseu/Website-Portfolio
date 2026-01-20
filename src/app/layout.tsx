import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Yuan Exequiel R. Evangelista | Multimedia Portfolio",
  description: "Award-winning multimedia artist, video editor, and film director. Experienced in short films, visual effects, and creative production.",
  keywords: ["portfolio", "video editor", "film director", "multimedia", "visual effects", "short films"],
  authors: [{ name: "Yuan Exequiel R. Evangelista" }],
  openGraph: {
    title: "Yuan Exequiel R. Evangelista | Multimedia Portfolio",
    description: "Award-winning multimedia artist and video editor",
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
