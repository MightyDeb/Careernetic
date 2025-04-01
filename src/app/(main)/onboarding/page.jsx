import { industries } from '@/data/industries'
import React from 'react'
import { getUserOnboardingStatus } from '../../../../actions/user'
import { redirect } from 'next/navigation'
import OnboardingForm from './_components/onboarding-form'

const page = async() => {
  // const {isOnboarded}=await getUserOnboardingStatus()
  // if(isOnboarded){
  //   redirect("/dashboard")
  // }
  return (
    <main>
      <OnboardingForm industries={industries}/>
    </main>
  )
}

export default page