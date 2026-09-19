import type { Metadata } from "next";
import Header from "@/components/Header";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.mugisha.io"),
  title: "Mugisha Uwiragiye",
  description:
    "Software engineer at Lapse. Backend systems and infrastructure.",
  openGraph: {
    title: "Portfolio",
    description: "Mugisha Uwiragiye - Senior Software Engineer.",
    siteName: "Mugisha Uwiragiye",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "MU | Mugisha Uwiragiye",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Portfolio",
    description: "Mugisha Uwiragiye - Senior Software Engineer.",
    images: [{ url: "/og-image.png", alt: "MU | Mugisha Uwiragiye" }],
  },
  icons: {
    icon: [
      {
        url: "/icons/mu-rounded-64.ico",
        type: "image/x-icon",
        sizes: "any",
      },
      {
        url: "/icons/mu-rounded-64.png",
        type: "image/png",
        sizes: "64x64",
      },
      {
        url: "/icons/mu-rounded.svg",
        type: "image/svg+xml",
      },
    ],
    apple: {
      url: "/apple-touch-icon.png",
      sizes: "180x180",
      type: "image/png",
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased">
        <a href="#main-content" className="skip-link">
          Skip to content
        </a>
        <Header />
        {children}
      </body>
    </html>
  );
}
