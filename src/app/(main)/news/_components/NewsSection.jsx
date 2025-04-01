'use client';

import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";



export default function NewsSection({data}) {
  const [rand,setRand]= useState(Math.floor(Math.random() * (data.length-9)));
  const changeRand=()=>{
    setRand(Math.floor(Math.random() * (data.length-9)))
  }

  return (
    <div className=" flex flex-col gap-6 items-center">
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {data.slice(rand,rand+9).map(
            (article, index) =>
              article.urlToImage && (
                <div
                  key={index}
                  className="bg-white rounded-2xl shadow-md overflow-hidden cursor-pointer transition-transform transform hover:scale-105 hover:shadow-lg"
                  onClick={() => window.open(article.url, "_blank")}
                >
                  <img
              src={article.urlToImage}
              alt={article.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-900">{article.title}</h3>
              <p className="text-sm text-gray-500 mt-1">
                {article.source.name} · {new Date(article.publishedAt).toLocaleString()}
              </p>
              <p className="text-gray-700 mt-2">{article.description}</p>
            </div>
                </div>
              )
          )}
        </div>
        <Button onClick={changeRand} className="w-fit">Refetch News</Button>
    </div>
  );
}