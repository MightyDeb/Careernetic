"use server"


import { db } from "@/lib/prisma"
import { auth } from "@clerk/nextjs/server"
import { GoogleGenerativeAI } from "@google/generative-ai"
import { revalidatePath } from "next/cache"

const genAI= new GoogleGenerativeAI(process.env.GEMINI_API_KEY)
const model= genAI.getGenerativeModel({
  model: "gemini-1.5-flash",
})

export const generateCourseInsights= async(industry)=>{
  if (industry) {
    
  
  const prompt = `
          Analyze the current state of the ${industry} industry and design nine educational courses in ONLY the following Array of JSON format without any additional notes or explanations:
          {
            "title": string,
            "description": string,
            "popularityRate": number,
            "level": "Beginner" | "Intermediate" | "Advanced",
            "duration": number,
            "price": number
            "topics": ["skill1", "skill2"],
            "recommendedSkills": ["skill1", "skill2"]
          }
          
          IMPORTANT: Return ONLY the Array of JSON. No additional text, notes, or markdown formatting.
          There should be nine array elements.
          Popularity rate should be in percentage.
          Duration should be in days.
          Price should be in indian rupees.
          Include at least 5 skills.
        `;

  const result = await model.generateContent(prompt);
  const response = result.response;
  const text = response.text();
  const cleanedText = text.replace(/```(?:json)?\n?/g, "").trim();
    
  return JSON.parse(cleanedText);
  }
}

export const addCourse= async(course)=>{
  if(course){
    const prompt = `
          Generate a course on ${course.title} and the course description being ${course.description}. Suggest related topics to study and create a proper flow for ${course.level} level of students ONLY the following Array of JSON format without any additional notes or explanations:
          {
            "heading": string,
            "introduction": string,
            "link": string
          }
            IMPORTANT: Return ONLY the Array of JSON. No additional text, notes, or markdown formatting.
          There should be atleast four array elements, each array showing the levels in which you should proceed with the course. 
          The heading should contain a catchy caption describing about the level. 
          The introduction is a short paragraph of 15-20 words about the heading and relevant topics. The link should consist of a weblink that has vast information about the heading.         
        `;
        const result = await model.generateContent(prompt);
  const response = result.response;
  
  const text = response.text();
  console.log(text);
  const cleanedText = text.replace(/```(?:json)?\n?/g, "").trim();
    
  return JSON.parse(cleanedText);
  }
}



