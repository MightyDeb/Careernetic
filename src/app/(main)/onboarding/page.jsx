import { industries } from '@/data/industries'
import React from 'react'
import OnboardingForm from './_components/onboarding-form'

const page = async() => {
  return (
    <main>
      <OnboardingForm industries={industries}/>
    </main>
  )
}

export default page