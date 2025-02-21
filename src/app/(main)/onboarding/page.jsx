import { industries } from '@/data/industries'
import React from 'react'

const page = () => {
  //
  return (
    <main>
      <OnboardingForm industries={industries}/>
    </main>
  )
}

export default page