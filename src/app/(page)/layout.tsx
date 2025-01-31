import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Rosé Reverie | L'élégance dans chaque détail",
  description:
    "Découvrez l'univers raffiné de Rosé Reverie, où chaque détail respire l'élégance et la beauté.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#0C1212] text-[#BFADB4]`}
      >
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
