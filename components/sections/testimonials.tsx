'use client'

import Marquee from '@/components/ui/marquee'
import Section from '@/components/section'
import { cn } from '@/lib/utils'
import { motion } from 'framer-motion'
import { ClientTweetCard } from '@/components/ui/client-tweet-card'

const tweetIds = [
   '1805677333350957154',
   '1804108390911922574',
   '1803529732107206896',
   '1796790102179360825',
   '1813326938615734338',
   '1793628910040854795',
   '1710901887849918850',
   '1789508919645065547',
]

export default function Testimonials() {

   const numLines = 4;
   const tweetsPerLine = Math.ceil(tweetIds.length / numLines);
   const filledTweetIds = [...tweetIds];

   return (
      <Section
         title="Testimonials"
         subtitle="What our students are saying"
         className="max-w-8xl"
      >
         <div className="relative mt-6 max-h-screen overflow-hidden">
            <div className="gap-4 md:columns-2 xl:columns-3 2xl:columns-4">
               {Array(numLines)
                  .fill(0)
                  .map((_, i) => (
                     <Marquee
                        vertical
                        key={i}
                        className={cn({
                           '[--duration:60s]': i === 1,
                           '[--duration:30s]': i === 2,
                           '[--duration:70s]': i === 3,
                        })}
                     >
                        {filledTweetIds.slice(i * tweetsPerLine, (i + 1) * tweetsPerLine).map((tId, idx) => (
                           <motion.div
                              key={idx}
                              initial={{ opacity: 0 }}
                              whileInView={{ opacity: 1 }}
                              viewport={{ once: true }}
                              transition={{
                                 delay: Math.random() * 0.8,
                                 duration: 1.2,
                              }}
                           >
                              {<ClientTweetCard id={tId} />}
                           </motion.div>
                        ))}
                     </Marquee>
                  ))}
            </div>
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/4 w-full bg-gradient-to-t from-background from-20%"></div>
            <div className="pointer-events-none absolute inset-x-0 top-0 h-1/4 w-full bg-gradient-to-b from-background from-20%"></div>
         </div>
      </Section>
   )
}