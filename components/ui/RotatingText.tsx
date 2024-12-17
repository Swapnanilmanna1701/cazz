"use client";
import { useState, useEffect, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import "@/styles/RotatingText.css";

const words = [
  "LinkedIn Post",
  "Code Converter",
  "AI Mock Interview",
  "AI Form",
  "Twitter Threads",
  "AI Code Writer",
  "AI Code explainer" ,
  "AI Emailer",
  "AI Resume",
  "Text Improver",
  "Explain Code",
  "Resume Analyzer",
  "AI Blog",
  "AI Chatbot",
  "AI Summary",
  "Youtube Tags",
  "SEO Optimization",
  "Insta Post Idea",
  "Insta Post Generator",
  "Code Bug Detector",
  "Tagline Generator",

];
const colors = ["#ff0000", "	#ff0040", "#ff0080", "#ff00bf", "#ff00ff","#bf00ff","#8000ff","#4000ff","#0000ff","#0040ff","#0066ff","#0080ff","#00bfff","#00ffff","#00ffbf","#00ff80","#00ff40","#00ff00","#40ff00","#80ff00","#bfff00","#ffff00","#ffbf00","#ff8000","#ff4000","#ff0000"];

const RotatingText = () => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [colorIndex, setColorIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const [containerWidth, setContainerWidth] = useState<number | null>(null);

  const measureTextWidth = (text: string) => {
    const tempDiv = document.createElement("div");
    tempDiv.style.position = "absolute";
    tempDiv.style.whiteSpace = "nowrap";
    tempDiv.style.visibility = "hidden";
    tempDiv.style.fontSize = "inherit";
    tempDiv.style.fontFamily = "inherit";
    tempDiv.style.fontWeight = "inherit";
    tempDiv.textContent = text;
    document.body.appendChild(tempDiv);
    const width = tempDiv.offsetWidth;
    document.body.removeChild(tempDiv);
    return width;
  };

  useEffect(() => {
    // Update the width when the word changes
    if (textRef.current && containerRef.current) {
      const currentText = words[currentWordIndex];
      const measuredWidth = measureTextWidth(currentText);
      setContainerWidth(measuredWidth + 40); // Add padding to the width
    }
  }, [currentWordIndex]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
      setColorIndex((prevIndex) => (prevIndex + 1) % colors.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      ref={containerRef}
      className="rotatingTextContainer"
      style={{
        backgroundColor: colors[colorIndex],
        width: containerWidth
          ? `${Math.max(containerWidth + 720, 200)}px`
          : "auto",
      }}
    >
      <div ref={textRef} className="rotatingTextContent">
        <AnimatePresence mode="wait">
          <motion.p
            key={words[currentWordIndex]}
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 30 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
          >
            {words[currentWordIndex]}
          </motion.p>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default RotatingText;
