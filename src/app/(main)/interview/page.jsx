import React from 'react'
import { getAssessments } from '../../../../actions/interview';
import StatsCards from './_components/stats-cards';
import PerformanceChart from './_components/performance-chart';
import QuizList from './_components/quiz-list';

const InterviewPage = async() => {
  const {isOnboarded}=await getUserOnboardingStatus()
    if(!isOnboarded){
      redirect("/onboarding")
    }
  const assessments = await getAssessments();
  return (
    <div>
      <div className="flex items-center justify-between mb-5">
        <h1 className="text-6xl font-bold gradient-title">
          Interview Preparation
        </h1>
      </div>
      <div className="space-y-6">
        <StatsCards assessments={assessments} /> 
        <PerformanceChart assessments={assessments} />
        <QuizList assessments={assessments} />
      </div>
    </div>
  )
}

export default InterviewPage