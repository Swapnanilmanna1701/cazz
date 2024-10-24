import Chatbox from "@/components/Chatbot";
import React from "react";
import { Navbar } from "@/components/Navbar";

const page = () => {
  return (
    <div>
      <div className="bg-black text-gray-100 h-20">
        <Navbar />
      </div>
      <Chatbox />
    </div>
  );
};

export default page;
