"use server";

import { generateObject } from "ai";
import { z } from "zod";
import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.NEXT_PUBLIC_GEMINI_API_KEY as string);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
export async function generateQuestions(inputPrompt: string) {
  console.log(inputPrompt);
  const {
    object: { questions },
  } = await generateObject({
    model: model.("mixtral-8x7b-32768"),
    schema: z.object({
      questions: z.array(
        z.object({
          question: z.string(),
          answer: z.string(),
        })
      ),
    }),
    prompt: inputPrompt,
  });
  return questions;
}

// console.log(
//   generateQuestions(
//     "job position- junior dev intern, Job Description- react, js, html, css, Years of Experience - 1 , Depending on Job Position, Job Description & Years of Experience give us minimum Interview question along with answer"
//   ).then((questions) => {
//     console.log(questions);
//   })
// );
export default generateQuestions;