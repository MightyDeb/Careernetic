import React from 'react'
import { getJobInsight, getNewsInsight } from '../../../../actions/news'
import NewsSection from './_components/NewsSection';
import { db } from "@/lib/prisma";
  import { auth } from "@clerk/nextjs/server";
import JobSection from './_components/JobSection';

const News = async () => {
  
  
  
  
    const {userId}= await auth()
    const user= await db.user.findUnique({
      where:{
        clerkUserId: userId,
      }
    })
    
      
  const data= await getNewsInsight();
  const data2= await getJobInsight(user.industry)

  
  return (
    <div className='flex flex-col'>
      <div><h1 className="text-2xl font-bold mb-4">Hot News</h1></div>
      <NewsSection data={data}/>
      <br/>
      <br/>
      <div><h1 className="text-2xl font-bold mb-4">Job Vacancies</h1></div>
      <JobSection data={data2}/>
    </div>
  )
}

export default News