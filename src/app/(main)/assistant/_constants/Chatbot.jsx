'use client'

// ATSResumeUpload.jsx
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
      // Convert file to base64 or plain text to send to Gemini
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

      reader.readAsText(file); // You can also parse PDF with pdf.js if needed
    } catch (error) {
      console.error("Error uploading file:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6 rounded-xl shadow-md bg-white max-w-md mx-auto mt-10 text-black">
      <h1 className="text-xl text-black font-bold mb-4">Upload Your Resume</h1>
      <input type="file" onChange={handleFileChange} className="mb-4" />
      <button
        onClick={handleUpload}
        disabled={!file || loading}
        className="bg-blue-600 text-black px-4 py-2 rounded"
      >
        {loading ? "Analyzing..." : "Analyze Resume"}
      </button>

      {result && (
        <div className="mt-6 whitespace-pre-wrap bg-gray-100 p-4 rounded">
          <progress value={parseInt(result[0]+result[1])} max="100"></progress>
          <h2 className="font-semibold mb-2">Extracted Info:</h2>
          {result}
        </div>
      )}
    </div>
  );
};

export default ATSResumeUpload;
