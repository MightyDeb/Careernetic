'use client'
import React, { useState } from 'react'
import { addCourse } from '../../../../../actions/courses';


const CoursesList = ({data}) => {
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [selectedCourseData,setSelectedCourseData]= useState(null) // Store selected course
    const [showDialog, setShowDialog] = useState(false);
    const [f,setF]=useState(1);
    const handleBuyClick = async(course) => {
      
       setF(0);
      
      
        try{
          const courseData={
            title: course.title,
            description: course.description,
            level: course.level,
            duration: course.duration,
            topics: course.topics,
          }
          const res= await addCourse(courseData)
          setSelectedCourseData(res)
        }catch(error){
          console.log(error);
        }
        
      
  };

  return (
    <div className=" flex flex-col gap-6 items-center">
      <h1 className='text-3xl font-bold mb-4 text-[#d4af37]'>AVAILABLE COURSES</h1>
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {data.map(
                (course, index) =>
                  (
                    <div key={index} className="max-w-sm mx-auto bg-white shadow-lg rounded-lg p-6 border">
                      
      <h2 className="text-xl font-bold text-gray-800">{course.title}</h2>
      <p className="text-gray-600 mt-2">{course.description}</p>
      <p className="text-gray-700 mt-2"><strong>Level:</strong> {course.level}</p>
      <p className="text-gray-700"><strong>Duration:</strong> {course.duration} days</p>
     
      <div className="mt-3">
        <h3 className="font-semibold text-gray-800">Topics Covered:</h3>
        <ul className="list-disc list-inside text-gray-600">
          {course.topics.map((topic, index) => (
            <li key={index}>{topic}</li>
          ))}
        </ul>
      </div>
      <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded w-full hover:bg-blue-600 hover:scale-105" onClick={() =>{
        setShowDialog(true)
        setSelectedCourse(course)
      } }>View Now</button>
    </div>
                  )
              )}
            </div>
            {showDialog && (
                <div className="fixed inset-0 flex justify-center  bg-black bg-opacity-50 overflow-y-auto items-center py-8">
                    <div className="bg-white p-6 rounded-lg shadow-lg w-96">
                        {f && (<div><h2 className="text-lg font-semibold text-black">Confirm View</h2>
                        <p className="mt-2 text-black">Do you want to view <b>{selectedCourse?.title}</b> ?</p>
                        <div className="mt-4 flex justify-end">
                            <button
                                className="bg-gray-400 text-white px-4 py-2 rounded-lg mr-2 hover:bg-gray-500"
                                onClick={() => setShowDialog(false)}
                            >
                                Cancel
                            </button>
                            
                            <button
                                className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600"
                                onClick={()=>handleBuyClick(selectedCourse)}
                            >
                                Confirm
                            </button>
                        </div></div>)}
                        {!f && (
                          <div>
                            <h1 className='text-black font-bold text-2xl mb-3'>COURSE OVERVIEW</h1>
                            <div className='space-y-6 max-h-[60vh] overflow-y-auto pr-2'>
                            {
                              selectedCourseData && selectedCourseData.map((d,i)=>{
                                  return(
                                    <div className='text-black' key={i}>
                                      <h1 className='text-xl underline'>{i+1}. {d.heading}</h1>
                                      <p className='text-gray-500'>{d.introduction}</p>
                                      <a href={d.link} target='_blank' className='text-green-500 underline hover:font-bold hover:text-lg'>Browse</a>
                                      </div>
                                  )
                              }
                            )}</div>
                            <button
                                className="bg-gray-400 text-white px-4 py-2 rounded-lg mr-2 mt-5 hover:bg-gray-500"
                                onClick={() => {
                                  setShowDialog(false) 
                                  setF(1)
                                }
                              }
                            >
                                Close
                            </button>
                            </div>
                        )}
                    </div>
                </div>
            )}
        </div>
  )
}

export default CoursesList