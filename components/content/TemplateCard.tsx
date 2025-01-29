"use client"
import React from "react";
import { TEMPLATE } from "./TemplateListSection";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { MagicCard } from "@/components/magiccard";

import { useTheme } from "next-themes";

function TemplateCard(item: TEMPLATE) {
  const { theme } = useTheme();

  return (
    <Link href={"/dashboard/content/" + item?.slug}>
      <MagicCard
        className={cn(
          "p-5 shadow rounded-lg flex flex-col gap-3 cursor-pointer h-full hover:scale-105 duration-500 transition-all",
          Math.random() > 0.5 ? "border-cyan-400" : "border-purple-400",
        )} gradientColor={theme === "dark" ? "#0182fd" : "#ff00b3"}
      >
        
        <Image src={item.icon} alt="icon" width={50} height={50} />
        <h2 className="font-semibold text-lg">{item.name}</h2>
        <p className="text-sm text-white line-clamp-3">{item.desc}</p>
      </MagicCard>
    </Link>
  );
}

export default TemplateCard;
