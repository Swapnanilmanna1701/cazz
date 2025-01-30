"use client";
import React, { useState } from "react";
import { Cover } from "@/components/ui/cover";
import { useRef } from "react"
import TextCursorProximity from "@/components/textcursor"


import { Navbar } from "@/components/Navbar";
import SearchSection from "@/components/content/SearchSection";
import TemplateListSection from "@/components/content/TemplateListSection";

function Dashboard() {
  const containerRef = useRef<HTMLDivElement>(null)

  const [userSearchInput, setUserSearchInput] = useState<string>();
  return (
    <div >
      <div className="bg-black text-gray-100 h-20">
        <Navbar />
      </div>
      <div className="">
        <h1 className="md:text-6xl text-2xl text-center md:mt-12 font-bold">
          Create All Types of Content <br /> With{" "}
          <Cover>
            <span className=" bg-clip-text text-transparent bg-gradient-to-r from-pink-600 via-violet-500 to-cyan-300">Lightning Speed</span>
          </Cover>
        </h1>
      </div>
      {/* Search Section  */}
      <SearchSection
        onSearchInput={(value: string) => setUserSearchInput(value)}
      />

      {/* Template List Section  */}
      <TemplateListSection userSearchInput={userSearchInput} />
    </div>
  );
}

export default Dashboard;
