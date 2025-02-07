import Image from "next/image";
import { FC } from "react";
import InputArea from "./InputArea";
import HoverBorderGradientDemo from "@/components/hover-button-demo";

type THeroProps = {
  promptValue: string;
  setPromptValue: React.Dispatch<React.SetStateAction<string>>;
  handleDisplayResult: () => void;
};

const Hero: FC<THeroProps> = ({
  promptValue,
  setPromptValue,
  handleDisplayResult,
}) => {
  const handleClickSuggestion = (value: string) => {
    setPromptValue(value);
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <HoverBorderGradientDemo />
      <h2 className="bg-gradient-to-r from-pink-600 via-violet-500 to-cyan-00 bg-clip-text text-transparent pb-7 pt-2 opacity-100 saturate-200 text-center text-3xl font-semibold leading-[normal] lg:text-[64px] drop-shadow-2xl">
        Experience The New Age Browsing
      </h2>

      {/* input section */}
      <div className="w-full max-w-[708px] pb-0">
        <InputArea
          promptValue={promptValue}
          setPromptValue={setPromptValue}
          handleDisplayResult={handleDisplayResult}
        />
      </div>

      {/* Suggestions section */}
      <div className="flex flex-wrap items-center justify-center gap-4 pb-[30px] lg:flex-nowrap lg:justify-normal mt-5">
        {suggestions.map((item) => (
          <div
            className="flex h-[35px] cursor-pointer items-center justify-center gap-[5px] border border-solid border-orange-500 rounded-full bg-orange-200/20 px-4 py-2"
            onClick={() => handleClickSuggestion(item?.name)}
            key={item.id}
          >
            <Image
              unoptimized
              src={item.icon}
              alt={item.name}
              width={18}
              height={16}
              className="w-[18px]"
            />
            <span className="text-sm font-light leading-[normal] text-[#1B1B16]">
              {item.name}
            </span>
          </div>
        ))}
      </div>

      {/* Github link section */}
      
    </div>
  );
};

type suggestionType = {
  id: number;
  name: string;
  icon: string;
};

const suggestions: suggestionType[] = [
  {
    id: 1,
    name: "Photosynthesis process in plants",
    icon: "/img/icon _leaf_.svg",
  },
  {
    id: 2,
    name: "The benefits of weightlifting",
    icon: "/img/icon _dumbell_.svg",
  },
  {
    id: 3,
    name: "Einstein's theory of relativity",
    icon: "/img/icon _atom_.svg",
  },
];

export default Hero;
