/* eslint-disable @typescript-eslint/no-explicit-any */
import { Search } from "lucide-react";
import React from "react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Particles } from "@/components/particles";
import VariableFontHoverByRandomLetter from "@/components/letterhover";

function SearchSection({ onSearchInput }: any) {
  const { resolvedTheme } = useTheme();
  const [color, setColor] = useState("#0182fd");
  useEffect(() => {
    setColor(resolvedTheme === "dark" ? "#0182fd" : "#000000");
  }, [resolvedTheme]);
  return (
    <div className="relative p-10 m-5 border flex flex-col justify-center items-center text-white overflow-hidden rounded-lg  bg-black md:shadow-xl">
      <span className="pointer-events-none z-10 whitespace-pre-wrap text-center font-semibold leading-none">
      <div className="pointer-events-auto w-full h-full rounded-lg items-center justify-center font-overusedGrotesk p-5 bg-gradient-to-br text-teal bg-none ">
      <div className="w-full h-full items-center justify-center flex">
        <VariableFontHoverByRandomLetter
          label="Browse all the contents!"
          staggerDuration={0.03}
          className="rounded-full items-center flex justify-center cursor-pointer px-8 py-2 bg-clip-text text-transparent bg-gradient-to-r from-pink-600 via-purple-500 to-cyan-300 align-text-top text-4xl sm:text-5xl md:text-7xl"
          fromFontVariationSettings="'wght' 500, 'slnt' 0"
          toFontVariationSettings="'wght' 800, 'slnt' 0"
        />
      </div>
    </div>
      <p className="text-3xl my-5">What would you like to create today?</p>
      <div className="w-full flex justify-center pointer-events-auto">
        <div className="flex gap-2 items-center p-2 border rounded-3xl bg-white border-blue-700 my-5 w-[70%] pointer-events-auto">
          <Search className="text-primary" />
          <input
            type="text"
            placeholder="Search"
            onChange={(event) => onSearchInput(event.target.value)}
            className="bg-transparent w-full outline-none text-black"
          />
        </div>
      </div>
      </span>
      <Particles
        className="absolute inset-0 z-0"
        quantity={100}
        ease={80}
        color={color}
        refresh
      />
      
    </div>
  );
}

export default SearchSection;
