import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

const sans = Outfit({
  subsets: ["latin"],
  // this will be the css variable
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Frontend Mentor | QR code component",
  description: "QR code Component challenge from Frontend Mentor",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
