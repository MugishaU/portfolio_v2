import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mugisha Uwiragiye | Portfolio",
  description: "Software Engineer & Designer",
  icons: {
    icon: "/icons/favicon.png",
    apple: "/icons/favicon.png",
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
