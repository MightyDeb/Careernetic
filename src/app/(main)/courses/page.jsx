
import React from 'react'
import { db } from "@/lib/prisma";
import { auth } from "@clerk/nextjs/server";
import { generateCourseInsights } from '../../../../actions/courses';
import CoursesList from './_components/Courses';

const Courses = async () => {
  const {userId}= await auth()
  const user= await db.user.findUnique({
    where:{
      clerkUserId: userId,
    }
  })
  const data= await generateCourseInsights(user.industry)
  return (
    <div>
      <CoursesList data={data} />
    </div>
  )
}

export default Courses