import React from 'react'

const JobSection = ({data}) => {
  return (
    <div className=" bg-gray-100 p-6">
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 rounded-lg">
            {data.map((job, index) => (
                <div key={index} className="bg-black rounded-2xl shadow-md p-4 hover:translate-y-3">
                    <h3 className="text-lg font-semibold text-gradient">{job.title}</h3>
                    <p className="text-yellow-300">{job.company.display_name}</p>
                    <p className="text-gray-400">{job.location.display_name}</p>
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