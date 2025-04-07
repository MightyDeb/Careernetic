'use client'

import React, { useState } from "react";
import ATShandler from "../../../../../actions/ats";

const ATSResumeUpload = ({data}) => {
  const [file, setFile] = useState(null);
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };
  const handleUpload = async () => {
    if (!file) return;
    setLoading(true);
    try {
      const reader = new FileReader();
      reader.onload = async () => {
        const fileContent = reader.result;
        console.log(fileContent)
        const prompt = `
You are an skilled ATS (Applicant Tracking System) scanner with a deep understanding of data science, ${data}, Data Analyst and deep ATS functionality, 
your task is to evaluate the resume based on recent market trends of ${data}. give me the percentage of match if the resume fits with the job profile of ${data}. First the output should come as percentage and then keywords missing and last final thoughts.  Please share your professional evaluation on whether the candidate's profile aligns with the role. Highlight the strengths and weaknesses of the applicant in relation to the specified job requirements of software.
Resume Content:
${fileContent}
Format the response as a single paragraph without any additional text or explanations.
        `;
        const res = await ATShandler({prompt})        
        setResult(res);
      };
      reader.readAsText(file); 
    } catch (error) {
      console.error("Error uploading file:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-4 sm:p-6 rounded-xl shadow-md w-full max-w-xl mx-auto mt-10 border-white border-2 bg-gray-200">
      <h1 className="text-2xl sm:text-3xl font-bold mb-6 text-center text-black">Upload Your Resume</h1>
      <div className="flex flex-col gap-4 items-center">
      <input type="file" onChange={handleFileChange} className="mb-4 p-3 text-gray-700 block w-full text-sm  border border-gray-300 rounded-lg cursor-pointer bg-gray-50 focus:outline-none" />
      <button
        onClick={handleUpload}
        disabled={!file || loading}
        className="bg-blue-600 text-gradient px-4 py-2 rounded hover:scale-110 hover:translate-y-1 font-sans text-lg"
      >
        {loading ? "Analyzing..." : "Analyze Resume"}
      </button>

      {result && (
        <div className="mt-6 whitespace-pre-wrap bg-gray-100 p-4 rounded-lg">
          <div className="w-full bg-gray-200 rounded-full h-4 dark:bg-gray-700">
          <div
            className="bg-blue-600 h-4 rounded-full transition-all duration-300"
            style={{ width: `${parseInt(result[0]+result[1])}%` }}
          />
        </div>
          
          <h2 className="font-semibold mb-2">Extracted Info:</h2>
          <p className="text-black">{result}</p>
          <div className="rating">
            <input type="radio" id="star-1" name="star-radio" value="star-1"/>
              <label htmlFor="star-1">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path pathLength="360" d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z"></path></svg>
              </label>
              <input type="radio" id="star-2" name="star-radio" value="star-1"/>
              <label htmlFor="star-2">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path pathLength="360" d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z"></path></svg>
              </label>
              <input type="radio" id="star-3" name="star-radio" value="star-1"/>
              <label htmlFor="star-3">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path pathLength="360" d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z"></path></svg>
              </label>
              <input type="radio" id="star-4" name="star-radio" value="star-1"/>
              <label htmlFor="star-4">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path pathLength="360" d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z"></path></svg>
              </label>
              <input type="radio" id="star-5" name="star-radio" value="star-1"/>
              <label htmlFor="star-5">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path pathLength="360" d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z"></path></svg>
              </label>
            </div>
        </div>
      )}
      </div>
    </div>
  );
};

export default ATSResumeUpload;
