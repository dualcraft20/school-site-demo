import type { Metadata } from "next";
import { Anton, Inter, Caveat, Playfair_Display } from "next/font/google";
import { siteContent } from "@/data/content";
import "./globals.css";

const anton = Anton({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["400"],
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
});

const caveat = Caveat({
  subsets: ["latin"],
  variable: "--font-handwriting",
  weight: ["400", "600", "700"],
  display: "swap",
});

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  weight: ["400", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: `${siteContent.school.name} — ${siteContent.school.location} Independent School (Pre-K – 12)`,
  description: `${siteContent.school.tagline}. A premier independent day school in ${siteContent.school.location} nurturing fearless curiosity, creative conviction, and enduring character.`,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${anton.variable} ${inter.variable} ${caveat.variable} ${playfairDisplay.variable}`}
    >
      <body className="bg-black text-white antialiased selection:bg-crimson selection:text-white">
        {children}
      </body>
    </html>
  );
}
