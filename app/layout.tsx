import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import CustomCursor from "@/components/CustomCursor";
import CursorTrail from "@/components/CursorTrail";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Meryam Akhundova | Software Engineering Student",
  description: "Portfolio of Meryam Akhundova - First Year Software Engineering Student at University of Waterloo",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" style={{ cursor: "none" }}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        style={{ cursor: "none" }}
      >
        <CustomCursor />
        <CursorTrail />
        {children}
      </body>
    </html>
  );
}
