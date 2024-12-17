import { Navbar } from "@/components/Navbar";
import { Timeline } from "@/components/ui/timeline";
//import Image from "next/image";
import Link from "next/link";

export default function TimelineDemo() {
  const data = [
    {
      title: "Analysis",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-lg font-bold mb-8">
            Analyze your resume with our ATS
          </p>
          <div className="grid grid-cols-2 gap-4">
            
          </div>
        </div>
      ),
    },
    {
      title: "Scorings",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-lg font-bold mb-8">
            Get Proper Scoring For Your Resume
          </p>

          <div className="grid grid-cols-2 gap-4">
            
          </div>
        </div>
      ),
    },
    {
      title: "Resolution",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-lg font-bold mb-8">
            Suggestions & platform redirection to improve your skills
          </p>
          <div className="mb-8">
            <div className="grid grid-cols-2 gap-4">
              
            </div>
            <Link href={"/analyze-resume"}>
              <button className="p-[3px] mt-6 relative">
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
                <div className="px-8 py-2  bg-black rounded-[6px] font-bold relative group transition duration-200 text-white hover:bg-transparent">
                  Analyze Resume
                </div>
              </button>
            </Link>
          </div>
        </div>
      ),
    },
  ];
  return (
    <div className="w-full">
      <Navbar />
      <div className="pt-10">
        <Timeline data={data} />
      </div>
    </div>
  );
}

/*
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/Navbar";
//import Footer from "@/components/Footer1"

const docsSections = [
  {
    title: "Getting Started",
    description:
      "Learn how to set up your account and create your first AI-generated content.",
    link: "/docs/getting-started",
  },
  {
    title: "Twitter Threads",
    description:
      "Discover how to create engaging Twitter threads using our AI technology.",
    link: "/docs/twitter-threads",
  },
  {
    title: "Instagram Captions",
    description:
      "Learn the best practices for generating Instagram captions that boost engagement.",
    link: "/docs/instagram-captions",
  },
  {
    title: "LinkedIn Posts",
    description:
      "Explore techniques for crafting professional LinkedIn content with AI assistance.",
    link: "/docs/linkedin-posts",
  },
  {
    title: "API Reference",
    description:
      "Detailed documentation for integrating our AI content generation into your applications.",
    link: "/docs/api-reference",
  },
];

export default function DocsPage() {
  return (
    <div className="min-h-screen bg-black text-gray-100">
      <Navbar />
      <main className="container mx-auto px-8 py-20">
        <h1 className="text-5xl font-bold mb-12 text-center text-white">
          Documentation
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {docsSections.map((section, index) => (
            <div
              key={index}
              className="p-6 rounded-lg border border-gray-800 flex flex-col"
            >
              <h2 className="text-2xl font-bold mb-3 text-white">
                {section.title}
              </h2>
              <p className="text-gray-400 mb-4 flex-grow">
                {section.description}
              </p>
              <Button
                asChild
                className="w-full bg-gradient-to-l from-cyan-300 via-blue-500 to-purple-500 text-white hover:bg-gray-200"
              >
                <Link href={section.link}>Read More</Link>
              </Button>
            </div>
          ))}
        </div>

      </main>
    </div>
  );
}
*/
