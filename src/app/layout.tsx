import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mugisha Uwiragiye | Portfolio",
  description: "Software Engineer & Designer",
  icons: {
    icon: "/icons/favicon-192x192.png",
    apple: "/icons/apple-icon-180x180.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
