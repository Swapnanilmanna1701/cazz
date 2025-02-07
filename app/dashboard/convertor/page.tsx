// import DropZone from "@/components/dropzone"

// import Code from "@/components/code";
import DropZone from "@/components/convertor/dropzone";
//import { ModeToggle } from "@/components/mode-toggle";
//import Image from "next/image";
//import Link from "next/link";
import { useRef } from 'react';

// import Image from "next/image";
import GradientText from '@/components/convertor/gradienttext'
import VariableProximity from '../components/text';


const Home = () => {
    
    return ( 
        <div className="space-y-12 pb-8 space-x-72 bg-black ">
        <div className="space-y-6">
        <h1 className="text-center text-bold  text-7xl md:text-6xl gap-10 "><GradientText
  colors={["#0069ff", "#c148ff", "#ff17cb", "#17ecff", "#f4f4f4"]}
  animationSpeed={3}
  showBorder={false}
  className="custom-class text-bold"
>
  FileFlex
</GradientText></h1>
        <h2 className="text-center font-medium text-3xl md:text-5xl">
        Convert files with ease..
        <div className="relative inset-y-4">
        {/* <ModeToggle/> */}
        <div className="items-center flex flex-col justify-center w-full">
      
    </div>
        </div>
        </h2>
        </div>
        {/* Upload box */}
        <DropZone /> 
        </div>
    );
}

export default Home;

// "FileMagnet - FileMagnet is a free, file converter which is backendless 🎯 | Product Hunt"
// "https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=433044&theme=light"