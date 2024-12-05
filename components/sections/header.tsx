'use client'

import Drawer from 'components/drawer'
import Menu from 'components/menu'
import { cn } from 'lib/utils'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import devsIcon from '~/public/logo.svg'
import ShinyButton from '../ui/shiny-button'
import { siteConfig } from '~/lib/config'

export default function Header() {
   const [addBorder, setAddBorder] = useState(false)

   useEffect(() => {
      const handleScroll = () => {
         if (window.scrollY > 20) {
            setAddBorder(true)
         }
         else {
            setAddBorder(false)
         }
      }

      window.addEventListener('scroll', handleScroll)

      return () => {
         window.removeEventListener('scroll', handleScroll)
      }
   }, [])

   return (
      <header
         className="sticky top-0 z-50 bg-background/60 py-2 backdrop-blur"
      >
         <div className="container flex items-center justify-between">
            <Link
               href="/"
               title="100xdevs"
               className="relative mr-6 flex items-center space-x-2"
            >
               <Image src={devsIcon} alt="100xdevs" width={150} height={90} />
               {/* <span className='text-2xl font-bold'>100xdevs</span> */}
            </Link>

            <div className="hidden lg:block">
               <div className="flex items-center ">
                  <nav className="mr-10">
                     <Menu />
                  </nav>

                  <div className="flex gap-2">
                     <Link href={siteConfig.links.loginLink}>
                        <ShinyButton>Login</ShinyButton>
                     </Link>
                  </div>
               </div>
            </div>
            <div className="mt-2 block cursor-pointer lg:hidden">
               <Drawer />
            </div>
         </div>
         <hr
            className={cn(
               'absolute bottom-0 w-full transition-opacity duration-300 ease-in-out',
               addBorder ? 'opacity-100' : 'opacity-0',
            )}
         />
      </header>
   )
}