import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "E-COMEX Platform",
  description: "Enterprise logistics SaaS for global trade intelligence."
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://api.fontshare.com" />
        <link
          rel="stylesheet"
          href="https://api.fontshare.com/v2/css?f[]=general-sans@300,400,500,600,700&display=swap"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
