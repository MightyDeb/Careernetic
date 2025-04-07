import { auth } from "@clerk/nextjs/server";
import ChatBot from "./_constants/ATSbot";
import { db } from "@/lib/prisma";



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
        <div className="min-h-screen flex flex-col items-center justify-center">
            <h1 className="text-[#d4af37] text-4xl font-bold">
                CAREER AI
            </h1>
            <ChatBot data={data}/>
        </div>
    );
}
