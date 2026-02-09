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
      <body className="antialiased">
        <script
          dangerouslySetInnerHTML={{
            __html: `if(sessionStorage.getItem('home-visited')){document.documentElement.classList.add('home-visited')}`,
          }}
        />
        {children}
      </body>
    </html>
  );
}
