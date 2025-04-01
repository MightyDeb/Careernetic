'use client';
import React, { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Label } from '@/components/ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Button } from '@/components/ui/button'
import { getIndustryInsight } from '../../../../../actions/dashboard';
import DashboardView from '../../dashboard/_components/dashboard-view';


const CareerForm = ({industries}) => {
  const [industry,setIndustry]= useState("")
  const [subIndustry,setSubIndustry]= useState("")
  const [selectedIndustry, setSelectedIndustry]= useState(null)
  const [insights,setInsights]= useState(null)
  const onSubmit = async()=>{
    try {
      const formattedIndustry= `${industry}-${subIndustry.toLowerCase().replace(/ /g, "-")}`
      if(industry && subIndustry){
        const insight= await getIndustryInsight(formattedIndustry)
        setInsights(insight);
      }
    } catch (error) {
      console.error("Onboarding error: ", error)
    }
  }
  return (
    <div className='container mx-auto'>
    <div className="flex items-center justify-center bg-background">
      <Card className="w-full max-w-lg mt-10 mx-2">
        <CardHeader>
          <CardTitle className="gradient-title text-4xl">
            Your Interested Domain
          </CardTitle>
          <CardDescription>Select your industry to get personalized career insights and
            recommendations. </CardDescription>
        </CardHeader>
        <CardContent>
          
            <div className="space-y-2">
              <Label htmlFor="industry">Industry</Label>
              <Select onValueChange={(value) => {
                  setIndustry(value);
                  setSelectedIndustry(
                    industries.find((ind) => ind.id === value)
                  );
                  setSubIndustry("");
                }}>
                <SelectTrigger id="industry">
                  <SelectValue placeholder="Select an industry" />
                </SelectTrigger>
                <SelectContent>
                  {industries.map((ind)=>{
                    return <SelectItem value={ind.id} key={ind.id}>{ind.name}</SelectItem>
                  })}
                </SelectContent>
              </Select>
              
            </div>
            {industry &&                     <div className="space-y-2">
              <Label htmlFor="subIndustry">Specialization</Label>
              <Select onValueChange={(value) => {
                  setSubIndustry(value);
                }}>
                <SelectTrigger id="subIndustry">
                  <SelectValue placeholder="Select an subindustry" />
                </SelectTrigger>
                <SelectContent>
                  {selectedIndustry?.subIndustries.map((ind)=>{
                    return <SelectItem value={ind} key={ind}>{ind}</SelectItem>
                  })}
                </SelectContent>
              </Select>
              
            </div>}
            <Button className="w-full mt-3" onClick={onSubmit}>
              
                
                Search
                
             
            </Button>
          
        </CardContent>
      </Card>
    </div>
    <div className='mt-5'>
    {insights && <DashboardView insights={insights}/>}
    </div>
    </div>
  )
}

export default CareerForm