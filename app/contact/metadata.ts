import type { Metadata } from "next";
import { siteOgImages, siteTwitterImages } from "@/app/lib/siteOg";

export const metadata: Metadata = {
  title: "Contact | THE ZAHIR",
  description:
    "Reach The Zahir with questions, ideas, or invitations, and add yourself to the mailing list to hear about new work and events.",
  openGraph: {
    title: "Contact | THE ZAHIR",
    description:
      "Reach The Zahir with questions, ideas, or invitations, and add yourself to the mailing list to hear about new work and events.",
    images: siteOgImages,
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact | THE ZAHIR",
    description:
      "Reach The Zahir with questions, ideas, or invitations, and add yourself to the mailing list to hear about new work and events.",
    images: siteTwitterImages,
  },
};


