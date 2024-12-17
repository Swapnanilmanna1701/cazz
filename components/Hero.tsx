"use client";
import { motion } from "framer-motion";
import Link from "next/link";

import { HeroHighlight, Highlight } from "@/components/ui/hero";

export function HeroBody() {
  return (
    <HeroHighlight>
      <motion.h1
        initial={{
          opacity: 0,
          y: 20,
        }}
        animate={{
          opacity: 1,
          y: [20, -5, 0],
        }}
        transition={{
          duration: 0.5,
          ease: [0.4, 0.0, 0.2, 1],
        }}
        className="text-2xl px-4 md:text-4xl lg:text-5xl font-bold text-neutral-700 dark:text-white max-w-4xl leading-relaxed lg:leading-snug text-center mx-auto "
      >
        
        <Highlight className="text-black dark:text-white">
          Analyze Your Resume with CazzAI
        </Highlight>
        <div className="pt-10">
      <Link href={"/analyze-resume"}>
              <button className="p-[3px] mt-6 relative">
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
                <div className="px-8 py-2  bg-black rounded-[6px] font-bold relative group transition duration-200 text-white hover:bg-transparent">
                  Analyze Resume
                </div>
              </button>
            </Link>
      </div>
        
      </motion.h1>
    </HeroHighlight>
  );
}
