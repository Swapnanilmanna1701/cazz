

import Link from "next/link";
import { HeroHighlight, Highlight } from "@/components/ui/hero";

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
    link: "https://help.x.com/en/using-x/create-a-thread",
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
    link: "https://www.linkedin.com/pulse/how-create-post-linkedin-documents-adrian-shiel",
  },
  {
    title: "API Reference",
    description:
      "Detailed documentation for integrating our AI content generation into your applications.",
    link: "https://ai.google.dev/gemini-api/docs/quickstart?_gl=1*1pdctbl*_up*MQ..&gclid=CjwKCAiA34S7BhAtEiwACZzv4eVwMvfC6WHLjG3VEfIK_r02k7jkuUDmWbBxu3OhQvoga5JWDpZtUhoC-eEQAvD_BwE&lang=node",
  },
];

export default function DocsPage() {
  return (
    <div className="min-h-screen bg-black text-gray-100">
      <Navbar />
      <main className="container mx-auto px-8 py-20">
        <h1 className="text-5xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-pink-700 via-purple-500 to-indigo-500">
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

