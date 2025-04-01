import React from 'react'

const JobSection = ({data}) => {
  return (
    <div className=" bg-gray-100 p-6">
      
            

            
                <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {data.map((job, index) => (
                        <div key={index} className="bg-white rounded-2xl shadow-md p-4 hover:shadow-lg">
                            <h3 className="text-lg font-semibold text-gray-900">{job.title}</h3>
                            <p className="text-gray-700">{job.company.display_name}</p>
                            <p className="text-gray-500">{job.location.display_name}</p>
                            <a
                                href={job.redirect_url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-600 font-semibold mt-2 inline-block"
                            >
                                View Job
                            </a>
                        </div>
                    ))}
                </div>
            
        </div>
  )
}

export default JobSection