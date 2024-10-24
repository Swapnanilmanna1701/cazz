// Make sure to include these imports:
import { GoogleGenerativeAI } from "@google/generative-ai";
//import { StreamingTextResponse, streamText } from "ai";
const genAI = new GoogleGenerativeAI(process.env.NEXT_PUBLIC_GEMINI_API_KEY as string);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

export const dynamic = "force-dynamic";
const prompt = "You are a proffessional job counsellor and psychologist who talks in light and casual way , always ready to help poeple in need of job and career advice, mental health ,etc.";



export async function POST() {
    try {
      //const { messages } = await req.json();
  
      const result = await model.generateContent(prompt);
console.log(result.response.text());

    } catch (error) {
      console.log(error);
      throw error;
    }
  }