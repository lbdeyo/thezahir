import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Founding Donors Circle | THE ZAHIR",
  description:
    "Join the Founding Donors Circle with a gift of $250 or more and help launch a new home for bold, intelligent storytelling in Austin.",
  openGraph: {
    title: "Founding Donors Circle | THE ZAHIR",
    description:
      "Join the Founding Donors Circle with a gift of $250 or more and help launch a new home for bold, intelligent storytelling in Austin.",
    images: [
      {
        url: "/img/og/founding-donors-og.jpg",
        width: 3224,
        height: 1908,
        alt: "Founding Donors Circle | THE ZAHIR",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Founding Donors Circle | THE ZAHIR",
    description:
      "Join the Founding Donors Circle with a gift of $250 or more and help launch a new home for bold, intelligent storytelling in Austin.",
    images: ["/img/og/founding-donors-og.jpg"],
  },
};

export default function FoundingDonorsCircleLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

