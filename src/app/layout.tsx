import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mugisha Uwiragiye | Portfolio",
  description:
    "Software engineer at Lapse. Backend systems and infrastructure.",
  icons: {
    icon: [
      { url: "/icons/mu-favicon.svg", type: "image/svg+xml" },
      { url: "/icons/mu-favicon-32.png", type: "image/png", sizes: "32x32" },
      { url: "/icons/mu-icon-512.png", type: "image/png", sizes: "512x512" },
    ],
    apple: {
      url: "/icons/mu-apple-touch-icon.png",
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
        {children}
      </body>
    </html>
  );
}
