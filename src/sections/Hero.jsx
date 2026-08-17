import React, { useEffect } from 'react'
import heroimg from '../assets/hero.webp'
import AOS from 'aos'
import 'aos/dist/aos.css'


const Hero = () => {

    useEffect(() => {
    AOS.init({
        duration: 800,
        delay: 200,
        once: false
    })
}, [])


  return (

    <div id='hero' className='relative w-full lg:h-screen py-30 h-auto bg-cover bg-center z-20' style={{backgroundImage: `url(${heroimg})` }}> 
        <div className='absolute inset-0 bg-black/40'></div>

        <div className='relative h-ful w-full flex flex-col items-center justify-center gap-6 z-10 px-6'>
            <h1 data-aos="zoom-in" data-aos-dely="100" className='text-white capitalize text-bold lg:text-6xl text-4xl text-center font-fahkwang  font-bold px-6' >explore every beautiful <br />destination</h1>
            <p data-aos="zoom-in" data-aos-dely="200" className='text-white text-md text-center w-full lg:w-[50%]'>Lorem ipsum dolor, adipisicing elit. Deleniti sit amet consectetur adipisicing elit. Deleniti reiciendis repellendus suscipit totam possimus reprehenderit ipsam laboriosam? </p>
            <button data-aos="zoom-in" data-aos-dely="300" className='bg-orange-600 mt-5 text-semibold px-5 py-3 capitalize text-white border rounded active:scale-95 cursor-pointer ' >book now</button>
        </div>
        
    </div>
  )
}

export default Hero