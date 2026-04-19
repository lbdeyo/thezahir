import type { Metadata } from "next";
import { siteOgImages, siteTwitterImages } from "@/app/lib/siteOg";

export const metadata: Metadata = {
  title: "Founding Donors Circle | THE ZAHIR",
  description:
    "Join the Founding Donors Circle with a gift of $250 or more and help launch a new home for bold, intelligent storytelling in Austin.",
  openGraph: {
    title: "Founding Donors Circle | THE ZAHIR",
    description:
      "Join the Founding Donors Circle with a gift of $250 or more and help launch a new home for bold, intelligent storytelling in Austin.",
    images: siteOgImages,
  },
  twitter: {
    card: "summary_large_image",
    title: "Founding Donors Circle | THE ZAHIR",
    description:
      "Join the Founding Donors Circle with a gift of $250 or more and help launch a new home for bold, intelligent storytelling in Austin.",
    images: siteTwitterImages,
  },
};

export default function FoundingDonorsCircleLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

