import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mugisha Uwiragiye",
  description:
    "Software engineer at Lapse. Backend systems and infrastructure.",
  icons: {
    icon: [
      {
        url: "/favicon.ico?v=4",
        type: "image/x-icon",
        sizes: "16x16 32x32 48x48",
      },
      {
        url: "/icons/mu-rounded-32.png",
        type: "image/png",
        sizes: "32x32",
      },
      {
        url: "/icons/mu-rounded.svg",
        type: "image/svg+xml",
        sizes: "any",
      },
    ],
    shortcut: "/favicon.ico?v=4",
    apple: {
      url: "/icons/mu-rounded-apple-touch.png",
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
