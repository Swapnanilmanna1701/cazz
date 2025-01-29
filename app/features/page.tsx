/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/no-empty-object-type */
import { Button } from "@/components/ui/button";
import LinkedIn from "@/components/ui/LinkedInIcon";
import TextRevealButton from "@/components/textRevealbutton";
import { Suspense } from "react";
//import { MagicCard } from "@/components/magiccard";
//import { useTheme } from "next-themes";


import Templates from "@/app/(data)/Templates";
import TemplateCard from "@/components/content/TemplateCard";
import { Navbar } from "@/components/Navbar";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Welcome from "@/components/Welcome";
import {
  ArrowRight,
  BotMessageSquare,
  Code,
  FileHeart,
  FileUser,
  Loader2,
  MailPlus,
  Speech,
  TableProperties,
} from "lucide-react";
import Link from "next/link";

type Props = {};

export default function Dashboard({}:Props) {
  //const { theme } = useTheme();
  return (
    <>
      <div className="bg-black text-gray-100 h-20">
        <Navbar />
      </div>
      <div className="w-full flex flex-col gap-8 md:p-5">
        <Suspense
          fallback={
            <div className="bg-gradient-to-l from-cyan-300 via-blue-500 to-purple-500 text-white relative group overflow-hidden rounded-lg transition-all hover:shadow min-h-36 sm:min-h-52">
              <Loader2 size={50} className="mx-auto animate-spin mt-20" />
            </div>
          }
        >
          <Welcome />
        </Suspense>
        <div className="max-w-6xl mx-auto w-full grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Card
        className="hover:-translate-y-1 shadow hover:shadow-blue-500/40 hover:shadow-md duration-500 transition-all border border-cyan-500">
            <CardHeader className="flex gap-4">
              <Speech size={50} />
              <div>
                <CardTitle>AI Mock Interview ✨</CardTitle>
                <CardDescription>
                  Practice your interview skills with AI feedback.
                </CardDescription>
              </div>
            </CardHeader>
            <CardContent>
              
                <Link href="/dashboard/interview">
                <TextRevealButton />
                </Link>
              
            </CardContent>
          </Card>
          <Card className="hover:-translate-y-1 shadow hover:shadow-blue-500/40 hover:shadow-md duration-500 transition-all border border-cyan-500">
            <CardHeader className="flex gap-4">
              <TableProperties size={50} />
              <div>
                <CardTitle>AI Forms ✨</CardTitle>
                <CardDescription>
                  Create full fledged forms within seconds with AI.
                </CardDescription>
              </div>
            </CardHeader>
            <CardContent>
              <Button asChild size={"sm"}>
                <Link href="/dashboard/forms">
                  Create
                  <ArrowRight size={18} />
                </Link>
              </Button>
            </CardContent>
          </Card>
          <Card className="hover:-translate-y-1 shadow hover:shadow-blue-500/40 hover:shadow-md duration-500 transition-all border border-violet-500">
            <CardHeader className="flex gap-4">
              <FileHeart size={50} />
              <div>
                <CardTitle>AI Resume ✨</CardTitle>
                <CardDescription>
                  Create your resume with our easy-to-use AI resume builder.
                </CardDescription>
              </div>
            </CardHeader>
            <CardContent>
              <Button asChild size={"sm"}>
                <Link href="/dashboard/resume">
                  Create
                  <ArrowRight size={18} />
                </Link>
              </Button>
            </CardContent>
          </Card>
          <Card className="hover:-translate-y-1 shadow hover:shadow-blue-500/40 hover:shadow-md duration-500 transition-all border border-blue-500">
            <CardHeader className="flex gap-4">
              <BotMessageSquare size={50} />
              <div>
                <CardTitle>AI Chatbot ✨</CardTitle>
                <CardDescription>
                  Talk , discuss and get help from AI Chatbot.
                </CardDescription>
              </div>
            </CardHeader>
            <CardContent>
              <Button size={"sm"} asChild>
                <Link href="/dashboard/chatbot">
                  Chat <ArrowRight size={18} />
                </Link>
              </Button>
            </CardContent>
          </Card>
          <Card className="hover:-translate-y-1 shadow hover:shadow-blue-500/40 hover:shadow-md duration-500 transition-all border border-violet-500">
            <CardHeader className="flex gap-4">
              <MailPlus size={50} />
              <div>
                <CardTitle>AI Emailer ✨</CardTitle>
                <CardDescription>
                  Send Emails to multiple persons with AI generated content.
                </CardDescription>
              </div>
            </CardHeader>
            <CardContent>
              <Button asChild size={"sm"}>
                <Link href="/dashboard/emailer">
                  Create
                  <ArrowRight size={18} />
                </Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="hover:-translate-y-1 shadow hover:shadow-blue-500/40 hover:shadow-md duration-500 transition-all border border-violet-500">
            <CardHeader className="flex gap-4">
              <LinkedIn className="size-10" />
              <div>
                <CardTitle>Top LinkedIn Search ✨</CardTitle>
                <CardDescription>
                  Send Emails to multiple persons with AI generated content.
                </CardDescription>
              </div>
            </CardHeader>
            <CardContent>
              <Button asChild size={"sm"}>
                <Link href="/dashboard/toplinkedin">
                  Create
                  <ArrowRight size={18} />
                </Link>
              </Button>
            </CardContent>
          </Card>
          <Card className="hover:-translate-y-1 shadow hover:shadow-blue-500/40 hover:shadow-md duration-500 transition-all border border-violet-500">
            <CardHeader className="flex gap-4">
              <FileUser className="size-10" />
              <div>
                <CardTitle>AI Resume Analyser ✨</CardTitle>
                <CardDescription>
                  Analyze your resume with ATS Score.
                </CardDescription>
              </div>
            </CardHeader>
            <CardContent>
              <Button asChild size={"sm"}>
                <Link href="/dashboard/pages">
                  Create
                  <ArrowRight size={18} />
                </Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="hover:-translate-y-1 shadow hover:shadow-blue-500/40 hover:shadow-md duration-500 transition-all border border-violet-500">
            <CardHeader className="flex gap-4">
              <Code className="size-10" />
              <div>
                <CardTitle>Code Converter</CardTitle>
                <CardDescription>
                  Convert your code to other languages.
                </CardDescription>
              </div>
            </CardHeader>
            <CardContent>
              <Button asChild size={"sm"}>
                <Link href="/dashboard/code-converter">
                  Create
                  <ArrowRight size={18} />
                </Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="hover:-translate-y-1 shadow hover:shadow-blue-500/40 hover:shadow-md duration-500 transition-all border border-violet-500">
            <CardHeader className="flex gap-4">
              <Code className="size-10" />
              <div>
                <CardTitle>Voice To Text Converter</CardTitle>
                <CardDescription>
                  Convert your code to other languages.
                </CardDescription>
              </div>
            </CardHeader>
            <CardContent>
              <Button asChild size={"sm"}>
                <Link href="/dashboard/speech">
                  Create
                  <ArrowRight size={18} />
                </Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="hover:-translate-y-1 shadow hover:shadow-blue-500/40 hover:shadow-md duration-500 transition-all border border-violet-500">
            <CardHeader className="flex gap-4">
              <Code className="size-10" />
              <div>
                <CardTitle>Text Summary</CardTitle>
                <CardDescription>
                  Convert your code to other languages.
                </CardDescription>
              </div>
            </CardHeader>
            <CardContent>
              <Button asChild size={"sm"}>
                <Link href="/dashboard/summary">
                  Create
                  <ArrowRight size={18} />
                </Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="hover:-translate-y-1 shadow hover:shadow-blue-500/40 hover:shadow-md duration-500 transition-all border border-violet-500">
            <CardHeader className="flex gap-4">
              <Code className="size-10" />
              <div>
                <CardTitle>Pdf to text</CardTitle>
                <CardDescription>
                  Convert your code to other languages.
                </CardDescription>
              </div>
            </CardHeader>
            <CardContent>
              <Button asChild size={"sm"}>
                <Link href="/dashboard/pdf-parse">
                  Create
                  <ArrowRight size={18} />
                </Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="hover:-translate-y-1 shadow hover:shadow-blue-500/40 hover:shadow-md duration-500 transition-all border border-violet-500">
            <CardHeader className="flex gap-4">
              <Code className="size-10" />
              <div>
                <CardTitle>Image to text</CardTitle>
                <CardDescription>
                  Convert your code to other languages.
                </CardDescription>
              </div>
            </CardHeader>
            <CardContent>
              <Button asChild size={"sm"}>
                <Link href="/dashboard/imgtxt">
                  Create
                  <ArrowRight size={18} />
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>
        <div className="flex flex-col">
          <h2 className="text-2xl md:text-3xl font-semibold py-2 text-white">
            Trending Tools :
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 py-10 mb-12">
            {/* @ts-expect-error */}
            {Templates.slice(0, 8).map((item: TEMPLATE, index) => (
              <TemplateCard {...item} key={index} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
