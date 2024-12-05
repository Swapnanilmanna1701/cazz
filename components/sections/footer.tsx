import { siteConfig } from '@/lib/config'
import Image from 'next/image'
import Link from 'next/link'
import devLogo from '@/public/logo.svg'

export default function Footer() {
   return (
      <footer>
         <div className="mx-auto max-w-6xl px-5 py-16 pb-0 sm:px-10">
            <Link
               href="/"
               title={siteConfig.name}
               className="relative mr-6 flex items-center space-x-2"
            >
               <Image src={devLogo} alt={siteConfig.name} width={150} height={40} />
               {/* <span className="text-xl font-bold">{siteConfig.name}</span> */}
            </Link>

            <div className="flex py-4 text-justify">
               100xdevs is an initiative by Harkirat Singh to personally mentor folks in the field of Programming. We believe that today you are either a 1x engineer or a 100x engineer and nothing in the middleware.
            </div>

            <div className="mx-auto grid size-full max-w-6xl grid-cols-1 justify-between gap-1 border-t py-6 md:grid-cols-2">
               <span className="text-sm tracking-tight text-foreground">
                  Copyright ©
                  {' '}
                  {new Date().getFullYear()}
                  {' '}
                  <Link href="/" className="cursor-pointer">
                     {siteConfig.name}
                  </Link>
                  {' - '}
                  Made with ❤️ by <Link href="https://twitter.com/bhataasim9" className="cursor-pointer">Bhat Aasim</Link>
               </span>
               <div className='flex items-center justify-end gap-6'>
                  {siteConfig.footer.map((link) => (
                     <Link
                        key={link.name}
                        href={link.url}
                        className="flex items-center gap-2 text-muted-foreground duration-200 hover:text-foreground hover:opacity-90"
                     >
                        <link.icon />
                        {link.name}
                     </Link>
                  ))}
               </div>
            </div>
         </div>
      </footer>
   )
}