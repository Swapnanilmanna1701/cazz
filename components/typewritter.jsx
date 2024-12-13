"use client"
import React from "react";
import { FlipWords } from "./ui/flip-words";

export default function FlipWordsDemo() {
  const words = [
    "Unthreatened",
    "beautiful",
    "Contemporary",
    "Accelerated",
    "optimized",
    "innovative",
  ];

  return (
    <div className="h-[10rem] flex justify-center items-center">
      <div className="text-2xl sm:text-6xl text-center font-extrabold capitalize text-white dark:text-neutral-400">
        <div className="gap-8 leading-[2rem] sm:leading-[6rem]">
          Explore
          <FlipWords words={words} className="text-blue-600" />Projects with
          
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 py-8 my-4">CazzAI</span>
        </div>
      </div>
    </div>
  );
}
