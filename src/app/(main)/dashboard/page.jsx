import { redirect } from 'next/navigation'
import React from 'react'
import { getUserOnboardingStatus } from '../../../../actions/user'

const IndustryInsightsPage = async() => {
  const {isOnboarded}=await getUserOnboardingStatus()
    if(!isOnboarded){
      redirect("/onboarding")
    }
  return (
    <div> IndustryInsightsPage</div>
  )
}

export default IndustryInsightsPage