import type { Metadata } from "next";
import { Lexend } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/browser/toaster";

const inter = Lexend({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Srch",
  description: "Enhance Your Searching Experiences",
  
  icons: {
    icon: '/logo.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} overflow-x-hidden flex min-h-screen relative flex-col justify-between bg-black`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
