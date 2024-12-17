"use client";
import React from "react";
import { FlipWords } from "./ui/flip-words";
import SparklesText from "@/components/ui/sparklestxt";

export default function FlipWordsDemo() {
  const words = [
    "UNLEASH",
    "YOUR",
    "POTENTIAL",
    "WITH",
    
  ];

  return (
    <div className="h-[10rem] flex justify-center items-center">
      <div className="text-2xl sm:text-6xl text-center font-extrabold capitalize text-white dark:text-neutral-400">
        <div className="gap-6 leading-[1rem] sm:leading-[6rem]">
          <br />
          <FlipWords words={words} className="text-blue-600" />
          <br />
          <span>
            <SparklesText text="CazzAI" />{" "}
          </span>
        </div>
      </div>
    </div>
  );
}
