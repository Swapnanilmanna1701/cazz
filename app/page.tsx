import Link from "next/link";
//import { useState, useEffect } from 'react';
//import MaxWidthWrapper from "@/components/ui/max-width-wrapper";
//import AnimationContainer from "@/components/ui/animation-container";
import Footer from "@/components/Footer";
import GlowingEffectDemo from "@/components/glowingdemo"
//import Testimonial from "@/components/testimonial";
//import { SectionBadge } from "@/components/ui/badge";
//import { Particles } from "@/components/particles";
import TextRevealButton from "@/components/textreavel";
import BorderGlowButton from "@/components/glowbutton";
//import MultiStepLoaderDemo from "@/components/multi-step-loader-demo"
import { Button } from "@/components/ui/button";
//import { RainbowButton } from '@/components/ui/rainbow-button'
//import Blobby from "@/components/ui/blobby";
import SparklesText from "@/components/ui/sparklestxt";
import {
  TwitterIcon,
  InstagramIcon,
  LinkedinIcon,
  ArrowRightIcon,
  RocketIcon,
} from "lucide-react";
import { auth } from "@clerk/nextjs/server";
import Reviews from "@/components/testimonial";
import { TextReveal } from "@/components/infinite";

//import TypewriterEffectSmoothDemo from "@/components/typewritter";

import { SignUpButton } from "@clerk/nextjs";
// import Header from "@/components/Navbar1";
import { Navbar } from "@/components/Navbar";
//import Spline from '@splinetool/react-spline/next';
//import { Footer } from "@/components/Footer";
import BlurFade from "@/components/magicui/blur-fade";
import RotatingText from "@/components/ui/RotatingText";
//import { LampContainer } from "@/components/ui/lamp";

import { TextHoverEffect } from "@/components/ui/text-hover-effect";
import Perks from "@/components/perks";

export default function Home() {
  const { userId } = auth();

  return (
    <div className="min-h-screen bg-black overflow-hidden pt-20 w-full">
      <Navbar />

      <main className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Decorative elements */}

        {/* Hero Section */}
        <div className="text-center py-20 lg:py-32 relative">
          <RocketIcon className="w-16 h-16 text-purple-500 mx-auto mb-6 animate-bounce" />
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-pink-600 via-violet-500 to-cyan-300">
            Enhance Your Productivity With{" "}
            <span className="text-8xl">
              <SparklesText text="CazzAI" />{" "}
            </span>
          </h1>

          <div className="flex justify-center space-x-4">
            <BorderGlowButton />

            <Button className="hover:bg-gradient-to-r from-pink-600 via-violet-500 to-cyan-300 text-blue-600 px-5 py-4 rounded-full bg-black border-2 border-blue-600 text-lg transition hover:text-white hover:border-white duration-300 ease-in-out transform hover:scale-104 "
              
            >
              <Link href="/dashboard/content">Explore CazzAI</Link>
            </Button>
          </div>
        </div>

        {/* Features Section */}
        <div className=" " id="features">
          <h1 className="h1 text-center">
            <BlurFade delay={0.1} blur="6px" duration={1} inView>
              <span className="">
                <span className="text-4xl font-bold mb-12 text-center text-transparent bg-gradient-to-r from-violet-500 to-fuchsia-500 bg-clip-text inline-bloc">
                  Services We Provide In{" "}
                  <span>
                    <SparklesText text="CazzAI" />{" "}
                  </span>
                </span>
              </span>
            </BlurFade>
          </h1>
          <div className=" py-10 text-center align-column-center">
            <BlurFade delay={0.1} blur="6px" duration={1} inView>
              <RotatingText />
            </BlurFade>
          </div>

          <GlowingEffectDemo />
        </div>
        

        {/* Benefits Section */}
        <Perks />

        {/* CTA Section */}
        <div className="text-center py-20 relative">
          <div className="absolute top-10 right-10 animate-spin-slow">
            <svg
              className="w-20 h-20 text-blue-500 opacity-20"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M12 6V12L16 14"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <Reviews />
          <h2 className="text-4xl bg-clip-text text-transparent bg-gradient-to-r from-pink-700 via-purple-500 to-cyan-300 font-bold mb-8 ">
            Want to elevate yourself to one step ahead?
          </h2>
          {userId ? (
            <Button
              asChild
              className="bg-blue-600 hover:bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-white px-10 py-4 rounded-full text-lg transition duration-300 ease-in-out transform hover:scale-105"
            >
              <Link href="/generate">
                Generate Content Now <ArrowRightIcon className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          ) : (
            <SignUpButton mode="modal">
              <TextRevealButton />
            </SignUpButton>
          )}
        </div>
        <div className=" text-2xl text-center relative"></div>

        <div>
          <div className="flex flex-col items-center justify-center relative w-full text-center mb-12">
            <div className="flex items-center justify-center bg-white dark:bg-black">
              <TextReveal text="Magic UI will change the way you design." />
            </div>
          </div>
        </div>

        <div className="mt-10">
          <Footer />
        </div>

        <div className="h-[20rem] lg:h-[20rem] hidden md:flex items-center justify-center">
          <TextHoverEffect text="CAZZAI" />
        </div>
      </main>
    </div>
  );
}
