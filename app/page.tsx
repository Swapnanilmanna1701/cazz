import Link from "next/link";
//import { useState, useEffect } from 'react';
//import MaxWidthWrapper from "@/components/ui/max-width-wrapper";
//import AnimationContainer from "@/components/ui/animation-container";
import Footer from "@/components/Footer";
//import { SectionBadge } from "@/components/ui/badge";


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
import TypewriterEffectSmoothDemo from "@/components/typewritter";

import { SignUpButton } from "@clerk/nextjs";
// import Header from "@/components/Navbar1";
import { Navbar } from "@/components/Navbar";
//import Spline from '@splinetool/react-spline/next';
//import { Footer } from "@/components/Footer";
import BlurFade from "@/components/magicui/blur-fade";
import RotatingText from "@/components/ui/RotatingText";
import { LampContainer } from "@/components/ui/lamp";

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
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-pink-600 via-purple-500 to-indigo-500">
            Sky-Rocket Your Carrier with{" "}
            <span>
              <SparklesText text="CazzAI" />{" "}
            </span>
          </h1>

          <div className="flex justify-center space-x-4">
            <Button
              asChild
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full text-lg transition duration-300 ease-in-out transform hover:scale-105"
            >
              <Link href="/generate">Start Creating</Link>
            </Button>
            <Button
              asChild
              className="bg-transparent border border-blue-600 text-blue-600 hover:bg-gradient-to-r from-pink-400 via-purple-500 to-indigo-700 hover:text-white px-8 py-3 rounded-full text-lg transition duration-300 ease-in-out"
            >
              <Link href="#features">Learn More</Link>
            </Button>
          </div>
        </div>

        {/* Features Section */}
        <div className=" " id="features">
          <h1 className="h1 text-center">
            <BlurFade delay={0.1} blur="6px" duration={1} inView>
              <span className="">
                <span className="text-4xl font-bold mb-12 text-center text-transparent bg-gradient-to-r from-violet-500 to-fuchsia-500 bg-clip-text inline-bloc">
                  Services We Provide{" "}
                  <span>
                    <SparklesText text="Cazz" />{" "}
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

          <div className=" py-20 grid grid-cols-1 md:grid-cols-3 gap-10 max-w-5xl mx-auto">
            {[
              {
                title: "Twitter Threads",
                icon: <TwitterIcon className="w-10 h-10 mb-4 text-blue-400" />,
                description:
                  "Generate compelling Twitter threads that engage your audience and boost your reach.",
              },
              {
                title: "Instagram Captions",
                icon: (
                  <InstagramIcon className="w-10 h-10 mb-4 text-pink-400" />
                ),
                description:
                  "Create catchy captions for your Instagram posts that increase engagement and followers.",
              },
              {
                title: "LinkedIn Posts",
                icon: <LinkedinIcon className="w-10 h-10 mb-4 text-blue-600" />,
                description:
                  "Craft professional content for your LinkedIn network to establish thought leadership.",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="p-8 rounded-2xl bg-gradient-to-br from-gray-800 to-gray-900 shadow-lg hover:shadow-xl transition duration-300 ease-in-out transform hover:-translate-y-1"
              >
                <div className="flex flex-col items-center text-center">
                  {feature.icon}
                  <h3 className="text-2xl font-semibold mb-3 text-white">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
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
          <h2 className="text-4xl bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 font-bold mb-8 ">
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
              <Button className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-4 rounded-full text-lg transition duration-300 ease-in-out transform hover:scale-105">
                Get Started Free <ArrowRightIcon className="ml-2 h-5 w-5" />
              </Button>
            </SignUpButton>
          )}
        </div>
        <div className="mb--20 text-2xl text-center relative">
          
        </div>

        <div>
          <LampContainer>
            <div className="flex flex-col items-center justify-center relative w-full text-center">
              <TypewriterEffectSmoothDemo />
            </div>
          </LampContainer>
        </div>
        
      <div>
      <Footer />
      </div>

        

        <div className="h-[20rem] lg:h-[20rem] hidden md:flex items-center justify-center">
          <TextHoverEffect text="CAZZAI" />
        </div>
      </main>
    </div>
  );
}
