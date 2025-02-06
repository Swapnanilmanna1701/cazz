"use client";
import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import gradientStyle from "@/styles/gradient.module.css";
import { cn } from "@/lib/utils";
//import { TextAnimate } from "@/components/text-effect";
type Tab = {
  id: string;
  label: string;
};

const tabData: Tab[] = [
  { id: "general", label: "General" },
  { id: "tech", label: "Tech" },
  { id: "random", label: "Random" },
];

type FAQItemData = {
  question: string;
  answer: string;
};

const faqData: { [key: string]: FAQItemData[] } = {
  general: [
    {
      question: "Why don't scientists trust atoms?",
      answer: "Because they make up everything!",
    },
    {
      question: "Why did the scarecrow win an award?",
      answer: "Because he was outstanding in his field!",
    },
    {
      question: "What do you get if you cross a snowman and a vampire?",
      answer: "Frostbite.",
    },
    {
      question: "Why don't scientists trust atoms?",
      answer: "Because they make up everything!",
    },
  ],
  tech: [
    {
      question: "Why do programmers prefer dark mode?",
      answer: "Because the light attracts bugs!",
    },
    {
      question: "How many programmers does it take to change a light bulb?",
      answer: "None, that's a hardware problem.",
    },
    {
      question: "Why did the developer go broke?",
      answer: "Because he lost his domain in a bet!",
    },
    {
      question: "Why did the programmer quit his job?",
      answer: "Because he didn't get arrays!",
    },
  ],
  random: [
    {
      question: "Why did the bicycle fall over?",
      answer: "Because it was two-tired!",
    },
    {
      question: "What did one ocean say to the other ocean?",
      answer: "Nothing, they just waved.",
    },
    {
      question: "Why don't skeletons fight each other?",
      answer: "They don't have the guts!",
    },
    {
      question: "What do you call a bear with no teeth?",
      answer: "A gummy bear!",
    },
  ],
};

type FAQItemProps = {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
};

const FAQItem: React.FC<FAQItemProps> = ({
  question,
  answer,
  isOpen,
  onClick,
}) => {
  return (
    <div className="mb-6 text-white border-b border-[#e4e4e7] pb-4 dark:border-[#27272a] ">
      <button
        className="flex w-full items-center justify-between text-left"
        onClick={onClick}
      >
        <span className="text-lg font-medium">{question}</span>
        <div>
          <motion.svg
            animate={{ rotate: isOpen ? 45 : 0 }}
            transition={{ duration: 0.2 }}
            className="size-5 text-white dark:text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 4v16m8-8H4"
            />
          </motion.svg>
        </div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="mt-2 text-gray-600 dark:text-gray-400"
          >
            {answer}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const FAQ: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>("general");
  const [openItem, setOpenItem] = useState<number | null>(null);

  return (
    <div className="h-full">
      <div className="mx-auto max-w-3xl text-gray-600 dark:text-gray-200 sm:p-6 h-full">
      <h1 className="mb-4 text-center text-3xl font-bold">
        Frequently Asked Questions About{" "}
        <span
          className={cn(
            "bg-gradient-to-tr from-pink-600 via-violet-500 to-cyan-300 text-transparent bg-clip-text animate-gradient",
            gradientStyle.magicText
          )}
        >
          Cazz AI
        </span>
      </h1>
     

      <div className="mx-auto mb-10 flex max-w-lg space-x-1 rounded-lg border border-violet-500 p-1 dark:border-[#27272a]">
        {tabData.map((tab) => (
          <motion.button
            key={tab.id}
            className={`flex-1 rounded px-3 py-2 text-sm font-medium ${
              activeTab === tab.id
                ? "border border-white bg-gradient-to-r from-pink-600 to-blue-500 font-semibold dark:border-white dark:bg-gray-700/10 text-white"
                : "border border-transparent text-gray-300 hover:bg-blue-400 hover:dark:border-cyan-300  hover:dark:text-white"
            }`}
            onClick={() => {
              setActiveTab(tab.id);
              setOpenItem(null);
            }}
            whileTap={{ scale: 0.95 }}
          >
            {tab.label}
          </motion.button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.2 }}
        >
          {faqData[activeTab].map((item, index) => (
            <FAQItem
              key={index}
              question={item.question}
              answer={item.answer}
              isOpen={openItem === index}
              onClick={() => setOpenItem(openItem === index ? null : index)}
            />
          ))}
        </motion.div>
      </AnimatePresence>
    </div>
    </div>
    
  );
};

export default FAQ;
