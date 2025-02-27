import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Toaster } from "@/components/convertor/ui/toaster";
//import NavBar from '../components/navbar'
import { ThemeProvider } from "@/components/convertor/theme-provider"
//import {ModeToggle} from "@/components/mode-toggle"

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'FileFleX: Convert any file with ease!',
  description: `Users can come in this application and convert any file 
  into their desired file format.`,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
        
        <Toaster/>
        <div className="pt-32 min-h-screen lg:pt-36 2xl:pt-44 container max-w-4xl lg:max-w-6xl 2xl:max-w-7xl
        mx-auto ">
          {children}
          </div>
          </ThemeProvider>
      </body>
    </html>
  )
}
