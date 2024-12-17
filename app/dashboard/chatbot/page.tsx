import GeminiAI from "@/components/GeminiAI";
import { Navbar } from "@/components/Navbar";

const page = () => {
  return (
    <div>
      <div className="bg-black text-gray-100 h-20">
        <Navbar />
      </div>
      <>
        <GeminiAI />
      </>
    </div>
  );
};

export default page;
