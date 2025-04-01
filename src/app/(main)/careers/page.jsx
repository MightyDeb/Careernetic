

import { redirect } from 'next/navigation'
import React from 'react'
import { getUserOnboardingStatus } from '../../../../actions/user'
import { getIndustryInsights } from '../../../../actions/dashboard'
import DashboardView from '../dashboard/_components/dashboard-view'
import CareerForm from './_components/career-form';
import { industries } from '@/data/industries';



const CareersPage = async() => {
  const {isOnboarded}=await getUserOnboardingStatus()
  if(!isOnboarded){
    redirect("/onboarding")
  }
    
  return (
    <div className='container mx-auto'>
      <CareerForm industries={industries}/>
    </div>
  )
}

export default CareersPage