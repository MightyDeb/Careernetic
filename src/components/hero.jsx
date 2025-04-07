"use client";
import React, { useEffect, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'

const HeroSection = () => {
  const imageRef= useRef(null)
  useEffect(()=>{
    const imageElement= imageRef.current;
    const handleScroll=()=>{
      const scrollPosition= window.scrollY
      const scrollThreshold= 100
      if(scrollPosition>scrollThreshold){
        imageElement.classList.add("scrolled");
      }else{
        imageElement.classList.remove("scrolled");
      }
    }
    window.addEventListener("scroll", handleScroll)
    return ()=> window.removeEventListener("scroll", handleScroll)
  })
  return (
    <section className='w-full pt-36 md:pt-48 pb-10'>
      <div className="space-y-6 text-center">
        <div className="space-y-6 mx-auto">
          <h1 className="text-5xl font-bold md:text-6xl lg:text-7xl xl:text-8xl gradient-title animate-gradient hero">
            Your AI Career Coach
            <br/>
            Professional Success
          </h1>
          <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl hover:scale-105">
          "Advance your career with personalized guidance, interview prep, and
          AI-powered tools for job success."
          </p>
        </div>
        <div className='flex justify-center '>
          <Link href={'/dashboard'}>
          <button className="btn cube cube-hover" type="button">
            <div className="bg-top">
              <div className="bg-inner"></div>
            </div>
            <div className="bg-right">
              <div className="bg-inner"></div>
            </div>
            <div className="bg">
              <div className="bg-inner"></div>
            </div>
            <div className="text">Get Started</div>
          </button>
          </Link>
        </div>
        <div className="hero-image-wrapper mt-5 md:mt-0">
          <div ref={imageRef} className='hero-image'>
            <Image src={"/hero.gif"}
              width={1280}
              height={720}
              alt="Banner Careernetic"
              className="rounded-lg shadow-2xl border mx-auto"
              priority>
            </Image>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection