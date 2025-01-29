import { ClerkProvider } from "@clerk/nextjs";
//import { dark } from "@clerk/themes";
//import { ThemeProvider } from "@/components/theme-provider";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider as NextThemeProvider } from "next-themes";

import { Metadata } from "next";

const inter = Inter({ subsets: ["latin"] });
export const metadata: Metadata = {
  title: "Cazz",
  description: "Your Smartest Companion",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en" suppressHydrationWarning>
        <body
          className={`${inter.className} bg-black text-white antialiased bg-grid-white/[0.02]`}
        >
          <NextThemeProvider attribute="class" defaultTheme="dark">
            {children}
          </NextThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
