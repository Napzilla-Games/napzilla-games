import type { Metadata } from "next";
import {
  IM_Fell_Great_Primer,
  Cormorant_Garamond,
  Allura,
} from "next/font/google";
import "./globals.css";

const fell = IM_Fell_Great_Primer({
  variable: "--font-main",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  variable: "--font-secondary",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const allura = Allura({
  variable: "--font-cursive",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Landor's Cottage",
  description: "A story of the valley, the cottage, and the journey within.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${fell.variable} ${cormorant.variable} ${allura.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
