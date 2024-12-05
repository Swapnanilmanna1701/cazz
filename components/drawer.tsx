import { buttonVariants } from '@/components/ui/button1'
import {
   Drawer,
   DrawerContent,
   DrawerFooter,
   DrawerHeader,
   DrawerTrigger,
} from '@/components/ui/drawer'
import { siteConfig } from '@/lib/config'
import Image from 'next/image'
import Link from 'next/link'
import { MenuIcon } from 'lucide-react'
import devsIcon from '@/public/logo.svg'

export default function drawerDemo() {
   return (
      <Drawer>
         <DrawerTrigger>
            <MenuIcon className="text-2xl" />
         </DrawerTrigger>
         <DrawerContent>
            <DrawerHeader className="px-6">
               <div className="">
                  <Link
                     href="/"
                     title="100xdevs"
                     className="relative mr-6 flex items-center space-x-2"
                  >
                     <Image src={devsIcon} alt="100xdevs" height={40} width={200} />
                  </Link>
               </div>
               <nav>
                  <ul className="mt-7 text-left">
                     {siteConfig.header.map((item, index) => (
                        <li key={index} className="my-3">
                           <Link href={item.href || ''} className="font-semibold">
                              {item.label}
                           </Link>
                        </li>
                     ))}
                  </ul>
               </nav>
            </DrawerHeader>
            <DrawerFooter>
               <Link
                  href="/login"
                  className={buttonVariants({ variant: 'outline' })}
               >
                  Login
               </Link>
            </DrawerFooter>
         </DrawerContent>
      </Drawer>
   )
}