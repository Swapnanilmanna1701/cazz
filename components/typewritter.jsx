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
    <div className="h-[40rem] flex justify-center items-center">
      <div className="text-2xl sm:text-6xl text-center font-extrabold capitalize text-white dark:text-neutral-400">
        <div className="gap-8 leading-[2rem] sm:leading-[6rem]">
          Explore
          <FlipWords words={words} className="text-blue-600" />Projects with
          <br />
          <span className="text-yellow-300 py-8 my-4">Tech Janta Party</span>
        </div>
      </div>
    </div>
  );
}
