import { FaTwitter } from 'react-icons/fa'
import { FaYoutube } from 'react-icons/fa6'
import { RiInstagramFill } from 'react-icons/ri'

export const BLUR_FADE_DELAY = 0.15

export const siteConfig = {
   name: '100xDevs',
   description: '100xDevs is a platform for learning and teaching web development',
   url: process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000',
   keywords: ['100xDevs', 'web', 'web3', 'cohort', 'Harkirat', 'Harkirat Singh'],
   links: {
      email: 'info@100xdevs.com',
      coursesLink: 'https://harkirat.classx.co.in/new-courses',
      loginLink: 'https://harkirat.classx.co.in/my-zone-full',
   },
   header: [
      {
         href: '/#courses',
         label: 'Courses',
      },
      {
         href: '/#testimonials',
         label: 'Testimonials',
      },
      {
         href: '#faq',
         label: 'FAQ',
      },
   ],
   faqs: [
      {
         question: 'Why should I choose 100xDevs?',
         answer: (
            <span>
               No compromises. With 100xDevs, you don't have to choose between different tutors and random tutorials. Get the power of building production-ready applications.
            </span>
         ),
      },
      {
         question: 'Who will be teaching me?',
         answer: (
            <span>
               ⁠Learn from the best. Harkirat is the top instructor in India for remote work, open source, and landing jobs.
            </span>
         ),
      },
      {
         question: 'Is 100xDevs suitable for beginners?',
         answer: (
            <span>
               Yes, 100xDevs is perfect for beginners. Start from the basics and advance to complex technologies through projects.
            </span>
         ),
      },
      {
         question: 'Will I get additional course materials than recordings?',
         answer: (
            <span>
               Yes, revisions are made easy. Stop worrying about noting down timestamps and revisiting the recordings. Get access to well-documented slides for all the lessons.
            </span>
         ),
      },
      {
         question: 'How will 100xDevs help me grow as a developer?',
         answer: (
            <span>
               Learn, build, and ship — without the fear of missing out. Reach your inflection point and become a self-sufficient developer in just a few months.
            </span>
         ),
      },
      {
         question: 'How can I get my doubts resolved quickly?',
         answer: (
            <span>
               Personal TAs are available to help you get your doubts solved. Get it fixed by asking in the Discord community!
            </span>
         ),
      },
      {
         question: 'Are there hands-on assignments?',
         answer: (
            <span>
               Definitely. We craft assignments to ensure a hands-on learning experience.
            </span>
         ),
      },
      {
         question: 'What is the refund policy?',
         answer: (
            <span>
               We offer a 7-day no-questions-asked refund policy
            </span>
         ),
      },
   ],
   footer: [
      {
         name: 'Twitter',
         url: 'https://twitter.com/100xdevs',
         icon: FaTwitter,
      },
      {
         name: 'Instagram',
         url: 'https://instagram.com/100xdevs',
         icon: RiInstagramFill,
      },
      {
         name: 'YouTube',
         url: 'https://youtube.com/100xdevs',
         icon: FaYoutube,
      },
   ]
}

export type SiteConfig = typeof siteConfig