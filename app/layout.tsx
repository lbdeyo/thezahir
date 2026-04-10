import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Footer from "./components/Footer";
import HubSpotTracker from "./components/HubSpotTracker";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "https://www.the-zahir.org"
  ),
  title: "| THE ZAHIR |",
  description: "A dramatic arts company",
  openGraph: {
    title: "| THE ZAHIR |",
    description: "A dramatic arts company",
    images: [{ url: "/img/og/zahir-og.jpg" }],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/img/og/zahir-og.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="min-h-full bg-[#0a0a0a]">
      <head>
        <link rel="stylesheet" href="https://use.typekit.net/zgf1kpm.css" />
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-BL44TBHWS7"
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-BL44TBHWS7');
          `}
        </Script>
        {/* HubSpot Embed Code */}
        <Script
          id="hs-script-loader"
          src="//js-na2.hs-scripts.com/244639378.js"
          strategy="afterInteractive"
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-full bg-[#0a0a0a]`}
      >
        <HubSpotTracker />
        {children}
        <Footer />
      </body>
    </html>
  );
}
