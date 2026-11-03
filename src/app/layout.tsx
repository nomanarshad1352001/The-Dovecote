import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Manrope, Source_Serif_4 } from "next/font/google";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

const sourceSerif = Source_Serif_4({
  subsets: ["latin"],
  variable: "--font-source-serif",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.dovecoteinstitute.org"),
  title: {
    default: "The Dovecote Institute — Research for a better direction",
    template: "%s — The Dovecote Institute",
  },
  description:
    "The Dovecote Institute uses research on life satisfaction to help find and solve the biggest problems in the world.",
  openGraph: {
    title: "The Dovecote Institute",
    description: "Our research points the way to a better direction.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${manrope.variable} ${sourceSerif.variable}`}>
      <body>
        <SiteHeader />
        <main id="main-content">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
