import "./globals.css";
import type { Metadata } from "next";
import localFont from "next/font/local";

const generalSans = localFont({
  src: [
    {
      path: "../public/fonts/general-sans/GeneralSans-Variable.woff2",
      style: "normal"
    },
    {
      path: "../public/fonts/general-sans/GeneralSans-VariableItalic.woff2",
      style: "italic"
    }
  ],
  display: "swap",
  variable: "--font-sans"
});

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
      <body className={generalSans.className}>{children}</body>
    </html>
  );
}
