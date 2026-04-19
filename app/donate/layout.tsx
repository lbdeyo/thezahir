import type { Metadata } from "next";
import { siteOgImages, siteTwitterImages } from "@/app/lib/siteOg";

export const metadata: Metadata = {
  title: "Donate | THE ZAHIR",
  description:
    "Help us create meaningful theater and storytelling. The Zahir is a Texas not-for-profit; donations may be retroactively tax-deductible once 501(c)(3) status is approved.",
  openGraph: {
    title: "Donate | THE ZAHIR",
    description:
      "Help us create meaningful theater and storytelling. The Zahir is a Texas not-for-profit; donations may be retroactively tax-deductible once 501(c)(3) status is approved.",
    images: siteOgImages,
  },
  twitter: {
    card: "summary_large_image",
    title: "Donate | THE ZAHIR",
    description:
      "Help us create meaningful theater and storytelling. The Zahir is a Texas not-for-profit; donations may be retroactively tax-deductible once 501(c)(3) status is approved.",
    images: siteTwitterImages,
  },
};

export default function DonateLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

