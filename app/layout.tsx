import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "./components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "| THE ZAHIR |",
  description: "A dramatic arts company",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "| THE ZAHIR |",
    description: "A dramatic arts company",
    images: [
      { url: "/img/crazy-apprehension.jpg" },
      { url: "/img/zahir-logo.svg" },
    ],
  },
  other: {
    "typekit-link": "https://use.typekit.net/zgf1kpm.css",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://use.typekit.net/zgf1kpm.css" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <Footer />
      </body>
    </html>
  );
}
