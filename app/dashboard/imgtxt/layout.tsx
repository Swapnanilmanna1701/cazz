import type {Metadata} from 'next';
//import {DM_Mono, Inter} from 'next/font/google';

import './globals.css';

import {Toaster} from '@/components/imgtxt/ui/sonner';



export const metadata: Metadata = {
  title: 'OcrLLM',
  description:
    'Fast, ultra-accurate text extraction from any image or PDF—including challenging ones—with structured markdown output powered by vision models.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={` antialiased font-sans`}>
        {children}
        <Toaster richColors />
      </body>
    </html>
  );
}
