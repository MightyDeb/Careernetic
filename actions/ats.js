// pages/api/gemini.js
"use server"

import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI= new GoogleGenerativeAI(process.env.GEMINI_API_KEY)
const model= genAI.getGenerativeModel({
  model: "gemini-1.5-flash",
})

export default async function ATShandler({prompt}) {
    try {
      const result = await model.generateContent(prompt);
      
      const improvedResponse= result.response.text().trim()
      return improvedResponse;
    } catch (err) {
      console.error(err);
      throw new Error("ATS Not working",err.message)      
    }
  
}
