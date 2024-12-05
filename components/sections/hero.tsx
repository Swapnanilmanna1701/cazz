'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { RainbowButton } from '@/components/ui/rainbow-button'
import ShinyButton from '@/components/ui/shiny-button'
import { siteConfig } from '@/lib/config'
import Image from 'next/image'
import heroImage from '@/public/heroImage.png'
import { BorderBeam } from '@/components/ui/border-beam'

const ease = [0.16, 1, 0.3, 1]

function HeroPill() {
   return (
      <motion.a
         href={siteConfig.links.coursesLink}
         className="flex w-auto items-center space-x-2"
         initial={{ opacity: 0, y: -20 }}
         animate={{ opacity: 1, y: 0 }}
         transition={{ duration: 0.8, ease }}
      >
         <RainbowButton>Book Your slot now</RainbowButton>
      </motion.a>
   )
}

function HeroTitles() {
   return (
      <div className="flex w-full max-w-2xl flex-col space-y-4 overflow-hidden pt-8">
         <motion.h1
            className="text-center text-4xl font-medium leading-tight text-foreground sm:text-5xl md:text-6xl"
            initial={{ filter: 'blur(10px)', opacity: 0, y: 50 }}
            animate={{ filter: 'blur(0px)', opacity: 1, y: 0 }}
            transition={{
               duration: 1,
               ease,
               staggerChildren: 0.2,
            }}
         >
            {['Start your', 'Web &', 'Web 3', 'Journey with us'].map((text, index) => (
               <motion.span
                  key={index}
                  className="inline-block text-balance px-1 font-semibold md:px-2"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                     duration: 0.8,
                     delay: index * 0.2,
                     ease,
                  }}
               >
                  {text}
               </motion.span>
            ))}
         </motion.h1>
         <motion.p
            className="mx-auto max-w-xl text-balance text-center text-lg leading-7 text-muted-foreground sm:text-xl sm:leading-9"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
               delay: 0.6,
               duration: 0.8,
               ease,
            }}
         >
            Join Our courses and get the firsthand knowledge about web and web3
         </motion.p>
      </div>
   )
}

function HeroCTA() {
   return (
      <>
         <motion.div
            className="mx-auto mt-6 flex w-full max-w-2xl flex-col items-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8, ease }}
         >
            <Link
               href={siteConfig.links.coursesLink}
            >
               <ShinyButton>View Courses</ShinyButton>
            </Link>
         </motion.div>
      </>
   )
}

function HeroImage() {
   return (
      <motion.div
         className="relative mx-auto flex w-full items-center justify-center py-5"
         initial={{ opacity: 0, y: 50 }}
         animate={{ opacity: 1, y: 0 }}
         transition={{ delay: 1.2, duration: 1, ease }}
      >
         <div className="relative">
            <Image
               src={heroImage}
               alt={"hero image"}
               className="md:rounded-3xl shadow-lg rounded-lg border md:w-[60rem] w-full"
            />
            <BorderBeam size={250} duration={12} delay={9} className="absolute inset-0 md:rounded-3xl rounded-lg " />
         </div>
      </motion.div>
   )
}

export default function Hero2() {
   return (
      <section id="hero">
         <div className="relative flex w-full flex-col items-center justify-start px-4 pt-32 sm:px-6 sm:pt-24 md:pt-32 lg:px-8">
            <HeroPill />
            <HeroTitles />
            <HeroCTA />
            <HeroImage />
            <div className="pointer-events-none absolute inset-x-0 -bottom-12 h-1/3 bg-gradient-to-t from-background via-background to-transparent lg:h-1/4"></div>
         </div>
      </section>
   )
}