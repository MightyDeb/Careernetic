import { auth } from "@clerk/nextjs/server";
import ChatBot from "./_constants/Chatbot";
import { db } from "@/lib/prisma";
import { getJobInsight } from "../../../../actions/news";


export default async function ChatPage() {
     const {userId}= await auth()
        const user= await db.user.findUnique({
          where:{
            clerkUserId: userId,
          }
        })
        const data= user.industry
        console.log(data)
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
            <ChatBot data={data}/>
        </div>
    );
}
