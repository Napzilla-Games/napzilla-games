import type { Metadata } from "next";
import { IM_Fell_Great_Primer } from "next/font/google";
import "./globals.css";

const imFellGreatPrimer = IM_Fell_Great_Primer({
  weight: "400",
  subsets: ["latin"],
  style: ["normal", "italic"],
  variable: "--font-fell",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Landor's Cottage | Napzilla Games",
  description:
    "An atmospheric exploration inspired by Edgar Allan Poe and the Hudson River School.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${imFellGreatPrimer.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-fell bg-landor-warm text-landor-primary selection:bg-landor-light/30 selection:text-landor-primary">
        {children}
      </body>
    </html>
  );
}
