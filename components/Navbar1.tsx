"use client";

import { links } from '@/lib/data';
import { cn } from '@/lib/utils';
import { motion } from "framer-motion";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
//import MobileNav from './MobileNav';
import {
    SignInButton,
    SignUpButton,
    UserButton,
    SignedOut,
    SignedIn,
    useAuth,
  } from "@clerk/nextjs";

const Header = () => {

    const pathname = usePathname();
    const { userId } = useAuth();


    const [activeLink, setActiveLink] = useState("Home");

    const isBlogActive = pathname?.startsWith('/blog');

    return (
        <header className="z-[99999] relative">

            {/* Navbar Background */}
            <motion.div
                initial={{ y: -100, opacity: 0, x: "-50%" }}
                animate={{ y: 0, opacity: 1, x: "-50%" }}
                transition={{
                    type: "spring",
                    stiffness: 260,
                    damping: 20,
                    duration: 0.7,
                }}
                className="fixed top-10 -translate-x-1/2 w-full h-40 bg-black/20 border border-neutral-800/50 rounded-none shadow-lg left-1/2 bg-opacity-80 shadow-black/50 backdrop-blur-lg sm:top-6 sm:h-12 sm:w-[80rem] sm:rounded-full mx-auto overflow-hidden lg:inline-block"
            >
                <motion.div
                    initial={{ opacity: 0, x: "-50%" }}
                    animate={{ opacity: 1, x: "-50%" }} 
                    transition={{
                        type: "spring",
                        stiffness: 260,
                        damping: 20,
                        duration: 0.4,
                    }}
                    className="absolute bottom-0 -translate-x-1/2 w-full h-4 bg-gradient-to-b hidden from-violet-200/30 rounded-full blur left-1/2 sm:h-2 sm:w-[35rem] mx-auto"
                />
            </motion.div>

            {/* Desktop Navbar */}
            <nav className="fixed lg:flex z-[9999] top-[2rem] left-1/2 -translate-x-1/2 py-5 overflow-x-scroll max-w-full sm:top-[1.5rem] sm:h-12 sm:py-5 h-12 scrollbar-hide">
                <ul className="flex items-center justify-center gap-x-4 w-[80rem] h-full">
                    {links?.map((link, index) => (
                        <motion.li
                            key={index}
                            initial={{ opacity: 0, scale: 0 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{
                                type: "spring",
                                bounce: 0.3,
                                duration: 0.5,
                                delay: 0.1 + index * 0.1,
                            }}
                            className="relative text-white text-2xl"
                        >
                            <Link
                                href={link.hash}
                                onClick={() => setActiveLink(link.name)}
                                className={cn(
                                    "flex items-center justify-center px-4 py-2 transition hover:text-white",
                                    (activeLink === link.name || (isBlogActive && link.name === 'Docs')) && "text-white"
                                )}
                            >
                                {link.name}

                                {(activeLink === link.name || (isBlogActive && link.name === 'Docs')) && (
                                    <motion.span
                                        layoutId='activeLink'
                                        transition={{
                                            type: "spring",
                                            bounce: 0.3,
                                        }}
                                        className="absolute inset-0 border-t rounded-full shadow-md backdrop-blur-lg border-neutral-800 bg-gradient-to-b shadow-black/50 from-neutral-900/80 to-neutral-900 -z-10"
                                    ></motion.span>
                                )}

                            </Link>
                        </motion.li>
                    ))}
                    {userId && (
                <Link
                  href="/generate"
                  className="text-gray-300 hover:text-white transition-colors py-2 sm:py-0 relative group"
                >
                  Dashboard
                  <span className="absolute left-0 right-0 bottom-0 h-0.5 bg-blue-500 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
                </Link>
              )}
              <SignedOut>
                <SignInButton mode="modal">
                  <button className="text-gray-300 hover:text-white transition-colors mt-2 sm:mt-0">
                    Sign In
                  </button>
                </SignInButton>
                <SignUpButton mode="modal">
                  <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-full transition-colors mt-2 sm:mt-0">
                    Sign Up
                  </button>
                </SignUpButton>
              </SignedOut>
              <SignedIn>
                <UserButton
                  appearance={{
                    elements: {
                      avatarBox: "w-10 h-10",
                    },
                  }}
                />
              </SignedIn>
                </ul>
            </nav>

            {/* Mobile & Tablet Navbar */}
           

        </header>
    )
}

export default Header