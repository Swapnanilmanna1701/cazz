/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
//import Particles from "@/components/magicui/particles";
import { Oxygen_Mono } from "next/font/google";
import { cn } from "@/lib/utils";
import Convertor from "@/components/ui/Convertor";
//import { Button } from "./ui/button";

const font = Oxygen_Mono({ subsets: ["latin"], weight: ["400"] });
const ParticlesDemo = () => {
  const { theme } = useTheme();
  const [color, setColor] = useState("#ffffff");

  useEffect(() => {
    setColor(theme === "dark" ? "#ffffff" : "#000000");
  }, [theme]);

  return (
    <div className="relative flex min-h-svh w-full flex-col items-center pt-20 md:pt-28 overflow-hidden rounded-lg border border-t-0 bg-background md:shadow-xl">
      
      
      
      
      <Convertor />
      
    </div>
  );
};

export default ParticlesDemo;
