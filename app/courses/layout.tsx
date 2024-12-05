import type { Viewport } from 'next'
import { ThemeProvider } from '@/components/theme-provider'
import { cn } from '@//lib/utils'
import '@/app/globals.css'


export const viewport: Viewport = {
   colorScheme: 'dark',
   themeColor: [
      { media: '(prefers-color-scheme: light)', color: 'white' },
      { media: '(prefers-color-scheme: dark)', color: 'black' },
   ],
}

export default function RootLayout({
   children,
}: Readonly<{
   children: React.ReactNode
}>) {
   return (
      <html lang="en" suppressHydrationWarning>
         <head>
            <link rel="preconnect" href="https://rsms.me/" />
            <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
         </head>
         <body
            className={cn(
               'mx-auto min-h-screen w-full scroll-smooth bg-background antialiased',
            )}
         >
            <ThemeProvider
               attribute="class"
               defaultTheme="dark"
               enableSystem
            >
               {children}
            </ThemeProvider>
         </body>
      </html>
   )
}