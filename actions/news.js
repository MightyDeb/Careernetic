"use server"

const API_KEY = process.env.NEWS_API_KEY;
const ADZUNA_API= process.env.ADZUNA_API_KEY;
const ADZUNA_ID= process.env.ADZUNA_API_ID;

export async function getNewsInsight(){
  const url = `https://newsapi.org/v2/everything?q=AI OR finance OR stock OR tech&sources=bbc-news,the-verge&domains=bbc.co.uk,techcrunch.com&language=en&sortBy=relevancy&page=2&apiKey=${API_KEY}`;
  const res= await fetch(url)
  const data = await res.json();
  if (data.status !== "ok") {
    throw new Error(data.message || "Failed to fetch news");
  } 
  return data.articles || [];
}

export async function getJobInsight(JOB_QUERY='software-dev'){


  const response = await fetch(
    `https://api.adzuna.com/v1/api/jobs/us/search/1?app_id=${ADZUNA_ID}&app_key=${ADZUNA_API}&results_per_page=10&what=${JOB_QUERY}&content-type=application/json`
  );
  const data = await response.json();
  
  return data.results || [];
}
