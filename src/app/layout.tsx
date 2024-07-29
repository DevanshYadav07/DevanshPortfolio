import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/navbar";
import Favicon from '@/app/favicon.ico'
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Devansh Portfolio",
  description: "Personal Portfolio to describe ",
  icons:
  {
    icon:Favicon.src
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head >
        <link rel="icon" href={Favicon.src} />
      </head>
      <body className={inter.className}>
        <Navbar />
        {children}
        </body>
    </html>
  );
}
