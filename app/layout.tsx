import type { Metadata } from "next";
import localFont from "next/font/local";
import { Gabarito, Inter, Ubuntu_Mono } from "next/font/google";
import "./globals.css";

const arigato = localFont({
  src: "./fonts/arigato.ttf",
  variable: "--font-arigato",
  display: "swap",
});

const gabarito = Gabarito({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-gabarito",
});

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const ubuntu = Ubuntu_Mono({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-ubuntu",
});

export const metadata: Metadata = {
  title: "Divy Prakash Pandey",
  description: "Empowering creative brands and studios with story-driven, results-oriented websites that deliver a competitive edge. Working Globally.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${arigato.variable} ${gabarito.variable} ${inter.variable} ${ubuntu.variable} antialiased`}>{children}</body>
    </html>
  );
}
